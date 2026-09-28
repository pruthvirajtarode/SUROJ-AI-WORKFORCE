import React, { useState } from 'react';
import { FileDown, Link as LinkIcon, FileText, CheckCircle, Loader2, FileSpreadsheet, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { jsPDF } from 'jspdf';

const ResourceCentre = () => {
  const [downloading, setDownloading] = useState<Record<number, boolean>>({});
  const [completed, setCompleted] = useState<Record<number, boolean>>({});

  const resources = [
    { id: 1, title: "Trainer's Playbook", type: "PDF", size: "2.4 MB", icon: FileText, color: "text-rust", bg: "bg-rust/10" },
    { id: 2, title: "Suroj Departmental Categorisation", type: "XLSX", size: "45 KB", icon: FileSpreadsheet, color: "text-ok", bg: "bg-ok/10" },
    { id: 3, title: "Prompt Engineering Cheat Sheet", type: "PDF", size: "1.1 MB", icon: FileText, color: "text-indigo", bg: "bg-indigo/10" },
    { id: 4, title: "Data Safety 1-Pager (Printable)", type: "PDF", size: "800 KB", icon: FileText, color: "text-danger", bg: "bg-danger/10" },
  ];

  const handleDownload = (res: typeof resources[0]) => {
    if (downloading[res.id] || completed[res.id]) return;

    // Set downloading state
    setDownloading(prev => ({ ...prev, [res.id]: true }));

    // Simulate network delay for realism
    setTimeout(() => {
      // Trigger actual file download
      if (res.type === 'PDF') {
        const doc = new jsPDF();
        doc.setFontSize(22);
        doc.text(`Suroj Buildcon x Be10x AI Transformation`, 20, 30);
        doc.setFontSize(16);
        doc.text(res.title, 20, 50);
        doc.setFontSize(12);
        doc.text(`This is an officially generated document for the workshop.`, 20, 70);
        doc.text(`Confidential - For Internal Use Only`, 20, 90);
        doc.save(`${res.title.replace(/\s+/g, '_')}.pdf`);
      } else {
        // Fallback for CSV/XLSX - generating a simple CSV
        const content = `Category,Department,Headcount\nOperations,Civil,120\nOperations,MEP,45\nCommercial,Tendering,23`;
        const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${res.title.replace(/\s+/g, '_')}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }

      // Update UI state
      setDownloading(prev => ({ ...prev, [res.id]: false }));
      setCompleted(prev => ({ ...prev, [res.id]: true }));

      // Reset after 3 seconds
      setTimeout(() => {
        setCompleted(prev => ({ ...prev, [res.id]: false }));
      }, 3000);
    }, 1500);
  };

  const containerVars: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const itemVars: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={containerVars}
      className="space-y-8 pb-12 max-w-5xl mx-auto"
    >
      <div className="border-b border-rule-2 pb-6">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-xs text-ink-3 mb-3 tracking-widest uppercase"
        >
          Downloads
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Resource Centre</h1>
        <p className="text-lg text-ink-2 font-serif italic max-w-2xl">
          Downloadable assets, playbooks, and reference materials.
        </p>
      </div>

      <motion.div variants={containerVars} className="grid md:grid-cols-2 gap-6">
        {resources.map((res) => (
          <motion.div 
            variants={itemVars}
            key={res.id} 
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleDownload(res)}
            className={`bg-paper border-2 p-6 rounded-xl flex items-center justify-between group cursor-pointer shadow-sm relative overflow-hidden transition-all duration-300 ${
              completed[res.id] ? 'border-ok bg-ok/5' : 
              downloading[res.id] ? 'border-rust bg-rust/5' : 
              'border-rule-2 hover:border-ink hover:shadow-md'
            }`}
          >
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full ${res.bg} -mr-4 -mt-4 opacity-50 transition-colors`}></div>
            
            <div className="flex items-center relative z-10">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${res.bg} mr-4`}>
                <res.icon size={24} className={res.color} />
              </div>
              <div>
                <h3 className={`font-semibold text-lg transition-colors ${completed[res.id] ? 'text-ok' : 'group-hover:text-rust'}`}>
                  {res.title}
                </h3>
                <p className="text-xs font-mono text-ink-3 mt-1 flex items-center">
                  <span className="bg-paper-2 px-2 py-0.5 rounded border border-rule mr-2">{res.type}</span> 
                  {res.size}
                </p>
              </div>
            </div>
            
            <div className="relative z-10">
              {downloading[res.id] ? (
                <Loader2 size={24} className="text-rust animate-spin" />
              ) : completed[res.id] ? (
                <CheckCircle size={24} className="text-ok" />
              ) : (
                <FileDown size={24} className="text-rule-2 group-hover:text-ink transition-colors" />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div variants={itemVars} className="bg-ink text-paper p-8 rounded-xl mt-12 shadow-xl border border-ink-2 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-rust opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-indigo opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        
        <h3 className="font-semibold mb-6 flex items-center text-xl relative z-10">
          <LinkIcon size={20} className="mr-3 text-ochre" /> External Quick Links
        </h3>
        
        <ul className="space-y-4 font-mono text-sm relative z-10">
          {[
            { name: "Claude Enterprise Login", url: "https://claude.ai" },
            { name: "M365 Copilot Documentation", url: "https://microsoft.com/copilot" },
            { name: "Suroj IT Helpdesk Ticket - AI Tools", url: "#" }
          ].map((link, i) => (
            <motion.li 
              key={i}
              whileHover={{ x: 5 }}
              className="flex items-center"
            >
              <ExternalLink size={14} className="mr-3 text-ink-3" />
              <a href={link.url} target="_blank" rel="noreferrer" className="text-paper hover:text-rust transition-colors underline underline-offset-4 decoration-rule/30 hover:decoration-rust">
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default ResourceCentre;
