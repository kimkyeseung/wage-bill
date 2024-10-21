import { WorkData } from '@/types';
import mongoose, { Model, Schema } from 'mongoose';

const WorkSchema: Schema<WorkData> = new Schema<WorkData>({
  date: { type: Date, required: false },
  title: { type: String, required: false },
  place: { type: String, required: false },
  payment: { type: Number, required: false },
  client: { type: String, required: false },
  clientMobile: { type: String, required: false },
  workerName: { type: String, required: false },
  workerMobile: { type: String, required: false },
});

const Work: Model<WorkData> =
  mongoose.models.Work || mongoose.model<WorkData>('Work', WorkSchema);

export default Work;
