import { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '~/components/Analytics';
import { AutoToast } from '~/components/AutoToast';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import '~/styles/global.css';
import { GA_TRACKING_ID } from '~/utils/gtag';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: 'brapi',
    template: '%s | brapi',
    absolute: 'brapi - API de ações da bolsa de valores brasileira',
  },
  description:
    'API ilimitada da BOVESPA e Cryptomoedas. Ajudamos desenvolvedores a construir o futuro das fintechs democratizando o acesso aos dados do mercado financeiro brasileiro.',
  openGraph: {
    title: 'brapi - API de ações da bolsa de valores brasileira',
    description:
      'API ilimitada da BOVESPA e Cryptomoedas. Ajudamos desenvolvedores a construir o futuro das fintechs democratizando o acesso aos dados do mercado financeiro brasileiro.',
    type: 'website',
    images: [{ url: 'https://brapi.dev/favicon.png' }],
    siteName: 'brapi',
    url: 'https://brapi.dev',
  },
  applicationName: 'brapi',
  twitter: {
    card: 'summary_large_image',
    title: 'brapi',
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
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

      <body>
        <Header />
        {children}
        <Analytics />
        <AutoToast />
        <Footer />
      </body>
    </html>
  );
}
