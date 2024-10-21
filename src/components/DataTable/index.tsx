import { Th } from './Th';
import { Td } from './Td';
import dayjs from 'dayjs';
import { numberFormat } from '@/lib';
import classNames from 'classnames';
import { WorkData } from '@/types';
import { fetchWorks } from '../actions';

const DATE_FORMAT = 'MM/DD/YYYY';

export async function DataTable() {
  const { data } = await fetchWorks();

  return (
    <table className="min-h-[200px] w-full table-auto">
      <thead>
        <tr className="bg-gray-2 text-left dark:bg-meta-4">
          <Th>날짜</Th>
          <Th>작업 장소</Th>
          <Th>작업 내용</Th>
          <Th>업체</Th>
          <Th>업체 전화 번호</Th>
          <Th>작업자</Th>
          <Th>작업자 전화 번호</Th>
          <Th>일당</Th>
        </tr>
      </thead>

      <tbody className="overflow-auto">
        {data.length ? (
          data.map((datum: WorkData, index: number) => (
            <tr key={index} className={classNames('hover:bg-slate-300')}>
              <Td>{datum.date ? dayjs(datum.date).format(DATE_FORMAT) : ''}</Td>
              <Td>{datum.place}</Td>
              <Td>{datum.title}</Td>
              <Td>{datum.client}</Td>
              <Td>{datum.clientMobile}</Td>
              <Td>{datum.workerName}</Td>
              <Td>{datum.workerMobile}</Td>
              <Td>{datum.payment ? numberFormat(datum.payment) : ''}</Td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={10000} className="py-20 text-center">
              No results
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
