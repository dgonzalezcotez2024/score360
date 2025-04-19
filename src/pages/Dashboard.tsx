
import { Button } from "@/components/ui/button";
import DashboardStats from "@/components/DashboardStats";
import RecentActivities from "@/components/RecentActivities";
import UpcomingPayments from "@/components/UpcomingPayments";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Resumen de la actividad y métricas de cobranza.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            <Select defaultValue="month">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Periodo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Hoy</SelectItem>
                <SelectItem value="week">Esta semana</SelectItem>
                <SelectItem value="month">Este mes</SelectItem>
                <SelectItem value="year">Este año</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-score-turquoise hover:bg-score-blue">
            Descargar reporte
          </Button>
        </div>
      </div>

      <DashboardStats />
      
      <div className="grid gap-4 md:grid-cols-3">
        <RecentActivities />
        <UpcomingPayments />
      </div>
    </div>
  );
};

export default Dashboard;
