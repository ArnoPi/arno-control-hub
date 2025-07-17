
import { Server, Database, Wifi, HardDrive, Cpu, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const systemMetrics = [
  {
    name: 'Server Uptime',
    value: '99.9%',
    status: 'healthy',
    icon: Server,
    details: '45 dagen, 12 uur'
  },
  {
    name: 'Database',
    value: '98.2%',
    status: 'healthy',
    icon: Database,
    details: 'Laatste backup: 2 uur geleden'
  },
  {
    name: 'API Response',
    value: '245ms',
    status: 'warning',
    icon: Activity,
    details: 'Gemiddelde response tijd'
  },
  {
    name: 'Disk Usage',
    value: '67%',
    status: 'healthy',
    icon: HardDrive,
    details: '340GB van 500GB gebruikt'
  },
  {
    name: 'CPU Load',
    value: '34%',
    status: 'healthy',
    icon: Cpu,
    details: '8 cores beschikbaar'
  },
  {
    name: 'Network',
    value: '1.2GB/s',
    status: 'healthy',
    icon: Wifi,
    details: 'Bandbreedte gebruik'
  }
];

const statusColors = {
  healthy: 'text-green-400',
  warning: 'text-yellow-400',
  critical: 'text-red-400'
};

export function SystemStatus() {
  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Systeem Status</CardTitle>
        <CardDescription className="text-slate-400">
          Real-time monitoring van alle services
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {systemMetrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30">
              <div className={`p-2 rounded-lg bg-slate-600/50`}>
                <metric.icon className={`h-4 w-4 ${statusColors[metric.status as keyof typeof statusColors]}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">{metric.name}</span>
                  <span className={`text-sm font-bold ${statusColors[metric.status as keyof typeof statusColors]}`}>
                    {metric.value}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{metric.details}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
