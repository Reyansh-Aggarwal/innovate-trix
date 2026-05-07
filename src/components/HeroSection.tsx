import { useEffect, useRef } from "react"
import gsap from "gsap";
import { cn } from "../lib/utils"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
    const blinkitRef = useRef<HTMLSpanElement>(null)
    const xRef = useRef<HTMLSpanElement>(null)
    const yeRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()

            gsap.set(blinkitRef.current, { y: 120, opacity: 0 })
            gsap.set(yeRef.current, { y: -120, opacity: 0 })
            tl
                // blinkit slides up
                .to(blinkitRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                    delay: 1,
                })
                // ye slides up
                .to(yeRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                })
        })

        return () => ctx.revert()
    }, [])

    return (
        <div id="HeroSection" data-snap
            className="w-full h-dvh bg-blinkYellow select-none snap-start">
            <div className="w-full h-full flex items-center justify-center">
                <div className={cn(
                    "w-fit overflow-hidden",
                    "grid grid-cols-5 items-center justify-around gap-x-[-rem]",
                    "font-celias-bold text-black")}>
                    <span
                        ref={blinkitRef}
                        className={cn(
                            "tracking-[-0.3rem] text-7xl col-span-2",
                            "md-tracking-[-0.7rem] md-text-[10rem]"
                        )}>
                        blink<span className="text-blinkGreen">it</span>
                    </span>
                    <span ref={xRef}
                        className="text-[5rem] text-center">
                        ×
                    </span>
                    <span
                        ref={yeRef}
                        className={cn(
                            "font-impact tracking-[-0.2rem] text-8xl col-span-2",
                            "md-tracking-[-0.3rem] md-text-[10rem]"
                        )}>
                        Y
                        <span className="text-blinkGreen">E</span>
                    </span>

                </div>
            </div>
        </div>
    )
}