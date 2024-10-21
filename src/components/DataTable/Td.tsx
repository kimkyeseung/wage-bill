import classNames from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface Props
  extends HTMLAttributes<HTMLTableCellElement>,
    PropsWithChildren {}

export function Td({ children, className, ...props }: Props) {
  return (
    <td
      className={classNames(
        'border-b border-gray-400 px-2 py-2 dark:border-strokedark',
        'text-black',
        className,
      )}
      {...props}
    >
      {children}
    </td>
  );
}
