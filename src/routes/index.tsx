import { createFileRoute } from "@tanstack/react-router";
import { WeddingInvitation } from "@/components/WeddingInvitation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Randini & Malaka — Our Wedding" },
      { name: "description", content: "Together with their families, Randini and Malaka invite you to celebrate their wedding in Kegalle on 3 December 2026." },
      { property: "og:title", content: "Randini & Malaka — Our Wedding" },
      { property: "og:description", content: "Join us in Kegalle on 3 December 2026 for our wedding celebration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <WeddingInvitation />;
}
