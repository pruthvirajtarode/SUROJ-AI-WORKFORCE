import React from 'react';

const SyntheticDataLab = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-rule-2 pb-6">
        <div className="font-mono text-xs text-ink-3 mb-2 tracking-widest uppercase">Lab</div>
        <h1 className="text-3xl font-semibold">Synthetic Data Lab</h1>
        <p className="text-lg text-ink-2 mt-4 font-serif italic max-w-2xl">
          Generate deterministic, training-safe data sets for workshop exercises without exposing confidential company information.
        </p>
      </div>

      <div className="bg-paper-2 border border-rule-2 p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-6">Generate Dataset</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Session</label>
            <select className="w-full p-2 border border-rule rounded bg-paper">
              <option>1 - Tendering & Contracts</option>
              <option>2 - EPC Bids</option>
              <option>3 - Accounts & Finance</option>
              <option>4 - Cost & Planning</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Dataset Type</label>
            <select className="w-full p-2 border border-rule rounded bg-paper">
              <option>Tender obligations</option>
              <option>EPC BOQ</option>
              <option>Bank reconciliation</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Rows</label>
            <select className="w-full p-2 border border-rule rounded bg-paper">
              <option>10 rows</option>
              <option>25 rows</option>
              <option>50 rows</option>
            </select>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-rust text-paper font-semibold rounded hover:bg-brick transition-colors">
            Generate Dataset
          </button>
          <button className="px-4 py-2 bg-paper border border-rule text-ink font-semibold rounded hover:bg-paper-2 transition-colors">
            Download CSV
          </button>
        </div>
      </div>

      <div className="bg-[#FDFBF5] border border-rule p-4 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <span className="font-mono text-xs font-bold text-danger px-2 py-1 bg-[#F5E4D8] rounded border border-danger/20">
            SYNTHETIC DATA - FOR TRAINING ONLY
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr>
                <th className="border border-rule bg-paper-3 p-2 font-mono text-xs">Clause</th>
                <th className="border border-rule bg-paper-3 p-2 font-mono text-xs">Description</th>
                <th className="border border-rule bg-paper-3 p-2 font-mono text-xs">Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-rule p-2">4.1.2</td>
                <td className="border border-rule p-2">The contractor shall provide a mobilisation advance bank guarantee.</td>
                <td className="border border-rule p-2">Financial</td>
              </tr>
              <tr>
                <td className="border border-rule p-2">7.4</td>
                <td className="border border-rule p-2">Defect liability period is 24 months from substantial completion.</td>
                <td className="border border-rule p-2">Obligation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SyntheticDataLab;
