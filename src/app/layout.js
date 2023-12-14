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
    // url: 'https://nextjs.org',
    siteName: 'Bernardo website',
    images: [
      {
        url: '/public/meta_image.png',
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
  },
};

function RootLayout({ children }) {
  return (
    <html lang="en">
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
