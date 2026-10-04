import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iCover Studio",
  description: "Create your own gradient and Essentials-style playlist covers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
