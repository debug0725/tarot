import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
  title: "Midnight Diary Tarot",
  description: "연애·재회·이별을 메이저 한 장과 마이너 한 장으로 자세히 읽는 Y2K 다이어리 타로.",
  openGraph: {
    title: "Midnight Diary Tarot",
    description: "연애 · 재회 · 이별, 두 장으로 읽는 마음",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Midnight Diary Tarot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Midnight Diary Tarot",
    description: "연애 · 재회 · 이별, 두 장으로 읽는 마음",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
