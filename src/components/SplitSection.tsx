import { cn } from "../lib/utils"
import bearHead from "../assets/images/bearHead.png";
import { Ribbon } from "./Ribbon";
import gsap from "gsap";

export const SplitSection = () => {

    gsap.to("#yeYellowBg", {
        x: "+100%",
        scrollTrigger: {
            trigger: "#lowerRibbon",
            pin: true,
            start: "bottom bottom",
            end: "+=500",
            scrub: 1,
            snap: {
                snapTo: "labels",
                duration: { min: 0.2, max: 3 },
                delay: 0.2,
                ease: "power1.inOut",
            },
        },
    })
    return (
        <div id = "splitSection" data-snap
        className="w-full h-dvh flex flex-col bg-black/90 justify-around snap-start">
            <Ribbon />
            <div className="w-[2px] h-full bg-white left-1/2 absolute "/>
            <div
            className = "grid grid-cols-3 justify-center align-center px-4 md:px-12 text-white">

                {/*YE*/}
                <div id="Ye"
                    className="w-full h-full flex flex-col items-center justify-around basis-1/3">
                    <h1 className="text-white font-impact tracking-[-0.2rem] text-8xl md:text-[9rem]">YE</h1>

                    
                    <span className = "text-6xl font-celias-bold tracking-tighter">
                        6 Albums. 
                    </span>  

                    
                </div>

                <div className = "w-full flex flex-col justify-center md:justify-around items-center">
                    <img src = {bearHead} className = "object-cover max-w-full h-128" />
                    <span></span>
                </div>

                {/*blinkit*/}
                <div id="Blinkit"
                    className="w-full h-full flex flex-col items-center justify-around basis-1/3">
                    <h1 className={cn(
                        "text-white font-celias-medium ",
                        "tracking-[-0.6rem] text-8xl md:text-[8rem] "
                    )}>
                        blinkit
                    </h1>

                    <span className = "text-6xl font-celias-bold tracking-tighter">
                        6 Drops. 
                    </span>  
                </div>
            </div>
            
            <div id = "lowerRibbon" 
            className = "">   
                <Ribbon />
            </div>
            
        </div>
    )
}
