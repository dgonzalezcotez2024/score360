
import { usePaymentAgreements } from "@/hooks/usePaymentAgreements";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Search, CalendarCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

const Convenios = () => {
  const { data: agreements, isLoading } = usePaymentAgreements();

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
                <TableHead>Monto Total</TableHead>
                <TableHead>Cuotas</TableHead>
                <TableHead>Fecha Inicio</TableHead>
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
              ) : agreements?.map((agreement) => (
                <TableRow key={agreement.id}>
                  <TableCell>{agreement.id}</TableCell>
                  <TableCell>${agreement.total_amount.toLocaleString()}</TableCell>
                  <TableCell>{agreement.installments}</TableCell>
                  <TableCell>{new Date(agreement.start_date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      agreement.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : agreement.status === 'defaulted'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {agreement.status === 'completed' && 'Completado'}
                      {agreement.status === 'defaulted' && 'Incumplido'}
                      {agreement.status === 'active' && 'Activo'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <CalendarCheck className="h-4 w-4 mr-2" />
                      Ver pagos
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

export default Convenios;
