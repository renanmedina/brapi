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
  };
}

export const MainQuote = async ({ quote }: IMainQuoteProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <span className="text-2xl font-bold">{quote.symbol}</span>
        <span className="text-sm">{quote.longName}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm">Preço</span>
        <span className="text-2xl font-bold">
          {quote.regularMarketPrice.toFixed(2)}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm">Variação</span>
        <span className="text-2xl font-bold">
          {numberToMoney(quote.regularMarketChange)} (
          {quote.regularMarketChangePercent.toFixed(2)}%)
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
  );
};
