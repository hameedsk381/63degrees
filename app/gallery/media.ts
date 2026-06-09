import { images as gcpImages } from "@/lib/images"
import { videos as gcpVideos } from "@/lib/videos"

export type GalleryImage = {
  id: string;
  type: "image";
  src: string;
  category: "Ambiance" | "Food" | "Desserts";
  alt: string;
};

export type GalleryVideo = {
  id: string;
  type: "video";
  driveId: string;
  title: string;
  category: "Ambiance" | "Food" | "Desserts" | "Events";
  thumbnail: string;
  src?: string;
  poster?: string;
};

export type GalleryMedia = GalleryImage | GalleryVideo;

export const categories = ["All", "Ambiance", "Food", "Events", "Videos"] as const;

export const images: GalleryImage[] = [
  { id: "image-1", type: "image", src: gcpImages.ambiance[0], category: "Ambiance", alt: "63 Degrees Grand Seating Interior" },
  { id: "image-2", type: "image", src: gcpImages.food[0], category: "Food", alt: "Exquisite Signature Buffet Curries" },
  { id: "image-3", type: "image", src: gcpImages.ambiance[1], category: "Desserts", alt: "Bespoke Dessert Section Display" },
  { id: "image-4", type: "image", src: gcpImages.ambiance[2], category: "Ambiance", alt: "Private Dining Sanctuary Seating" },
  { id: "image-5", type: "image", src: gcpImages.food[1], category: "Food", alt: "Live Operational Grill Drama" },
  { id: "image-6", type: "image", src: gcpImages.food[2], category: "Food", alt: "Premium Global Spread Showcase" },
  { id: "image-7", type: "image", src: gcpImages.ambiance[3], category: "Ambiance", alt: "Linen Fine Seating Ambience" },
  { id: "image-8", type: "image", src: gcpImages.food[3], category: "Food", alt: "Live Hot Schezwan Delicacies" },
];

export const videos: GalleryVideo[] = [
  { id: "video-1K3FcZA", type: "video", driveId: "1K3FcZA--O0l8n6rnBzbBzxhlE8t4Ouds", title: "Cheese Wheel Pasta", category: "Food", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBOeY4SNBrpKlogz264jEKnH67cmh6F3NoVK34Ti4r-txJTq4-OOt4FbdgdDAiemoCsl_lOc0L-XYo2Fd9zye3UVfyU3Lhdz03TVlCSP=s190" },
  { id: "video-1VJFApD", type: "video", driveId: "1VJFApDg0HZ4uS1KKz3YfNEUSgEoRaakw", title: "63 Ambience 01", category: "Ambiance", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBOUJhxHvU5vWmV9xZ5aCJ6wn2JG5pBZ9pvNvoqhJtiPv5p6qqeNebPjTqRkVHtVQh_CdACuyCp1X-5LU3Li-cHTcqorNfgk4_xf03v-=s190" },
  { id: "video-1vvjoO7", type: "video", driveId: "1vvjoO7zjb0ZhwwSA3AgxvXOf5u4WjvAa", title: "63 Degree", category: "Ambiance", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBNG20zr8PaRnHM0Wvzjmy-FZjTdKGsMLprSinwoZMfRDhNTEh4uNkkbEfCmeLT55L9XUqt7lkjoliBlx2Kw4qKZvc14sr9IuPr7gciW=s190" },
  { id: "video-1oxfFOn", type: "video", driveId: "1oxfFOn6kAm-1aWAWsmqroW7iBKXGR7Dh", title: "63 Testimonial 3", category: "Events", thumbnail: gcpVideos.testimonial3.poster, src: gcpVideos.testimonial3.mp4, poster: gcpVideos.testimonial3.poster },
  { id: "video-1ErUuwZ", type: "video", driveId: "1ErUuwZCR24QTmak0uPNuBuQ5Gr40oKla", title: "63 Testimonial 4", category: "Events", thumbnail: gcpVideos.testimonial4.poster, src: gcpVideos.testimonial4.mp4, poster: gcpVideos.testimonial4.poster },
  { id: "video-1js_pBt", type: "video", driveId: "1js_pBtbFfmIe1Mbok7nks2KuUUl_Utg3", title: "Amchur Chicken Wings", category: "Food", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBOvxjgQsw2Wupr46AV1IqmXkfj_bocERYIn58UFYZjBKQmj7lsTdlBg5NZ3rAFO5wBZxfI2WgguzWO_bGSZ0DJmuw8vdoYFrn4iHjS4=s190" },
  { id: "video-1Po3fS3", type: "video", driveId: "1Po3fS3Cu3dzPAbD_rdAZhR-oBV6gO4f_", title: "Ashish Vidyarthi", category: "Events", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBO_lboy0CMfOxYZQQg-GRUBaFxeWwqPuRSOmoq86C-bpcA7RpG0to86Mc_dvlHWXMt_bq0D2dFlO8K2lJsH3tFKN9UCV8pj57n5H7jp=s190" },
  { id: "video-1kP2j6X", type: "video", driveId: "1kP2j6XkHQG-xIkctetJG1Symhnsy8pHy", title: "Birth Of Buffet", category: "Events", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBPWwV_DmAd6Miz14IWCsMIXuZ3PerGvulKSGXvCDvM4txtk0TYm-W3NYSegCwjKlairq8Mf11fS3Rgtr57rFvVFOl0Cc0FsXjd_GxVb=s190" },
  { id: "video-1W8WxwM", type: "video", driveId: "1W8WxwMWH33lB7uVMqW5AydyS4vlgESj5", title: "Choose It", category: "Events", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBMc2LWeRT2jZDRQAejXrEvd8cl08dH4koOHtOxQAr4fpQDl6NxdmLNsyvozPIp_m0RWgO2awQL6U3ifIaGCmU7bVIW_wjuSUtl50h7L=s190" },
  { id: "video-1KyIPOs", type: "video", driveId: "1KyIPOsRgmdP5EeYdSHM18PItTss77uXY", title: "Concept 1", category: "Events", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBMcis6VEVUhxT-MKeLwNxBgWonMwwLz-aFc6-htYShwmNCCksgjgjft5v1W5Ejn-oLkr-uBZaOru3vvv1TTgDP9zBdsC21glQ97Jv8v=s190" },
  { id: "video-1ZgB2CD", type: "video", driveId: "1ZgB2CDvjOIEqjL5tqKglylTBXpjkQCI7", title: "Dessert Medley", category: "Desserts", thumbnail: gcpVideos.dessertMedley.poster, src: gcpVideos.dessertMedley.mp4, poster: gcpVideos.dessertMedley.poster },
  { id: "video-1sK3CMV", type: "video", driveId: "1sK3CMVSqaxTDLr0PwbJ3RbHdAbV7XipU", title: "Dessert Wonderland", category: "Desserts", thumbnail: gcpVideos.dessertWonderland.poster, src: gcpVideos.dessertWonderland.mp4, poster: gcpVideos.dessertWonderland.poster },
  { id: "video-1dUtvO5", type: "video", driveId: "1dUtvO5qDT8tPmbldRSAdFEbEWydJj0WL", title: "Goan Crab Curry", category: "Food", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBOeC33133_ht8ew26i9lI7rMUsWz2SFKn11N5sT5sGx0OTTDV_asU54sNShJs_z82kQXjYOJaogq0ou5YxgPjQDB0WMLDQwpyTjWxAi=s190" },
  { id: "video-1YRMMB5", type: "video", driveId: "1YRMMB5njn1E-s5dhn7-hi2UK8FkhTV5N", title: "Hi Siri", category: "Events", thumbnail: gcpVideos.hiSiri.poster, src: gcpVideos.hiSiri.mp4, poster: gcpVideos.hiSiri.poster },
  { id: "video-1g5sIUn", type: "video", driveId: "1g5sIUnJwxZOHqCrNbQVaGax4I408fSIe", title: "IMG 3045", category: "Ambiance", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBPxrP-ZhesgDysp3BP6TheVaYdo1cVMKwe1zEwNb8d2GJo5zHCncxwOgxI4lvrt4-3V7SiFFY7AduwP9kGvyhmGNz6a0vwVUybrlCVJ=s190" },
  { id: "video-1MBzEAy", type: "video", driveId: "1MBzEAyVyZI6o_XEjHQDgl0T1VjZT30-T", title: "Jalebi", category: "Desserts", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBOZEzEqRy0GdiOdSAWnVMOmDRudNsR8-6jyrPMy_5W4xc-B6Wr4JfoA4Xh1zj1a_Bu-e9qRYPOBRTx-4Zbq0RdjdUTApHecpKx2Xr7d=s190" },
  { id: "video-1NvQsJe", type: "video", driveId: "1NvQsJeNI4C_A85PQx3iyeE05kFEGNHfP", title: "Live Mango Fountain", category: "Desserts", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBNOyklFdLEhHZyafzwZ4ng8jjkXiiQhdeDg8KSBqhaNchvbPCbQwYhxt7gnbdUzxokYNExKnF5ClJttwDILCPQRRif7I_eQrMLoD4IT=s190" },
  { id: "video-1tY3xM1", type: "video", driveId: "1tY3xM1_5cI0wuA6XrLI2sGQSvqJaYqPB", title: "Mamidikaya Kodi Koora", category: "Food", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBPn5jA0v4zQZpTgvcW-ocojo8wRhzATM9Evtao_13Z_GkF6VBKxfuZkHSUn2So_1D0LhGxCHcHEfN9lt-XI_9nSfc28fwHqRaqmhdYy=s190" },
  { id: "video-1oV-CGr", type: "video", driveId: "1oV-CGrULt5AH-lP0r9q7qu_amcAXBa2u", title: "Mango Chilli Fish", category: "Food", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBN179dFsx4lROI2uZ0Sqn8jUVbimSpT0Lph-psSv-7j5HSr7vCy2fVAnrx3EmmL3JACz2e_yamnI_Py7Nfk3EzM_ni2QFrcAG5mlIjQ=s190" },
  { id: "video-1iaWySM", type: "video", driveId: "1iaWySM_fVjQ_rzxq6-XQpQdUuvGE3x0S", title: "Mango Ginger Soup", category: "Food", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBMPPCsn1JB_LB57m8i6gC47FygUhU75xVTS1q7aSSSWMybe4HsJEE31c6s7pP1kGIXz5g3YcF20YfW4B9cQ9Uy6XPTWdndq1eYLZAgh=s190" },
  { id: "video-1DTHEBp", type: "video", driveId: "1DTHEBpXlSPPGLKZHbuHyhjjivzTyQcEl", title: "Mango Mojito", category: "Food", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBPsDJWqm1csu2e0zVA6pVF5BktY728LnHhhloGJvfjNXbU0Wx4xlQOEhdD1Qux_UYq1FVTXMucv_vQMQT-DUYnnvCL52xph51xsKVA6=s190" },
  { id: "video-1yDe0MH", type: "video", driveId: "1yDe0MHEeQ8aMK6zbRBtSRb_W1hAsA9C7", title: "Mango Paneer", category: "Food", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBN3o3UU4ZPcf6uJ7exRU89hjW8tZzYhWJQQ1KDDXYyo8Wn0jbDGG62eIbJs-vtTPIpfr6ggGkTl497RguNqnEtzoBvmjkr0pg6M2SW9=s190" },
  { id: "video-1kmP7z1", type: "video", driveId: "1kmP7z1XwTTJEoA6gw9VBJkDzKdhPBP3e", title: "Mocktails", category: "Food", thumbnail: gcpVideos.mocktails.poster, src: gcpVideos.mocktails.mp4, poster: gcpVideos.mocktails.poster },
  { id: "video-1lJAw4X", type: "video", driveId: "1lJAw4X8krC079PTk5Kh_OltzpmL1nhCV", title: "Paratha Burger", category: "Food", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBOLfv1xtBk5THymG9R-YIq9dfZNzKV2qkFIrU7mc7KcnI4LcTH7XNysjr3h1Jt1pVffYhwB-TOTcArStB5z9RLFdMrSVHtkCPCWoAYv=s190" },
  { id: "video-1l2oudC", type: "video", driveId: "1l2oudCmAOoR2RezAYLaBC1sXmyEhCeOJ", title: "Pasta", category: "Food", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBPsB2-jAyDeTPoKf-b9pPmoY9vURAZn4njUxHAWmKVmEkaNKqeaD7VSvhYhwJdp5Cl_Dkuf_tfGhwVf9qppa1_UsfAwgZ-ukoJ0_XnG=s190" },
  { id: "video-1vZ2jlg", type: "video", driveId: "1vZ2jlgPI4HB2y-sLnVEuZ9Oxt5j1UUPT", title: "Pickle Mixing", category: "Food", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBOxx06xvT6gp_o82r4izGdOcV_dhGn9wyZex6bxNNO-cspsN2-RHuXl3feRUp3dYTXeCaD132URTsIo8jBJq0w1uZ-kZWW028_RwyWU=s190" },
  { id: "video-1J6NJyJ", type: "video", driveId: "1J6NJyJyFGO7tg6cb7so37citbfSNaAvv", title: "Reel 2", category: "Events", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBNwQboRSqPc0KjHxZNiMCvSnDAxtDLW-B5cbK_tblN6W38lNdOa-ix_xKWPZQA4qBtCftk8Q-VwP_bto7N95IlvAZhQFhN9qmB5O98z=s190" },
  { id: "video-1F1Y9eO", type: "video", driveId: "1F1Y9eOBlsdYEIeG-5bRQq-55m5ozquSD", title: "Reel", category: "Events", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBPlMEZIDRjKB1aiIM6S6AwOKgeJByyhkEtSiremdPEwjwT_JvkInXYTffaxwHIWzLPYet_M_eM2M8r8LtW_mQXAd_9VCwfSX42Ak8d8=s190" },
  { id: "video-1fBLLDO", type: "video", driveId: "1fBLLDO1DaEdxkCu442vvegos9OTjp8TL", title: "Rich Food", category: "Food", thumbnail: "https://lh3.googleusercontent.com/drive-storage/AJQWtBNtnbcVCeZSTUBIOHvxdHwmVHR26YSfXz2lmSV3rmuGk5ZVTfHYWALJc4rs6LrYCaDg49vG6C4qNH9BGGVOOmUaOG9d9z4sn3b_Eq3u=s190" },
];

export const mediaItems: GalleryMedia[] = [...images, ...videos];
