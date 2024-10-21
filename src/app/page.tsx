import { DataTable } from '@/components/DataTable';
import { Title } from '@/components/Title';
import { WorkForm } from '@/components/WorkForm';
import classNames from 'classnames';

export default function Home() {
  return (
    <div
      className={classNames(
        'grid grid-rows-[20px_1fr_20px] items-center justify-items-center',
        'min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]',
      )}
    >
      <Title />
      <DataTable />
      <WorkForm />
    </div>
  );
}
