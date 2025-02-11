import { About } from "@/components/landing/about";
import Hero from "@/components/landing/hero";
import { FlipWords } from "@/components/ui/flip-words";
import { Spotlight } from "@/components/ui/spotlight-new";

 
export default function Home() {
  const words = [
    "Buggy",
    "Overengineered",
    "Unscalable",
    "JavaScripted",
    "Bootstraped",
    "AI-Proof",
    "Responsive-ish",
    "Pixelated",
    "Cross-Browsered",
    "Plugin-Heavy",
    "Reactified",
    "Hardcoded",
    "Spaghetti-Coded",
    "Production-Breaking",
    "Stack-Overflowed",
    "Hotfixed",
    "Minified",
    "Memory-Leaking"
  ];  
  return (
    <div className="w-full">
      <Hero/>
      <div className="container px-4 lg:px-0 mx-auto flex justify-center items-center flex-col">
      <About></About>
      </div>
    </div>


  );
}
