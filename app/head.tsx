import Script from 'next/script';
import { GA_TRACKING_ID } from '~/utils/gtag';

const Head = () => {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta
        name="keywords"
        content="API, Desenvolvimento, Cripto, Criptomoeda, Bitcoin, Ethereum, Bovespa, Ibovespa, Negócios, Informações financeiras, Investimento, Investidor, Notícias de mercado, Pesquisa de ações, Avaliação de ações, notícias de negócios, economia, finanças, ferramentas de investimento, hipotecas, fundos mútuos, finanças pessoais, cotação, imóveis, aposentadoria, ações, ações, impostos , monitorar portfólio"
      />
      <meta name="theme-color" content="#7347AB" />
      <meta property="og:title" content="brapi" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://brapi.dev/favicon.png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta
        property="og:description"
        lang="pt-BR"
        content="API ilimitada da BOVESPA e Cryptomoedas. Ajudamos desenvolvedores a construir o futuro das fintechs democratizando o acesso aos dados do mercado financeiro brasileiro."
      />
      <meta property="og:url" content="https://brapi.dev" />
      <meta property="og:locale" content="pt-BR" />
      <link rel="manifest" href="/manifest.json" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5.0, minimum-scale=0.86"
      />

      <meta
        name="google-site-verification"
        content="Gy5EFTeucGOTohOucovRJIzCaWPkQ1qWs3mktuSNyGw"
      />

      <Script
        async
        defer
        src="https://www.googleoptimize.com/optimize.js?id=OPT-M7MLFBD"
      ></Script>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        async
        defer
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        async
        defer
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
        }}
      />
    </>
  );
};

export default Head;
