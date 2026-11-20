// =====================================================================
//  EDIT ONLY THIS FILE — all text, links, skills, projects etc. live here
//  Images: put them in /public/images and refer to them as "/images/xxx.jpg"
//  Leave an image as "" to show a neat placeholder instead.
// =====================================================================

export const profile = {
  logo: "Sanika.W", // top-left logo text
  name: "Sanika Wani",
  role: "Full stack developer", // blue subtitle under the name
  tagline:
    "Full Stack Developer | CS Student | Problem Solver | Building High-Performance Web Apps",
  resumeUrl: "/images/resume.pdf", // put your resume.pdf inside /public
  photo: "/images/sanika.jpg", // e.g. "/images/me.jpg"
};

export const about = {
  title: "About Me",
  points: [
    {
      icon: "👋",
      text: "Hi, I'm Sanika Wani — a Computer Engineering Student and passionate builder of intelligent systems.",
    },
    {
      icon: "🎓",
      text: "Completed 12th at Shrinath Vidyalay Malshiras, City with 84.83%. Now a B.Tech CSE student focused on software development and problem-solving.",
    },
    {
      icon: "💡",
      text: "Innovator | Builder | Problem Solver — I aspire to build scalable and user-friendly applications using modern technologies.",
    },
    {
      icon: "🤝",
      text: "Communicator | Leader | Catalyst — Through hackathons and collaborative projects, I've developed strong communication and leadership skills.",
    },
    {
      icon: "🚀",
      text: "Tech Enthusiast & Continuous Learner — I actively improve Full Stack Development (MERN), DSA, and emerging technologies.",
    },
    {
      icon: "🎯",
      text: "My goal is to become a skilled software engineer and build solutions that create meaningful impact.",
    },
  ],
};

// ---------- SKILLS ----------
// Each category appears as a tab on the left, items as chips on the right.
export const skillCategories = [
  {
    id: "programming",
    label: "Programming & Dev",
    icon: "</>",
    items: [
      { name: "Java & Core", icon: "☕" },
      { name: "Python", icon: "🐍" },
      { name: "HTML5, CSS3", icon: "🌐" },
      { name: "JavaScript (ES6+)", icon: "JS" },
      { name: "SQL, MySQL", icon: "🗄️" },
      { name: "Data Structures", icon: "🔥" },
      { name: "Competitive Coding", icon: "🏆" },
      { name: "Version Control", icon: "🔀" },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks & Tools",
    icon: "⚡",
    items: [
      { name: "React.js", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚂" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Postman", icon: "📮" },
    ],
  },
  {
    id: "core",
    label: "Core Technologies",
    icon: "⚙️",
    items: [
      { name: "OOP", icon: "🧩" },
      { name: "DBMS", icon: "💾" },
      { name: "Operating Systems", icon: "🖥️" },
      { name: "Computer Networks", icon: "📡" },
    ],
  },
  {
    id: "professional",
    label: "Professional Skills",
    icon: "🧠",
    items: [
      { name: "Problem Solving", icon: "🧮" },
      { name: "Teamwork", icon: "🤝" },
      { name: "Communication", icon: "💬" },
      { name: "Leadership", icon: "🧭" },
    ],
  },
];

// Circular progress rings (percent 0-100)
export const skillRings = [
  { name: "React", level: 90, icon: "⚛️" },
  { name: "Node.js", level: 85, icon: "🟢" },
  { name: "MongoDB", level: 80, icon: "🍃" },
  { name: "Java", level: 80, icon: "☕" },
  { name: "Git", level: 85, icon: "🔀" },
];

// ---------- PROJECTS ----------
export const projects = [
  {
    title: "Project One",
    description:
      "Developed a full-stack AI-powered website builder with user authentication, project management, and website creation and publishing features.",
    image: "/images/website.png", // "/images/project1.png"
    tags: ["React.js", "TypeScript", "Node.js", "Express.js", "Firebase", "Stripe"],
    github: "https://github.com/your-username/project-one",
    demo: "https://example.com",
  },
  {
    title: "Project Two",
    description:
      " Integrated Gemini API for an AI-powered smart search engine, implemented secure user login with Google OAuth2.0, and embedded Razorpay Payment Gateway for seamless course monetization.",
    image: "/images/LMS.jpeg",
    tags: ["React.Js", "Tailwind CSS", "Redux Toolkit", "Node.Js", "Express.Js", "MongoDB", "Razorpay"],
    github: "https://github.com/your-username/project-two",
    demo: "https://example.com",
  },
  {
    title: "Project Three",
    description:
      "Built a complete Airbnb clone backend supporting multi-user authentication, property listings, and automated dynamic review systems using the Model-View-Controller (MVC) architecture.",
    image: "/images/wonderlust.jpg",
    tags: ["Node.Js", "Express.Js", "MongoDB", "Mongoose", "Cloudinary"],
    github: "https://github.com/your-username/project-three",
    demo: "https://example.com",
  },
];

// ---------- EDUCATION (timeline) ----------
export const education = [
  {
    institute: "SVERI College of Engineering, Pandharpur",
    period: "Aug 2024 - Present",
    degree: "B.Tech in Computer Science and Engineering",
    grade: "CGPA: 9.88/10.00",
    skills: "Data Structures, Problem Solving, Critical Thinking",
    logo: "🏛️",
  },
  {
    institute: "Shrinath Vidyalay & JR college, Malshiras ",
    period: "2022 - 2024",
    degree: "Higher Secondary School: HSC (XII) in Science",
    grade: "Grade: 84.83%",
    skills: "Involved in various extracurricular activities and competitions",
    logo: "🏫",
  },
  {
    institute: "Gopalrao Dev Prashala, Malshiras",
    period: "March 2021 - June 2022",
    degree: "B.Tech in Computer Science and Engineering",
    grade: "Grade: 85.20%",
    skills: "Critical Thinking, Time Management, TeamWork",
    logo: "🏫",
  },
];

// ---------- CERTIFICATIONS ----------
export const certifications = [
  
    {
    title: "Soft Skill Development",
    issuer: "NPTL",
    date: "JUL-SEP",
    image: "/images/NPTL.jpeg",
    link: "NPTL",
    badge: "PARTICIPANT",
  },
  
  {
    title: "Hackathon",
    issuer: "SVERI College of Engineering(POLYTECHNIC), Pandharpur",
    date: "20-21 FEB 2026",
    image: "/images/Hackathon.jpeg",
    link: "Hackathon",
    badge: "PARTICIPANT",
  },
  {
    title: "Hackathon",
    issuer: "SVERI College of Engineering, Pandharpur",
    date: "9-10-11 MAR 2026",
    image: "/images/Hackathon2.jpeg",
    link: "Hackathon",
    badge: "PARTICIPANT",
  },
];

// ---------- CONTACT ----------
export const contact = {
  heading1: "Let's Build Something",
  heading2: "Extraordinary.",
  subtitle: "Have a project or role in mind? Send a message.",
  email: "sanikawani2007@gmail.com", // the form opens this mailbox
  linkedin: { label: "Sanika Wani", url: "https://www.linkedin.com/in/sanika-wani-328189327 —" },
  github: { label: "sanikawani2007", url: "https://github.com/sanikawani2007-wq—" },
  location: "City, Country",
  timeZone: "Asia/Kolkata", // used for the live "local time" card
  inquiryTypes: ["Project Inquiry", "Full-Time Role", "Collaboration", "Quick Hello"],
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
