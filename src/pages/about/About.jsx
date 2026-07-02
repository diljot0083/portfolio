import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../components/reveal/Reveal';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';

const skillGroups = [
  { label: "Languages", icon: Code2, items: ["C", "C++", "Python", "JavaScript", "TypeScript"] },
  { label: "Frontend", icon: Layout, items: ["HTML", "CSS", "React", "Tailwind CSS"] },
  { label: "Backend", icon: Server, items: ["Node.js", "Express.js"] },
  { label: "Databases", icon: Database, items: ["MongoDB", "MySQL"] },
  { label: "Tools", icon: Wrench, items: ["Git", "GitHub", "Postman"] },
];

const About = () => {
  return (
    <div
      className="md:mx-5 md:my-9 mx-2 my-7 px-2 text-base text-[var(--text-primary)] transition-colors duration-300"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      {/* About Me Section */}
      <Reveal>
        <section>
          <h1 className="md:text-[60.8px] text-4xl font-bold leading-tight">So, Who Am I?</h1>
          <p className="md:my-4 my-3 text-base md:text-lg text-[var(--text-secondary)]">
            Hey, I'm Diljot Singh, Aspiring Software Developer with a strong foundation in{' '}
            <strong className="text-[var(--text-primary)]">C++, MERN stack, and Data Structures.</strong> Passionate about developing efficient, scalable
            software solutions and solving complex problems. Experienced in designing and implementing full-stack
            applications, optimizing algorithms, and enhancing user experiences through robust web and software
            development.
          </p>
        </section>
      </Reveal>

      {/* Skills Section */}
      <Reveal delay={150}>
        <section>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 gradient-text w-fit">My Skills</h2>
          <div className="mt-5 md:mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.label}
                  className="rounded-2xl p-5 bg-[var(--card-bg)] border border-[var(--card-border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={18} className="text-[var(--text-secondary)]" />
                    <p className="font-bold">{group.label}</p>
                    <span className="text-xs text-[var(--text-secondary)] ml-auto">{group.items.length}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="skill-badge transition-transform duration-200 hover:-translate-y-0.5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Reveal>

      <Reveal delay={300}>
        <div className="mt-10 md:mt-14 p-6 md:p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xl md:text-2xl font-bold gradient-text w-fit">Let's build something together</p>
            <p className="text-[var(--text-secondary)] mt-1">Have a project in mind or an opportunity to discuss?</p>
          </div>
          <Link to="/contact">
            <button className="bg-[var(--btn-bg)] text-[var(--btn-text)] px-5 py-2.5 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl whitespace-nowrap">
              Get In Touch
            </button>
          </Link>
        </div>
      </Reveal>
    </div>
  );
};

export default About;