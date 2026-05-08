import { cn } from "../../lib/utils"
import albumImage from "../../assets/images/album-covers/donda.png";

export const Donda = () => {

    const list = ["DETERGENTS", "AIR FRESHENERS", "FABRIC SOFTENER", "SURFACE CLEANERS"];

    return (
        <div className={cn(
            "w-full min-h-dvh flex flex-col justify-between md:justify-around items-center select-none",
            "bg-dark text-bullyLight font-druk-bold"
        )}>
            <div className="w-full h-fit text-center pt-8 pb-16 md:pt-0 md:pb-0 animate-fade-in opacity-0">
                <h1 className="font-maximo text-8xl md:text-8xl">Donda</h1>
            </div>

            <div className={cn(
                "h-full w-full flex flex-col gap-32 md:grid md:grid-cols-2 justify-between items-center",
                "pb-16 md:pb-0 md:px-20 z-0",
                "opacity-0 animate-fade-in-delay"
            )}>
                <img src={albumImage}
                    className="max-h-[60dvh] object-contain shadow shadow-lg shadow-black/80" />

                {/* Item List */}
                <div className={cn(
                    "h-fit w-full bg-dark/90",
                    "py-4 flex flex-col items-center",
                    " outline outline-white/15 outline-3",
                    "text-4xl md:text-3xl lg:text-4xl font-celias items-left",
                    "shadow shadow-lg shadow-black/80"
                )}>
                    <hr className="text-bullyLight w-full" />
                    {list.map((item, index) => (
                        <div key={index} className="w-full text-left text-bullyLight hover:bg-bullyLight/10">
                            <h1 className="w-full px-8 py-4">{item}</h1>
                            <hr className="text-bullyLight w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}