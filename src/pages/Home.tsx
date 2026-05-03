import { HeroSection } from "../components/HeroSection"
import { Section } from "../components/Section"

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