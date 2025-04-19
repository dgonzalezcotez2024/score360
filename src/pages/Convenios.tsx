
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Search, CalendarCheck } from "lucide-react";
import { Input } from "@/components/ui/input";

const Convenios = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Convenios de Pago</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Convenio
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gestión de Convenios de Pago</CardTitle>
          <div className="flex gap-2 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar convenio..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Número</TableHead>
                <TableHead>Deudor</TableHead>
                <TableHead>Monto Total</TableHead>
                <TableHead>Cuotas</TableHead>
                <TableHead>Próximo Pago</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>CONV-001</TableCell>
                <TableCell>Juan Pérez</TableCell>
                <TableCell>$2,500,000</TableCell>
                <TableCell>12</TableCell>
                <TableCell>2025-05-01</TableCell>
                <TableCell>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    Al día
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <CalendarCheck className="h-4 w-4 mr-2" />
                    Ver pagos
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Convenios;
