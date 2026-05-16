import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/providers/LenisProvider";
import CustomCursor from "@/components/cursor/CustomCursor";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Honey Export | Precision Manufacturing & Sourcing Solutions",
  description:
    "Honey Export â€” precision sheet metal fabrication, cold room solutions, and global sourcing for the North American market.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={lora.variable}>
      <body>
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

