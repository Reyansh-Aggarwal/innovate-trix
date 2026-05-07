import { useEffect } from "react"
import { AlbumSection } from "../components/AlbumSection.tsx"
import { HeroSection } from "../components/HeroSection.tsx"
import { SplitSection } from "../components/SplitSection.tsx"
import Lenis from "lenis"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const Home = () => {
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
        <div className="w-full min-h-dvh snap-y snap-mandatory">

            {/*Hero Section*/}
            <HeroSection />

            {/*Split Section*/}
            <SplitSection />

            {/*Drop Section*/}
            <AlbumSection />
        </div>
    )
}