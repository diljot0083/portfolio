import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Typing from '../../components/typing/Typing';
import Editor from '../../components/editor/Editor';
import Reveal from '../../components/reveal/Reveal';
import TechStack from '../../components/techstack/TechStack';

const Landing = () => {
  return (
    <div className="landing-page min-h-screen text-[var(--text-primary)] transition-colors duration-300">
      <Navbar />

      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-8 md:px-12 md:pt-13 md:pb-8">
        {/* Typing + Text Section */}
        <div className="order-2 md:order-1 max-w-xl w-full">
          <Reveal>
            {/* Mobile Typing Text */}
            <div className="block md:hidden">
              <h1
                className="text-4xl font-bold leading-tight whitespace-pre-line"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                <Typing message={`A\nDeveloper’s\nMind,\nAn Innovator’s\nVision`} />
              </h1>
            </div>

            {/* Desktop Typing Text */}
            <div className="hidden md:block">
              <h1
                className="text-[61px] font-bold md:my-7 leading-none"
                style={{ fontFamily: '"Times New Roman", Times, serif', lineHeight: '1.07' }}
              >
                <Typing message="A Developer’s Mind, An Innovator’s Vision" />
              </h1>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h3
              className="text-2xl md:text-3xl font-semibold mb-2 pt-5"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              Hey There! I’m
            </h3>

            <h1
              className="md:text-xl text-lg font-semibold mb-6 gradient-text w-fit"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              Diljot Singh – A Developer Passionate About Innovation
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-row sm:flex-row gap-4">
              <Link to="/home">
                <button className="bg-[var(--btn-bg)] text-[var(--btn-text)] px-3 py-2 md:px-4 md:py-2 rounded-2xl shadow-md transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                  Visit Portfolio
                </button>
              </Link>
              <Link to="/projects">
                <button className="border border-[var(--text-primary)] px-3 py-2 md:px-4 md:py-2 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-[var(--card-bg)]">
                  View Projects
                </button>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Editor Section */}
        <div className="order-1 md:order-2 mb-7 md:mb-0">
          <Reveal delay={200}>
            <Editor />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Landing;