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
    color: "rust"
  },
  {
    id: 2,
    title: "EPC Bids & Design-Build",
    family: "Winning Work",
    headcount: 19,
    departments: [],
    objective: "Design-build bidding, specification analysis, scope/interface boundaries, and design-stage risk.",
    color: "brick"
  },
  {
    id: 3,
    title: "Accounts & Finance",
    family: "Numbers, Drawings & Systems",
    headcount: 39,
    departments: [],
    objective: "Invoice reconciliation, GSTR-2A/2B reconciliation, TDS review, bank reconciliation, notice response drafting.",
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
