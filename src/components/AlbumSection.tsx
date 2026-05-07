import { cn } from "../lib/utils"

export const AlbumSection = () => {

    return (
        <div id="dropSection" data-snap
        className={cn(
            "w-full h-dvh bg-blinkYellow font-celias-bold snap-start",
            "flex flex-col items-center justify-center align-center text-center "
            )}>
            <h1 className="text-blinkGreen text-7xl px-8 pb-8 pt-4">THE COLLECTION</h1>

            <div id = "tiles"
            className = "w-full grid grid-template-col-2 md:flex md:flex-wrap items-center justify-center">
                <div id = "tile"
                className="items-center justify-center text-white text-md px-6 md:px-12">
                    <div className={cn(
                        "flex flex-col justify-center items-center gap-4 bg-red-500 backdrop-blur-sm",
                        "py-12 px-6 md:px-12 md:mx-4 outline outline-white/10 rounded-3xl",
                        "text-xl")}>
                        <div className="w-[10rem] h-[10rem] md:w-[6rem] md:h-[6rem] bg-white "></div>
                        <h1 className="">Graduation</h1>

                        <button className={cn(
                            "py-2 px-4 rounded-4xl transition-all",
                            "text-black bg-blinkYellow hover:shadow-lg hover:shadow-blinkYellow/50 "
                            )}>
                            Buy Now
                        </button>
                    </div>
                </div>
                <div id = "tile"
                className="items-center justify-center text-white text-md px-6 md:px-12">
                    <div className={cn(
                        "flex flex-col justify-center items-center gap-4 bg-red-500 backdrop-blur-sm",
                        "py-12 px-6 md:px-12 md:mx-4 outline outline-white/10 rounded-3xl",
                        "text-xl")}>
                        <div className="w-[10rem] h-[10rem] md:w-[6rem] md:h-[6rem] bg-white "></div>
                        <h1 className="">Graduation</h1>

                        <button className={cn(
                            "py-2 px-4 rounded-4xl transition-all",
                            "text-black bg-blinkYellow hover:shadow-lg hover:shadow-blinkYellow/50 "
                            )}>
                            Buy Now
                        </button>
                    </div>
                </div>
                
            </div>

            
        </div>
    )


}