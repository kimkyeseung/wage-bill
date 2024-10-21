import { MonthSelectButton } from './MonthSelectButton';

export function Dates() {
  return (
    <div className="flex items-center gap-4">
      날짜:
      <MonthSelectButton />
    </div>
  );
}
