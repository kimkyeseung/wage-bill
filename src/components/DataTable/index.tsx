'use client';

import { Th } from './Th';
import { fetchWorks } from './actions';
import { Row } from './Row';
import { sumBy } from 'lodash';
import { numberFormat } from '@/lib';
import { Td } from './Td';
import { WorkDataParams, WorkDataResponse } from '@/types';
import { useEffect, useState } from 'react';

export function DataTable({ month, year }: WorkDataParams) {
  const [data, setData] = useState<WorkDataResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { data } = await fetchWorks({ month, year });
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [month, year]);

  const paymentTotal = sumBy(data, 'payment');

  if (isLoading) {
    return 'loading...';
  }

  return (
    <div>
      <table className="w-full table-auto mb-[200px]">
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

        <tbody className="overflow-auto pb-[200px]">
          {data.length ? (
            data.map((datum) => <Row key={datum._id} datum={datum} />)
          ) : (
            <tr>
              <td colSpan={10000} className="py-20 text-center">
                No results
              </td>
            </tr>
          )}

          <tr>
            <Td colSpan={10000} className="text-right border-none">
              <strong>일당 합계:</strong>
              <span className="ml-4 inline-block min-w-24">
                {numberFormat(paymentTotal)} 원
              </span>
            </Td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
