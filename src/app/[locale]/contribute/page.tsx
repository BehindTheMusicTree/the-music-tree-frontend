import type { Metadata } from "next";
import { ContributePageContent } from "@/components/ContributePageContent";
import { pageMetadata } from "@/i18n/page-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/contribute");
}

function ContributePage() {
  return <ContributePageContent />;
}

export default ContributePage;
