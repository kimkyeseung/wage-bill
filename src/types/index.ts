export interface WorkData {
  date: Date;
  title: string;
  place: string;
  payment: number;
  client: string;
  clientMobile: string;
  workerName: string;
  workerMobile: string;
}

export interface WorkDataParams {
  month?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11;
  year?: number;
}

export interface WorkDataResponse extends WorkData {
  _id: string;
}

export type WorkDataInput = Partial<WorkData>;
