import Image from "next/image";
import React from "react";
import { Timeline } from "../components/ui/timeline";
import tpimg from "../../public/jigar-panchal-VamLqteS3uo-unsplash.jpg"; // Placeholder image

export function TimelineDemo() {
  const data = [
    {
      title: "2024 - Education & Achievements",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-100 text-sm md:text-xl font-bold font-serif mb-8 bg-gradient-to-r  bg-clip-text">
            Pursuing B.Tech at Rajiv Gandhi Institute of Technology and excelling in technical competitions.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-200 text-sm md:text-lg font-semibold font-serif">
              🚀 Participated in Amazon Hackathon
            </div>
            <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-200 text-sm md:text-lg font-semibold font-serif">
              🏆 Secured 2nd Prize in Viva College Treasure Hunt
            </div>
            <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-200 text-sm md:text-lg font-semibold font-serif">
              💻 Competed in DSA Competition at VJTI College
            </div>
            <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-200 text-sm md:text-lg font-semibold font-serif">
              🧠 Excelled in Viva College Technical Quiz
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={tpimg} // Replace with a relevant image (e.g., campus or achievement)
              alt="Education"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_30px_rgba(34,_42,_53,_0.2),_0_2px_4px_rgba(0,_0,_0,_0.15)] transform hover:scale-110 hover:rotate-3 transition-all duration-500 ease-in-out"
            />
            <Image
              src={tpimg} // Replace with a relevant image (e.g., award)
              alt="Achievement"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_30px_rgba(34,_42,_53,_0.2),_0_2px_4px_rgba(0,_0,_0,_0.15)] transform hover:scale-110 hover:rotate-3 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 - Professional Experience",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-100 text-sm md:text-xl font-bold font-serif mb-8 bg-gradient-to-r bg-clip-text">
            Full Stack Developer Intern at Genie Soft System PVT. LTD., mastering code and leadership.
          </p>
          <p className="text-neutral-500 dark:text-neutral-200 text-sm md:text-base font-medium font-serif mb-8">
            Built responsive websites and dynamic apps using React, Node.js, and RESTful APIs while leading a team of 5.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={tpimg} // Replace with a relevant internship/project image
              alt="Internship Project"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_30px_rgba(34,_42,_53,_0.2),_0_2px_4px_rgba(0,_0,_0,_0.15)] transform hover:scale-110 hover:rotate-3 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 - Co-Founder of DevDazzle",
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-100 text-sm md:text-2xl font-bold font-serif mb-5 bg-gradient-to-r bg-clip-text tracking-wide">
            Co-Founded DevDazzle: Unleashing Web Innovation.
          </p>
          <p className="text-neutral-500 dark:text-neutral-200 text-sm md:text-lg font-medium font-serif mb-4">
            Leading a team to craft cutting-edge web applications using React, Node.js, and TypeScript, delivering sleek and seamless user experiences. We specialize in developing all kinds of full-stack applications.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={tpimg} // Replace with DevDazzle logo or team photo
              alt="DevDazzle Logo"
              width={500}
              height={500}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_30px_rgba(34,_42,_53,_0.2),_0_2px_4px_rgba(0,_0,_0,_0.15)] transform hover:scale-110 hover:rotate-3 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}