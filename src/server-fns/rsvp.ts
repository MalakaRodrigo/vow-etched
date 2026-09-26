import { createServerFn } from "@tanstack/react-start";

import { rsvpSchema, storeRsvp, type RsvpInput } from "@/lib/rsvp";

/**
 * The server function the RSVP form calls. The payload is re-validated here
 * with the shared schema — the browser is never trusted — and then stored via
 * `storeRsvp` (Supabase insert). CSRF protection for server functions comes
 * from the middleware already registered in `src/start.ts`; same-origin
 * browser posts satisfy it automatically.
 */
export const submitRsvp = createServerFn({ method: "POST" })
  .validator((input: RsvpInput) => rsvpSchema.parse(input))
  .handler(({ data }) => storeRsvp(data));
