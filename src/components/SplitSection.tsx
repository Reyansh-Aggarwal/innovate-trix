import { cn } from "../lib/utils"
import bearHead from "../assets/images/bearHead.png";
import { Ribbon } from "./Ribbon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const SplitSection = () => {
    const yeOverlayRef = useRef<HTMLSpanElement>(null);
    const blinkitOverlayRef = useRef<HTMLSpanElement>(null);
    const blinkitBgRef = useRef<HTMLDivElement>(null);
    const dropsTextOverlayRef = useRef<HTMLSpanElement>(null); // NEW
    const yeBgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#splitSection",
                    pin: true,
                    start: "center center",
                    end: "+=1500",
                    scrub: 0.6,
                },
            });

            tl.fromTo(
                yeOverlayRef.current,
                { clipPath: "inset(0 100% 0 0)" },
                { clipPath: "inset(0 0% 0 0)", ease: "power3.inOut" },
                0
            )
                .fromTo(
                    yeBgRef.current,
                    { clipPath: "inset(0 100% 0 0)" },
                    { clipPath: "inset(0 0% 0 0)", ease: "power3.inOut" },
                    0
                )
                .fromTo(
                    blinkitOverlayRef.current,
                    { clipPath: "inset(0 0 0 100%)" },
                    { clipPath: "inset(0 0 0 0%)", ease: "power3.inOut" },
                    0
                )
                .fromTo(
                    blinkitBgRef.current,
                    { clipPath: "inset(0 0 0 100%)" },
                    { clipPath: "inset(0 0 0 0%)", ease: "power3.inOut" },
                    0
                )
                // 6 Drops. text: right-to-left, white → blinkGreen
                .fromTo(
                    dropsTextOverlayRef.current,
                    { clipPath: "inset(0 0 0 100%)" },
                    { clipPath: "inset(0 0 0 0%)", ease: "power3.inOut" },
                    0
                );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div id="splitSection" data-snap
            className="w-full h-dvh flex flex-col bg-white justify-between select-none">
            <Ribbon />
            <div className="w-[0px] h-full bg-white left-1/2 absolute z-30 hidden" /> {/* This is just there */}

            <div className="h-full flex flex-col md:grid md:grid-cols-2 justify-around md:justify-center align-center text-white">

                {/* YE */}
                <div id="Ye"
                    className=" relative w-full h-full flex flex-col items-center justify-center md:justify-around">

                    <div className="absolute inset-0 pointer-events-none">
                        <div
                            ref={yeBgRef}
                            className="absolute inset-0 bg-dark z-0"
                            style={{ clipPath: "inset(0 100% 0 0)" }}
                        />
                    </div>

                    <span className="relative inline-block">
                        <h1 className="text-white font-impact tracking-[-0.2rem] text-8xl md:text-[9rem]">
                            YE
                        </h1>
                        <span
                            ref={yeOverlayRef}
                            className={cn(
                                "absolute top-0 left-0 pr-8",
                                "font-impact tracking-[-0.2rem] text-8xl md:text-[9rem] text-blinkYellow",
                                "whitespace-nowrap pointer-events-none"
                            )}
                            style={{ clipPath: "inset(0 100% 0 0)" }}>
                            YE
                        </span>
                    </span>

                    <span className="relative text-5xl font-celias-bold tracking-tighter">
                        6 Albums.
                    </span>
                </div>

                <div id="bearImage"
                    className="flex flex-col justify-center items-center absolute w-[40dvw] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-20">
                    <img src={bearHead} className="object-cover max-w-full hidden md:block" />
                </div>


                {/* Blinkit */}
                <div id="Blinkit"
                    className="relative w-full h-full flex flex-col-reverse md:flex-col items-center justify-center md:justify-around -mr-4 md:-mr-12">
                    <div className="absolute inset-0 pointer-events-none">
                        <div
                            ref={blinkitBgRef}
                            className="absolute inset-0 bg-blinkYellow z-0"
                            style={{ clipPath: "inset(0 0 0 100%)" }}
                        />
                    </div>

                    <span className="relative inline-block md:pr-8">
                        <h1 className={cn(
                            "text-white font-celias-bold",
                            "tracking-[-0.6rem] text-8xl md:text-[8rem]"
                        )}>
                            blinkit
                        </h1>
                        <span
                            ref={blinkitOverlayRef}
                            className={cn(
                                "absolute top-0 left-0 font-celias-bold pointer-events-none",
                                "tracking-[-0.6rem] text-8xl md:text-[8rem]",
                                "text-blinkGreen whitespace-nowrap pr-8"
                            )}
                            style={{ clipPath: "inset(0 0 0 100%)" }}
                        >
                            blinkit
                        </span>
                    </span>

                    <span className="relative z-10 inline-block">
                        <span className="text-5xl inset-0 font-celias-bold tracking-tighter text-white absolute">
                            6 Drops.
                        </span>
                        <span
                            ref={dropsTextOverlayRef}
                            className={cn(
                                "top-0 left-0 overflow-visible",
                                "text-5xl font-celias-bold tracking-tighter text-dark",
                                "whitespace-nowrap pointer-events-none")}
                            style={{ clipPath: "inset(0 0 0 100%)" }}
                        >
                            6 Drops.
                        </span>
                    </span>
                </div>
            </div>

            <div id="lowerRibbon" className="z-100">
                <Ribbon />
            </div>
        </div>
    );
};