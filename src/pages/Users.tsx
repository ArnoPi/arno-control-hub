
import { useState } from 'react';
import { Search, Filter, Plus, MoreHorizontal, User, Shield, Clock, Ban } from 'lucide-react';
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

const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    status: 'active',
    lastLogin: '2 min geleden',
    joinDate: '2023-01-15',
    tickets: 12,
    avatar: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    status: 'active',
    lastLogin: '1 uur geleden',
    joinDate: '2023-03-22',
    tickets: 5,
    avatar: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'moderator',
    status: 'suspended',
    lastLogin: '2 dagen geleden',
    joinDate: '2023-02-10',
    tickets: 8,
    avatar: '/placeholder.svg'
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    role: 'user',
    status: 'active',
    lastLogin: '5 min geleden',
    joinDate: '2023-04-05',
    tickets: 3,
    avatar: '/placeholder.svg'
  }
];

const roleColors = {
  admin: 'bg-red-500/20 text-red-400',
  moderator: 'bg-blue-500/20 text-blue-400',
  user: 'bg-gray-500/20 text-gray-400'
};

const statusColors = {
  active: 'bg-green-500/20 text-green-400',
  suspended: 'bg-yellow-500/20 text-yellow-400',
  banned: 'bg-red-500/20 text-red-400'
};

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || user.role === selectedFilter || user.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Gebruikers</h1>
          <p className="text-slate-400">Beheer gebruikersaccounts en rechten</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Nieuwe Gebruiker
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-blue-400" />
              <div>
                <p className="text-sm text-slate-400">Totaal Gebruikers</p>
                <p className="text-xl font-bold text-white">2,345</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-400" />
              <div>
                <p className="text-sm text-slate-400">Actieve Gebruikers</p>
                <p className="text-xl font-bold text-white">2,298</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-yellow-400" />
              <div>
                <p className="text-sm text-slate-400">Online Nu</p>
                <p className="text-xl font-bold text-white">187</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Ban className="h-4 w-4 text-red-400" />
              <div>
                <p className="text-sm text-slate-400">Geblokkeerd</p>
                <p className="text-xl font-bold text-white">47</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Zoek gebruikers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-700/50 border-slate-600 text-slate-100"
              />
            </div>
            <div className="flex gap-2">
              {['all', 'admin', 'moderator', 'user', 'active', 'suspended'].map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedFilter(filter)}
                  className={selectedFilter === filter ? 'bg-blue-600' : 'border-slate-600 text-slate-300'}
                >
                  {filter === 'all' ? 'Alle' : 
                   filter === 'suspended' ? 'Geschorst' :
                   filter === 'active' ? 'Actief' : 
                   filter.charAt(0).toUpperCase() + filter.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">
            Gebruikers ({filteredUsers.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Gebruiker</TableHead>
                <TableHead className="text-slate-300">Rol</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Laatste Login</TableHead>
                <TableHead className="text-slate-300">Tickets</TableHead>
                <TableHead className="text-slate-300">Lid sinds</TableHead>
                <TableHead className="text-slate-300"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id} className="border-slate-700 hover:bg-slate-700/30 cursor-pointer">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback className="bg-slate-600 text-slate-200">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-white">{user.name}</div>
                        <div className="text-sm text-slate-400">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={roleColors[user.role as keyof typeof roleColors]}>
                      {user.role === 'admin' ? 'Administrator' :
                       user.role === 'moderator' ? 'Moderator' : 'Gebruiker'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColors[user.status as keyof typeof statusColors]}>
                      {user.status === 'active' ? 'Actief' :
                       user.status === 'suspended' ? 'Geschorst' : 'Geblokkeerd'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-300">{user.lastLogin}</TableCell>
                  <TableCell className="text-slate-300">{user.tickets}</TableCell>
                  <TableCell className="text-slate-400">{user.joinDate}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-slate-800 border-slate-700">
                        <DropdownMenuItem className="text-slate-300">Bekijk profiel</DropdownMenuItem>
                        <DropdownMenuItem className="text-slate-300">Bewerken</DropdownMenuItem>
                        <DropdownMenuItem className="text-slate-300">Reset wachtwoord</DropdownMenuItem>
                        <DropdownMenuItem className="text-yellow-400">Schorsen</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-400">Blokkeren</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Users;
