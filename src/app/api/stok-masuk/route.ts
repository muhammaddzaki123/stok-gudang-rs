import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { barangId, jumlah } = await request.json();

  const [newStokMasuk] = await prisma.$transaction([
    prisma.stokMasuk.create({
      data: {
        barangId,
        jumlah,
      },
    }),
    prisma.barang.update({
      where: { id: barangId },
      data: {
        stok: {
          increment: jumlah,
        },
      },
    }),
  ]);

  return NextResponse.json(newStokMasuk);
}
