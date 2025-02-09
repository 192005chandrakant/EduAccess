import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Layout, 
  Book, 
  Users, 
  Settings,
  LogOut,
  Menu,
  X,
  User
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', icon: Layout, href: '/dashboard' },
    { name: 'Courses', icon: Book, href: '/courses' },
    { name: 'Teacher Portal', icon: Users, href: '/teacher' },
    { name: 'Profile', icon: User, href: '/profile' },
    { name: 'Settings', icon: Settings, href: '/Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-40 h-screen transition-transform
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 w-64 bg-white border-r border-gray-200
      `}>
        <div className="flex items-center gap-2 p-4 border-b">
          <BookOpen className="text-indigo-600" size={24} />
          <span className="text-xl font-bold"></span>
        </div>
        
        <nav className="p-4 space-y-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition
                ${location.pathname === item.href 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-gray-600 hover:bg-gray-50'
                }
              `}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 px-4 py-3 w-full text-gray-600 hover:bg-gray-50 rounded-lg transition"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="md:ml-64">
        {/* Top Bar */}
        <header className="bg-white border-b">
          <div className="flex items-center justify-between p-4">
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium">John Doe</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="container mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;