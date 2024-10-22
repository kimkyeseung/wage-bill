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

interface Props
  extends HTMLAttributes<HTMLTableCellElement>,
    PropsWithChildren {
  datumId: string;
  name: string;
  initialValue: string;
}

export function EditableTd({
  children,
  className,
  datumId,
  name,
  initialValue,
  ...props
}: Props) {
  const editableRef = useRef<HTMLTableCellElement>(null);
  const router = useRouter();
  const [content, setContent] = useState('');

  const handleInput = () => {
    if (editableRef.current) {
      setContent(editableRef.current.innerHTML);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTableCellElement> = (event) => {
    if (event.keyCode === 229) return; // 한글 입력시 마지막 글자가 중복입력 되는 문제 해결하기 위해 필요.
    if (event.key === 'Enter') {
      event.preventDefault();
      editableRef.current?.blur();
    }
  };

  const handleBlur = async () => {
    if (content !== (initialValue || '')) {
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
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      contentEditable
      {...props}
    >
      {children}
    </Td>
  );
}
