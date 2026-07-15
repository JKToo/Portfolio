import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type Certificate = {
    title: string;
    issuer: string;
    date: string;
    description: string;
    credentialId: string;
    link: string;
    image: string;
    verifyCode?: string;
    verifyLink?: string;
};

const certificates: Certificate[] = [
    {
        title: "CySA+ (CS0-003)",
        issuer: "CompTIA",
        date: "July 2026",
        description:
            "Validates the skills to detect, analyze, and respond to cybersecurity threats through continuous security monitoring, threat hunting, and incident response.",
        credentialId: "5c1bc69a-18cb-4f68-889a-478bff6682ac",
        verifyCode: "5358e51a734546c68002667d1eb98b9d",
        verifyLink: "https://verify.comptia.org",
        link: "https://www.credly.com/badges/5c1bc69a-18cb-4f68-889a-478bff6682ac/public_url",
        image: "/CySA.png",
    },
    {
        title: "Security+ (SY0-701)",
        issuer: "CompTIA",
        date: "May 2026",
        description:
            "Foundational knowledge of risk management, threat mitigation, and core cybersecurity protocols.",
        credentialId: "74cf018c-7ef1-4946-ae25-6eb2139d3b46",
        verifyCode: "d4246267a41b4322be9edc7642efc236",
        verifyLink: "https://verify.comptia.org",
        link: "https://www.credly.com/badges/74cf018c-7ef1-4946-ae25-6eb2139d3b46/public_url",
        image: "/SecPlus.png",
    },
    {
        title: "Python 101 for Data Science",
        issuer: "Cognitive Class",
        date: "May 2021",
        description:
            "Introductory course covering foundational programming skills, data structures, data handling, and basic data analysis.",
        credentialId: "9ccd2608f46648c38e7a2e32db7a677f",
        link: "https://courses.cognitiveclass.ai/certificates/9ccd2608f46648c38e7a2e32db7a677f",
        image: "/python101.png",
    },
    {
        title: "Android Java Masterclass",
        issuer: "Udemy",
        date: "June 2022",
        description:
            "In-depth course focused on Android application development and building applications with core Android components.",
        credentialId: "UC-ac5c8f2c-4ff4-46b4-9d7a-b47a0cddac0be",
        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-ac5c8f2c-4ff4-46b4-9d7a-b47a0cdda0be.pdf",
        image: "/android.png",
    },
    {
        title: "The Ultimate Guide to C# Unity Programming",
        issuer: "Udemy",
        date: "June 2021",
        description:
            "Comprehensive Unity and C# course covering game mechanics, interactive 2D and 3D experiences, physics, and animation.",
        credentialId: "UC-091d9bca-09c9-45d1-a49a-d14f28dcf19f",
        link: "https://www.udemy.com/certificate/UC-091d9bca-09c9-45d1-a49a-d14f28dcf19f/",
        image: "/unity-csharp.png",
    },
];

const CertificatesSection = () => {
    const [current, setCurrent] = useState(0);

    const certificate = certificates[current];

    const imageFileName = certificate.image.split("/").pop() ?? certificate.image;

    const terminalPath = certificate.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[()+]/g, "");

    const prev = () => {
        setCurrent((currentIndex) =>
            currentIndex === 0
                ? certificates.length - 1
                : currentIndex - 1
        );
    };

    const next = () => {
        setCurrent((currentIndex) =>
            currentIndex === certificates.length - 1
                ? 0
                : currentIndex + 1
        );
    };

    return (
        <section className="relative min-h-[90vh] overflow-hidden grid-bg py-24">
            <div className="absolute left-8 top-8 h-12 w-12 border-l-2 border-t-2 border-primary/10" />

            <div className="absolute bottom-8 right-8 h-12 w-12 border-b-2 border-r-2 border-primary/10" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="mb-3 flex items-center gap-2 font-mono text-sm text-muted-foreground">
                        <span className="text-terminal-green">➜</span>
                        <span className="text-primary">~</span>
                        <span>cat certificates.md</span>
                    </div>

                    <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                        <span className="text-foreground">My </span>

                        <span className="text-primary text-glow">
                            Certificates
                        </span>
                    </h2>
                </motion.div>

                <div className="relative">
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -60 }}
                            transition={{ duration: 0.35 }}
                            className="grid overflow-hidden rounded-lg border border-border bg-card border-glow lg:grid-cols-[1.1fr_0.9fr]"
                        >
                            {/* Left side: certificate details */}
                            <div className="flex min-w-0 flex-col border-border lg:border-r">
                                {/* Left terminal header */}
                                <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-2.5">
                                    <div className="h-3 w-3 rounded-full bg-destructive/70" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                                    <div className="h-3 w-3 rounded-full bg-terminal-green/70" />

                                    <span className="ml-2 truncate font-mono text-xs text-muted-foreground">
                                        ~/certificates/{terminalPath}
                                    </span>
                                </div>

                                <div className="flex flex-1 flex-col p-6 sm:p-8">
                                    {/* Certificate title */}
                                    <div className="mb-6">
                                        <h3 className="font-display text-2xl font-bold leading-tight text-primary">
                                            {certificate.title}
                                        </h3>

                                        <p className="mt-1 font-mono text-sm text-muted-foreground">
                                            {certificate.issuer}
                                        </p>
                                    </div>

                                    {/* Description command */}
                                    <div className="mb-6 space-y-3">
                                        <p className="font-mono text-xs text-muted-foreground">
                                            <span className="text-terminal-green">
                                                $
                                            </span>{" "}
                                            cat details.txt
                                        </p>

                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            {certificate.description}
                                        </p>
                                    </div>

                                    <div className="mb-4 h-px bg-border" />

                                    {/* Credential information */}
                                    <div className="space-y-2">
                                        <p className="font-mono text-xs text-muted-foreground">
                                            <span className="text-terminal-green">
                                                issued:
                                            </span>{" "}
                                            {certificate.date}
                                        </p>

                                        <p className="break-all font-mono text-xs text-muted-foreground">
                                            <span className="text-terminal-green">
                                                id:
                                            </span>{" "}
                                            {certificate.credentialId}
                                        </p>

                                        {certificate.verifyCode && (
                                            <p className="break-all font-mono text-xs text-muted-foreground">
                                                <span className="text-terminal-green">
                                                    code:
                                                </span>{" "}
                                                {certificate.verifyCode}
                                            </p>
                                        )}
                                    </div>

                                    <p className="mt-4 font-mono text-xs text-terminal-green">
                                        ✓ credential verified
                                    </p>

                                    {/* Buttons */}
<div className="mt-6 flex flex-wrap justify-center gap-3">                                        <a
                                            href={certificate.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-xs text-primary transition-colors hover:border-primary hover:bg-primary/20"
                                        >
                                            View Credential
                                            <OpenInNewIcon className="h-4 w-4" />
                                        </a>

                                        {certificate.verifyCode &&
                                            certificate.verifyLink && (
                                                <a
                                                    href={
                                                        certificate.verifyLink
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-xs text-primary transition-colors hover:border-terminal-green hover:bg-terminal-green/20"
                                                >
                                                    Verify Code
                                                    <OpenInNewIcon className="h-4 w-4" />
                                                </a>
                                            )}
                                    </div>
                                </div>
                            </div>

                            {/* Right side: terminal image viewer */}
                            <div className="flex min-w-0 flex-col bg-secondary/20">
                                {/* Image viewer terminal header */}
                                <div className="flex items-center border-b border-border bg-secondary/50 px-4 py-2.5">
                                    <p className="truncate font-mono text-xs text-muted-foreground">
                                        <span className="text-terminal-green">
                                            $
                                        </span>{" "}
                                        display {imageFileName}
                                    </p>
                                </div>

                                {/* Certificate image */}
                                <a
                                    href={certificate.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${certificate.title} credential`}
                                    className="group flex min-h-[350px] flex-1 items-center justify-center p-6 sm:p-10"
                                >
                                    <div className="relative flex h-full w-full items-center justify-center">
                                        <motion.img
                                            key={certificate.image}
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: 0.1,
                                                duration: 0.3,
                                            }}
                                            src={certificate.image}
                                            alt={`${certificate.title} certificate`}
                                            className="max-h-[560px] w-auto max-w-full object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity group-hover:opacity-100">
                                            <span className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-card px-4 py-2 font-mono text-xs text-primary">
                                                Open Credential
                                                <OpenInNewIcon className="h-4 w-4" />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Carousel controls */}
                    <div className="mt-8 flex items-center justify-center gap-6">
                        <button
                            type="button"
                            onClick={prev}
                            aria-label="Previous certificate"
                            className="rounded-lg border border-border bg-card p-2 transition-colors hover:border-primary/50"
                        >
                            <ChevronLeftIcon className="h-5 w-5 text-primary" />
                        </button>

                        <div className="flex gap-2">
                            {certificates.map((item, index) => (
                                <button
                                    type="button"
                                    key={item.credentialId}
                                    onClick={() => setCurrent(index)}
                                    aria-label={`View ${item.title}`}
                                    aria-current={
                                        index === current ? "true" : undefined
                                    }
                                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                                        index === current
                                            ? "scale-125 bg-primary"
                                            : "bg-border hover:bg-muted-foreground"
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={next}
                            aria-label="Next certificate"
                            className="rounded-lg border border-border bg-card p-2 transition-colors hover:border-primary/50"
                        >
                            <ChevronRightIcon className="h-5 w-5 text-primary" />
                        </button>
                    </div>

                    <p className="mt-4 text-center font-mono text-xs text-muted-foreground">
                        [{current + 1}/{certificates.length}]
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;