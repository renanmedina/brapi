import { Metadata } from 'next';
import MainQuotes, { getCurrentQuote } from '~/components/MainQuotes';

export async function generateMetadata({ params }): Promise<Metadata> {
  const stock = await getCurrentQuote(params?.quote);

  const title = `${stock.symbol} - ${stock.shortName} | brapi`;
  const description = `Informações sobre a ação ${stock.symbol} - ${stock.shortName} da empresa ${stock.longName}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [{ url: stock.logourl }],
      siteName: 'brapi',
      url: `https://brapi.dev/quotes/${stock.symbol}`,
    },
    applicationName: 'brapi',
    twitter: {
      card: 'summary_large_image',
      title,
    },
  };
}

const Quotes = ({ params }) => {
  return (
    <main>
      <section className="max-w-screen min-h-screen">
        <div className="container mx-auto flex flex-col px-5 py-0 md:py-2 items-center">
          {/* @ts-expect-error Server Component */}
          <MainQuotes currentStock={params?.quote} />
        </div>
      </section>
    </main>
  );
};

export default Quotes;
