import Link from 'next/link';

const Main: React.FC = () => {
  return (
    <main>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white max-w-sm">
              A melhor API de finanças do Brasil
            </h1>
            <p className="mb-8 leading-relaxed max-w-md">
              Precisa de uma API da Bovespa ou de Cripto? Não importa o que você
              precisa, temos a solução
            </p>
            <div className="flex justify-center">
              <Link href="/docs" passHref>
                <button className="inline-flex text-white bg-brand-500 border-0 py-2 px-6 focus:outline-none hover:bg-brand-600 rounded text-lg">
                  Começar
                </button>
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

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">
            Feito para você
            <br className="hidden sm:block" />
            não perder tempo
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-brand-400 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-medium mb-2">
                  Extremamente rápido
                </h2>
                <p className="leading-relaxed text-base">
                  Utilizamos toda a infraestrutura da Vercel com a AWS para que
                  todas as requisições sejam feitas de forma rápida e segura.
                  Otimizada para requisições na nuvem com escalabilidade
                  infinita e smart caching.
                </p>
                <a
                  href="https://vercel.com/features/infrastructure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-brand-400 inline-flex items-center"
                >
                  Saber mais
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
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-brand-400 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-medium mb-2">
                  Simples <i>by default</i>
                </h2>
                <p className="leading-relaxed text-base">
                  Desenvolvemos a API mais fácil de começar a utilizar, sem
                  cadastros, sem cartão de crédito e sem qualquer tipo de
                  autenticação, comece a desenvolver agora mesmo. E o melhor de
                  tudo, é grátis. Acreditamos que dados devem ser democratizados
                </p>
                <Link href="/docs" passHref>
                  <a className="mt-3 text-brand-400 inline-flex items-center">
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
            </div>

            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-brand-400 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-medium mb-2">
                  Sempre online
                </h2>
                <p className="leading-relaxed text-base">
                  A API é hospedada na nuvem e sempre online, não importa de
                  onde você faça a requisição, vamos estar online. Nosso uptime
                  atual é de 99,996%
                </p>
                <a
                  href="https://status.brapi.ga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-brand-400 inline-flex items-center"
                >
                  Ver uptime
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
