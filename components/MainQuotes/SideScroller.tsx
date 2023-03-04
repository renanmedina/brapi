import { QuoteSimpleCard } from '~/components/MainQuotes/QuoteSimpleCard';

export const SideScroller = () => {
  const quotes = [
    {
      stock: 'FNAM11',
      name: 'FINAM CI *',
      close: 0.27,
      change: -3.57142857,
    },
    {
      stock: 'HAPV3',
      name: 'HAPVIDA',
      close: 2.68,
      change: -8.21917808,
    },
    {
      stock: 'MGLU3',
      name: 'MAGAZINE LUIZA',
      close: 3.02,
      change: -4.12698413,
    },
    {
      stock: 'PETR4',
      name: 'PETROBRAS PN',
      close: 25.700001,
      change: 4.30195634,

      sector: 'Energy Minerals',
    },
  ];

  return (
    <div className="flex space-x-4">
      {quotes.map((quote) => (
        <QuoteSimpleCard
          key={quote.stock}
          stock={quote.stock}
          name={quote.name}
          close={quote.close}
          change={quote.change}
        />
      ))}
    </div>
  );
};
