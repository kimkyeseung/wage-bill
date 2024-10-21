import classNames from 'classnames';

export function Month() {
  return (
    <div className="flex items-center gap-4">
      날짜:
      <button
        className={classNames(
          'py-2 px-4',
          'rounded-lg bg-teal-600 border-none whitespace-pre',
          'text-white text-lg font-bold',
        )}
      >
        10월
      </button>
    </div>
  );
}
