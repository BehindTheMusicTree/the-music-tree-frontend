import type { Metadata } from "next";
import { ContributePageContent } from "@/components/ContributePageContent";

const contributeDescription =
  "How to contribute to TheMusicTree: report bugs, share ideas, write code, improve docs, and collaborate respectfully across the open-source ecosystem.";

export const metadata: Metadata = {
  title: "Contribute",
  description: contributeDescription,
  alternates: { canonical: "/contribute" },
  openGraph: {
    title: "Contribute",
    description: contributeDescription,
    url: "/contribute",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contribute",
    description: contributeDescription,
  },
};

function ContributePage() {
  return <ContributePageContent />;
}

export default ContributePage;
