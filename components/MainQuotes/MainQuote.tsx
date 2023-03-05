import { IHistoricalDataPrice } from '~/@types/IHistoricalDataPrice';
import { QuoteProps } from '~/@types/QuoteProps';
import { QuoteChart } from '~/components/MainQuotes/QuoteChart';
import { numberToMoney } from '~/utils/formatNumbers';

interface IMainQuoteProps {
  quote: QuoteProps & {
    historicalDataPrice: IHistoricalDataPrice[];
  };
}

export const MainQuote = async ({ quote }: IMainQuoteProps) => {
  return (
    <div className="flex space-y-6 max-w-full flex-col">
      <div className="flex space-x-2 items-center">
        <img src={quote.logourl} className="w-12 h-12 rounded-md" />
        <div className="flex flex-col">
          <span className="text-2xl font-bold">{quote.symbol}</span>
          <span className="text-sm">{quote.longName}</span>
        </div>
      </div>

      <div className="flex justify-between">
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

      <div className="min-h-[400px]">
        <QuoteChart historicalDataPrices={quote.historicalDataPrice} />
      </div>
    </div>
  );
};
