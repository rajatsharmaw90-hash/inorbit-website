import React from "react";
import { useParams } from "react-router-dom";
import ServiceHero1 from "../components/servicehero1";
import serviceData from "../data/servicedata";
import Features from "../components/features";
import Footer from "../components/footer";
import Solution from "../components/solution";

function ServicesPage() {
  const { serviceName } = useParams();

  const service = serviceData[serviceName];

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
  <>
  <ServiceHero1 data={service} />
  <Solution props={service} />
  <Features props={service} />
  <Footer />
 
  
    </>
  )
 

}

export default ServicesPage;