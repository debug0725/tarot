import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ACCESS_COOKIE, tokenIsValid } from "./access-auth";
import TarotClient from "./tarot-client";

export default async function Home() {
  const cookieStore = await cookies();
  if (!tokenIsValid(cookieStore.get(ACCESS_COOKIE)?.value)) redirect("/enter");
  return <TarotClient />;
}
