import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    Check,
    ArrowUpRight,
    Clock3,
    BadgeCheck,
    ReceiptText,
    Users,
} from "lucide-react";

import styles from "./ServiceEngagement.module.css";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   DATA
   ========================================================= */

const engagementPoints = [
    "Clear scope and expectations from the outset",
    "A dedicated point of contact throughout your engagement",
    "Structured compliance tracking and timely updates",
    "Proactive communication before important deadlines",
];


const snapshotItems = [
    {
        label: "Response approach",
        value: "Timely & responsive",
        icon: Clock3,
    },
    {
        label: "Service delivery",
        value: "Structured & accountable",
        icon: BadgeCheck,
    },
    {
        label: "Fee approach",
        value: "Clear & transparent",
        icon: ReceiptText,
    },
    {
        label: "Client relationship",
        value: "Long-term partnership",
        icon: Users,
    },
];


/* =========================================================
   FRAMER MOTION VARIANTS
   ========================================================= */

const containerVariants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};


const fadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 26,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};


/* =========================================================
   COMPONENT
   ========================================================= */

function ServiceEngagement() {
    const sectionRef = useRef(null);
    const snapshotRef = useRef(null);


    /* =========================================================
       SNAPSHOT CARD ANIMATION
       ========================================================= */

    useEffect(() => {
        const section = sectionRef.current;
        const snapshot = snapshotRef.current;

        if (!section || !snapshot) return;

        const rows = snapshot.querySelectorAll(
            `.${styles.snapshotItem}`
        );

        const ctx = gsap.context(() => {
            gsap.set(rows, {
                opacity: 0,
                x: 24,
            });

            gsap.to(rows, {
                opacity: 1,
                x: 0,

                duration: 0.55,

                stagger: 0.1,

                ease: "power2.out",

                scrollTrigger: {
                    trigger: snapshot,
                    start: "top 82%",
                    once: true,
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);


    return (
        <section
            ref={sectionRef}
            className={styles.serviceEngagement}
        >

            {/* =============================================
                BACKGROUND DECORATION
            ============================================= */}

            <div className={styles.backgroundGlow} />

            <div className={styles.gridPattern} />


            <div className={`container ${styles.container}`}>

                <div className={styles.contentGrid}>

                    {/* =============================================
                        LEFT CONTENT
                    ============================================= */}

                    <motion.div
                        className={styles.leftContent}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                    >

                        {/* Label */}

                        <motion.div
                            className={styles.sectionLabel}
                            variants={fadeUpVariants}
                        >
                            <span className={styles.labelLine} />

                            <span>
                                HOW WE WORK
                            </span>
                        </motion.div>


                        {/* Heading */}

                        <motion.h2
                            className={styles.heading}
                            variants={fadeUpVariants}
                        >
                            A structured engagement,
                            <span>
                                {" "}every step of the way.
                            </span>
                        </motion.h2>


                        {/* Description */}

                        <motion.p
                            className={styles.description}
                            variants={fadeUpVariants}
                        >
                            Whatever service you choose, our approach remains
                            focused on clarity, accountability, and responsive
                            professional support — giving you confidence
                            throughout every stage of the engagement.
                        </motion.p>


                        {/* Engagement Points */}

                        <motion.div
                            className={styles.pointsList}
                            variants={fadeUpVariants}
                        >

                            {engagementPoints.map((point) => (
                                <div
                                    key={point}
                                    className={styles.pointItem}
                                >

                                    <span className={styles.pointIcon}>
                                        <Check size={14} />
                                    </span>

                                    <span>
                                        {point}
                                    </span>

                                </div>
                            ))}

                        </motion.div>


                        {/* CTA */}

                        <motion.a
                            href="/contact"
                            className={styles.ctaButton}
                            variants={fadeUpVariants}
                            whileHover={{
                                y: -3,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                        >

                            <span>
                                Discuss Your Requirements
                            </span>

                            <ArrowUpRight size={18} />

                        </motion.a>

                    </motion.div>


                    {/* =============================================
                        RIGHT SNAPSHOT
                    ============================================= */}

                    <div
                        ref={snapshotRef}
                        className={styles.snapshotWrapper}
                    >

                        {/* Decorative number */}

                        {/* <span className={styles.backgroundNumber}>
                            01
                        </span> */}


                        <div className={styles.snapshotCard}>

                            {/* Card Header */}

                            <div className={styles.snapshotHeader}>

                                <div>
                                    <span className={styles.snapshotEyebrow}>
                                        THE OAD APPROACH
                                    </span>

                                    <h3>
                                        Service engagement snapshot
                                    </h3>
                                </div>


                                <span className={styles.headerAccent} />

                            </div>


                            {/* Snapshot Items */}

                            <div className={styles.snapshotList}>

                                {snapshotItems.map((item, index) => {

                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.label}
                                            className={styles.snapshotItem}
                                        >

                                            {/* Number */}

                                            <span className={styles.itemNumber}>
                                                0{index + 1}
                                            </span>


                                            {/* Icon */}

                                            <div className={styles.itemIcon}>
                                                <Icon
                                                    size={19}
                                                    strokeWidth={1.7}
                                                />
                                            </div>


                                            {/* Label */}

                                            <span className={styles.itemLabel}>
                                                {item.label}
                                            </span>


                                            {/* Value */}

                                            <strong className={styles.itemValue}>
                                                {item.value}
                                            </strong>

                                        </div>
                                    );
                                })}

                            </div>


                            {/* Bottom Statement */}

                            <div className={styles.snapshotFooter}>

                                <span className={styles.footerLine} />

                                <p>
                                    Built around clarity, consistency,
                                    and long-term professional relationships.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}


export default ServiceEngagement;