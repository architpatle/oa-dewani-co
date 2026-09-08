import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Globe2,
  MapPinned,
  Handshake,
  Headphones,
  Zap,
  ChartNoAxesCombined,
  ShieldCheck,
  TrendingUp,
  BadgeIndianRupee,
  FileCheck2,
  Settings2,
  BarChart3,
} from "lucide-react";

import styles from "./WhyOAD.module.css";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   DATA
========================================================= */

const differentiators = [
  {
    title: "Complete Service Coverage",
    description: "A full array of professional services under one roof.",
    icon: Globe2,
  },
  {
    title: "Pan-India Presence",
    description:
      "Supporting businesses across domestic and international markets.",
    icon: MapPinned,
  },
  {
    title: "Partner-Led Engagement",
    description:
      "A highly customised approach with direct professional involvement.",
    icon: Handshake,
  },
  {
    title: "Client-Centric Approach",
    description:
      "Finding practical solutions to the problems that matter most.",
    icon: Headphones,
  },
  {
    title: "Responsive Support",
    description:
      "Quick communication and timely attention to client needs.",
    icon: Zap,
  },
  {
    title: "Insight-Driven Delivery",
    description:
      "Clearer decisions through dashboards, reporting, and insights.",
    icon: ChartNoAxesCombined,
  },
];


const valuePropositions = [
  {
    title: "Risk & Cost Management",
    description:
      "Helping businesses manage exposure while maintaining financial control.",
    icon: BadgeIndianRupee,
  },
  {
    title: "Financial Stability",
    description:
      "Supporting stronger profitability and sustainable financial growth.",
    icon: TrendingUp,
  },
  {
    title: "Reputation Protection",
    description:
      "Strengthening confidence through reliable assurance and compliance.",
    icon: ShieldCheck,
  },
  {
    title: "Simpler Compliance",
    description:
      "Making complex regulatory and compliance requirements easier to manage.",
    icon: FileCheck2,
  },
  {
    title: "Better Process Efficiency",
    description:
      "Improving workflows to create greater efficiency and cost savings.",
    icon: Settings2,
  },
  {
    title: "Growth-Focused Insights",
    description:
      "Supporting revenue enhancement through better financial planning.",
    icon: BarChart3,
  },
];


/* =========================================================
   FRAMER MOTION VARIANTS
========================================================= */

const headerVariants = {
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

function WhyOAD() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const carouselRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);


  /* =========================================================
     GSAP CONTENT REVEAL
  ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const cards = content.querySelectorAll(
      `.${styles.valueItem}`
    );

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        opacity: 0,
        y: 30,
      });

      gsap.to(cards, {
        opacity: 1,
        y: 0,

        duration: 0.55,

        stagger: {
          each: 0.07,
        },

        ease: "power2.out",

        scrollTrigger: {
          trigger: content,
          start: "top 82%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);


  /* =========================================================
     MOBILE CAROUSEL
  ========================================================= */

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const mobileQuery = window.matchMedia("(max-width: 768px)");

    let interval;

    const startAutoPlay = () => {
      if (!mobileQuery.matches) return;

      interval = setInterval(() => {
        const slides = carousel.querySelectorAll(
          `.${styles.valueColumn}`
        );

        if (!slides.length) return;

        const nextSlide =
          activeSlide === slides.length - 1
            ? 0
            : activeSlide + 1;

        carousel.scrollTo({
          left: slides[nextSlide].offsetLeft,
          behavior: "smooth",
        });

        setActiveSlide(nextSlide);
      }, 5000);
    };


    const handleScroll = () => {
      if (!mobileQuery.matches) return;

      const slides = carousel.querySelectorAll(
        `.${styles.valueColumn}`
      );

      if (!slides.length) return;

      let closestIndex = 0;
      let smallestDistance = Infinity;

      slides.forEach((slide, index) => {
        const distance = Math.abs(
          carousel.scrollLeft - slide.offsetLeft
        );

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveSlide(closestIndex);
    };


    carousel.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    startAutoPlay();


    return () => {
      carousel.removeEventListener("scroll", handleScroll);

      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeSlide]);


  /* =========================================================
     CAROUSEL NAVIGATION
  ========================================================= */

  const scrollToSlide = (index) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const slides = carousel.querySelectorAll(
      `.${styles.valueColumn}`
    );

    if (!slides[index]) return;

    carousel.scrollTo({
      left: slides[index].offsetLeft,
      behavior: "smooth",
    });

    setActiveSlide(index);
  };


  return (
    <section
      ref={sectionRef}
      className={styles.whyOAD}
    >
      <div className={`container ${styles.container}`}>

        {/* =============================================
            SECTION HEADER
        ============================================= */}

        <motion.div
          className={styles.sectionHeader}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >

          {/* Label */}

          <motion.div
            className={styles.sectionLabel}
            variants={fadeUpVariants}
          >
            <span className={styles.labelLine} />

            <span>WHY OAD</span>
          </motion.div>


          {/* Heading */}

          <motion.h2
            className={styles.heading}
            variants={fadeUpVariants}
          >
            Built around expertise.
            <span> Designed around your business.</span>
          </motion.h2>


          {/* Description */}

          <motion.p
            className={styles.description}
            variants={fadeUpVariants}
          >
            Our approach combines professional depth, responsive service,
            and practical financial insight to help businesses manage today
            while preparing confidently for what comes next.
          </motion.p>

        </motion.div>


        {/* =============================================
            VALUE CONTENT
        ============================================= */}

        <div
          ref={contentRef}
          className={styles.carouselWrapper}
        >

          <div
            ref={carouselRef}
            className={styles.valueGrid}
          >

            {/* =============================================
                DIFFERENTIATORS
            ============================================= */}

            <div className={styles.valueColumn}>

              <div className={styles.columnHeader}>

                <span className={styles.columnNumber}>
                  01
                </span>

                <div>

                  <span className={styles.columnEyebrow}>
                    OUR APPROACH
                  </span>

                  <h3>
                    What sets us apart?
                  </h3>

                </div>

              </div>


              <div className={styles.itemsGrid}>

                {differentiators.map((item) => {

                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className={styles.valueItem}
                    >

                      <div className={styles.iconWrapper}>
                        <Icon size={22} />
                      </div>


                      <div className={styles.itemContent}>

                        <h4>
                          {item.title}
                        </h4>

                        <p>
                          {item.description}
                        </p>

                      </div>

                    </article>
                  );
                })}

              </div>

            </div>


            {/* =============================================
                VALUE PROPOSITION
            ============================================= */}

            <div
              className={`${styles.valueColumn} ${styles.valueColumnDark}`}
            >

              <div className={styles.columnHeader}>

                <span className={styles.columnNumber}>
                  02
                </span>

                <div>

                  <span className={styles.columnEyebrow}>
                    THE OUTCOME
                  </span>

                  <h3>
                    What it means for you?
                  </h3>

                </div>

              </div>


              <div className={styles.itemsGrid}>

                {valuePropositions.map((item) => {

                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className={styles.valueItem}
                    >

                      <div className={styles.iconWrapper}>
                        <Icon size={22} />
                      </div>


                      <div className={styles.itemContent}>

                        <h4>
                          {item.title}
                        </h4>

                        <p>
                          {item.description}
                        </p>

                      </div>

                    </article>
                  );
                })}

              </div>

            </div>

          </div>


          {/* =============================================
              MOBILE CAROUSEL INDICATORS
          ============================================= */}

          <div className={styles.carouselDots}>

            {[0, 1].map((index) => (
              <button
                key={index}
                type="button"
                className={`${styles.carouselDot} ${
                  activeSlide === index
                    ? styles.carouselDotActive
                    : ""
                }`}
                onClick={() => scrollToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyOAD;