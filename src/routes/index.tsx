import { createFileRoute } from "@tanstack/react-router";
import { WeddingInvitation } from "@/components/WeddingInvitation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amaya & Dilan — Our Wedding" },
      { name: "description", content: "Together with their families, Amaya and Dilan invite you to celebrate their wedding in Galle on 22 August 2027." },
      { property: "og:title", content: "Amaya & Dilan — Our Wedding" },
      { property: "og:description", content: "Join us in Galle on 22 August 2027 for our wedding celebration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <WeddingInvitation />;
}
