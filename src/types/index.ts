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

export interface WorkDataResponse extends WorkData {
  _id: string;
}

export type WorkDataInput = Partial<WorkData>;
