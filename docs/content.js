/* Portfolio content and links. */

window.PORTFOLIO_CONTENT = {
  name: "Danny Mattar",
  initials: "DM",
  title: "Computer Engineering student building toward software, robotics, and smart systems",
  location: "Crestview, KY",
  email: "Danny.Mattar@outlook.com",
  resumeUrl: "assets/files/resume.pdf",
  avatarImages: {
    light: "assets/images/profile-light.png",
    dark: "assets/images/profile-dark.png"
  },
  portraitCredit: "PFP inspired by @Ali Sabet",

  // Change this to true whenever you want the Highlights / Awards section visible.
  showHighlights: false,

  hero: {
    eyebrow: " ",
    title: "Hi, I am Danny Mattar.",
    intro:
      "Computer Engineering @UC"
  },

  quickFacts: [
    { label: "Exploring", value: "Robotics, automation, AI" },
    { label: "Looking for", value: "Summer 2027 internship / co-op" }
  ],

  socialLinks: [
    { label: "GitHub", href: "https://github.com/danmattar-eng" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/danny-mattar" },
    { label: "Email", href: "mailto:Danny.Mattar@outlook.com" }
  ],

  about: {
    endingEmoji: {
      image: "assets/images/scuba-diver-emoji.png",
      alt: "scuba diver"
    },
    photos: [
      {
        image: "assets/images/friends-mirror.jpg",
        alt: "Danny and friends taking a mirror photo",
        position: "50% 48%",
        zoom: 1.35
      },
      {
        image: "assets/images/graduation-family.jpg",
        alt: "Danny in his graduation cap and gown with his family"
      },
      {
        image: "assets/images/findlay-market.jpg",
        alt: "Danny standing across the street from Findlay Market in Cincinnati",
        position: "37% center"
      },
      {
        image: "assets/images/scuba-diving.jpg",
        alt: "Danny scuba diving underwater with two other divers"
      }
    ],
    paragraphs: [
      "I'm Danny Mattar, a Computer Engineering undergraduate at the University of Cincinnati.",
      "I moved to the U.S. from Egypt, and that background is a big part of how I see people, work, and opportunity. It pushed me to adapt quickly, stay curious, and bring a wider perspective into the spaces I am part of.",
      "My college path started at Purdue Fort Wayne, where I earned Dean's List honors before transferring to UC. Cincinnati's co-op program is one of the main reasons I chose UC, because I want my engineering education to stay connected to real work, real teams, and real systems.",
      "Right now, I am looking for internship, co-op, work, and project opportunities where I can keep learning through practical problems. The areas that pull my attention most are AI, robotics, smart systems, automation, and technology that connects software with the physical world.",
      "Outside of engineering, you can usually find me playing volleyball, climbing, wandering through a city, or finding some excuse to be outside. If the opportunity shows up, I'll trade dry land for deep sea exploration any day."
    ]
  },

  timeline: [
    {
      type: "education",
      title: "B.S. in Computer Engineering",
      organization: "University of Cincinnati",
      period: "Expected 2030",
      location: "Cincinnati, OH",
      summary: "Studying computer engineering through UC's co-op program, with a growing focus on software, embedded systems, robotics, and automation.",
      highlights: [
        "Looking for Summer 2027 internship and co-op opportunities",
        "Building a foundation in systems, programming, and engineering fundamentals"
      ]
    },
    {
      type: "education",
      title: "Computer Engineering Coursework",
      organization: "Purdue University Fort Wayne",
      period: "First two semesters",
      location: "Fort Wayne, IN",
      summary: "Started my engineering path at Purdue Fort Wayne before transferring to UC.",
      highlights: [
        "Earned Dean's List honors",
        "Used the transfer as a reset point to aim more deliberately at co-op experience and long-term project growth"
      ]
    },
    {
      type: "education",
      title: "High School Diploma",
      organization: "Dixie Heights High School",
      period: "Graduated",
      location: "Fort Mitchell, KY",
      summary: "Built the early academic foundation that led me toward engineering, technology, and hands-on problem solving.",
      highlights: [
        "Started shaping an interest in how systems work",
        "Carried that curiosity into computer engineering"
      ]
    },
    {
      type: "experience",
      title: "Package Handler",
      organization: "FedEx",
      period: "Current",
      location: "Independence, KY / Fort Wayne, IN",
      summary: "Hands-on work in a fast moving logistics environment, where timing, repetition, communication, and physical systems all matter.",
      highlights: [
        "Built comfort working under pressure and staying reliable during demanding shifts",
        "Saw how real workflows depend on coordination, constraints, and small process details"
      ]
    },
    {
      type: "experience",
      title: "Screen Printer",
      organization: "Primal Print LLC",
      period: "Work background",
      location: "Huntertown, IN",
      summary: "Hands-on production work where setup, detail, repetition, and quality control all showed up in the final result.",
      highlights: [
        "Worked with physical tools, materials, and process steps",
        "Built a practical respect for how small setup details affect output"
      ]
    },
    {
      type: "experience",
      title: "Line Cook / Shift Lead",
      organization: "Silverlake The Family Place",
      period: "Work background",
      location: "Kenton Lands, KY",
      summary: "Helped keep a fast moving team organized during service, balancing timing, communication, and quality under pressure.",
      highlights: [
        "Coordinated people and tasks during busy shifts",
        "Learned how workflow breaks down when communication or timing slips"
      ]
    },
    {
      type: "experience",
      title: "Concession Stand Worker",
      organization: "DJC Concessions",
      period: "Work background",
      location: "Various Local Events",
      summary: "Worked in a practical, high-tempo environment where speed matters, but consistency matters more.",
      highlights: [
        "Built habits around reliability, urgency, and teamwork",
        "Carrying that hands-on mindset into engineering instead of treating technology as something separate from real work"
      ]
    }
  ],

  skills: [
    {
      category: "Software",
      items: ["JavaScript", "HTML", "CSS", "Python", "Git", "GitHub"]
    },
    {
      category: "Systems I want to build",
      items: ["Automation", "Robotics", "Embedded systems", "Smart systems", "AI assistants"]
    },
    {
      category: "Currently exploring",
      items: ["Raspberry Pi", "Arduino", "Physical computing", "Human-centered tools", "Project documentation"]
    }
  ],

  projects: [
    {
      title: "Personal Portfolio Website",
      status: "complete",
      summary:
        "A responsive personal portfolio built from the ground up to present my experience, skills, and projects with a light/dark theme and interactive gallery.",
      image: "assets/images/profile-light.png",
      tags: ["HTML", "CSS", "JavaScript"],
      links: [
        { label: "GitHub", href: "https://github.com/danmattar-eng" }
      ]
    },
    {
      title: "AI Desk Robot Assistant",
      status: "coming-soon",
      summary:
        "A future desk robot project inspired by the charm of small companion robots: expressive, useful, a little weird, and grounded in real robotics. The goal is to combine software, AI interaction, and physical personality.",
      image: "",
      tags: ["Robotics", "AI", "Raspberry Pi / Arduino"],
      links: []
    }
  ],

  highlights: [
    {
      title: "Dean's List",
      detail: "Earned Dean's List honors during my first year at Purdue Fort Wayne before transferring to UC."
    },
    {
      title: "UC Co-op Program",
      detail: "Building toward real engineering experience through Cincinnati's co-op path, with Summer 2027 as my next target."
    },
    {
      title: "Microsoft Certified",
      detail: "Earned a Microsoft certification as part of my growing technical foundation."
    },
    {
      title: "Hands-on Work Background",
      detail: "FedEx, screen printing, and operations roles gave me a practical respect for workflow, pressure, and systems that have to work outside a classroom."
    }
  ],

  contact: {
    heading: "Say hello.",
    intro: "I am looking for Summer 2027 internship and co-op opportunities, especially around software, robotics, automation, and smart systems.",
    links: [
      { label: "Email", value: "Danny.Mattar@outlook.com", href: "mailto:Danny.Mattar@outlook.com" },
      { label: "GitHub", value: "danmattar-eng", href: "https://github.com/danmattar-eng" },
      { label: "LinkedIn", value: "danny-mattar", href: "https://www.linkedin.com/in/danny-mattar" }
    ]
  }
};
