'use client';

import classNames from 'classnames';
import { InputHTMLAttributes, forwardRef } from 'react';

export interface TextProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value'> {
  value?: string | number | null;
  label: string;
  placeholder: string;
}

export const Text = forwardRef<HTMLInputElement, TextProps>(function Text(
  { className, value = '', label, ...props },
  ref,
) {
  return (
    <div className="flex flex-col gap-2">
      <h6>{label}</h6>
      <div className="relative">
        <input
          ref={ref}
          type="text"
          className={classNames(
            'relative',
            'px-3 w-full rounded-lg',
            'border bg-transparent text-black outline-none transition disabled:cursor-default disabled:bg-whiter',
            'focus:border-primary active:border-primary dark:focus:border-primary dark:border-gray-800',
            'h-[56px]',
            className,
          )}
          value={value || ''}
          {...props}
        />
      </div>
    </div>
  );
});
