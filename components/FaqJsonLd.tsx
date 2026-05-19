const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is 63° Modern Regional Buffet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "63° is a premium buffet restaurant in Gachibowli, Hyderabad offering 250+ dishes across Indian, Chinese, Continental, and regional cuisines. Known as 'The Baap of Buffets in Hyderabad', we offer a grand dining experience with live counters, biryanis, desserts, and more — all under one roof.",
      },
    },
    {
      "@type": "Question",
      name: "Where is 63° located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "63° is located at 28, 2nd Floor, Plot No: 25, Mindspace Rd, opposite Meenakshi Bamboos Road, P Janardhan Reddy Nagar, Gachibowli, Hyderabad, Telangana 500081.",
      },
    },
    {
      "@type": "Question",
      name: "What are the buffet timings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weekdays (Mon-Fri): Lunch 12:00 PM – 3:30 PM, Dinner 7:00 PM – 11:00 PM. Saturday: Lunch 12:00 PM – 4:00 PM, Dinner 7:00 PM – 11:30 PM. Sunday: Lunch 12:00 PM – 4:30 PM, Dinner 7:00 PM – 11:00 PM.",
      },
    },
    {
      "@type": "Question",
      name: "What is the buffet price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veg Buffet: ₹749 + taxes. Non-Veg Buffet: ₹849 + taxes. Prices may vary on weekends, festivals, and special events.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to book a table in advance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Walk-ins are always welcome, but advance reservations are recommended — especially for weekends, large groups, and dinner peak hours. Call +91 97333 86333 to reserve.",
      },
    },
    {
      "@type": "Question",
      name: "What cuisines do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve a grand multi-cuisine spread including North Indian, South Indian, Andhra, Hyderabadi, Chinese, Continental, Italian, BBQ and live grills, Chaat, salads, soups, and an expansive dessert section with 10+ sweets. Total: 250+ dishes daily.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have a kids buffet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Children under 5 years dine free of cost. We have a separate kids-friendly section with dishes tailored to young palates.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer vegetarian and Jain options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We offer a wide selection of vegetarian dishes daily. Jain options are available on request — please inform our staff in advance.",
      },
    },
    {
      "@type": "Question",
      name: "Is parking available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ample parking space is available for both two-wheelers and four-wheelers at our Gachibowli location.",
      },
    },
    {
      "@type": "Question",
      name: "Is 63° suitable for large group bookings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! With our spacious venue, we are one of Hyderabad's best venues for office teams, college groups, family functions, and celebrations. Group discounts may be available on request.",
      },
    },
    {
      "@type": "Question",
      name: "Do you host birthday parties and corporate events?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer space and arrangements for birthday parties, corporate dinners, team outings, anniversaries, get-togethers, and special celebrations.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in the dinner buffet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our dinner buffet includes starters (veg and non-veg), live grills and counters, main course, biryani and rice varieties, Indian breads, chaat, international dishes, and a dessert island with multiple sweets, pastries and ice creams.",
      },
    },
    {
      "@type": "Question",
      name: "Are beverages included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regular water is included. Mocktails, soft beverages, and special drinks may be charged separately unless specified in a special offer.",
      },
    },
    {
      "@type": "Question",
      name: "Is the restaurant wheelchair accessible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our venue has elevator access and comfortable space for wheelchair movement.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept cash, all major credit/debit cards, UPI (Google Pay, PhonePe, Paytm), and digital wallets.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer discounts or special offers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We regularly have group discounts, festive specials, birthday person offers, and corporate tie-ups. Follow @63degreeshyd on Instagram or call +91 97333 86333 for the latest offers.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact 63°?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Phone: +91 97333 86333. Email: reservations@63degrees.in. Instagram: @63degreeshyd. Facebook: 63degreeshyd.",
      },
    },
  ],
};

export default function FaqJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
