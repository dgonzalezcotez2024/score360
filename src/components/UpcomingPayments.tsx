
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";

const payments = [
  {
    name: "Conjunto Residencial La Alameda",
    amount: "$5,800,000",
    dueDate: "25 Abril, 2025",
    status: "En tiempo",
    progress: 0,
    statusColor: "bg-green-500/10 text-green-500"
  },
  {
    name: "Edificio Torres del Cielo",
    amount: "$3,200,000",
    dueDate: "30 Abril, 2025",
    status: "En tiempo",
    progress: 0,
    statusColor: "bg-green-500/10 text-green-500"
  },
  {
    name: "Conjunto Campestre El Edén",
    amount: "$7,450,000",
    dueDate: "2 Mayo, 2025",
    status: "Por vencer",
    progress: 80,
    statusColor: "bg-amber-500/10 text-amber-500"
  },
  {
    name: "Centro Comercial Plaza Central",
    amount: "$12,800,000",
    dueDate: "5 Mayo, 2025",
    status: "Por vencer",
    progress: 60,
    statusColor: "bg-amber-500/10 text-amber-500"
  },
  {
    name: "Edificio Mirador del Parque",
    amount: "$4,200,000",
    dueDate: "Vencido (10 días)",
    status: "Atrasado",
    progress: 100,
    statusColor: "bg-red-500/10 text-red-500"
  }
];

export function UpcomingPayments() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Próximos Compromisos de Pago</CardTitle>
            <CardDescription>
              Compromisos adquiridos por deudores
            </CardDescription>
          </div>
          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {payments.map((payment, index) => (
            <div key={index} className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{payment.name}</p>
                  <p className="text-sm text-muted-foreground">{payment.amount}</p>
                </div>
                <Badge variant="outline" className={payment.statusColor}>
                  {payment.status}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Progress value={payment.progress} className="h-2" />
                <span className="text-xs text-muted-foreground whitespace-nowrap">{payment.dueDate}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default UpcomingPayments;
