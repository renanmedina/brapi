import { Brands } from './Brands';
import { CTA } from './CTA';
import { Features } from './Features';
import { Hero } from './Hero';
import { Numbers } from './Numbers';

const Main: React.FC = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <Features />
      <Numbers />
      <CTA />
    </main>
  );
};

export default Main;
