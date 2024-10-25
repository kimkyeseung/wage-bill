import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Work from '@/models/Work';
import { getDateRange } from '@/lib';

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const url = new URL(req.url);

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const year = Number(url.searchParams.get('year') ?? currentYear);
    const month = Number(url.searchParams.get('month') ?? currentMonth);

    const { startDate, endDate } = getDateRange(
      year,
      month,
      currentYear,
      currentMonth,
    );

    const query = { date: { $gte: startDate, $lt: endDate } };
    const works = await Work.find(query);

    return NextResponse.json({ success: true, data: works });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch works' },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const work = await Work.create(body); // 유효성 검사 및 데이터 생성

    return NextResponse.json({ success: true, data: work }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: 'Failed to create user' },
      { status: 400 },
    );
  }
}
