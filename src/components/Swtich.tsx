'use client';

import classNames from 'classnames';
import { useContext } from 'react';
import { Context } from './DataTable/DataTableContext';

interface Props {
  label: string;
}

export function Switch({ label }: Props) {
  const { setIsOnEdit, isOnEdit } = useContext(Context);

  return (
    <label className="relative flex gap-2 items-center group p-2">
      {label}
      <input
        type="checkbox"
        className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
        checked={isOnEdit}
        onChange={(e) => setIsOnEdit(e.target.checked)}
      />
      <span
        className={classNames(
          'w-8 h-5 flex items-center flex-shrink-0 p-1',
          'bg-gray-300 rounded-full',
          'duration-300 ease-in-out peer-checked:bg-green-400',
          'after:w-3.5 after:h-3.5 after:bg-white after:rounded-full after:shadow-md after:duration-300',
          'peer-checked:after:translate-x-2.5',
        )}
      />
    </label>
  );
}
