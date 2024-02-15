import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
type Props = {
    proj: {
        name: string;
        pic: string;
        date: string;
        points: string[];
        repo: {
            git: string;
        };
    };
    tech: string[];
};

const ProjectsCard = ({ proj, tech }: Props) => {
 
  return (
    <article
      className="top-24 flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-8 h-auto opacity-80 hover:opacity-100 cursor-pointer hover:ease-in-out transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        className="h-24 w-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={proj.pic}
        alt=""
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="px-10 md:px-10"
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h4 className="text-3xl text-center font-normal">{proj.name}</h4>
        <div className="flex space-x-5 my-2">
          {tech.map((item, index) => (
            <img key={index} className="h-8 w-8 rounded-full" src={item} alt="" />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-500">{proj.date}</p>
        <ul className="list-disc space-y-4 ml-5 text-base ">
          {proj.points.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
      <div className="flex space-x-5 bottom-0">
        <Link href={proj.repo.git} passHref>
          <AiFillGithub className="h-10 w-10 cursor-pointer" />
        </Link>
      </div>
    </article>
  );
};

export default ProjectsCard;
