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


export const servicesData = [
    {
        id: 1,
        slug: "audit-assurance",

        title: "Audit & Assurance",

        shortDescription:
            "Independent audit and assurance services that strengthen financial reporting, improve transparency, and build stakeholder confidence.",

        heroDescription:
            "Independent assurance and audit services designed to strengthen financial confidence, improve transparency, and support better business decisions.",

        overview:
            "Our Audit & Assurance services help businesses strengthen the reliability of their financial information and meet their regulatory responsibilities with confidence. Through a structured and independent approach, we evaluate financial records, reporting processes, and internal controls to provide meaningful assurance to stakeholders.",

        whatWeCover: [
            "Statutory audits",
            "Internal audits",
            "Tax audits",
            "Financial statement reviews",
            "Internal control evaluation",
            "Risk assessment and compliance reviews",
            "Audit support and reporting",
            "Assurance services for stakeholders",
        ],

        icon: ShieldCheck,
    },


    {
        id: 2,
        slug: "secretarial-services",

        title: "Secretarial Services",

        shortDescription:
            "Reliable compliance and secretarial support to help businesses meet statutory requirements and maintain proper corporate governance.",

        heroDescription:
            "Reliable corporate compliance and secretarial support that helps your business stay organised, compliant, and governance-ready.",

        overview:
            "Our Secretarial Services are designed to help businesses manage their corporate compliance responsibilities efficiently. We provide structured support for statutory filings, corporate records, governance requirements, and regulatory obligations so businesses can remain focused on their operations.",

        whatWeCover: [
            "Company incorporation support",
            "Statutory compliance management",
            "Annual and periodic filings",
            "Maintenance of statutory records",
            "Corporate governance support",
            "Board and shareholder documentation",
            "Regulatory compliance assistance",
            "Secretarial advisory services",
        ],

        icon: FileCheck2,
    },


    {
        id: 3,
        slug: "advisory",

        title: "Advisory",

        shortDescription:
            "Practical financial and business advisory to help you make informed decisions, manage risks, and pursue sustainable growth.",

        heroDescription:
            "Practical financial and business advisory that helps you make clearer decisions, manage uncertainty, and plan for sustainable growth.",

        overview:
            "Our Advisory services combine financial expertise with practical business understanding. We work closely with businesses to identify challenges, evaluate opportunities, manage risks, and develop strategies that support stronger decision-making and long-term growth.",

        whatWeCover: [
            "Business and financial advisory",
            "Strategic planning support",
            "Financial performance analysis",
            "Risk management advisory",
            "Business restructuring support",
            "Management decision support",
            "Growth and expansion planning",
            "Operational improvement advisory",
        ],

        icon: Lightbulb,
    },


    {
        id: 4,
        slug: "taxation",

        title: "Taxation",

        shortDescription:
            "Strategic tax planning, compliance, and advisory solutions that help you stay compliant while optimizing your tax position.",

        heroDescription:
            "Strategic tax planning and compliance support designed to help you meet obligations while managing your tax position efficiently.",

        overview:
            "Taxation requires a careful balance between compliance, planning, and business strategy. Our Taxation services help individuals and businesses navigate complex tax requirements, manage filings, plan effectively, and stay aligned with changing regulations.",

        whatWeCover: [
            "Direct tax advisory",
            "Indirect tax advisory",
            "Income tax return filing",
            "GST compliance and advisory",
            "Tax planning",
            "Tax assessments and representation",
            "Tax audit support",
            "Ongoing taxation compliance",
        ],

        icon: ReceiptText,
    },


    {
        id: 5,
        slug: "ngo-services",

        title: "NGO Services",

        shortDescription:
            "Specialized accounting, audit, taxation, and compliance support tailored to the requirements of NGOs and charitable organizations.",

        heroDescription:
            "Specialised financial, compliance, and advisory support designed around the unique requirements of NGOs and charitable organisations.",

        overview:
            "NGOs and charitable organisations operate within a distinct regulatory and financial environment. Our specialised services provide structured support across accounting, audit, taxation, reporting, and compliance to help organisations maintain transparency and focus on their mission.",

        whatWeCover: [
            "Accounting and bookkeeping support",
            "Audit and assurance services",
            "Taxation and tax compliance",
            "Regulatory compliance support",
            "Financial reporting",
            "Trust and society compliance",
            "Documentation and record management",
            "Advisory for financial governance",
        ],

        icon: HeartHandshake,
    },


    {
        id: 6,
        slug: "nri-services",

        title: "NRI Services",

        shortDescription:
            "End-to-end tax and financial assistance for NRIs covering compliance, investments, taxation, and India-related financial requirements.",

        heroDescription:
            "End-to-end financial and taxation support for NRIs managing investments, compliance, and financial responsibilities in India.",

        overview:
            "Managing financial responsibilities across countries can be complex. Our NRI Services provide structured support for taxation, investments, compliance, and India-related financial matters, helping non-resident clients manage their obligations with greater clarity.",

        whatWeCover: [
            "NRI income tax services",
            "Tax return filing",
            "India-related tax advisory",
            "Investment-related financial support",
            "Property taxation assistance",
            "Compliance support",
            "Repatriation-related guidance",
            "Ongoing financial advisory",
        ],

        icon: Globe2,
    },


    {
        id: 7,
        slug: "business-start-up",

        title: "Business Start Up",

        shortDescription:
            "From choosing the right structure to registrations and financial setup, we help turn your business idea into a strong foundation for growth.",

        heroDescription:
            "From business structure and registrations to financial setup, we help transform your idea into a strong foundation for growth.",

        overview:
            "Starting a business involves important decisions from the very beginning. Our Business Start Up services provide guidance across entity selection, registrations, compliance, and financial setup so entrepreneurs can begin their journey with a stronger and more structured foundation.",

        whatWeCover: [
            "Business structure selection",
            "Company and entity registration",
            "Tax registrations",
            "GST registration support",
            "Initial compliance setup",
            "Financial and accounting setup",
            "Business planning support",
            "Startup advisory",
        ],

        icon: Rocket,
    },


    {
        id: 8,
        slug: "outsourcing",

        title: "Outsourcing",

        shortDescription:
            "Dependable outsourced accounting and finance support that reduces operational burden and lets you focus on running your business.",

        heroDescription:
            "Reliable outsourced accounting and finance support that reduces operational complexity and gives your business more room to focus on growth.",

        overview:
            "Our Outsourcing services provide businesses with dependable financial and accounting support without the burden of managing every function internally. We help streamline routine financial operations while maintaining accuracy, consistency, and timely reporting.",

        whatWeCover: [
            "Outsourced accounting",
            "Bookkeeping services",
            "Payroll support",
            "Financial reporting",
            "Accounts payable management",
            "Accounts receivable management",
            "MIS and management reporting",
            "Ongoing finance operations support",
        ],

        icon: BriefcaseBusiness,
    },
];


export default servicesData;