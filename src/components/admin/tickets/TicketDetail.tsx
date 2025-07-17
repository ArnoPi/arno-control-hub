
import React, { useState } from 'react';
import { ArrowLeft, Send, Clock, User, Mail, Building, Tag, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface TicketDetailProps {
  ticket: {
    id: string;
    subject: string;
    status: 'open' | 'in-progress' | 'resolved' | 'closed';
    priority: 'low' | 'medium' | 'high' | 'urgent';
    customer: {
      name: string;
      email: string;
      company?: string;
      avatar?: string;
    };
    messages: {
      id: string;
      content: string;
      timestamp: string;
      sender: 'customer' | 'admin';
      senderName: string;
    }[];
    createdAt: string;
    updatedAt: string;
  };
  onBack: () => void;
}

const statusColors = {
  open: 'bg-red-500/20 text-red-400',
  'in-progress': 'bg-yellow-500/20 text-yellow-400',
  resolved: 'bg-green-500/20 text-green-400',
  closed: 'bg-gray-500/20 text-gray-400'
};

const priorityColors = {
  low: 'bg-blue-500/20 text-blue-400',
  medium: 'bg-yellow-500/20 text-yellow-400',
  high: 'bg-orange-500/20 text-orange-400',
  urgent: 'bg-red-500/20 text-red-400'
};

export function TicketDetail({ ticket, onBack }: TicketDetailProps) {
  const [reply, setReply] = useState('');
  const [status, setStatus] = useState(ticket.status);
  const [priority, setPriority] = useState(ticket.priority);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendReply = async () => {
    if (!reply.trim()) return;
    
    setIsLoading(true);
    try {
      // Simuleer verzenden (later met Supabase)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset reply
      setReply('');
      
      // Hier zou je de ticket berichten updaten
      console.log('Reply sent:', reply);
    } catch (error) {
      console.error('Error sending reply:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (newStatus: string) => {
    setStatus(newStatus as typeof status);
    // Hier zou je de status in de database updaten
    console.log('Status updated:', newStatus);
  };

  const handlePriorityChange = async (newPriority: string) => {
    setPriority(newPriority as typeof priority);
    // Hier zou je de prioriteit in de database updaten
    console.log('Priority updated:', newPriority);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-white">{ticket.id}</h1>
            <p className="text-slate-400">{ticket.subject}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Badge className={statusColors[status]}>
            {status === 'in-progress' ? 'Bezig' : status === 'resolved' ? 'Opgelost' : status}
          </Badge>
          <Badge className={priorityColors[priority]}>
            {priority === 'urgent' ? 'Urgent' : priority === 'high' ? 'Hoog' : priority === 'medium' ? 'Normaal' : 'Laag'}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Messages */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Conversatie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {ticket.messages.map((message) => (
                <div key={message.id} className={`flex gap-3 ${message.sender === 'admin' ? 'flex-row-reverse' : ''}`}>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-slate-600 text-slate-200">
                      {message.senderName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`flex-1 max-w-[80%] ${message.sender === 'admin' ? 'text-right' : ''}`}>
                    <div className={`p-3 rounded-lg ${
                      message.sender === 'admin' 
                        ? 'bg-blue-600/20 border border-blue-500/30' 
                        : 'bg-slate-700/50 border border-slate-600/50'
                    }`}>
                      <p className="text-white text-sm">{message.content}</p>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      {message.senderName} • {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Reply */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Reageren</CardTitle>
              <CardDescription className="text-slate-400">
                Je reactie wordt automatisch naar de klant gemaild
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reply" className="text-slate-200">Bericht</Label>
                <Textarea
                  id="reply"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  placeholder="Typ je reactie hier..."
                  className="min-h-[100px] bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-slate-400">
                  Klant ontvangt automatisch een e-mail notificatie
                </p>
                <Button onClick={handleSendReply} disabled={!reply.trim() || isLoading}>
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4 mr-2" />
                  )}
                  Verstuur
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Customer Info */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <User className="h-4 w-4" />
                Klantgegevens
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={ticket.customer.avatar} />
                  <AvatarFallback className="bg-slate-600 text-slate-200">
                    {ticket.customer.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-white">{ticket.customer.name}</p>
                  <p className="text-sm text-slate-400">{ticket.customer.email}</p>
                </div>
              </div>
              
              {ticket.customer.company && (
                <div className="flex items-center gap-2 text-slate-300">
                  <Building className="h-4 w-4" />
                  <span className="text-sm">{ticket.customer.company}</span>
                </div>
              )}

              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{ticket.customer.email}</span>
              </div>
            </CardContent>
          </Card>

          {/* Ticket Details */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Tag className="h-4 w-4" />
                Ticket details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-slate-200">Status</Label>
                <Select value={status} onValueChange={handleStatusChange}>
                  <SelectTrigger className="bg-slate-700 border-slate-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in-progress">Bezig</SelectItem>
                    <SelectItem value="resolved">Opgelost</SelectItem>
                    <SelectItem value="closed">Gesloten</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-200">Prioriteit</Label>
                <Select value={priority} onValueChange={handlePriorityChange}>
                  <SelectTrigger className="bg-slate-700 border-slate-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Laag</SelectItem>
                    <SelectItem value="medium">Normaal</SelectItem>
                    <SelectItem value="high">Hoog</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator className="bg-slate-600" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Aangemaakt:</span>
                  <span className="text-slate-200">{ticket.createdAt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Laatst geupdate:</span>
                  <span className="text-slate-200">{ticket.updatedAt}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
