import React from 'react';
import { FileDown, Link as LinkIcon, FileText } from 'lucide-react';

const ResourceCentre = () => {
  const resources = [
    { title: "Trainer's Playbook", type: "PDF", size: "2.4 MB", icon: FileText },
    { title: "Suroj Departmental Categorisation", type: "XLSX", size: "45 KB", icon: FileText },
    { title: "Prompt Engineering Cheat Sheet", type: "PDF", size: "1.1 MB", icon: FileText },
    { title: "Data Safety 1-Pager (Printable)", type: "PDF", size: "800 KB", icon: FileText },
  ];

  return (
    <div className="space-y-8 pb-12 max-w-4xl mx-auto">
      <div className="border-b border-rule-2 pb-6">
        <h1 className="text-3xl font-semibold mb-4">Resource Centre</h1>
        <p className="text-lg text-ink-2 font-serif italic">
          Downloadable assets, playbooks, and reference materials.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((res, i) => (
          <div key={i} className="bg-paper border border-rule-2 p-6 rounded-md hover:border-ink transition-colors flex items-center justify-between group cursor-pointer shadow-sm">
            <div className="flex items-center">
              <res.icon size={24} className="text-rust mr-4" />
              <div>
                <h3 className="font-semibold">{res.title}</h3>
                <p className="text-xs font-mono text-ink-3 mt-1">{res.type} · {res.size}</p>
              </div>
            </div>
            <FileDown size={20} className="text-rule-2 group-hover:text-ink transition-colors" />
          </div>
        ))}
      </div>
      
      <div className="bg-paper-2 border border-rule-2 p-6 rounded-md mt-8">
        <h3 className="font-semibold mb-4 flex items-center"><LinkIcon size={18} className="mr-2" /> Quick Links</h3>
        <ul className="space-y-3 font-mono text-sm text-ink-2">
          <li><a href="#" className="hover:text-rust underline underline-offset-2">Claude Enterprise Login</a></li>
          <li><a href="#" className="hover:text-rust underline underline-offset-2">M365 Copilot Documentation</a></li>
          <li><a href="#" className="hover:text-rust underline underline-offset-2">Suroj IT Helpdesk Ticket - AI Tools</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ResourceCentre;
