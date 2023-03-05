import { QuoteProps } from '~/@types/QuoteProps';
import { MainQuote } from '~/components/MainQuotes/MainQuote';

interface IMainQuotesProps {
  currentStock: string;
}

interface IQuote extends QuoteProps {
  historicalDataPrice: {
    date: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
  };
}

const getCurrentQuote = async (stock: string) => {
  const res = await fetch(
    `https://brapi.dev/api/quote/${stock}?range=1y&interval=1d&fundamental=true`,
  );
  const data = await res.json();
  return (data?.results?.[0] || null) as IQuote;
};

const MainQuotes = async ({ currentStock }: IMainQuotesProps) => {
  const currentQuote = await getCurrentQuote(currentStock);

  if (!currentQuote) {
    return <div>Não foi possível carregar os dados de {currentStock}</div>;
  }

  return (
    <div className="py-4 flex w-full flex-col space-y-4">
      <div>
        {/* @ts-expect-error Server Component */}
        <MainQuote quote={currentQuote} />
      </div>
    </div>
  );
};

export default MainQuotes;
