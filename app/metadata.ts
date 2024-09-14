// FILE: metadata.ts

export interface Metadata {
  title: string;
  description: string;
  viewport: string;
  openGraph?: {
    type?: string;
    url?: string;
    title?: string;
    description?: string;
    images?: { url?: string }[];
  };
  icons?: {
    icon: { url?: string; sizes?: string; type?: string }[];
    apple?: string;
  };
}

export const metadata: Metadata = {
  title: 'Darren Halpin - Software Engineer',
  description: 'Resume website for Darren Halpin BSc (Hons)',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    type: 'website',
    url: 'https://darren-halpin.web.app/',
    title: 'Darren Halpin | Software Engineer',
    description: 'I am a software engineer with a BSc (Hons) in Computer Science. This resume site details my skills and background.',
    images: [
      {
        url: 'https://darren-halpin.web.app/images/social_cards/SocialCard.png',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/images/favicon/favicon.ico', type: 'image/x-icon' },
      { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/images/favicon/apple-touch-icon.png',
  } 
};