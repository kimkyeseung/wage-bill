'use server';

import { post } from '@/lib/api';
import { WorkDataInput } from '@/types';
import { revalidatePath } from 'next/cache';

export async function createWork(values: WorkDataInput) {
  const res = await post('/api/works', values);
  revalidatePath('/');

  return res;
}
