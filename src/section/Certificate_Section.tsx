import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const certificates = [
    {
        title: "Python 101 for Data Science",
        issuer: "Cognitiveclass",
        date: "May 2021",
        description: "Introductory course highlighting foundational skills, data structures, and basic programming concepts, as well as practical experience in handling data, and performing simple analyses",
        credentialId: "9ccd2608f46648c38e7a2e32db7a677f",
        link: "https://courses.cognitiveclass.ai/certificates/9ccd2608f46648c38e7a2e32db7a677f",
    },
    {
        title: "Android Java Masterclass - Become an App Developer",
        issuer: "Udemy",
        date: "June 2022",
        description: "In-depth course focused on Android app development demonstrating proficiency in building & understanding core Android components.",
        credentialId: "UC-ac5c8f2c-4ff4-46b4-9d7a-b47a0cddac0be",
        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-ac5c8f2c-4ff4-46b4-9d7a-b47a0cdda0be.pdf",
    },
    {
        title: "The Ultimate Guide to C# Unity Programming",
        issuer: "Udemy",
        date: "June 2021",
        description: "Comprehensive course in Unity using C#, signifying proficiency in programming game mechanics, interactive 2D and 3D experiences, and implementing physics animation.",
        credentialId: "UC-091d9bca-09c9-45d1-a49a-d14f28dcf19f",
        link: "https://www.udemy.com/certificate/UC-091d9bca-09c9-45d1-a49a-d14f28dcf19f/",
    },
];

const CertificatesSection = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c === 0 ? certificates.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === certificates.length - 1 ? 0 : c + 1));

    return (
        <section className="relative py-24 overflow-hidden grid-bg min-h-[90vh]">
            <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/10" />
            <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/10" />

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground mb-3">
                        <span className="text-terminal-green">➜</span>
                        <span className="text-primary">~</span>
                        <span>cat certificates.md</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
                        <span className="text-foreground">My </span>
                        <span className="text-primary text-glow">Certificates</span>
                    </h2>
                </motion.div>

                {/* Carousel */}
                <div className="relative">
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -60 }}
                            transition={{ duration: 0.35 }}
                            className="bg-card border border-border rounded-lg overflow-hidden border-glow"
                        >
                            {/* Terminal header */}
                            <a href={certificates[current].link} target="_blank">

                                <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/50 border-b border-border">
                                    <div className="w-3 h-3 rounded-full bg-destructive/70" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                    <div className="w-3 h-3 rounded-full bg-terminal-green/70" />
                                    <span className="ml-2 text-xs font-mono text-muted-foreground">
                                        ~/certificates/{certificates[current].title.toLowerCase().replace(/\s+/g, "-")}
                                    </span>
                                </div>

                                <div className="p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                                            <EmojiEventsIcon className="w-8 h-8 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-display text-primary">
                                                {certificates[current].title}
                                            </h3>
                                            <p className="text-sm font-mono text-muted-foreground mt-1">
                                                {certificates[current].issuer}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        <p className="font-mono text-xs text-muted-foreground">
                                            <span className="text-terminal-green">$</span> cat details.txt
                                        </p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {certificates[current].description}
                                        </p>
                                    </div>

                                    <div className="h-px bg-border mb-4" />

                                    <div className="flex items-center justify-between">
                                        <p className="font-mono text-xs text-muted-foreground">
                                            <span className="text-terminal-green">issued:</span> {certificates[current].date}
                                        </p>
                                        <p className="font-mono text-xs text-muted-foreground">
                                            <span className="text-terminal-green">id:</span> {certificates[current].credentialId}
                                        </p>
                                    </div>

                                    <p className="font-mono text-xs text-terminal-green mt-4">
                                        ✓ credential verified
                                    </p>
                                </div>
                            </a>

                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                        <button
                            onClick={prev}
                            className="p-2 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                        >
                            <ChevronLeftIcon className="w-5 h-5 text-primary" />
                        </button>

                        <div className="flex gap-2">
                            {certificates.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border hover:bg-muted-foreground"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="p-2 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                        >
                            <ChevronRightIcon className="w-5 h-5 text-primary" />
                        </button>
                    </div>

                    <p className="text-center font-mono text-xs text-muted-foreground mt-4">
                        [{current + 1}/{certificates.length}]
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
