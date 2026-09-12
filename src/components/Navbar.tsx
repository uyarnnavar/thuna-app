import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Home, 
  Search, 
  BookmarkCheck, 
  Users, 
  Clock, 
  AlertTriangle, 
  Briefcase,
  MapPin,
  RefreshCw
} from 'lucide-react';
import type { AppView } from '../types';

export const Navbar: React.FC = () => {
  const { 
    activeView, 
    setActiveView, 
    roleMode, 
    setRoleMode, 
    userProfile, 
    requests,
    setIsEmergencyModalOpen,
    resetDemoData
  } = useApp();

  const activeRequestsCount = requests.filter(r => r.status !== 'Service Completed' && r.status !== 'Cancelled').length;

  const navItems: { id: AppView; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'landing', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'discovery', label: 'Find Workers', icon: <Search className="w-4 h-4" /> },
    { id: 'community_hub', label: 'Community Hub', icon: <Users className="w-4 h-4" /> },
    { id: 'my_trusted', label: 'My Trusted', icon: <BookmarkCheck className="w-4 h-4" /> },
    { id: 'requests', label: 'Track Requests', icon: <Clock className="w-4 h-4" />, badge: activeRequestsCount }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Banner Bar for Role Switch & Demo Controls */}
      <div className="bg-slate-950 text-white text-xs px-4 py-1.5 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <span className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wider">
            Trusted Network
          </span>
          <span className="hidden sm:inline text-slate-300 text-[11px] font-medium">
            Local Service Network for Young Adults & Residents
          </span>
        </div>

        <div className="flex items-center space-x-3">
          {/* Role Mode Switcher */}
          <div className="flex items-center bg-slate-900 p-0.5 rounded-lg border border-slate-800">
            <button
              onClick={() => {
                setRoleMode('student');
                if (activeView === 'worker_portal') setActiveView('landing');
              }}
              className={`px-2.5 py-1 rounded-md font-bold text-xs transition-all ${
                roleMode === 'student' 
                  ? 'bg-amber-500 text-slate-950 shadow-xs' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              👤 Resident
            </button>
            <button
              onClick={() => {
                setRoleMode('worker');
                setActiveView('worker_portal');
              }}
              className={`px-2.5 py-1 rounded-md font-bold text-xs transition-all ${
                roleMode === 'worker' 
                  ? 'bg-amber-500 text-slate-950 shadow-xs' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🔧 Worker View
            </button>
          </div>

          <button
            onClick={resetDemoData}
            title="Reset Demo Data"
            className="text-slate-400 hover:text-white flex items-center space-x-1 text-[11px] transition-colors pl-1"
          >
            <RefreshCw className="w-3 h-3" />
            <span className="hidden md:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Clean Logo & Brand */}
          <div 
            title="Return to Thuna Home"
            className="flex items-center space-x-2.5 cursor-pointer group" 
            onClick={() => {
              setRoleMode('student');
              setActiveView('landing');
            }}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-slate-950 font-black text-lg shadow-sm shadow-amber-500/20 group-hover:scale-105 transition-transform">
              th<span className="text-white">.</span>
            </div>
            <div>
              <span className="font-extrabold text-xl text-slate-900 tracking-tight font-sans group-hover:text-amber-600 transition-colors block leading-none">
                thuna
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wide">
                Local Contacts
              </span>
            </div>
          </div>

          {/* Location & District Pill */}
          {roleMode === 'student' && userProfile.isOnboarded && (
            <div className="hidden lg:flex items-center space-x-2 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200/80 text-xs text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="font-bold text-slate-900 truncate max-w-[160px]">
                {userProfile.cityDistrict.split('(')[0].trim()}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 truncate max-w-[120px]">
                {userProfile.locality}
              </span>
            </div>
          )}

          {/* Clean Navigation Links */}
          {roleMode === 'student' ? (
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    activeView === item.id
                      ? 'bg-amber-500/15 text-amber-950 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="ml-1 bg-amber-500 text-slate-950 font-bold text-xs w-4 h-4 rounded-full flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-sm font-semibold text-slate-700 flex items-center space-x-1">
                <Briefcase className="w-4 h-4 text-amber-600" />
                <span>Worker Service Dashboard</span>
              </span>
            </div>
          )}

          {/* Clean Emergency Button */}
          <div className="flex items-center space-x-3">
            {roleMode === 'student' && (
              <button
                onClick={() => setIsEmergencyModalOpen(true)}
                className="flex items-center space-x-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <AlertTriangle className="w-4 h-4" />
                <span className="uppercase tracking-wider font-extrabold">Emergency</span>
              </button>
            )}

            {/* Mobile View Toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => {
                  setRoleMode('student');
                  setActiveView('landing');
                }}
                className="p-2 text-slate-600 hover:text-slate-900 font-bold text-xs bg-slate-100 rounded-lg"
              >
                Home
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      {roleMode === 'student' && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-2 py-1.5 flex justify-around items-center shadow-lg">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`flex flex-col items-center py-1 px-2 rounded-lg text-xs font-medium relative ${
                activeView === item.id ? 'text-amber-600 font-bold' : 'text-slate-500'
              }`}
            >
              {item.icon}
              <span className="text-[10px] mt-0.5">{item.label}</span>
              {item.badge !== undefined && item.badge > 0 && (
                <span className="absolute -top-1 right-1 bg-amber-500 text-slate-950 font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
