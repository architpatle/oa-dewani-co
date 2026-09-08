import {
    ShieldCheck,
    FileCheck2,
    Lightbulb,
    ReceiptText,
    HeartHandshake,
    Globe2,
    Rocket,
    BriefcaseBusiness,
} from "lucide-react";

const servicesData = [
    {
        number: "01",

        slug: "audit-assurance",

        title: "Audit & Assurance",

        icon: ShieldCheck,

        shortDescription:
            "Independent audit and assurance services that deliver greater transparency, stronger financial confidence, and meaningful business insight.",

        heroDescription:
            "Go beyond financial statements with audit and assurance services designed to strengthen transparency, support informed decisions, and build stakeholder confidence.",

        overview: [
            "OAD Audit and Assurance services go beyond financial statements, providing valuable insights and transparency to help organisations make important decisions and gain the confidence of stakeholders.",

            "Investors and management teams increasingly require timely information beyond traditional audited financial statements. As the time between business events and decision-making continues to shrink, organisations need real-time assistance to promote investor confidence, manage regulatory responsibilities, and support long-term, sustainable economic growth.",
        ],

        coverage: [
            "Statutory Audit",
            "Internal Audit",
            "IT Audit",
            "Concurrent Audit",
            "Tax Audit",
            "Transfer Pricing Audit",
            "GST Audit",
            "SSAE18 Audit",
            "Certification",
            "Forensic Audit",
            "Fraud Investigations",
            "Due Diligence",
            "Mystery Audits",
            "Stock Audits",
            "Unit Audits / Inspections",
            "Comfort Letters / IPO Certifications",
        ],
    },


    {
        number: "02",

        slug: "secretarial-services",

        title: "Secretarial Services",

        icon: FileCheck2,

        shortDescription:
            "Professional secretarial and compliance support that helps companies and LLPs meet statutory requirements with confidence.",

        heroDescription:
            "Comprehensive secretarial services and professional guidance to help businesses manage statutory obligations, corporate governance, and regulatory compliance.",

        overview: [
            "Our secretarial services are available for private companies, public limited companies, overseas companies, and Limited Liability Partnerships (LLPs).",

            "OAD experts assist businesses with matters relating to monitoring and ensuring compliance with legal requirements while providing consultancy and support across secretarial matters governed by the Companies Act and LLP Act.",
        ],

        coverage: [
            "Appointment or Resignation of Director or Partner",
            "Change in Registered Address",
            "Closure of Company or LLP",
            "Change in Shareholding Pattern",
            "Establishing Branch Office, Liaison Office, Project Office or Similar Outlets in India by a Foreign Entity",
            "Drafting of Memorandum and Articles of Association of Companies",
            "Preparation and Filing of Statutory Forms with MCA",
            "Maintenance of Minutes Book and Statutory Registers",
            "Annual Filing and Compliance Services for Companies and LLPs",
            "XBRL Annual Filing",
            "Secretarial Compliance Certificate",
            "Report of Secretarial Audit",
            "Assistance with the Issuance of Non-Convertible Debentures",
            "Advising and Drafting of Joint Venture Agreements",
            "Technical and Foreign Agreements",
            "Shareholders' and Promoters' Agreements",
        ],
    },


    {
        number: "03",

        slug: "advisory",

        title: "Advisory",

        icon: Lightbulb,

        shortDescription:
            "Strategic financial and business advisory that helps organisations manage risk, navigate change, and pursue sustainable growth.",

        heroDescription:
            "Practical, insight-driven advisory solutions designed to help businesses manage uncertainty, strengthen operations, and confidently pursue transformation and growth.",

        overview: [
            "Businesses are exposed to multiple challenges and aggressive competition on a day-to-day basis, making sustainability and growth an ongoing challenge. OAD senior management has executed large and complex projects across various industries, supported by a dynamic team of professionals who help businesses identify risks and deal with uncertainty.",

            "OAD integrates its capabilities across offices to create customised solutions that enable businesses to undertake transformations, reorganisations, and growth and expansion plans while strengthening compliance and control processes in today's dynamic digital business environment.",
        ],

        coverage: [
            "Internal Financial Control",
            "Business Structuring and Opinion",
            "Process Review",
            "Standard Operating Procedures Design and Implementation",
            "Cost Management Reviews",
            "Regulatory Reviews",
            "Business Valuations",
            "Start-Up Advisory",
            "Accounting Manuals",
            "Investment Management",
            "Board Formations and Appraisals",
            "Corporate Governance Implementation",
            "Enterprise Risk Management",
            "Project and CapEx Reviews",
            "Risk Management Manuals",
        ],
    },


    {
        number: "04",

        slug: "taxation",

        title: "Taxation",

        icon: ReceiptText,

        shortDescription:
            "Strategic tax planning, compliance, and advisory services designed to help businesses manage changing tax requirements effectively.",

        heroDescription:
            "Navigate India's evolving taxation landscape with proactive tax strategies, comprehensive compliance support, and effective tax-cost management.",

        overview: [
            "With complex and frequent changes in taxation laws and procedures in India, our taxation team specialises in proactively identifying tax strategies and implementing effective tax-cost management systems.",

            "The OAD taxation team is capable of managing an entire spectrum of routine, complex, and emerging compliance requirements, covering GST, direct taxation, international taxation, and other specialised tax needs.",
        ],

        coverage: [
            "Direct Tax Compliance",
            "Indirect Tax Compliance",
            "International Tax Compliance",
            "FEMA Compliance",
            "Dispute Resolution",
            "Income Tax PAN Number",
            "Income Tax TDS Number",
            "GST Registration",
            "Income Tax Planning",
            "Income Tax Return Filing",
            "TDS Return Filing",
            "GST Monthly / Quarterly Return Filing",
            "GST Annual Return Filing",
            "Transfer Pricing Documentation",
            "Income Tax Representation Services such as Scrutiny Assessment / Appeal Proceedings",
            "Lower TDS Certificate from the Income Tax Department",
            "Certification for Foreign Remittance in Form 15CA and Form 15CB",
            "Income Tax Exemption Registration for Trust under Section 12A and 80G",
        ],
    },


    {
        number: "05",

        slug: "ngo-services",

        title: "NGO Services",

        icon: HeartHandshake,

        shortDescription:
            "Specialised registration, compliance, audit, taxation, and financial support for NGOs and charitable organisations.",

        heroDescription:
            "End-to-end professional support for NGOs, trusts, societies, and Section 8 companies across registration, compliance, taxation, audit, and governance.",

        overview: [
            "Non-governmental organisations (NGOs) are legally constituted organisations created by natural or legal persons that operate independently from government structures.",

            "OAD NGO Services assists clients with the registration of societies, trusts, and Section 8 companies. We guide organisations through procedural formalities, documentation requirements, and registration processes while helping them understand the benchmarks required for registration.",

            "Our professional team helps organisations meet the necessary criteria to obtain and avail tax exemptions for their charitable causes. We provide comprehensive NGO-related services, including incorporation, compliance with applicable laws, audits, taxation, and routine regulatory requirements.",
        ],

        coverage: [
            "Designing and Implementation of Accounting Methodology, Policies and Procedures",
            "Guiding NGOs in Planning and Budgeting Developmental Activity Proposals",
            "Monitoring and Audit of NGO Financial Records",
            "Project Evaluation with Subject Matter Experts, Including Financial Evaluation",
            "Cost Analysis of Socio-Economic Projects Based on Financial Data",
            "Trust Registration / Charitable Trust Registration",
            "Registration under Section 8 for Non-Profit Companies",
            "Co-Operative Society Registration",
            "Compliance under the Societies Act and Indian Trust Act",
            "Registration under Sections 12A and 80G of the Income Tax Act",
            "Registration under Section 35AC of the Income Tax Act",
            "Registration at NGO Darpan",
            "PAN / TAN Registration",
            "Annual Income Tax Return Submission",
            "Submission of Audit Report under Income Tax",
            "Annual Report Submission to Registrar of Societies",
            "FCRA Registration and Renewal",
            "FCRA Reports and Returns",
        ],
    },


    {
        number: "06",

        slug: "nri-services",

        title: "NRI Services",

        icon: Globe2,

        shortDescription:
            "Convenient and comprehensive taxation and financial compliance services designed specifically for Non-Resident Indians.",

        heroDescription:
            "Manage your Indian taxation and financial compliance remotely with comprehensive professional support designed around the needs of NRIs.",

        overview: [
            "OAD's NRI experts understand that managing tax compliance while living abroad can be challenging. We have therefore implemented comprehensive NRI taxation and compliance services that enable clients to manage their Indian tax requirements conveniently through our digital platform.",

            "Clients can simply share relevant details through email while our team ensures that their compliance requirements are completed on time. Consultations and discussions can also take place through Google Meet, video calls, and conference calls.",
        ],

        coverage: [
            "NRI Income Tax Return Filing",
            "Immovable Property Sale Compliance",
            "TDS Compliance",
            "Financial Advisory",
            "Assistance in Online Response to Tax Notices",
            "15CA / 15CB Assistance for Repatriation of Funds",
            "Determining Residential Status",
            "Compliance with Various Laws such as Income Tax and FEMA",
            "Business Start-Up Consultancy in India",
            "DTAA Consultancy",
            "Capital Gain Consultation",
            "TDS Exemption Certificate",
        ],
    },


    {
        number: "07",

        slug: "business-start-up",

        title: "Business Start Up",

        icon: Rocket,

        shortDescription:
            "End-to-end startup consulting that helps entrepreneurs build the right financial, legal, and compliance foundation from day one.",

        heroDescription:
            "Turn your business idea into a stronger foundation with strategic startup consulting, registrations, financial guidance, and ongoing professional support.",

        overview: [
            "The global economy continues to shift towards developing nations, and as one of the fastest-growing economies in the world, India offers significant opportunities for businesses looking to establish or expand their operations. However, choosing the right kind of presence can make a critical difference.",

            "Starting a new business is both exciting and challenging. As India's competitive landscape continues to grow, entrepreneurs often discover critical financial and legal implications only after they are ready to launch.",

            "OAD provides dependable startup consulting services to ensure that important details do not slip through the cracks while entrepreneurs focus on developing their business plans.",

            "With a long history of supporting entrepreneurs, OAD brings sector and financial insights to businesses while taking administrative and financial complexities off their hands. We provide the convenience of having your CA, CS, and financial advisor in one place.",
        ],

        coverage: [
            "Market Study and Strategic Analysis",
            "Structuring an Entity",
            "Business Plan Building",
            "Funding Options and Opportunities",
            "Sole Proprietorship Firm Registration",
            "Partnership Firm Registration",
            "Incorporation of Limited Liability Partnership (LLP)",
            "Formation of Private Limited Company",
            "Incorporation of One Person Company (OPC)",
            "PAN / TAN Registration",
            "GST Registration",
            "Professional Tax Registration",
            "Shops and Establishment Registration",
            "Import Export Code (IEC) Registration",
            "ESI / PF Registration",
            "Trade Mark Registration",
            "MSME / UDYAM Registration",
            "Business Start-Up Advisory Services",
            "Registration with FSSAI Department",
        ],
    },


    {
        number: "08",

        slug: "outsourcing",

        title: "Outsourcing",

        icon: BriefcaseBusiness,

        shortDescription:
            "Flexible outsourced accounting and business support that helps organisations manage operations efficiently and focus on bigger priorities.",

        heroDescription:
            "Offload complex operational responsibilities to an experienced professional team and focus your time and energy on building bigger ideas.",

        overview: [
            "When you do not have to focus on smaller operational details, you can create bigger ideas. OAD outsourcing services provide an experienced team along with a range of tools and methodologies to help businesses manage important functions more effectively.",

            "OAD can establish shared service centres across geographies and functions, an approach widely recognised for improving operational efficiency. Our team of domain experts helps organisations offload complex work and focus their attention on executing bigger business ideas.",
        ],

        coverage: [
            "Bookkeeping",
            "Compliance Management",
            "End-to-End Fixed Asset Management",
            "Physical Verification of Stock",
            "Staff Secondment",
            "Physical Verification of Fixed Assets",
            "Payroll Processing",
            "System and Accounting Manual",
            "Regulatory Compliances",
            "Debtor / Vendor Reconciliation",
        ],
    },
];


export default servicesData;