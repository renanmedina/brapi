import clsx from 'clsx';
import { IHistoricalDataPrice } from '~/@types/IHistoricalDataPrice';
import { QuoteChart } from '~/components/MainQuotes/QuoteChart';
import { numberToMoney } from '~/utils/formatNumbers';

interface IMainQuoteProps {
  quote: {
    marketCap: number | null;
    shortName: string;
    longName: string;
    stockImg?: string;
    regularMarketChange: number;
    regularMarketChangePercent: number;
    regularMarketTime: number;
    regularMarketPrice: number;
    symbol: string;
    historicalDataPrice: IHistoricalDataPrice[];
  };
}

export const MainQuote = async ({ quote }: IMainQuoteProps) => {
  return (
    <div className="flex justify-between space-x-8 max-w-full">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <span className="text-2xl font-bold">{quote.symbol}</span>
          <span className="text-sm">{quote.longName}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm">Preço</span>
          <span className="text-2xl font-bold">
            {numberToMoney(quote.regularMarketPrice)}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm">Variação (dia)</span>
          <span className="text-2xl font-bold">
            {numberToMoney(quote.regularMarketChange)} (
            {quote.regularMarketChangePercent.toFixed(2)}%)
            {quote.regularMarketChangePercent > 0 ? '▲' : '▼'}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm">Última atualização</span>
          <span className="text-2xl font-bold">
            {new Date(quote.regularMarketTime).toLocaleString()}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm">Capitalização de mercado</span>
          <span className="text-2xl font-bold">
            {numberToMoney(quote.marketCap)}
          </span>
        </div>
      </div>

      <QuoteChart historicalDataPrices={quote.historicalDataPrice} />
    </div>
  );
};
