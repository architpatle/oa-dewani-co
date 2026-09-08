import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
    ArrowUpRight,
    Check,
    ChevronRight,
} from "lucide-react";

import servicesData from "../../../data/servicesData";

import styles from "./ServiceSingleContent.module.css";


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


/* =========================================================
   COMPONENT
   ========================================================= */

function ServiceSingleContent({
    service,
}) {
    return (
        <section className={styles.serviceContent}>

            <div className={`container ${styles.container}`}>

                {/* =============================================
                    MAIN LAYOUT
                ============================================= */}

                <div className={styles.contentLayout}>


                    {/* =============================================
                        LEFT — SERVICE CONTENT
                    ============================================= */}

                    <motion.div
                        className={styles.mainContent}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                    >


                        {/* =============================================
                            OVERVIEW
                        ============================================= */}

                        <motion.div
                            className={styles.contentBlock}
                            variants={fadeUpVariants}
                        >

                            <div className={styles.sectionLabel}>

                                <span className={styles.labelLine} />

                                <span>
                                    OVERVIEW
                                </span>

                            </div>


                            <h2>
                                Understanding the
                                <span> bigger picture.</span>
                            </h2>


                            <div className={styles.overviewContent}>

                                {Array.isArray(service.overview)
                                    ? service.overview.map((paragraph, index) => (
                                        <p key={index}>
                                            {paragraph}
                                        </p>
                                    ))
                                    : (
                                        <p>
                                            {service.overview}
                                        </p>
                                    )
                                }

                            </div>

                        </motion.div>


                        {/* =============================================
                            DIVIDER
                        ============================================= */}

                        <motion.div
                            className={styles.contentDivider}
                            variants={fadeUpVariants}
                        />


                        {/* =============================================
                            WHAT WE COVER
                        ============================================= */}

                        <motion.div
                            className={styles.coverageBlock}
                            variants={fadeUpVariants}
                        >

                            <div className={styles.sectionLabel}>

                                <span className={styles.labelLine} />

                                <span>
                                    WHAT WE COVER
                                </span>

                            </div>


                            <h2>
                                Comprehensive support,
                                <span> where it matters.</span>
                            </h2>


                            <p className={styles.coverageIntro}>
                                Our services are designed to provide practical,
                                reliable support across the areas that matter
                                most to your business.
                            </p>


                            {/* Coverage List */}

                            <div className={styles.coverageList}>

                                {service.coverage?.map(
                                    (item, index) => (
                                        <motion.div
                                            key={index}
                                            className={styles.coverageItem}
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
                                                duration: 0.45,
                                                delay: index * 0.06,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                        >

                                            <div className={styles.checkIcon}>
                                                <Check
                                                    size={15}
                                                    strokeWidth={2.2}
                                                />
                                            </div>


                                            <span>
                                                {item}
                                            </span>

                                        </motion.div>
                                    )
                                )}

                            </div>

                        </motion.div>

                    </motion.div>


                    {/* =============================================
                        RIGHT — OTHER SERVICES
                    ============================================= */}

                    <aside className={styles.sidebar}>

                        <div className={styles.sidebarInner}>


                            {/* Sidebar Header */}

                            <div className={styles.sidebarHeader}>

                                <span className={styles.sidebarEyebrow}>
                                    EXPLORE MORE
                                </span>


                                <h3>
                                    Other Services
                                </h3>

                            </div>


                            {/* Services List */}

                            <nav className={styles.servicesNav}>

                                {servicesData
                                    .filter(
                                        (item) =>
                                            item.slug !== service.slug
                                    )
                                    .map((item) => (

                                        <Link
                                            key={item.slug}
                                            to={`/services/${item.slug}`}
                                            className={styles.serviceLink}
                                        >

                                            <span className={styles.serviceNumber}>
                                                {item.number}
                                            </span>


                                            <span className={styles.serviceName}>
                                                {item.title}
                                            </span>


                                            <ChevronRight
                                                size={17}
                                                className={styles.serviceArrow}
                                            />

                                        </Link>

                                    ))}

                            </nav>


                            {/* Contact CTA */}

                            <Link
                                to="/contact"
                                className={styles.sidebarCTA}
                            >

                                <div>

                                    <span>
                                        NEED GUIDANCE?
                                    </span>

                                    <strong>
                                        Talk to our experts
                                    </strong>

                                </div>


                                <ArrowUpRight size={18} />

                            </Link>

                        </div>

                    </aside>

                </div>

            </div>

        </section>
    );
}


export default ServiceSingleContent;