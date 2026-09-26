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
  couple: { first: "Amaya", second: "Dilan", initials: "A · D" },
  date: {
    iso: "2027-08-22T15:30:00+05:30",
    display: "22 August 2027",
    short: "22 · 08 · 27",
  },
  venue: {
    name: "The Ivory House",
    address: "138 Wakwella Road, Galle, Sri Lanka",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Galle+Sri+Lanka",
  },
  story:
    "A chance meeting over coffee became long walks, shared dreams, and a love that felt quietly like home. Seven years later, beneath the rain trees where so many memories were made, Dilan asked Amaya to begin their next chapter together.",
  events: [
    {
      eyebrow: "The solemn moment",
      name: "Wedding Ceremony",
      date: "Sunday, 22 August 2027",
      time: "3:30 in the afternoon",
      venue: "The Garden Pavilion",
      address: "The Ivory House, Galle",
    },
    {
      eyebrow: "Dinner & dancing",
      name: "Evening Reception",
      date: "Sunday, 22 August 2027",
      time: "6:30 in the evening",
      venue: "The Grand Verandah",
      address: "The Ivory House, Galle",
    },
  ],
  timeline: [
    { label: "We met", value: "2020" },
    { label: "The beginning", value: "2021" },
    { label: "The proposal", value: "2026" },
    { label: "Our wedding", value: "2027" },
  ],
  schedule: [
    { time: "3:30 PM", title: "Ceremony", note: "Garden Pavilion" },
    { time: "4:30 PM", title: "Poruwa Ceremony", note: "The East Lawn" },
    { time: "6:30 PM", title: "Reception", note: "Grand Verandah" },
    { time: "8:00 PM", title: "Dinner", note: "Under the rain trees" },
  ],
  images: {
    hero: heroImage,
    story: storyImage,
    venue: venueImage,
    details: detailsImage,
    gallery: [galleryA1, galleryB1, galleryA3, galleryB3, galleryA2, galleryB2, galleryA4, galleryB4],
  },
} as const;