import { motion } from "framer-motion";

import {
    ArrowUpRight,
    MessageCircle,
    BriefcaseBusiness,
    Lightbulb,
} from "lucide-react";

import { Link } from "react-router-dom";

import styles from "./BlogEngagement.module.css";


/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.05,
        },
    },
};


const fadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 28,
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

function BlogEngagement() {
    return (
        <section className={styles.blogEngagement}>


            {/* =============================================
                BACKGROUND ELEMENTS
            ============================================= */}

            <div className={styles.backgroundGlow} />

            <div className={styles.gridOverlay} />


            {/* Decorative Dots */}

            {/* <div className={styles.decorativeDotsLeft}>
                {Array.from({ length: 30 }).map((_, index) => (
                    <span key={index} />
                ))}
            </div>


            <div className={styles.decorativeDotsRight}>
                {Array.from({ length: 30 }).map((_, index) => (
                    <span key={index} />
                ))}
            </div> */}


            <div className={`container ${styles.container}`}>

                <motion.div
                    className={styles.contentWrapper}

                    variants={containerVariants}

                    initial="hidden"

                    whileInView="visible"

                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                >


                    {/* =============================================
                        LEFT — CONTENT
                    ============================================= */}

                    <div className={styles.mainContent}>


                        {/* Eyebrow */}

                        <motion.div
                            className={styles.sectionLabel}

                            variants={fadeUpVariants}
                        >

                            <span className={styles.labelLine} />

                            <span>
                                EXPERT GUIDANCE
                            </span>

                        </motion.div>


                        {/* Heading */}

                        <motion.h2
                            className={styles.heading}

                            variants={fadeUpVariants}
                        >
                            Insights are valuable.

                            <span>
                                {" "}The right advice goes further.
                            </span>
                        </motion.h2>


                        {/* Accent */}

                        <motion.div
                            className={styles.headingAccent}

                            variants={fadeUpVariants}
                        />


                        {/* Description */}

                        <motion.p
                            className={styles.description}

                            variants={fadeUpVariants}
                        >
                            Our articles are designed to help you understand
                            important financial, tax, audit, and compliance
                            matters. When your situation requires a deeper
                            perspective, our professionals are here to help.
                        </motion.p>


                        {/* CTA */}

                        <motion.div
                            variants={fadeUpVariants}
                        >

                            <Link
                                to="/contact"
                                className={styles.primaryButton}
                            >

                                <span>
                                    Talk to Our Experts
                                </span>


                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={1.8}
                                />

                            </Link>

                        </motion.div>

                    </div>


                    {/* =============================================
                        RIGHT — VALUE CARDS
                    ============================================= */}

                    <motion.div
                        className={styles.insightCards}

                        variants={fadeUpVariants}
                    >


                        {/* Card 01 */}

                        <div className={styles.insightCard}>

                            <div className={styles.cardIcon}>
                                <Lightbulb
                                    size={21}
                                    strokeWidth={1.7}
                                />
                            </div>


                            <div>

                                <span className={styles.cardNumber}>
                                    01
                                </span>


                                <h3>
                                    Practical Insights
                                </h3>


                                <p>
                                    Clear perspectives on complex financial
                                    and compliance matters.
                                </p>

                            </div>

                        </div>


                        {/* Card 02 */}

                        <div className={styles.insightCard}>

                            <div className={styles.cardIcon}>
                                <MessageCircle
                                    size={21}
                                    strokeWidth={1.7}
                                />
                            </div>


                            <div>

                                <span className={styles.cardNumber}>
                                    02
                                </span>


                                <h3>
                                    Expert Perspective
                                </h3>


                                <p>
                                    Guidance shaped by professional experience
                                    and real business situations.
                                </p>

                            </div>

                        </div>


                        {/* Card 03 */}

                        <div className={styles.insightCard}>

                            <div className={styles.cardIcon}>
                                <BriefcaseBusiness
                                    size={21}
                                    strokeWidth={1.7}
                                />
                            </div>


                            <div>

                                <span className={styles.cardNumber}>
                                    03
                                </span>


                                <h3>
                                    Business-Focused Advice
                                </h3>


                                <p>
                                    Practical support aligned with your
                                    organisation's requirements.
                                </p>

                            </div>

                        </div>

                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
}


export default BlogEngagement;