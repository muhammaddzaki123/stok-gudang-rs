import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";
import { StokMasukTable } from "@/components/barang/in/stok-masuk-table";
import { AddStokMasukDialog } from "@/components/barang/in/add-stok-masuk-dialog";

const prisma = new PrismaClient();

async function getStokMasuk() {
  const stokMasuk = await prisma.stokMasuk.findMany({
    include: {
      barang: true,
    },
  });
  return stokMasuk;
}

async function getBarang() {
  const barang = await prisma.barang.findMany();
  return barang;
}

export default async function StokMasukPage() {
  const [data, barang] = await Promise.all([getStokMasuk(), getBarang()]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Barang Masuk</CardTitle>
        <CardDescription>
          Kelola data barang masuk Anda di sini.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-end">
          <AddStokMasukDialog barang={barang} />
        </div>
        <StokMasukTable data={data} />
      </CardContent>
    </Card>
  );
}
