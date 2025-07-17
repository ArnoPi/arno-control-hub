
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Bell, 
  Search, 
  Plus,
  Settings,
  Mail,
  MessageSquare,
  AlertTriangle,
  Info,
  CheckCircle,
  X,
  Eye,
  EyeOff,
  Clock,
  User
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const notifications = [
  {
    id: '1',
    title: 'Nieuw project ticket',
    message: 'John Doe heeft een nieuw ticket aangemaakt voor Restaurant Keten Website',
    type: 'ticket',
    priority: 'high',
    read: false,
    timestamp: '2024-01-15T14:30:00Z',
    user: 'John Doe',
    action: 'created ticket #T-1234'
  },
  {
    id: '2',
    title: 'Server waarschuwing',
    message: 'CPU gebruik heeft 80% bereikt op productieserver',
    type: 'system',
    priority: 'medium',
    read: false,
    timestamp: '2024-01-15T14:25:00Z',
    user: 'System Monitor',
    action: 'high CPU usage detected'
  },
  {
    id: '3',
    title: 'Project voltooid',
    message: 'E-commerce Platform project is succesvol afgerond',
    type: 'project',
    priority: 'low',
    read: true,
    timestamp: '2024-01-15T12:00:00Z',
    user: 'Sarah Wilson',
    action: 'completed project'
  },
  {
    id: '4',
    title: 'Nieuwe gebruiker geregistreerd',
    message: 'Tech Corp heeft zich geregistreerd als nieuwe klant',
    type: 'user',
    priority: 'medium',
    read: true,
    timestamp: '2024-01-15T11:45:00Z',
    user: 'Tech Corp',
    action: 'registered as new client'
  },
  {
    id: '5',
    title: 'Backup geslaagd',
    message: 'Dagelijkse database backup is succesvol voltooid',
    type: 'system',
    priority: 'low',
    read: true,
    timestamp: '2024-01-15T03:00:00Z',
    user: 'Backup Service',
    action: 'completed daily backup'
  },
  {
    id: '6',
    title: 'Betaling ontvangen',
    message: 'Betaling van €15,000 ontvangen voor Restaurant Keten project',
    type: 'payment',
    priority: 'high',
    read: false,
    timestamp: '2024-01-14T16:30:00Z',
    user: 'Restaurant Keten BV',
    action: 'payment received'
  }
];

const notificationSettings = [
  {
    id: 'email_tickets',
    label: 'Email bij nieuwe tickets',
    description: 'Ontvang email notificaties voor nieuwe support tickets',
    enabled: true,
    channel: 'email'
  },
  {
    id: 'email_projects',
    label: 'Email bij project updates',
    description: 'Ontvang email updates over project wijzigingen',
    enabled: true,
    channel: 'email'
  },
  {
    id: 'email_system',
    label: 'Email bij systeem alerts',
    description: 'Ontvang email bij kritieke systeem waarschuwingen',
    enabled: true,
    channel: 'email'
  },
  {
    id: 'push_tickets',
    label: 'Push notificaties voor tickets',
    description: 'Browser push notificaties voor urgente tickets',
    enabled: false,
    channel: 'push'
  },
  {
    id: 'push_system',
    label: 'Push notificaties voor systeem',
    description: 'Browser push notificaties voor systeem alerts',
    enabled: true,
    channel: 'push'
  },
  {
    id: 'sms_critical',
    label: 'SMS voor kritieke alerts',
    description: 'SMS notificaties voor kritieke systeem problemen',
    enabled: false,
    channel: 'sms'
  }
];

const Notifications = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState(notificationSettings);

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === 'all' || notification.type === typeFilter;
    const matchesPriority = priorityFilter === 'all' || notification.priority === priorityFilter;
    
    return matchesSearch && matchesType && matchesPriority;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'ticket':
        return <MessageSquare className="h-4 w-4 text-blue-400" />;
      case 'system':
        return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      case 'project':
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'user':
        return <User className="h-4 w-4 text-purple-400" />;
      case 'payment':
        return <Info className="h-4 w-4 text-blue-400" />;
      default:
        return <Bell className="h-4 w-4 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-400';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'low':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'ticket':
        return 'bg-blue-500/20 text-blue-400';
      case 'system':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'project':
        return 'bg-green-500/20 text-green-400';
      case 'user':
        return 'bg-purple-500/20 text-purple-400';
      case 'payment':
        return 'bg-indigo-500/20 text-indigo-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) {
      return `${minutes} min geleden`;
    } else if (hours < 24) {
      return `${hours} uur geleden`;
    } else {
      return `${days} dag${days !== 1 ? 'en' : ''} geleden`;
    }
  };

  const markAsRead = (id: string) => {
    // Implementeer mark as read functionaliteit
    console.log('Marking notification as read:', id);
  };

  const markAllAsRead = () => {
    // Implementeer mark all as read functionaliteit
    console.log('Marking all notifications as read');
  };

  const toggleSetting = (id: string) => {
    setSettings(settings.map(setting => 
      setting.id === id 
        ? { ...setting, enabled: !setting.enabled }
        : setting
    ));
  };

  if (showSettings) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Notification Settings</h1>
            <p className="text-slate-400">Beheer je notificatie voorkeuren</p>
          </div>
          <Button 
            onClick={() => setShowSettings(false)}
            variant="outline"
            className="border-slate-600"
          >
            Terug naar notificaties
          </Button>
        </div>

        {/* Settings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Email Settings */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Notificaties
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {settings.filter(s => s.channel === 'email').map((setting) => (
                <div key={setting.id} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-white">{setting.label}</h4>
                    <p className="text-sm text-slate-400">{setting.description}</p>
                  </div>
                  <Switch
                    checked={setting.enabled}
                    onCheckedChange={() => toggleSetting(setting.id)}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Push Settings */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Push Notificaties
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {settings.filter(s => s.channel === 'push').map((setting) => (
                <div key={setting.id} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-white">{setting.label}</h4>
                    <p className="text-sm text-slate-400">{setting.description}</p>
                  </div>
                  <Switch
                    checked={setting.enabled}
                    onCheckedChange={() => toggleSetting(setting.id)}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* SMS Settings */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                SMS Notificaties
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {settings.filter(s => s.channel === 'sms').map((setting) => (
                <div key={setting.id} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-white">{setting.label}</h4>
                    <p className="text-sm text-slate-400">{setting.description}</p>
                  </div>
                  <Switch
                    checked={setting.enabled}
                    onCheckedChange={() => toggleSetting(setting.id)}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Notificaties</h1>
          <p className="text-slate-400">Beheer en bekijk alle systeem notificaties</p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            onClick={markAllAsRead}
            variant="outline"
            className="border-slate-600"
          >
            <CheckCircle className="h-4 w-4 mr-2" />
            Alles als gelezen
          </Button>
          <Button 
            onClick={() => setShowSettings(true)}
            variant="outline"
            className="border-slate-600"
          >
            <Settings className="h-4 w-4 mr-2" />
            Instellingen
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-blue-400" />
              <div>
                <p className="text-sm text-slate-400">Totaal</p>
                <p className="text-xl font-bold text-white">{notifications.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <EyeOff className="h-4 w-4 text-red-400" />
              <div>
                <p className="text-sm text-slate-400">Ongelezen</p>
                <p className="text-xl font-bold text-red-400">{unreadCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-green-400" />
              <div>
                <p className="text-sm text-slate-400">Gelezen</p>
                <p className="text-xl font-bold text-green-400">{notifications.length - unreadCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-400" />
              <div>
                <p className="text-sm text-slate-400">Hoge prioriteit</p>
                <p className="text-xl font-bold text-yellow-400">
                  {notifications.filter(n => n.priority === 'high').length}
                </p>
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
                placeholder="Zoek notificaties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-700/50 border-slate-600 text-slate-100"
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-40 bg-slate-700 border-slate-600">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Types</SelectItem>
                <SelectItem value="ticket">Tickets</SelectItem>
                <SelectItem value="system">Systeem</SelectItem>
                <SelectItem value="project">Projecten</SelectItem>
                <SelectItem value="user">Gebruikers</SelectItem>
                <SelectItem value="payment">Betalingen</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-40 bg-slate-700 border-slate-600">
                <SelectValue placeholder="Prioriteit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Prioriteiten</SelectItem>
                <SelectItem value="high">Hoog</SelectItem>
                <SelectItem value="medium">Gemiddeld</SelectItem>
                <SelectItem value="low">Laag</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Notifications List */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">
            Notificaties ({filteredNotifications.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="max-h-[600px] overflow-y-auto">
            {filteredNotifications.map((notification, index) => (
              <div 
                key={notification.id}
                className={`p-4 border-b border-slate-700 hover:bg-slate-700/20 ${
                  !notification.read ? 'bg-blue-500/5 border-l-4 border-l-blue-500' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {getTypeIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className={`font-medium ${!notification.read ? 'text-white' : 'text-slate-300'}`}>
                        {notification.title}
                      </h4>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      )}
                    </div>
                    <p className="text-sm text-slate-400 mb-2">{notification.message}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getTypeColor(notification.type)}>
                        {notification.type === 'ticket' ? 'Ticket' :
                         notification.type === 'system' ? 'Systeem' :
                         notification.type === 'project' ? 'Project' :
                         notification.type === 'user' ? 'Gebruiker' :
                         notification.type === 'payment' ? 'Betaling' : notification.type}
                      </Badge>
                      <Badge className={getPriorityColor(notification.priority)}>
                        {notification.priority === 'high' ? 'Hoog' :
                         notification.priority === 'medium' ? 'Gemiddeld' : 'Laag'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span>Door: {notification.user}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{formatTimestamp(notification.timestamp)}</span>
                        </div>
                      </div>
                      {!notification.read && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => markAsRead(notification.id)}
                          className="text-slate-400 hover:text-white"
                        >
                          <Eye className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {filteredNotifications.length === 0 && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-12 text-center">
            <h3 className="text-lg font-medium text-white mb-2">Geen notificaties gevonden</h3>
            <p className="text-slate-400">Probeer andere zoekfilters of controleer later opnieuw.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Notifications;
