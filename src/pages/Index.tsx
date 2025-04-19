
import { Button } from "@/components/ui/button";
import LoginForm from "@/components/LoginForm";
import ScoreLogo from "@/components/ScoreLogo";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="flex items-center justify-between p-4 shadow-sm">
        <ScoreLogo />
        <Button variant="outline">Contacto</Button>
      </nav>

      <div className="flex flex-1 items-center justify-center bg-gray-50">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4">
          <div className="text-center md:text-left md:flex-1 max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Plataforma de Gestión de Cobranza
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Solución integral para la gestión de cobranza pre jurídica y jurídica, 
              especializada en edificios, conjuntos residenciales y empresas.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <p className="text-sm text-muted-foreground">
                Solicite una demostración para conocer todas nuestras funcionalidades.
              </p>
            </div>
          </div>
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>
      </div>

      <footer className="py-6 px-4 bg-score-dark text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <ScoreLogo className="mb-2" />
            <p className="text-sm opacity-80">Especialistas en Cobranza</p>
          </div>
          <div className="text-sm opacity-80 text-center md:text-right">
            <p>© {new Date().getFullYear()} Score. Todos los derechos reservados.</p>
            <p>Bogotá, Colombia</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
