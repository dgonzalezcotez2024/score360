
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, Users, Building, FileText, CalendarClock } from "lucide-react";

const stats = [
  {
    title: "Cartera Total",
    value: "$ 1,245,670,500",
    icon: BadgeDollarSign,
    description: "93 clientes activos",
    color: "bg-score-turquoise/10 text-score-turquoise"
  },
  {
    title: "Recaudos del Mes",
    value: "$ 156,890,000",
    icon: BadgeDollarSign,
    description: "+12.5% vs mes anterior",
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "Clientes",
    value: "93",
    icon: Building,
    description: "8 nuevos este mes",
    color: "bg-score-blue/10 text-score-blue"
  },
  {
    title: "Deudores",
    value: "2,458",
    icon: Users,
    description: "856 en mora > 90 días",
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    title: "Procesos Jurídicos",
    value: "134",
    icon: FileText,
    description: "28 nuevos este mes",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Compromisos Pendientes",
    value: "45",
    icon: CalendarClock,
    description: "12 para hoy",
    color: "bg-red-500/10 text-red-500"
  }
];

const DashboardStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <div className={`p-2 rounded-full ${stat.color}`}>
              <stat.icon className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground pt-1">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
