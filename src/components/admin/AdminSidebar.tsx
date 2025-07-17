
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Ticket,
  Users,
  BarChart3,
  MessageSquare,
  Settings,
  FolderOpen,
  Bell,
  Search,
  Activity,
  Zap
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { Badge } from '@/components/ui/badge';

const mainItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: 'Tickets', url: '/tickets', icon: Ticket, badge: '12' },
  { title: 'Gebruikers', url: '/users', icon: Users },
  { title: 'Projecten', url: '/projects', icon: FolderOpen },
  { title: 'Chat & Support', url: '/chat', icon: MessageSquare, badge: '3' },
];

const monitoringItems = [
  { title: 'Statistieken', url: '/stats', icon: BarChart3 },
  { title: 'Server Status', url: '/status', icon: Activity },
  { title: 'Logs', url: '/logs', icon: Zap },
  { title: 'Meldingen', url: '/notifications', icon: Bell },
];

const systemItems = [
  { title: 'Instellingen', url: '/settings', icon: Settings },
];

export function AdminSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `${isActive 
      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border-r-2 border-blue-400' 
      : 'hover:bg-slate-800/50 text-slate-300 hover:text-slate-100'
    } transition-all duration-200`;

  const renderMenuItems = (items: typeof mainItems) => (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <NavLink to={item.url} className={getNavCls}>
              <item.icon className="h-4 w-4" />
              {!collapsed && (
                <div className="flex items-center justify-between w-full">
                  <span>{item.title}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </div>
              )}
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );

  return (
    <Sidebar className={`${collapsed ? 'w-16' : 'w-64'} border-r border-slate-800 bg-slate-900/50 backdrop-blur-lg`} collapsible>
      <SidebarContent className="p-2">
        {/* Logo */}
        <div className="flex items-center gap-2 p-4 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold text-white">Arnotjuh.be</h1>
              <p className="text-xs text-slate-400">Admin Panel</p>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 uppercase text-xs font-semibold">
            {!collapsed && 'Hoofdmenu'}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            {renderMenuItems(mainItems)}
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 uppercase text-xs font-semibold">
            {!collapsed && 'Monitoring'}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            {renderMenuItems(monitoringItems)}
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 uppercase text-xs font-semibold">
            {!collapsed && 'Systeem'}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            {renderMenuItems(systemItems)}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
