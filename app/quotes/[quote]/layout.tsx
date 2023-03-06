import { SideScroller } from '~/components/MainQuotes/SideScroller';

interface QuotesQuoteLayoutProps {
  children: React.ReactNode;
}

const getData = async () => {
  const res = await fetch(
    'https://brapi.dev/api/quote/list?sortBy=volume&limit=20',
  );
  const data = await res.json();
  return data?.stocks;
};

export default async function QuotesQuoteLayout({
  children,
}: QuotesQuoteLayoutProps) {
  const quotes = await getData();

  return (
    <>
      <div className="space-y-2 container mx-auto px-5 pt-6">
        <SideScroller quotes={quotes} />
      </div>
      {children}
    </>
  );
}
