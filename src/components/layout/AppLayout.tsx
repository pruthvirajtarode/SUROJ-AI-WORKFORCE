import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Map, 
  BookOpen, 
  Library, 
  Database, 
  Workflow, 
  ShieldAlert, 
  Presentation,
  Calendar,
  BarChart,
  FolderOpen,
  FileDown
} from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/programme', icon: Map, label: 'Programme Overview' },
  { to: '/sessions', icon: BookOpen, label: '8 Sessions' },
  { to: '/case-studies', icon: FolderOpen, label: 'Case Studies' },
  { to: '/prompts', icon: Library, label: 'Prompt Library' },
  { to: '/data-lab', icon: Database, label: 'Synthetic Data Lab' },
  { to: '/workflow-lab', icon: Workflow, label: 'AI Workflow Lab' },
  { to: '/safety', icon: ShieldAlert, label: 'Data Safety' },
  { to: '/trainer', icon: Presentation, label: 'Trainer Dashboard' },
  { to: '/schedule', icon: Calendar, label: 'Workshop Schedule' },
  { to: '/progress', icon: BarChart, label: 'Progress & Impact' },
  { to: '/resources', icon: FileDown, label: 'Resource Centre' },
];

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-paper">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-rule-2 bg-paper-2 h-screen sticky top-0 overflow-y-auto">
        <div className="p-6 border-b border-rule">
          <div className="font-mono text-xs tracking-wider text-ink-3 mb-1">SUROJ BUILDCON × BE10X</div>
          <h1 className="font-sans font-semibold text-ink text-lg leading-tight">AI Workforce Transformation</h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md font-sans text-sm transition-colors",
                  isActive 
                    ? "bg-ink text-paper" 
                    : "text-ink-2 hover:bg-paper-3 hover:text-ink"
                )
              }
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full min-w-0 pb-20 md:pb-0">
        <div className="max-w-6xl mx-auto p-4 md:p-8">
          <Outlet />
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t border-rule-2 bg-paper-2 z-50 flex overflow-x-auto p-2 hide-scrollbar">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center p-2 min-w-[72px] space-y-1 rounded-md transition-colors",
                isActive ? "text-rust" : "text-ink-3"
              )
            }
          >
            <item.icon size={20} />
            <span className="text-[10px] whitespace-nowrap">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
