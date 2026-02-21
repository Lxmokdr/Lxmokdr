import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Experience {
    title: string;
    period: string;
    type: string;
    desc: string;
    details: string[];
    skills: string[];
    link?: string;
}

const experiences: Experience[] = [
    {
        title: 'Natixis Algérie',
        period: 'Dec 2024 - May 2025',
        type: 'Internship',
        desc: 'Two-phase internship program including organizational discovery and a feasibility study for a secure Natural Language Processing system dedicated to banking documentation retrieval.',
        details: [
            '1st Phase: Cross-department discovery of banking data systems, IT infrastructure, and security workflows',
            '2nd Phase: Conducted feasibility study for NLP-based internal document search system',
            'Designed architecture proposal for secure natural language query interface',
            'Analyzed document processing pipelines and structured knowledge extraction strategies',
            'Evaluated integration of RAG-based approaches for private institutional data'
        ],
        skills: ['NLP', 'RAG', 'Python', 'Document Processing', 'System Architecture', 'Banking Systems']
    },
    {
        title: 'Hybrid NLP–Expert Agent System',
        period: 'Dec 2025',
        type: 'Academic Project',
        desc: 'Development of a neuro-symbolic hybrid system combining advanced NLP techniques with rule-based expert agents to generate reliable, explainable, and compliant responses from internal documentation.',
        details: [
            'Designed hybrid neuro-symbolic architecture (LLM + rule engine)',
            'Implemented rule-based reasoning layer for controlled responses',
            'Integrated NLP pipeline for semantic document understanding',
            'Ensured explainability and compliance constraints in generated outputs',
            'Structured system following Clean Architecture principles'
        ],
        skills: ['NLP', 'Neuro-symbolic Systems', 'Expert Systems', 'Clean Architecture', 'Python', 'RAG']
    },
    {
        title: 'Etablissement National de la Navigation Aérienne',
        period: 'Oct 2025 - Jan 2026',
        type: 'Internship',
        desc: 'Development of a web-based incident management system for automated Air Traffic Control (ATC) systems, focused on structured reporting, traceability, and operational reliability.',
        details: [
            'Designed technical incident reporting workflows',
            'Built web application for structured incident logging and tracking',
            'Modeled database schema for traceable system events',
            'Implemented authentication and role-based access control',
            'Ensured reliability and system monitoring alignment with ATC requirements'
        ],
        skills: ['Web Development', 'System Design', 'Database Modeling', 'Authentication', 'Incident Management']
    },
    {
        title: 'Application Scolaire - A’ALIMNI',
        period: 'Feb 2025 - Present',
        type: 'Project',
        desc: 'Cross-platform Flutter application providing a complete digital management system for educational institutions with multi-role authentication and structured academic tracking.',
        details: [
            'Implemented multi-role authentication (SuperAdmin, Admin, Professor, Parent)',
            'Designed Firestore-based data architecture for academic records',
            'Developed grade tracking, absence monitoring, and exam management modules',
            'Integrated real-time notifications and document sharing system',
            'Built scalable administrative dashboard logic'
        ],
        skills: ['Flutter', 'Firebase', 'Firestore', 'Authentication', 'Mobile Architecture', 'Role Management']
    },
    {
        title: 'Application E-commerce - KLS',
        period: 'Sept 2025 - Present',
        type: 'Project',
        desc: 'Advanced e-commerce platform for custom PC sales built with Next.js 14 and TypeScript, featuring an interactive PC builder and Firebase-powered backend infrastructure.',
        details: [
            'Developed interactive PC builder with compatibility logic and power calculation',
            'Designed Firebase backend for product and order management',
            'Implemented API routes using Next.js server functions',
            'Built multi-language and multi-currency support',
            'Created admin dashboard for inventory and user control'
        ],
        skills: ['Next.js 14', 'TypeScript', 'Firebase', 'API Design', 'E-commerce Systems', 'Full-Stack Development']
    },
    {
        title: 'Vision & Innovation Club',
        period: '2022 - 2025',
        type: 'Leadership',
        desc: 'IT Member and technical contributor responsible for digital projects, event technology coordination, and multimedia mentoring.',
        details: [
            'Organized major events (Charity, Spelling Bee, Polymaze, Anglosphere)',
            'IT Responsible for VIC PODCAST project',
            'Mentored members in video editing and technical production',
            'Led development of event-related web platforms',
            'Coordinated technical logistics for competitions'
        ],
        skills: ['Leadership', 'Event Technology', 'Web Development', 'Video Editing', 'Project Coordination']
    },
    {
        title: 'Industrial Engineers Club',
        period: '2024 - Present',
        type: 'Leadership',
        desc: 'IT Chief responsible for the technical management and digital infrastructure of Business Game 4.0.',
        details: [
            'Led IT team for Business Game 4.0',
            'Managed technical deployment and coordination',
            'Supervised infrastructure and digital operations',
            'Ensured smooth execution of competition systems'
        ],
        skills: ['IT Management', 'Leadership', 'Technical Coordination', 'Team Management']
    }
];
export default function ExperienceCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % experiences.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto h-[650px] flex items-center justify-center overflow-hidden">
            <div
                className="relative w-full h-[550px] flex items-center justify-center -mt-10"
                style={{ perspective: 1200 }}
            >
                <AnimatePresence initial={false}>
                    {experiences.map((exp, index) => {
                        // Calculate logical offset for circular array
                        let offset = index - activeIndex;
                        if (offset > experiences.length / 2) offset -= experiences.length;
                        if (offset < -experiences.length / 2) offset += experiences.length;

                        const absOffset = Math.abs(offset);

                        // Do not render cards that are too far away
                        if (absOffset > 2) return null;

                        const zIndex = 100 - absOffset;
                        const yOffset = offset * 220; // Vertical offset
                        const zOffset = -absOffset * 100; // Push back on Z axis instead of scaling down drastically
                        const opacity = offset === 0 ? 1 : Math.max(0, 1 - absOffset * 0.4);
                        const rotateX = offset * 15; // Rotate on X axis for vertical tilt

                        return (
                            <motion.div
                                key={exp.title}
                                className={`absolute w-full max-w-3xl p-8 rounded-2xl bg-blue-950/60 backdrop-blur-xl border flex flex-col shadow-2xl ${offset === 0 ? 'shadow-orange-500/30 border-orange-400/50' : 'shadow-blue-900/20 border-blue-500/20'}`}
                                initial={{ y: yOffset, z: zOffset, opacity, rotateX, zIndex }}
                                animate={{
                                    y: yOffset,
                                    z: zOffset,
                                    opacity,
                                    zIndex,
                                    rotateX,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.32, 0.72, 0, 1] // Smooth snapping
                                }}
                                style={{
                                    pointerEvents: offset === 0 ? 'auto' : 'none',
                                }}
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {exp.title}
                                        </h3>
                                        {exp.link && (
                                            <a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                                            >
                                                <span>View Project</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3 mt-3 md:mt-0">
                                        <span className="text-blue-200 text-sm font-medium px-3 py-1 bg-blue-900/50 rounded-full">{exp.period}</span>
                                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${exp.type === 'Internship'
                                            ? 'bg-orange-900/40 text-orange-300 border border-orange-700/50'
                                            : exp.type === 'Project'
                                                ? 'bg-green-900/40 text-green-300 border border-green-700/50'
                                                : 'bg-purple-900/40 text-purple-300 border border-purple-700/50'
                                            }`}>
                                            {exp.type}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-blue-100 text-base mb-6 leading-relaxed bg-blue-900/20 p-4 rounded-lg border border-blue-800/30">{exp.desc}</p>

                                {/* Details section */}
                                {exp.details && (
                                    <div className="mb-6 flex-1">
                                        <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Key Responsibilities & Features
                                        </h4>
                                        <ul className="text-blue-200 text-sm space-y-2">
                                            {exp.details.map((detail, j) => (
                                                <li key={j} className="flex items-start gap-2">
                                                    <span className="text-orange-500 mt-1 text-lg leading-none">•</span>
                                                    <span className="leading-relaxed">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Skills tags */}
                                {exp.skills && (
                                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-blue-800/30">
                                        {exp.skills.map((skill, j) => (
                                            <span
                                                key={j}
                                                className="px-3 py-1 bg-blue-800/60 hover:bg-orange-500/20 hover:text-orange-300 hover:border-orange-500/50 border border-blue-700/50 text-blue-100 rounded-lg text-xs font-medium transition-all cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Controls Container - Vertically Aligned */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col justify-center gap-8 z-50 pr-4 md:pr-10">
                <button
                    onClick={handlePrev}
                    className="p-4 rounded-full bg-blue-800/60 hover:bg-orange-500 text-white transition-all transform hover:scale-110 shadow-lg backdrop-blur-sm group border border-blue-600/50 hover:border-orange-400"
                    aria-label="Previous experience"
                >
                    <svg className="w-7 h-7 transform group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                    </svg>
                </button>
                <button
                    onClick={handleNext}
                    className="p-4 rounded-full bg-blue-800/60 hover:bg-orange-500 text-white transition-all transform hover:scale-110 shadow-lg backdrop-blur-sm group border border-blue-600/50 hover:border-orange-400"
                    aria-label="Next experience"
                >
                    <svg className="w-7 h-7 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {/* Pagination indicators - optionally on the left */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col justify-center gap-3 z-50 pl-4 md:pl-10">
                {experiences.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-2.5 rounded-full transition-all duration-300 ${activeIndex === idx
                            ? 'h-10 bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.5)]'
                            : 'h-2.5 bg-blue-700/50 hover:bg-blue-500'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
