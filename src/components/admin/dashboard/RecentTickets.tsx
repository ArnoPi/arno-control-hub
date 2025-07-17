
import { Clock, User, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const tickets = [
  {
    id: '#T-1234',
    title: 'Server niet bereikbaar',
    user: 'John Doe',
    priority: 'high',
    status: 'open',
    time: '2 min geleden',
    avatar: '/placeholder.svg'
  },
  {
    id: '#T-1235',
    title: 'Database performance issues',
    user: 'Jane Smith',
    priority: 'medium',
    status: 'in-progress',
    time: '15 min geleden',
    avatar: '/placeholder.svg'
  },
  {
    id: '#T-1236',
    title: 'Login probleem gebruiker',
    user: 'Mike Johnson',
    priority: 'low',
    status: 'resolved',
    time: '1 uur geleden',
    avatar: '/placeholder.svg'
  },
  {
    id: '#T-1237',
    title: 'SSL certificaat verloopt',
    user: 'Sarah Wilson',
    priority: 'high',
    status: 'open',
    time: '2 uur geleden',
    avatar: '/placeholder.svg'
  }
];

const priorityIcons = {
  high: ArrowUp,
  medium: Minus,
  low: ArrowDown
};

const priorityColors = {
  high: 'text-red-400',
  medium: 'text-yellow-400',
  low: 'text-green-400'
};

const statusColors = {
  open: 'bg-red-500/20 text-red-400',
  'in-progress': 'bg-yellow-500/20 text-yellow-400',
  resolved: 'bg-green-500/20 text-green-400'
};

export function RecentTickets() {
  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Recente Tickets</CardTitle>
        <CardDescription className="text-slate-400">
          Laatste support aanvragen
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tickets.map((ticket) => {
            const PriorityIcon = priorityIcons[ticket.priority as keyof typeof priorityIcons];
            return (
              <div key={ticket.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={ticket.avatar} />
                    <AvatarFallback className="bg-slate-600 text-slate-200">
                      {ticket.user.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white">{ticket.title}</span>
                      <PriorityIcon className={`h-3 w-3 ${priorityColors[ticket.priority as keyof typeof priorityColors]}`} />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span>{ticket.id}</span>
                      <span>•</span>
                      <span>{ticket.user}</span>
                      <span>•</span>
                      <Clock className="h-3 w-3" />
                      <span>{ticket.time}</span>
                    </div>
                  </div>
                </div>
                <Badge className={statusColors[ticket.status as keyof typeof statusColors]}>
                  {ticket.status === 'in-progress' ? 'Bezig' : ticket.status === 'resolved' ? 'Opgelost' : 'Open'}
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
