import classNames from 'classnames';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface Props
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 1 | 2 | 3;
}

const variantStyleMap = {
  1: 'bg-teal-600 hover:bg-teal-700 border-none text-white',
  2: 'border-teal-600 border',
  3: 'bg-gray-50 hover:bg-gray-100 border-none text-gray-700',
};

export function Button({ children, className, variant = 1, ...props }: Props) {
  return (
    <button
      className={classNames(
        'rounded-lg whitespace-pre',
        'text-lg font-bold',
        'py-2 px-4',
        variantStyleMap[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
