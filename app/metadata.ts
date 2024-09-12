// FILE: metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Resume website for Darren Halpin BSc (Hons)",
  title: "Darren Halpin | Software Engineer",
  icons: {
    icon: [
      { url: "/images/favicon/favicon.ico" },
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/favicon/apple-touch-icon.png",
    other: [
      { rel: "mask-icon", url: "/images/favicon/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },
  other: {
    "msapplication-config": "/images/favicon/browserconfig.xml",
    // "msapplication-TileColor": "#b91d47",
    // "theme-color": "#ffffff",
  },
};