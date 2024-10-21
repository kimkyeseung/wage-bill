import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Work from '@/models/Work';

export async function GET() {
  try {
    await connectToDatabase();
    const works = await Work.find({});
    return NextResponse.json({ success: true, data: works });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch users' },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    console.log("Received body:", body); // 데이터를 로깅하여 확인
    const work = await Work.create(body); // 유효성 검사 및 데이터 생성

    console.log("Work created:", work); // 생성된 데이터를 확인
    return NextResponse.json({ success: true, data: work }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: 'Failed to create user' },
      { status: 400 },
    );
  }
}
