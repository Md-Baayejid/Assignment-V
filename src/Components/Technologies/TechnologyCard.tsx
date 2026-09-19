import type { Technology } from "../Types/technology";

interface TechnologyCardProps {
    technology: Technology;
}


const TechnologyCard = ({ technology }: TechnologyCardProps) => {
    return (
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between max-w-sm w-full hover:shadow-md transition-all">
            {/* Top Section: Icon & Badge */}
            <div>
                <div className="flex justify-between items-center mb-5">
                    {/* Icon */}
                    <div className="w-10 h-10 flex items-center justify-center">
                        <img src={technology.icon} alt={technology.name} className="w-8 h-8 object-contain" />
                    </div>
                    {/* Badge */}
                    {technology.badge && (
                        <span className="text-xs bg-sky-50 text-sky-600 font-medium px-3 py-1 rounded-full">
                            {technology.badge}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{technology.name}</h3>

                {/* Description */}
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    {technology.description}
                </p>
            </div>

            {/* Bottom Section: Meta info & Button */}
            <div>
                {/* Category, Difficulty & Rating */}
                <div className="flex items-center gap-2 mb-5 text-xs">
                    <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">
                        {technology.category}
                    </span>
                    <span className="text-slate-500 font-medium">
                        {technology.difficulty}
                    </span>
                    <span className="ml-auto text-amber-500 font-semibold flex items-center gap-1">
                        ★ {technology.rating}
                    </span>
                </div>

                {/* Add to Stack Button */}
                <button className="w-full bg-[#121622] hover:bg-slate-800 text-white font-medium py-2.5 rounded-xl text-sm transition-all cursor-pointer">
                    Add to Stack
                </button>
            </div>
        </div>
    );
};

export default TechnologyCard;