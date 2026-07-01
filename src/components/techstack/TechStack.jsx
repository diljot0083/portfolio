import React from 'react';
import {
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiTypescript,
    SiTailwindcss,
    SiJavascript,
    SiCplusplus,
    SiGit,
} from 'react-icons/si';

const techs = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#68A063' },
    { name: 'Express', icon: SiExpress, color: 'currentColor' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F0DB4F' },
    { name: 'C++', icon: SiCplusplus, color: '#4A9FD8' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
];

const TechStack = ({ variant = 'grid' }) => {
    if (variant === 'row') {
        return (
            <div className="flex flex-wrap gap-3">
                {techs.map(({ name, icon: Icon, color }) => (
                    <div
                        key={name}
                        className="flex items-center gap-2 px-3 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]"
                    >
                        <Icon size={18} style={{ color }} />
                        <span className="text-sm font-semibold">{name}</span>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-3 gap-3 md:gap-4">
            {techs.map(({ name, icon: Icon, color }) => (
                <div
                    key={name}
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[var(--accent)]"
                >
                    <Icon size={28} style={{ color }} />
                    <span className="text-xs font-semibold text-center">{name}</span>
                </div>
            ))}
        </div>
    );
};

export default TechStack;