import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./WorkingProcess.module.css";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   DATA
   ========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin by listening. A structured conversation about your business, its history and the questions keeping you awake.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "A written engagement plan: scope, timelines, responsibilities and the compliance calendar for the year ahead.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Work is delivered by a named team, reviewed at partner level, and documented so nothing depends on memory.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Ongoing advisory between deadlines — because most financial decisions are not made in March.",
  },
];


/* =========================================================
   HEADER ANIMATION
   ========================================================= */

const headerContainerVariants = {
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
    y: 26,
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

function WorkingProcess() {
  const sectionRef = useRef(null);
  const processRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);


  /* =========================================================
     MOBILE DETECTION
     ========================================================= */

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);

      if (!mediaQuery.matches) {
        setActiveIndex(0);
      }
    };

    handleResize();

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);


  /* =========================================================
     AUTO PLAY — MOBILE ONLY
     ========================================================= */

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === processSteps.length - 1
          ? 0
          : currentIndex + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [isMobile]);


  /* =========================================================
     PROCESS CARDS SCROLL ANIMATION
     ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;
    const processContainer = processRef.current;

    if (!section || !processContainer) return;

    const steps = processContainer.querySelectorAll(
      `.${styles.processStep}`
    );

    if (!steps.length) return;

    const ctx = gsap.context(() => {
      gsap.set(steps, {
        opacity: 0,
        y: 34,
        willChange: "transform, opacity",
      });

      gsap.to(steps, {
        opacity: 1,
        y: 0,

        duration: 0.55,

        stagger: {
          each: 0.1,
        },

        ease: "power2.out",

        clearProps: "willChange",

        scrollTrigger: {
          trigger: processContainer,
          start: "top 82%",
          once: true,
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);


  /* =========================================================
     DRAG HANDLER
     ========================================================= */

  const handleDragEnd = (_, info) => {
    if (!isMobile) return;

    const swipeThreshold = 50;

    if (info.offset.x < -swipeThreshold) {
      setActiveIndex((currentIndex) =>
        currentIndex === processSteps.length - 1
          ? 0
          : currentIndex + 1
      );
    }

    if (info.offset.x > swipeThreshold) {
      setActiveIndex((currentIndex) =>
        currentIndex === 0
          ? processSteps.length - 1
          : currentIndex - 1
      );
    }
  };


  return (
    <section
      ref={sectionRef}
      className={styles.workingProcess}
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
            amount: 0.3,
          }}
        >

          {/* Section Label */}

          <motion.div
            className={styles.sectionLabel}
            variants={fadeUpVariants}
          >
            <span className={styles.labelLine} />

            <span>OUR WORKING PROCESS</span>
          </motion.div>


          <div className={styles.headerContent}>

            {/* Heading */}

            <motion.h2
              className={styles.heading}
              variants={fadeUpVariants}
            >
              Four steps,
              <span> repeated well.</span>
            </motion.h2>


            {/* Description */}

            <motion.p
              className={styles.description}
              variants={fadeUpVariants}
            >
              The method rarely changes — which is precisely why it works.
              Predictable process, unpredictable business conditions.
            </motion.p>

          </div>

        </motion.div>


        {/* =================================================
            PROCESS CAROUSEL / GRID
           ================================================= */}

        <div className={styles.processCarousel}>

          <motion.div
            ref={processRef}
            className={styles.processGrid}
            animate={
              isMobile
                ? {
                    x: `-${activeIndex * 100}%`,
                  }
                : {
                    x: 0,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
            }}
            drag={isMobile ? "x" : false}
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragElastic={0.12}
            onDragEnd={handleDragEnd}
          >
            {processSteps.map((step) => (
              <article
                key={step.number}
                className={styles.processStep}
              >

                {/* Step Number */}

                <span className={styles.stepNumber}>
                  {step.number}
                </span>


                {/* Step Content */}

                <div className={styles.stepContent}>

                  <h3>
                    {step.title}
                  </h3>

                  <span className={styles.stepLine} />

                  <p>
                    {step.description}
                  </p>

                </div>

              </article>
            ))}
          </motion.div>

        </div>


        {/* =================================================
            MOBILE CAROUSEL DOTS
           ================================================= */}

        <div className={styles.carouselDots}>
          {processSteps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              className={`${styles.carouselDot} ${
                activeIndex === index
                  ? styles.activeDot
                  : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default WorkingProcess;