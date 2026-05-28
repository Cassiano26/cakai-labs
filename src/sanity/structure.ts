import type { StructureBuilder } from "sanity/structure";

const STATUSES = [
  { id: "new", title: "🆕 New" },
  { id: "read", title: "👀 Read" },
  { id: "archived", title: "✅ Archived" },
];

export function structure(S: StructureBuilder) {
  return S.list()
    .title("Cakai Labs")
    .items([
      S.listItem()
        .title("Contact Submissions")
        .child(
          S.list()
            .title("Contact Submissions")
            .items([
              S.listItem()
                .title("All Submissions")
                .child(
                  S.documentList()
                    .title("All Submissions")
                    .filter('_type == "contactSubmission"')
                    .defaultOrdering([{ field: "submittedAt", direction: "desc" }])
                ),
              S.divider(),
              ...STATUSES.map(({ id, title }) =>
                S.listItem()
                  .title(title)
                  .child(
                    S.documentList()
                      .title(title)
                      .filter('_type == "contactSubmission" && status == $status')
                      .params({ status: id })
                      .defaultOrdering([{ field: "submittedAt", direction: "desc" }])
                  )
              ),
            ])
        ),
    ]);
}
