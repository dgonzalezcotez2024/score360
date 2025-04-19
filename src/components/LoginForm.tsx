
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Esta sería la lógica real de autenticación
    setTimeout(() => {
      setIsLoading(false);
      
      // Simulamos login exitoso para demostración
      if (email.includes("admin")) {
        toast({
          title: "Inicio de sesión exitoso",
          description: "Bienvenido al sistema de gestión de cobranza.",
        });
        navigate("/dashboard");
      } else {
        toast({
          variant: "destructive",
          title: "Error de autenticación",
          description: "Credenciales inválidas. Por favor, intente de nuevo.",
        });
      }
    }, 1500);
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Iniciar sesión</CardTitle>
        <CardDescription>
          Ingrese sus credenciales para acceder al sistema
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="usuario" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="usuario">Usuario</TabsTrigger>
            <TabsTrigger value="cliente">Cliente</TabsTrigger>
          </TabsList>
          
          <TabsContent value="usuario">
            <form onSubmit={handleLogin} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="correo@ejemplo.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Contraseña</Label>
                  <a href="#" className="text-sm text-score-blue hover:underline">
                    ¿Olvidó su contraseña?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-score-turquoise hover:bg-score-blue" disabled={isLoading}>
                {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="cliente">
            <form onSubmit={handleLogin} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="client-email">Correo electrónico</Label>
                <Input 
                  id="client-email" 
                  type="email" 
                  placeholder="cliente@ejemplo.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="client-password">Contraseña</Label>
                  <a href="#" className="text-sm text-score-blue hover:underline">
                    ¿Olvidó su contraseña?
                  </a>
                </div>
                <Input 
                  id="client-password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-score-turquoise hover:bg-score-blue" disabled={isLoading}>
                {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          ¿Problemas para acceder? Contacte a soporte
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
