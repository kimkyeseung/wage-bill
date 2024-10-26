'use client';

import { useEditableTd } from '@/hooks/useEditableTd';
import { Td } from './Td';
import { HTMLAttributes, KeyboardEventHandler, PropsWithChildren } from 'react';
import { updateWork } from './actions';

interface Props
  extends HTMLAttributes<HTMLTableCellElement>,
    PropsWithChildren {
  datumId: string;
  name: string;
  initialValue: string | number;
}

export function EditableTd({
  datumId,
  name,
  initialValue,
  children,
  ...props
}: Props) {
  const { editableRef, handleInput, handleBlur, handleFocus, isOnEdit } =
    useEditableTd({
      datumId,
      name,
      initialValue,
      handleMutate: updateWork,
    });
  const handleKeyDown: KeyboardEventHandler<HTMLTableCellElement> = (e) => {
    if (e.keyCode === 229) return; // 한글 입력시 마지막 글자가 중복입력 되는 문제 해결하기 위해 필요.
    if (e.key === 'Enter') {
      e.preventDefault();
      editableRef.current?.blur();
    }
  };

  return (
    <Td
      ref={editableRef}
      onInput={handleInput}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      contentEditable={isOnEdit}
      {...props}
    >
      {children}
    </Td>
  );
}
