import { motion } from "framer-motion";

import styles from "./ServiceSingleHero.module.css";


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


/* =========================================================
   COMPONENT
   ========================================================= */

function ServiceSingleHero({
    serviceNumber,
    title,
    shortDescription,
}) {
    return (
        <section className={styles.serviceHero}>

            {/* =============================================
                BACKGROUND DECORATION
            ============================================= */}

            <div className={styles.backgroundGlow} />


            {/* Background Grid */}

            <div className={styles.gridOverlay} />


            {/* Decorative Dots */}

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


            {/* =============================================
                CONTENT
            ============================================= */}

            <div className={`container ${styles.container}`}>

                <motion.div
                    className={styles.heroContent}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    {/* Service Number */}

                    <motion.div
                        className={styles.serviceMeta}
                        variants={fadeUp}
                    >
                        <span className={styles.metaLine} />

                        <span>
                            SERVICE {serviceNumber}
                        </span>

                        <span className={styles.metaLine} />
                    </motion.div>


                    {/* Main Heading */}

                    <motion.h1
                        className={styles.heroTitle}
                        variants={fadeUp}
                    >
                        {title}
                    </motion.h1>


                    {/* Gold Accent */}

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
                            delay: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />


                    {/* Description */}

                    <motion.p
                        className={styles.heroDescription}
                        variants={fadeUp}
                    >
                        {shortDescription}
                    </motion.p>


                    {/* Bottom Line */}

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
                            delay: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />

                </motion.div>

            </div>

        </section>
    );
}


export default ServiceSingleHero;