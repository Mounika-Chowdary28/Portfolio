"use client"

import { useState, useEffect } from "react"
import Button from "../components/ui/Button"
import { Card, CardContent } from "../components/ui/Card"
import Badge from "../components/ui/Badge"
import profileImg from '../assets/Profile.jpeg';
import emailjs from "emailjs-com";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  ArrowDown,
  Code,
  Palette,
  Zap,
  Users,
  Calendar,
  MapPin,
  Phone,
  Send,
} from "../components/icons/Icons"

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  const skills = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "CSS", "BootStrap"],
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MySQL", "MongoDB", "PHP"],
      color: "from-green-400 to-emerald-400",
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VSCode", "IntelliJ"],
      color: "from-purple-400 to-pink-400",
    },
    {
      title: "Languages",
      skills: ["C", "C++", "Python", "JavaScript", "HTML"],
      color: "from-amber-400 to-orange-400",
    },
  ]

 const projects = [
  {
    title: "Placement Portal",
    description:
      "A full-stack portal built to streamline campus placements for over 500 students and 100+ companies. Features real-time application tracking, CGPA-based eligibility checks, and resume uploads, improving coordination by 30%. [Test Details for Portal: Registration Number: AP23110011340 PassWord: 05-03-2001]",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLgrXYyF-J7ZA-gABudMyhVBM23d9nCxlaDw&s",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Real-time application tracking",
      "CGPA validation system",
      "Resume upload functionality",
      "Admin dashboard for companies",
      "Student performance analytics"
    ],
    demo: "https://placementportal.42web.io/?i=1",  // Replace with actual URL
    code: "https://github.com/Mounika-Chowdary28/Placement_Portal"
  },
  {
    title: "BookStore Management",
    description:
      "A web-based system for managing book inventory, customer orders, and sales insights. Optimizes bookstore operations through automated stock updates and a user-friendly order summary interface.",
    image: "https://static.vecteezy.com/system/resources/previews/015/411/157/non_2x/a-bookstore-with-a-sign-over-the-entrance-books-in-the-shop-window-on-the-shelves-street-store-illustration-flat-style-vector.jpg",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "Book inventory management",
      "Order tracking dashboard",
      "Sales reporting and analytics",
      "Customer and cart management",
      "Dynamic product listings"
    ],
    demo: "https://bookstoremanagement.42web.io",  // Replace with actual URL
    code: "https://github.com/Mounika-Chowdary28/Bookstore"
  },
  {
    title: "Movie Analyzer",
    description:
      "A data analysis tool developed in Python that visualizes and explores trends in box office performance, ratings, and movie metrics using advanced statistical techniques.",
    image: "https://www.shutterstock.com/image-photo/retro-film-production-accessories-still-260nw-437672824.jpg",
    tags: ["Python", "Matplotlib", "Pandas", "NumPy", "Seaborn"],
    features: [
      "Box office performance charts",
      "Rating correlation heatmaps",
      "Genre and trend visualizations",
      "Performance metric analysis",
      "Basic predictive modeling"
    ],
    demo: "https://github.com/Mounika-Chowdary28/python_project",  // GitHub as demo for Python
    code: "https://github.com/Mounika-Chowdary28/python_project"
  },
  {
    title: "Movies Watch Platform",
    description:
      "A React-based movie streaming discovery platform where users can browse the latest releases, view details, and curate a personalized watchlist with a smooth and responsive UI.",
    image: "https://user-images.githubusercontent.com/106135144/196727097-50c0ae49-b92f-4aa9-bdcb-30d978a44125.png",
    tags: ["React", "Tailwind CSS", "JavaScript", "API Integration"],
    features: [
      "Latest movie discovery and previews",
      "Custom watchlist functionality",
      "Ratings and review display",
      "Search and genre-based filtering",
      "Mobile-friendly responsive design"
    ],
    demo: "https://github.com/Mounika-Chowdary28/Movies-Watchlist",  // Replace with actual URL
    code: "https://github.com/Mounika-Chowdary28/Movies-Watchlist"
  }
];


  const experiences = [
    {
      title: "Full Stack Web Developer Intern",
      company: "Edubot Technologies",
      location: "Remote",
      period: "Jun 2025 - Jul 2025",
      description:
        "Working on end-to-end development of web applications using the MERN stack. Responsible for building scalable backend APIs, integrating them with dynamic frontend interfaces, and ensuring optimal performance across devices.",
      achievements: [
        "Developed and deployed 5+ full-stack web applications using the MERN stack",
        "Designed RESTful APIs and implemented secure authentication with JWT",
        "Improved application performance and reduced API response time by 30%",
        "Collaborated in Agile sprints to implement new features and fix bugs",
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "JWT", "Git", "GitHub"],
    },
  ];


  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code by following modern best practices.",
    },
    {
      icon: Palette,
      title: "Full-Stack Development",
      description: "Creating robust and responsive web applications using modern frontend and backend technologies.",
    },
    {
      icon: Zap,
      title: "Problem Solver",
      description: "Tackling complex challenges with logical thinking and a structured problem-solving approach.",
    },
    {
      icon: Users,
      title: "Passionate Learner",
      description: "Always exploring new technologies, tools, and frameworks to enhance development skills.",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800" : "bg-transparent"}`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              S Mounika Chowdary
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 hover:text-amber-400 transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <a href="#contact">
  <Button>Hire Me</Button>
</a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors">
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="mt-4">Hire Me</Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-amber-400/10 text-amber-400 rounded-full text-sm font-medium border border-amber-400/20">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                S Mounika Chowdary
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">
              Full Stack Developer
            </h2>

            <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
              Skilled full-stack developer with expertise in the MERN stack and a strong foundation in Data Structures and Algorithms. Passionate about building responsive web applications and solving complex problems through clean, efficient code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact">
              <Button size="lg">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              </a>
              <Button variant="outline" size="lg" onClick={() => window.open("https://drive.google.com/file/d/1mTKsPsqEihXZ1bLwyEd0F0bbiDEIezoe/view?usp=sharing", "_blank")}>
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </Button>
            </div>

            <div className="flex items-center gap-8 text-slate-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm">Projects</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm">Efficiency</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative w-80 h-82 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-2xl opacity-20"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
                <img
                  src={profileImg}
                  alt="S Mounika Chowdary"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-slate-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-amber-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              I'm a passionate developer who loves turning complex problems into simple, beautiful solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">My Story</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm a Computer Science and Engineering student passionate about full-stack development. What started as a curiosity about how websites work has grown into a strong drive to build impactful web applications that solve real-world problems.
                </p>
                <p>
                  Over time, I’ve gained hands-on experience in both frontend and backend technologies, working on projects like placement portals and management systems that streamline complex workflows. I enjoy turning ideas into fully functional, user-friendly solutions.
                </p>
                <p>
                  Beyond coding, I love exploring new frameworks, diving into open-source contributions, and engaging in collaborative learning with fellow developers. I'm always eager to grow, innovate, and make a difference through technology.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-slate-950" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-amber-400">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern web applications and digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <span className="text-slate-950 font-bold text-lg">{category.title[0]}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-amber-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise across different technologies and domains.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="lg:grid lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="aspect-video lg:aspect-auto bg-slate-700 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Project Content */}
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <ul className="list-disc list-inside text-slate-400 space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="text-sm">{feature}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
  <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline">
      <ExternalLink className="mr-2 h-4 w-4" />
      Live Demo
    </Button>
  </a>
  <a
    href={project.code}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="ghost">
      <Github className="mr-2 h-4 w-4" />
      Code
    </Button>
  </a>
</div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work <span className="text-amber-400">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              My professional journey and the impact I've made at various organizations.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-amber-400 font-semibold mb-2">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end text-slate-400 text-sm">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-slate-400 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-amber-400">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Ready to start your next project? Let's collaborate and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
              <div className="space-y-6 mb-8">
                {[
                  { icon: Mail, title: "Email", value: "mounikachowdarys2807@gmail.com" },
                  { icon: Phone, title: "Phone", value: "+91 8897905167" },
                  { icon: MapPin, title: "Location", value: "India" },
                ].map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-slate-950" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{info.title}</h4>
                          <p className="text-slate-400">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-2">Available for Opportunities</h4>
                <p className="text-slate-400 text-sm">
                  I'm currently available for internships and full-time opportunities. Let's discuss how we can
                  work together!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
  e.preventDefault();

  const form = e.target;

  // 1. Send to yourself
  emailjs.sendForm(
    "service_10sftrs",
    "template_51hsx0z",  // Your template for YOU
    form,
    "ApEU8Wx5pbfTLd5Jt"
  ).then(() => {
    console.log("Message sent successfully and confirmation sent to user!");
  }).catch((err) => {
    console.error("Error sending to user:", err);
  });

  // 2. Send confirmation to user
  emailjs.sendForm(
    "service_10sftrs",
    "template_chs4ffz",  // Your auto-reply template for user
    form,
    "ApEU8Wx5pbfTLd5Jt"
  ).then(() => {
    alert("Sent to owner ✅");
  }).catch((err) => {
    console.error("Error sending to owner:", err);
  });

  form.reset();
}}
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">First Name</label>
                        <input
                          type="text"
                          name="first_name"
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
                          placeholder="S Mounika"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">Last Name</label>
                        <input
                          type="text"
                          name="last_name"
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
                          placeholder="Chowdary"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
                        placeholder="mounikachowdarys2807@gmail.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
                        placeholder="Project Discussion"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">Message</label>
                      <textarea
                        name="message"
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                        placeholder="Tell me about your project..."
                        required
                      ></textarea>
                    </div>

                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">
                S Mounika Chowdary
              </div>
              <p className="text-slate-400">Full Stack Developer</p>
            </div>

            <div className="flex gap-4">
  {[
    { icon: Github, href: "https://github.com/Mounika-Chowdary28" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/s-mounika-chowdary/" },
    { icon: Mail, href: "#contact" },
  ].map((social, index) => (
    <a
      key={index}
      href={social.href}
      target={social.href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      <Button variant="outline" size="icon">
        <social.icon className="h-5 w-5" />
      </Button>
    </a>
  ))}
</div>

          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 S Mounika Chowdary. Built with React and Tailwind CSS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
