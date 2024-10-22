export const { format: numberFormat } = Intl.NumberFormat('en-US');

export const allowOnlyNumber = (value: string) => value.replace(/[^0-9]/g, '');

export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/[^0-9]/g, '');

  const formatted = cleaned.replace(/(\d)(?=(\d{4})+(?!\d))/g, '$1-');

  return formatted;
}
