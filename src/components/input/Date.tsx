import { forwardRef } from 'react';
import DatePicker, { type DatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Text } from './Text';

type Props = DatePickerProps & {
  label: string;
};

export const Date = forwardRef<DatePicker, Props>(function Date(
  { label, ...props },
  ref,
) {
  return (
    <div>
      <DatePicker
        ref={ref}
        {...props}
        customInput={<Text label={label} placeholder="" />}
      />
    </div>
  );
});
