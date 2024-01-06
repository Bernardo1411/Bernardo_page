import React from 'react';
import { Inter } from 'next/font/google';
import PropTypes from 'prop-types';
import './globals.css';

import Background from '../containers/background/background';
import Navbar from './navbar/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: `http://localhost:${process.env.PORT || 3000}`,
  title: 'Bernardo',
  description: 'Wellcome to my professional website!',
  openGraph: {
    title: 'Bernardo',
    description: 'Wellcome to my professional website!',
    url: 'https://bernardodev-bernardo1411.vercel.app/',
    siteName: 'Bernardo website',
    images: [
      {
        url: '/public/images/fav.png',
        width: 500,
        height: 300,
      },
    ],
    type: 'website',
  },
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image:url" content="/public/images/fav.png" />
        <meta property="og:image:secure_url" content="/public/images/fav.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Background>
          <Navbar />
          {children}
        </Background>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
};

export default RootLayout;
