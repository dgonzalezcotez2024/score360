
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ScoreLogo from "@/components/ScoreLogo";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: Usuario intentó acceder a una ruta inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <ScoreLogo size="md" className="mb-8" />
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-score-turquoise mb-4">404</h1>
        <p className="text-2xl font-semibold mb-2">Página no encontrada</p>
        <p className="text-muted-foreground mb-8">
          La página que está buscando no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-score-turquoise hover:bg-score-blue"
            onClick={() => navigate("/")}
          >
            Volver al inicio
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
          >
            Regresar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
