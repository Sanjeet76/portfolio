import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { FaGoogleDrive } from "react-icons/fa";
type Props = {
  work: {
    role: string;
    company: string;
    pic: string;
    date: string;
    points: string[];
    repo: {
      live: string;
    };
  };
  tech: string[];
};

const ExperienceCard = ({ work, tech }:Props) => {

  return (
    <article
      className="top-24 flex flex-col rounded-lg items-center space-y-1 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-8 h-auto opacity-80 hover:opacity-100 cursor-pointer hover:ease-in-out transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        className="h-24 w-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={work.pic}
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
        <h4 className="text-3xl font-normal">{work.role}</h4>
        <h6 className="text-xl font-normal">{work.company}</h6>
        <p className="uppercase py-5 text-gray-500">{work.date}</p>
        <ul className="list-disc space-y-4 ml-5 text-base">
          {work.points.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
      <div className="flex space-x-5 bottom-0">
        <Link href={work.repo.live}>
          <FaGoogleDrive className="h-10 w-10" />
        </Link>
      </div>
    </article>
  );
};

export default ExperienceCard;
