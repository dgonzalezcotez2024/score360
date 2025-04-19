
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Building } from "lucide-react";

const clientesData = [
  {
    id: 1,
    nombre: "Conjunto Residencial La Alameda",
    tipo: "Residencial",
    ciudad: "Bogotá",
    estado: "Activo",
    cartera: "$15,850,000",
    ultimoContacto: "15/04/2025"
  },
  {
    id: 2,
    nombre: "Edificio Torres del Cielo",
    tipo: "Residencial",
    ciudad: "Medellín",
    estado: "Activo",
    cartera: "$24,680,000",
    ultimoContacto: "12/04/2025"
  },
  {
    id: 3,
    nombre: "Conjunto Campestre El Edén",
    tipo: "Residencial",
    ciudad: "Cali",
    estado: "Inactivo",
    cartera: "$8,450,000",
    ultimoContacto: "01/03/2025"
  },
  {
    id: 4,
    nombre: "Centro Comercial Plaza Central",
    tipo: "Comercial",
    ciudad: "Bogotá",
    estado: "Activo",
    cartera: "$45,820,000",
    ultimoContacto: "10/04/2025"
  },
  {
    id: 5,
    nombre: "Edificio de Oficinas Buro 24",
    tipo: "Comercial",
    ciudad: "Barranquilla",
    estado: "Activo",
    cartera: "$32,150,000",
    ultimoContacto: "08/04/2025"
  },
  {
    id: 6,
    nombre: "Conjunto Residencial Montañas Azules",
    tipo: "Residencial",
    ciudad: "Bucaramanga",
    estado: "Inactivo",
    cartera: "$18,720,000",
    ultimoContacto: "25/03/2025"
  },
  {
    id: 7,
    nombre: "Centro Empresarial La Colina",
    tipo: "Comercial",
    ciudad: "Bogotá",
    estado: "Activo",
    cartera: "$52,340,000",
    ultimoContacto: "16/04/2025"
  }
];

export default function Clientes() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Clientes</h2>
          <p className="text-muted-foreground">
            Gestión de edificios, conjuntos residenciales y empresas.
          </p>
        </div>
        <Button className="bg-score-turquoise hover:bg-score-blue">
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Cliente
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar por nombre, tipo, ciudad..."
            className="pl-8"
          />
        </div>
        <Select defaultValue="todos">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos los tipos</SelectItem>
            <SelectItem value="residencial">Residencial</SelectItem>
            <SelectItem value="comercial">Comercial</SelectItem>
            <SelectItem value="industrial">Industrial</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="activos">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos los estados</SelectItem>
            <SelectItem value="activos">Activos</SelectItem>
            <SelectItem value="inactivos">Inactivos</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Ciudad</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Cartera</TableHead>
              <TableHead className="text-right">Último Contacto</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clientesData.map((cliente) => (
              <TableRow key={cliente.id} className="cursor-pointer hover:bg-muted/50">
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    {cliente.nombre}
                  </div>
                </TableCell>
                <TableCell>{cliente.tipo}</TableCell>
                <TableCell>{cliente.ciudad}</TableCell>
                <TableCell>
                  {cliente.estado === "Activo" ? (
                    <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                      Activo
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-slate-200 text-slate-500 hover:bg-slate-300">
                      Inactivo
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">{cliente.cartera}</TableCell>
                <TableCell className="text-right">{cliente.ultimoContacto}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
