import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    ChevronRight,
} from "lucide-react";

import styles from "./ServicesHero.module.css";


/* =========================================================
   ANIMATION VARIANTS
   ========================================================= */

const containerVariants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};


const fadeUp = {
    hidden: {
        opacity: 0,
        y: 28,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};


const ServicesHero = () => {
    return (
        <section className={styles.servicesHero}>

            {/* =================================================
          BACKGROUND DECORATION
          ================================================= */}

            <div className={styles.backgroundGlow} />

            <div className={styles.decorativeDotsLeft}>
                {Array.from({ length: 30 }).map((_, index) => (
                    <span key={index} />
                ))}
            </div>

            <div className={styles.decorativeDotsRight}>
                {Array.from({ length: 30 }).map((_, index) => (
                    <span key={index} />
                ))}
            </div>


            <div className={`container ${styles.container}`}>

                {/* =================================================
            BREADCRUMB
            ================================================= */}

                {/* <motion.div
                    className={styles.breadcrumb}
                    initial={{
                        opacity: 0,
                        y: 12,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <a href="/">
                        Home
                    </a>

                    <ChevronRight size={16} />

                    <span>
                        About
                    </span>
                </motion.div> */}


                {/* =================================================
            HERO CONTENT
            ================================================= */}

                <motion.div
                    className={styles.heroContent}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    {/* Eyebrow */}

                    <motion.div
                        className={styles.sectionLabel}
                        variants={fadeUp}
                    >
                        <span className={styles.labelLine} />

                        <span>
                            OUR SERVICES
                        </span>

                        <span className={styles.labelLine} />
                    </motion.div>


                    {/* Heading */}

                    <motion.h1
                        className={styles.heroTitle}
                        variants={fadeUp}
                    >
                        Financial expertise for
                        <span>
                            every stage of your journey
                        </span>
                    </motion.h1>


                    {/* Description */}

                    <motion.p
                        className={styles.heroDescription}
                        variants={fadeUp}
                    >
                        From compliance and taxation to strategic advisory, we provide comprehensive financial solutions designed to help your business operate with confidence and grow with clarity.

                    </motion.p>


                    {/* Accent */}

                    <motion.div
                        className={styles.headingAccent}
                        initial={{
                            scaleX: 0,
                        }}
                        animate={{
                            scaleX: 1,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />


                    {/* CTA Buttons */}

                    <motion.div
                        className={styles.heroActions}
                        variants={fadeUp}
                    >

                        <motion.a
                            href="/contact"
                            className={`${styles.heroButton} ${styles.primaryButton}`}
                            whileHover={{
                                y: -3,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                        >
                            <span>
                                Talk to Our Experts
                            </span>

                            <ArrowUpRight size={18} />
                        </motion.a>


                        <motion.a
                            href="/services"
                            className={`${styles.heroButton} ${styles.secondaryButton}`}
                            whileHover={{
                                y: -3,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                        >
                            <span>
                                Explore Our Services
                            </span>

                            <ArrowRight size={17} />
                        </motion.a>

                    </motion.div>

                </motion.div>


                {/* =================================================
            BOTTOM DECORATIVE LINE
            ================================================= */}

                <motion.div
                    className={styles.bottomLine}
                    initial={{
                        scaleX: 0,
                    }}
                    animate={{
                        scaleX: 1,
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />

            </div>

        </section>
    );
};


export default ServicesHero;