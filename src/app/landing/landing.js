import React from 'react';
import Image from 'next/image';

import PageContainer from '../../containers/pageContainer';

function Landing() {
  return (
    <PageContainer>
      <Image
        src="/images/myphoto.webp"
        alt="Bernardo photo"
        height={250}
        width={250}
      />
      <h1>Welcome to my </h1>
      <h1>Personal</h1>
      <h1> Webpage</h1>
    </PageContainer>
  );
}

export default Landing;
