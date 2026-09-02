import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";

import styles from "./ContactCTA.module.css";


/* =========================================================
   ANIMATION VARIANTS
   ========================================================= */

const containerVariants = {
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
        y: 20,
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

function ContactCTA() {
    const sectionRef = useRef(null);

    return (
        <section
            ref={sectionRef}
            className={styles.contactSection}
        >
            <div className={styles.ctaCard}>

                {/* =================================================
            DECORATIVE GRID
            ================================================= */}

                <div className={styles.gridPattern} />

                <div className={styles.glow} />


                {/* =================================================
            CONTENT
            ================================================= */}

                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.35,
                    }}
                >

                    {/* Heading */}

                    <motion.h2
                        className={styles.heading}
                        variants={fadeUpVariants}
                    >
                        Ready to put your
                        <br />
                        <span>compliance on autopilot?</span>
                    </motion.h2>


                    {/* Description */}

                    <motion.p
                        className={styles.description}
                        variants={fadeUpVariants}
                    >
                        Book a free 30-minute consultation. We will review
                        your current compliance position and outline exactly
                        how we can help — no obligation, no jargon.
                    </motion.p>


                    {/* =================================================
              ACTIONS
              ================================================= */}

                    <motion.div
                        className={styles.actions}
                        variants={fadeUpVariants}
                    >

                        {/* Consultation */}

                        <motion.a
                            href="/contact"
                            className={styles.primaryButton}

                            whileHover={{
                                y: -2,
                            }}

                            whileTap={{
                                scale: 0.97,
                            }}
                        >
                            <span>Book a Free Consultation</span>

                            <motion.span
                                className={styles.buttonArrow}
                                whileHover={{
                                    x: 3,
                                    y: -3,
                                }}
                            >
                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={1.8}
                                />
                            </motion.span>
                        </motion.a>


                        {/* Phone */}

                        <motion.a
                            href="tel:+919876543210"
                            className={styles.phoneButton}

                            whileHover={{
                                y: -2,
                            }}

                            whileTap={{
                                scale: 0.97,
                            }}
                        >
                            <span>+91 98765 43210</span>

                            <Phone
                                size={15}
                                strokeWidth={1.7}
                            />
                        </motion.a>

                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}

export default ContactCTA;