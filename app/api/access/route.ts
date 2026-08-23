import { NextRequest, NextResponse } from "next/server";
import { ACCESS_COOKIE, accessToken, codesMatch } from "../../access-auth";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 8;
const attempts = new Map<string, { count: number; resetAt: number }>();

function clientKey(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: NextRequest) {
  const key = clientKey(request);
  const now = Date.now();
  const record = attempts.get(key);
  if (record && record.resetAt > now && record.count >= MAX_ATTEMPTS) {
    return NextResponse.json({ ok: false, message: "입력 횟수가 너무 많아요. 잠시 후 다시 시도해 주세요." }, { status: 429 });
  }

  let code = "";
  try {
    const body = await request.json();
    code = typeof body.code === "string" ? body.code : "";
  } catch {
    return NextResponse.json({ ok: false, message: "입력값을 확인해 주세요." }, { status: 400 });
  }

  if (!codesMatch(code)) {
    const current = record && record.resetAt > now ? record : { count: 0, resetAt: now + WINDOW_MS };
    attempts.set(key, { ...current, count: current.count + 1 });
    return NextResponse.json({ ok: false, message: "비밀코드가 맞지 않아요." }, { status: 401 });
  }

  attempts.delete(key);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ACCESS_COOKIE, accessToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}
