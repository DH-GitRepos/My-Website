// /layout.tsx
"use client";

import Head from 'next/head';
import './globals.css';
import LayoutHeader from './(components)/LayoutHeader';
import LayoutFooter from './(components)/LayoutFooter';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Darren Halpin | Software Engineer" />
        <meta name="description" content="Resume website for Darren Halpin BSc (Hons)" />
        {/* <!-- Open Graph - Social Sites --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://darren-halpin.web.app/" />
        <meta property="og:title" content="Darren Halpin | Software Engineer" />
        <meta property="og:description" content="I am a software engineer with a BSc (Hons) in Computer Science. This resume site details my skills and background." />
        <meta property="og:image" content="https://darren-halpin.web.app/images/social_cards/SocialCard.png" />
        {/* <!-- Icon data --> */}
        <meta name="msapplication-config" content="/images/favicon/browserconfig.xml" />
        <link rel="icon" type="image/x-icon" href="/images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <title>Darren Halpin | Software Engineer</title>
      </Head>
      <body className="bg-c_white w-[100%] p-0 m-0">
        <LayoutHeader />
        {children}
        <LayoutFooter />
      </body>
    </html>
  );
}