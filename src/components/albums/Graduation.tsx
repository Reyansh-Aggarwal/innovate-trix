import { cn } from "../../lib/utils"
import albumImage from "../../assets/images/album-covers/Graduation.png";

export const Graduation = () => {

    const list = ["MAGGI", "NOTEBOOKS", "RAMEN", "HIGHLIGHTERS", "FROZEN SNACKS", "STATIONERY"];

    return (
        <div className={cn(
            "w-full h-dvh flex flex-col justify-center items-center select-none",
            "bg-gradPurple text-gradPink font-druk-bold"
        )}>
            <div className="w-full h-fit text-center pt-8 animate-fade-in opacity-0">
                <h1 className="font-druk-super text-8xl">Graduation</h1>
            </div>
            <div className="h-full w-full grid grid-cols-2 justify-between items-center px-20 z-0 opacity-0 animate-fade-in-delay">
                <img src={albumImage}
                    className="h-[60dvh] object-contain shadow shadow-lg shadow-black/80" />

                {/* Item List */}
                <div className={cn(
                    "h-fit w-full bg-dark/90",
                    "py-4 flex flex-col items-center",
                    " outline outline-white/15 outline-3",
                    "text-4xl font-celias items-left",
                    "shadow shadow-lg shadow-black/80"
                )}>
                    <hr className="text-[#6a488b] w-full" />
                    {list.map((item, index) => (
                        <div key={index} className="w-full text-left text-[#6a488b] hover:bg-[#6a488b]/10">
                            <h1 className="w-full px-8 py-4">{item}</h1>
                            <hr className="text-[#6a488b] w-full" />
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}