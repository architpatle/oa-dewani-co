import { motion } from "framer-motion";
import {
  UserRoundCheck,
  Zap,
  MonitorCheck,
} from "lucide-react";

import styles from "./WhyTrustUs.module.css";

/* =========================================================
   DATA
   ========================================================= */

const trustPoints = [
  {
    icon: UserRoundCheck,
    title: "Partner-led engagement",
    description:
      "You work directly with senior Chartered Accountants — not handed off to juniors.",
  },
  {
    icon: Zap,
    title: "Proactive, not reactive",
    description:
      "We flag risks and opportunities before they reach your books, not after.",
  },
  {
    icon: MonitorCheck,
    title: "Technology-first compliance",
    description:
      "Cloud accounting, e-filing, and real-time dashboards keep you always informed.",
  },
];

const metrics = [
  {
    value: "350+",
    label: "CLIENTS SERVED",
  },
  {
    value: "15+",
    label: "YEARS EXPERIENCE",
  },
  {
    value: "99%",
    label: "CLIENT RETENTION",
  },
  {
    value: "500+",
    label: "FILINGS COMPLETED",
  },
];

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

const leftContentReveal = {
  hidden: {
    opacity: 0,
    x: -50,
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
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      delay: 0.1,
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
      duration: 0.6,
      delay: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const pointsContainer = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.12,
    },
  },
};

const pointReveal = {
  hidden: {
    opacity: 0,
    y: 20,
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

const statsReveal = {
  hidden: {
    opacity: 0,
    x: 50,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const metricContainer = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.1,
    },
  },
};

const metricReveal = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const testimonialReveal = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      delay: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   COMPONENT
   ========================================================= */

function WhyTrustUs() {
  return (
    <motion.section
      className={styles.whyTrustSection}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
    >
      <div className={`container ${styles.container}`}>
        <div className={styles.mainGrid}>

          {/* =================================================
              LEFT — TRUST CONTENT
              ================================================= */}

          <motion.div
            className={styles.contentColumn}
            variants={leftContentReveal}
          >
            {/* Eyebrow */}
            <motion.div
              className={styles.sectionLabel}
              variants={textReveal}
            >
              <span className={styles.labelLine} />

              <span>WHY BUSINESSES TRUST US</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className={styles.heading}
              variants={headingReveal}
            >
              We don't just crunch numbers.{" "}
              <span>
                We build financial confidence —
              </span>{" "}
              one decision at a time.
            </motion.h2>

            {/* Accent */}
            <motion.div
              className={styles.headingAccent}
              initial={{
                scaleX: 0,
                transformOrigin: "left center",
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

            {/* Trust Points */}
            <motion.div
              className={styles.trustPoints}
              variants={pointsContainer}
            >
              {trustPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <motion.div
                    key={point.title}
                    className={styles.trustPoint}
                    variants={pointReveal}
                    whileHover={{
                      x: 5,
                      transition: {
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                  >
                    <div className={styles.pointMarker}>
                      <span />
                    </div>

                    <div className={styles.pointContent}>
                      <div className={styles.pointHeading}>
                        <Icon
                          size={17}
                          strokeWidth={1.8}
                        />

                        <h3>{point.title}</h3>
                      </div>

                      <p>{point.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT — NUMBERS PANEL
              ================================================= */}

          <motion.div
            className={styles.statsCard}
            variants={statsReveal}
          >
            {/* Decorative circles */}
            <div className={styles.decorCircleTop} />
            <div className={styles.decorCircleBottom} />

            <div className={styles.statsContent}>

              {/* Stats Label */}
              <div className={styles.statsLabel}>
                <span>BY THE NUMBERS</span>
              </div>

              {/* Stats Heading */}
              <h3 className={styles.statsHeading}>
                Measurable impact for every
                <span> client we serve.</span>
              </h3>

              {/* Metrics */}
              <motion.div
                className={styles.metricsGrid}
                variants={metricContainer}
              >
                {metrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    className={styles.metric}
                    variants={metricReveal}
                  >
                    <span className={styles.metricValue}>
                      {metric.value}
                    </span>

                    <span className={styles.metricLabel}>
                      {metric.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Divider */}
              <div className={styles.testimonialDivider} />

              {/* Testimonial */}
              <motion.div
                className={styles.testimonial}
                variants={testimonialReveal}
              >
                <p>
                  “They treat our business like it's their own.
                  That level of ownership is rare.”
                </p>

                <span>
                  — Director, Manufacturing SME
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

export default WhyTrustUs;