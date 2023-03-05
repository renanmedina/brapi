'use client';

import { format } from 'd3-format';
import { timeFormatLocale } from 'd3-time-format';

import {
  MouseCoordinateX,
  MouseCoordinateY,
  Chart,
  ChartCanvas,
  BarSeries,
  XAxis,
  YAxis,
  discontinuousTimeScaleProviderBuilder,
  AreaSeries,
  CrossHairCursor,
  OHLCTooltip,
} from 'react-financial-charts';
import { IHistoricalDataPrice } from '~/@types/IHistoricalDataPrice';

interface IQuoteChartProps {
  historicalDataPrices: IHistoricalDataPrice[];
}

const localeDefinition = timeFormatLocale({
  dateTime: '%A, %e de %B de %Y. %X',
  date: '%d/%m/%Y',
  time: '%H:%M:%S',
  periods: ['AM', 'PM'],
  days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  shortDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  shortMonths: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
});

export const QuoteChart = ({ historicalDataPrices }: IQuoteChartProps) => {
  const initialData = historicalDataPrices;
  const height = 300;
  const ratio = 1;
  const width = 600;
  const margin = { left: 0, right: 40, top: 24, bottom: 24 };

  const gridHeight = height - margin.top - margin.bottom;

  const barChartHeight = gridHeight / 4;
  const barChartOrigin = (_: number, h: number) => [0, h - barChartHeight];

  const xScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
    (d) => new Date(d.date * 1000),
  );

  const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
    initialData,
  );

  const maxX = xAccessor(data[data.length - 1]);
  const minX = xAccessor(data[Math.max(0, data.length - 100)]);
  const xExtents = [minX, maxX];

  const timeDisplayFormat = localeDefinition.format('%d %b %Y');

  const pricesDisplayFormat = format('.2f');

  return (
    <ChartCanvas
      height={height}
      ratio={ratio}
      width={width}
      margin={margin}
      data={data}
      displayXAccessor={displayXAccessor}
      seriesName="Data"
      xScale={xScale}
      xAccessor={xAccessor}
      xExtents={xExtents}
    >
      <Chart id={1} yExtents={(d) => [d.high, d.low]}>
        <MouseCoordinateX displayFormat={timeDisplayFormat} />
        <MouseCoordinateY
          rectWidth={margin.right}
          displayFormat={pricesDisplayFormat}
        />
        <AreaSeries yAccessor={(d) => d.close} />
        <XAxis />
        <YAxis />
        <OHLCTooltip origin={[8, 16]} />
      </Chart>
      <Chart
        id={2}
        height={barChartHeight}
        origin={barChartOrigin}
        yExtents={(d) => d.volume}
      >
        <BarSeries
          fillStyle={(d) =>
            d.close > d.open
              ? 'rgba(38, 160, 150, 0.3)'
              : 'rgba(239, 80, 80, 0.3)'
          }
          yAccessor={(d) => d.volume}
        />
      </Chart>
      <CrossHairCursor />
    </ChartCanvas>
  );
};
