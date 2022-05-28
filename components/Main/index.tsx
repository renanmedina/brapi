import Link from 'next/link';

import mainSpeed from '../../assets/front-page/main-speed.svg';
import stockGuy from '../../assets/front-page/main-stock.svg';
import mainContact from '../../assets/front-page/main-contact.svg';

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
              <button className="inline-flex text-white bg-brand-500 border-0 py-2 px-6 focus:outline-none hover:bg-brand-600 rounded text-lg">
                Começar
              </button>
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

      <section>
        <aside>
          <h1>Simples de Usar</h1>
          <p>
            Sem autenticações ou métodos complexos, documentação direta ao ponto
          </p>
          <Link href="/docs">
            <a>Documentação</a>
          </Link>
        </aside>
        <img src={mainSpeed} alt="Pessoa sentada em cima de um velocimetro" />
      </section>

      <section>
        <aside>
          <h1>Cotação em Tempo Real</h1>
          <p>
            Acesse a nossa interface para cotação em tempo real das ações
            brasileiras ou criptomoedas
          </p>
          <Link href="/quotes">
            <a>Cotação</a>
          </Link>
        </aside>
        <img src={stockGuy} alt="Pessoa olhando um gráfico de ações" />
      </section>

      <section>
        <aside>
          <h1>Entre em Contato</h1>
          <p>Encontrou algum problema, ou tem alguma sugestão?</p>
          <Link href="https://github.com/alissonsleal/brapi">
            <a target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </Link>
        </aside>
        <img
          src={mainContact}
          alt="Pessoas olhando o celular e logos de mensagem e telefone"
        />
      </section>
    </main>
  );
};

export default Main;
