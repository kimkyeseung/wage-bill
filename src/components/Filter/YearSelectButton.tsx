'use client';

import useQueryState from '@/hooks/useQueryState';
import { Dropdown } from '@/components/Dropdown';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { useState } from 'react';
import * as Input from '@/components/input';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../Button';

const thisYear = dayjs().year();

export function YearSelectButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [year, setYear] = useQueryState('year', thisYear);

  const { handleSubmit, setValue, control } = useForm({
    defaultValues: { year },
  });

  function onSubmit(values: { year: string }) {
    setYear(values.year);
  }

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
        {`${year} 년`}
      </button>

      <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form className="w-[240px] space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="year"
            control={control}
            render={({ field }) => (
              <Input.Text label="" placeholder="0000" {...field} />
            )}
          />
          <div className="flex items-center">
            <Button variant={3} onClick={() => setIsOpen(false)}>
              취소
            </Button>
            <Button
              className="ml-auto"
              variant={2}
              onClick={() => setValue('year', String(thisYear))}
            >
              초기화
            </Button>
            <Button className="ml-2" variant={1} type="submit">
              확인
            </Button>
          </div>
        </form>
      </Dropdown>
    </div>
  );
}
