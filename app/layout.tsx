import type { Metadata } from "next";

import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import React from "react";
import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";

const pixelifySans = Pixelify_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "It's due at Midnight",
  description: "A task breakdown app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pixelifySans.className}>
        <Image
          alt="Background"
          className="-z-10 object-cover"
          layout="fill"
          quality={100}
          src="/background.png"
        />
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
