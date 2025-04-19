
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader } from "@/components/ui/sidebar";
import { Building, Home, Users, FileText, Calendar, Settings, LogOut, DollarSign, FileBarChart, BarChart3, PieChart } from "lucide-react";
import ScoreLogo from "./ScoreLogo";
import { Outlet } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

// Definir items del menú
const menuItems = [
  { name: "Dashboard", icon: Home, path: "/dashboard" },
  { name: "Clientes", icon: Building, path: "/clientes" },
  { name: "Deudores", icon: Users, path: "/deudores" },
  { name: "Obligaciones", icon: FileText, path: "/obligaciones" },
  { name: "Convenios de Pago", icon: DollarSign, path: "/convenios" },
  { name: "Procesos Jurídicos", icon: FileBarChart, path: "/procesos" },
  { name: "Agenda", icon: Calendar, path: "/agenda" },
  { name: "Reportes", icon: BarChart3, path: "/reportes" },
  { name: "Estadísticas", icon: PieChart, path: "/estadisticas" },
  { name: "Configuración", icon: Settings, path: "/configuracion" }
];

export function AppLayout() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Sesión cerrada",
      description: "Ha cerrado sesión exitosamente.",
    });
    navigate("/");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r">
          <SidebarHeader className="flex items-center px-4">
            <ScoreLogo size="sm" />
          </SidebarHeader>
          <SidebarContent className="h-full flex flex-col">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild>
                        <a 
                          href={item.path} 
                          className="flex items-center gap-3"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(item.path);
                          }}
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.name}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <div className="mt-auto">
              <SidebarFooter className="p-4 border-t">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-score-turquoise text-white">AM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Ana Martínez</p>
                      <p className="text-xs text-muted-foreground">Administrador</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={handleLogout}>
                    <LogOut className="h-5 w-5" />
                  </Button>
                </div>
              </SidebarFooter>
            </div>
          </SidebarContent>
        </Sidebar>
        <div className="flex-1 flex flex-col">
          <header className="border-b h-14 flex items-center px-6 justify-between sticky top-0 bg-background z-10">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold">Score Especialistas en Cobranza</h1>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-6">
            <Outlet />
          </main>
          <footer className="h-12 border-t bg-muted/50 text-muted-foreground flex items-center justify-center text-sm">
            © {new Date().getFullYear()} Score Especialistas en Cobranza. Todos los derechos reservados.
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default AppLayout;
