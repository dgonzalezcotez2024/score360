
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    user: "Ana Martínez",
    userInitials: "AM",
    userImage: "",
    action: "registró un pago parcial",
    target: "Edificio Torres del Parque",
    amount: "$2,500,000",
    date: "Hace 5 min",
    type: "payment"
  },
  {
    id: 2,
    user: "Carlos Ramírez",
    userInitials: "CR",
    userImage: "",
    action: "creó un acuerdo de pago con",
    target: "Juan Pérez (Conjunto Residencial El Prado)",
    amount: "$4,800,000",
    date: "Hace 26 min",
    type: "agreement"
  },
  {
    id: 3,
    user: "Laura Gómez",
    userInitials: "LG",
    userImage: "",
    action: "inició proceso jurídico contra",
    target: "Inmobiliaria Central",
    amount: "$12,480,000",
    date: "Hace 1 hora",
    type: "legal"
  },
  {
    id: 4,
    user: "Miguel Torres",
    userInitials: "MT",
    userImage: "",
    action: "envió notificación de cobro a",
    target: "Residentes Edificio Aurora (15 deudores)",
    amount: "",
    date: "Hace 2 horas",
    type: "notification"
  },
  {
    id: 5,
    user: "Sistema",
    userInitials: "S",
    userImage: "",
    action: "generó reporte mensual para",
    target: "Conjunto Residencial Altos del Bosque",
    amount: "",
    date: "Hace 3 horas",
    type: "system"
  }
];

const typeColors = {
  payment: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
  agreement: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
  legal: "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20",
  notification: "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20",
  system: "bg-slate-500/10 text-slate-500 hover:bg-slate-500/20"
};

const typeLabels = {
  payment: "Pago",
  agreement: "Acuerdo",
  legal: "Jurídico",
  notification: "Notificación",
  system: "Sistema"
};

export function RecentActivities() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Actividad Reciente</CardTitle>
        <CardDescription>
          Se han registrado 158 actividades en las últimas 24 horas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div className="flex items-start gap-4" key={activity.id}>
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.userImage} />
                <AvatarFallback className="bg-score-turquoise/10 text-score-turquoise">
                  {activity.userInitials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium leading-none">
                    {activity.user}
                  </p>
                  <Badge variant="outline" className={typeColors[activity.type as keyof typeof typeColors]}>
                    {typeLabels[activity.type as keyof typeof typeLabels]}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.action} <span className="font-semibold">{activity.target}</span> 
                  {activity.amount && <span className="font-semibold"> - {activity.amount}</span>}
                </p>
                <p className="text-xs text-muted-foreground">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default RecentActivities;
