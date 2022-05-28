import Link from 'next/link';

export const WhatWeDo = () => {
  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 mb-10 pb-10 border-b border-gray-800">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            O que realmente fazemos
          </h1>
          <p className="leading-relaxed text-base">
            A brapi é uma API de ações, moedas e criptomoedas onde você tem
            acesso aos dados de qualquer ação, como preço atual, preço mínimo e
            máximo do dia ou ano, variação, volume, volume transacionado,
            histórico de preços, etc. Para moedas e criptomoedas você ainda pode
            converter de uma moeda para qualquer outra.
          </p>
          <Link href="/docs" passHref>
            <a className="text-brand-400 inline-flex items-center mt-4">
              Começar
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </Link>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <h2 className="title-font font-semibold text-white tracking-wider text-sm mb-3">
            CATEGORIAS
          </h2>
          <nav className="flex flex-wrap list-none -mb-1">
            <li className="lg:w-1/3 mb-1 w-1/2">
              <Link href="/docs#stocks" passHref>
                <a className="hover:text-white">Bovespa</a>
              </Link>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <Link href="/docs#stocks-history" passHref>
                <a className="hover:text-white">Dados históricos</a>
              </Link>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <Link href="/docs#stocks-fundamentalist" passHref>
                <a className="hover:text-white">Dados fundamentalistas</a>
              </Link>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <Link href="/docs#crypto" passHref>
                <a className="hover:text-white">Criptomoedas</a>
              </Link>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <Link href="/docs#currency" passHref>
                <a className="hover:text-white">Moedas</a>
              </Link>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <Link href="/docs#search" passHref>
                <a className="hover:text-white">Pesquisa rápida</a>
              </Link>
            </li>
          </nav>
        </div>
      </div>
    </section>
  );
};
