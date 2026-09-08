import { useParams, Navigate } from "react-router-dom";

import servicesData from "../data/servicesData";

import ServiceSingleHero from "../components/ServicesSingle/ServiceSingleHero/ServiceSingleHero";


function ServiceSinglePage() {
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
            <ServiceSingleHero
                serviceNumber={service.number}
                title={service.title}
                shortDescription={service.shortDescription}
            />
        </>
    );
}


export default ServiceSinglePage;