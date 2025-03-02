// import Image from "next/image";
import { TimelineDemo } from "./components/TimelineDemo";
import { FloatingDockDemo } from "./components/FloatingDockDemo";
import { HeroParallaxDemo } from "./components/HeroParallaxDemo";
import { SignupFormDemo } from "./components/SignupFormDemo";
import { MacbookScrollDemo } from "./components/MacbookScrollDemo";
import { ThreeDCardDemo } from "./components/ThreeDCardDemo";

export default function Home() {
  
  return(
    <div className="w-full h-screen bg-black">
    {/* <HeroParallaxDemo/> */}
    {/* <SignupFormDemo/> */}
    {/* <TimelineDemo/> */}
    {/* <ThreeDCardDemo/> */}
    {/* <div className="flex justify-end items-baseline"> */}
    {/* <FloatingDockDemo/> */}
    {/* </div> */}
    <MacbookScrollDemo/>
    {/* hey */}
    
    </div>
  );
}
