import { SideScroller } from '~/components/MainQuotes/SideScroller';

interface QuotesQuoteLayoutProps {
  children: React.ReactNode;
}

export const revalidate = 900;

export default async function QuotesQuoteLayout({
  children,
}: QuotesQuoteLayoutProps) {
  return (
    <div className="bg-gray-900">
      {/* @ts-expect-error Server Component */}
      <SideScroller />
      {children}
    </div>
  );
}
