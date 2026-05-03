import { HeroSection } from "../components/HeroSection.tsx"
import { Section } from "../components/Section.tsx"

export const Home = () => {
    return (
        <div className="w-full h-dvh">


            {/* hero section */}
            <HeroSection />

            {/* Section */}
            <Section />
        </div>
    )
}