import { cn } from "../lib/utils"

export const AlbumSection = () => {

    return (
        <div id="dropSection" data-snap
        className={cn(
            "w-full h-dvh bg-blackTexture font-celias-bold snap-start",
            "flex flex-col items-center md-items-left justify-center "
            )}>
            <h1 className="text-white text-7xl px-8 pb-8">THE COLLECTION</h1>

            <div className="w-full h-[70vh] items-center justify-center text-white text-md px-6 md:px-12">
                <div className={cn(
                    "flex flex-col justify-center items-center gap-4 backdrop-blur-sm",
                    "w-fit py-12 px-6 outline outline-white/10 rounded-3xl",
                    "text-xl")}>
                    <div className="w-[6rem] h-[6rem] bg-white "></div>
                    <h1 className="">College Dropout</h1>

                    <button className={cn(
                        "py-2 px-4 rounded-4xl transition-all",
                        "text-black bg-blinkYellow hover:shadow-lg hover:shadow-blinkYellow/50 "
                        )}>
                        Buy Now
                    </button>
                </div>
                
            </div>
        </div>
    )


}