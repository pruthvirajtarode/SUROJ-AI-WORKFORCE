import React from 'react';
import { Play, Square, CheckCircle, Clock } from 'lucide-react';
import { sessions } from '../data/sessions';

const TrainerDashboard = () => {
  return (
    <div className="space-y-8 pb-12 max-w-5xl">
      <div className="border-b border-rule-2 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-semibold mb-4">Trainer Dashboard</h1>
          <p className="text-lg text-ink-2 font-serif italic">
            Session control, timing, and engagement tracking.
          </p>
        </div>
        <div className="bg-ink text-paper px-4 py-2 rounded flex items-center shadow-md">
          <Clock size={18} className="mr-2 text-rust" />
          <span className="font-mono font-bold tracking-wider">01:45:22</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-paper border border-rule-2 rounded-md p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-rust"></div>
            <div className="flex justify-between mb-2">
              <span className="font-mono text-xs text-ink-3 uppercase">Currently Running</span>
              <span className="font-mono text-xs font-bold text-rust">SESSION 01</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Tendering & Contracts</h2>
            <div className="flex items-center text-sm font-semibold text-ink-2 mb-6">
              <div className="w-2 h-2 bg-ok rounded-full animate-pulse mr-2"></div>
              23 Participants in room
            </div>
            
            <div className="space-y-4">
              <h4 className="font-mono text-xs text-ink-3 tracking-widest uppercase">Session Agenda</h4>
              
              <div className="space-y-3">
                {[
                  { time: '0:00 – 0:30', name: 'Foundations Block', status: 'done' },
                  { time: '0:30 – 1:00', name: 'The Real Problem', status: 'current' },
                  { time: '1:00 – 1:15', name: 'Break', status: 'pending' },
                  { time: '1:15 – 2:40', name: 'Hands-on Exercises', status: 'pending' },
                  { time: '2:40 – 3:00', name: 'Live Q&A', status: 'pending' }
                ].map((item, i) => (
                  <div key={i} className={`flex items-center p-3 rounded border ${
                    item.status === 'done' ? 'bg-paper-2 border-transparent text-ink-3' :
                    item.status === 'current' ? 'bg-[#FDFBF5] border-rust border-l-4 shadow-sm' :
                    'bg-paper border-rule-2 text-ink-2'
                  }`}>
                    <div className="w-24 font-mono text-xs">{item.time}</div>
                    <div className={`flex-1 font-semibold ${item.status === 'current' ? 'text-ink' : ''}`}>{item.name}</div>
                    <div>
                      {item.status === 'done' && <CheckCircle size={16} className="text-ok" />}
                      {item.status === 'current' && <Play size={16} className="text-rust fill-rust" />}
                      {item.status === 'pending' && <Square size={16} className="text-rule-2" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#FDFBF5] border border-rule-2 rounded-md p-6">
            <h4 className="font-mono text-xs text-ink-3 tracking-widest uppercase mb-4">Trainer Notes (Do NOT read aloud)</h4>
            <ul className="list-disc pl-5 space-y-2 text-ink-2 italic font-serif">
              <li>Do the tender demo live. It is the single most sticky proof.</li>
              <li>Walk the room during exercises. See their screens.</li>
              <li>Read one middle-tier output aloud and fix the prompt live.</li>
              <li>End with the "one workflow commitment" card.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-paper-2 border border-rule-2 rounded-md p-6">
            <h4 className="font-mono text-xs text-ink-3 tracking-widest uppercase mb-4">Quick Actions</h4>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-paper border border-rule rounded hover:bg-paper-3 transition-colors text-sm font-semibold flex justify-between items-center">
                <span>Start Exercise Timer (30m)</span>
                <Play size={14} />
              </button>
              <button className="w-full text-left p-3 bg-paper border border-rule rounded hover:bg-paper-3 transition-colors text-sm font-semibold flex justify-between items-center">
                <span>Show Data Safety Rules</span>
                <ArrowRight size={14} />
              </button>
              <button className="w-full text-left p-3 bg-paper border border-rule rounded hover:bg-paper-3 transition-colors text-sm font-semibold flex justify-between items-center">
                <span>Open Next Session</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div className="bg-[#F5E4D8] border border-danger/30 rounded-md p-6">
            <h4 className="font-mono text-xs text-danger tracking-widest uppercase mb-2">Open Placement Questions</h4>
            <p className="text-sm text-ink-2 mb-4 italic">To be confirmed with Suroj HR before Day 1.</p>
            <ul className="text-sm space-y-2 font-semibold">
              <li className="flex items-start">
                <span className="text-danger mr-2">•</span> 1. MEP placement
              </li>
              <li className="flex items-start">
                <span className="text-danger mr-2">•</span> 2. Operation placement
              </li>
              <li className="flex items-start">
                <span className="text-danger mr-2">•</span> 3. Mechanical placement
              </li>
              <li className="flex items-start">
                <span className="text-danger mr-2">•</span> 4. Quantity Surveyor placement
              </li>
              <li className="flex items-start">
                <span className="text-danger mr-2">•</span> 5. Precast placement
              </li>
              <li className="flex items-start">
                <span className="text-danger mr-2">•</span> 6. Quality/EHS headcount interpretation
              </li>
              <li className="flex items-start">
                <span className="text-danger mr-2">•</span> 7. Suroj Modular scope
              </li>
              <li className="flex items-start">
                <span className="text-danger mr-2">•</span> 8. Cost Control vs Planning team structure
              </li>
              <li className="flex items-start">
                <span className="text-danger mr-2">•</span> 9. Accounts 39-person room vs possible split
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Quick fix for ArrowRight icon not imported
import { ArrowRight } from 'lucide-react';
export default TrainerDashboard;
