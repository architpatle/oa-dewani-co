import { motion } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  UsersRound,
} from "lucide-react";

import styles from "./CompanyOverview.module.css";

import overviewImage from "../../../assets/images/about/company-overview.jpg";


/* =========================================================
   ANIMATION VARIANTS
   ========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
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

const imageVariants = {
  hidden: {
    opacity: 0,
    x: -35,
    scale: 0.97,
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

const credentialVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.65,
      delay: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =========================================================
   COMPANY OVERVIEW
   ========================================================= */

function CompanyOverview() {
  return (
    <section className={styles.companyOverview}>
      <div className={`container ${styles.container}`}>

        <div className={styles.contentGrid}>

          {/* =================================================
              LEFT IMAGE
             ================================================= */}

          <motion.div
            className={styles.visualWrapper}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <div className={styles.imageFrame}>

              <img
                src={overviewImage}
                alt="O A Dewani & Co. team in a professional meeting"
                className={styles.overviewImage}
              />

              <div className={styles.imageOverlay} />

            </div>


            {/* Decorative dots */}

            <div className={styles.decorativeDots}>
              {Array.from({ length: 24 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>


            {/* ICAI Credential Card */}

            <motion.div
              className={styles.credentialCard}
              variants={credentialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <div className={styles.credentialIcon}>
                <Award size={26} strokeWidth={1.7} />
              </div>

              <div className={styles.credentialContent}>
                <strong>ICAI</strong>

                <span>
                  Chartered Accountants
                </span>
              </div>

            </motion.div>

          </motion.div>


          {/* =================================================
              RIGHT CONTENT
             ================================================= */}

          <motion.div
            className={styles.content}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            {/* Section Label */}

            <motion.div
              className={styles.sectionLabel}
              variants={fadeUpVariants}
            >
              <span className={styles.labelLine} />

              <span>COMPANY OVERVIEW</span>
            </motion.div>


            {/* Heading */}

            <motion.h2
              className={styles.heading}
              variants={fadeUpVariants}
            >
              A journey built on{" "}
              <span>expertise, excellence, and trust.</span>
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
              }}
              transition={{
                duration: 0.65,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            />


            {/* Description */}

            <motion.div
              className={styles.description}
              variants={fadeUpVariants}
            >
              <p>
                OAD was established in the year 2012 by Mr. Omprakash
                Dewani, a Chartered Accountant. He, along with his team of
                professionals, through their unrelenting quest for excellence,
                has established a strong presence in the related professional
                field.
              </p>

              <p>
                During the last 10 years of its existence, the firm has grown
                into a multifaceted medium-sized Chartered Accountancy firm,
                offering a broad spectrum of services to its diverse
                clientele.
              </p>

              <p>
                Our growth is mainly attributable to our unwavering attention
                to the quality of service we offer and the emphasis we place
                on constantly upgrading our capabilities. We also owe our
                success to the well-knit team of highly competent
                professionals dedicated to delivering the very best services
                to every client.
              </p>
            </motion.div>


            {/* =================================================
                HIGHLIGHTS
               ================================================= */}

            <motion.div
              className={styles.highlights}
              variants={fadeUpVariants}
            >

              <div className={styles.highlightItem}>

                <div className={styles.highlightIcon}>
                  <BriefcaseBusiness
                    size={24}
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <strong>Multifaceted Expertise</strong>

                  <span>
                    Comprehensive professional services
                  </span>
                </div>

              </div>


              <div className={styles.highlightItem}>

                <div className={styles.highlightIcon}>
                  <UsersRound
                    size={24}
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <strong>Dedicated Professionals</strong>

                  <span>
                    A team committed to client success
                  </span>
                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default CompanyOverview;