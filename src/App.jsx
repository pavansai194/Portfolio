export default function Portfolio() {
  const achievements = [
    "Salesforce AI Associate Certified",
    "Full Stack Development Intern",
    "Generative AI Developer",
    "2026 Computer Science Graduate",
  ];

  const skills = [
    "Java",
    "JavaScript",
    "SQL",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Flask",
    "REST APIs",
    "Generative AI",
    "Prompt Engineering",
    "Git & GitHub",
  ];

  const projects = [
    {
      title: "Online Bike Information Portal",
      description:
        "Developed a full-stack web application to browse and compare bike specifications including mileage, engine, price, and features. Built using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL.",
    },
    {
      title: "AI-Powered JAM Topic Evaluator",
      description:
        "Created a speech evaluation platform using Flask, MySQL, and OpenAI Whisper that analyzes fluency, grammar, and filler words to generate real-time performance scores.",
    },
    {
      title: "Generative AI Applications",
      description:
        "Worked on AI-driven content generation applications during internship experience by improving prompt engineering and enhancing model response quality.",
    },
  ];

  const experience = [
    {
      role: "Software Developer Intern",
      company: "Indian Servers, Vijayawada",
      duration: "May 2025 – July 2025",
      points: [
        "Developed and integrated Generative AI models for automated content generation tasks.",
        "Enhanced prompt engineering techniques to improve AI response quality and accuracy.",
      ],
    },
    {
      role: "Full Stack Intern",
      company: "Biztron Softech, Vijayawada",
      duration: "June 2024 – July 2024",
      points: [
        "Built responsive web applications using React.js, Node.js, and Express.js.",
        "Integrated REST APIs and optimized MySQL & MongoDB databases.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(0,150,255,0.15),transparent_35%)]"></div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-cyan-500/20 px-8 md:px-16 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide text-cyan-400">
          Pavan Sai
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-8 md:px-20 py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-16 min-h-[90vh]">
        <div className="max-w-3xl z-10">
          <p className="uppercase tracking-[5px] text-cyan-400 mb-5 text-sm">
            Full Stack Developer & Generative AI Enthusiast
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Hi, I'm <span className="text-cyan-400">Pavan Sai</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl leading-9 mb-8">
            Motivated Computer Science undergraduate (2026 batch) with
            internship experience in Full Stack Development and Generative AI.
            Passionate about building scalable web applications and intelligent
            AI-powered solutions.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-full text-sm backdrop-blur-lg"
              >
                ✨ {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              href="#projects"
              className="bg-cyan-400 hover:bg-cyan-300 text-black px-7 py-4 rounded-2xl font-bold transition shadow-2xl"
            >
              View Projects
            </a>

            <a
              href="https://github.com/pavansai194"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-7 py-4 rounded-2xl font-bold transition"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl"></div>

          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-cyan-400 overflow-hidden shadow-[0_0_60px_rgba(0,255,255,0.4)] relative">
            <img
              src="profile.jpg"
              
              alt="Pavan Sai"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative px-8 md:px-20 py-20 z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-10 md:p-14 shadow-2xl">
          <h2 className="text-4xl font-bold text-cyan-400 mb-8">About Me</h2>

          <p className="text-slate-300 leading-9 text-lg">
            I am a Computer Science Engineering student at Lakireddy Balireddy
            College of Engineering with a CGPA of 7.90. I specialize in MERN
            stack development, REST API integration, and AI-powered web
            applications. I enjoy solving real-world problems using technology
            and continuously learning modern development tools and frameworks.
          </p>
        </div>
      </section>

      {/* Skills */}
      {/* Stats Section */}
      <section className="relative px-8 md:px-20 py-10 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "2+", label: "Internships" },
            { number: "3+", label: "Projects Built" },
            { number: "10+", label: "Technologies" },
            { number: "2026", label: "Graduation Year" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-lg hover:border-cyan-400 transition"
            >
              <h3 className="text-4xl font-black text-cyan-400 mb-3">
                {item.number}
              </h3>
              <p className="text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="relative px-8 md:px-20 py-20 z-10">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">Technical Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:border-cyan-400 hover:scale-105 transition duration-300 shadow-lg"
            >
              <p className="font-semibold text-lg">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative px-8 md:px-20 py-20 z-10">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">Experience</h2>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{item.role}</h3>
                  <p className="text-cyan-400 text-lg">{item.company}</p>
                </div>

                <p className="text-slate-400 mt-2 md:mt-0">{item.duration}</p>
              </div>

              <ul className="space-y-3 text-slate-300 list-disc ml-6 leading-8">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative px-8 md:px-20 py-20 z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          <h2 className="text-4xl font-bold text-cyan-400">Projects</h2>

          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-300 text-sm">
              Full Stack
            </span>
            <span className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-300 text-sm">
              AI Projects
            </span>
            <span className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-300 text-sm">
              REST APIs
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:translate-y-[-8px] hover:border-cyan-400 transition duration-300 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-5">{project.title}</h3>

              <p className="text-slate-300 leading-8 mb-6">
                {project.description}
              </p>

              <div className="flex items-center justify-between mt-6">
                <button className="bg-cyan-400 text-black px-5 py-3 rounded-xl font-bold hover:bg-cyan-300 transition">
                  Explore Project
                </button>

                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-cyan-300 animate-pulse delay-100"></div>
                  <div className="w-3 h-3 rounded-full bg-cyan-200 animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="relative px-8 md:px-20 py-20 z-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Education</h2>

            <div className="space-y-6 text-slate-300 leading-8">
              <div>
                <h3 className="font-bold text-xl text-white">
                  B.Tech in Computer Science & Engineering
                </h3>
                <p>Lakireddy Balireddy College of Engineering</p>
                <p>CGPA: 7.90 | 2022 – 2026</p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-white">Intermediate (Class 12)</h3>
                <p>VRS and YRN College, Chirala</p>
                <p>79% | 2020 – 2022</p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-white">SSC (Class 10)</h3>
                <p>Sai Baba Central School, Ongole</p>
                <p>83.5% | 2019 – 2020</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              Certifications
            </h2>

            <ul className="space-y-4 text-slate-300 leading-8 list-disc ml-6">
              <li>Salesforce AI Associate — Nov 2024</li>
              <li>Machine Learning with Python — edX</li>
              <li>Introduction to Generative AI — edX</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative px-8 md:px-20 py-20 z-10">
        <div className="bg-cyan-400 text-black rounded-[35px] p-10 md:p-14 shadow-[0_0_80px_rgba(0,255,255,0.3)]">
          <h2 className="text-4xl font-black mb-6">Let's Connect</h2>

          <p className="text-lg leading-8 mb-8 max-w-3xl">
            I am currently looking for internship and full-time opportunities in
            Full Stack Development, Software Engineering, and AI-based roles.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-lg font-semibold">
            <div>
              <p>Email</p>
              <p className="font-normal break-all">
                pavansaiyadav194@gmail.com
              </p>
            </div>

            <div>
              <p>Phone</p>
              <p className="font-normal">6305888969</p>
            </div>

            <div>
              <p>Location</p>
              <p className="font-normal">Ongole, Andhra Pradesh</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="https://www.linkedin.com/in/pavansai-busi-8932242ba"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-2xl hover:scale-105 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/pavansai194"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-2xl hover:scale-105 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Floating Background Elements */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

      <footer className="relative text-center py-8 text-slate-500 border-t border-white/10 z-10">
        © 2026 Pavan Sai | Full Stack Developer & AI Enthusiast
      </footer>
    </div>
  );
}
