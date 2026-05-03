import albumBg from '../assets/albumBg.png';

export const SplitSection = () => {
    return (
        <div className="w-full h-dvh flex flex-row font-celias-medium tracking-[-0.6em]">

            <div id="Ye"
                style={{ backgroundImage: `url(${albumBg})` }}
                className="w-full h-full bg-cover bg-center flex items-center justify-center">
                <h1 className="text-white text-9xl">Ye</h1>
            </div>

            <div id="Blinkit"
                className="w-full h-full bg-blinkGreen flex items-center justify-center">
                <h1 className="text-blinkYellow text-9xl">blink<span className="text-blinkYellow">it</span></h1>
            </div>

        </div>
    )
}
