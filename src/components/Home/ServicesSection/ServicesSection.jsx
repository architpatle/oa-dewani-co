import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ShieldCheck,
  FileCheck2,
  Lightbulb,
  ReceiptText,
  HeartHandshake,
  Globe2,
  Rocket,
  BriefcaseBusiness,
} from "lucide-react";

import styles from "./ServicesSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Audit & Assurance",
    description:
      "Independent audit and assurance services that strengthen financial reporting, improve transparency, and build stakeholder confidence.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Secretarial Services",
    description:
      "Reliable compliance and secretarial support to help businesses meet statutory requirements and maintain proper corporate governance.",
    icon: FileCheck2,
  },
  {
    number: "03",
    title: "Advisory",
    description:
      "Practical financial and business advisory to help you make informed decisions, manage risks, and pursue sustainable growth.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Taxation",
    description:
      "Strategic tax planning, compliance, and advisory solutions that help you stay compliant while optimizing your tax position.",
    icon: ReceiptText,
  },
  {
    number: "05",
    title: "NGO Services",
    description:
      "Specialized accounting, audit, taxation, and compliance support tailored to the requirements of NGOs and charitable organizations.",
    icon: HeartHandshake,
  },
  {
    number: "06",
    title: "NRI Services",
    description:
      "End-to-end tax and financial assistance for NRIs covering compliance, investments, taxation, and India-related financial requirements.",
    icon: Globe2,
  },
  {
    number: "07",
    title: "Business Start Up",
    description:
      "From choosing the right structure to registrations and financial setup, we help turn your business idea into a strong foundation for growth.",
    icon: Rocket,
  },
  {
    number: "08",
    title: "Outsourcing",
    description:
      "Dependable outsourced accounting and finance support that reduces operational burden and lets you focus on running your business.",
    icon: BriefcaseBusiness,
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
      {/* Decorative elements */}
      {/* <div className={styles.decorTop} /> */}
      {/* <div className={styles.decorBottom} /> */}

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
            <span>OUR SERVICES</span>
            <span className={styles.labelLine} />

          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className={styles.heading}
            variants={fadeUpVariants}
          >
            Financial expertise for{" "}
            <span>every stage of your journey.</span>
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
            From compliance and taxation to strategic advisory, we provide
            comprehensive financial solutions designed to help your business
            operate with confidence and grow with clarity.
          </motion.p>
        </motion.div>

        {/* =================================================
            SERVICES GRID
            ================================================= */}

        <div
          ref={cardsRef}
          className={styles.servicesGrid}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
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

                  {/* <span className={styles.iconDot} /> */}
                </motion.div>

                {/* =================================================
                    CONTENT
                    ================================================= */}

                <div className={styles.cardContent}>
                  <h3>{service.title}</h3>

                  <span className={styles.cardLine} />

                  <p>{service.description}</p>
                </div>

                {/* Vertical gold accent */}
                <span className={styles.cardDivider} />

                {/* Background number */}
                <span className={styles.cardNumber}>
                  {service.number}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;