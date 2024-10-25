export const { format } = Intl.NumberFormat('en-US');

export function numberFormat(value: number | string): string {
  return value ? format(Number(value)) : '';
}

export const allowOnlyNumber = (value: string) => value.replace(/[^0-9]/g, '');

export function formatPhoneNumber(phoneNumber: string | number): string {
  const cleaned = String(phoneNumber).replace(/[^0-9]/g, '');

  const formatted = cleaned.replace(/(\d)(?=(\d{4})+(?!\d))/g, '$1-');

  return formatted;
}

export function areEqualMobileValues(
  value1: number | string = '',
  value2: number | string = '',
): boolean {
  return (
    String(value1).replace(/[^0-9]/g, '') ===
    String(value2).replace(/[^0-9]/g, '')
  );
}

export function areEqualNumericValues(
  value1: string | number,
  value2: string | number,
): boolean {
  const normalize = (val: string | number) => {
    if (typeof val === 'string') {
      return val ? Number(val.replace(/,/g, '')) : '';
    }
    return val ? Number(val) : '';
  };

  return value1 || value2 ? normalize(value1) === normalize(value2) : true;
}

export function getDateRange(
  year: number,
  month: number,
  currentYear: number,
  currentMonth: number,
) {
  if (year && month) {
    return {
      startDate: new Date(year, month, 1),
      endDate: new Date(year, month + 1, 1),
    };
  } else if (year) {
    return {
      startDate: new Date(year, 0, 1),
      endDate: new Date(year + 1, 0, 1),
    };
  } else {
    return {
      startDate: new Date(currentYear, currentMonth, 1),
      endDate: new Date(currentYear, currentMonth + 1, 1),
    };
  }
}
