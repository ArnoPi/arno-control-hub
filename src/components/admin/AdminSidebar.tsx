
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Users,
  TicketIcon as Ticket,
  BarChart3,
  MessageSquare,
  FolderOpen,
  Bell,
  Activity,
  FileText
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

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
} from "@/components/ui/sidebar";

const navigation = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Tickets",
    url: "/admin/tickets",
    icon: Ticket,
  },
  {
    title: "Gebruikers",
    url: "/admin/users", 
    icon: Users,
  },
  {
    title: "Projecten",
    url: "/admin/projects",
    icon: FolderOpen,
  },
  {
    title: "Chat & Support",
    url: "/admin/chat",
    icon: MessageSquare,
  },
  {
    title: "Statistieken",
    url: "/admin/stats",
    icon: BarChart3,
  },
  {
    title: "Server Status",
    url: "/admin/status",
    icon: Activity,
  },
  {
    title: "Logs",
    url: "/admin/logs",
    icon: FileText,
  },
  {
    title: "Meldingen",
    url: "/admin/notifications",
    icon: Bell,
  },
  {
    title: "Instellingen",
    url: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavClasses = (isActive: boolean) =>
    isActive 
      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground";

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border bg-sidebar">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70">
            {!isCollapsed && "Arnotjuh.be Admin"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavClasses(isActive(item.url))}
                      title={item.title}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
