# Elegant Union

Build a premium, elegant, mobile-first digital wedding invitation website.

This is a real wedding invitation, so the design must feel personal, romantic, sophisticated, and high-end — NOT like a SaaS landing page, dashboard, template marketplace, or generic AI-generated website.

## Overall Design Direction

Create the feeling of opening an expensive physical wedding invitation and gradually discovering the wedding details.

Visual style:

* Elegant
* Minimal
* Romantic
* Sophisticated
* Editorial/luxury wedding aesthetic
* Lots of intentional whitespace
* Beautiful typography
* Subtle animations
* Smooth transitions
* Premium photography presentation
* Mobile-first, because most guests will open this through WhatsApp on their phones

Avoid:

* Excessive gradients
* Neon colors
* Glassmorphism
* Generic SaaS cards
* Excessive rounded containers
* Loud animations
* Emoji-heavy design
* Stock-looking illustrations
* Anything that makes it look like an AI-generated website

Use a restrained neutral palette such as warm ivory, cream, soft beige, muted champagne/gold accents, and deep charcoal text.

Use elegant serif typography for names and major headings, paired with a clean modern sans-serif for supporting information.

## Opening Experience

The website should initially show a beautiful invitation-cover experience.

Centered on the screen:

[COUPLE NAME]
&
[COUPLE NAME]

[WEDDING DATE]

Include a tasteful "Open Invitation" interaction.

When the user taps it:

* Create a smooth, elegant opening transition.
* The cover should gracefully transition into the main invitation.
* Avoid gimmicky or excessive animations.
* Use subtle fade, slide, scale, and reveal animations.
* The transition should feel like physically opening a wedding invitation.

Do not autoplay music. If background music is included later, provide an obvious user-controlled music button.

## Hero Section

After opening the invitation, display:

[COUPLE NAME]
&
[COUPLE NAME]

"Together with their families"

"We invite you to celebrate our wedding"

[DATE]

[VENUE]

The couple's names should be the strongest visual element on the page.

Create a beautiful photographic background or image section that can later use the couple's actual photograph.

Use placeholder images for now, but structure the code so they can easily be replaced with real wedding photos.

## Wedding Details

Create an elegant event details section.

Display:

Wedding Ceremony
[DATE]
[TIME]
[VENUE]

Reception
[DATE]
[TIME]
[VENUE]

Each event should have:

* Date
* Time
* Venue
* Address
* "View on Google Maps" button

The location buttons should be visually subtle and elegant.

## Countdown

Create a beautiful countdown to the wedding date.

Display:

DAYS
HOURS
MINUTES
SECONDS

The countdown should update in real time.

Keep the design elegant and minimal.

Do not use huge digital-clock styling.

## Our Story

Create a tasteful "Our Story" section.

Include:

* Couple photograph
* Short story about the couple
* Optional timeline

Example timeline structure:

We Met
[Year]

The Beginning
[Year]

The Proposal
[Year]

Our Wedding
[Date]

Use subtle scroll-reveal animations.

Do not make this section overly long.

## Photo Gallery

Create a premium editorial-style wedding photo gallery.

Use an asymmetric/masonry-style layout rather than a basic grid.

Include approximately 6–10 placeholder photographs.

When an image is clicked:

* Open a full-screen/lightbox view
* Allow navigation between photos
* Provide a smooth transition

Images should feel like photographs in a luxury wedding magazine.

## Wedding Schedule

Create a clean timeline:

Ceremony
[Time]

Poruwa / Traditional Ceremony
[Time]

Reception
[Time]

Dinner
[Time]

Keep this section elegant and easy to scan on mobile.

## RSVP

Create a beautiful RSVP section.

Heading:

"Will you celebrate with us?"

Provide:

Full Name
Number of Guests
Attendance:

* Joyfully Accept
* Regretfully Decline

Optional:
Dietary Requirements
Message

Add a clear but elegant "RSVP" button.

For the first version, implement the frontend interaction and validation.

Structure the code so the RSVP can later be connected to a Spring Boot REST API.

Do NOT build authentication or a database yet.

## Venue

Create a dedicated venue section.

Include:

* Venue name
* Address
* Small venue image
* Google Maps button

Make the map/location experience particularly mobile-friendly.

## Closing Section

End the invitation with:

"We can't wait to celebrate with you."

[COUPLE INITIALS]

[DATE]

Use a beautiful photograph or subtle background treatment.

Then include a small footer:

"Made with love"

Do not make the footer look like a commercial website footer.

## Navigation

Do NOT create a traditional large website navbar.

This should feel like an invitation, not a website.

On mobile, use either:

* subtle floating navigation
  OR
* a small elegant menu button

Navigation should allow users to quickly reach:

* Home
* Story
* Details
* Gallery
* RSVP
* Venue

## Animation

Use tasteful modern animations.

Preferred:

* fade-in
* slide-up
* gentle scale
* image reveal
* text reveal
* parallax where appropriate
* smooth scrolling
* subtle page transitions

Animations should feel slow, intentional, and luxurious.

Respect prefers-reduced-motion.

Do NOT use:

* bouncing elements
* excessive particles
* spinning elements
* flashy transitions
* constant motion

## Responsive Design

The primary target is mobile phones.

Design specifically for:

* 360px
* 375px
* 390px
* 414px
* tablet
* desktop

The invitation must look excellent on a 375px-wide phone.

Pay particular attention to:

* typography
* image cropping
* vertical spacing
* touch targets
* scrolling
* avoiding horizontal overflow

## Technical Requirements

Use:

* React
* TypeScript
* Tailwind CSS
* modern component architecture
* clean reusable components

Create reusable components such as:

WeddingCover
HeroSection
WeddingDetails
Countdown
OurStory
PhotoGallery
WeddingSchedule
RSVP
Venue
ClosingSection

Keep wedding content/configuration separate from presentation where practical so names, dates, venues, images, and text can easily be changed later.

Use semantic HTML and good accessibility practices.

Optimize images and lazy-load gallery images.

The website should be fast and lightweight.

## Important

Do not create a generic wedding template.

The result should look like a professionally designed luxury wedding invitation that happens to be interactive.

Prioritize:

1. Visual design
2. Typography
3. Mobile experience
4. Photography
5. Subtle animation
6. Performance
7. Clean code

Do not add unnecessary features.

Use realistic placeholder wedding information for now, clearly structured so I can replace it with the actual wedding details later.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8b670994-3640-4f14-87d2-b78baa483eda).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
