export const { format: numberFormat } = Intl.NumberFormat('en-US');

export const allowOnlyNumber = (value: string) => value.replace(/[^0-9]/g, '');

export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/[^0-9]/g, '');

  const formatted = cleaned.replace(/(\d)(?=(\d{4})+(?!\d))/g, '$1-');

  return formatted;
}

export function areEqualMobileValues(
  value1: string = '',
  value2: string = '',
): boolean {
  return value1.replace(/[^0-9]/g, '') === value2.replace(/[^0-9]/g, '');
}

export function areEqualNumericValues(
  value1: string | number,
  value2: string | number,
): boolean {
  const normalize = (val: string | number) => {
    if (typeof val === 'string') {
      return Number(val.replace(/,/g, ''));
    }
    return Number(val);
  };

  return value1 || value2 ? normalize(value1) === normalize(value2) : true;
}
