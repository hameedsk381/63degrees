const B = "https://storage.googleapis.com/63desgrees/videos"

export const videos = {
  testimonial3: {
    mp4: `${B}/63_Testimonial_3.mp4`,
    poster: `${B}/63_Testimonial_3.jpg`,
  },
  testimonial4: {
    mp4: `${B}/63_Testimonial_4.mp4`,
    poster: `${B}/63_Testimonial_4.jpg`,
  },
  dessertMedley: {
    mp4: `${B}/Dessert_Medley.mp4`,
    poster: `${B}/Dessert_Medley.jpg`,
  },
  dessertWonderland: {
    mp4: `${B}/Dessert_Wonderland.mp4`,
    poster: `${B}/Dessert_Wonderland.jpg`,
  },
  hiSiri: {
    mp4: `${B}/HI_Siri.mp4`,
    poster: `${B}/HI_Siri.jpg`,
  },
  mainVideo: {
    mp4: `${B}/Main_Video.mp4`,
    poster: `${B}/Main_Video.jpg`,
  },
  mainVideo2: {
    mp4: `${B}/Main_Video_2.mp4`,
    poster: `${B}/Main_Video_2.jpg`,
  },
  mocktails: {
    mp4: `${B}/Mocktails.mp4`,
    poster: `${B}/Mocktails.jpg`,
  },
} as const
