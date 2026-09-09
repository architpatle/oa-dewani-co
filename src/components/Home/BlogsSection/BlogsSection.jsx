import { useState } from "react";

import { motion } from "framer-motion";

import {
    ArrowUpRight,
    ArrowDown,
    Clock3,
    CalendarDays,
} from "lucide-react";

import { Link } from "react-router-dom";

import blogsData from "../../../data/blogsData";

import styles from "./BlogsSection.module.css";


/* =========================================================
   HEADER ANIMATION
   ========================================================= */

const headerContainerVariants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};


const fadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 24,
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
   CARD ANIMATION
   ========================================================= */

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 35,
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

function BlogsSection({
    variant = "home",
}) {

    /* =====================================================
       BLOG DISPLAY LOGIC
       ===================================================== */

    const isHomePage = variant === "home";


    /*
       Home Page:
       Always show maximum 3 blogs.

       Main Blogs Page:
       Initially show maximum 6 blogs.
    */

    const [visibleCount, setVisibleCount] = useState(
        isHomePage
            ? 3
            : 6
    );


    const visibleBlogs = isHomePage
        ? blogsData.slice(0, 3)
        : blogsData.slice(0, visibleCount);


    const hasMoreBlogs =
        !isHomePage &&
        visibleCount < blogsData.length;


    /* =====================================================
       SHOW MORE
       ===================================================== */

    const handleShowMore = () => {
        setVisibleCount((previousCount) =>
            previousCount + 3
        );
    };


    return (
        <section className={styles.blogsSection}>


            {/* =================================================
                DECORATIVE ELEMENTS
            ================================================= */}

            <div className={styles.decorTop} />

            <div className={styles.decorBottom} />


            <div className={`container ${styles.container}`}>


                {/* =================================================
                    SECTION HEADER
                ================================================= */}

                <motion.div
                    className={styles.sectionHeader}
                    variants={headerContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                >


                    {/* Eyebrow */}

                    <motion.div
                        className={styles.sectionLabel}
                        variants={fadeUpVariants}
                    >
                        <span className={styles.labelLine} />

                        <span>
                            {isHomePage
                                ? "LATEST INSIGHTS"
                                : "OUR INSIGHTS"}
                        </span>

                        <span className={styles.labelLine} />
                    </motion.div>


                    {/* Heading */}

                    <motion.h2
                        className={styles.heading}
                        variants={fadeUpVariants}
                    >
                        {isHomePage ? (
                            <>
                                Practical guidance from{" "}
                                <span>our practice.</span>
                            </>
                        ) : (
                            <>
                                Insights that help you{" "}
                                <span>move forward.</span>
                            </>
                        )}
                    </motion.h2>


                    {/* Heading Accent */}

                    <motion.div
                        className={styles.headingAccent}
                        initial={{
                            scaleX: 0,
                            originX: 0,
                        }}
                        whileInView={{
                            scaleX: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />


                    {/* Description */}

                    <motion.p
                        className={styles.description}
                        variants={fadeUpVariants}
                    >
                        Plain-language articles on tax, GST, audit,
                        compliance, and business matters to help you
                        stay informed and make better decisions.
                    </motion.p>

                </motion.div>


                {/* =================================================
                    BLOG GRID
                ================================================= */}

                <div className={styles.blogGrid}>

                    {visibleBlogs.map((blog, index) => (

                        <motion.article
                            key={blog.id}
                            className={styles.blogCard}

                            variants={cardVariants}

                            initial="hidden"

                            whileInView="visible"

                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}

                            transition={{
                                delay: (index % 3) * 0.08,
                            }}

                            whileHover="hover"
                        >


                            {/* =================================================
                                IMAGE
                            ================================================= */}

                            <div className={styles.imageWrapper}>

                                <motion.img
                                    src={blog.image}

                                    alt={blog.title}

                                    className={styles.blogImage}

                                    variants={{
                                        hidden: {
                                            scale: 1,
                                        },

                                        visible: {
                                            scale: 1,
                                        },

                                        hover: {
                                            scale: 1.045,
                                        },
                                    }}

                                    transition={{
                                        duration: 0.65,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                />


                                {/* Category */}

                                <span className={styles.category}>
                                    {blog.category}
                                </span>

                            </div>


                            {/* =================================================
                                CONTENT
                            ================================================= */}

                            <div className={styles.cardBody}>


                                {/* Metadata */}

                                <div className={styles.meta}>

                                    <span className={styles.metaItem}>

                                        <CalendarDays
                                            size={13}
                                            strokeWidth={1.7}
                                        />

                                        {blog.date}

                                    </span>


                                    <span
                                        className={styles.metaSeparator}
                                    >
                                        •
                                    </span>


                                    <span className={styles.metaItem}>

                                        <Clock3
                                            size={13}
                                            strokeWidth={1.7}
                                        />

                                        {blog.readTime}

                                    </span>

                                </div>


                                {/* Title */}

                                <h3 className={styles.cardTitle}>
                                    {blog.title}
                                </h3>


                                {/* Description */}

                                <p className={styles.cardDescription}>
                                    {blog.description}
                                </p>


                                {/* =================================================
                                    CARD FOOTER
                                ================================================= */}

                                <div className={styles.cardFooter}>


                                    {/* Author */}

                                    <span className={styles.author}>
                                        {blog.author}
                                    </span>


                                    {/* Read More */}

                                    <Link
                                        to={`/blog/${blog.slug}`}
                                        className={styles.readMore}
                                    >

                                        <span>
                                            Read More
                                        </span>


                                        <motion.span
                                            className={
                                                styles.readMoreArrow
                                            }

                                            whileHover={{
                                                x: 3,
                                                y: -3,
                                            }}
                                        >

                                            <ArrowUpRight
                                                size={16}
                                                strokeWidth={1.7}
                                            />

                                        </motion.span>

                                    </Link>

                                </div>

                            </div>

                        </motion.article>

                    ))}

                </div>


                {/* =================================================
                    HOME PAGE BUTTON
                ================================================= */}

                {isHomePage && (

                    <motion.div
                        className={styles.viewAllWrapper}

                        initial={{
                            opacity: 0,
                            y: 20,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}

                        transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        <Link
                            to="/blogs"
                            className={styles.viewAllButton}
                        >

                            <span>
                                Read All Articles
                            </span>


                            <ArrowUpRight
                                size={17}
                                strokeWidth={1.7}
                            />

                        </Link>

                    </motion.div>

                )}


                {/* =================================================
                    SHOW MORE BUTTON
                ================================================= */}

                {hasMoreBlogs && (

                    <motion.div
                        className={styles.showMoreWrapper}

                        initial={{
                            opacity: 0,
                            y: 20,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}

                        transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        <motion.button
                            type="button"

                            className={styles.showMoreButton}

                            onClick={handleShowMore}

                            whileHover={{
                                y: -2,
                            }}

                            whileTap={{
                                scale: 0.97,
                            }}
                        >

                            <span>
                                Show More Articles
                            </span>


                            <ArrowDown
                                size={17}
                                strokeWidth={1.8}
                            />

                        </motion.button>

                    </motion.div>

                )}

            </div>

        </section>
    );
}


export default BlogsSection;