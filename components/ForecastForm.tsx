import { allFlavors } from '../lib/forecast';

export default function ForecastForm({
  selected,
  setSelected,
  horizon,
  setHorizon,
}: {
  selected: string[];
  setSelected: (flavors: string[]) => void;
  horizon: number;
  setHorizon: (n: number) => void;
}) {
  function toggle(flavor: string) {
    if (selected.includes(flavor)) {
      setSelected(selected.filter((f) => f !== flavor));
    } else {
      setSelected([...selected, flavor]);
    }
  }

  return (
    <div className="controls">
      <div className="flavors">
        {allFlavors.map((f) => (
          <button
            key={f}
            className={`chip ${selected.includes(f) ? 'active' : ''}`}
            onClick={() => toggle(f)}
            type="button"
          >
            {f}
          </button>
        ))}
      </div>
      <div className="horizon">
        <label>Forecast horizon:</label>
        <input
          type="range"
          min={6}
          max={24}
          value={horizon}
          onChange={(e) => setHorizon(parseInt(e.target.value))}
        />
        <span>{horizon} months</span>
      </div>
    </div>
  );
}
