export const sessions = [
  {
    id: 1,
    title: "Tendering & Contracts",
    family: "Winning Work",
    headcount: 23,
    departments: [
      { name: "Contract & Tendering", count: 22 },
      { name: "Business Development", count: 1 }
    ],
    objective: "Long tender document analysis, obligation extraction, eligibility checking, and pre-bid query generation.",
    problem: "Reading 300 pages of tender documents to find three critical clauses hidden in annexures takes days and is prone to human fatigue.",
    aiOpportunity: "An LLM can read the entire document in seconds and extract every obligation, mapped to clause numbers, providing a structured first draft for human verification.",
    color: "rust"
  },
  {
    id: 2,
    title: "EPC Bids & Design-Build",
    family: "Winning Work",
    headcount: 19,
    departments: [],
    objective: "Design-build bidding, specification analysis, scope/interface boundaries, and design-stage risk.",
    problem: "Identifying spatial and interface conflicts between Architectural, Structural, and MEP specifications during rapid tender stages.",
    aiOpportunity: "AI can cross-reference multiple specifications simultaneously to flag dimensional constraints and scope gaps before finalizing the BOQ.",
    color: "brick"
  },
  {
    id: 3,
    title: "Accounts & Finance",
    family: "Numbers, Drawings & Systems",
    headcount: 39,
    departments: [],
    objective: "Invoice reconciliation, GSTR-2A/2B reconciliation, TDS review, bank reconciliation, notice response drafting.",
    problem: "Manually reconciling hundreds of subcontractor invoices with GSTR-2A records takes days and often misses miscategorized TDS rates.",
    aiOpportunity: "AI data structuring can instantly extract and categorize invoice data, flagging variances and mismatching GST numbers for human review.",
    color: "indigo"
  },
  {
    id: 4,
    title: "Cost, Planning & Systems",
    family: "Numbers, Drawings & Systems",
    headcount: 26,
    departments: [
      { name: "Cost Control", count: 11 },
      { name: "Planning", count: 9 },
      { name: "EDP", count: 6 }
    ],
    objective: "Budget vs actual, schedule analysis, monthly reporting, dashboard creation, forecast-at-completion.",
    problem: "Translating 5,000 lines of ERP transaction data into an insightful, narrative-driven variance report for management.",
    aiOpportunity: "Once the data is summarized, AI can instantly draft the management narrative focusing on root causes and exceptions.",
    color: "steel"
  },
  {
    id: 5,
    title: "Design, Drawings & Quantities",
    family: "Numbers, Drawings & Systems",
    headcount: 18,
    departments: [
      { name: "MEP", count: 12 },
      { name: "Quantity Surveyor", count: 4 },
      { name: "Documentation & Engineering Coordination", count: 2 }
    ],
    objective: "Drawings, specifications, quantities, BBS checking, revisions, correspondence, take-off verification.",
    problem: "Checking revised structural drawings against the original tender BOQ to identify required variation claims is incredibly time-intensive.",
    aiOpportunity: "AI can compare take-off data tables and automatically flag items with variance over a specified threshold, generating the variation claim drafts.",
    color: "slate"
  },
  {
    id: 6,
    title: "Procurement & Stores",
    family: "Running Site & Materials",
    headcount: 17,
    departments: [
      { name: "Purchase", count: 11 },
      { name: "Store", count: 6 }
    ],
    objective: "Vendor quotations, quotation normalisation, purchase orders, vendor comparison, delivery tracking, inventory.",
    problem: "Comparing vendor quotes that have different basic rates, freight terms, unloading duties, and staggered payment terms.",
    aiOpportunity: "An AI normalization prompt can generate a Total Cost of Ownership (TCO) comparison table, bringing all quotes to a common baseline.",
    color: "ochre"
  },
  {
    id: 7,
    title: "Plant, Execution & Compliance",
    family: "Running Site & Materials",
    headcount: 17,
    departments: [
      { name: "V&M", count: 5 },
      { name: "Mechanical", count: 3 },
      { name: "Operation", count: 3 },
      { name: "EHS", count: 3 },
      { name: "Precast", count: 1 },
      { name: "Quality", count: 1 },
      { name: "Shuttering & Formwork", count: 1 }
    ],
    objective: "Machine logbooks, preventive maintenance, statutory documents, safety observations, inspection checklists.",
    problem: "Capturing rough notes from daily site walkdowns and turning them into structured, categorized EHS and Quality compliance reports.",
    aiOpportunity: "AI can convert unstructured, messy field notes into fully formatted, categorized daily safety and quality observations ready for client submission.",
    color: "iron"
  },
  {
    id: 8,
    title: "People, Admin & Communication",
    family: "People & Communication",
    headcount: 25,
    departments: [
      { name: "HR & Admin", count: 23 },
      { name: "Branding", count: 2 }
    ],
    objective: "Letter drafting, tone control, policy documents, meeting minutes, presentations, internal communication.",
    problem: "Site engineers often draft emotionally charged emails to subcontractors about delays, lacking professional tone and contractual rigor.",
    aiOpportunity: "AI tone transformation rewrites emails to be firm, factual, and strictly aligned with contractual conditions.",
    color: "moss"
  }
];

export const globalStats = {
  totalParticipants: 184,
  totalSessions: 8,
  learningFamilies: 4,
  workshopDays: 3,
  medianRoomSize: 23,
  smallestRoom: 17,
  largestRoom: 39
};
