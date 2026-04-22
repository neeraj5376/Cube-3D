import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiC
} from "react-icons/si";

function App() {

  /* ================= SKILLS ================= */

 const skills = [
  {
    title: "React.js",
    icon: <FaReact size={40} />,
    color: "from-blue-500 to-cyan-500",
    desc: "Building modern responsive UI using components",
  },

  {
    title: "JavaScript",
    icon: <FaJs size={40} />,
    color: "from-yellow-400 to-orange-400",
    desc: "Interactive frontend development",
  },

  {
    title: "HTML",
    icon: <FaHtml5 size={40} />,
    color: "from-orange-500 to-red-500",
    desc: "Semantic webpage structure",
  },

  {
    title: "CSS",
    icon: <FaCss3Alt size={40} />,
    color: "from-blue-500 to-indigo-500",
    desc: "Responsive layouts & styling",
  },

  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss size={40} />,
    color: "from-green-500 to-emerald-500",
    desc: "Fast UI development using utility classes",
  },

  {
    title: "C Programming",
    icon: <SiC size={40} />,
    color: "from-pink-500 to-purple-500",
    desc: "Strong programming fundamentals",
  },

  {
    title: "DBMS",
    icon: <FaDatabase size={40} />,
    color: "from-indigo-500 to-blue-500",
    desc: "Database concepts & management",
  },
];

  /* ================= PROJECTS ================= */

const projects = [
  {
    title: "Unique 3D Web Experience",
    desc: "Interactive 3D website with immersive visuals and smooth animations built using React, Three.js and GSAP.",
    tags: ["React", "Three.js", "GSAP", "Vite"],
    features: [
      "Real-time 3D interactions",
      "Smooth GSAP animations",
      "Modern immersive UI",
      "Performance optimized build",
    ],
    live: "https://neeraj5376.github.io/unique-3d/",
    github: "https://github.com/neeraj5376/unique-3d.git",
  },

  {
    title: "AI Business Landing Page",
    desc: "Professional AI startup landing page built using React and Tailwind CSS to showcase services, vision and brand identity.",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    features: [
      "Modern hero section with CTA",
      "Service and vision sections",
      "Fully responsive layout",
    ],
    live: "https://neeraj5376.github.io/aibout/",
    github: "https://github.com/neeraj5376",
  },

  {
    title: "Pricing Page UI",
    desc: "Interactive pricing section showcasing subscription plans with comparison layout and hover animations.",
    tags: ["React", "Tailwind CSS", "UI Design"],
    features: [
      "Pricing comparison cards",
      "Hover animation effects",
      "Mobile responsive layout",
    ],
    live: "https://neeraj5376.github.io/Demo/#Pricing",
    github: "https://github.com/neeraj5376",
  },

  {
    title: "Sorting Visualizer",
    desc: "Visualization tool to demonstrate sorting algorithms step-by-step for learning purposes.",
    tags: ["JavaScript", "Algorithms", "Frontend"],
    features: [
      "Bubble sort visualization",
      "Real-time animation",
      "Educational interface",
    ],
    live: "#",
    github: "https://github.com/neeraj5376",
  },
];

  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
<section className="min-h-screen flex flex-col">

  {/* TOP CENTER TEXT */}

  <div className="text-center pt-6">
    <h2 className="text-ss tracking-widest text-gray-500 font-semibold animate-pulse">
      Welcome Sir 
    </h2>
  </div>


  {/* MAIN CONTENT */}

  <div className="flex flex-1">

    {/* LEFT TEXT */}

    <div className="w-1/2 flex flex-col justify-center px-10">

      <h1 className="text-6xl font-extrabold">
        Hello, I’m <br />

        <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
          Neeraj Jangid
        </span>
      </h1>

      <p className="mt-6 text-gray-300 text-lg">
        Web Development Enthusiast 🚀
      </p>

      <p className="mt-4 text-gray-400 max-w-xl">
        Motivated and disciplined BCA student passionate about
        building responsive and user-friendly web applications
        using React, Tailwind CSS and JavaScript.
      </p>

      {/* BUTTONS */}

      <div className="mt-8 flex gap-4">

        <a
          href="#skills"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-lg transition duration-300"
        >
          My Skills
        </a>

        <a
          href="#projects"
          className="px-6 py-3 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white rounded-xl shadow-lg transition duration-300"
        >
          My Projects
        </a>

      </div>

    </div>


    {/* RIGHT 3D CUBE */}

    <div className="w-1/2 flex justify-center items-center">

      <div className="w-[400px] h-[400px] bg-black rounded-2xl overflow-hidden shadow-xl border border-gray-700">

        <Canvas camera={{ position: [3, 3, 3] }}>

          <ambientLight intensity={1} />

          <directionalLight position={[5, 5, 5]} />

          <Cube />

          <OrbitControls />

        </Canvas>

      </div>

    </div>

  </div>

</section>


      {/* ================= ABOUT ================= */}

      <section className="min-h-screen bg-[#0b0f1a] flex items-center px-6">

        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">

          {/* LEFT */}

          <div className="flex-1">

            <div className="flex gap-2 mb-6">

              <span className="w-3 h-3 bg-red-500 rounded-full"></span>

              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>

              <span className="w-3 h-3 bg-green-400 rounded-full"></span>

              <span className="w-3 h-3 bg-blue-400 rounded-full"></span>

            </div>


            <h1 className="text-4xl md:text-5xl font-bold mb-6">

              About <span className="text-orange-500">Me</span>

            </h1>


            <p className="text-gray-400 mb-6">

              I am currently pursuing Bachelor of Computer Applications (BCA)
              from Rajasthan Technical University.

            </p>


            <p className="text-gray-400 mb-6">

              I have strong interest in web development and practical knowledge
              of HTML, CSS, JavaScript, React.js and database concepts (DBMS).

            </p>


            <p className="text-yellow-400">

              Passionate about building modern responsive web applications.

            </p>

          </div>


          {/* RIGHT PROFILE */}

          <div className="flex-1 flex flex-col items-center">

            <div className="w-40 h-40 rounded-full border-4 border-yellow-400 overflow-hidden mb-6">

              <img
                src="/img.jpg"
                className="w-full h-full object-cover"
                alt="profile"
              />

            </div>


            <div className="grid grid-cols-2 gap-4">

              <div className="bg-[#111827] p-4 rounded-xl text-center">

                <h2 className="text-xl text-orange-500 font-bold">6+</h2>

                <p className="text-gray-400 text-sm">Projects</p>

              </div>


              <div className="bg-[#111827] p-4 rounded-xl text-center">

                <h2 className="text-xl text-orange-500 font-bold">2nd</h2>

                <p className="text-gray-400 text-sm">Year BCA</p>

              </div>


              <div className="bg-[#111827] p-4 rounded-xl text-center">

                <h2 className="text-xl text-orange-500 font-bold">7+</h2>

                <p className="text-gray-400 text-sm">Skills</p>

              </div>


              <div className="bg-[#111827] p-4 rounded-xl text-center">

                <h2 className="text-xl text-orange-500 font-bold">RTU</h2>

                <p className="text-gray-400 text-sm">University</p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

    <section id="skills" className="min-h-screen bg-[#0b0f1a] flex flex-col items-center justify-center px-6">

  {/* Top dots */}

  <div className="flex gap-2 mb-6">

    <span className="w-3 h-3 bg-red-500 rounded-full"></span>

    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>

    <span className="w-3 h-3 bg-green-400 rounded-full"></span>

    <span className="w-3 h-3 bg-blue-400 rounded-full"></span>

  </div>




  <h1 className="text-4xl md:text-5xl font-bold mb-12">

    My <span className="text-orange-500">Tech Stack</span>

  </h1>


  {/* Skills Grid */}

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">

    {skills.map((skill, i) => (

      <div
        key={i}
        className="bg-[#111827] rounded-2xl p-6 text-center shadow-lg hover:scale-105 hover:shadow-orange-500/20 transition duration-300"
      >

        {/* Icon */}

        <div
          className={`w-20 h-20 mx-auto mb-4 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${skill.color}`}
        >

          {skill.icon}

        </div>


        {/* Skill Title */}

        <h2 className="text-lg font-semibold mb-2">

          {skill.title}

        </h2>


        {/* Skill Description */}

        <p className="text-gray-400 text-sm">

          {skill.desc}

        </p>

      </div>

    ))}

  </div>

</section>


      {/* ================= PROJECTS ================= */}

     <section id="projects" className="min-h-screen bg-[#0b0f1a] flex flex-col items-center justify-center px-6">
      <div className="flex gap-2 mb-6">

              <span className="w-3 h-3 bg-red-500 rounded-full"></span>

              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>

              <span className="w-3 h-3 bg-green-400 rounded-full"></span>

              <span className="w-3 h-3 bg-blue-400 rounded-full"></span>

            </div>  

  <h1 className="text-5xl font-bold mb-12">
    Featured <span className="text-orange-500">Projects</span>
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">

    {projects.map((project, i) => (

      <div
        key={i}
        className="bg-[#111827] rounded-2xl p-6 border border-gray-700 hover:scale-105 transition duration-300"
      >

        {/* Project Number */}

        <p className="text-gray-500 text-xs mb-2">
          0{i + 1} / 06
        </p>


        {/* Title */}

        <h2 className="text-xl font-semibold mb-3">
          {project.title}
        </h2>


        {/* Description */}

        <p className="text-gray-400 text-sm mb-4">
          {project.desc}
        </p>


        {/* Features */}

        <ul className="text-gray-500 text-xs mb-4 space-y-1">

          {project.features.map((feature, index) => (

            <li key={index}>
              • {feature}
            </li>

          ))}

        </ul>


        {/* Tags */}

        <div className="flex gap-2 flex-wrap mb-4">

          {project.tags.map((tag, idx) => (

            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
            >
              {tag}
            </span>

          ))}

        </div>


        {/* Buttons */}

        <div className="flex gap-3">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-xs px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800"
          >
            GitHub
          </a>

        </div>

      </div>

    ))}

  </div>

</section>


      {/* ================= FOOTER ================= */}

      <footer className="bg-[#0b0f1a] py-10 flex flex-col items-center">
        

        <div className="flex gap-6 mb-6">

          <a
            href="https://github.com/neeraj5376"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-[#111827] rounded-full"
          >
            <FaGithub />
          </a>


          <a className="p-3 bg-[#111827] rounded-full"

            >

            <FaLinkedin />

          </a>



          <a
            href="mailto:jangidneeraj2007@gmail.com"
            className="p-3 bg-[#111827] rounded-full"
          >

            <FaEnvelope />

          </a>

        </div>


        <p className="text-gray-400 text-sm mb-2">

          📞 +91 95499 36374

        </p>


        <p className="text-gray-500 text-xs">

          © 2026 All Rights Reserved |{" "}

          <span className="text-yellow-400">

            Neeraj Jangid

          </span>

        </p>

      </footer>

    </main>
  );
}

export default App;