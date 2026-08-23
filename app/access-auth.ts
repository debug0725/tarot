import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";

export const ACCESS_COOKIE = "midnight_diary_access";

function requiredEnv(name: "SITE_ACCESS_CODE" | "AUTH_SECRET") {
  const value = process.env[name];
  if (!value) throw new Error(`${name} environment variable is not configured.`);
  return value;
}

export function codesMatch(input: string) {
  const expected = Buffer.from(requiredEnv("SITE_ACCESS_CODE"));
  const received = Buffer.from(input);
  return expected.length === received.length && timingSafeEqual(expected, received);
}

export function accessToken() {
  return createHmac("sha256", requiredEnv("AUTH_SECRET"))
    .update("midnight-diary-tarot:v1")
    .digest("base64url");
}

export function tokenIsValid(input?: string) {
  if (!input) return false;
  const expected = Buffer.from(accessToken());
  const received = Buffer.from(input);
  return expected.length === received.length && timingSafeEqual(expected, received);
}
