import { DataTable } from '@/components/DataTable';
import { Filter } from '@/components/Filter';
import { Title } from '@/components/Title';
import { WorkForm } from '@/components/WorkForm';
import { WorkDataParams } from '@/types';
import classNames from 'classnames';

interface PageProps {
  searchParams: WorkDataParams;
}

export default function Home({ searchParams }: PageProps) {
  return (
    <div
      className={classNames(
        'space-y-16',
        'min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]',
        'relative',
      )}
    >
      <Title />
      <Filter />
      <DataTable {...searchParams} />
      <WorkForm />
    </div>
  );
}
