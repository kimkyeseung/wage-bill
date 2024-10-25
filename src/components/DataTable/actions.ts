'use server';

import { get, patch } from '@/lib/api';
import { WorkDataInput, WorkDataParams, WorkDataResponse } from '@/types';
import { revalidatePath } from 'next/cache';

export const fetchWorks = async (params?: WorkDataParams) => {
  return await get<WorkDataResponse[]>('/api/works', params);
};

export const updateWork = async (_id: string, values: WorkDataInput) => {
  const res = await patch(`/api/works/${_id}`, values);
  revalidatePath('/');

  return res;
};
