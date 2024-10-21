import classNames from 'classnames';

export function Title() {
  return (
    <h1 className={classNames('w-full', 'text-4xl font-bold', 'text-center')}>
      일일 작업 내역서
    </h1>
  );
}
