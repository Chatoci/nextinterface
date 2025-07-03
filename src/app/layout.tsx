import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Noto_Sans_Lao_Looped, Noto_Sans_Thai, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const notoLao = Noto_Sans_Lao_Looped({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-lao",
  display: "swap",
});
const notoThai = Noto_Sans_Thai({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-thai",
  display: "swap",
});
const notoSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nextinterface - Professional Website Design Services",
  description: "Transform your digital presence with stunning, modern websites that drive results. Professional web design services with cutting-edge technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/png" sizes="32x32" />
      </head>
      <body className={`${roboto.variable} ${notoLao.variable} ${notoThai.variable} ${notoSC.variable} font-sans antialiased`}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="ui-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
