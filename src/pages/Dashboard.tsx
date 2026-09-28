import React from 'react';
import { Users, BookOpen, Layers, CalendarDays } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { sessions, globalStats } from '../data/sessions';

const Dashboard = () => {
  return (
    <div className="space-y-10 animate-fade-in">
      <header className="relative overflow-hidden bg-ink text-paper p-10 md:p-16 rounded-lg shadow-xl blueprint-bg">
        <div className="relative z-10 max-w-3xl">
          <div className="font-mono text-sm text-ochre mb-4 uppercase tracking-widest">Suroj Buildcon × Be10x</div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 font-serif italic">
            Eight sessions.<br/>One transformation system.
          </h1>
          <p className="text-paper-3 text-lg max-w-xl">
            From workshop learning to repeatable AI-enabled workflows. Building the intelligent foundation for enterprise construction.
          </p>
        </div>
        {/* Abstract decorative elements */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 border border-rule/20 rounded-full opacity-20"></div>
        <div className="absolute -right-10 -bottom-10 w-64 h-64 border border-rust/40 rounded-full opacity-40"></div>
      </header>

      {/* KPI Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Participants', value: globalStats.totalParticipants, icon: Users, color: 'text-rust' },
          { label: 'Sessions', value: globalStats.totalSessions, icon: BookOpen, color: 'text-indigo' },
          { label: 'Learning Families', value: globalStats.learningFamilies, icon: Layers, color: 'text-steel' },
          { label: 'Workshop Days', value: globalStats.workshopDays, icon: CalendarDays, color: 'text-ochre' },
        ].map((kpi, i) => (
          <div key={i} className="bg-paper-2 border border-rule-2 p-6 rounded-md hover:shadow-md transition-shadow">
            <kpi.icon className={`w-8 h-8 ${kpi.color} mb-4`} />
            <div className="text-3xl font-semibold font-sans">{kpi.value}</div>
            <div className="text-sm font-mono text-ink-3 uppercase mt-1 tracking-wider">{kpi.label}</div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-paper border border-rule-2 p-6 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Participants by Session</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sessions} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number" />
                <YAxis dataKey="title" type="category" width={150} tick={{fontSize: 12}} />
                <Tooltip cursor={{fill: '#EFE9DB'}} contentStyle={{backgroundColor: '#14161A', color: '#F6F2E9', border: 'none'}} />
                <Bar dataKey="headcount" radius={[0, 4, 4, 0]}>
                  {sessions.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={
                      entry.color === 'rust' ? '#B0431E' :
                      entry.color === 'brick' ? '#7A2E1F' :
                      entry.color === 'indigo' ? '#2E3F63' :
                      entry.color === 'steel' ? '#35566B' :
                      entry.color === 'slate' ? '#445362' :
                      entry.color === 'ochre' ? '#B58022' :
                      entry.color === 'iron' ? '#4A4A4A' : '#5C6A3A'
                    } />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-paper border border-rule-2 p-6 rounded-md shadow-sm flex flex-col justify-between">
          <h3 className="text-lg font-semibold mb-2">Learning Families</h3>
          <div className="flex-1 flex items-center justify-center">
            {/* Simple static representaton if PieChart is too big, let's use a nice styled list for families */}
            <div className="w-full space-y-4">
               {[
                 { name: "Winning Work", count: 42, color: "bg-rust" },
                 { name: "Numbers, Drawings & Systems", count: 83, color: "bg-indigo" },
                 { name: "Running Site & Materials", count: 34, color: "bg-ochre" },
                 { name: "People & Communication", count: 25, color: "bg-moss" },
               ].map(f => (
                 <div key={f.name} className="flex flex-col">
                   <div className="flex justify-between text-sm mb-1">
                     <span className="font-medium text-ink-2">{f.name}</span>
                     <span className="font-mono text-ink-3">{f.count} participants</span>
                   </div>
                   <div className="w-full bg-paper-3 h-2 rounded-full overflow-hidden">
                     <div className={`${f.color} h-full`} style={{ width: `${(f.count / 184) * 100}%` }}></div>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
