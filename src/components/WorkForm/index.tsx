'use client';

import { Controller, useForm } from 'react-hook-form';
import { defaultValues } from './defaultValues';
import { WorkDataInput } from '@/types';
import * as Input from '@/components/input';
import { createWork } from './actions';
import classNames from 'classnames';

export function WorkForm() {
  const { handleSubmit, control } = useForm({
    defaultValues,
  });

  async function onSubmit(values: WorkDataInput) {
    await createWork(values);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-10 py-6 bg-teal-200 rounded-2xl"
    >
      <div className="flex gap-2 items-end">
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <Input.Date
              label="날짜"
              onChange={(date: Date | null) => field.onChange(date)}
              selected={field.value}
            />
          )}
        />
        <Controller
          name="place"
          control={control}
          render={({ field }) => (
            <Input.Text label="작업 장소" placeholder="" {...field} />
          )}
        />
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input.Text label="작업 내용" placeholder="" {...field} />
          )}
        />
        <Controller
          name="client"
          control={control}
          render={({ field }) => (
            <Input.Text label="업체" placeholder="" {...field} />
          )}
        />
        <Controller
          name="clientMobile"
          control={control}
          render={({ field }) => (
            <Input.Text label="업체 전화 번호" placeholder="" {...field} />
          )}
        />
        <Controller
          name="workerName"
          control={control}
          render={({ field }) => (
            <Input.Text label="작업자" placeholder="" {...field} />
          )}
        />
        <Controller
          name="workerMobile"
          control={control}
          render={({ field }) => (
            <Input.Text label="작업자 전화 번호" placeholder="" {...field} />
          )}
        />
        <Controller
          name="payment"
          control={control}
          render={({ field }) => (
            <Input.Text label="작업자 전화 번호" placeholder="" {...field} />
          )}
        />
        <div>
          <button
            className={classNames(
              'py-4 px-10',
              'rounded-lg bg-teal-600 border-none whitespace-pre',
              'text-white text-lg font-bold',
            )}
          >
            저장
          </button>
        </div>
      </div>
    </form>
  );
}
