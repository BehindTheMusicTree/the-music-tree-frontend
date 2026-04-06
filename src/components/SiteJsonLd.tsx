import { GITHUB_ORG_PROFILE_URL } from "@/constants/github-org";
import { getSiteOrigin } from "@/lib/site-origin";

/** Organization + WebSite structured data for the canonical origin. */
export function SiteJsonLd() {
  const origin = getSiteOrigin();
  const orgId = `${origin}/#organization`;
  const websiteId = `${origin}/#website`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "BehindTheMusicTree",
        alternateName: "TheMusicTree",
        url: origin,
        sameAs: [GITHUB_ORG_PROFILE_URL],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: "TheMusicTree",
        url: origin,
        publisher: { "@id": orgId },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
