import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Clock3, CalendarDays } from "lucide-react";

import styles from "./BlogsSection.module.css";

import gstReturnFiling from '../../../assets/images/home/gstReturnFiling.jpg'
import taxPlanning from '../../../assets/images/home/taxPlanning.jpg'
import statutoryAudit from '../../../assets/images/home/statutoryAudit.jpg'

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   BLOG DATA
   ========================================================= */

const blogs = [
    {
        id: 1,
        category: "GST",
        date: "18 July 2026",
        readTime: "6 min read",
        title: "Key Changes in GST Return Filing for 2026",
        description:
            "The GST framework is evolving again in 2026. Here is a plain-language look at the new return filing requirements, deadlines, and how they affect your business.",
        author: "CA O A Dewani",
        image: gstReturnFiling,
    },

    {
        id: 2,
        category: "Tax Planning",
        date: "30 June 2026",
        readTime: "8 min read",
        title: "A Practical Tax Planning Guide for Indian Startups",
        description:
            "Early-stage founders juggle product, hiring, and fundraising. Tax planning rarely gets attention until the consequences become difficult to ignore.",
        author: "CA O A Dewani",
        image:taxPlanning,
    },

    {
        id: 3,
        category: "Audit",
        date: "12 June 2026",
        readTime: "7 min read",
        title: "Statutory Audit Readiness: A Checklist for Finance Teams",
        description:
            "A statutory audit does not have to be stressful. With the right documentation rhythm, your finance team can stay prepared throughout the year.",
        author: "CA O A Dewani",
        image: statutoryAudit,
    },
];


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
   COMPONENT
   ========================================================= */

function BlogsSection() {
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);

    /* =========================================================
       BLOG CARD SCROLL ANIMATION
  
       Each card gets its own ScrollTrigger so the animation
       starts when the cards themselves enter the viewport.
       ========================================================= */

    useEffect(() => {
        const section = sectionRef.current;
        const cardsContainer = cardsRef.current;

        if (!section || !cardsContainer) return;

        const cards = cardsContainer.querySelectorAll(
            `.${styles.blogCard}`
        );

        if (!cards.length) return;

        const ctx = gsap.context(() => {
            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    {
                        y: 35,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,

                        duration: 0.65,

                        ease: "power2.out",

                        clearProps: "willChange",

                        scrollTrigger: {
                            trigger: card,
                            start: "top 88%",
                            once: true,
                        },
                    }
                );
            });
        }, section);

        return () => {
            ctx.revert();
        };
    }, []);


    return (
        <section
            ref={sectionRef}
            className={styles.blogsSection}
        >

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

                        <span>LATEST INSIGHTS</span>

                        <span className={styles.labelLine} />
                    </motion.div>


                    {/* Heading */}

                    <motion.h2
                        className={styles.heading}
                        variants={fadeUpVariants}
                    >
                        Practical guidance from{" "}
                        <span>our practice.</span>
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
                        Plain-language articles on tax, GST, audit, and
                        compliance to help you stay ahead of the rules
                        that affect your business.
                    </motion.p>

                </motion.div>


                {/* =================================================
            BLOG GRID
            ================================================= */}

                <div
                    ref={cardsRef}
                    className={styles.blogGrid}
                >

                    {blogs.map((blog) => (

                        <motion.article
                            key={blog.id}
                            className={styles.blogCard}

                            whileHover="hover"

                            initial="rest"
                            animate="rest"
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
                                        rest: {
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


                                    <span className={styles.metaSeparator}>
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

                                    <span className={styles.author}>
                                        {blog.author}
                                    </span>


                                    <a
                                        href={`/blog/${blog.id}`}
                                        className={styles.readMore}
                                    >
                                        <span>Read More</span>

                                        <motion.span
                                            className={styles.readMoreArrow}
                                            variants={{
                                                rest: {
                                                    x: 0,
                                                    y: 0,
                                                },

                                                hover: {
                                                    x: 3,
                                                    y: -3,
                                                },
                                            }}
                                        >
                                            <ArrowUpRight
                                                size={16}
                                                strokeWidth={1.7}
                                            />
                                        </motion.span>
                                    </a>

                                </div>

                            </div>

                        </motion.article>

                    ))}

                </div>


                {/* =================================================
            VIEW ALL BUTTON
            ================================================= */}

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
                        amount: 0.5,
                    }}

                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >

                    <motion.a
                        href="/blog"
                        className={styles.viewAllButton}

                        whileHover={{
                            y: -2,
                        }}

                        whileTap={{
                            scale: 0.97,
                        }}
                    >

                        <span>Read All Articles</span>

                        <motion.span
                            className={styles.viewAllArrow}
                            whileHover={{
                                x: 3,
                                y: -3,
                            }}
                        >
                            <ArrowUpRight
                                size={17}
                                strokeWidth={1.7}
                            />
                        </motion.span>

                    </motion.a>

                </motion.div>

            </div>
        </section>
    );
}

export default BlogsSection;