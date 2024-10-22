'use client';

import classNames from 'classnames';
import { PropsWithChildren, useEffect, useRef } from 'react';

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export const Dropdown = ({ isOpen, onClose, children }: Props) => {
  const dropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      const target = event.target as HTMLDivElement; // 타입 단언
      if (!dropdown.current) return;
      if (!isOpen || dropdown.current.contains(target)) {
        return;
      }
      onClose();
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!isOpen || key !== 'Escape') return;
      onClose();
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div
      ref={dropdown}
      onBlur={() => onClose()}
      className={classNames(
        'absolute left-full top-0 z-10',
        'space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark',
        `${isOpen === true ? 'block' : 'hidden'}`,
      )}
    >
      {children}
    </div>
  );
};
