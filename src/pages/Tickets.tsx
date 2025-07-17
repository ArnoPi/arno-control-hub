
import React, { useState } from 'react';
import { Search, Filter, Plus, Clock, User, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TicketDetail } from '@/components/admin/tickets/TicketDetail';

const mockTickets = [
  {
    id: 'T-1234',
    subject: 'Website voor restaurant keten',
    status: 'open' as const,
    priority: 'high' as const,
    customer: {
      name: 'John Doe',
      email: 'john@restaurant.com',
      company: 'Restaurant Keten BV',
      avatar: '/placeholder.svg'
    },
    messages: [
      {
        id: '1',
        content: 'Hallo! Ik ben op zoek naar een moderne website voor onze restaurant keten. We hebben 5 locaties en willen graag online reserveringen en een menukaart systeem.',
        timestamp: '2 uur geleden',
        sender: 'customer' as const,
        senderName: 'John Doe'
      },
      {
        id: '2',
        content: 'Hallo John! Bedankt voor je aanvraag. Dat klinkt als een interessant project. Ik zou graag meer willen weten over jullie specifieke wensen. Kunnen we een videocall inplannen?',
        timestamp: '1 uur geleden',
        sender: 'admin' as const,
        senderName: 'Arnotjuh'
      }
    ],
    createdAt: '15 nov 2024, 14:30',
    updatedAt: '15 nov 2024, 16:45'
  },
  {
    id: 'T-1235',
    subject: 'Mobile app voor fitness studio',
    status: 'in-progress' as const,
    priority: 'medium' as const,
    customer: {
      name: 'Jane Smith',
      email: 'jane@fitnessstudio.nl',
      company: 'FitLife Studio',
      avatar: '/placeholder.svg'
    },
    messages: [
      {
        id: '1',
        content: 'We zoeken een mobile app waar onze leden lessen kunnen boeken en hun voortgang kunnen bijhouden.',
        timestamp: '1 dag geleden',
        sender: 'customer' as const,
        senderName: 'Jane Smith'
      }
    ],
    createdAt: '14 nov 2024, 10:15',
    updatedAt: '14 nov 2024, 16:20'
  },
  {
    id: 'T-1236',
    subject: 'E-commerce platform upgrade',
    status: 'resolved' as const,
    priority: 'low' as const,
    customer: {
      name: 'Mike Johnson',
      email: 'mike@webshop.com',
      company: 'Online Webshop',
      avatar: '/placeholder.svg'
    },
    messages: [
      {
        id: '1',
        content: 'Onze huidige webshop is verouderd en we willen upgraden naar een modernere oplossing.',
        timestamp: '3 dagen geleden',
        sender: 'customer' as const,
        senderName: 'Mike Johnson'
      }
    ],
    createdAt: '12 nov 2024, 09:00',
    updatedAt: '13 nov 2024, 15:30'
  }
];

const statusColors = {
  open: 'bg-red-500/20 text-red-400',
  'in-progress': 'bg-yellow-500/20 text-yellow-400',
  resolved: 'bg-green-500/20 text-green-400',
  closed: 'bg-gray-500/20 text-gray-400'
};

const priorityIcons = {
  high: ArrowUp,
  medium: Minus,
  low: ArrowDown,
  urgent: ArrowUp
};

const priorityColors = {
  low: 'text-blue-400',
  medium: 'text-yellow-400',
  high: 'text-orange-400',
  urgent: 'text-red-400'
};

const Tickets = () => {
  const [selectedTicket, setSelectedTicket] = useState<typeof mockTickets[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const filteredTickets = mockTickets.filter(ticket => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || ticket.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  if (selectedTicket) {
    return (
      <TicketDetail 
        ticket={selectedTicket} 
        onBack={() => setSelectedTicket(null)} 
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Tickets</h1>
          <p className="text-slate-400">Beheer klantvragen en projectaanvragen</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nieuw ticket
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Zoek tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-700 border-slate-600 text-white"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40 bg-slate-700 border-slate-600">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle statussen</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in-progress">Bezig</SelectItem>
                <SelectItem value="resolved">Opgelost</SelectItem>
                <SelectItem value="closed">Gesloten</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-40 bg-slate-700 border-slate-600">
                <SelectValue placeholder="Prioriteit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle prioriteiten</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
                <SelectItem value="high">Hoog</SelectItem>
                <SelectItem value="medium">Normaal</SelectItem>
                <SelectItem value="low">Laag</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tickets List */}
      <div className="grid gap-4">
        {filteredTickets.map((ticket) => {
          const PriorityIcon = priorityIcons[ticket.priority];
          return (
            <Card 
              key={ticket.id} 
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-700/50 transition-colors cursor-pointer"
              onClick={() => setSelectedTicket(ticket)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={ticket.customer.avatar} />
                      <AvatarFallback className="bg-slate-600 text-slate-200">
                        {ticket.customer.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-white truncate">{ticket.subject}</h3>
                        <PriorityIcon className={`h-4 w-4 ${priorityColors[ticket.priority]}`} />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <span>{ticket.id}</span>
                        <span>•</span>
                        <User className="h-3 w-3" />
                        <span>{ticket.customer.name}</span>
                        <span>•</span>
                        <Clock className="h-3 w-3" />
                        <span>{ticket.updatedAt}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Badge className={statusColors[ticket.status]}>
                      {ticket.status === 'in-progress' ? 'Bezig' : 
                       ticket.status === 'resolved' ? 'Opgelost' : 
                       ticket.status === 'open' ? 'Open' : 'Gesloten'}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredTickets.length === 0 && (
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h3 className="text-lg font-medium text-white mb-2">Geen tickets gevonden</h3>
            <p className="text-slate-400">Probeer andere zoekfilters of maak een nieuw ticket aan.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Tickets;
