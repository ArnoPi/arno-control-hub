
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Server, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Database, 
  Globe, 
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RefreshCw
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const serverData = {
  status: 'healthy',
  uptime: '99.98%',
  lastRestart: '2024-01-10T08:30:00Z',
  cpu: {
    usage: 45,
    cores: 8,
    temperature: 52
  },
  memory: {
    used: 12.4,
    total: 32,
    usage: 38.75
  },
  disk: {
    used: 245,
    total: 1000,
    usage: 24.5
  },
  network: {
    inbound: 1250,
    outbound: 2100,
    latency: 12
  }
};

const services = [
  {
    name: 'Web Server (Nginx)',
    status: 'running',
    port: 80,
    uptime: '99.99%',
    lastCheck: '30s ago'
  },
  {
    name: 'Database (PostgreSQL)',
    status: 'running',
    port: 5432,
    uptime: '99.95%',
    lastCheck: '45s ago'
  },
  {
    name: 'Redis Cache',
    status: 'running',
    port: 6379,
    uptime: '99.98%',
    lastCheck: '20s ago'
  },
  {
    name: 'API Gateway',
    status: 'warning',
    port: 3000,
    uptime: '98.50%',
    lastCheck: '1m ago'
  },
  {
    name: 'File Storage',
    status: 'running',
    port: 9000,
    uptime: '99.87%',
    lastCheck: '15s ago'
  },
  {
    name: 'Backup Service',
    status: 'error',
    port: 8080,
    uptime: '95.20%',
    lastCheck: '5m ago'
  }
];

const recentIncidents = [
  {
    id: '1',
    title: 'Database Connection Timeout',
    severity: 'high',
    status: 'resolved',
    startTime: '2024-01-15T14:30:00Z',
    endTime: '2024-01-15T14:45:00Z',
    duration: '15 minuten'
  },
  {
    id: '2',
    title: 'High CPU Usage Alert',
    severity: 'medium',
    status: 'monitoring',
    startTime: '2024-01-14T09:15:00Z',
    endTime: null,
    duration: 'Ongoing'
  },
  {
    id: '3',
    title: 'SSL Certificate Renewal',
    severity: 'low',
    status: 'resolved',
    startTime: '2024-01-12T02:00:00Z',
    endTime: '2024-01-12T02:05:00Z',
    duration: '5 minuten'
  }
];

const ServerStatus = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simuleer data refresh
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running':
      case 'healthy':
      case 'resolved':
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'warning':
      case 'monitoring':
        return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      case 'error':
      case 'critical':
        return <XCircle className="h-4 w-4 text-red-400" />;
      default:
        return <Activity className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running':
      case 'healthy':
      case 'resolved':
        return 'bg-green-500/20 text-green-400';
      case 'warning':
      case 'monitoring':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'error':
      case 'critical':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
      case 'critical':
        return 'bg-red-500/20 text-red-400';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'low':
        return 'bg-blue-500/20 text-blue-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Server Status</h1>
          <p className="text-slate-400">Real-time monitoring van systeem prestaties</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm text-slate-400">
            Laatste update: {lastUpdated.toLocaleTimeString('nl-NL')}
          </p>
          <Button 
            onClick={handleRefresh} 
            disabled={isRefreshing}
            variant="outline"
            className="border-slate-600"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            Vernieuwen
          </Button>
        </div>
      </div>

      {/* Overall Status */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white flex items-center gap-2">
              <Server className="h-5 w-5" />
              Systeem Overzicht
            </CardTitle>
            <div className="flex items-center gap-2">
              {getStatusIcon(serverData.status)}
              <Badge className={getStatusColor(serverData.status)}>
                {serverData.status === 'healthy' ? 'Gezond' : serverData.status}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">{serverData.uptime}</p>
              <p className="text-sm text-slate-400">Uptime (30 dagen)</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">
                {Math.floor((Date.now() - new Date(serverData.lastRestart).getTime()) / (1000 * 60 * 60 * 24))}d
              </p>
              <p className="text-sm text-slate-400">Sinds laatste herstart</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-400">{serverData.network.latency}ms</p>
              <p className="text-sm text-slate-400">Gemiddelde latency</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* CPU */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="h-4 w-4 text-blue-400" />
              <span className="font-medium text-white">CPU</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Gebruik</span>
                <span className="text-white">{serverData.cpu.usage}%</span>
              </div>
              <Progress value={serverData.cpu.usage} className="h-2" />
              <div className="text-xs text-slate-500">
                {serverData.cpu.cores} cores • {serverData.cpu.temperature}°C
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Memory */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="h-4 w-4 text-green-400" />
              <span className="font-medium text-white">Memory</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Gebruik</span>
                <span className="text-white">{serverData.memory.usage}%</span>
              </div>
              <Progress value={serverData.memory.usage} className="h-2" />
              <div className="text-xs text-slate-500">
                {serverData.memory.used}GB / {serverData.memory.total}GB
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disk */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <HardDrive className="h-4 w-4 text-purple-400" />
              <span className="font-medium text-white">Opslag</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Gebruik</span>
                <span className="text-white">{serverData.disk.usage}%</span>
              </div>
              <Progress value={serverData.disk.usage} className="h-2" />
              <div className="text-xs text-slate-500">
                {serverData.disk.used}GB / {serverData.disk.total}GB
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Network */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Wifi className="h-4 w-4 text-orange-400" />
              <span className="font-medium text-white">Netwerk</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">In</span>
                <span className="text-white">{serverData.network.inbound} MB/s</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Out</span>
                <span className="text-white">{serverData.network.outbound} MB/s</span>
              </div>
              <div className="text-xs text-slate-500 pt-1">
                Latency: {serverData.network.latency}ms
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Services Status */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Services Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{service.name}</h4>
                  <div className="flex items-center gap-1">
                    {getStatusIcon(service.status)}
                    <Badge className={getStatusColor(service.status)} variant="outline">
                      {service.status === 'running' ? 'Actief' : 
                       service.status === 'warning' ? 'Waarschuwing' : 'Fout'}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-1 text-sm text-slate-400">
                  <div className="flex justify-between">
                    <span>Port:</span>
                    <span>{service.port}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Uptime:</span>
                    <span>{service.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Laatste check:</span>
                    <span>{service.lastCheck}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Incidents */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Recente Incidenten</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="p-4 bg-slate-700/30 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-white">{incident.title}</h4>
                      <Badge className={getSeverityColor(incident.severity)} variant="outline">
                        {incident.severity === 'high' ? 'Hoog' :
                         incident.severity === 'medium' ? 'Gemiddeld' : 'Laag'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>Duur: {incident.duration}</span>
                      <span>Start: {new Date(incident.startTime).toLocaleString('nl-NL')}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {getStatusIcon(incident.status)}
                    <Badge className={getStatusColor(incident.status)} variant="outline">
                      {incident.status === 'resolved' ? 'Opgelost' :
                       incident.status === 'monitoring' ? 'Monitoring' : incident.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServerStatus;
