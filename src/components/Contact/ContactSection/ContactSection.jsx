import { motion } from "framer-motion";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

import styles from "./ContactSection.module.css";


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
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const contactInfo = [
//   {
//     label: "Office",
//     icon: MapPin,
//     content: (
//       <>
//         <span>204, Heritage Towers, M. G. Road,</span>
//         <span>Mumbai 400 001</span>
//       </>
//     ),
//   },

  {
    label: "Phone",
    icon: Phone,
    content: (
      <>
        <a href="tel:+919876543210">
          +91 98765 43210
        </a>

        <a href="tel:+91281246100">
          +91 281 246 100
        </a>
      </>
    ),
  },

  {
    label: "Email",
    icon: Mail,
    content: (
      <>
        <a href="mailto:contact@oadevwani.co">
          contact@oadevwani.co
        </a>

        <a href="mailto:info@oadevwani.co">
          info@oadevwani.co
        </a>
      </>
    ),
  },

  {
    label: "Business Hours",
    icon: Clock,
    content: (
      <>
        <span>Mon – Fri: 10:00 AM – 7:00 PM</span>
        <span>Sat: 10:00 AM – 2:00 PM</span>
      </>
    ),
  },
];


/* =========================================================
   COMPONENT
   ========================================================= */

function ContactSection() {
  return (
    <section className={styles.contactSection}>

      <div className={`container ${styles.container}`}>

        <div className={styles.contactGrid}>

          {/* =============================================
              LEFT — CONTACT INFORMATION
          ============================================= */}

          <motion.div
            className={styles.contactContent}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >

            {/* Section Label */}

            <motion.div
              className={styles.sectionLabel}
              variants={fadeUpVariants}
            >
              <span className={styles.labelLine} />

              <span>GET IN TOUCH</span>
            </motion.div>


            {/* Heading */}

            <motion.h2
              className={styles.heading}
              variants={fadeUpVariants}
            >
              Let&apos;s start a
              <span> conversation</span>
              <br />
              about your business.
            </motion.h2>


            {/* Description */}

            <motion.p
              className={styles.description}
              variants={fadeUpVariants}
            >
              Book a consultation with our team. We&apos;ll take the
              time to understand your requirements and explore how we
              can help — clearly, practically, and without obligation.
            </motion.p>


            {/* Contact Details */}

            <motion.div
              className={styles.contactInfo}
              variants={fadeUpVariants}
            >

              {contactInfo.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={styles.contactItem}
                  >

                    <div className={styles.contactIcon}>
                      <Icon size={19} />
                    </div>


                    <div className={styles.contactDetails}>

                      <span className={styles.contactLabel}>
                        {item.label}
                      </span>

                      <div className={styles.contactText}>
                        {item.content}
                      </div>

                    </div>

                  </div>
                );
              })}

            </motion.div>

          </motion.div>


          {/* =============================================
              RIGHT — CONTACT FORM
          ============================================= */}

          <motion.div
            className={styles.formWrapper}
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <form className={styles.contactForm}>

              {/* Form Header */}

              <div className={styles.formHeader}>

                <span className={styles.formEyebrow}>
                  CONSULTATION REQUEST
                </span>

                <h3>
                  Tell us how we can help.
                </h3>

                <p>
                  Share a few details and our team will get back to you.
                </p>

              </div>


              {/* Name + Email */}

              <div className={styles.formRow}>

                <div className={styles.formGroup}>

                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter Your Name"
                  />

                </div>


                <div className={styles.formGroup}>

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email"
                  />

                </div>

              </div>


              {/* Phone + Company */}

              <div className={styles.formRow}>

                <div className={styles.formGroup}>

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter Your Phone Number"
                  />

                </div>


                <div className={styles.formGroup}>

                  <label htmlFor="company">
                    Company / Business
                  </label>

                  <input
                    id="company"
                    type="text"
                    placeholder="Enter Your Company Name"
                  />

                </div>

              </div>


              {/* Service */}

              <div className={styles.formGroup}>

                <label htmlFor="service">
                  Service of Interest
                </label>

                <select id="service">

                  <option value="">
                    Select a service
                  </option>

                  <option>
                    Audit & Assurance
                  </option>

                  <option>
                    Income Tax
                  </option>

                  <option>
                    GST Consultancy
                  </option>

                  <option>
                    Accounting & Bookkeeping
                  </option>

                  <option>
                    Company Registration
                  </option>

                  <option>
                    ROC Compliance
                  </option>

                  <option>
                    Other
                  </option>

                </select>

              </div>


              {/* Message */}

              <div className={styles.formGroup}>

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us briefly about your requirements..."
                />

              </div>


              {/* Submit */}

              <motion.button
                type="submit"
                className={styles.submitButton}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >

                <span>
                  Send Consultation Request
                </span>

                <Send size={17} />

              </motion.button>


              {/* Privacy Note */}

              <p className={styles.privacyText}>
                Your information will only be used to respond to your enquiry.
              </p>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;