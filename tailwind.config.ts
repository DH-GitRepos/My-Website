import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",   
  ],
    
  /* customise theme here */
  theme: {
    fontFamily: {},

    screens: {
      'xs': '320px',
      // => @media (min-width: 320px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    colors: {
      c_deepGrey: {
        DEFAULT: 'rgba(51, 51, 51, 1)',
      },
      c_lightGrey: {
        DEFAULT: 'rgba(80, 80, 80, 1)',
      },
      c_white: {
        DEFAULT: 'rgba(255, 255, 255, 1)',
      },
      c_white_shadow: {
        DEFAULT: 'rgba(255, 255, 255, 0.35)',
      },
      c_black: {
        DEFAULT: 'rgba(0, 0, 0, 1)',
      },
      c_blue: {
        DEFAULT: 'rgba(81, 113, 255, 1)',
      },
    },
    
    extend: {
      backgroundImage: {
        'page-heading-image': "url('/images/globe-static-2560x1440.webp')",
      },
      fontFamily: {
        'f_Black': ['f_Black', 'sans-serif'],
        'f_XBold': ['f_XBold', 'sans-serif'],
        'f_Bold': ['f_Bold', 'sans-serif'],
        'f_Regular': ['f_Regular', 'sans-serif'],
        'f_Italic': ['f_Italic', 'sans-serif'],
      },
    },
  },

  plugins: [],
};

export default config;
