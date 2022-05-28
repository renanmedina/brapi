import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white max-w-sm">
            Use a melhor API de finanças do Brasil
          </h1>
          <p className="mb-8 leading-relaxed max-w-md">
            Ganhe acesso aos dados de qualquer ação, moeda ou criptomoeda
          </p>
          <div className="flex justify-center">
            <Link href="/docs" passHref>
              <button className="btn btn-primary">Começar</button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="relative">
            <img
              className="object-cover object-center"
              alt="Dashboard de gráficos com uma pessoa feliz"
              src="/hero_image/dashboard_person.png"
            />
            <img
              className="object-cover object-center absolute top-1/2 -left-16 motion-safe:animate-bounce"
              alt="Cartão de crédito"
              src="/hero_image/credit_card.png"
            />
            <img
              className="object-cover object-center absolute bottom-0 right-0 motion-safe:animate-wiggle origin-bottom"
              alt="Planta"
              src="/hero_image/plant.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
