"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from "./ProjectsCard";

type Props = {};

export default function Projects() {
  const project = [
   
    {
      name: "Ecommerce App",
      pic:
        "/cart.png",
      technologies: [
        "/react.png",
        "/javascript.png",
        "/js.png",
        "/mongo.png",
       "/mui.png",
      ],
      date: "July 2022 - october 2022",
      points: [
        "A full stack MERN Project .",
        "Uses React and Redux at the Frontend for state management and component architecture",
        "Utilizes Node.js and MongoDB at the Backend for server-side logic and database management.",
        "Offers comprehensive CRUD functionality, enabling users to Create, Read, Update, and Delete data seamlessly.",
        "Incorporates robust data validation mechanisms wherever necessary to ensure data integrity and security throughout the application.",
        " integrates the Stripe payment gateway, providing users with a secure and hassle-free online transaction experience."
      ],
      repo: {
        git: "https://github.com/Sanjeet76/onlineShopping",
     
      },
    },
    {
      name: "Heart Disease Prediction",
      pic:
        "/heart.png",
      technologies: [
        "/python.png",
        "/numpy.png",
        "/panda.png",
        "/jupiter.png"
       
      ],
      date: "July 2022 - December 2022",
      points: [
        "Used Pandas and NumPy in Jupyter Notebook to prepare the heart disease dataset for analysis.",
        " Implemented scikit-learn's logistic regression for heart disease prediction.",
       " Feature Importance: Utilized heatmap visualization to identify key predictors of heart disease.",
        "Model Evaluation: Assessed model performance using standard metrics like accuracy and precision.",
        "Iterative Refinement: Continuously improved the model through experimentation with features and parameters.",
        
        
        
        
        
      ],
      repo: {
        git: "https://github.com/Sanjeet76/Heart-Disease",
       
      },
    },
    {
      name: "Portfolio Webpage",
      pic:
        "/work.png",
      technologies: [
        "/framer.png",
        "/next.png",
        "ts.png",
        "tailwind.png",
        "html.png",
      ],
      date: "July 2022 - December 2022",
      points: [
        "A Portfolio webpage made using NextJS and TypeScript",
        "Uses Framer-motion for all the animations and transitions ",
        "All the CSS part is done using Tailwind CSS.",
        "Detailed information about the projects, skills and personal background",
        "A working Contact Me section which redirects to the native email app.",
      ],
      repo: {
        git: "https://github.com/",
       
      },
    }, 
    {
      name: "Flipkart Clone",
      pic:
        "/flipkart.png",
      technologies: [
        "/react.png",
        "/javascript.png",
        "/js.png",
        "/mui.png",
        "/mongo.png",
       
      ],
      date: "july 2023 - sept 2023",
      points: [
       " A complete clone of Flipkart.com with an identical user interface, product listing, and checkout process.",
       "Built using MongoDB for the backend database to store product information and user data.",
        "Utilizes React for the frontend, incorporating Material-UI for design components and React-Bootstrap for layout and styling. ",
        "Includes features such as user authentication, product search functionality, and shopping cart management.",
        
        
      ],
      repo: {
        git: "https://github.com/Sanjeet76/flipkart",
      
      },
    },
  
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[900px]   flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-2 md:px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="  uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="w-full  flex space-x-5 p-10 snap-x snap-mandatory 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-x-scroll"
      >
        {project.map((item) => (
          <ProjectsCard key={item.name} proj={item} tech={item.technologies} />
        ))}
      </div>
    </motion.div>
  );
}