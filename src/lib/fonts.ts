import { Kanit } from "next/font/google";

// Shared so the landing and contact pages load a single Kanit instance
export const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
