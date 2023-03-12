import { IHistoricalDataPrice } from '~/@types/IHistoricalDataPrice';
import { QuoteProps } from '~/@types/QuoteProps';
import { MainQuote } from '~/components/MainQuotes/MainQuote';
import { QuoteChart } from '~/components/MainQuotes/QuoteChart';

interface IMainQuotesProps {
  currentStock: string;
}

interface IQuote extends QuoteProps {
  historicalDataPrice: IHistoricalDataPrice[];
}

export const getCurrentQuote = async (stock: string) => {
  const res = await fetch(
    `https://brapi.dev/api/quote/${stock}?range=max&interval=1d&fundamental=true`,
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
      {/* @ts-expect-error Server Component */}
      <MainQuote quote={currentQuote} />

      <div className="h-[400px]">
        <QuoteChart
          historicalDataPrices={currentQuote.historicalDataPrice}
          source={`https://brapi.dev/api/quote/${currentQuote.symbol}?range=max&interval=1d&fundamental=true`}
        />
      </div>
    </div>
  );
};

export default MainQuotes;
