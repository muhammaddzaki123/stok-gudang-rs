import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { kodeBarang, namaBarang, satuan } = await request.json();

  const newBarang = await prisma.barang.create({
    data: {
      kodeBarang,
      namaBarang,
      satuan,
    },
  });

  return NextResponse.json(newBarang);
}
