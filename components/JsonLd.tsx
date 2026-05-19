export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "63° Modern Regional Buffet",
    alternateName: "63Buffet",
    description:
      "Hyderabad's ultimate modern regional buffet offering 250+ dishes including biryanis, live counters, and desserts at Gachibowli.",
    url: "https://63degrees.in",
    telephone: "+919733386333",
    servesCuisine: ["Indian", "Regional", "Andhra", "Chinese", "Continental"],
    image: "https://63degrees.in/og-image.png",
    logo: "https://63degrees.in/logo-site.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "28, 2nd Floor, Plot No: 25, Mindspace Rd, opposite Meenakshi Bamboos Road",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500081",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.4435,
      longitude: 78.3665,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "12:00",
        closes: "15:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "19:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "12:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "19:00",
        closes: "23:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "16:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "19:00",
        closes: "23:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      ratingCount: "2320",
    },
    priceRange: "₹₹",
    acceptsReservations: "Yes",
    hasMenu: "https://63degrees.in/menu",
    sameAs: [
      "https://www.instagram.com/63degreeshyd/",
      "https://www.facebook.com/63degreeshyd",
    ],
    founder: {
      "@type": "Organization",
      name: "White Elephant Food Works",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
