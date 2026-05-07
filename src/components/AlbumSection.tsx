import { cn } from "../lib/utils"
import graduationCover from "../assets/images/album-covers/graduation.png";
import mbdtfCover from "../assets/images/album-covers/mbdtf.png";
import { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router";

export const AlbumSection = () => {
    const sentinelRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsSticky(!entry.isIntersecting),
            { threshold: 0, rootMargin: "180px 0px 0px 0px" }
        );

        if (sentinelRef.current) observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div id="dropSection" data-snap
            className={cn(
                "w-full min-h-dvh bg-blinkYellow font-celias-bold snap-start",
                "flex flex-col items-center align-center text-center py-8 gap-40"
            )}>

            {/* Zero-height sentinel — sits just above the sticky header */}
            <div ref={sentinelRef} className="h-0 w-full" />

            <div className={cn(
                "w-full text-center px-20 sticky top-0 z-20 transition-all duration-500 w-fit",
                isSticky ? "py-3" : ""
            )}>
                <h1 className={cn(
                    "text-black transition-all duration-300 px-8  rounded-2xl bg-blinkYellow",
                    isSticky ? "text-5xl shadow shadow-md shadow-black/30 py-4" : "text-5xl md:text-7xl"
                )}>
                    the collection
                </h1>
            </div>

            <div id="tiles"
                className="w-full grid grid-cols-1 md:flex md:flex-wrap items-center justify-center gap-4 md:gap-40 px-12 font-celias-medium z-10">
                <div id="tile"
                    className={cn(
                        "flex flex-col justify-center items-center gap-8 md:gap-16",
                        "py-12 px-16 md:px-12 md:mx-4 rounded-4xl w-full md:w-fit lg:max-w-[25dvw]",
                        "bg-dark text-blinkYellow text-5xl md:text-4xl",
                        "shadow shadow-lg shadow-black/80")}>

                    <div className="flex flex-col items-center justify-center gap-4">
                        <img src={graduationCover} alt="Graduation"
                            className="h-[50dvh] w-auto rounded-3xl" />
                        <h1 className="font-celias-medium">Graduation <br /> <span className="text-dark">spacemaker</span></h1>
                    </div>
                    <NavLink to="/album/graduation" end>
                        <button className={cn(
                            "py-12 w-full",
                            "md:py-4 px-12 rounded-4xl transition-all",
                            "text-black text-5xl md:text-3xl",
                            "bg-blinkYellow hover:shadow-lg hover:shadow-blinkYellow/50"
                        )}>
                            take a look..
                        </button>
                    </NavLink>

                </div>
                <div id="tile"
                    className={cn(
                        "flex flex-col justify-center items-center gap-8 md:gap-16",
                        "py-12 px-16 md:px-12 md:mx-4 rounded-4xl w-full md:w-fit lg:max-w-[25dvw]",
                        "bg-dark text-blinkYellow text-5xl md:text-4xl",
                        "shadow shadow-lg shadow-black/80")}>

                    <div className="flex flex-col items-center justify-center gap-4">
                        <img src={mbdtfCover} alt="MBDTF"
                            className="h-[50dvh] w-auto rounded-3xl" />
                        <h1 className="font-celias-medium text-wrap">My Beautiful Dark Twisted Fantasy</h1>
                    </div>
                    <NavLink to="/album/mbdtf" end>
                        <button className={cn(
                            "py-12 w-full",
                            "md:py-4 px-12 rounded-4xl transition-all",
                            "text-black text-5xl md:text-3xl",
                            "bg-blinkYellow hover:shadow-lg hover:shadow-blinkYellow/50"
                        )}>
                            take a look..
                        </button>
                    </NavLink>

                </div>
            </div>
        </div>
    );
};