import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";
import { StokKeluarTable } from "@/components/barang/out/stok-keluar-table";
import { AddStokKeluarDialog } from "@/components/barang/out/add-stok-keluar-dialog";

const prisma = new PrismaClient();

async function getStokKeluar() {
  const stokKeluar = await prisma.stokKeluar.findMany({
    include: {
      barang: true,
    },
  });
  return stokKeluar;
}

async function getBarang() {
  const barang = await prisma.barang.findMany();
  return barang;
}

export default async function StokKeluarPage() {
  const [data, barang] = await Promise.all([getStokKeluar(), getBarang()]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Barang Keluar</CardTitle>
        <CardDescription>
          Kelola data barang keluar Anda di sini.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-end">
          <AddStokKeluarDialog barang={barang} />
        </div>
        <StokKeluarTable data={data} />
      </CardContent>
    </Card>
  );
}
