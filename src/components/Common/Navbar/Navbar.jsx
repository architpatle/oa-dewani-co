import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
];

const navbarVariants = {
  hidden: {
    opacity: 0,
    y: -30,
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

const navItemVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.15 + index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const mobileMenuVariants = {
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
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const mobileLinkVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      delay: index * 0.06,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* =========================================================
     SCROLL DETECTION
     ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className={`${styles.navbar} ${
        isScrolled ? styles.scrolled : ""
      } ${menuOpen ? styles.menuActive : ""}`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={`container ${styles.navbarInner}`}>

        {/* =====================================================
            LOGO
            ===================================================== */}

        <motion.div
          className={styles.logoWrapper}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            to="/"
            className={styles.logo}
            aria-label="O A Dewani & Co. Home"
          >
            <img
              src="/oa-dewani-logo-light.png"
              alt="O A Dewani & Co."
              className={styles.logoImage}
            />
          </Link>
        </motion.div>

        {/* =====================================================
            DESKTOP NAVIGATION
            ===================================================== */}

        <nav
          className={styles.desktopNav}
          aria-label="Main navigation"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              custom={index}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <NavLink
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `${styles.navLink} ${
                    isActive ? styles.active : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>

                    <motion.span
                      className={styles.linkLine}
                      initial={{
                        scaleX: isActive ? 1 : 0,
                        originX: 0,
                      }}
                      animate={{
                        scaleX: isActive ? 1 : 0,
                      }}
                      whileHover={{
                        scaleX: 1,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}

          {/* Consultation */}

          <motion.div
            custom={navLinks.length}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              to="/contact"
              className={styles.consultationBtn}
            >
              <span>Get a Consultation</span>

              <motion.span
                className={styles.arrow}
                whileHover={{
                  x: 3,
                  y: -3,
                }}
              >
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                />
              </motion.span>
            </Link>
          </motion.div>
        </nav>

        {/* =====================================================
            MOBILE MENU BUTTON
            ===================================================== */}

        <motion.button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen((prev) => !prev)}
          whileTap={{ scale: 0.9 }}
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={menuOpen}
        >
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{
                  opacity: 0,
                  rotate: -90,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <X
                  size={24}
                  strokeWidth={1.7}
                />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{
                  opacity: 0,
                  rotate: 90,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  rotate: -90,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <Menu
                  size={24}
                  strokeWidth={1.7}
                />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* =======================================================
          MOBILE NAVIGATION
          ======================================================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav
              className={styles.mobileNav}
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  custom={index}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <NavLink
                    to={link.href}
                    end={link.href === "/"}
                    className={({ isActive }) =>
                      `${styles.mobileNavLink} ${
                        isActive
                          ? styles.mobileActive
                          : ""
                      }`
                    }
                    onClick={closeMenu}
                  >
                    <span>{link.name}</span>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.7}
                    />
                  </NavLink>
                </motion.div>
              ))}

              {/* Mobile Consultation */}

              <motion.div
                custom={navLinks.length}
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to="/contact"
                  className={styles.mobileConsultationBtn}
                  onClick={closeMenu}
                >
                  <span>Get a Consultation</span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.7}
                  />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;