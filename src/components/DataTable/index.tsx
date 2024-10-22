import { Th } from './Th';
import { fetchWorks } from './actions';
import { Row } from './Row';

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
          data.map((datum) => <Row key={datum._id} datum={datum} />)
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
