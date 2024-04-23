import {
  ThumbsUp,
  ShieldCheck,
  ScanSearch,
  LineChart,
  Bot,
  BrainCircuit,
  MonitorCheck,
  Wifi,
  Router,
} from "lucide-react";
export const navlink = [
  {
    key: 0,
    text: "Home",
    pathname: "/",
  },
  {
    key: 1,
    text: "Products",
    pathname: "/",
  },
  {
    key: 2,
    text: "Promo",
    pathname: "/",
  },
  {
    key: 3,
    text: "Check Area",
    pathname: "/",
  },
  {
    key: 4,
    text: "Contact Us",
    pathname: "/",
  },
];

interface featureProps {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
  pathname: string;
}
export const advantage = [
  { id: 0, title: "AI-Powered Solution", icon: <MonitorCheck /> },
  { id: 1, title: "Wireless Home Network", icon: <Router /> },
  { id: 2, title: "Stable Internet Connection", icon: <Wifi /> },
  { id: 3, title: "High Definition TV Channels", icon: <MonitorCheck /> },
];
export const feature: featureProps[] = [
  {
    id: 0,
    title: "Personalized Recommendations",
    description:
      "AI algorithms can analyze user behavior and preferences to provide tailored recommendations for content, products, and services, enhancing the overall user experience.",
    icon: <ThumbsUp />,
    color: "bg-purple-500",
    pathname: "/",
  },
  {
    id: 1,
    title: "Enhanced Security",
    description:
      "AI-powered security measures can detect and prevent various online threats, such as malware, phishing attacks, and identity theft, offering users a safer browsing environment.",
    icon: <ShieldCheck />,
    color: "bg-teal-500",
    pathname: "/",
  },
  {
    id: 2,
    title: "Improved Search Results",
    description:
      "AI algorithms can understand user intent better and deliver more relevant search results, saving users time and effort in finding the information they need.",
    icon: <ScanSearch />,
    color: "bg-pink-500",
    pathname: "/",
  },
  {
    id: 3,
    title: "Predictive Analytics",
    description:
      "AI can analyze vast amounts of data to predict trends and patterns, helping users make informed decisions about their online activities, such as investments, purchasing decisions, and content creation strategies.",
    icon: <LineChart />,
    color: "bg-rose-500",
    pathname: "/",
  },
  {
    id: 4,
    title: "Automation and Efficiency",
    description:
      "AI-driven automation can streamline repetitive tasks, such as email filtering, content moderation, and customer support, freeing up users' time and increasing productivity.",
    icon: <Bot />,
    color: "bg-green-500",
    pathname: "/",
  },
  {
    id: 5,
    title: "Seamless Integration",
    description:
      "AI-powered internet services can seamlessly integrate with other smart devices and platforms, offering users a cohesive and interconnected digital experience across various devices and applications.",
    icon: <BrainCircuit />,
    color: "bg-indigo-500",
    pathname: "/",
  },
];

export const footer = [
  {
    id: 0,
    title: "Quick Links",
    link: [
      {
        id: 0,
        text: "Home Internet",
        pathname: "/",
      },
      {
        id: 1,
        text: "Apartment Internet",
        pathname: "/",
      },
      {
        id: 2,
        text: "Business Internet",
        pathname: "/",
      },
      {
        id: 3,
        text: "Coverage",
        pathname: "/",
      },
      {
        id: 4,
        text: "Subscribe",
        pathname: "/",
      },
    ],
  },
  {
    id: 1,
    title: "Our Products",
    link: [
      {
        id: 0,
        text: "Internet Fiber",
        pathname: "/",
      },
      {
        id: 1,
        text: "Internet + TV",
        pathname: "/",
      },
      {
        id: 2,
        text: "Phone",
        pathname: "/",
      },
      {
        id: 3,
        text: "berrynet TV",
        pathname: "/",
      },
      {
        id: 4,
        text: "berrynet Shop",
        pathname: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Help & Support",
    link: [
      {
        id: 0,
        text: "Help Center",
        pathname: "/",
      },
      {
        id: 1,
        text: "Contact Us",
        pathname: "/",
      },
      {
        id: 2,
        text: "Costumer Service",
        pathname: "/",
      },
      {
        id: 3,
        text: "FAQ",
        pathname: "/",
      },
      {
        id: 4,
        text: "Payment Method",
        pathname: "/",
      },
      {
        id: 5,
        text: "Privacy Policy",
        pathname: "/",
      },
      {
        id: 6,
        text: "Security",
        pathname: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Our Company",
    link: [
      {
        id: 0,
        text: "About berrynet",
        pathname: "/",
      },
      {
        id: 1,
        text: "Career",
        pathname: "/",
      },
      {
        id: 2,
        text: "Media",
        pathname: "/",
      },
      {
        id: 3,
        text: "berrynet TV",
        pathname: "/",
      },
    ],
  },
];
// home internet
export const berryinternet = [
  {
    id: 0,
    packageName: "Berry 30",
    bandwith: "30 Mbps",
    fitur: [
      "Internet UNLIMITED",
      "Ideal untuk 1 - 3 Device",
      "Gratis Instalasi",
    ],
    normalprice: "150.000",
    discountprice: "100.000",
    badge: Boolean,
  },
  {
    id: 0,
    packageName: "Berry 50",
    bandwith: "50 Mbps",
    fitur: [
      "Internet UNLIMITED",
      "Ideal untuk 1 - 3 Device",
      "Gratis Instalasi",
    ],
    normalprice: "150.000",
    discountprice: "100.000",
    badge: Boolean,
  },
  {
    id: 0,
    packageName: "Berry 100",
    bandwith: "100 Mbps",
    fitur: [
      "Internet UNLIMITED",
      "Ideal untuk 1 - 3 Device",
      "Gratis Instalasi",
    ],
    normalprice: "150.000",
    discountprice: "100.000",
    badge: Boolean,
  },
  {
    id: 0,
    packageName: "Berry 150",
    bandwith: "150 Mbps",
    fitur: [
      "Internet UNLIMITED",
      "Ideal untuk 1 - 3 Device",
      "Gratis Instalasi",
    ],
    normalprice: "150.000",
    discountprice: "100.000",
    badge: Boolean,
  },
];
// internet + TV
export const berrycombo = [
  {
    id: 0,
    packageName: "Berry 30 Combo",
    bandwith: "30 Mbps",
    fitur: [
      "Internet UNLIMITED",
      "Ideal untuk 1 - 3 Device",
      "Gratis Instalasi",
    ],
    normalprice: "200.000",
    discountprice: "150.000",
    badge: Boolean,
    totalchannel: "75",
  },
];
// Internet + TV + Phone

export const berrybigcombo = [
  {
    id: 0,
    packageName: "Berry 30 Combo",
    bandwith: "30 Mbps",
    fitur: [
      "Internet UNLIMITED",
      "Ideal untuk 1 - 3 Device",
      "Gratis Instalasi",
    ],
    normalprice: "250.000",
    discountprice: "200.000",
    badge: Boolean,
    totalchannel: "75",
  },
];
