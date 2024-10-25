import { MonthSelectButton } from './MonthSelectButton';
import { Suspense } from 'react';
import { YearSelectButton } from './YearSelectButton';
import { ClearButton } from './ClearButton';

export function Dates() {
  return (
    <div className="flex items-center w-full">
      날짜:
      <Suspense>
        <div className="inline-flex gap-2 ml-4">
          <YearSelectButton />
          <MonthSelectButton />
        </div>
        <ClearButton />
      </Suspense>
    </div>
  );
}
