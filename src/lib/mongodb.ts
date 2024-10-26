import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local',
  );
}

async function connectToDatabase() {
  return mongoose
    .connect(MONGODB_URI, {
      autoIndex: true,
      dbName: MONGODB_DB_NAME,
    })
    .then((mongoose) => {
      return mongoose.connection;
    });
}

export default connectToDatabase;
