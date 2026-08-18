import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Gem,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

import styles from "./AboutSection.module.css";

import aboutMain from "../../../assets/images/home/about-main.png";
import aboutSecondary from "../../../assets/images/home/about-secondary.png";


/* =========================================================
   ANIMATION VARIANTS
   ========================================================= */

const sectionReveal = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const imageReveal = {
  hidden: {
    opacity: 0,
    x: -70,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const badgeReveal = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    x: -25,
  },

  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const secondaryImageReveal = {
  hidden: {
    opacity: 0,
    y: 35,
    x: 25,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      delay: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const contentReveal = {
  hidden: {
    opacity: 0,
    x: 60,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const headingReveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const textReveal = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const cardContainer = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.12,
    },
  },
};


const cardReveal = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const ctaReveal = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =========================================================
   DATA
   ========================================================= */

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver financial solutions that simplify compliance, unlock opportunity, and build enduring client confidence.",
  },

  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the most trusted financial advisory partner for forward-thinking businesses across India.",
  },

  {
    icon: Gem,
    title: "Core Values",
    description:
      "Integrity, precision, and a relentless commitment to client success guide every engagement.",
  },
];


/* =========================================================
   COMPONENT
   ========================================================= */

function AboutSection() {
  return (
    <motion.section
      className={styles.aboutSection}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
    >
      <div className={`container ${styles.container}`}>

        {/* =====================================================
            SECTION LABEL
            ===================================================== */}

        <motion.div
          className={styles.sectionLabel}
          variants={textReveal}
        >
          <span className={styles.labelLine} />

          <span>ABOUT THE FIRM</span>
        </motion.div>


        {/* =====================================================
            MAIN GRID
            ===================================================== */}

        <div className={styles.aboutGrid}>

          {/* ===================================================
              LEFT — IMAGE COMPOSITION
              =================================================== */}

          <div className={styles.visualColumn}>

            {/* Main Image */}

            <motion.div
              className={styles.mainImageWrapper}
              variants={imageReveal}
            >
              <img
                src={aboutMain}
                alt="O A Dewani & Co. professionals discussing financial documents"
                className={styles.mainImage}
              />
            </motion.div>


            {/* Experience Badge */}

            <motion.div
              className={styles.experienceBadge}
              variants={badgeReveal}
            >
              <div className={styles.badgeIcon}>
                <ShieldCheck
                  size={24}
                  strokeWidth={1.7}
                />
              </div>

              <span className={styles.experienceNumber}>
                15+
              </span>

              <span className={styles.experienceText}>
                YEARS OF
                <br />
                EXCELLENCE
              </span>
            </motion.div>


            {/* Decorative Gold Dots */}

            <motion.div
              className={styles.goldDots}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
            >
              {Array.from({ length: 36 }).map((_, index) => (
                <span key={index} />
              ))}
            </motion.div>


            {/* Secondary Image */}

            <motion.div
              className={styles.secondaryImageWrapper}
              variants={secondaryImageReveal}
            >
              <img
                src={aboutSecondary}
                alt="Business advisory meeting"
                className={styles.secondaryImage}
              />
            </motion.div>

          </div>


          {/* ===================================================
              RIGHT — CONTENT
              =================================================== */}

          <motion.div
            className={styles.contentColumn}
            variants={contentReveal}
          >

            {/* Heading */}

            <motion.h2
              className={styles.heading}
              variants={headingReveal}
            >
             Your Financial Clarity, 

              <span> Our Commitment.</span>
            </motion.h2>


            {/* Decorative Heading Line */}

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
              variants={textReveal}
            >
              O A Dewani & Co. was founded with a simple belief —
              that financial expertise should empower decisions,
              not complicate them. We partner with startups, SMEs,
              and established enterprises to deliver clarity at
              every stage of growth.
            </motion.p>


            {/* =================================================
                MISSION / VISION / VALUES
                ================================================= */}

            <motion.div
              className={styles.valuesList}
              variants={cardContainer}
            >

              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    className={styles.valueCard}
                    variants={cardReveal}
                    whileHover={{
                      y: -4,
                      transition: {
                        duration: 0.25,
                      },
                    }}
                  >

                    {/* Icon */}

                    <div className={styles.valueIcon}>
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                      />
                    </div>


                    {/* Gold Divider */}

                    <div className={styles.valueDivider} />


                    {/* Content */}

                    <div className={styles.valueContent}>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.description}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </motion.div>


            {/* =================================================
                CTA
                ================================================= */}

            <motion.a
              href="/about"
              className={styles.aboutCta}
              variants={ctaReveal}
              whileHover="hover"
              whileTap={{
                scale: 0.97,
              }}
            >
              <span>
                Read More About Us
              </span>

              <motion.span
                className={styles.ctaArrow}
                variants={{
                  initial: {
                    x: 0,
                    y: 0,
                  },

                  hover: {
                    x: 3,
                    y: -3,
                    transition: {
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                initial="initial"
              >
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.8}
                />
              </motion.span>
            </motion.a>

          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

export default AboutSection;