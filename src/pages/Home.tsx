import { AlbumSection } from "../components/AlbumSection.tsx"
import { HeroSection } from "../components/HeroSection.tsx"
import { SplitSection } from "../components/SplitSection.tsx"

export const Home = () => {
    return (
        <div className="w-full h-dvh">


            {/* hero section */}
            <HeroSection />

            {/* split section */}
            <SplitSection />

            {/* album section */}
            <AlbumSection />
        </div>
    )
}