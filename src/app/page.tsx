import { DataTable } from '@/components/DataTable';
import { Filter } from '@/components/Filter';
import { Title } from '@/components/Title';
import { WorkForm } from '@/components/WorkForm';
import { WorkDataParams } from '@/types';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import classNames from 'classnames';
import { fetchWorks } from './actions';

interface PageProps {
  searchParams: WorkDataParams;
}

export default async function Home({ searchParams }: PageProps) {
  const queryClient = new QueryClient();
  const { month, year } = searchParams;

  await queryClient.prefetchQuery({
    queryKey: ['fetchWorks', { month, year }],
    queryFn: async () => await fetchWorks({ month, year }),
  });

  const dehydratedState = dehydrate(queryClient);

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
      <HydrationBoundary state={dehydratedState}>
        <DataTable {...searchParams} />
      </HydrationBoundary>
      <WorkForm />
    </div>
  );
}
