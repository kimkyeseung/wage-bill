'use client';

import classNames from 'classnames';
import {
  HTMLAttributes,
  KeyboardEventHandler,
  PropsWithChildren,
  useRef,
  useState,
} from 'react';
import { updateWork } from './actions';

interface Props
  extends HTMLAttributes<HTMLTableCellElement>,
    PropsWithChildren {
  datumId: string;
  name: string;
}

export function Td({ children, className, datumId, name, ...props }: Props) {
  const editableRef = useRef<HTMLTableCellElement>(null);
  const [content, setContent] = useState(children);

  const handleInput = () => {
    if (editableRef.current) {
      setContent(editableRef.current.innerHTML);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTableCellElement> = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      editableRef.current?.blur();
    }
  };

  const handleBlur = async () => {
    if (content !== children) {
      await updateWork(datumId, { [name]: content });
    }
  };

  return (
    <td
      className={classNames(
        'border-b border-gray-400 px-2 py-2 dark:border-strokedark',
        'text-black',
        className,
      )}
      ref={editableRef}
      onInput={handleInput}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      contentEditable
      {...props}
    >
      {children}
    </td>
  );
}
