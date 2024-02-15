"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Work() {
  const work = [
    {
      role: "Devops Master",
      company: "iginious-tech",
      pic:
        "ignious.png",
      technologies: [
         "/aws.png",
        "/docker.png",
         "/jenkins.png"

      ],
      date: "May 2023 - JULY 2023",
      points: [
       " AWS cloud infrastructure using Terraform, enhancing scalability and reliability.",
        "Automated CI/CD pipelines with Jenkins, streamlining deployment processes and ensuring efficient code delivery.",
        "Containerized applications with Docker, facilitating consistent and reproducible deployment across environments.",
        "Implemented AWS services like EC2, S3, and RDS, optimizing resource allocation and enhancing system performance.",
        "Collaborated with cross-functional teams to troubleshoot issues and improve DevOps practices, fostering a culture of continuous improvement."
      ],
      repo: {
        
        live: "https://drive.google.com/file/d/1OFqcONGnYdKY3inXK3VOSM29bdK-CoJ7/view?usp=sharing",
      },
    },
    {
      role: "Mern Stack",
      company: "Syllogistek Systems Private Limited",
      pic:
        "/syllo.png",
      technologies: [
         "/aws.png",
        "/docker.png",
         "/jenkins.png"

      ],
      date: "July 2022 - July 2022",
      points: [
        "Developed responsive UIs with React and Bootstrap for seamless cross-device experience.",
        "Integrated MongoDB with Express and Node.js for efficient data handling in the ecommerce app.",
        "Implemented CRUD operations for product, improving platform functionality.",
        "Collaborated on designing RESTful APIs for frontend-backend communication in the MERN stack.",
        "Contributed to building a complete ecommerce solution with user auth, product browsing, cart management, and order processing.",
      ],
      repo: {
        
        live: "https://drive.google.com/file/d/1UKEnYEK2xXq-OXvO7vPZOXYuCDaX7P_J/view?usp=sharing",
      },
    },
    {
      role: "Introduction to machine Learning",
      company: "Silicon Institute of Technology",
      pic:
        "/silicon.png",
      technologies: [
         "/aws.png",
        "/docker.png",
         "/jenkins.png"

      ],
      date: "August 2021 - September 2021",
      points: [
        "Utilized Pandas and NumPy for preprocessing and analyzing large datasets.",
        "Implemented logistic regression and linear regression using scikit-learn for predictive modeling.",
        "Visualized data insights and model performance with Matplotlib.",
        " explore diverse machine learning Algoritm techniques.",
        "implement  a project on heart disease prediction ",
      ],
      repo: {
        
        live: "https://drive.google.com/file/d/1Fmr2UtdmfkYAalahwbC9GcdrvTpvp5Rm/view?usp=sharing",
      },
    },
    
    
 
 
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[900px]   flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-2 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Internship
      </h3>
      <div
        className="w-full  flex space-x-5 p-10 snap-x snap-mandatory 
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-x-scroll"
      >
        {work.map((item) => (
          <ExperienceCard  key={item.company} work={item} tech={item.technologies} />
        ))} 
      </div>
    </motion.div>
  );
}