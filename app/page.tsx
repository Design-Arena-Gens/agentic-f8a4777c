'use client';

import { useMemo, useState } from 'react';
import ForecastForm from '../components/ForecastForm';
import ForecastChart from '../components/ForecastChart';
import { generateSeries } from '../lib/forecast';

export default function Page() {
  const [selected, setSelected] = useState<string[]>(['Vanilla', 'Honey']);
  const [horizon, setHorizon] = useState<number>(12);
  const series = useMemo(() => generateSeries(selected as any, horizon), [selected, horizon]);

  return (
    <main>
      <section className="panel">
        <h2>Choose flavors and horizon</h2>
        <ForecastForm
          selected={selected}
          setSelected={setSelected}
          horizon={horizon}
          setHorizon={setHorizon}
        />
      </section>

      <section className="panel">
        <h2>Demand forecast</h2>
        <ForecastChart labels={series.labels} history={series.dataHistory} forecast={series.dataForecast} />
      </section>

      <section className="panel">
        <h3>Notes</h3>
        <ul>
          <li>Seasonality boosts winter and early summer depending on flavors.</li>
          <li>3% YoY growth trend applied; values are synthetic and deterministic.</li>
        </ul>
      </section>
    </main>
  );
}
