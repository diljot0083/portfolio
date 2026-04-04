const Projects = () => {
    return (
        <div
            className="max-w-screen-lg mx-auto px-4 mt-14 mb-20 pt-5 pb-5"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
            {/* ExpenseWise AI */}
            <div className="bg-[#F3E8FF] mb-20 p-5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <p className="text-2xl font-bold mb-3">ExpenseWise AI</p>

                <p>
                    ExpenseWise AI is a full-stack expense tracking application built using the MERN stack with TypeScript.
                    It features secure authentication, real-time analytics, and AI-powered financial insights.
                </p>

                <p className="mt-4 text-xl font-semibold">TechStack Used:</p>
                <p>MongoDB, Express, React, Node, TypeScript, Tailwind CSS, JWT, Google OAuth, Recharts</p>

                <ul className="mt-4 list-disc pl-5 space-y-1">
                    <li>JWT + Google OAuth authentication</li>
                    <li>Category-based CRUD expense management</li>
                    <li>Interactive charts using Recharts</li>
                    <li>AI insights for spending analysis</li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-4">
                    <a
                        href="https://expensewise-ai.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white font-semibold px-3 py-2 md:px-4 md:py-2 rounded-2xl 
                       transition-transform transform duration-300 hover:scale-110 
                       hover:shadow-2xl"
                    >
                        Live Demo
                    </a>

                    <a
                        href="https://github.com/diljot0083/expensewise-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white font-semibold px-3 py-2 md:px-4 md:py-2 rounded-2xl 
                       transition-transform transform duration-300 hover:scale-110 
                       hover:shadow-2xl"
                    >
                        GitHub
                    </a>
                </div>
            </div>

            {/* Review Flicks Project */}
            <div className="bg-[#F3E8FF] mb-20 p-5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <p className="text-2xl font-bold mb-3">Review Flicks</p>

                <p>
                    Review Flicks is a full-stack movie review platform built using the MERN stack.
                    Users can explore movies, submit reviews, and discover community opinions in a seamless interface.
                </p>

                <p className="mt-4 text-xl font-semibold">TechStack Used:</p>
                <p>MongoDB, Express, React, Node, TypeScript, Tailwind CSS, JWT, OMDb API</p>

                <ul className="mt-4 list-disc pl-5 space-y-1">
                    <li>JWT + Google OAuth authentication system</li>
                    <li>Movie search and data integration using OMDb API</li>
                    <li>Review and rating system with full CRUD operations</li>
                    <li>Responsive UI with clean component-based architecture</li>
                </ul>

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
            <div className="bg-[#F3E8FF] mb-20 p-5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <p className="text-2xl font-bold mb-3">DevSnippet</p>

                <p>
                    DevSnippet is a lightweight code snippet and notes manager built with React and Redux.
                    It enables users to quickly store, edit, and organize snippets in a fast and minimal interface.
                </p>

                <p className="mt-4 text-xl font-semibold">TechStack Used:</p>
                <p>React, Redux, TypeScript</p>

                <ul className="mt-4 list-disc pl-5 space-y-1">
                    <li>State management using Redux for efficient data handling</li>
                    <li>Create, edit, and delete snippets with instant updates</li>
                    <li>Clean and minimal UI focused on speed and usability</li>
                    <li>Reusable component-based architecture</li>
                </ul>

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
            <div className="bg-[#F3E8FF] p-5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <p className="text-2xl font-bold mb-3">To-Do List</p>

                <p>
                    A console-based To-Do List application developed in C++ to manage daily tasks efficiently
                    through a menu-driven interface.
                </p>

                <p className="mt-4 text-xl font-semibold">TechStack Used:</p>
                <p>C++, OOP, File Handling</p>

                <ul className="mt-4 list-disc pl-5 space-y-1">
                    <li>Implemented task creation, deletion, and completion tracking</li>
                    <li>File handling for persistent task storage</li>
                    <li>Menu-driven interface for smooth user interaction</li>
                    <li>Structured using object-oriented programming principles</li>
                </ul>

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
