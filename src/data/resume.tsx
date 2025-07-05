import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ashutosh Kumar",
  initials: "AK",
  url: "https://ashutoshkumar.in",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/New+Delhi",
  description:
    "I build AI-powered tools & micro-SaaS for real-world use.",
  summary:
    "I'm a self-taught developer and B.Tech dropout building real solutions using AI, automation, and web technologies. I focus on creating tools for small businesses and creators, including AI Calling Agents and content automation bots. I chose to build real-world projects instead of pursuing theoretical degrees.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "JavaScript",
    "FastAPI",
    "Node.js",
    "OpenAI API",
    "Twilio",
    "Supabase",
    "Next.js",
    "Tailwind",
    "React",
    "TypeScript",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ashutosh.contactus@gmail.com",
    tel: "+91-XXXXXXXXXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/httpashu",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rahul-singh-rajvanshi-419479215/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/httpsashu",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "ashutosh.contactus@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  achievements: [
    {
      title: "Built 3+ AI tools in 60 days",
      description: "Rapidly developed and deployed AI-powered solutions for real business problems, focusing on automation and efficiency.",
      icon: "🛠️",
      date: "Dec 2023 - Jan 2024",
    },
    {
      title: "Learning React & backend systems",
      description: "Continuously expanding skills in modern web development and backend architecture to build better solutions.",
      icon: "📚",
      date: "Ongoing",
    },
    {
      title: "Posted 300+ AI & coding-related content in 1 month",
      description: "Active content creator sharing knowledge about AI tools, coding practices, and building in public.",
      icon: "📦",
      date: "Nov 2023",
    },
    {
      title: "Working on building AI SaaS for Indian MSMEs",
      description: "Focused on creating affordable, scalable solutions for small and medium businesses in India.",
      icon: "👨‍💻",
      date: "Present",
    },
  ],
  education: [
    {
      school: "B.Tech Computer Science",
      href: "#",
      degree: "Dropped Out (2021-2025)",
      logoUrl: "/university.png",
      start: "2021",
      end: "2025",
      description: "Chose to build real-world projects instead of pursuing theoretical degrees. Focused on practical learning and building solutions.",
    },
    {
      school: "100xdevs",
      href: "https://100xdevs.com/",
      degree: "Full Stack Development Cohort 3.0",
      logoUrl: "/100xdevs.jpg",
      start: "2024",
      end: "2025",
      description: "Intensive full-stack development bootcamp focusing on modern web technologies, system design, and real-world project building.",
    },
    {
      school: "Aptronsolutions",
      href: "https://aptronsolutions.com/",
      degree: "Software Engineer Intern",
      logoUrl: "/aptron.jpg",
      start: "2022",
      end: "2023",
      description: "Worked on web development projects using modern technologies, gained practical experience in software development lifecycle.",
    },
  ],
  whyDroppedOut: {
    title: "Why I Dropped Out",
    description: "I chose to build real-world projects instead of pursuing theoretical degrees. The traditional education system wasn't teaching me the skills I needed to solve real problems. I wanted to learn by doing, building actual solutions that people use.",
    achievements: [
      "Built 3+ AI tools in 60 days",
      "Completed 100xdevs Full Stack Development Cohort",
      "Posted 300+ AI & coding-related content",
      "Working on AI SaaS for Indian MSMEs",
      "Participated in Buildspace AI & Web3 programs",
    ],
  },
  projects: [
    {
      title: "AI Calling Agent",
      href: "#",
      dates: "Dec 2023 - Present",
      active: true,
      description:
        "Autonomous calling bot for appointment reminders and client follow-ups using Twilio + OpenAI. Designed for MSMEs to automate customer communication and reduce manual calling overhead.",
      technologies: [
        "Python",
        "FastAPI",
        "OpenAI API",
        "Twilio",
        "PostgreSQL",
        "Docker",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/ashutoshkumar/ai-calling-agent",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Social Media Post Agent",
      href: "#",
      dates: "Nov 2023 - Present",
      active: true,
      description:
        "Automated post creator and publisher for Twitter/LinkedIn using Node.js + OpenAI. Created for startup founders and creators to maintain consistent social media presence.",
      technologies: [
        "Node.js",
        "OpenAI API",
        "Twitter API",
        "LinkedIn API",
        "Supabase",
        "Tailwind",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/ashutoshkumar/social-post-agent",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Screenshots",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "SaaS Tools for MSMEs",
      href: "#",
      dates: "Oct 2023 - Present",
      active: true,
      description:
        "One-click deployable templates (Next.js + Supabase) to automate business workflows and communication. Focused on Indian MSMEs with ready-to-use templates.",
      technologies: [
        "Next.js",
        "Supabase",
        "TypeScript",
        "Tailwind",
        "Stripe",
        "Vercel",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/ashutoshkumar/msme-templates",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Templates",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Docs",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

} as const;
