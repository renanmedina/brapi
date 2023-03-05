'use client';

import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import { IHistoricalDataPrice } from '~/@types/IHistoricalDataPrice';
import { numberToMoney } from '~/utils/formatNumbers';

interface IQuoteChartProps {
  historicalDataPrices: IHistoricalDataPrice[];
}

export const QuoteChart = ({ historicalDataPrices }: IQuoteChartProps) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: historicalDataPrices.map((data) =>
          new Date(data.date * 1000).toLocaleDateString('pt-BR'),
        ),
        datasets: [
          {
            label: 'Preço',
            data: historicalDataPrices.map((data) => data.close),
            fill: true,
            backgroundColor: '#9d7ec4',
            borderColor: '#9d7ec4',
            pointRadius: 0,
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => {
                return numberToMoney(value);
              },
            },
          },
        },
        responsive: true,
        hover: {
          mode: 'nearest',
          intersect: false,
          includeInvisible: true,
        },
        showLine: true,
        maintainAspectRatio: false,
        resizeDelay: 0,
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [historicalDataPrices]);

  return (
    <div className="flex flex-col flex-1">
      <canvas ref={chartRef} />
    </div>
  );
};
