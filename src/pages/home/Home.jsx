import React from 'react';
import Typing from '../../components/typing/Typing';
import Reveal from '../../components/reveal/Reveal';
import TechStack from '../../components/techstack/TechStack';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <div
      className="flex flex-col md:flex-row mt-5 items-center text-[var(--text-primary)] transition-colors duration-300"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <div className="w-full md:w-1/2 px-6 py-12 md:px-12 md:pt-12 md:pb-8">
        <Reveal>
          <p className="text-xl md:text-3xl font-bold">Hey, I'm</p>
          <h1 className="text-4xl md:text-[60.8px] font-bold mb-3 md:mb-6 gradient-text w-fit">
            <Typing message="Diljot Singh" />
          </h1>
          <p className="md:text-lg text-[var(--text-secondary)]">
            A passionate developer with a strong foundation in C++ and practical experience building projects using the MERN stack. I enjoy turning ideas into responsive, full-stack applications and continuously strive to improve my problem-solving and development skills.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <a href="/Diljot_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-[var(--btn-bg)] text-[var(--btn-text)] mt-5 px-3 py-2 md:px-4 md:py-2 rounded-2xl shadow-md transition-all duration-300 hover:scale-110 hover:shadow-2xl">
              View Resume
            </button>
          </a>

          <div className="flex flex-row items-center gap-x-4 my-4">
            <a href="https://github.com/diljot0083" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub
                size={38}
                className="text-[var(--text-primary)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-[var(--accent)]"
              />
            </a>

            <a href="https://www.linkedin.com/in/diljotsingh0083" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin
                size={38}
                className="text-[var(--text-primary)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-[var(--accent)]"
              />
            </a>
          </div>
        </Reveal>
      </div>

      <div className="w-full md:w-1/2 px-6 md:px-12 pb-12 md:pb-0">
        <Reveal delay={200}>
          <p className="text-sm uppercase tracking-widest font-semibold mb-4 text-[var(--text-secondary)]">
            Tech I Work With
          </p>
          <TechStack variant="grid" />
        </Reveal>
      </div>
    </div>
  );
}

export default Home;