import classNames from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface Props
  extends HTMLAttributes<HTMLTableCellElement>,
    PropsWithChildren {}

export function Th({ children, className, ...props }: Props) {
  return (
    <th
      className={classNames('px-2 py-2 font-medium text-black', className)}
      {...props}
    >
      {children}
    </th>
  );
}
