import React from 'react';
import { Inter } from 'next/font/google';
import PropTypes from 'prop-types';
import './globals.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import Background from '../../containers/background/background';
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
    // images: [
    //   {
    //     url: 'https://bernardodev-bernardo1411.vercel.app/images/opengraph_image.png',
    //     width: 300,
    //     height: 300,
    //   },
    // ],
    type: 'website',
  },
};

function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <head>
        <meta property="og:image:url" content="https://bernardodev-bernardo1411.vercel.app/images/opengraph_image.png" />
        <meta property="og:image:secure_url" content="https://bernardodev-bernardo1411.vercel.app/images/opengraph_image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="opengraph image" />
        <meta itemProp="image" content="https://bernardodev-bernardo1411.vercel.app/images/opengraph_image.png" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Background>
          <NextIntlClientProvider messages={messages}>
            <Navbar locale={locale} />
            {children}
          </NextIntlClientProvider>
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
  params: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
};

export default RootLayout;
