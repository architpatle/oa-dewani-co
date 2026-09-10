import { motion } from "framer-motion";

import {
    ArrowUpRight,
    CalendarDays,
    Clock3,
    UserRound,
    Check,
} from "lucide-react";

import { Link } from "react-router-dom";

import styles from "./BlogSingleContent.module.css";


/* =========================================================
   ANIMATION VARIANTS
   ========================================================= */

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

function BlogSingleContent({
    blog,
    blogs,
}) {

    /* =====================================================
       RECOMMENDED BLOGS
    ===================================================== */

    const recommendedBlogs = blogs
        .filter(
            (item) => item.slug !== blog.slug
        )
        .slice(0, 3);


    /* =====================================================
       AUTHOR INITIALS
    ===================================================== */

    const authorInitials = blog.author
        ?.split(" ")
        .filter((word) => word.length > 0)
        .map((word) => word[0])
        .slice(0, 2)
        .join("");


    return (
        <section className={styles.blogContentSection}>

            <div className={`container ${styles.container}`}>

                {/* =================================================
                    MAIN CONTENT LAYOUT
                ================================================= */}

                <div className={styles.contentLayout}>


                    {/* =============================================
                        LEFT — ARTICLE CONTENT
                    ============================================= */}

                    <main className={styles.articleContent}>


                        {/* =============================================
                            FEATURED IMAGE
                        ============================================= */}

                        {blog.image && (

                            <motion.div
                                className={styles.featuredImageWrapper}

                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}

                                viewport={{
                                    once: true,
                                    amount: 0.15,
                                }}

                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >

                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className={styles.featuredImage}
                                />

                            </motion.div>

                        )}


                        {/* =============================================
                            ARTICLE BODY
                        ============================================= */}

                        <motion.article
                            className={styles.articleBody}

                            variants={{
                                hidden: {},

                                visible: {
                                    transition: {
                                        staggerChildren: 0.1,
                                    },
                                },
                            }}

                            initial="hidden"

                            whileInView="visible"

                            viewport={{
                                once: true,
                                amount: 0.05,
                            }}
                        >


                            {/* =============================================
                                INTRODUCTION
                            ============================================= */}

                            {blog.content?.map(
                                (paragraph, index) => (

                                    <motion.p
                                        key={index}
                                        className={
                                            index === 0
                                                ? styles.introduction
                                                : styles.contentParagraph
                                        }

                                        variants={fadeUpVariants}
                                    >
                                        {paragraph}
                                    </motion.p>

                                )
                            )}


                            {/* =============================================
                                ARTICLE SECTIONS
                            ============================================= */}

                            {blog.sections?.map(
                                (section, index) => (

                                    <motion.section
                                        key={`${section.heading}-${index}`}

                                        className={styles.articleSection}

                                        variants={fadeUpVariants}
                                    >

                                        {/* Heading */}

                                        {section.heading && (

                                            <h2>
                                                {section.heading}
                                            </h2>

                                        )}


                                        {/* Paragraphs */}

                                        {section.paragraphs?.map(
                                            (
                                                paragraph,
                                                paragraphIndex
                                            ) => (

                                                <p
                                                    key={paragraphIndex}
                                                >
                                                    {paragraph}
                                                </p>

                                            )
                                        )}


                                        {/* Points */}

                                        {section.points?.length > 0 && (

                                            <ul
                                                className={
                                                    styles.articleList
                                                }
                                            >

                                                {section.points.map(
                                                    (
                                                        point,
                                                        pointIndex
                                                    ) => (

                                                        <li
                                                            key={pointIndex}
                                                        >

                                                            <span
                                                                className={
                                                                    styles.listIcon
                                                                }
                                                            >

                                                                <Check
                                                                    size={14}
                                                                    strokeWidth={2.4}
                                                                />

                                                            </span>


                                                            <span>
                                                                {point}
                                                            </span>

                                                        </li>

                                                    )
                                                )}

                                            </ul>

                                        )}

                                    </motion.section>

                                )
                            )}


                            {/* =============================================
                                CONCLUSION
                            ============================================= */}

                            {blog.conclusion && (

                                <motion.section
                                    className={
                                        `${styles.articleSection} ${styles.conclusionSection}`
                                    }

                                    variants={fadeUpVariants}
                                >

                                    <span
                                        className={
                                            styles.conclusionLabel
                                        }
                                    >
                                        FINAL THOUGHTS
                                    </span>


                                    <h2>
                                        {blog.conclusion.heading}
                                    </h2>


                                    <p>
                                        {blog.conclusion.text}
                                    </p>

                                </motion.section>

                            )}

                        </motion.article>

                    </main>


                    {/* =============================================
                        RIGHT — STICKY SIDEBAR
                    ============================================= */}

                    <aside className={styles.sidebar}>

                        <div className={styles.sidebarInner}>


                            {/* =============================================
                                AUTHOR CARD
                            ============================================= */}

                            <div className={styles.authorCard}>


                                <div
                                    className={styles.authorAvatar}
                                >
                                    <span>
                                        {authorInitials}
                                    </span>
                                </div>


                                <div
                                    className={
                                        styles.authorDetails
                                    }
                                >

                                    <span
                                        className={
                                            styles.authorLabel
                                        }
                                    >
                                        WRITTEN BY
                                    </span>


                                    <h3>
                                        {blog.author}
                                    </h3>


                                    <span
                                        className={
                                            styles.authorRole
                                        }
                                    >
                                        {blog.authorRole}
                                    </span>


                                    <p>
                                        {blog.authorDescription}
                                    </p>

                                </div>

                            </div>


                            {/* =============================================
                                DIVIDER
                            ============================================= */}

                            <div className={styles.sidebarDivider} />


                            {/* =============================================
                                BLOG INFORMATION
                            ============================================= */}

                            <div className={styles.sidebarMeta}>


                                <div
                                    className={
                                        styles.sidebarMetaItem
                                    }
                                >

                                    <CalendarDays
                                        size={16}
                                        strokeWidth={1.7}
                                    />

                                    <div>

                                        <span
                                            className={
                                                styles.metaLabel
                                            }
                                        >
                                            PUBLISHED
                                        </span>

                                        <strong>
                                            {blog.date}
                                        </strong>

                                    </div>

                                </div>


                                <div
                                    className={
                                        styles.sidebarMetaItem
                                    }
                                >

                                    <Clock3
                                        size={16}
                                        strokeWidth={1.7}
                                    />

                                    <div>

                                        <span
                                            className={
                                                styles.metaLabel
                                            }
                                        >
                                            READING TIME
                                        </span>

                                        <strong>
                                            {blog.readTime}
                                        </strong>

                                    </div>

                                </div>


                                <div
                                    className={
                                        styles.sidebarMetaItem
                                    }
                                >

                                    <UserRound
                                        size={16}
                                        strokeWidth={1.7}
                                    />

                                    <div>

                                        <span
                                            className={
                                                styles.metaLabel
                                            }
                                        >
                                            CATEGORY
                                        </span>

                                        <strong>
                                            {blog.category}
                                        </strong>

                                    </div>

                                </div>

                            </div>


                            {/* =============================================
                                CTA CARD
                            ============================================= */}

                            <Link
                                to="/contact"
                                className={styles.ctaCard}
                            >

                                <div
                                    className={styles.ctaContent}
                                >

                                    <span
                                        className={styles.ctaEyebrow}
                                    >
                                        NEED EXPERT GUIDANCE?
                                    </span>


                                    <h3>
                                        Need an expert's
                                        <span> perspective?</span>
                                    </h3>


                                    <p>
                                        Get practical guidance tailored
                                        to your business and financial
                                        requirements.
                                    </p>

                                </div>


                                <div
                                    className={styles.ctaArrow}
                                >
                                    <ArrowUpRight
                                        size={18}
                                        strokeWidth={1.8}
                                    />
                                </div>

                            </Link>

                        </div>

                    </aside>

                </div>


                {/* =================================================
                    RECOMMENDED BLOGS
                ================================================= */}

                {recommendedBlogs.length > 0 && (

                    <section
                        className={styles.recommendedSection}
                    >


                        {/* =============================================
                            HEADER
                        ============================================= */}

                        <motion.div
                            className={styles.recommendedHeader}

                            initial={{
                                opacity: 0,
                                y: 25,
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
                                duration: 0.65,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >

                            <div className={styles.sectionLabel}>

                                <span className={styles.labelLine} />

                                <span>
                                    CONTINUE READING
                                </span>

                                <span className={styles.labelLine} />

                            </div>


                            <h2>
                                More insights from
                                <span> our practice.</span>
                            </h2>


                            <div
                                className={styles.headingAccent}
                            />

                        </motion.div>


                        {/* =============================================
                            BLOG GRID
                        ============================================= */}

                        <div
                            className={styles.recommendedGrid}
                        >

                            {recommendedBlogs.map(
                                (recommendedBlog, index) => (

                                    <motion.article
                                        key={recommendedBlog.id}

                                        className={styles.blogCard}

                                        variants={cardVariants}

                                        initial="hidden"

                                        whileInView="visible"

                                        viewport={{
                                            once: true,
                                            amount: 0.1,
                                        }}

                                        transition={{
                                            delay: index * 0.08,
                                        }}

                                        whileHover="hover"
                                    >


                                        {/* IMAGE */}

                                        <div
                                            className={
                                                styles.imageWrapper
                                            }
                                        >

                                            <motion.img
                                                src={
                                                    recommendedBlog.image
                                                }

                                                alt={
                                                    recommendedBlog.title
                                                }

                                                className={
                                                    styles.blogImage
                                                }

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
                                                    ease: [
                                                        0.22,
                                                        1,
                                                        0.36,
                                                        1,
                                                    ],
                                                }}
                                            />


                                            <span
                                                className={
                                                    styles.category
                                                }
                                            >
                                                {
                                                    recommendedBlog.category
                                                }
                                            </span>

                                        </div>


                                        {/* CONTENT */}

                                        <div
                                            className={
                                                styles.cardBody
                                            }
                                        >


                                            {/* META */}

                                            <div
                                                className={styles.meta}
                                            >

                                                <span
                                                    className={
                                                        styles.metaItem
                                                    }
                                                >

                                                    <CalendarDays
                                                        size={13}
                                                        strokeWidth={1.7}
                                                    />

                                                    {
                                                        recommendedBlog.date
                                                    }

                                                </span>


                                                <span
                                                    className={
                                                        styles.metaSeparator
                                                    }
                                                >
                                                    •
                                                </span>


                                                <span
                                                    className={
                                                        styles.metaItem
                                                    }
                                                >

                                                    <Clock3
                                                        size={13}
                                                        strokeWidth={1.7}
                                                    />

                                                    {
                                                        recommendedBlog.readTime
                                                    }

                                                </span>

                                            </div>


                                            {/* TITLE */}

                                            <h3
                                                className={
                                                    styles.cardTitle
                                                }
                                            >
                                                {
                                                    recommendedBlog.title
                                                }
                                            </h3>


                                            {/* DESCRIPTION */}

                                            <p
                                                className={
                                                    styles.cardDescription
                                                }
                                            >
                                                {
                                                    recommendedBlog.excerpt
                                                }
                                            </p>


                                            {/* FOOTER */}

                                            <div
                                                className={
                                                    styles.cardFooter
                                                }
                                            >

                                                <span
                                                    className={
                                                        styles.cardAuthor
                                                    }
                                                >
                                                    {
                                                        recommendedBlog.author
                                                    }
                                                </span>


                                                <Link
                                                    to={`/blog/${recommendedBlog.slug}`}

                                                    className={
                                                        styles.readMore
                                                    }
                                                >

                                                    <span>
                                                        Read More
                                                    </span>


                                                    <ArrowUpRight
                                                        size={16}
                                                        strokeWidth={1.7}
                                                    />

                                                </Link>

                                            </div>

                                        </div>

                                    </motion.article>

                                )
                            )}

                        </div>

                    </section>

                )}

            </div>

        </section>
    );
}


export default BlogSingleContent;