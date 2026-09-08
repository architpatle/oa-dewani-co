import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import {
  CalendarDays,
  Users,
  BriefcaseBusiness,
  BadgeCheck,
} from "lucide-react";

import styles from "./StatsSection.module.css";


/* =========================================================
   DATA
   ========================================================= */

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Years of Practice",
    icon: CalendarDays,
  },
  {
    value: 350,
    suffix: "+",
    label: "Clients Served",
    icon: Users,
  },
  {
    value: 8,
    suffix: "",
    label: "Service Verticals",
    icon: BriefcaseBusiness,
  },
  {
    value: 99,
    suffix: "%",
    label: "On-Time Filings",
    icon: BadgeCheck,
  },
];


/* =========================================================
   ANIMATED COUNTER
   ========================================================= */

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);

  const counterRef = useRef(null);

  const isInView = useInView(counterRef, {
    once: true,
    amount: 0.5,
  });


  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800;
    const startTime = performance.now();


    const animateCount = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      /* Smooth easing */
      const easedProgress =
        1 - Math.pow(1 - progress, 4);

      const currentValue = Math.floor(
        start + (value - start) * easedProgress
      );

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);

  }, [isInView, value]);


  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}


/* =========================================================
   ANIMATION VARIANTS
   ========================================================= */

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};


const itemVariants = {
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


/* =========================================================
   COMPONENT
   ========================================================= */

function StatsSection() {
  return (
    <section className={styles.statsSection}>

      {/* Background Elements */}

      <div className={styles.backgroundGrid} />

      <div className={styles.backgroundGlow} />


      <div className={`container ${styles.container}`}>

        {/* =============================================
            TOP CONTENT
        ============================================= */}

        <motion.div
          className={styles.sectionIntro}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className={styles.sectionLabel}>

            <span className={styles.labelLine} />

            <span>OUR JOURNEY IN NUMBERS</span>

          </div>


          {/* <p>
            Built steadily through experience, trust,
            and a commitment to delivering dependable
            professional services.
          </p> */}

        </motion.div>


        {/* =============================================
            STATS
        ============================================= */}

        <motion.div
          className={styles.statsWrapper}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >

          {/* Connecting Rail */}

          <div className={styles.statsRail}>
            <span className={styles.railProgress} />
          </div>


          {stats.map((stat) => {

            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.label}
                className={styles.statItem}
                variants={itemVariants}
              >

                {/* Timeline Node */}

                <div className={styles.statNode}>
                  <span />

                  <div className={styles.nodeGlow} />
                </div>


                {/* Icon */}

                <div className={styles.iconWrapper}>
                  <Icon size={19} />
                </div>


                {/* Number */}

                <strong className={styles.statValue}>

                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                  />

                </strong>


                {/* Label */}

                <span className={styles.statLabel}>
                  {stat.label}
                </span>


                {/* Bottom Accent */}

                <span className={styles.bottomAccent} />

              </motion.article>
            );
          })}

        </motion.div>


        {/* =============================================
            BOTTOM MESSAGE
        ============================================= */}

        {/* <motion.div
          className={styles.bottomText}
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >

          <span />

          <p>
            Numbers reflect our journey. Relationships define it.
          </p>

          <span />

        </motion.div> */}

      </div>

    </section>
  );
}

export default StatsSection;