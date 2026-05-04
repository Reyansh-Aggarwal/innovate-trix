export const HeroSection = () => {
    return (
        <div id="HeroSection" className="w-full h-dvh bg-blinkYellow select-none">
            <div className="w-full h-full flex items-center justify-center">
                <div className="font-celias-bold text-black grid grid-cols-3 items-center justify-around">
                    <span className="tracking-[-0.7rem] text-[10rem]">
                        blink<span className="text-blinkGreen">it</span>
                    </span>
                    <span className="text-[5rem] mb-2 text-center">×</span>
                    <span className="font-impact text-[10rem] tracking-[-0.3rem] text-left">YE</span>
                </div>
            </div>
        </div>
    )
}