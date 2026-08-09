import React from 'react';
import TiltCard from '../../components/tiltcard/TiltCard';
import Reveal from '../../components/reveal/Reveal';

const Projects = () => {
    return (
        <div
            className="max-w-screen-lg mx-auto px-4 mt-14 mb-20 pt-5 pb-5 text-[var(--text-primary)] transition-colors duration-300"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
            {/* ExpenseWise AI */}
            <Reveal className="mb-20">
                <TiltCard className="bg-[var(--card-bg)] p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-[var(--card-border)]">
                    <p className="text-2xl font-bold mb-3 gradient-text w-fit">ExpenseWise AI</p>

                    <p className="text-[var(--text-secondary)]">
                        ExpenseWise AI is a full-stack expense tracking application built using the MERN stack with TypeScript.
                        It features secure authentication, real-time analytics, and AI-powered financial insights.
                    </p>

                    <p className="mt-4 text-xl font-semibold">TechStack Used:</p>
                    <p className="text-[var(--text-secondary)]">MongoDB, Express, React, Node, TypeScript, Tailwind CSS, JWT, Google OAuth, Recharts</p>

                    <ul className="mt-4 list-disc pl-5 space-y-1 text-[var(--text-secondary)]">
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
                            className="bg-[var(--btn-bg)] text-[var(--btn-text)] font-semibold px-3 py-2 md:px-4 md:py-2 rounded-2xl transition-transform transform duration-300 hover:scale-110 hover:shadow-2xl"
                        >
                            Live Demo
                        </a>

                        <a
                            href="https://github.com/diljot0083/expensewise-ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] font-semibold px-3 py-2 md:px-4 md:py-2 rounded-2xl transition-transform transform duration-300 hover:scale-110 hover:shadow-2xl"
                        >
                            GitHub
                        </a>
                    </div>
                </TiltCard >
            </Reveal >

            {/* Review Flicks Project */}
            < Reveal delay={100} className="mb-20" >
                <TiltCard className="bg-[var(--card-bg)] p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-[var(--card-border)]">
                    <p className="text-2xl font-bold mb-3 gradient-text w-fit">Review Flicks</p>

                    <p className="text-[var(--text-secondary)]">
                        Review Flicks is a full-stack movie review platform built using the MERN stack.
                        Users can explore movies, submit reviews, and discover community opinions in a seamless interface.
                    </p>

                    <p className="mt-4 text-xl font-semibold">TechStack Used:</p>
                    <p className="text-[var(--text-secondary)]">MongoDB, Express, React, Node, TypeScript, Tailwind CSS, JWT, TMDB API</p>

                    <ul className="mt-4 list-disc pl-5 space-y-1 text-[var(--text-secondary)]">
                        <li>JWT + Google OAuth authentication system</li>
                        <li>Movie search and data integration using TMDB API</li>
                        <li>Review and rating system with full CRUD operations</li>
                        <li>Responsive UI with clean component-based architecture</li>
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <a
                            href="https://reviewflicks.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--btn-bg)] text-[var(--btn-text)] font-semibold px-3 py-2 md:px-4 md:py-2 rounded-2xl transition-transform transform duration-300 hover:scale-110 hover:shadow-2xl"
                        >
                            Live Demo
                        </a>

                        <a
                            href="https://github.com/diljot0083/review-flicks"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] font-semibold px-3 py-2 md:px-4 md:py-2 rounded-2xl transition-transform transform duration-300 hover:scale-110 hover:shadow-2xl"
                        >
                            GitHub
                        </a>
                    </div >
                </TiltCard >
            </Reveal >

            {/* DevSnippet */}
            < Reveal delay={150} className="mb-20" >
                <TiltCard className="bg-[var(--card-bg)] p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-[var(--card-border)]">
                    <p className="text-2xl font-bold mb-3 gradient-text w-fit">DevSnippet</p>

                    <p className="text-[var(--text-secondary)]">
                        DevSnippet is a lightweight code snippet and notes manager built with React and Redux.
                        It enables users to quickly store, edit, and organize snippets in a fast and minimal interface.
                    </p>

                    <p className="mt-4 text-xl font-semibold">TechStack Used:</p>
                    <p className="text-[var(--text-secondary)]">React, Redux, TypeScript</p>

                    <ul className="mt-4 list-disc pl-5 space-y-1 text-[var(--text-secondary)]">
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
                            className="bg-[var(--btn-bg)] text-[var(--btn-text)] font-semibold px-3 py-2 md:px-4 md:py-2 rounded-2xl transition-transform transform duration-300 hover:scale-110 hover:shadow-2xl"
                        >
                            Live Demo
                        </a>

                        <a
                            href="https://github.com/diljot0083/devsnippet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] font-semibold px-3 py-2 md:px-4 md:py-2 rounded-2xl transition-transform transform duration-300 hover:scale-110 hover:shadow-2xl"
                        >
                            GitHub
                        </a>
                    </div >
                </TiltCard >
            </Reveal >

            {/* To-Do List Project */}
            < Reveal delay={200} >
                <TiltCard className="bg-[var(--card-bg)] p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-[var(--card-border)]">
                    <p className="text-2xl font-bold mb-3 gradient-text w-fit">To-Do List</p>

                    <p className="text-[var(--text-secondary)]">
                        A console-based To-Do List application developed in C++ to manage daily tasks efficiently
                        through a menu-driven interface.
                    </p>

                    <p className="mt-4 text-xl font-semibold">TechStack Used:</p>
                    <p className="text-[var(--text-secondary)]">C++, OOP, File Handling</p>

                    <ul className="mt-4 list-disc pl-5 space-y-1 text-[var(--text-secondary)]">
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
                            className="bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] font-semibold px-3 py-2 md:px-4 md:py-2 rounded-2xl transition-transform transform duration-300 hover:scale-110 hover:shadow-2xl"
                        >
                            GitHub
                        </a>
                    </div>
                </TiltCard >
            </Reveal >
        </div >
    );
};

export default Projects;