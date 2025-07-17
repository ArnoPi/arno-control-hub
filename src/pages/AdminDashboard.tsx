
import { DashboardStats } from '@/components/admin/dashboard/DashboardStats';
import { ActivityChart } from '@/components/admin/dashboard/ActivityChart';
import { RecentTickets } from '@/components/admin/dashboard/RecentTickets';
import { SystemStatus } from '@/components/admin/dashboard/SystemStatus';

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-400">Welkom terug! Hier is een overzicht van je systeem.</p>
        </div>
        <div className="text-sm text-slate-400">
          Laatste update: {new Date().toLocaleTimeString('nl-NL')}
        </div>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ActivityChart />
        <RecentTickets />
      </div>

      <SystemStatus />
    </div>
  );
};

export default AdminDashboard;
