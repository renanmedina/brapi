import { Brands } from './Brands';
import { CTA } from './CTA';
import { Features } from './Features';
import { Hero } from './Hero';
import { Numbers } from './Numbers';
import { WhatWeDo } from './WhatWeDo';

const Main = () => {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <Brands />
      <Features />
      <Numbers />
      <CTA />
    </main>
  );
};

export default Main;
