"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";


type Props = {};

export default function Skills({}: Props) {
  const skill_arr = [
    {
      name: "C",
      img: "/c.png",
    },
    {
      name: "C++",
      img: "/c++.png",
    },
    {
      name: "Html",
      img: "/html.png",
    },
    {
      name: "javascript",
      img: "/javascript.png",
    },
    {
      name: "React",
      img: "/react.png",
    },
    {
      name: "Node js",
      img: "/js.png",
    },
    {
      name: "Tailwind",
      img: "/tailwind.png",
    },
    {
      name: "Next.js",
      img: "/next.png",
    },
    {
      name: "MongoDb",
      img: "/mongo.png",
    },
    {
      name: "Wordpress",
      img: "/wordpress.png",
    },

    {
      name: "Aws",
      img: "/aws.png",
    },
    {
      name: "Docker",
      img: "/docker.png",
    },
    {
      name: "jenkins",
      img: "/jenkins.png",
    },
    
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for its name.
      </h3>
      <div className="grid grid-cols-4 gap-5 ">
        {skill_arr.map((item) => (
          <Skill key={item.name} img={item.img} title={item.name} />
        ))}
      </div>
    </motion.div>
  );
}
