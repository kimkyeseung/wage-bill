import { forwardRef } from 'react';

interface CustomInputProps {
  value?: string;
  onClick?: () => void;

  className?: string;
}

export const ExampleCustomInput = forwardRef<
  HTMLButtonElement,
  CustomInputProps
>(({ value, className, onClick }, ref) => (
  <button className={className} onClick={onClick} ref={ref}>
    {value || <span className="text-gray-400">날짜 입력</span>}
  </button>
));
