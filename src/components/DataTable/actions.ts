'use server';

import { patch } from '@/lib/api';
import { WorkDataInput } from '@/types';
import { revalidatePath } from 'next/cache';

export const updateWork = async (_id: string, values: WorkDataInput) => {
  const res = await patch(`/api/works/${_id}`, values);
  revalidatePath('/');

  return res;
};
