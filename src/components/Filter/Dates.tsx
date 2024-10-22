import { MonthSelectButton } from './MonthSelectButton';
import { YearSelectButton } from './YearSelectButton';

export function Dates() {
  return (
    <div>
      날짜:
      <div className="inline-flex gap-2 ml-4">
        <YearSelectButton />
        <MonthSelectButton />
      </div>
    </div>
  );
}
