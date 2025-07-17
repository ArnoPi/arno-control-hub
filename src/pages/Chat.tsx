
import { useState } from 'react';
import { Send, Search, Phone, Video, MoreVertical, User, Clock, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';

const conversations = [
  {
    id: '1',
    customer: {
      name: 'John Doe',
      email: 'john@restaurant.com',
      company: 'Restaurant Keten BV',
      avatar: '/placeholder.svg',
      status: 'online'
    },
    lastMessage: 'Kunnen we de kleurstelling nog aanpassen?',
    timestamp: '2 min geleden',
    unread: 2,
    priority: 'high'
  },
  {
    id: '2',
    customer: {
      name: 'Jane Smith',
      email: 'jane@fitnessstudio.nl',
      company: 'FitLife Studio',
      avatar: '/placeholder.svg',
      status: 'away'
    },
    lastMessage: 'De app werkt perfect, bedankt!',
    timestamp: '15 min geleden',
    unread: 0,
    priority: 'low'
  },
  {
    id: '3',
    customer: {
      name: 'Mike Johnson',
      email: 'mike@webshop.com',
      company: 'Online Webshop',
      avatar: '/placeholder.svg',
      status: 'offline'
    },
    lastMessage: 'Wanneer is de website live?',
    timestamp: '1 uur geleden',
    unread: 1,
    priority: 'medium'
  }
];

const messages = [
  {
    id: '1',
    content: 'Hallo! Ik heb een vraag over de kleurstelling van de website.',
    timestamp: '14:30',
    sender: 'customer',
    senderName: 'John Doe'
  },
  {
    id: '2',
    content: 'Hallo John! Natuurlijk, wat zou je graag willen aanpassen?',
    timestamp: '14:32',
    sender: 'admin',
    senderName: 'Arnotjuh'
  },
  {
    id: '3',
    content: 'De hoofdkleur zou ik graag wat warmer willen maken. Meer naar oranje toe.',
    timestamp: '14:35',
    sender: 'customer',
    senderName: 'John Doe'
  },
  {
    id: '4',
    content: 'Dat is zeker mogelijk! Ik zal een paar varianten voor je maken. Kun je morgen even kijken?',
    timestamp: '14:37',
    sender: 'admin',
    senderName: 'Arnotjuh'
  },
  {
    id: '5',
    content: 'Kunnen we de kleurstelling nog aanpassen?',
    timestamp: '14:45',
    sender: 'customer',
    senderName: 'John Doe'
  }
];

const Chat = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Hier zou je normaal de message verzenden
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.customer.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const priorityColors = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500'
  };

  const statusColors = {
    online: 'bg-green-400',
    away: 'bg-yellow-400',
    offline: 'bg-gray-400'
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Chat & Support</h1>
        <p className="text-slate-400">Beheer klantgesprekken en support tickets</p>
      </div>

      {/* Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <Card className="bg-slate-800/50 border-slate-700 flex flex-col">
          <CardHeader className="pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Zoek gesprekken..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-700/50 border-slate-600 text-slate-100"
              />
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-2 p-4">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedConversation.id === conversation.id
                    ? 'bg-blue-600/20 border border-blue-500/30'
                    : 'hover:bg-slate-700/30'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={conversation.customer.avatar} />
                      <AvatarFallback className="bg-slate-600 text-slate-200">
                        {conversation.customer.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-slate-800 ${statusColors[conversation.customer.status as keyof typeof statusColors]}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-white truncate">{conversation.customer.name}</h4>
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${priorityColors[conversation.priority as keyof typeof priorityColors]}`} />
                        {conversation.unread > 0 && (
                          <Badge className="bg-blue-600 text-white text-xs">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 truncate">{conversation.customer.company}</p>
                    <p className="text-sm text-slate-300 truncate mt-1">{conversation.lastMessage}</p>
                    <p className="text-xs text-slate-500 mt-1">{conversation.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Chat Messages */}
        <Card className="bg-slate-800/50 border-slate-700 lg:col-span-2 flex flex-col">
          {/* Chat Header */}
          <CardHeader className="border-b border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={selectedConversation.customer.avatar} />
                    <AvatarFallback className="bg-slate-600 text-slate-200">
                      {selectedConversation.customer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-slate-800 ${statusColors[selectedConversation.customer.status as keyof typeof statusColors]}`} />
                </div>
                <div>
                  <h3 className="font-medium text-white">{selectedConversation.customer.name}</h3>
                  <p className="text-sm text-slate-400">{selectedConversation.customer.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] ${message.sender === 'admin' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`rounded-lg px-4 py-2 ${
                      message.sender === 'admin'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700 text-slate-100'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <div className={`flex items-center gap-2 mt-1 text-xs text-slate-400 ${message.sender === 'admin' ? 'justify-end' : 'justify-start'}`}>
                    <span>{message.senderName}</span>
                    <span>•</span>
                    <span>{message.timestamp}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>

          {/* Message Input */}
          <div className="p-4 border-t border-slate-700">
            <div className="flex gap-2">
              <Textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Typ je bericht..."
                className="flex-1 min-h-[40px] max-h-[120px] bg-slate-700/50 border-slate-600 text-slate-100 resize-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="bg-blue-600 hover:bg-blue-700 px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Druk op Enter om te verzenden, Shift+Enter voor nieuwe regel
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
