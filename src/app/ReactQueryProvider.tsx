'use client';

import {
  QueryClientProvider as Provider,
  QueryClient,
} from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

export function ReactQueryProvider({ children }: PropsWithChildren) {
  return <Provider client={queryClient}>{children}</Provider>;
}
