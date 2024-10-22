'use client';

import {
  HTMLAttributes,
  KeyboardEventHandler,
  PropsWithChildren,
  useRef,
  useState,
} from 'react';
import { updateWork } from './actions';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Td } from './Td';
import { areEqualNumericValues, numberFormat } from '@/lib';

interface Props
  extends HTMLAttributes<HTMLTableCellElement>,
    PropsWithChildren {
  datumId: string;
  name: string;
  initialValue: number;
}

export function NumericEditableTd({
  children,
  className,
  datumId,
  name,
  initialValue,
  ...props
}: Props) {
  const editableRef = useRef<HTMLTableCellElement>(null);
  const router = useRouter();
  const [content, setContent] = useState(
    initialValue ? String(initialValue) : '',
  );

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

  const handleKeyDown: KeyboardEventHandler<HTMLTableCellElement> = (e) => {
    if (!editableRef.current) {
      return;
    }
    const isNumber = /[0-9]/.test(e.key);
    const isAllowedKeys = [
      'ArrowRight',
      'ArrowUp',
      'ArrowLeft',
      'ArrowDown',
      'Tab',
      'Backspace',
      'Delete',
    ].includes(e.key);

    if (!isNumber && !isAllowedKeys) {
      e.preventDefault();
      if (e.key === 'Enter') {
        editableRef.current.blur();
      }
    }
  };

  const handleBlur = async () => {
    if (!editableRef.current) {
      return;
    }

    if (editableRef.current) {
      if (initialValue) {
        editableRef.current.innerHTML = numberFormat(Number(initialValue));
      }
    }

    const hasChanged = !areEqualNumericValues(content, initialValue);

    if (hasChanged) {
      try {
        await updateWork(datumId, { [name]: content });
        toast.success('데이터가 변경되었습니다.');
      } catch (error) {
        console.log(error);
        toast.error('데이터 변경에 문제가 발생하였습니다.');
        router.refresh();
      }
    }
  };

  return (
    <Td
      className={className}
      ref={editableRef}
      onInput={handleInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      contentEditable
      {...props}
    >
      {children}
    </Td>
  );
}
