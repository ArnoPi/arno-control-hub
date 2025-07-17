
import { useState } from 'react';
import { Search, Plus, MoreHorizontal, Calendar, User, Clock, DollarSign, Activity, FileText, Github, Globe } from 'lucide-react';
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
import { Progress } from '@/components/ui/progress';

const projects = [
  {
    id: '1',
    name: 'Restaurant Keten Website',
    client: 'Restaurant Keten BV',
    status: 'in-progress',
    progress: 75,
    budget: 15000,
    spent: 11250,
    startDate: '2024-01-15',
    endDate: '2024-03-15',
    team: ['John Doe', 'Jane Smith'],
    technologies: ['React', 'Node.js', 'MongoDB'],
    description: 'Moderne website met reserveringssysteem voor 5 restaurant locaties'
  },
  {
    id: '2',
    name: 'FitLife Mobile App',
    client: 'FitLife Studio',
    status: 'planning',
    progress: 20,
    budget: 25000,
    spent: 5000,
    startDate: '2024-02-01',
    endDate: '2024-05-01',
    team: ['Mike Johnson'],
    technologies: ['React Native', 'Firebase'],
    description: 'Mobile app voor fitness studio met lesboekingen en voortgang tracking'
  },
  {
    id: '3',
    name: 'E-commerce Platform',
    client: 'Online Webshop',
    status: 'completed',
    progress: 100,
    budget: 30000,
    spent: 28500,
    startDate: '2023-10-01',
    endDate: '2024-01-15',
    team: ['Sarah Wilson', 'Tom Brown'],
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
    description: 'Complete e-commerce platform met moderne features'
  },
  {
    id: '4',
    name: 'Corporate Dashboard',
    client: 'Tech Corp',
    status: 'on-hold',
    progress: 45,
    budget: 18000,
    spent: 8100,
    startDate: '2024-01-20',
    endDate: '2024-04-20',
    team: ['Alex Chen'],
    technologies: ['Angular', 'Python', 'PostgreSQL'],
    description: 'Bedrijfsdashboard voor data analytics en reporting'
  }
];

const statusColors = {
  'planning': 'bg-blue-500/20 text-blue-400',
  'in-progress': 'bg-yellow-500/20 text-yellow-400',
  'completed': 'bg-green-500/20 text-green-400',
  'on-hold': 'bg-gray-500/20 text-gray-400',
  'cancelled': 'bg-red-500/20 text-red-400'
};

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);
  const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0);
  const activeProjects = projects.filter(p => p.status === 'in-progress').length;
  const completedProjects = projects.filter(p => p.status === 'completed').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Projecten</h1>
          <p className="text-slate-400">Beheer alle actieve en afgeronde projecten</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Nieuw Project
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-blue-400" />
              <div>
                <p className="text-sm text-slate-400">Totaal Projecten</p>
                <p className="text-xl font-bold text-white">{projects.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-yellow-400" />
              <div>
                <p className="text-sm text-slate-400">Actief</p>
                <p className="text-xl font-bold text-white">{activeProjects}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-green-400" />
              <div>
                <p className="text-sm text-slate-400">Totaal Budget</p>
                <p className="text-xl font-bold text-white">€{totalBudget.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-purple-400" />
              <div>
                <p className="text-sm text-slate-400">Afgerond</p>
                <p className="text-xl font-bold text-white">{completedProjects}</p>
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
                placeholder="Zoek projecten..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-700/50 border-slate-600 text-slate-100"
              />
            </div>
            <div className="flex gap-2">
              {['all', 'planning', 'in-progress', 'completed', 'on-hold'].map((status) => (
                <Button
                  key={status}
                  variant={statusFilter === status ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setStatusFilter(status)}
                  className={statusFilter === status ? 'bg-blue-600' : 'border-slate-600 text-slate-300'}
                >
                  {status === 'all' ? 'Alle' :
                   status === 'planning' ? 'Planning' :
                   status === 'in-progress' ? 'Bezig' :
                   status === 'completed' ? 'Afgerond' :
                   status === 'on-hold' ? 'On Hold' : status}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/30 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-white text-lg">{project.name}</CardTitle>
                  <p className="text-slate-400 text-sm mt-1">{project.client}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={statusColors[project.status as keyof typeof statusColors]}>
                    {project.status === 'in-progress' ? 'Bezig' :
                     project.status === 'planning' ? 'Planning' :
                     project.status === 'completed' ? 'Afgerond' :
                     project.status === 'on-hold' ? 'On Hold' : 'Geannuleerd'}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-slate-800 border-slate-700">
                      <DropdownMenuItem className="text-slate-300">Bekijken</DropdownMenuItem>
                      <DropdownMenuItem className="text-slate-300">Bewerken</DropdownMenuItem>
                      <DropdownMenuItem className="text-slate-300">Klonen</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-400">Archiveren</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300 text-sm">{project.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Voortgang</span>
                  <span className="text-slate-300">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-400">Budget</p>
                  <p className="text-white font-medium">€{project.budget.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-slate-400">Uitgegeven</p>
                  <p className="text-white font-medium">€{project.spent.toLocaleString()}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs border-slate-600 text-slate-300">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-700">
                <div className="flex -space-x-2">
                  {project.team.map((member, index) => (
                    <Avatar key={index} className="h-6 w-6 border-2 border-slate-800">
                      <AvatarFallback className="bg-slate-600 text-slate-200 text-xs">
                        {member.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Calendar className="h-3 w-3" />
                  <span>{project.endDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
