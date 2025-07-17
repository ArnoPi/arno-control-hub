
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminLayout } from "@/components/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Tickets from "./pages/Tickets";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main portfolio website */}
          <Route path="/" element={<Portfolio />} />
          
          {/* Admin panel routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="users" element={<Users />} />
            {/* Placeholder routes for other admin pages */}
            <Route path="projects" element={<div className="text-white">Projects - Coming Soon</div>} />
            <Route path="chat" element={<div className="text-white">Chat & Support - Coming Soon</div>} />
            <Route path="stats" element={<div className="text-white">Statistieken - Coming Soon</div>} />
            <Route path="status" element={<div className="text-white">Server Status - Coming Soon</div>} />
            <Route path="logs" element={<div className="text-white">Logs - Coming Soon</div>} />
            <Route path="notifications" element={<div className="text-white">Meldingen - Coming Soon</div>} />
            <Route path="settings" element={<div className="text-white">Instellingen - Coming Soon</div>} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
