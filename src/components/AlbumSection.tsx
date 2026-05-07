import { cn } from "../lib/utils"

export const AlbumSection = () => {

    return (
        <div id="dropSection" data-snap
            className={cn(
                "w-full min-h-dvh bg-blinkYellow font-celias-bold snap-start",
                "flex flex-col items-center align-center text-center py-8 gap-40"
            )}>
            <h1 className="text-black text-7xl px-8 pt-8">THE COLLECTION</h1>

            <div id="tiles"
                className="w-full grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-4 md:gap-0 px-2 font-celias">
                <div id="tile"
                    className={cn(
                        "flex flex-col justify-center items-center gap-16",
                        "py-12 px-6 md:px-12 md:mx-4 rounded-3xl ",
                        "bg-black/90 text-blinkYellow text-2xl md:text-4xl")}>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="w-[10rem] h-[10rem] md:w-[12rem] md:h-[12rem] bg-white "></div>
                        <h1 className="">Graduation</h1>
                    </div>

                    <button className={cn(
                        "py-4 px-8",
                        "md:py-4 md:px-12 rounded-4xl transition-all",
                        "text-black bg-blinkYellow hover:shadow-lg hover:shadow-blinkYellow/50"
                    )}>
                        Buy Now
                    </button>
                </div>
            </div>


        </div>
    )


}