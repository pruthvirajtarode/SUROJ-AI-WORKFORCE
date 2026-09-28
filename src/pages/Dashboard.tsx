import React from 'react';
import { Users, BookOpen, Layers, CalendarDays } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { sessions, globalStats } from '../data/sessions';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="show" 
      variants={containerVars}
      className="space-y-10"
    >
      <motion.header variants={itemVars} className="relative overflow-hidden bg-ink text-paper p-10 md:p-16 rounded-xl shadow-2xl blueprint-bg border border-ink-2">
        <div className="relative z-10 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm text-ochre mb-4 uppercase tracking-widest flex items-center"
          >
            <div className="w-2 h-2 bg-rust rounded-full mr-3 animate-pulse"></div>
            Suroj Buildcon × Be10x
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 font-serif italic">
            Eight sessions.<br/>One transformation system.
          </h1>
          <p className="text-paper-3 text-lg max-w-xl">
            From workshop learning to repeatable AI-enabled workflows. Building the intelligent foundation for enterprise construction.
          </p>
        </div>
        {/* Abstract decorative elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 -bottom-20 w-96 h-96 border border-rule/20 rounded-full opacity-20 pointer-events-none"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -right-10 -bottom-10 w-64 h-64 border border-rust/40 rounded-full opacity-40 pointer-events-none"
        />
      </motion.header>

      {/* KPI Cards */}
      <motion.section variants={containerVars} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: 'Participants', value: globalStats.totalParticipants, icon: Users, color: 'text-rust', bg: 'bg-rust/10', border: 'border-rust/20' },
          { label: 'Sessions', value: globalStats.totalSessions, icon: BookOpen, color: 'text-indigo', bg: 'bg-indigo/10', border: 'border-indigo/20' },
          { label: 'Learning Families', value: globalStats.learningFamilies, icon: Layers, color: 'text-steel', bg: 'bg-steel/10', border: 'border-steel/20' },
          { label: 'Workshop Days', value: globalStats.workshopDays, icon: CalendarDays, color: 'text-ochre', bg: 'bg-ochre/10', border: 'border-ochre/20' },
        ].map((kpi, i) => (
          <motion.div 
            key={i} 
            variants={itemVars}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            className={`bg-paper-2 border p-6 rounded-xl shadow-sm relative overflow-hidden transition-all ${kpi.border}`}
          >
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full ${kpi.bg} -mr-4 -mt-4 opacity-50`}></div>
            <kpi.icon className={`w-8 h-8 ${kpi.color} mb-4 relative z-10`} />
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
              className="text-4xl font-semibold font-sans relative z-10"
            >
              {kpi.value}
            </motion.div>
            <div className="text-xs font-mono text-ink-3 uppercase mt-2 tracking-wider relative z-10">{kpi.label}</div>
          </motion.div>
        ))}
      </motion.section>

      <motion.section variants={itemVars} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-paper border border-rule-2 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-6 flex items-center">
            <span className="w-1.5 h-6 bg-ink rounded-full mr-3"></span>
            Participants by Session
          </h3>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sessions} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="title" type="category" width={160} tick={{fontSize: 12, fontWeight: 500}} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{fill: 'var(--color-paper-2)', radius: 4}} 
                  contentStyle={{backgroundColor: '#14161A', color: '#F6F2E9', border: 'none', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} 
                />
                <Bar dataKey="headcount" radius={[0, 4, 4, 0]} barSize={24} animationDuration={1500}>
                  {sessions.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={
                      entry.color === 'rust' ? 'var(--color-rust)' :
                      entry.color === 'brick' ? 'var(--color-brick)' :
                      entry.color === 'indigo' ? 'var(--color-indigo)' :
                      entry.color === 'steel' ? 'var(--color-steel)' :
                      entry.color === 'slate' ? 'var(--color-slate)' :
                      entry.color === 'ochre' ? 'var(--color-ochre)' :
                      entry.color === 'iron' ? 'var(--color-iron)' : 'var(--color-moss)'
                    } />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-paper border border-rule-2 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
          <h3 className="text-lg font-semibold mb-6 flex items-center">
            <span className="w-1.5 h-6 bg-ink rounded-full mr-3"></span>
            Learning Families
          </h3>
          <div className="flex-1 flex flex-col justify-center gap-6">
             {[
               { name: "Winning Work", count: 42, color: "bg-rust" },
               { name: "Numbers, Drawings & Systems", count: 83, color: "bg-indigo" },
               { name: "Running Site & Materials", count: 34, color: "bg-ochre" },
               { name: "People & Communication", count: 25, color: "bg-moss" },
             ].map((f, index) => (
               <div key={f.name} className="flex flex-col group cursor-default">
                 <div className="flex justify-between text-sm mb-2">
                   <span className="font-medium text-ink-2 group-hover:text-ink transition-colors">{f.name}</span>
                   <span className="font-mono text-ink-3 font-semibold group-hover:text-ink transition-colors">{f.count} pax</span>
                 </div>
                 <div className="w-full bg-paper-3 h-3 rounded-full overflow-hidden shadow-inner">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: `${(f.count / 184) * 100}%` }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                     className={`${f.color} h-full rounded-full`}
                   ></motion.div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Dashboard;
