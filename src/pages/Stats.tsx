
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Users, DollarSign, Clock, Activity, BarChart3, PieChart } from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const monthlyData = [
  { month: 'Jan', revenue: 45000, projects: 8, clients: 12 },
  { month: 'Feb', revenue: 52000, projects: 10, clients: 15 },
  { month: 'Mar', revenue: 48000, projects: 9, clients: 13 },
  { month: 'Apr', revenue: 61000, projects: 12, clients: 18 },
  { month: 'Mei', revenue: 55000, projects: 11, clients: 16 },
  { month: 'Jun', revenue: 67000, projects: 14, clients: 20 },
];

const projectTypeData = [
  { name: 'Websites', value: 40, color: '#3B82F6' },
  { name: 'Mobile Apps', value: 25, color: '#10B981' },
  { name: 'E-commerce', value: 20, color: '#F59E0B' },
  { name: 'Dashboards', value: 15, color: '#EF4444' },
];

const clientSatisfaction = [
  { rating: '5 sterren', count: 45, percentage: 75 },
  { rating: '4 sterren', count: 12, percentage: 20 },
  { rating: '3 sterren', count: 2, percentage: 3 },
  { rating: '2 sterren', count: 1, percentage: 2 },
  { rating: '1 ster', count: 0, percentage: 0 },
];

const teamPerformance = [
  { name: 'John Doe', projectsCompleted: 12, revenue: 125000, efficiency: 95 },
  { name: 'Jane Smith', projectsCompleted: 8, revenue: 98000, efficiency: 88 },
  { name: 'Mike Johnson', projectsCompleted: 10, revenue: 115000, efficiency: 92 },
  { name: 'Sarah Wilson', projectsCompleted: 6, revenue: 85000, efficiency: 85 },
];

const Stats = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Statistieken</h1>
        <p className="text-slate-400">Uitgebreide analytics en performance metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Totale Omzet</p>
                <p className="text-2xl font-bold text-white">€328,000</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-400" />
                  <span className="text-xs text-green-400">+12.5%</span>
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Actieve Projecten</p>
                <p className="text-2xl font-bold text-white">18</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-400" />
                  <span className="text-xs text-green-400">+3</span>
                </div>
              </div>
              <BarChart3 className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Nieuwe Klanten</p>
                <p className="text-2xl font-bold text-white">24</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-400" />
                  <span className="text-xs text-green-400">+8.2%</span>
                </div>
              </div>
              <Users className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Gem. Project Tijd</p>
                <p className="text-2xl font-bold text-white">8.5w</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingDown className="h-3 w-3 text-red-400" />
                  <span className="text-xs text-red-400">-1.2w</span>
                </div>
              </div>
              <Clock className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Omzet Overzicht</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1E293B', 
                    border: '1px solid #334155',
                    borderRadius: '8px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#3B82F6" 
                  fill="#3B82F6" 
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Project Types */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Project Types</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={projectTypeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percentage }) => `${name} ${percentage}%`}
                >
                  {projectTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1E293B', 
                    border: '1px solid #334155',
                    borderRadius: '8px'
                  }}
                />
              </RechartsPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Client Satisfaction */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Klanttevredenheid</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {clientSatisfaction.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">{item.rating}</span>
                  <span className="text-slate-400">{item.count} reviews ({item.percentage}%)</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Team Performance */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Team Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamPerformance.map((member, index) => (
                <div key={index} className="p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-white">{member.name}</h4>
                    <span className="text-sm text-green-400">{member.efficiency}%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400">Projecten</p>
                      <p className="text-white font-medium">{member.projectsCompleted}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Omzet</p>
                      <p className="text-white font-medium">€{member.revenue.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Projects Chart */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Projecten & Klanten per Maand</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1E293B', 
                  border: '1px solid #334155',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="projects" fill="#3B82F6" name="Projecten" />
              <Bar dataKey="clients" fill="#10B981" name="Nieuwe Klanten" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Stats;
