import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Work from '@/models/Work';

export async function PATCH(
  req: Request,
  { params }: { params: { _id: string } },
) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const updatedWork = await Work.findByIdAndUpdate(params._id, body, {
      new: true,
    });

    if (!updatedWork) {
      return NextResponse.json(
        { success: false, message: 'Work not found' },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: updatedWork });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: 'Failed to update work' },
      { status: 400 },
    );
  }
}
