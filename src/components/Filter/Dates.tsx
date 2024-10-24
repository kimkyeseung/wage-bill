import { MonthSelectButton } from './MonthSelectButton';
import { Suspense } from 'react';
import { YearSelectButton } from './YearSelectButton';

export function Dates() {
  return (
    <div>
      날짜:
      <div className="inline-flex gap-2 ml-4">
        <Suspense>
          <YearSelectButton />
          <MonthSelectButton />
        </Suspense>
      </div>
    </div>
  );
}
