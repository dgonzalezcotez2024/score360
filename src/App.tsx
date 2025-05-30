
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import AppLayout from "./components/AppLayout";
import Clientes from "./pages/Clientes";
import Deudores from "./pages/Deudores";
import Obligaciones from "./pages/Obligaciones";
import Convenios from "./pages/Convenios";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/deudores" element={<Deudores />} />
            <Route path="/obligaciones" element={<Obligaciones />} />
            <Route path="/convenios" element={<Convenios />} />
            <Route path="/procesos" element={<Dashboard />} />
            <Route path="/agenda" element={<Dashboard />} />
            <Route path="/reportes" element={<Dashboard />} />
            <Route path="/estadisticas" element={<Dashboard />} />
            <Route path="/configuracion" element={<Dashboard />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
