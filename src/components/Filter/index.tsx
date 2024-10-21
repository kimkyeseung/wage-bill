import classNames from 'classnames';
import { Dates } from './Dates';

export function Filter() {
  return (
    <div
      className={classNames(
        'flex items-center w-full',
        'px-4 py-2 rounded-md',
        'border border-teal-300 bg-teal-50',
      )}
    >
      <Dates />
    </div>
  );
}
