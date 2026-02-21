import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaFire, FaPython, FaCuttlefish } from 'react-icons/fa';
import { SiFlutter, SiNextdotjs, SiMysql, SiLatex, SiAdobeillustrator, SiAdobepremierepro, SiAdobeaftereffects, SiTailwindcss, SiGithub } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { MdOutlineManageAccounts } from 'react-icons/md';

const technologies = [
    { name: 'React.js', icon: <FaReact className="text-blue-400 text-6xl" />, category: 'Frontend' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-slate-300 text-6xl" />, category: 'Framework' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-6xl" />, category: 'Styling' },
    { name: 'Flutter & Dart', icon: <SiFlutter className="text-blue-400 text-6xl" />, category: 'Mobile' },
    { name: 'Firebase & Firestore', icon: <FaFire className="text-orange-400 text-6xl" />, category: 'Backend' },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500 text-6xl" />, category: 'Database' },
    { name: 'API Design', icon: <TbApi className="text-green-400 text-6xl" />, category: 'Backend' },
    { name: 'C & C++', icon: <FaCuttlefish className="text-slate-400 text-6xl" />, category: 'Programming' },
    { name: 'Python', icon: <FaPython className="text-yellow-400 text-6xl" />, category: 'Data Science' },
    { name: 'MATLAB', icon: <div className="w-16 h-16 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-2xl">M</div>, category: 'Data Science' },
    { name: 'Git & GitHub', icon: <SiGithub className="text-white text-6xl" />, category: 'Version Control' },
    { name: 'LaTeX', icon: <SiLatex className="text-slate-300 text-6xl" />, category: 'Documentation' },
    { name: 'Graphic Design', icon: <SiAdobeillustrator className="text-orange-400 text-6xl" />, category: 'Design' },
    { name: 'Video Editing', icon: <SiAdobepremierepro className="text-blue-400 text-6xl" />, category: 'Media' },
    { name: 'Animation', icon: <SiAdobeaftereffects className="text-purple-400 text-6xl" />, category: 'Media' },
    { name: 'Leadership & IT Mgmt', icon: <MdOutlineManageAccounts className="text-orange-300 text-6xl" />, category: 'Soft Skills' }
];

export default function SkillsCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto scroll effect
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % technologies.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % technologies.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? technologies.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto h-[450px] flex items-center justify-center overflow-hidden">
            <div
                className="relative w-full h-[350px] flex items-center justify-center -mt-10"
                style={{ perspective: 1000 }}
            >
                <AnimatePresence initial={false}>
                    {technologies.map((tech, index) => {
                        // Calculate logical offset for circular array
                        let offset = index - activeIndex;
                        if (offset > technologies.length / 2) offset -= technologies.length;
                        if (offset < -technologies.length / 2) offset += technologies.length;

                        const absOffset = Math.abs(offset);

                        // Do not render cards that are too far away
                        if (absOffset > 3) return null;

                        const zIndex = 100 - absOffset;
                        const xOffset = offset * 180;
                        const yOffset = absOffset * 15;
                        const scale = offset === 0 ? 1 : Math.max(0.6, 1 - absOffset * 0.15);
                        const opacity = offset === 0 ? 1 : Math.max(0, 1 - absOffset * 0.3);
                        const rotateY = offset * -25;

                        return (
                            <motion.div
                                key={tech.name}
                                className={`absolute w-64 p-8 rounded-xl bg-blue-900/40 backdrop-blur-md border border-blue-500/30 flex flex-col items-center justify-center shadow-xl ${offset === 0 ? 'shadow-orange-500/20 border-orange-400/50' : 'shadow-blue-900/20'}`}
                                initial={{ x: xOffset, y: yOffset, scale, opacity, rotateY, zIndex }}
                                animate={{
                                    x: xOffset,
                                    y: yOffset,
                                    scale,
                                    opacity,
                                    zIndex,
                                    rotateY,
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.32, 0.72, 0, 1] // Custom ease function for smooth snapping
                                }}
                                style={{
                                    pointerEvents: offset === 0 ? 'auto' : 'none',
                                }}
                            >
                                <div className="mb-4">{tech.icon}</div>
                                <h3 className="text-xl font-bold text-white text-center mb-2">{tech.name}</h3>
                                <span className="px-3 py-1 bg-blue-800/80 text-blue-200 text-xs rounded-full inline-block">
                                    {tech.category}
                                </span>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center gap-6 z-50">
                <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-blue-800/60 hover:bg-orange-500 text-white transition-all transform hover:scale-110 shadow-lg backdrop-blur-sm"
                    aria-label="Previous skill"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-blue-800/60 hover:bg-orange-500 text-white transition-all transform hover:scale-110 shadow-lg backdrop-blur-sm"
                    aria-label="Next skill"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
