import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/app/data/employess.json');

function readData() {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

function writeData(data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export async function GET() {
  const data = readData();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const data = readData();
  const newUser = { id: Date.now(), ...body };
  data.push(newUser);
  writeData(data);
  return NextResponse.json(newUser, { status: 201 });
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { id, ...rest } = body;
  const data = readData();
  const index = data.findIndex((emp: any) => emp.id === id);
  if (index !== -1) {
    data[index] = { ...data[index], ...rest };
    writeData(data);
    return NextResponse.json(data[index], { status: 200 });
  } else {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const { id } = body;
  const data = readData();
  const filteredData = data.filter((emp: any) => emp.id !== id);
  writeData(filteredData);
  return NextResponse.json({ message: 'User deleted' }, { status: 200 });
}
