import React from 'react';

const ProgrammeOverview = () => {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="border-b border-rule-2 pb-6">
        <div className="font-mono text-xs text-ink-3 mb-2 tracking-widest uppercase">Overview</div>
        <h1 className="text-3xl font-semibold">The Programme Map</h1>
        <p className="text-lg text-ink-2 mt-4 font-serif italic max-w-2xl">
          Four learning families, transforming traditional workflows into AI-enabled operational habits.
        </p>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-rule-2 before:to-transparent">
        
        {/* Pipeline Steps */}
        {[
          {
            title: "A — Winning Work",
            sessions: "Sessions 1–2",
            desc: "Documents in → priced response out",
            color: "border-rust text-rust"
          },
          {
            title: "B — Numbers, Drawings & Systems",
            sessions: "Sessions 3–5",
            desc: "Check → analyse → report",
            color: "border-indigo text-indigo"
          },
          {
            title: "C — Running Site & Materials",
            sessions: "Sessions 6–7",
            desc: "Capture → reconcile → report",
            color: "border-ochre text-ochre"
          },
          {
            title: "D — People & Communication",
            sessions: "Session 8",
            desc: "Draft → communicate → document",
            color: "border-moss text-moss"
          }
        ].map((step, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 bg-paper shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm ${step.color}`}>
              <span className="font-mono font-bold text-sm">{['A','B','C','D'][idx]}</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-md border border-rule-2 bg-paper-2 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">{step.title}</h3>
                <span className="font-mono text-xs text-ink-3 px-2 py-1 bg-paper border border-rule rounded">{step.sessions}</span>
              </div>
              <p className="text-ink-2 font-mono text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-ink text-paper p-8 rounded-md text-center max-w-2xl mx-auto shadow-lg blueprint-bg">
        <h4 className="font-mono text-sm text-ochre mb-4 tracking-widest uppercase">The Universal AI Workflow</h4>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 font-semibold">
          <div className="px-4 py-2 border border-rule/30 rounded">INPUT</div>
          <span className="text-rule/50">→</span>
          <div className="px-4 py-2 border border-rust rounded text-rust bg-rust/10">AI ANALYSIS</div>
          <span className="text-rule/50">→</span>
          <div className="px-4 py-2 border border-ok rounded text-ok bg-ok/10">HUMAN DECIDES</div>
          <span className="text-rule/50">→</span>
          <div className="px-4 py-2 border border-rule/30 rounded">REPEATABLE HABIT</div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeOverview;
