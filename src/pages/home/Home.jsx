import React from 'react';
import Typing from '../../components/typing/Typing';
import GitHubLogo from '../../assets/github-mark.png'
import LinkedInLogo from '../../assets/LinkedIn.png'

function Home() {
  return (
    <div className="flex flex-col md:flex-row mt-5" style={{ fontFamily: '"Times New Roman", Times, serif' }}>

      <div className="w-full md:w-1/2 px-6 py-12 md:px-12 md:pt-12 md:pb-8">
        <p className="text-xl md:text-3xl font-bold">Hey, I'm</p>
        <h1 className="text-4xl md:text-[60.8px] font-bold mb-3 md:mb-6">
          <Typing message="Diljot Singh" />
        </h1>
        <p className="md:text-lg">
          A passionate developer with a strong foundation in C++ and practical experience building projects using the MERN stack. I enjoy turning ideas into responsive, full-stack applications and continuously strive to improve my problem-solving and development skills.
        </p>

        <a
          href="/Diljot_Singh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-black mt-5 text-white px-3 py-2 md:px-4 md:py-2 rounded-2xl shadow-md transition transform duration-300 hover:scale-110 hover:shadow-2xl hover:drop-shadow-[0_17px_15px_rgba(0,0,0,0.3)]">
            View Resume
          </button>
        </a>

        <div className='flex flex-row gap-x-2 my-4'>

          <a href="https://github.com/diljot0083"
          target="_blank"
          rel="noopener noreferrer"
          >
            <img
              src={GitHubLogo}
              alt="GitHub Profile"
              style={{ width: '41px', height: '41px', cursor: 'pointer' }}
            />
          </a>

          <a href="https://www.linkedin.com/in/diljotsingh0083"
          target="_blank"
          rel="noopener noreferrer"
          >
            <img
              src={LinkedInLogo}
              alt="LinkedIn Profile"
              style={{ width: '39px', height: '38px', cursor: 'pointer' }}
            />
          </a>

        </div>

      </div>


    </div>
  );
}

export default Home;
