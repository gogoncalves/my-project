import { NextResponse } from "next/server";

let tasks= ["Comprar coca", "NextJS"]

export async function GET(request: Request) {
  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  const data = await request.json();
  tasks.push(data.name);
  return NextResponse.json(tasks);
}

// http://localhost:3000/api/menu?index=1
export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const index = searchParams.get("index");
  const data = await request.json();

  tasks[Number(index)] = data.name

  return NextResponse.json(tasks);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const index = searchParams.get("index");

  tasks.splice(Number(index), 1);

  return NextResponse.json(tasks);
}