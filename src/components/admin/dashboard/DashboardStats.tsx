
import { TrendingUp, TrendingDown, Users, Ticket, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  {
    title: 'Actieve Tickets',
    value: '127',
    change: '+12%',
    trend: 'up',
    icon: Ticket,
    description: 'vs vorige maand'
  },
  {
    title: 'Online Gebruikers',
    value: '2,345',
    change: '+5.2%',
    trend: 'up',
    icon: Users,
    description: 'Nu online'
  },
  {
    title: 'Kritieke Issues',
    value: '8',
    change: '-23%',
    trend: 'down',
    icon: AlertTriangle,
    description: 'Hoge prioriteit'
  },
  {
    title: 'Opgeloste Tickets',
    value: '94.2%',
    change: '+2.1%',
    trend: 'up',
    icon: CheckCircle,
    description: 'Deze week'
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-200">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white mb-1">
              {stat.value}
            </div>
            <div className="flex items-center gap-1">
              {stat.trend === 'up' ? (
                <TrendingUp className="h-3 w-3 text-green-400" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-400" />
              )}
              <span className={`text-xs ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change}
              </span>
              <span className="text-xs text-slate-400 ml-1">
                {stat.description}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
