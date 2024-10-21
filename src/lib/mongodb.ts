import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local',
  );
}

async function connectToDatabase() {
  return mongoose
    .connect(MONGODB_URI, {
      autoIndex: true,
      dbName: '노임청구서',
    })
    .then((mongoose) => {
      return mongoose.connection;
    });
}

export default connectToDatabase;
