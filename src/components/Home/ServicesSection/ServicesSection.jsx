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
  ArrowRight,
} from "lucide-react";

import styles from "./ServicesSection.module.css";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    title: "Audit & Assurance",
    description:
      "Independent audit and assurance services that strengthen financial reporting, improve transparency, and build stakeholder confidence.",
    icon: ShieldCheck,
    link: "/services/audit-assurance",
  },
  {
    title: "Secretarial Services",
    description:
      "Reliable compliance and secretarial support to help businesses meet statutory requirements and maintain proper corporate governance.",
    icon: FileCheck2,
    link: "/services/secretarial-services",
  },
  {
    title: "Advisory",
    description:
      "Practical financial and business advisory to help you make informed decisions, manage risks, and pursue sustainable growth.",
    icon: Lightbulb,
    link: "/services/advisory",
  },
  {
    title: "Taxation",
    description:
      "Strategic tax planning, compliance, and advisory solutions that help you stay compliant while optimizing your tax position.",
    icon: ReceiptText,
    link: "/services/taxation",
  },
  {
    title: "NGO Services",
    description:
      "Specialized accounting, audit, taxation, and compliance support tailored to the requirements of NGOs and charitable organizations.",
    icon: HeartHandshake,
    link: "/services/ngo-services",
  },
  {
    title: "NRI Services",
    description:
      "End-to-end tax and financial assistance for NRIs covering compliance, investments, taxation, and India-related financial requirements.",
    icon: Globe2,
    link: "/services/nri-services",
  },
  {
    title: "Business Start Up",
    description:
      "From choosing the right structure to registrations and financial setup, we help turn your business idea into a strong foundation for growth.",
    icon: Rocket,
    link: "/services/business-start-up",
  },
  {
    title: "Outsourcing",
    description:
      "Dependable outsourced accounting and finance support that reduces operational burden and lets you focus on running your business.",
    icon: BriefcaseBusiness,
    link: "/services/outsourcing",
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
            Expertise where it matters.
            <span> Support when you need it.</span>
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
            Explore our specialist service areas, each designed to bring
            greater clarity, stronger compliance, and practical support to
            the financial and business decisions you make every day.
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
                key={service.title}
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
                    {service.description}
                  </p>

                </div>


                {/* =================================================
                    READ MORE CTA
                ================================================= */}

                <motion.a
                  href={service.link}
                  className={styles.readMore}
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <span>Read More</span>

                  <ArrowRight
                    size={17}
                    strokeWidth={1.8}
                  />
                </motion.a>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;