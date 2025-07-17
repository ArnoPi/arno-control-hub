
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  Download, 
  RefreshCw,
  AlertTriangle,
  Info,
  XCircle,
  CheckCircle,
  Calendar,
  Clock
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const logEntries = [
  {
    id: '1',
    timestamp: '2024-01-15T14:30:15.123Z',
    level: 'error',
    service: 'api-gateway',
    message: 'Database connection timeout after 30 seconds',
    details: 'Connection to PostgreSQL database failed. Retrying...',
    user: 'system',
    ip: '192.168.1.100'
  },
  {
    id: '2',
    timestamp: '2024-01-15T14:29:45.456Z',
    level: 'warning',
    service: 'web-server',
    message: 'High memory usage detected: 85%',
    details: 'Memory usage threshold exceeded. Consider scaling up.',
    user: 'monitor',
    ip: '192.168.1.101'
  },
  {
    id: '3',
    timestamp: '2024-01-15T14:29:30.789Z',
    level: 'info',
    service: 'auth-service',
    message: 'User login successful',
    details: 'User john@restaurant.com logged in successfully from Chrome browser',
    user: 'john@restaurant.com',
    ip: '85.144.23.45'
  },
  {
    id: '4',
    timestamp: '2024-01-15T14:29:12.234Z',
    level: 'info',
    service: 'api-gateway',
    message: 'API request processed successfully',
    details: 'GET /api/projects - 200 OK (125ms)',
    user: 'jane@fitnessstudio.nl',
    ip: '91.201.45.67'
  },
  {
    id: '5',
    timestamp: '2024-01-15T14:28:55.567Z',
    level: 'error',
    service: 'backup-service',
    message: 'Backup job failed',
    details: 'Daily backup job failed due to insufficient disk space',
    user: 'system',
    ip: '192.168.1.102'
  },
  {
    id: '6',
    timestamp: '2024-01-15T14:28:30.890Z',
    level: 'info',
    service: 'email-service',
    message: 'Email notification sent',
    details: 'Project completion notification sent to mike@webshop.com',
    user: 'system',
    ip: '192.168.1.103'
  },
  {
    id: '7',
    timestamp: '2024-01-15T14:28:15.123Z',
    level: 'warning',
    service: 'cdn',
    message: 'Cache miss rate high: 65%',
    details: 'CDN cache miss rate exceeded normal threshold',
    user: 'monitor',
    ip: '192.168.1.104'
  },
  {
    id: '8',
    timestamp: '2024-01-15T14:27:45.456Z',
    level: 'info',
    service: 'web-server',
    message: 'Static file served',
    details: 'Static asset /assets/logo.png served (15ms)',
    user: 'anonymous',
    ip: '203.45.12.89'
  }
];

const logLevels = [
  { value: 'all', label: 'Alle Levels' },
  { value: 'error', label: 'Errors' },
  { value: 'warning', label: 'Warnings' },
  { value: 'info', label: 'Info' },
  { value: 'debug', label: 'Debug' }
];

const services = [
  { value: 'all', label: 'Alle Services' },
  { value: 'api-gateway', label: 'API Gateway' },
  { value: 'web-server', label: 'Web Server' },
  { value: 'auth-service', label: 'Auth Service' },
  { value: 'backup-service', label: 'Backup Service' },
  { value: 'email-service', label: 'Email Service' },
  { value: 'cdn', label: 'CDN' }
];

const Logs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simuleer data refresh
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  const handleExport = () => {
    // Simuleer export functionaliteit
    console.log('Exporting logs...');
  };

  const filteredLogs = logEntries.filter(log => {
    const matchesSearch = log.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.service.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || log.level === selectedLevel;
    const matchesService = selectedService === 'all' || log.service === selectedService;
    
    return matchesSearch && matchesLevel && matchesService;
  });

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'error':
        return <XCircle className="h-4 w-4 text-red-400" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      case 'info':
        return <Info className="h-4 w-4 text-blue-400" />;
      case 'debug':
        return <CheckCircle className="h-4 w-4 text-gray-400" />;
      default:
        return <Info className="h-4 w-4 text-gray-400" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'error':
        return 'bg-red-500/20 text-red-400';
      case 'warning':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'info':
        return 'bg-blue-500/20 text-blue-400';
      case 'debug':
        return 'bg-gray-500/20 text-gray-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return {
      date: date.toLocaleDateString('nl-NL'),
      time: date.toLocaleTimeString('nl-NL', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      })
    };
  };

  // Bereken statistieken
  const errorCount = logEntries.filter(log => log.level === 'error').length;
  const warningCount = logEntries.filter(log => log.level === 'warning').length;
  const infoCount = logEntries.filter(log => log.level === 'info').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">System Logs</h1>
          <p className="text-slate-400">Real-time systeem logging en monitoring</p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            onClick={handleRefresh} 
            disabled={isRefreshing}
            variant="outline"
            className="border-slate-600"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            Vernieuwen
          </Button>
          <Button onClick={handleExport} variant="outline" className="border-slate-600">
            <Download className="h-4 w-4 mr-2" />
            Exporteren
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-400" />
              <div>
                <p className="text-sm text-slate-400">Errors</p>
                <p className="text-xl font-bold text-red-400">{errorCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-400" />
              <div>
                <p className="text-sm text-slate-400">Warnings</p>
                <p className="text-xl font-bold text-yellow-400">{warningCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4 text-blue-400" />
              <div>
                <p className="text-sm text-slate-400">Info</p>
                <p className="text-xl font-bold text-blue-400">{infoCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-green-400" />
              <div>
                <p className="text-sm text-slate-400">Totaal</p>
                <p className="text-xl font-bold text-white">{logEntries.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Zoek in logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-700/50 border-slate-600 text-slate-100"
              />
            </div>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-40 bg-slate-700 border-slate-600">
                <SelectValue placeholder="Log Level" />
              </SelectTrigger>
              <SelectContent>
                {logLevels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger className="w-40 bg-slate-700 border-slate-600">
                <SelectValue placeholder="Service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Logs Table */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">
            Log Entries ({filteredLogs.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="max-h-[600px] overflow-y-auto">
            {filteredLogs.map((log, index) => {
              const { date, time } = formatTimestamp(log.timestamp);
              return (
                <div 
                  key={log.id}
                  className={`p-4 border-b border-slate-700 hover:bg-slate-700/20 ${
                    index === 0 ? '' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {getLevelIcon(log.level)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={getLevelColor(log.level)}>
                          {log.level.toUpperCase()}
                        </Badge>
                        <Badge variant="outline" className="border-slate-600 text-slate-300">
                          {log.service}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar className="h-3 w-3" />
                          <span>{date}</span>
                          <Clock className="h-3 w-3 ml-2" />
                          <span>{time}</span>
                        </div>
                      </div>
                      <h4 className="font-medium text-white mb-1">{log.message}</h4>
                      <p className="text-sm text-slate-400 mb-2">{log.details}</p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span>User: {log.user}</span>
                        <span>IP: {log.ip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {filteredLogs.length === 0 && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-12 text-center">
            <h3 className="text-lg font-medium text-white mb-2">Geen logs gevonden</h3>
            <p className="text-slate-400">Probeer andere zoekfilters of vernieuw de data.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Logs;
