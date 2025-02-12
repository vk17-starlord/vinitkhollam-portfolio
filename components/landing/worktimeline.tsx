"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BriefcaseBusiness, Sparkles } from "lucide-react";

export function WorkTimeline() {

  const rtCampTech = [
    {
      'name': 'Next.js',
      'icon': '/nextdotjs.svg'
    },
    {
      'name': 'WordPress',
      'icon': '/wordpress.svg'
    },
    {
      'name': 'PHP',
      'icon': '/php.svg'
    },
  ];

  const secureBlinkTech = [
    {
      'name': 'vue.js',
      'icon': '/vuedotjs.svg'
    },
    {
      'name': 'tailwindcss',
      'icon': '/tailwindcss.svg'
    },
    {
      'name': 'nodejs',
      'icon': '/nodedotjs.svg'
    },
  ];


  const mentoMindTech = [
    {
      'name': 'Figma',
      'icon': 'figma.svg'
    },
    {
      'name': 'Framer Motion',
      'icon': 'framer.svg'
    },
  ];
  const data = [
    {
      title: "rtCamp",
      content: (
        <div className="max-w-[260px] md:max-w-full">
          <div className="overflow-hidden rounded-md cursor-pointer">
          <Image src={'/rtcamp.png'} className="rounded-md w-full h-auto transition-transform duration-300 ease-in-out hover:scale-125" width={500} height={500} alt="Blinkstore"></Image>
         </div>
         <p className="text-white font-semibold mt-5 inline-flex"><BriefcaseBusiness className="mr-2" /> Jan 2024 - Present</p>
          <ul className="text-neutral-200 my-5 font-normal  list-disc list-inside space-y-2">
            <div className="py-0.5 text-gray-300 flex justify-start items-center gap-2 text-md"> <Sparkles className="h-5 w-5 text-xs md:text-sm text-pink-500" /> Refactored UX for Customer Data Platform.</div>
            <div className="py-0.5 text-gray-300 flex justify-start items-center gap-2 text-md"><Sparkles className="h-5 w-5 text-xs md:text-sm text-pink-500" /> Built custom WP plugins & APIs for CDP.</div>
            <div className="py-0.5 text-gray-300 flex justify-start items-center gap-2 text-md"> <Sparkles className="h-5 w-5 text-xs md:text-sm text-pink-500" /> Contributed to Gutenberg & WordPress</div>
          </ul>
       
          <div className="w-full gap-3 max-w-[260px] flex-wrap overflow-hidden md:max-w-full flex justify-start items-start ">
            {
              rtCampTech.map((tech, index) => (
                <span id="badge-dismiss-green" key={index} className="capitalize flex hover:bg-black cursor-pointer justify-center items-center gap-3 rounded-lg font-semibold border-white/50 border  px-2 sm:px-5 py-2.5 text-xs md:text-sm fill-blue-600 text-white bg-gray-800/50">
                 {tech.name}
                 <Image className="invert hidden sm:flex" src={tech.icon} width={20} height={20} alt={""}></Image>
                </span>
              ))
            }
          </div>
        </div>
      ),
    },
    {
      title: "Secure Blink",
      content: (
        <div className="max-w-[260px] md:max-w-full">
          <div className="overflow-hidden rounded-md cursor-pointer">
          <Image src={'/secureblink.png'} className="rounded-md w-full h-auto transition-transform duration-300 ease-in-out hover:scale-125" width={500} height={500} alt="Blinkstore"></Image>
         </div>
         <p className="text-white font-semibold mt-5 inline-flex"><BriefcaseBusiness className="mr-2" /> July 2023 - Jan 2024</p>
          <ul className="text-neutral-200  my-5 font-normal  list-disc list-inside space-y-2">
            <div className="py-0.5 text-gray-300 text-md flex justify-start items-center gap-2"><Sparkles className="h-5 w-5 text-xs md:text-sm text-yellow-500"></Sparkles> Enhanced frontend performance using Vue.</div>
            <div className="py-0.5 text-gray-300 text-md flex justify-start items-center gap-2"><Sparkles className="h-5 w-5 text-xs md:text-sm text-yellow-500"> </Sparkles> Implemented secure web development best practices.</div>
            <div className="py-0.5 text-gray-300 text-md flex justify-start items-center gap-2"><Sparkles className="h-5 w-5 text-xs md:text-sm text-yellow-500"> </Sparkles> Collaborated with teams to deliver secure web apps.</div>
          </ul>

            <div className="w-full flex-wrap max-w-[260px] md:max-w-full gap-3 flex justify-start items-start ">
            {
              secureBlinkTech.map((tech, index) => (
                <span id="badge-dismiss-green" key={index} className="capitalize flex hover:bg-black cursor-pointer justify-center items-center gap-3 rounded-lg font-semibold border-white/50 border  px-2 sm:px-5 py-2.5 text-xs md:text-sm fill-blue-600 text-white bg-gray-800/50">
                  {tech.name}
                 <Image className="invert" src={tech.icon} width={20} height={20} alt={""}></Image>
                </span>
              ))
            }
          </div>
        </div>
      ),
    },
    {
      title: "Blinkstore",
      content: (
        <div className="max-w-[260px] md:max-w-full">

        <div className="overflow-hidden rounded-md cursor-pointer">
          <Image src={'/blinkstore.png'} className="rounded-md w-full h-auto transition-transform duration-300 ease-in-out hover:scale-125" width={500} height={500} alt="Blinkstore"></Image>
         </div>
         <p className="text-white font-semibold mt-5 inline-flex"><BriefcaseBusiness className="mr-2" /> Jan 2023 - July 2023</p>
          <ul className="text-neutral-200 max-w-[260px] md:max-w-full my-5 font-normal  list-disc list-inside space-y-2">
            <div className="py-0.5 text-gray-300 text-md flex justify-start items-center gap-2"><Sparkles className="h-5 w-5 text-xs md:text-sm text-indigo-500"></Sparkles> Migrated Vue 2 codebase to Vue 3 with Composition API.</div>
            <div className="py-0.5 text-gray-300 text-md flex justify-start items-center gap-2"><Sparkles className="h-5 w-5 text-xs md:text-sm text-indigo-500"></Sparkles> Built a Shopify-like Print-on-Demand site generator.</div>
            <div className="py-0.5 text-gray-300 text-md flex justify-start items-center gap-2"><Sparkles className="h-5 w-5 text-xs md:text-sm text-indigo-500"></Sparkles> Supported 10k+ users and wrote technical guides.</div>
          </ul>
           <div className="w-full flex-wrap py-2 max-w-[260px] md:max-w-full gap-3 flex justify-start items-start ">
            {
              secureBlinkTech.map((tech, index) => (
                <span id="badge-dismiss-green" key={index} className="capitalize flex hover:bg-black cursor-pointer justify-center items-center gap-3 rounded-lg font-semibold border-white/50 border  px-2 sm:px-5 py-2.5 text-xs md:text-sm fill-blue-600 text-white bg-gray-800/50">
                 {tech.name}
                 <Image className="invert" src={tech.icon} width={20} height={20} alt={""}></Image>
                </span>
              ))
            }
          </div>
        </div>
      ),
    },
    {
      title: "MentoMind",
      content: (
        <div className="max-w-[260px] md:max-w-full"> 
        <div className="overflow-hidden rounded-md cursor-pointer">
         <Image src={'/mentomind.png'} className="rounded-md w-full h-auto transition-transform duration-300 ease-in-out hover:scale-125" width={500} height={500} alt="Blinkstore"></Image>
        </div>

           <p className="text-white font-semibold mt-5 inline-flex"><BriefcaseBusiness className="mr-2" /> Oct 2023 - Jan 2023</p>
          <ul className="text-neutral-200 max-w-[260px] md:max-w-full  my-5 font-normal  list-disc list-inside space-y-2">
            <div className="py-0.5 text-gray-300 text-md flex justify-start items-center gap-2"><Sparkles className="h-5 w-5 text-xs md:text-sm text-green-500"> </Sparkles> Built ed-tech tool to improve learning experiences.</div>
            <div className="py-0.5 text-gray-300 text-md flex justify-start items-center gap-2"><Sparkles className="h-5 w-5 text-xs md:text-sm text-green-500"> </Sparkles> Designed intuitive, user-focused interfaces.</div>
            <div className="py-0.5 text-gray-300 text-md flex justify-start items-center gap-2"><Sparkles className="h-5 w-5 text-xs md:text-sm text-green-500"> </Sparkles> Added new features based on user feedback.</div>
          </ul>
          <div className="w-full flex-wrap max-w-[260px] md:max-w-full pb-2 gap-3 flex justify-start items-start ">
            {
              mentoMindTech.map((tech, index) => (
                <span id="badge-dismiss-green" key={index} className="capitalize flex hover:bg-black cursor-pointer justify-center items-center gap-3 rounded-lg font-semibold border-white/50 border  px-2 sm:px-5 py-2.5 text-xs md:text-sm fill-blue-600 text-white bg-gray-800/50">
                {tech.name}
                 <Image className="invert" src={tech.icon} width={20} height={20} alt={""}></Image>
                </span>
              ))
            }
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full overflow-hidden">
      <Timeline data={data} />
    </div>
  );
}
