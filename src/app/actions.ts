'use server';

import { get } from '@/lib/api';
import { WorkDataParams, WorkDataResponse } from '@/types';

export const fetchWorks = async (params?: WorkDataParams) => {
  return await get<WorkDataResponse[]>('/api/works', params);
};
