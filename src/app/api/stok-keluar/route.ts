import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { barangId, jumlah } = await request.json();

  const [newStokKeluar] = await prisma.$transaction([
    prisma.stokKeluar.create({
      data: {
        barangId,
        jumlah,
      },
    }),
    prisma.barang.update({
      where: { id: barangId },
      data: {
        stok: {
          decrement: jumlah,
        },
      },
    }),
  ]);

  return NextResponse.json(newStokKeluar);
}
