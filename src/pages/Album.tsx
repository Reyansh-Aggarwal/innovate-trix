import { useEffect, useRef } from "react"
import Lenis from "lenis"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Outlet, useNavigate } from "react-router-dom"
import { cn } from "../lib/utils"
import bearHead from "../assets/images/bearHead.png";
import gsap from "gsap";

export const Album = () => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleNavigate = (e: React.MouseEvent) => {
        e.preventDefault();

        gsap.timeline()
            .to(overlayRef.current, {
                scaleY: 1,
                duration: 0.45,
                ease: "power3.inOut",
                transformOrigin: "bottom",
                onComplete: () => navigate("/"),  // navigate at peak
            });
    };

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        ScrollTrigger.scrollerProxy("#splitSection", {
            scrollTop(value: number | undefined) {
                if (typeof value === "number") {
                    lenis.scrollTo(value, { lerp: 0.1, force: true });
                }
                return lenis.scroll;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
        });

        function raf(time: number) {
            lenis.raf(time);
            ScrollTrigger.update();
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        }
    }, [])

    return (
        <div className={cn(
            "w-full min-h-dvh font-celias snap-start bg-blinkYellow",
            "flex flex-col items-left align-center text-center")}>

            <div
                ref={overlayRef}
                className="fixed inset-0 bg-blinkYellow z-50 pointer-events-none"
                style={{ transform: "scaleY(0)", transformOrigin: "bottom" }}
            />

            <button
                onClick={handleNavigate}
                className={cn(
                    "md:absolute top-0 flex justify-center items-center md:items-left md:m-2 w-full md:w-fit z-20",
                    "md:rounded-full p-2 bg-blinkYellow transition-all duration-300 animate-fade-in-delay opacity-0",
                    "hover:p-4 hover:shadow hover:shadow-md hover:shadow-black/80"
                )}>
                <img src={bearHead} className="max-h-[10dvh] w-auto items-center" />
            </button>

            <Outlet />

        </div>
    )
}