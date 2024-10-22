'use server';

import { get, patch } from '@/lib/api';
import { WorkDataInput, WorkDataResponse } from '@/types';
import { revalidatePath } from 'next/cache';

export const fetchWorks = async () => {
  return await get<WorkDataResponse[]>('/api/works');
};

export const updateWork = async (_id: string, values: WorkDataInput) => {
  const res = await patch(`/api/works/${_id}`, values);
  revalidatePath('/');

  return res;
};
