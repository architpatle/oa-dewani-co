import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  BriefcaseBusiness,
  Users,
  TrendingUp,
} from "lucide-react";

import styles from "./Hero.module.css";

import heroImage from "../../../assets/images/home/home-hero.png";


/* =========================================================
   ANIMATION VARIANTS
   ========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
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

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    x: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatingCardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const statsVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =========================================================
   DATA
   ========================================================= */

const stats = [
  {
    value: "500+",
    label: "Clients Served",
    icon: ShieldCheck,
  },
  {
    value: "15+",
    label: "Years of Experience",
    icon: TrendingUp,
  },
  {
    value: "8",
    label: "Service Verticals",
    icon: BriefcaseBusiness,
  },
  {
    value: "98%",
    label: "Client Retention",
    icon: Users,
  },
];


const Hero = () => {
  return (
    <section className={styles.hero}>

      {/* Decorative background */}
      <div className={styles.backgroundGlow} />
      {/* <div className={styles.backgroundGrid} /> */}

      <div className="container">

        {/* =========================
            MAIN HERO
        ========================= */}

        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* =========================
              LEFT CONTENT
          ========================= */}

          <div className={styles.heroLeft}>

            {/* Trust Badge */}
            <motion.div
              className={styles.trustBadge}
              variants={fadeUp}
            >
              <ShieldCheck size={16} />

              <span>
                Trusted Since 2010
              </span>
            </motion.div>


            {/* Heading */}
            <motion.h1
              className={styles.heroTitle}
              variants={fadeUp}
            >
              Financial clarity
              <span>
                you can act on.
              </span>
            </motion.h1>


            {/* Description */}
            <motion.p
              className={styles.heroDescription}
              variants={fadeUp}
            >
              Audit, taxation, GST, and advisory solutions delivered
              with precision and integrity — helping businesses stay
              compliant, confident, and ready to grow.
            </motion.p>


            {/* Buttons */}
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
                <span>Book Consultation</span>

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
                <span>Explore Services</span>

                <ArrowRight size={17} />
              </motion.a>

            </motion.div>

          </div>


          {/* =========================
              RIGHT VISUAL
          ========================= */}

          <motion.div
            className={styles.heroVisual}
            variants={imageVariants}
          >

            {/* Main Image */}
            <div className={styles.imageWrapper}>

              <img
                src={heroImage}
                alt="Business professionals discussing financial documents"
                className={styles.heroImage}
              />

              <div className={styles.imageOverlay} />

            </div>


            {/* ICAI Card */}
            <motion.div
              className={styles.certificationCard}
              variants={floatingCardVariants}
            >
              <div className={styles.certificationIcon}>
                <ShieldCheck size={22} />
              </div>

              <div>
                <strong>ICAI Certified</strong>

                <span>
                  Regulated & Compliant
                </span>
              </div>
            </motion.div>


            {/* Satisfaction Card */}
            <motion.div
              className={styles.satisfactionCard}
              variants={floatingCardVariants}
            >
              <span className={styles.satisfactionLabel}>
                Client Satisfaction
              </span>

              <div className={styles.satisfactionScore}>
                <strong>4.9</strong>

                <span>/ 5.0</span>
              </div>

              <div className={styles.stars}>
                ★★★★★
              </div>
            </motion.div>


            {/* Decorative Gold Dots */}
            <div className={styles.decorativeDots}>
              {Array.from({ length: 36 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>

          </motion.div>

        </motion.div>


        {/* =========================
            STATS
        ========================= */}

        <motion.div
          className={styles.statsBar}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.8,
              },
            },
          }}
        >

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (
              <motion.div
                className={styles.statItem}
                key={stat.label}
                variants={statsVariants}
              >

                <div className={styles.statIcon}>
                  <Icon size={20} />
                </div>

                <div className={styles.statContent}>
                  <strong>{stat.value}</strong>

                  <span>{stat.label}</span>
                </div>

                {/* {index !== stats.length - 1 && (
                  <div className={styles.statDivider} />
                )} */}

              </motion.div>
            );
          })}

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;