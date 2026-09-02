import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import styles from "./Footer.module.css";


/* =========================================================
   DATA
   ========================================================= */

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];


const services = [
  { name: "Audit & Assurance", href: "/services/audit-assurance" },
  { name: "Taxation", href: "/services/taxation" },
  { name: "Advisory", href: "/services/advisory" },
  { name: "Secretarial Services", href: "/services/secretarial-services" },
  { name: "NGO Services", href: "/services/ngo-services" },
  { name: "NRI Services", href: "/services/nri-services" },
  { name: "Business Start Up", href: "/services/business-start-up" },
  { name: "Outsourcing", href: "/services/outsourcing" },
];


const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    name: "Twitter",
    href: "#",
    icon: FaTwitter,
  },
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
];


/* =========================================================
   ANIMATION VARIANTS
   ========================================================= */

const footerContainerVariants = {
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
    y: 25,
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
   FOOTER
   ========================================================= */

function Footer() {
  return (
    <footer className={styles.footer}>

      {/* =================================================
          BACKGROUND
          ================================================= */}

      <div className={styles.gridPattern} />

      <div className={styles.backgroundGlow} />


      <div className={`container ${styles.container}`}>

        {/* =================================================
            MAIN FOOTER
            ================================================= */}

        <motion.div
          className={styles.footerMain}
          variants={footerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >

          {/* =================================================
              COMPANY
              ================================================= */}

          <motion.div
            className={styles.companyColumn}
            variants={fadeUpVariants}
          >

            {/* Logo */}

            <a
              href="/"
              className={styles.logoWrapper}
              aria-label="O A Dewani & Co. Home"
            >
              <img
                src="/oa-dewani-logo-light.png"
                alt="O A Dewani & Co."
                className={styles.logo}
              />
            </a>


            {/* Description */}

            <p className={styles.companyDescription}>
              O A Dewani & Co. is a Chartered Accountancy firm
              delivering audit, tax, GST, and advisory services
              with precision and integrity to businesses across India.
            </p>


            {/* Social Links */}

            <div className={styles.socialLinks}>

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={styles.socialLink}
                    aria-label={social.name}

                    whileHover={{
                      y: -3,
                    }}

                    whileTap={{
                      scale: 0.94,
                    }}
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.6}
                    />
                  </motion.a>
                );
              })}

            </div>

          </motion.div>


          {/* =================================================
              QUICK LINKS
              ================================================= */}

          <motion.div
            className={styles.linkColumn}
            variants={fadeUpVariants}
          >

            <h3 className={styles.columnTitle}>
              Quick Links
            </h3>

            <nav
              className={styles.footerLinks}
              aria-label="Footer navigation"
            >
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={styles.footerLink}

                  whileHover={{
                    x: 4,
                  }}
                >
                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.6}
                    className={styles.linkArrow}
                  />
                </motion.a>
              ))}
            </nav>

          </motion.div>


          {/* =================================================
              SERVICES
              ================================================= */}

          <motion.div
            className={`${styles.linkColumn} ${styles.servicesColumn}`}
            variants={fadeUpVariants}
          >

            <h3 className={styles.columnTitle}>
              Services
            </h3>

            <nav
              className={styles.footerLinks}
              aria-label="Footer services"
            >
              {services.map((service) => (
                <motion.a
                  key={service.name}
                  href={service.href}
                  className={styles.footerLink}

                  whileHover={{
                    x: 4,
                  }}
                >
                  <span>{service.name}</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.6}
                    className={styles.linkArrow}
                  />
                </motion.a>
              ))}
            </nav>

          </motion.div>


          {/* =================================================
              CONTACT
              ================================================= */}

          <motion.div
            className={styles.contactColumn}
            variants={fadeUpVariants}
          >

            <h3 className={styles.columnTitle}>
              Contact
            </h3>


            {/* Address */}

            <a
              href="#"
              className={styles.contactItem}
            >
              <span className={styles.contactIcon}>
                <MapPin
                  size={20}
                  strokeWidth={1.6}
                />
              </span>

              <span>
                204, Heritage Towers, M. G. Road,
                Mumbai, 400 001
              </span>
            </a>


            {/* Phone */}

            <a
              href="tel:+919876543210"
              className={styles.contactItem}
            >
              <span className={styles.contactIcon}>
                <Phone
                  size={19}
                  strokeWidth={1.6}
                />
              </span>

              <span>
                +91 98765 43210
              </span>
            </a>


            {/* Email */}

            <a
              href="mailto:contact@oadewani.co"
              className={styles.contactItem}
            >
              <span className={styles.contactIcon}>
                <Mail
                  size={20}
                  strokeWidth={1.6}
                />
              </span>

              <span>
                contact@oadewani.co
              </span>
            </a>

          </motion.div>

        </motion.div>


        {/* =================================================
            FOOTER BOTTOM
            ================================================= */}

        <motion.div
          className={styles.footerBottom}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >

          <p className={styles.copyright}>
            © {new Date().getFullYear()} O A Dewani & Co.
            <span>All rights reserved.</span>
          </p>


          <p className={styles.developer}>
            Designed & Developed by{" "}
            <a target="_blank" href="https://royalswebtechpvtltd.com/">
              Royals Webtech Pvt. Ltd.
            </a>
          </p>

        </motion.div>

      </div>
    </footer>
  );
}

export default Footer;