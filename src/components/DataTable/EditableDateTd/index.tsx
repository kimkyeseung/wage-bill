'use client';

import DatePicker from 'react-datepicker';
import { updateWork } from '../actions';
import { Td } from '../Td';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { ExampleCustomInput } from './CustomDateInput';

interface Props {
  datumId: string;
  initialValue: Date;
}

export function EditableDateTd({ datumId, initialValue }: Props) {
  const router = useRouter();
  const handleUpdateDate = async (date: Date | null) => {
    if (initialValue !== date) {
      try {
        await updateWork(datumId, { date: date ?? undefined });
        toast.success('데이터가 변경되었습니다.');
      } catch {
        toast.error('데이터 변경에 문제가 발생하였습니다.');
        router.refresh();
      }
    }
  };

  return (
    <Td>
      <DatePicker
        selected={initialValue}
        onChange={handleUpdateDate}
        required
        customInput={<ExampleCustomInput />}
      />
    </Td>
  );
}
