import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "The addendum that mattered",
    session: "Tendering & Contracts",
    context: "A 300-page tender received a 40-page addendum four days before submission.",
    problem: "The addendum buried a change to the mobilization advance recovery terms inside a seemingly unrelated clause about progress billing. Human reviewers missed it during the fast-tracked review.",
    solution: "The tender team ran a delta-comparison prompt using an LLM. The AI flagged the exact clause where 'recovery at 20% progress' was changed to 'recovery at 10% progress'.",
    result: "The firm adjusted their working capital projection, saving an unexpected cash flow gap of ₹2.4Cr.",
    badge: "CASE STUDY",
    color: "bg-rust/10 border-rust text-rust"
  },
  {
    id: 2,
    title: "The chiller room that was 100 mm short",
    session: "EPC Bids & Design-Build",
    context: "Design-build MEP package coordination.",
    problem: "The architectural drawing specified a finished floor level that, when combined with the structural slab depth and the newly specified chiller dimensions, left exactly 100 mm too little clearance for the required HVAC ducting overhead.",
    solution: "By feeding the dimensional constraints from the spec and the structural constraints into an AI analyzer prompt, the system flagged the spatial conflict before the priced BOQ was locked.",
    result: "Pre-bid query raised, design modified by client, avoiding a costly site-level variation request.",
    badge: "TRAINING SCENARIO",
    color: "bg-indigo/10 border-indigo text-indigo"
  },
  {
    id: 3,
    title: "The lowest quote that wasn't",
    session: "Procurement & Stores",
    context: "Comparing three vendor quotes for a major steel procurement package.",
    problem: "Vendor A had the lowest basic rate. Vendor B had higher basic rate but included unloading and had shorter lead times. Vendor C had a complex staggered payment term.",
    solution: "The procurement team used a 'Total Cost of Ownership' normalization prompt. The AI produced a leveled comparison table incorporating the time-value of money for the advance payment and the cost of site unloading.",
    result: "Vendor B was revealed to be 4% cheaper in total actual cost than Vendor A.",
    badge: "CASE STUDY",
    color: "bg-ochre/10 border-ochre text-ochre"
  }
];

const CaseStudies = () => {
  return (
    <div className="space-y-8 pb-12">
      <div className="border-b border-rule-2 pb-6">
        <h1 className="text-3xl font-semibold mb-4">Case Study Library</h1>
        <p className="text-lg text-ink-2 font-serif italic max-w-2xl">
          Real and illustrative scenarios demonstrating AI workflow integration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {caseStudies.map(cs => (
          <div key={cs.id} className="flex flex-col bg-paper border border-rule-2 rounded-md overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-mono font-bold px-2 py-1 border rounded ${cs.color}`}>
                  {cs.badge}
                </span>
                <span className="text-sm font-mono text-ink-3">{cs.session}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{cs.title}</h3>
              <p className="text-ink-2 mb-6 italic border-l-2 border-rule-2 pl-3 py-1">"{cs.context}"</p>
              
              <div className="space-y-4 flex-1">
                <div>
                  <div className="text-xs font-mono font-bold text-ink-3 uppercase mb-1">The Problem</div>
                  <p className="text-sm">{cs.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-ink-3 uppercase mb-1">AI Approach</div>
                  <p className="text-sm">{cs.solution}</p>
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-ink-3 uppercase mb-1">Result</div>
                  <p className="text-sm font-semibold text-ok">{cs.result}</p>
                </div>
              </div>
            </div>
            <div className="bg-paper-2 border-t border-rule-2 p-4 flex justify-between items-center">
              <div className="flex items-center text-sm font-semibold text-ink-2 hover:text-rust transition-colors cursor-pointer">
                <BookOpen size={16} className="mr-2" />
                View Full Workflow
              </div>
              <ArrowRight size={16} className="text-rule-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
