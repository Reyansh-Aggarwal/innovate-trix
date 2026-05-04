import { useEffect } from "react"
import { AlbumSection } from "../components/AlbumSection.tsx"
import { HeroSection } from "../components/HeroSection.tsx"
import { SplitSection } from "../components/SplitSection.tsx"
import Lenis from "lenis"

export const Home = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
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