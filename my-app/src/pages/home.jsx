import React from 'react'
import HeroSection1 from "../components/herosection1"
import HeroSection2 from '../components/herosection2';
import HeroSection3 from '../components/herosection3';
import ServicesGrid from '../components/servicesgrid';
import Footer from '../components/footer';
import WhyChooseUs from '../components/whychooseus';
import Testimonial from '../components/testimonial';
function Home () {
    return(
        <div>
            <HeroSection1 />
            <WhyChooseUs />
            <HeroSection3 />
            <HeroSection2 />
            <ServicesGrid />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Home;