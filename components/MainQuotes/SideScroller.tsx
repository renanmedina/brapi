import {
  IQuoteSimpleCardProps,
  QuoteSimpleCard,
} from '~/components/MainQuotes/QuoteSimpleCard';

interface ISideScrollerProps {
  quotes: IQuoteSimpleCardProps[];
}

export const SideScroller = ({ quotes }: ISideScrollerProps) => {
  return (
    <div className="flex space-x-2 overflow-hidden pb-5 hover:overflow-auto hover:pb-[5px]">
      {quotes.map((quote) => (
        <QuoteSimpleCard
          key={quote.stock}
          stock={quote.stock}
          name={quote.name}
          close={quote.close}
          change={quote.change}
          logo={quote.logo}
        />
      ))}
    </div>
  );
};
