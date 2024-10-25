'use client';

import { SlReload } from 'react-icons/sl';
import { Button } from '../Button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function ClearButton() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  if (params.size === 0) {
    return null;
  }

  return (
    <Button
      variant={2}
      className="ml-auto flex gap-2 items-center"
      onClick={() => router.push(pathname)}
    >
      <SlReload />
      필터 초기화
    </Button>
  );
}
