const items = [
  { src: "https://63degrees.in/images/1.jpg", caption: "Buffet spread at 63° Modern Regional Buffet Hyderabad showcasing Indian cuisine" },
  { src: "https://63degrees.in/images/2.jpg", caption: "Delicious biryani and curry dishes at 63° buffet in Gachibowli" },
  { src: "https://63degrees.in/images/3.jpg", caption: "Freshly prepared starters and appetizers at 63° Modern Regional Buffet" },
  { src: "https://63degrees.in/images/4.jpg", caption: "Grand dessert section with Indian sweets and pastries at 63° buffet" },
  { src: "https://63degrees.in/images/food.jpg", caption: "Close-up of signature dishes at 63° Modern Regional Buffet Hyderabad" },
  { src: "https://63degrees.in/images/Schezwan-Paneer.jpg", caption: "Schezwan Paneer dish at 63° buffet Chinese counter" },
  { src: "https://63degrees.in/images/63-degrees.jpg", caption: "63° Modern Regional Buffet restaurant interior dining area" },
  { src: "https://63degrees.in/images/resta-img20.png", caption: "Elegant restaurant interior at 63° Gachibowli Hyderabad" },
  { src: "https://63degrees.in/images/resta-img21.png", caption: "Modern dining setup at 63° Modern Regional Buffet" },
  { src: "https://63degrees.in/images/resta-img47.png", caption: "Spacious buffet dining hall at 63° in Gachibowli" },
  { src: "https://63degrees.in/images/resta-img48.png", caption: "63° restaurant decor and welcoming atmosphere" },
  { src: "https://63degrees.in/images/bi.png", caption: "63° Modern Regional Buffet brand logo and entrance" },
  { src: "https://63degrees.in/images/IMG_1953-1.jpg", caption: "Live music and entertainment at 63° buffet restaurant Hyderabad" },
  { src: "https://63degrees.in/images/Live-Muice.webp", caption: "Live counter serving fresh dishes at 63° Modern Regional Buffet" },
  { src: "https://63degrees.in/images/2.webp", caption: "Night view of 63° restaurant exterior at Gachibowli Hyderabad" },
  { src: "https://63degrees.in/images/3.webp", caption: "63° buffet spread showcasing regional Indian cuisine variety" },
  { src: "https://63degrees.in/images/4.webp", caption: "Dessert platter and sweet treats at 63° Modern Regional Buffet" },
  { src: "https://63degrees.in/images/2024-02-07.jpg", caption: "Chef preparing live dish at 63° buffet counter" },
  { src: "https://63degrees.in/images/Im1.jpg", caption: "63° Modern Regional Buffet restaurant interior dining area at Gachibowli Hyderabad" },
  { src: "https://63degrees.in/images/im2.jpg", caption: "Buffet spread and ambiance at 63° Modern Regional Buffet Hyderabad" },
];

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "63° Modern Regional Buffet Photo Gallery",
  description: "A visual tour of 63° Modern Regional Buffet in Gachibowli, Hyderabad — our food, ambiance, live counters, desserts, and the dining experience that makes us Hyderabad's favourite buffet.",
  url: "https://63degrees.in/gallery",
  image: items.map((item) => ({
    "@type": "ImageObject",
    url: item.src,
    caption: item.caption,
  })),
};

export default function GalleryJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
    />
  );
}
