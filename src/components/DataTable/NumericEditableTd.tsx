'use client';

import { HTMLAttributes, KeyboardEventHandler, PropsWithChildren } from 'react';
import { Td } from './Td';
import { areEqualNumericValues, numberFormat } from '@/lib';
import { useEditableTd } from '@/hooks/useEditableTd';
import { updateWork } from './actions';

interface Props
  extends HTMLAttributes<HTMLTableCellElement>,
    PropsWithChildren {
  datumId: string;
  name: string;
  initialValue: number;
}

export function NumericEditableTd({
  children,
  datumId,
  name,
  initialValue,
  ...props
}: Props) {
  const { editableRef, handleInput, handleBlur, handleFocus } = useEditableTd({
    datumId,
    name,
    initialValue,
    formatValue: numberFormat,
    compareValues: areEqualNumericValues,
    handleMutate: updateWork,
  });

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

  return (
    <Td
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
