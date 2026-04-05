import plumbingImg from "../assets/images/plumber-hero.png";
import gardeninHero from "../assets/images/gardeningHero.png";
import dogHero from "../assets/images/dogHero.png";
import webDev from "../assets/images/webdev.png";
import computerRepair from "../assets/images/computer-repair.png";
import electrical from "../assets/images/electrical.png";

import plServImg1 from "../assets/images/plumber3.png";
import garservImg from "../assets/images/gardener.png";
import eleServImg from  "../assets/images/electrician.png";
import dogServImg from "../assets/images/dogwalker.png";
import webServImg from "../assets/images/webdeveloper.png"
import comServImg from "../assets/images/computer.png"

import plProblem from "../assets/images/household-renovation.png"
import elProblem from "../assets/images/power-outage.png"
import doProblem from "../assets/images/never-leave-your-pet.png"
import weProblem from "../assets/images/workflow-infographic.png"


const serviceData = {
  plumbing: {
    id: 1,
    brand: "INORBIT GROUP LTD.",
    name: "Plumbing Services",
    subText:
      "Reliable and efficient plumbing solutions for your home or business. From leak repairs to pipe installations, our certified plumbers ensure top-quality service every time, keeping your water systems running smoothly.",
    imgURL: plumbingImg,
    whyUs:
      "At Inorbit Group Ltd., we take pride in delivering reliable, high-quality plumbing services backed by a team of verified and experienced professionals. From minor repairs like fixing leaks and unclogging drains to complete plumbing installations and system upgrades, we handle every job with precision, care, and attention to detail. Our plumbers are trained to diagnose issues quickly and provide effective, long-lasting solutions for both residential and commercial clients.",
    job1: "Repairs & Troubleshooting",
    job1p: "From leaking pipes and dripping faucets to clogged drains and low water pressure, our expert plumbers quickly diagnose and fix all types of plumbing issues. We ensure reliable, long-lasting solutions to keep your systems running smoothly.",

    job2: "Installation & Upgrades",
    job2p: "Whether you’re installing new fixtures, upgrading pipelines, or setting up complete plumbing systems, we deliver precise and efficient installation services tailored to your space and requirements.",


    job3: "Maintenance & Emergency Services",
    job3p:"Regular maintenance and fast emergency response to prevent major issues and costly damage. Our team is ready to handle urgent plumbing problems with professionalism and care, anytime you need us.",
    
    servImg1: plServImg1,
    problemImg: plProblem,
    problemTitle: "INEFFICENT  PLUMBING SYSTEMS",
    problemText:"High water bills and low performance are signs of an inefficient system. We go beyond basic repairs by optimizing your plumbing setup — improving water pressure, reducing waste, and upgrading outdated components. The result is a system that works smarter, saves money, and lasts longer.",
  
   
    
    
  },
  gardening: {
    id: 2,
    brand: "INORBIT GROUP LTD.",
    name: "Gardening & landscaping",
    subText:
      "Transforming outdoor spaces into beautiful, functional, and sustainable landscapes. From garden design to maintenance, we bring your vision to life with expert care and attention to detail",
    imgURL: gardeninHero,
    whyUs:
      "At Inorbit Group Ltd., we take pride in delivering reliable, high-quality plumbing services backed by a team of verified and experienced professionals. From minor repairs like fixing leaks and unclogging drains to complete plumbing installations and system upgrades, we handle every job with precision, care, and attention to detail. Our plumbers are trained to diagnose issues quickly and provide effective, long-lasting solutions for both residential and commercial clients.",
    job1: "Garden Design & Installation",
    job1p: "Transform your outdoor space with creative landscaping, plant selection, and complete garden setup tailored to your vision.",

    job2: "Lawn Care & Maintenance",
    job2p: "Keep your garden fresh and healthy with regular mowing, trimming, weeding, and seasonal upkeep services",


    job3: "Outdoor Cleaning & Seasonal Services",
    job3p:"From leaf removal to seasonal clean-ups, we ensure your outdoor space stays neat, clean, and ready all year round.",
    
    servImg1: garservImg,
    t:"general manager",
    review:"hi"
  },
  electrician: {
    id: 3,
    brand: "INORBIT GROUP LTD.",
    name: "Electrician Services",
    subText:
      "Reliable and skilled electrical solutions for your home or business. From installations to repairs, we ensure safety, efficiency, and lasting performance for every project.",
    imgURL: electrical,
   whyUs:
      "At Inorbit Group Ltd., we take pride in delivering reliable, high-quality plumbing services backed by a team of verified and experienced professionals. From minor repairs like fixing leaks and unclogging drains to complete plumbing installations and system upgrades, we handle every job with precision, care, and attention to detail. Our plumbers are trained to diagnose issues quickly and provide effective, long-lasting solutions for both residential and commercial clients.",
    job1: "Electrical Repairs & Troubleshooting",
    job1p: "We diagnose and fix electrical issues such as faulty wiring, power outages, and tripping breakers. Our experts ensure safe and efficient solutions to restore power and reliability",

    job2: "Installations & System Upgrades",
    job2p: "From lighting installations to panel upgrades and new wiring systems, we provide high-quality electrical installations tailored to your home or business needs",


    job3: "Maintenance & Safety Inspections",
    job3p:"Regular maintenance and thorough inspections to ensure your electrical systems are safe, compliant, and performing at their best",
    
    servImg1: eleServImg,

    problemImg: elProblem,
    problemTitle: "Electrical Problems That Keep Coming Back?",
    problemText:"We don’t just Fix leaks — we identify the root cause, prevent future damage, and ensure long-term reliability for your home.",
  },
  dogWalking: {
    id: 4,
    brand: "INORBIT GROUP LTD.",
    name: "Dog Walking",
    subText:
      "Exercise, adventure, and companionship for your furry friends—because every dog deserves a happy walk.",
    imgURL: dogHero,
     whyUs:
      "At Inorbit Group Ltd., we take pride in delivering reliable, high-quality plumbing services backed by a team of verified and experienced professionals. From minor repairs like fixing leaks and unclogging drains to complete plumbing installations and system upgrades, we handle every job with precision, care, and attention to detail. Our plumbers are trained to diagnose issues quickly and provide effective, long-lasting solutions for both residential and commercial clients.",
    job1: "Daily Walks & Exercise",
    job1p: "Keeping your pets active and happy with safe, engaging walks designed around their energy levels and routine.",

    job2: "Pet Sitting & Home Care",
    job2p: "Reliable in-home pet care, feeding, and companionship while you’re away, ensuring comfort and peace of mind.",


    job3: "Grooming Support & Wellness",
    job3p:"Basic grooming and hygiene support to keep your pets clean, comfortable, and well cared for.",
    
    servImg1: dogServImg,

    problemImg: doProblem,
    problemTitle: "LACK OF TIME FOR PROPER DOG EXERCISE",
    problemText:"We understand that busy schedules can make it hard to give your dog the exercise they need. Our approach goes beyond a simple walk — we ensure your dog gets the right level of physical activity, attention, and engagement to stay healthy, active, and happy every day.",
  
  },
  webDev: {
    id: 5,
    brand: "INORBIT GROUP LTD.",
    name: "Web Development",
    subText:
      "Building responsive, high-performance websites that turn ideas into digital experiences.Creative designs that capture attention and communicate your brand story effectively.",
    imgURL: webDev,
     whyUs:
      "At Inorbit Group Ltd., we take pride in delivering reliable, high-quality plumbing services backed by a team of verified and experienced professionals. From minor repairs like fixing leaks and unclogging drains to complete plumbing installations and system upgrades, we handle every job with precision, care, and attention to detail. Our plumbers are trained to diagnose issues quickly and provide effective, long-lasting solutions for both residential and commercial clients.",
    job1: "Website Design & Development",
    job1p: "Custom-built, responsive websites designed to reflect your brand and deliver seamless user experiences.",

    job2: "Frontend & Backend Solutions",
    job2p: "Robust development covering both user interface and server-side functionality for high performance and scalability.",


    job3: "Maintenance & Optimization",
    job3p:"Ongoing support, updates, and performance optimization to keep your website secure, fast, and up to date.",
    
    servImg1: webServImg,

problemImg: weProblem,
    problemTitle: "OUTDATED WEBSITE THAT FAILS TO CONVERT",
    problemText:"A website should do more than just exist — it should convert visitors into customers. We analyze your current design, user experience, and performance to identify what’s holding you back. By redesigning with modern UI, fast performance, and clear user flow, we turn your website into a powerful business tool.",
  
  },
  it: {
    id: 6,
    brand: "INORBIT GROUP LTD.",
    name: "IT & Graphic Designing",
    subText:
      "Reliable IT services designed to optimize performance and minimize downtime.",
    imgURL: computerRepair,
     whyUs:
      "At Inorbit Group Ltd., we take pride in delivering reliable, high-quality plumbing services backed by a team of verified and experienced professionals. From minor repairs like fixing leaks and unclogging drains to complete plumbing installations and system upgrades, we handle every job with precision, care, and attention to detail. Our plumbers are trained to diagnose issues quickly and provide effective, long-lasting solutions for both residential and commercial clients.",
    job1: "Technical Support & Troubleshooting",
    job1p: "Quick and reliable solutions for hardware, software, and system issues to minimize downtime.",

    job2: "Network & System Setup",
    job2p: "Professional installation and configuration of networks, systems, and devices for smooth business operations.",


    job3: "Data Security & Maintenance",
    job3p:"Protecting your data with backup solutions, system monitoring, and regular maintenance services.",
    
    servImg1: comServImg,

    t:"general manager",
    review:"hi"
  },
};

export default serviceData;
