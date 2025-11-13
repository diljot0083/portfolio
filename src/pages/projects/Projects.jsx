const Projects = () => {
    return (
        <div
            className="max-w-screen-lg mx-auto px-4 mt-14 mb-20 pt-5 pb-5"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
            {/* Review Flicks Project */}
            <div className="bg-[#F3E8FF] mb-20 p-5 rounded-xl shadow-md">
                <p className="text-2xl font-bold mb-3">Review Flicks</p>

                <p>
                    ReviewFlicks is a dynamic and interactive movie review platform built using the MERN
                    stack (MongoDB, Express, React, Node). Users can explore movies, submit reviews, and read what others think - all in one place.
                </p>

                <p className="mt-4 text-xl font-semibold">TechStack Used:</p>
                <p>MongoDB, Express, React, Node</p>

                <div className="mt-6 flex flex-wrap gap-4">
                    <a
                        href="https://reviewflicks.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white font-semibold px-3 py-2 md:px-4 md:py-2 rounded-2xl 
                                   transition-transform transform duration-300 hover:scale-110 
                                   hover:shadow-2xl hover:drop-shadow-[0_17px_15px_rgba(0,0,0,0.3)]"
                    >
                        Live Demo
                    </a>

                    <a
                        href="https://github.com/diljot0083/review-flicks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white font-semibold px-3 py-2 md:px-4 md:py-2 rounded-2xl 
                                   transition-transform transform duration-300 hover:scale-110 
                                   hover:shadow-2xl hover:drop-shadow-[0_17px_15px_rgba(0,0,0,0.3)]"
                    >
                        GitHub
                    </a>
                </div>
            </div>

            {/* DevSnippet */}
            <div className="bg-[#F3E8FF] mb-20 p-5 rounded-xl shadow-md">
                <p className="text-2xl font-bold mb-3">DevSnippet</p>

                <p>
                    DevSnippet is a lightweight paste and notes application built using React and Redux. It allows users to quickly add, edit, and manage code snippets or short notes in a clean and minimal interface designed for speed and simplicity.
                </p>

                <p className="mt-4 text-xl font-semibold">TechStack Used:</p>
                <p>React, Redux, TypeScript</p>

                <div className="mt-6 flex flex-wrap gap-4">
                    <a
                        href="https://devsnippet.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white font-semibold px-3 py-2 md:px-4 md:py-2 rounded-2xl 
                                   transition-transform transform duration-300 hover:scale-110 
                                   hover:shadow-2xl hover:drop-shadow-[0_17px_15px_rgba(0,0,0,0.3)]"
                    >
                        Live Demo
                    </a>

                    <a
                        href="https://github.com/diljot0083/devsnippet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white font-semibold px-3 py-2 md:px-4 md:py-2 rounded-2xl 
                                   transition-transform transform duration-300 hover:scale-110 
                                   hover:shadow-2xl hover:drop-shadow-[0_17px_15px_rgba(0,0,0,0.3)]"
                    >
                        GitHub
                    </a>
                </div>
            </div>

            {/* To-Do List Project */}
            <div className="bg-[#F3E8FF] p-5 rounded-xl shadow-md">
                <p className="text-2xl font-bold mb-3">To-Do List</p>

                <p>
                    A console-based To-Do List application developed in C++ to manage daily tasks efficiently. The program allows users to add, view, mark as complete, and delete tasks using a simple and interactive menu-driven interface.
                </p>

                <p className="mt-4 text-xl font-semibold">TechStack Used:</p>
                <p>C++, OOP, File Handling</p>

                <div className="mt-6 flex flex-wrap">
                    <a
                        href="https://github.com/diljot0083/To-Do-List-CPP"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white font-semibold px-3 py-2 md:px-4 md:py-2 rounded-2xl 
                                   transition-transform transform duration-300 hover:scale-110 
                                   hover:shadow-2xl hover:drop-shadow-[0_17px_15px_rgba(0,0,0,0.3)]"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
