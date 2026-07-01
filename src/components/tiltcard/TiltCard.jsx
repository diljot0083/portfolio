import React, { useRef } from 'react';

const TiltCard = ({ children, className = '', maxTilt = 8 }) => {
    const cardRef = useRef(null);
    const glowRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;

        card.style.transform = `perspective(1000px) translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;

        if (glowRef.current) {
            glowRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, var(--accent) 0%, transparent 60%)`;
            glowRef.current.style.opacity = '0.15';
        }
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(1000px) translateY(0) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
        if (glowRef.current) glowRef.current.style.opacity = '0';
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`tilt-card relative ${className}`}
        >
            <div
                ref={glowRef}
                className="tilt-glow pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
                style={{ opacity: 0 }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default TiltCard;