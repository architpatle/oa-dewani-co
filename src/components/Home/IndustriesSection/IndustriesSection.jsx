import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  HeartPulse,
  Landmark,
  GraduationCap,
  Factory,
  CarFront,
  Building2,
  MonitorCog,
  Truck,
} from "lucide-react";

import styles from "./IndustriesSection.module.css";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   INDUSTRIES DATA
   ========================================================= */

const industries = [
  {
    title: "Healthcare",
    icon: HeartPulse,
  },
  {
    title: "Banking",
    icon: Landmark,
  },
  {
    title: "Education And Training",
    icon: GraduationCap,
  },
  {
    title: "Manufacturing & Retail",
    icon: Factory,
  },
  {
    title: "Automobile",
    icon: CarFront,
  },
  {
    title: "Infrastructure",
    icon: Building2,
  },
  {
    title: "Information Technology",
    icon: MonitorCog,
  },
  {
    title: "Logistics",
    icon: Truck,
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

function IndustriesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  /* =========================================================
     INDUSTRY CARDS SCROLL ANIMATION
     ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsRef.current;

    if (!section || !cardsContainer) return;

    const cards = cardsContainer.querySelectorAll(
      `.${styles.industryCard}`
    );

    if (!cards.length) return;

    const ctx = gsap.context(() => {
      /*
       * Initial card state
       */

      gsap.set(cards, {
        y: 28,
        opacity: 0,
        willChange: "transform, opacity",
      });

      /*
       * Reveal cards one by one when
       * the cards themselves enter view.
       */

      gsap.to(cards, {
        y: 0,
        opacity: 1,

        duration: 0.55,

        stagger: {
          each: 0.08,
        },

        ease: "power2.out",

        clearProps: "willChange",

        scrollTrigger: {
          trigger: cardsContainer,
          start: "top 82%",
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
      className={styles.industriesSection}
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

            <span>INDUSTRIES WE SERVE</span>

            <span className={styles.labelLine} />
          </motion.div>


          {/* Main Heading */}

          <motion.h2
            className={styles.heading}
            variants={fadeUpVariants}
          >
            Expertise that understands{" "}
            <span>your industry.</span>
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
            Our experience spans diverse sectors, giving us the insight
            to understand industry-specific challenges and deliver
            financial solutions that create meaningful value.
          </motion.p>
        </motion.div>


        {/* =================================================
            INDUSTRIES GRID
            ================================================= */}

        <div
          ref={cardsRef}
          className={styles.industriesGrid}
        >
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <motion.article
                key={industry.title}
                className={styles.industryCard}
                whileHover="hover"
              >
                {/* Gold top accent */}

                <span className={styles.cardTopLine} />


                {/* Icon */}

                <motion.div
                  className={styles.iconWrapper}
                  variants={{
                    hover: {
                      y: -5,
                      transition: {
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                >
                  <div className={styles.iconCircle}>
                    <Icon
                      size={28}
                      strokeWidth={1.6}
                    />
                  </div>
                </motion.div>


                {/* Content */}

                <div className={styles.cardContent}>
                  <h3>{industry.title}</h3>

                  <span className={styles.cardLine} />
                </div>


                {/* Bottom decorative accent */}

                <span className={styles.cardBottomLine} />

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default IndustriesSection;