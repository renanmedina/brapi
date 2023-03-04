import { SideScroller } from '~/components/MainQuotes/SideScroller';

const getData = async () => {
  const res = await fetch(
    'https://brapi.dev/api/quote/list?sortBy=volume&limit=20',
  );
  const data = await res.json();
  return data?.stocks;
};

const MainQuotes = async () => {
  const quotes = await getData();

  return (
    <div className="py-4 flex w-full flex-col space-y-4">
      <SideScroller quotes={quotes} />
      <div>aaa</div>
    </div>
  );
};

export default MainQuotes;
