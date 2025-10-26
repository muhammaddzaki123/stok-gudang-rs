"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StokKeluar, Barang } from "@prisma/client";

interface StokKeluarTableProps {
  data: (StokKeluar & { barang: Barang })[];
}

export function StokKeluarTable({ data }: StokKeluarTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nama Barang</TableHead>
          <TableHead>Jumlah</TableHead>
          <TableHead>Tanggal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.barang.namaBarang}</TableCell>
            <TableCell>{item.jumlah}</TableCell>
            <TableCell>{new Date(item.tanggal).toLocaleDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
