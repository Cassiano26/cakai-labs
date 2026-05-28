import { NextRequest, NextResponse } from "next/server";
import { getWriteClient } from "@/lib/sanity/client";

const PROJECT_ID = "cakai-labs";
const SITE_KEY = "6LeDLwEtAAAAAIbyl__32jIjlGoeaPjSvqPJ7udV";
const RECAPTCHA_API_KEY = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_MIN_SCORE = 0.5;

async function verifyRecaptchaToken(token: string): Promise<boolean> {
  try {
    const url = `https://recaptchaenterprise.googleapis.com/v1/projects/${PROJECT_ID}/assessments?key=${RECAPTCHA_API_KEY}`;

    console.log("[Recaptcha] Sending assessment request to REST API");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: {
          token,
          siteKey: SITE_KEY,
          expectedAction: "contact_form",
        },
      }),
    });

    const data = await res.json();
    console.log("[Recaptcha] Assessment response:", JSON.stringify(data, null, 2));

    if (!data?.tokenProperties?.valid) {
      console.warn("[Recaptcha] Token is invalid:", data?.tokenProperties?.invalidReason);
      return false;
    }

    const score = data?.riskAnalysis?.score ?? 0;
    console.log("[Recaptcha] Score:", score, "Threshold:", RECAPTCHA_MIN_SCORE);
    return score >= RECAPTCHA_MIN_SCORE;
  } catch (error) {
    console.error("[Recaptcha] Verification error:", error);
    if (error instanceof Error) {
      console.error("[Recaptcha] Error message:", error.message);
    }
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    console.log("[API] Contact form submission started");
    const body = await req.json();
    const {
      recaptchaToken,
      name,
      company,
      email,
      country,
      website,
      selectedServices,
      message,
      projectStage,
      timeline,
      budgetRange,
      aiEstimate,
    } = body;

    console.log("[API] Request body parsed:", { name, email, company, country });

    if (!recaptchaToken) {
      console.warn("[API] Missing reCAPTCHA token");
      return NextResponse.json({ error: "Missing reCAPTCHA token." }, { status: 400 });
    }

    console.log("[API] Verifying reCAPTCHA token...");
    const isValid = await verifyRecaptchaToken(recaptchaToken);
    console.log("[API] reCAPTCHA verification result:", isValid);

    if (!isValid) {
      console.warn("[API] reCAPTCHA verification failed");
      return NextResponse.json({ error: "reCAPTCHA verification failed." }, { status: 400 });
    }

    if (!email || !name) {
      console.warn("[API] Missing required fields: name or email");
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    console.log("[API] Creating Sanity document...");
    const result = await getWriteClient().create({
      _type: "contactSubmission",
      name: name || "",
      company: company || "",
      email,
      country: country || "",
      website: website || undefined,
      services: selectedServices || [],
      message: message || "",
      projectStage: projectStage || "",
      timeline: timeline || "",
      budgetRange: budgetRange || "",
      aiEstimate: aiEstimate || "",
      status: "new",
      submittedAt: new Date().toISOString(),
    });

    console.log("[API] Document created successfully:", result._id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[API] Error:", err);
    if (err instanceof Error) {
      console.error("[API] Error message:", err.message);
      console.error("[API] Error stack:", err.stack);
    }
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
