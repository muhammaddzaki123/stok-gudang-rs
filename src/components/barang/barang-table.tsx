"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Barang } from "@prisma/client";

interface BarangTableProps {
  data: Barang[];
}

export function BarangTable({ data }: BarangTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Kode</TableHead>
          <TableHead>Nama Barang</TableHead>
          <TableHead>Satuan</TableHead>
          <TableHead>Stok</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.kodeBarang}</TableCell>
            <TableCell>{item.namaBarang}</TableCell>
            <TableCell>{item.satuan}</TableCell>
            <TableCell>{item.stok}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
