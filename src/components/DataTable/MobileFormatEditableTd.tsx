'use client';

import { HTMLAttributes, KeyboardEventHandler, PropsWithChildren } from 'react';
import { Td } from './Td';
import { areEqualMobileValues, formatPhoneNumber } from '@/lib';
import { useEditableTd } from '@/hooks/useEditableTd';
import { updateWork } from './actions';
import { WorkDataInput } from '@/types';
import { mapValues } from 'lodash';

interface Props
  extends HTMLAttributes<HTMLTableCellElement>,
    PropsWithChildren {
  datumId: string;
  name: string;
  initialValue: string;
}

const mobileDigitLimit = 11;

export function MobileFormatEditableTd({
  children,
  datumId,
  name,
  initialValue,
  ...props
}: Props) {
  const { editableRef, handleInput, handleBlur } = useEditableTd({
    datumId,
    name,
    initialValue,
    formatValue: formatPhoneNumber,
    compareValues: areEqualMobileValues,
    handleMutate: (datumId: string, values: WorkDataInput) =>
      updateWork(datumId, mapValues(values, formatPhoneNumber)),
  });

  const handleFocus = () => {
    if (initialValue && editableRef.current) {
      editableRef.current.innerHTML = initialValue.replace(/-/g, '');
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

    if (isNumber && editableRef.current.innerHTML.length >= mobileDigitLimit) {
      e.preventDefault();
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
