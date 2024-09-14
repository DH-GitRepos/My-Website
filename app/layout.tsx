"use client";

import './globals.css';
import LayoutHeader from './(components)/LayoutHeader';
import LayoutFooter from './(components)/LayoutFooter';
import { metadata } from './metadata';
import { Key } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content={metadata.viewport} />
        {metadata.openGraph && (
          <>
            <meta property="og:type" content={metadata.openGraph.type} />
            <meta property="og:url" content={metadata.openGraph.url?.toString()} />
            <meta property="og:title" content={metadata.openGraph.title?.toString()} />
            <meta property="og:description" content={metadata.openGraph.description} />
            {metadata.openGraph.images?.map((image: { url?: string | undefined; }, index: Key | null | undefined) => (
              <meta key={index} property="og:image" content={image.url} />
            ))}
          </>
        )}
        {metadata.icons && (
          <>
            {metadata.icons.icon.map((icon: { url?: string | undefined; sizes?: string | undefined; type?: string | undefined; }, index: Key | null | undefined) => (
              <link key={index} rel="icon" href={icon.url} sizes={icon.sizes} type={icon.type} />
            ))}
            <link rel="apple-touch-icon" href={metadata.icons.apple} />
          </>
        )}
      </head>
      <body className="bg-c_white w-[100%] p-0 m-0">
        <LayoutHeader />
        {children}
        <LayoutFooter />
      </body>
    </html>
  );
}