
import { useState } from 'react';
import { Search, Filter, Plus, MoreHorizontal, Clock, User, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const tickets = [
  {
    id: 'T-1234',
    title: 'Server niet bereikbaar vanuit Nederland',
    description: 'Gebruikers kunnen geen verbinding maken met de hoofdserver',
    user: 'John Doe',
    email: 'john@example.com',
    priority: 'high',
    status: 'open',
    created: '2024-01-15 14:30',
    updated: '2 min geleden',
    assignee: 'Admin Team',
    category: 'Infrastructure'
  },
  {
    id: 'T-1235',
    title: 'Database performance issues bij hoge load',
    description: 'Queries nemen meer dan 5 seconden tijdens piekuren',
    user: 'Jane Smith',
    email: 'jane@example.com',
    priority: 'medium',
    status: 'in-progress',
    created: '2024-01-15 13:15',
    updated: '15 min geleden',
    assignee: 'Database Team',
    category: 'Performance'
  },
  {
    id: 'T-1236',
    title: 'Login probleem na wachtwoord reset',
    description: 'Gebruiker kan niet inloggen na het resetten van wachtwoord',
    user: 'Mike Johnson',
    email: 'mike@example.com',
    priority: 'low',
    status: 'resolved',
    created: '2024-01-15 12:00',
    updated: '1 uur geleden',
    assignee: 'Support Team',
    category: 'Authentication'
  },
  {
    id: 'T-1237',
    title: 'SSL certificaat verloopt over 7 dagen',
    description: 'Het SSL certificaat voor arnotjuh.be moet vernieuwd worden',
    user: 'Sarah Wilson',
    email: 'sarah@example.com',
    priority: 'high',
    status: 'open',
    created: '2024-01-15 11:30',
    updated: '2 uur geleden',
    assignee: 'DevOps Team',
    category: 'Security'
  }
];

const priorityIcons = {
  high: ArrowUp,
  medium: Minus,
  low: ArrowDown
};

const priorityColors = {
  high: 'text-red-400 bg-red-500/20',
  medium: 'text-yellow-400 bg-yellow-500/20',
  low: 'text-green-400 bg-green-500/20'
};

const statusColors = {
  open: 'bg-red-500/20 text-red-400',
  'in-progress': 'bg-yellow-500/20 text-yellow-400',
  resolved: 'bg-green-500/20 text-green-400'
};

const Tickets = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ticket.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ticket.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || ticket.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Tickets</h1>
          <p className="text-slate-400">Beheer alle support tickets en aanvragen</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Nieuw Ticket
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Zoek tickets, gebruikers, ID's..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-700/50 border-slate-600 text-slate-100"
              />
            </div>
            <div className="flex gap-2">
              {['all', 'open', 'in-progress', 'resolved'].map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedFilter(filter)}
                  className={selectedFilter === filter ? 'bg-blue-600' : 'border-slate-600 text-slate-300'}
                >
                  {filter === 'all' ? 'Alle' : 
                   filter === 'in-progress' ? 'Bezig' :
                   filter === 'resolved' ? 'Opgelost' : 'Open'}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tickets Table */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">
            Tickets ({filteredTickets.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Ticket</TableHead>
                <TableHead className="text-slate-300">Gebruiker</TableHead>
                <TableHead className="text-slate-300">Prioriteit</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Toegewezen</TableHead>
                <TableHead className="text-slate-300">Laatste Update</TableHead>
                <TableHead className="text-slate-300"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTickets.map((ticket) => {
                const PriorityIcon = priorityIcons[ticket.priority as keyof typeof priorityIcons];
                return (
                  <TableRow key={ticket.id} className="border-slate-700 hover:bg-slate-700/30 cursor-pointer">
                    <TableCell>
                      <div>
                        <div className="font-medium text-white">{ticket.title}</div>
                        <div className="text-sm text-slate-400">{ticket.id} • {ticket.category}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback className="bg-slate-600 text-slate-200 text-xs">
                            {ticket.user.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm text-white">{ticket.user}</div>
                          <div className="text-xs text-slate-400">{ticket.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={priorityColors[ticket.priority as keyof typeof priorityColors]}>
                        <PriorityIcon className="h-3 w-3 mr-1" />
                        {ticket.priority === 'high' ? 'Hoog' : 
                         ticket.priority === 'medium' ? 'Medium' : 'Laag'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusColors[ticket.status as keyof typeof statusColors]}>
                        {ticket.status === 'in-progress' ? 'Bezig' : 
                         ticket.status === 'resolved' ? 'Opgelost' : 'Open'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-slate-300">{ticket.assignee}</TableCell>
                    <TableCell className="text-slate-400">{ticket.updated}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-slate-800 border-slate-700">
                          <DropdownMenuItem className="text-slate-300">Bekijk details</DropdownMenuItem>
                          <DropdownMenuItem className="text-slate-300">Bewerken</DropdownMenuItem>
                          <DropdownMenuItem className="text-slate-300">Toewijzen</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-400">Sluiten</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Tickets;
