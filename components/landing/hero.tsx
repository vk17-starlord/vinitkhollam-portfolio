'use client';
import { FlipWords } from "@/components/ui/flip-words";
import { Spotlight } from "@/components/ui/spotlight-new";
export default function Hero() {
// Constant parts of your header that set the tone
const phrases: string[] = [
  "Crafting Clean,",           // e.g., "Crafting Clean, Responsive Web Experiences"
  "Building Bold,",            // e.g., "Building Bold, Adaptive Digital Journeys"
  "Designing Simple,",         // e.g., "Designing Simple, Dynamic Web Interactions"
  "Creating Seamless,",        // e.g., "Creating Seamless, Interactive Digital Designs"
  "Developing Dynamic,",       // e.g., "Developing Dynamic, Fluid Online Interfaces"
  "Innovating Intuitive,",     // e.g., "Innovating Intuitive, Modern Web Solutions"
  "Engineering Elegant,"       // e.g., "Engineering Elegant, Cutting-Edge Digital Creations"
];

// Matching flip words that complete the header phrases
const flipwords: string[] = [
  "Responsive Web Experiences",
  "Adaptive Digital Journeys",
  "Dynamic Web Interactions",
  "Interactive Digital Designs",
  "Fluid Online Interfaces",
  "Modern Web Solutions",
  "Cutting-Edge Digital Creations"
];

const tools = [ 
  'ChatGPT',
  'Google',
  'Stack Overflow',
  'GitHub',
  'VS Code',
]
  return (
<div className="min-h-screen  mt-[-20vh] pt-[10vh] w-full rounded-md flex items-center justify-center  bg-black/[0.96] top-0 antialiased bg-grid-white/[0.02] relative overflow-hidden">
<Spotlight />
<div className="min-h-[50vh] pt-[10vh] w-full rounded-md flex items-center justify-center bg-black/[0.96] top-0 antialiased bg-grid-white/[0.02] relative overflow-hidden">

      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
       
        <FlipWords className="text-yellow-50" words={phrases} />
        <FlipWords className="text-neutral-50" words={flipwords} />
        </h1>
        <div className="my-10 font-normal text-lg text-neutral-300 max-w-lg text-center mx-auto">
        <span className="text-gray-300">
          After countless hours on <span className="font-bold text-white"> <FlipWords className="text-neutral-50" words={tools} /></span>, I transform messy code into <span className="font-bold text-white">clean, responsive websites</span>.
         
          With clear design, solid <span className="font-bold text-white">React </span>, I build digital solutions that simply work.
        </span>
      </div>

        <div className="btn-container flex flex-wrap justify-center mt-8">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1.2px] hover:p-1 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full text-md px-10 py-2 w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 font-medium text-white backdrop-blur-3xl">
          View Projects 🚀
          </span>
        </button>
        </div>
      </div>

    </div>
    </div>
  );
}
