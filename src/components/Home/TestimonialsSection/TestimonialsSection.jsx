import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

import styles from "./TestimonialsSection.module.css";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   TESTIMONIAL DATA
   ========================================================= */

const testimonials = [
    {
        quote:
            "O A Dewani & Co. transformed how we approach compliance. What used to be a year-end scramble is now a seamless, planned process. Their proactive approach has saved us both time and money.",
        name: "Rajesh Mehta",
        designation: "Managing Director",
        company: "Mehta Industries Pvt. Ltd.",
        initial: "R",
    },
    {
        quote:
            "As a startup, we needed more than an accountant — we needed a financial partner. Their strategic guidance gave us the clarity and confidence to raise our first institutional round.",
        name: "Priya Sharma",
        designation: "Founder & CEO",
        company: "NexusTech Solutions",
        initial: "P",
    },
    {
        quote:
            "The level of ownership they take is exceptional. Whether it is a routine GST filing or a complex tax assessment, the team handles it with the same precision and urgency.",
        name: "Amit Patel",
        designation: "Director",
        company: "Patel Retail Group",
        initial: "A",
    },
    {
        quote:
            "Their team brings a rare combination of technical expertise and genuine business understanding. We always know exactly where we stand financially.",
        name: "Neha Kapoor",
        designation: "CFO",
        company: "Kapoor Enterprises",
        initial: "N",
    },
    {
        quote:
            "From taxation to strategic planning, their advice has consistently helped us make better decisions and avoid unnecessary financial risks.",
        name: "Vikram Shah",
        designation: "Founder",
        company: "Shah Ventures",
        initial: "V",
    },
    {
        quote:
            "What stands out is their responsiveness and attention to detail. They feel like an extension of our own team rather than an external accounting firm.",
        name: "Ananya Rao",
        designation: "Director",
        company: "Rao Technologies",
        initial: "A",
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

function TestimonialsSection() {
    const sectionRef = useRef(null);
    const carouselRef = useRef(null);
    const trackRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    const [isPaused, setIsPaused] = useState(false);

    const maxIndex = Math.max(
        testimonials.length - visibleCards,
        0
    );


    /* =========================================================
       RESPONSIVE CARD COUNT
       ========================================================= */

    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth <= 768) {
                setVisibleCards(1);
            } else {
                setVisibleCards(3);
            }
        };

        updateVisibleCards();

        window.addEventListener(
            "resize",
            updateVisibleCards
        );

        return () => {
            window.removeEventListener(
                "resize",
                updateVisibleCards
            );
        };
    }, []);


    /* =========================================================
       KEEP INDEX VALID WHEN SCREEN SIZE CHANGES
       ========================================================= */

    useEffect(() => {
        setCurrentIndex((previousIndex) =>
            Math.min(
                previousIndex,
                Math.max(
                    testimonials.length - visibleCards,
                    0
                )
            )
        );
    }, [visibleCards]);


    /* =========================================================
       CAROUSEL POSITION
       ========================================================= */

    useEffect(() => {
        const track = trackRef.current;
        const carousel = carouselRef.current;

        if (!track || !carousel) return;

        const updatePosition = () => {
            const firstCard = track.children[0];

            if (!firstCard) return;

            const cardWidth =
                firstCard.getBoundingClientRect().width;

            const computedStyle =
                window.getComputedStyle(track);

            const gap =
                parseFloat(computedStyle.columnGap) || 0;

            const offset =
                currentIndex * (cardWidth + gap);

            track.style.transform =
                `translate3d(-${offset}px, 0, 0)`;
        };

        updatePosition();

        const resizeObserver =
            new ResizeObserver(updatePosition);

        resizeObserver.observe(carousel);

        return () => {
            resizeObserver.disconnect();
        };
    }, [currentIndex, visibleCards]);


    /* =========================================================
       AUTOPLAY
       ========================================================= */

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((previousIndex) => {
                if (previousIndex >= maxIndex) {
                    return 0;
                }

                return previousIndex + 1;
            });
        }, 4500);

        return () => clearInterval(interval);
    }, [isPaused, maxIndex]);


    /* =========================================================
       MANUAL NAVIGATION
       ========================================================= */

    const goToPrevious = () => {
        setCurrentIndex((previousIndex) => {
            if (previousIndex <= 0) {
                return maxIndex;
            }

            return previousIndex - 1;
        });
    };


    const goToNext = () => {
        setCurrentIndex((previousIndex) => {
            if (previousIndex >= maxIndex) {
                return 0;
            }

            return previousIndex + 1;
        });
    };


    /* =========================================================
       GSAP CARD ENTRANCE ANIMATION
       ========================================================= */

    useEffect(() => {
        const section = sectionRef.current;
        const carousel = carouselRef.current;

        if (!section || !carousel) return;

        const cards = carousel.querySelectorAll(
            `.${styles.testimonialCard}`
        );

        if (!cards.length) return;

        const ctx = gsap.context(() => {
            gsap.set(cards, {
                y: 35,
                opacity: 0,
                willChange: "transform, opacity",
            });

            gsap.to(cards, {
                y: 0,
                opacity: 1,

                duration: 0.65,

                stagger: {
                    each: 0.08,
                },

                ease: "power2.out",

                clearProps: "willChange",

                scrollTrigger: {
                    trigger: carousel,
                    start: "top 85%",
                    once: true,
                },
            });
        }, section);

        return () => {
            ctx.revert();
        };
    }, []);


    return (
        <section
            ref={sectionRef}
            className={styles.testimonialsSection}
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

                        <span>CLIENT VOICES</span>

                        <span className={styles.labelLine} />
                    </motion.div>


                    {/* Main Heading */}

                    <motion.h2
                        className={styles.heading}
                        variants={fadeUpVariants}
                    >
                        Trusted by founders, CFOs,{" "}
                        <span>and business leaders.</span>
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
                        We measure our success by the confidence we create
                        for our clients. Here is what businesses have to say
                        about working with us.
                    </motion.p>

                </motion.div>


                {/* =================================================
            CAROUSEL
            ================================================= */}

                <div
                    className={styles.carouselArea}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={() => setIsPaused(false)}
                >

                    {/* =================================================
              VIEWPORT
              ================================================= */}

                    <div
                        ref={carouselRef}
                        className={styles.carouselViewport}
                    >

                        <div
                            ref={trackRef}
                            className={styles.testimonialsTrack}
                        >

                            {testimonials.map((testimonial) => (

                                <motion.article
                                    key={testimonial.name}
                                    className={styles.testimonialCard}
                                    whileHover={{
                                        y: -5,

                                        transition: {
                                            duration: 0.35,
                                            ease: [0.22, 1, 0.36, 1],
                                        },
                                    }}
                                >

                                    {/* =================================================
                      QUOTE ICON
                      ================================================= */}

                                    <div className={styles.quoteIcon}>
                                        <Quote
                                            size={46}
                                            strokeWidth={1.6}
                                        />
                                    </div>


                                    {/* =================================================
                      QUOTE
                      ================================================= */}

                                    <p className={styles.quote}>
                                        {testimonial.quote}
                                    </p>


                                    {/* =================================================
                      DIVIDER
                      ================================================= */}

                                    <span
                                        className={styles.cardDivider}
                                    />


                                    {/* =================================================
                      AUTHOR
                      ================================================= */}

                                    <div className={styles.author}>

                                        <div className={styles.authorInitial}>
                                            {testimonial.initial}
                                        </div>

                                        <div className={styles.authorInfo}>

                                            <h3>
                                                {testimonial.name}
                                            </h3>

                                            <p>
                                                {testimonial.designation},{" "}
                                                {testimonial.company}
                                            </p>

                                        </div>

                                    </div>

                                </motion.article>

                            ))}

                        </div>

                    </div>


                    {/* =================================================
              CAROUSEL CONTROLS
              ================================================= */}

                    <div className={styles.carouselControls}>

                        {/* Previous */}

                        <motion.button
                            type="button"
                            className={styles.carouselButton}
                            onClick={goToPrevious}
                            whileHover={{
                                y: -2,
                            }}
                            whileTap={{
                                scale: 0.94,
                            }}
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft
                                size={18}
                                strokeWidth={1.7}
                            />
                        </motion.button>


                        {/* Pagination */}

                        <div
                            className={styles.pagination}
                            aria-label="Testimonial pagination"
                        >
                            {Array.from({
                                length: maxIndex + 1,
                            }).map((_, index) => (

                                <button
                                    key={index}
                                    type="button"
                                    className={`${styles.paginationDot} ${currentIndex === index
                                            ? styles.paginationDotActive
                                            : ""
                                        }`}
                                    onClick={() =>
                                        setCurrentIndex(index)
                                    }
                                    aria-label={`Go to testimonial ${index + 1
                                        }`}
                                    aria-current={
                                        currentIndex === index
                                            ? "true"
                                            : undefined
                                    }
                                />

                            ))}
                        </div>


                        {/* Next */}

                        <motion.button
                            type="button"
                            className={styles.carouselButton}
                            onClick={goToNext}
                            whileHover={{
                                y: -2,
                            }}
                            whileTap={{
                                scale: 0.94,
                            }}
                            aria-label="Next testimonial"
                        >
                            <ArrowRight
                                size={18}
                                strokeWidth={1.7}
                            />
                        </motion.button>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default TestimonialsSection;