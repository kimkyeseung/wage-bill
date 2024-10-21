'use server';

import { get } from '@/lib/api';

export const fetchWorks = async () => {
  return await get('/api/works');
};
