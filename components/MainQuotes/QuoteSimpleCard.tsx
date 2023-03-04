import { numberToMoney } from '~/utils/formatNumbers';

interface IQuoteSimpleCardProps {
  stock: string;
  name: string;
  close: number;
  change: number;
}

export const QuoteSimpleCard = ({
  stock,
  name,
  change,
  close,
}: IQuoteSimpleCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-2xl font-bold">{stock}</div>
      <div className="text-sm">{name}</div>
      <div className="text-sm">{numberToMoney(close)}</div>
      <div className="text-sm">{Math.floor(change * 100) / 100}%</div>
    </div>
  );
};
