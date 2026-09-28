import React, { useState } from 'react';
import { Copy, Check, Search, Filter } from 'lucide-react';

const prompts = [
  {
    id: 1,
    title: "Obligation Extraction",
    department: "Tendering",
    useCase: "Tender Review",
    prompt: `You are a Contracts Engineer at an Indian EPC firm.
The document below is a tender condition of contract.

TASK:
Extract every obligation placed on the contractor.

FORMAT:
Table with columns: Clause No. | Obligation | Trigger | Potential Impact

RULES:
- Only use information present in the text.
- If unclear, mark "ambiguous".
- Do not invent obligations.`,
    difficulty: "Beginner"
  },
  {
    id: 2,
    title: "Spec vs BOQ Mismatch",
    department: "Engineering",
    useCase: "Design-Build Interface",
    prompt: `You are a Design Coordinator at an EPC firm.
Below are two texts: a Technical Specification extract and a BOQ line item description.

TASK:
Compare them and identify any mismatches where the specification demands a higher standard or different scope than what the BOQ prices.

FORMAT:
Bullet points highlighting specifically the delta.`,
    difficulty: "Intermediate"
  },
  {
    id: 3,
    title: "GSTR-2A Reconciliation Variance",
    department: "Accounts",
    useCase: "GST Compliance",
    prompt: `You are a Senior Accountant.
I have a list of invoice variances between our purchase register and GSTR-2A.

TASK:
Categorize these variances into: Date mismatch, Value mismatch, Vendor not filed, or Invoice missing in PR.

FORMAT:
Table summary followed by the categorized lists.`,
    difficulty: "Intermediate"
  }
];

const PromptLibrary = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 pb-12 max-w-6xl">
      <div className="border-b border-rule-2 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold mb-4">Prompt Library</h1>
          <p className="text-lg text-ink-2 font-serif italic max-w-2xl">
            A curated, tested collection of high-leverage AI prompts for construction workflows.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-3" />
            <input type="text" placeholder="Search prompts..." className="pl-9 pr-4 py-2 rounded border border-rule bg-paper text-sm w-48 focus:outline-none focus:border-ink" />
          </div>
          <button className="flex items-center px-3 py-2 border border-rule rounded bg-paper hover:bg-paper-2 text-sm text-ink-2">
            <Filter size={16} className="mr-2" /> Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prompts.map(p => (
          <div key={p.id} className="flex flex-col bg-paper border border-rule-2 rounded-md overflow-hidden">
            <div className="p-4 border-b border-rule bg-paper-2 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-ink-3 uppercase bg-paper px-2 py-0.5 border border-rule rounded mr-2">{p.department}</span>
                <span className="text-[10px] font-mono tracking-widest text-ink-3 uppercase">{p.difficulty}</span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-ink-2 mb-4">{p.useCase}</p>
              
              <div className="bg-[#1B1E22] p-4 rounded text-sm font-mono text-[#E4DCC8] whitespace-pre-wrap flex-1 overflow-y-auto max-h-48 hide-scrollbar">
                {p.prompt}
              </div>
            </div>
            <div className="p-4 border-t border-rule bg-paper-2 flex justify-end">
              <button 
                onClick={() => handleCopy(p.id, p.prompt)}
                className="flex items-center px-4 py-2 bg-ink text-paper rounded text-sm font-semibold hover:bg-ink-2 transition-colors"
              >
                {copiedId === p.id ? <Check size={16} className="mr-2 text-ok" /> : <Copy size={16} className="mr-2" />}
                {copiedId === p.id ? 'Copied!' : 'Copy Prompt'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptLibrary;
