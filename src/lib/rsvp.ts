import { z } from "zod";

/**
 * RSVP backend core — schema, storage, and result type.
 *
 * Responses are appended to the `rsvps` table of a Supabase project through
 * its PostgREST endpoint. Configuration is read from DEV_SUPABASE_URL and
 * DEV_SUPABASE_ANON_KEY (build-time `.env` values, with a runtime
 * process.env fallback). The key is a public, insert-only credential: an RLS
 * policy that allows only INSERT is what keeps stored responses private —
 * see the "RSVP backend" section of README.md for the SQL.
 */

export const rsvpSchema = z.object({
  name: z.string().trim().min(1, "Please add your name.").max(120),
  guests: z.number().int().min(1).max(4),
  attendance: z.enum(["accept", "decline"]),
  dietary: z.string().trim().max(500),
  message: z.string().trim().max(2000),
  /** Honeypot field — stays empty for humans; bots that fill it are dropped. */
  honeypot: z.string(),
  /** Milliseconds since the invitation rendered; instant submits are dropped. */
  elapsedMs: z.number(),
});

export type RsvpInput = z.input<typeof rsvpSchema>;
export type Rsvp = z.output<typeof rsvpSchema>;

export type SubmitRsvpResult = { ok: true } | { ok: false; message: string };

const NOT_CONNECTED_MESSAGE =
  "This RSVP form is not connected yet — set DEV_SUPABASE_URL and DEV_SUPABASE_ANON_KEY in .env.";
const SAVE_FAILED_MESSAGE = "We couldn't save your reply just now. Please try again in a moment.";

function readConfig(): { url: string; key: string } {
  const processEnv = (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env;
  const read = (name: string): string =>
    String(import.meta.env?.[name] ?? processEnv?.[name] ?? "").trim();
  return {
    url: read("DEV_SUPABASE_URL").replace(/\/+$/, ""),
    key: read("DEV_SUPABASE_ANON_KEY") || read("VITE_SUPABASE_PUBLISHABLE_KEY"),
  };
}

/**
 * Stores one RSVP in Supabase. Returns a result object instead of throwing so
 * guests always receive a graceful, non-technical message on failure.
 */
export async function storeRsvp(rsvp: Rsvp): Promise<SubmitRsvpResult> {
  // Likely a bot: accept silently and store nothing.
  if (rsvp.honeypot !== "" || rsvp.elapsedMs < 1000) return { ok: true };

  const { url, key } = readConfig();
  if (!url || !key) {
    console.error(
      "RSVP backend is not configured: set DEV_SUPABASE_URL and DEV_SUPABASE_ANON_KEY in .env.",
    );
    return { ok: false, message: NOT_CONNECTED_MESSAGE };
  }

  try {
    const response = await fetch(`${url}/rest/v1/rsvps`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "content-type": "application/json",
        prefer: "return=minimal",
      },
      body: JSON.stringify({
        name: rsvp.name,
        guests: rsvp.guests,
        attendance: rsvp.attendance,
        dietary: rsvp.dietary,
        message: rsvp.message,
      }),
    });
    if (!response.ok) {
      console.error(`Supabase insert failed (${response.status}): ${await response.text()}`);
      return { ok: false, message: SAVE_FAILED_MESSAGE };
    }
    return { ok: true };
  } catch (error) {
    console.error("Could not reach Supabase to store an RSVP:", error);
    return { ok: false, message: SAVE_FAILED_MESSAGE };
  }
}
