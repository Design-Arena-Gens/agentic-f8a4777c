import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Filler,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Legend, Tooltip, Filler);

export default function ForecastChart({
  labels,
  history,
  forecast,
}: {
  labels: string[];
  history: number[];
  forecast: number[];
}) {
  const data = {
    labels,
    datasets: [
      {
        label: 'History',
        data: history,
        borderColor: 'rgba(99, 102, 241, 1)',
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        tension: 0.25,
        spanGaps: true,
        fill: true,
      },
      {
        label: 'Forecast',
        data: forecast,
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.15)',
        borderDash: [6, 4],
        tension: 0.25,
        spanGaps: true,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'top' as const } },
    scales: {
      x: { ticks: { maxRotation: 0 } },
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="chart-wrap">
      <Line data={data} options={options} />
    </div>
  );
}
