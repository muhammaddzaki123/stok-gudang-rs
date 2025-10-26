import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";
import { AddBarangDialog } from "@/components/barang/add-barang-dialog";
import { BarangTable } from "@/components/barang/barang-table";

const prisma = new PrismaClient();

async function getBarang() {
  const barang = await prisma.barang.findMany();
  return barang;
}

export default async function BarangPage() {
  const data = await getBarang();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Barang</CardTitle>
        <CardDescription>
          Kelola data barang Anda di sini.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-end">
          <AddBarangDialog />
        </div>
        <BarangTable data={data} />
      </CardContent>
    </Card>
  );
}
