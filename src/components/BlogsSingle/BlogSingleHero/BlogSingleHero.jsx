import { motion } from "framer-motion";

import {
    UserRound,
    CalendarDays,
    Clock3,
} from "lucide-react";

import styles from "./BlogSingleHero.module.css";


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

function BlogSingleHero({
    category,
    title,
    author,
    date,
    readTime,
}) {
    return (
        <section className={styles.blogHero}>

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

                    {/* =========================================
                        EYEBROW
                    ========================================= */}

                    <motion.div
                        className={styles.blogMeta}
                        variants={fadeUp}
                    >
                        <span className={styles.metaLine} />

                        <span>
                            {category}
                        </span>

                        <span className={styles.metaLine} />
                    </motion.div>


                    {/* =========================================
                        MAIN HEADING
                    ========================================= */}

                    <motion.h1
                        className={styles.heroTitle}
                        variants={fadeUp}
                    >
                        {title}
                    </motion.h1>


                    {/* =========================================
                        GOLD ACCENT
                    ========================================= */}

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


                    {/* =========================================
                        BLOG INFORMATION
                    ========================================= */}

                    <motion.div
                        className={styles.blogDetails}
                        variants={fadeUp}
                    >

                        {/* AUTHOR */}

                        <div className={styles.detailItem}>

                            <UserRound
                                size={16}
                                strokeWidth={1.7}
                            />

                            <span>
                                {author}
                            </span>

                        </div>


                        <span className={styles.detailDivider} />


                        {/* DATE */}

                        <div className={styles.detailItem}>

                            <CalendarDays
                                size={16}
                                strokeWidth={1.7}
                            />

                            <span>
                                {date}
                            </span>

                        </div>


                        <span className={styles.detailDivider} />


                        {/* READ TIME */}

                        <div className={styles.detailItem}>

                            <Clock3
                                size={16}
                                strokeWidth={1.7}
                            />

                            <span>
                                {readTime}
                            </span>

                        </div>

                    </motion.div>


                    {/* =========================================
                        BOTTOM DECORATIVE LINE
                    ========================================= */}

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
                            delay: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />

                </motion.div>

            </div>

        </section>
    );
}


export default BlogSingleHero;