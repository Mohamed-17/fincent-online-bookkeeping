import {
  BookOpen,
  BookText,
  Calculator,
  Calendar,
  Calendar1,
  CircleArrowLeft,
  CircleArrowRight,
  CircleQuestionMark,
  Clock,
  CreditCard,
  Eye,
  File,
  FileArchive,
  FileBox,
  NotebookPen,
  Podcast,
  Sparkles,
  Users,
} from "lucide-react";
export const MENU_CONTENT = {
  platform: {
    title: "Features",
    columns: [
      [
        {
          name: "Headsup",
          desc: "A visual snapshot of your financial health",
          icon: Eye,
        },
        {
          name: "Get Paid",
          desc: "Track what you're owed and accept payments",
          icon: CircleArrowLeft,
        },
        {
          name: "Directory",
          desc: "Your list of customers, subscriptions, and vendors",
          icon: Users,
        },
        {
          name: "Files",
          desc: "Your digital shoebox in the cloud",
          icon: File,
        },
      ],
      [
        {
          name: "Timeline",
          desc: "Track earnings, expenses, and profits",
          icon: Clock,
        },
        {
          name: "Pay",
          desc: "Add a bill, pay a vendor, or clear your dues",
          icon: CircleArrowRight,
        },
        {
          name: "Financial",
          desc: "A comprehensive view of your financial reports",
          icon: CreditCard,
        },
        {
          name: "Fincent Intelligence",
          desc: "Experience money in a whole new way",
          icon: Sparkles,
        },
      ],
    ],
  },
  resources: {
    title: "Resources",
    columns: [
      [
        {
          name: "Fincent Blog",
          desc: "A visual snapshot of your financial health",
          icon: NotebookPen,
        },
        {
          name: "Glossary",
          desc: "Decoding financial jargon.",
          icon: BookOpen,
        },
        {
          name: "IRS Forms",
          desc: "Navigating tax documentation",
          icon: BookText,
        },
        {
          name: "How-to-guides",
          desc: "Your financial DIY handbook.",
          icon: CircleQuestionMark,
        },
      ],
      [
        { section: "Tools & Calculators" },
        {
          name: "1099 Tax Calculator",
          desc: "Streamline your contractor taxes effortlessly.",
          icon: NotebookPen,
        },
        {
          name: "Net Sales Calculator",
          desc: "Navigate revenue metrics seamlessly.",
          icon: BookOpen,
        },
        {
          name: "Good Growth Rate Calculator",
          desc: "Measure your business's expansion with precision.",
          icon: CircleQuestionMark,
        },
        {
          name: "SBA PPP Loan Calculator",
          desc: "Guiding your path through loan solutions.",
          icon: BookText,
        },
      ],
    ],
  },
  case: {
    title: "Customer Stories",
    columns: [
      [
        {
          name: "Aura Finance",
          desc: "Empowering Success Through Financial Synergy.",
        },
        {
          name: "Burrst",
          desc: "Transforming Insights, Fueling Burrst's Evolution.",
        },
        {
          name: "Smarter Swipe",
          desc: "Simplifying finances for smoother transactions.",
        },
        {
          name: "Black Nymph Art",
          desc: "Streamlined bookkeeping for creative professionals.",
        },
        {
          name: "Unified IT",
          desc: "Efficient accounting for IT excellence.",
        },
        {
          name: "Dyno Creative",
          desc: "Simplified bookkeeping for better financial management",
        },
      ],
      [
        {
          name: "Physio Care",
          desc: "Managing financials for healthcare success.",
        },
        {
          name: "Sequence Partner",
          desc: "Accurate bookkeeping for business growth.",
        },
        {
          name: "Tango",
          desc: "Bookkeeping precision for seamless operations.",
        },
        {
          name: "Blue Earth Healing",
          desc: "Organized accounting for holistic healing.",
        },
        {
          name: "Metropolis Tours",
          desc: "Explore Metropolis Tours' Journey with Fincent",
        },
      ],
    ],
  },
  services: {
    title: "",
    columns: [
      [
        {
          name: "Catch Up Bookkeeping",
          desc: "Get back on track: Simple bookkeeping catchup.",
          icon: Calculator,
        },
        {
          name: "Tax Prep & Filing",
          desc: "Turn tax hassles into tax wins",
          icon: FileArchive,
        },
        {
          name: "Small Business Bookkeeping",
          desc: "Streamline your books, stress-free every day",
          icon: Calendar,
        },
      ],
      [
        {
          name: "Monthly Bookkeeping",
          desc: "Keep your finances flawless, every month",
          icon: Calendar1,
        },
        {
          name: "AP / AR Assistance",
          desc: "Streamline your cash flow with expert support",
          icon: Podcast,
        },
        {
          name: "Fractional CFO Services",
          desc: "See your financial picture clearly",
          icon: FileBox,
        },
      ],
    ],
  },
};
