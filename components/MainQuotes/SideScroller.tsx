import {
  IQuoteSimpleCardProps,
  QuoteSimpleCard,
} from '~/components/MainQuotes/QuoteSimpleCard';

export const getSideScrollerData = async (args?: { limit?: number }) => {
  const res = await fetch(
    `https://brapi.dev/api/quote/list?sortBy=volume&limit=${args?.limit || 20}`,
  );
  const data = await res.json();
  return data?.stocks as IQuoteSimpleCardProps[];
};

export const SideScroller = async () => {
  let data = await getSideScrollerData();

  return (
    <div className="flex space-x-2 overflow-hidden pb-5 hover:overflow-auto hover:pb-[5px] container mx-auto px-5 md:pt-6 bg-gray-900">
      {data.map((quote) => (
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
