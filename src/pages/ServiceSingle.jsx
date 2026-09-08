import { useParams, Navigate } from "react-router-dom";

import servicesData from "../data/servicesData";

import ServiceSingleHero from "../components/ServicesSingle/ServiceSingleHero/ServiceSingleHero";
import ServiceSingleContent from "../components/ServicesSingle/ServiceSingleContent/ServiceSingleContent";


function ServiceSingle() {
    const { slug } = useParams();


    /* =============================================
       GET CURRENT SERVICE
    ============================================= */

    const service = servicesData.find(
        (item) => item.slug === slug
    );


    /* =============================================
       INVALID SERVICE
    ============================================= */

    if (!service) {
        return <Navigate to="/services" replace />;
    }


    return (
        <>

            {/* =============================================
                SERVICE HERO
            ============================================= */}

            <ServiceSingleHero
                serviceNumber={service.number}
                title={service.title}
                heroDescription={service.heroDescription}
            />


            {/* =============================================
                SERVICE CONTENT
            ============================================= */}

            <ServiceSingleContent
                service={service}
                services={servicesData}
            />

        </>
    );
}


export default ServiceSingle;