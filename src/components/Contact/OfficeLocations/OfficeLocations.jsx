import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ChevronDown,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import styles from "./OfficeLocations.module.css";


/* =========================================================
   DATA
   ========================================================= */

const offices = [
  {
    id: "office-1",

    city: "Head Office",

    location: "Nagpur",

    description:
      "Connect with our team for professional guidance across taxation, audit, compliance, and financial advisory services.",

    email: "info@oadewani.com",

    phone: "0712-6639111",

    address:
      "Block No.2C, Third Floor, Bajaj Wing, Mangalwari Complex, Sadar, Nagpur-440001",

    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29765.35601493251!2d79.08232800000002!3d21.165547!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0e19c79a357%3A0x8269cab9f4e69ba7!2sO%20A%20Dewani%20%26%20Co.%2C%20Chartered%20Accountants!5e0!3m2!1sen!2sus!4v1788857880077!5m2!1sen!2sus",
  },

  {
    id: "office-2",

    city: "Branch Office",

    location: "Pune",

    description:
      "Our extended office presence allows us to serve businesses with responsive professional support and personalised attention.",

    email: "info@oadewani.com",

    phone: "020-29510850",

    address:
      "7, Second Floor, MIT Corner, North Main Road, Koregaon Park, Pune-411001.",

    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30262.183548306137!2d73.89797!3d18.53916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1521705e929%3A0x919ed4f50dd61d2e!2sO%20A%20Dewani%20%26%20Co.!5e0!3m2!1sen!2sus!4v1788857965462!5m2!1sen!2sus",
  },
];


/* =========================================================
   ANIMATION VARIANTS
   ========================================================= */

const sectionVariants = {
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
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const accordionVariants = {
  hidden: {
    opacity: 0,
    height: 0,
  },

  visible: {
    opacity: 1,
    height: "auto",

    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    height: 0,

    transition: {
      duration: 0.28,
      ease: [0.4, 0, 1, 1],
    },
  },
};


/* =========================================================
   COMPONENT
   ========================================================= */

function OfficeLocations() {

  const [activeOffice, setActiveOffice] = useState(0);

  const currentOffice = offices[activeOffice];


  const handleOfficeClick = (index) => {
    setActiveOffice(index);
  };


  return (
    <section className={styles.officeLocations}>

      <div className={`container ${styles.container}`}>

        {/* =============================================
            SECTION HEADER
        ============================================= */}

        <motion.div
          className={styles.sectionHeader}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >

          <motion.div
            className={styles.sectionLabel}
            variants={fadeUpVariants}
          >
            <span className={styles.labelLine} />

            <span>OUR LOCATIONS</span>
          </motion.div>


          <motion.h2
            className={styles.heading}
            variants={fadeUpVariants}
          >
            Visit our
            <span> offices.</span>
          </motion.h2>

        </motion.div>


        {/* =============================================
            OFFICE CONTENT
        ============================================= */}

        <motion.div
          className={styles.officeLayout}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* =========================================
              MAP
          ========================================= */}

          <div className={styles.mapWrapper}>

            <AnimatePresence mode="wait">

              <motion.div
                key={currentOffice.id}
                className={styles.mapFrameWrapper}
                initial={{
                  opacity: 0,
                  scale: 1.02,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
              >

                {currentOffice.mapUrl.startsWith("http") ? (

                  <iframe
                    title={`${currentOffice.city} location`}
                    src={currentOffice.mapUrl}
                    className={styles.mapFrame}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                ) : (

                  /* Temporary Placeholder */
                  <div className={styles.mapPlaceholder}>

                    <div className={styles.mapPlaceholderIcon}>
                      <MapPin size={30} />
                    </div>

                    <strong>
                      {currentOffice.city}
                    </strong>

                    <span>
                      {currentOffice.location}
                    </span>

                    <p>
                      Add the Google Maps iframe URL
                      for this office location.
                    </p>

                  </div>

                )}

              </motion.div>

            </AnimatePresence>


            {/* Map Location Label */}

            <motion.div
              className={styles.mapLabel}
              key={currentOffice.id}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.35,
              }}
            >

              <MapPin size={16} />

              <span>
                {currentOffice.location}
              </span>

            </motion.div>

          </div>


          {/* =========================================
              OFFICE ACCORDION
          ========================================= */}

          <div className={styles.officeAccordion}>

            {offices.map((office, index) => {

              const isActive = activeOffice === index;

              return (
                <div
                  key={office.id}
                  className={`${styles.officeItem} ${
                    isActive ? styles.activeOffice : ""
                  }`}
                >

                  {/* Accordion Button */}

                  <button
                    type="button"
                    className={styles.officeTrigger}
                    onClick={() => handleOfficeClick(index)}
                    aria-expanded={isActive}
                  >

                    <div className={styles.officeTitleGroup}>

                      <span className={styles.officeNumber}>
                        0{index + 1}
                      </span>


                      <div>

                        <h3>
                          {office.city}
                        </h3>

                        <span>
                          {office.location}
                        </span>

                      </div>

                    </div>


                    <span className={styles.triggerIcon}>
                      <ChevronDown size={22} />
                    </span>

                  </button>


                  {/* Accordion Content */}

                  <AnimatePresence initial={false}>

                    {isActive && (

                      <motion.div
                        className={styles.officeContent}
                        variants={accordionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >

                        <div className={styles.officeContentInner}>

                          {/* Description */}

                            {/* <p className={styles.officeDescription}>
                                {office.description}
                            </p> */}


                          {/* Contact Details */}

                          <div className={styles.officeDetails}>


                            {/* Email */}

                            <a
                              href={`mailto:${office.email}`}
                              className={styles.detailItem}
                            >

                              <span className={styles.detailIcon}>
                                <Mail size={16} />
                              </span>

                              <span>
                                {office.email}
                              </span>

                            </a>


                            {/* Phone */}

                            <a
                              href={`tel:${office.phone.replace(/\s/g, "")}`}
                              className={styles.detailItem}
                            >

                              <span className={styles.detailIcon}>
                                <Phone size={16} />
                              </span>

                              <span>
                                {office.phone}
                              </span>

                            </a>


                            {/* Address */}

                            <div className={styles.detailItem}>

                              <span className={styles.detailIcon}>
                                <MapPin size={16} />
                              </span>

                              <span>
                                {office.address}
                              </span>

                            </div>

                          </div>

                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>
              );
            })}

          </div>

        </motion.div>

      </div>

    </section>
  );
}


export default OfficeLocations;