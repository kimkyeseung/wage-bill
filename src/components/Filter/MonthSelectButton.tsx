'use client';

import useQueryState from '@/hooks/useQueryState';
import { Dropdown } from '@/components/Dropdown';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { useState } from 'react';

export function MonthSelectButton() {
  const [isOpen, setIsOpen] = useState(false);

  const [month, setMonth] = useQueryState('month', dayjs().month());

  return (
    <div className="relative">
      <button
        className={classNames(
          'py-2 px-4',
          'rounded-lg bg-teal-600 border-none whitespace-pre',
          'text-white text-lg font-bold',
        )}
        onClick={() => setIsOpen(true)}
      >
        {`${Number(month) + 1} 월`}
      </button>
      <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex w-60 flex-wrap gap-1">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((m) => {
            const isActive = m === Number(month);

            return (
              <span
                key={m}
                className={classNames(
                  'grow basis-18 cursor-pointer rounded  px-4 py-2 text-center shadow-card dark:bg-boxdark',
                  isActive
                    ? 'bg-teal-500 text-white'
                    : 'bg-white text-black dark:bg-boxdark dark:hover:bg-opacity-50',
                )}
                onClick={() => {
                  setMonth(m);
                  if (isActive) {
                    setIsOpen(false);
                  }
                }}
                title={`${m + 1}`}
              >
                {dayjs().set('month', m).format('M 월')}
              </span>
            );
          })}
        </div>
      </Dropdown>
    </div>
  );
}
