import heroImage from "@/assets/wedding-hero.jpg";
import storyImage from "@/assets/wedding-story.jpg";
import venueImage from "@/assets/wedding-venue.jpg";
import detailsImage from "@/assets/wedding-details.jpg";
import galleryA1 from "@/assets/gallery/a-1.jpg";
import galleryA2 from "@/assets/gallery/a-2.jpg";
import galleryA3 from "@/assets/gallery/a-3.jpg";
import galleryA4 from "@/assets/gallery/a-4.jpg";
import galleryB1 from "@/assets/gallery/b-1.jpg";
import galleryB2 from "@/assets/gallery/b-2.jpg";
import galleryB3 from "@/assets/gallery/b-3.jpg";
import galleryB4 from "@/assets/gallery/b-4.jpg";

export const wedding = {
  couple: { first: "Randini", second: "Malaka", initials: "R · M" },
  date: {
    iso: "2026-12-03T15:30:00+05:30",
    display: "3 December 2026",
    short: "03 · 12 · 26",
  },
  venue: {
    name: "The Grand Walawwa",
    address: "190/8 Kandy Rd, Kegalle, Sri Lanka",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Grand+Walawwa,+Kegalle,+Sri+Lanka",
  },
  story:
    "A casual conversation at an office Halloween party became shared photos on WhatsApp, longer conversations, and a connection that quietly grew into something more. In November 2024, what began as an ordinary moment became the beginning of our story, and now, beneath the rain trees where so many memories were made, Malaka asked Randini to begin their next chapter together.",
  events: [
    {
      eyebrow: "The solemn moment",
      name: "Wedding Ceremony",
      date: "Thursday, 03 December 2026",
      time: "3:30 in the afternoon",
      venue: "St. Mary's Church",
      address: "Kegalle",
    },
    {
      eyebrow: "Dinner & dancing",
      name: "Evening Reception",
      date: "Thursday, 03 December 2026",
      time: "6:30 in the evening",
      venue: "THE GALSS HOUSE",
      address: "The Grand Walawwa, Kegalle",
    },
  ],
  timeline: [
    { label: "We met", value: "November, 2024" },
    { label: "Our wedding", value: "December, 2026" },
  ],
  schedule: [
    { time: "3:30 PM", title: "Holy Mass", note: "St. Mary's Church, Kegalle" },
    { time: "5:30 PM", title: "Poruwa Ceremony", note: "The Glass House of Grand Walawwa" },
    { time: "6:30 PM", title: "Reception", note: "The Glass House of Grand Walawwa" },
    { time: "8:00 PM", title: "Dinner", note: "The Glass House of Grand Walawwa" },
  ],

  images: {
    hero: heroImage,
    story: storyImage,
    venue: venueImage,
    details: detailsImage,
    gallery: [galleryA1, galleryB1, galleryA3, galleryB3, galleryA2, galleryB2, galleryA4, galleryB4],
  },
} as const;