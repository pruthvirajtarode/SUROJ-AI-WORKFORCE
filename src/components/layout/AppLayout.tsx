import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
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
  FileDown,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const SidebarContent = ({ collapsed = false }: { collapsed?: boolean }) => (
    <>
      <div className={`p-5 border-b border-rule shrink-0 flex flex-col ${collapsed ? 'items-center justify-center' : 'justify-center'} min-h-[84px]`}>
        {!collapsed ? (
          <>
            <div className="flex flex-col gap-2 mb-4">
              <img src="/be10x-logo.png" alt="Be10x Logo" className="h-20 w-20 object-contain mix-blend-multiply drop-shadow-sm" />
              <div className="font-mono text-base font-bold tracking-widest text-ink uppercase mt-2">SUROJ BUILDCON</div>
            </div>
            <h1 className="font-sans font-medium text-ink-3 text-xs leading-tight uppercase tracking-wider">AI Workforce Transformation</h1>
          </>
        ) : (
          <img src="/be10x-logo.png" alt="Be10x" className="h-6 w-auto object-contain filter invert opacity-90" title="Suroj Buildcon x Be10x" />
        )}
      </div>
      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto hide-scrollbar">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            title={collapsed ? item.label : undefined}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md font-sans text-sm transition-colors relative group",
                isActive 
                  ? "bg-ink text-paper font-medium" 
                  : "text-ink-2 hover:bg-paper-3 hover:text-ink",
                collapsed && "justify-center px-0"
              )
            }
          >
            <item.icon size={20} className={collapsed ? "shrink-0" : ""} />
            {!collapsed && <span>{item.label}</span>}
            
            {/* Tooltip for collapsed state */}
            {collapsed && (
              <div className="absolute left-full ml-4 px-2 py-1 bg-ink text-paper text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                {item.label}
              </div>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-paper relative">
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-40 bg-paper border-b border-rule flex items-center justify-between p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <img src="/be10x-logo.png" alt="Be10x Logo" className="h-10 object-contain mix-blend-multiply" />
          <div>
            <div className="font-semibold text-sm">AI Transformation</div>
          </div>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 -mr-2 text-ink-2 hover:text-ink transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Mobile Drawer */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
              className="absolute top-0 left-0 bottom-0 w-[80%] max-w-sm bg-paper-2 flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-50">
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-paper/50 hover:bg-paper rounded-full transition-colors border border-rule/50"
                >
                  <X size={20} className="text-ink" />
                </button>
              </div>
              <SidebarContent collapsed={false} />
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.aside 
        animate={{ width: desktopCollapsed ? 80 : 256 }}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
        className="hidden md:flex flex-col border-r border-rule-2 bg-paper-2 h-screen sticky top-0 z-30"
      >
        <SidebarContent collapsed={desktopCollapsed} />
        
        {/* Desktop Collapse Toggle */}
        <div className="p-4 border-t border-rule flex justify-center">
          <button 
            onClick={() => setDesktopCollapsed(!desktopCollapsed)}
            className="p-2 rounded-lg text-ink-3 hover:text-ink hover:bg-paper-3 transition-colors flex items-center justify-center w-full"
            title={desktopCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {desktopCollapsed ? <ChevronRight size={20} /> : <div className="flex items-center gap-2"><ChevronLeft size={20} /><span className="text-sm font-medium">Collapse</span></div>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 w-full min-w-0">
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
