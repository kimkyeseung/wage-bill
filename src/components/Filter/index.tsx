import classNames from 'classnames';
import { Month } from './Month';

export function Filter() {
  return (
    <div
      className={classNames(
        'flex items-center w-full',
        'px-4 py-2 rounded-md',
        'border border-teal-300 bg-teal-50',
      )}
    >
      <Month />
    </div>
  );
}
