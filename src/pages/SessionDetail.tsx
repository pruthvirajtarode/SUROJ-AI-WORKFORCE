import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { sessions } from '../data/sessions';
import { ArrowLeft, Users, FileText, CheckCircle2 } from 'lucide-react';

const SessionDetail = () => {
  const { id } = useParams();
  const session = sessions.find(s => s.id === Number(id));

  if (!session) return <div className="p-8">Session not found</div>;

  return (
    <div className="space-y-10 animate-fade-in pb-10">
      <Link to="/sessions" className="inline-flex items-center text-sm font-mono text-ink-3 hover:text-ink transition-colors">
        <ArrowLeft size={14} className="mr-2" />
        Back to Sessions
      </Link>

      <header className="border-b border-rule-2 pb-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            <div className="font-mono text-xs text-ink-3 tracking-widest mb-3 uppercase">Session 0{session.id} · {session.family}</div>
            <h1 className="text-4xl font-semibold mb-4">{session.title}</h1>
            <p className="text-xl text-ink-2 font-serif italic max-w-3xl leading-relaxed">
              {session.objective}
            </p>
          </div>
          <div className="bg-paper-2 border border-rule-2 rounded-md p-4 min-w-[200px] shrink-0">
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-xs text-ink-3 uppercase">Headcount</span>
              <span className="flex items-center font-bold text-lg"><Users size={18} className="mr-2 text-ink-3" />{session.headcount}</span>
            </div>
            {session.departments.length > 0 && (
              <div className="space-y-2">
                {session.departments.map(dept => (
                  <div key={dept.name} className="flex justify-between text-sm">
                    <span className="text-ink-2 truncate mr-2" title={dept.name}>{dept.name}</span>
                    <span className="font-mono">{dept.count}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-paper border-l-4 border-rust p-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center"><FileText size={20} className="mr-2 text-rust" />The Real Problem</h3>
          <p className="text-ink-2 leading-relaxed">
            Placeholder for specific department problems, e.g. "Reading 300 pages of tender documents to find three critical clauses hidden in annexures takes days and is prone to human fatigue."
          </p>
        </div>
        
        <div className="bg-paper border-l-4 border-ok p-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center"><CheckCircle2 size={20} className="mr-2 text-ok" />The AI Opportunity</h3>
          <p className="text-ink-2 leading-relaxed">
            Placeholder for AI solution: "An LLM can read the entire document in seconds and extract every obligation, mapped to clause numbers, providing a structured first draft for human verification."
          </p>
        </div>
      </section>

      <div className="bg-[#1B1E22] text-[#E4DCC8] p-6 rounded-md font-mono text-sm shadow-md overflow-x-auto">
        <div className="text-ochre font-bold mb-4">// Core Prompt Pattern</div>
        <pre className="whitespace-pre-wrap">
You are a [ROLE] at an Indian EPC firm.
The document below is [CONTEXT].

TASK:
Extract [SPECIFIC INFORMATION] and list any ambiguities.

FORMAT:
Table with columns: [COL 1], [COL 2], [COL 3]

RULES:
- Cite the exact clause for every point.
- Do not add information not present in the document.
        </pre>
      </div>
      
      <div className="border border-rule-2 bg-[#FDFBF5] p-6 rounded-md mt-8">
        <div className="flex justify-between items-center mb-4 border-b border-rule pb-2">
          <h3 className="font-semibold text-lg">Interactive Exercise</h3>
          <span className="text-xs font-mono px-2 py-1 bg-paper border border-rule rounded">30 MIN</span>
        </div>
        <p className="mb-6 text-ink-2">Use the Synthetic Data Lab to generate a test document and run the core prompt.</p>
        <Link to="/data-lab" className="inline-flex px-4 py-2 bg-ink text-paper text-sm font-semibold rounded hover:bg-ink-2 transition-colors">
          Open Synthetic Data Lab →
        </Link>
      </div>

    </div>
  );
};

export default SessionDetail;
