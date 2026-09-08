import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ArrowRight } from "lucide-react";

import servicesData from "../../../data/servicesData";

import styles from "./ServicesSection.module.css";

gsap.registerPlugin(ScrollTrigger);


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

function ServicesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);


  /* =========================================================
     SERVICES CARD SCROLL ANIMATION
     ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsRef.current;

    if (!section || !cardsContainer) return;

    const cards = cardsContainer.querySelectorAll(
      `.${styles.serviceCard}`
    );

    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        y: 32,
        opacity: 0,
        willChange: "transform, opacity",
      });

      gsap.to(cards, {
        y: 0,
        opacity: 1,

        duration: 0.45,

        stagger: {
          each: 0.09,
        },

        ease: "power2.out",

        clearProps: "willChange",

        scrollTrigger: {
          trigger: cardsContainer,
          start: "top 80%",
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
      className={styles.servicesSection}
    >
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

          {/* Section Label */}

          <motion.div
            className={styles.sectionLabel}
            variants={fadeUpVariants}
          >
            <span className={styles.labelLine} />

            <span>CORE SERVICES</span>

            <span className={styles.labelLine} />
          </motion.div>


          {/* Main Heading */}

          <motion.h2
            className={styles.heading}
            variants={fadeUpVariants}
          >
            Financial expertise for{" "}
            <span>
              every stage of your journey.
            </span>
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
            Explore our specialised services designed to support
            businesses through compliance, financial management,
            strategic decisions, and sustainable growth.
          </motion.p>

        </motion.div>


        {/* =================================================
            SERVICES GRID
        ================================================= */}

        <div
          ref={cardsRef}
          className={styles.servicesGrid}
        >
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.slug}
                className={styles.serviceCard}
              >

                {/* =================================================
                    ICON
                ================================================= */}

                <motion.div
                  className={styles.iconWrapper}
                  whileHover={{
                    y: -4,
                    scale: 1.04,

                    transition: {
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                >
                  <div className={styles.iconCircle}>
                    <Icon
                      size={25}
                      strokeWidth={1.6}
                    />
                  </div>
                </motion.div>


                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className={styles.cardContent}>

                  <h3>
                    {service.title}
                  </h3>

                  <span className={styles.cardLine} />

                  <p>
                    {service.shortDescription}
                  </p>


                  {/* Read More */}

                  <Link
                    to={`/services/${service.slug}`}
                    className={styles.readMore}
                  >
                    <span>
                      Read More
                    </span>

                    <ArrowRight size={17} />
                  </Link>

                </div>


                {/* Vertical Gold Accent */}

                <span className={styles.cardDivider} />

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}


export default ServicesSection;