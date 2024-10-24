'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

function useQueryState(
  key: string,
  defaultValue: string | number,
): [string, (newValue: string | number) => void] {
  const searchParams = useSearchParams();
  const router = useRouter();

  // 쿼리 파라미터에서 값을 가져오고 없으면 기본값으로 설정
  const queryValue = searchParams.get(key) || defaultValue;
  const [state, setState] = useState<string>(String(queryValue));

  // 상태가 변경되면 URL 쿼리 파라미터 업데이트
  const setQueryState = (newValue: string | number) => {
    if (typeof newValue === 'number') {
      newValue = String(newValue);
    }
    setState(newValue);

    const params = new URLSearchParams(window.location.search);
    params.set(key, newValue); // 모든 값을 string으로 변환해 쿼리 파라미터에 설정
    router.push(`?${params.toString()}`);
  };

  // 쿼리 파라미터가 변경되면 상태도 업데이트
  useEffect(() => {
    setState(String(queryValue));
  }, [queryValue]);

  return [state, setQueryState];
}

export default useQueryState;
