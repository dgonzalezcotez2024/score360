
import { useObligations } from "@/hooks/useObligations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Search, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

const Obligaciones = () => {
  const { data: obligations, isLoading } = useObligations();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Obligaciones</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nueva Obligación
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gestión de Obligaciones</CardTitle>
          <div className="flex gap-2 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar obligación..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Número</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Monto</TableHead>
                <TableHead>Fecha Vencimiento</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6}>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </TableCell>
                </TableRow>
              ) : obligations?.map((obligation) => (
                <TableRow key={obligation.id}>
                  <TableCell>{obligation.number}</TableCell>
                  <TableCell>
                    {obligation.type === 'admin_fee' && 'Cuota Administración'}
                    {obligation.type === 'invoice' && 'Factura'}
                    {obligation.type === 'promissory_note' && 'Pagaré'}
                  </TableCell>
                  <TableCell>${obligation.amount.toLocaleString()}</TableCell>
                  <TableCell>{new Date(obligation.due_date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      obligation.status === 'paid' 
                        ? 'bg-green-100 text-green-800'
                        : obligation.status === 'overdue'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {obligation.status === 'paid' && 'Pagada'}
                      {obligation.status === 'overdue' && 'Vencida'}
                      {obligation.status === 'pending' && 'Pendiente'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Ver
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Obligaciones;
