'use client';

import { useContext, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { WorkDataInput } from '@/types';
import { Context } from '@/components/DataTable/DataTableContext';

type FormatValueFunction = {
  (value: string): string;
  (value: number): string;
  (value: string | number): string;
};

interface UseEditableTdProps {
  datumId: string;
  name: string;
  initialValue: string | number;
  handleMutate(
    _id: string,
    values: WorkDataInput,
  ): Promise<{
    data: unknown;
  }>;
  formatValue?: FormatValueFunction;
  compareValues?: (
    current: string | number,
    initial: string | number,
  ) => boolean;
}

export function useEditableTd({
  datumId,
  name,
  initialValue,
  handleMutate,
  formatValue = (value: string | number) => String(value),
  compareValues = (current, initial) => current === initial,
}: UseEditableTdProps) {
  const editableRef = useRef<HTMLTableCellElement>(null);
  const router = useRouter();
  const [content, setContent] = useState(
    initialValue ? String(initialValue) : '',
  );

  const { isOnEdit } = useContext(Context);

  const handleFocus = () => {
    if (initialValue && editableRef.current) {
      editableRef.current.innerHTML = String(initialValue);
    }
  };

  const handleInput = () => {
    if (editableRef.current) {
      setContent(editableRef.current.innerHTML);
    }
  };

  const handleBlur = async () => {
    if (!editableRef.current) return;

    if (editableRef.current) {
      if (initialValue) {
        editableRef.current.innerHTML = formatValue(initialValue);
      }
    }

    const hasChanged = !compareValues(content, formatValue(initialValue));

    if (hasChanged) {
      try {
        await handleMutate(datumId, { [name]: content });
        toast.success('데이터가 변경되었습니다.');
      } catch (error) {
        console.error(error);
        toast.error('데이터 변경에 문제가 발생하였습니다.');
        router.refresh();
      }
    }
  };

  return {
    isOnEdit,
    editableRef,
    content,
    handleFocus,
    handleInput,
    handleBlur,
  };
}
