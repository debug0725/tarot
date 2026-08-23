import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
  title: "일기 밴드ㅣ타로 카드",
  description: "일기 쓸 게 없을 때 타로 카드 보세요",
  openGraph: {
    title: "일기 밴드ㅣ타로 카드",
    description: "",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Midnight Diary Tarot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "일기 밴드ㅣ타로 카드",
    description: "",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
