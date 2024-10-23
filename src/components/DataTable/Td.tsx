'use client';

import classNames from 'classnames';
import { forwardRef, PropsWithChildren, TdHTMLAttributes } from 'react';

interface Props
  extends TdHTMLAttributes<HTMLTableCellElement>,
    PropsWithChildren {}

export const Td = forwardRef<HTMLTableCellElement, Props>(function Td(
  { children, className, ...props },
  ref,
) {
  return (
    <td
      className={classNames(
        'border-b border-gray-400 px-2 py-2 dark:border-strokedark',
        'text-black',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </td>
  );
});
