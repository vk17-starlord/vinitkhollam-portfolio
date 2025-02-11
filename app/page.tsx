import { About } from "@/components/landing/about";
import Hero from "@/components/landing/hero";

 
export default function Home() {

  return (
    <div className="w-full">
      <Hero/>
      <div className="container px-4 lg:px-0 mx-auto flex justify-center items-center flex-col">
      <About></About>
      </div>
    </div>


  );
}
