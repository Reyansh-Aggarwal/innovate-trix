import { cn } from "../lib/utils"
import bearHead from "../assets/images/bearHead.png";
import { Ribbon } from "./Ribbon";

export const SplitSection = () => {
    return (
        <div id = "splitSection" data-snap
        className="w-full h-dvh flex flex-col bg-black/90 justify-around snap-start">
            <Ribbon />

            <div
            className = "flex flex-row justify-center align-center px-4 md:px-12 ">
                {/*YE*/}
                <div id="Ye"
                    className="w-full h-full flex flex-col items-center justify-around basis-1/3">
                    <h1 className="text-white font-impact tracking-[-0.2rem] text-8xl md:text-[9rem]">YE</h1>
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
                        "tracking-[-0.7rem] text-8xl md:text-[8rem] "
                    )}>
                        blinkit
                    </h1>
                </div>
            </div>
            
            <h1 className ={cn(
                "text-white font-celias-medium text-5xl text-center flex flex-row gap-12 justify-center"
            )}>
                <span className = "text-purple-500">
                    10 Albums. 
                </span>  
                <span className = "text-blinkYellow">
                    10 Drops.
                </span>
            </h1>

            <Ribbon />
        </div>
    )
}
