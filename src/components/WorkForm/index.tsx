'use client';

import { Controller, useForm } from 'react-hook-form';
import { defaultValues } from './defaultValues';
import { WorkDataInput } from '@/types';
import * as Input from '@/components/input';
import { createWork } from './actions';
import classNames from 'classnames';
import { allowOnlyNumber, formatPhoneNumber } from '@/lib';
import toast from 'react-hot-toast';

export function WorkForm() {
  const { handleSubmit, control, reset } = useForm({
    defaultValues,
  });

  async function onSubmit(values: WorkDataInput) {
    try {
      await createWork(values);
      toast.success('데이터가 생성되었습니다.');
      reset();
    } catch (error) {
      console.log(error);
      toast.error('데이터 변경에 문제가 발생하였습니다.');
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames(
        'fixed bottom-10 left-20 right-20',
        'px-10 py-6 bg-teal-100 rounded-2xl',
      )}
    >
      <div className="flex gap-2 items-end">
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <Input.Date
              label="날짜"
              locale="ko"
              dateFormat="yyyy. M. d."
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
            <Input.Text
              label="업체 전화 번호"
              placeholder=""
              {...field}
              maxLength={11}
              onChange={(e) => {
                field.onChange(allowOnlyNumber(e.target.value));
              }}
              onFocus={(e) => {
                field.onChange(allowOnlyNumber(e.target.value));
              }}
              onBlur={(e) => {
                field.onChange(formatPhoneNumber(e.target.value));
              }}
            />
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
            <Input.Text
              label="작업자 전화 번호"
              placeholder=""
              {...field}
              maxLength={11}
              onChange={(e) => {
                field.onChange(allowOnlyNumber(e.target.value));
              }}
              onFocus={(e) => {
                field.onChange(allowOnlyNumber(e.target.value));
              }}
              onBlur={(e) => {
                field.onChange(formatPhoneNumber(e.target.value));
              }}
            />
          )}
        />
        <Controller
          name="payment"
          control={control}
          render={({ field }) => (
            <Input.Text
              label="일당"
              placeholder=""
              {...field}
              onChange={(value) => {
                field.onChange(allowOnlyNumber(value.target.value));
              }}
            />
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
