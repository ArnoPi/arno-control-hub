
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Ma', tickets: 12, users: 145 },
  { name: 'Di', tickets: 19, users: 180 },
  { name: 'Wo', tickets: 25, users: 220 },
  { name: 'Do', tickets: 18, users: 195 },
  { name: 'Vr', tickets: 32, users: 275 },
  { name: 'Za', tickets: 15, users: 120 },
  { name: 'Zo', tickets: 8, users: 85 },
];

export function ActivityChart() {
  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Activiteit Overzicht</CardTitle>
        <CardDescription className="text-slate-400">
          Tickets en gebruikersactiviteit van deze week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1e293b', 
                border: '1px solid #334155',
                borderRadius: '8px',
                color: '#f1f5f9'
              }} 
            />
            <Area 
              type="monotone" 
              dataKey="tickets" 
              stroke="#3b82f6" 
              fillOpacity={1} 
              fill="url(#colorTickets)"
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="users" 
              stroke="#8b5cf6" 
              fillOpacity={1} 
              fill="url(#colorUsers)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
