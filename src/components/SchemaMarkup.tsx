const BASE_URL = "https://honeypotmedia.com";

const localBusiness = {
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#business`,
  name: "Honey Pot Media",
  description:
    "Boutique social media management and content creation studio specializing in lifestyle brands in Tampa, FL.",
  url: BASE_URL,
  email: "hello@honeypotmediafl.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tampa",
    addressRegion: "FL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.9506,
    longitude: -82.4572,
  },
  areaServed: {
    "@type": "City",
    name: "Tampa",
  },
  priceRange: "$$",
  image: `${BASE_URL}/og-image.png`,
  sameAs: ["https://www.instagram.com/honeypot.media/"],
};

function breadcrumb(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function service(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#business`,
      name: "Honey Pot Media",
    },
    areaServed: {
      "@type": "City",
      name: "Tampa",
    },
  };
}

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          ...localBusiness,
        }),
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumb(items)),
      }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(service(name, description)),
      }}
    />
  );
}
