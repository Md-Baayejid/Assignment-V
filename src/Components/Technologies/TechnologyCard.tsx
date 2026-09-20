import type { Technology } from "../Types/technology";
import { toast } from 'react-toastify';

interface TechnologyCardProps {
    technology: Technology;
    selectCard: Technology[];
    setSelectCard: React.Dispatch<React.SetStateAction<Technology[]>>;
}



const TechnologyCard = ({ technology, selectCard, setSelectCard }: TechnologyCardProps) => {

    const isSelected = selectCard.some(
        (card) => card.id === technology.id
    );

    const handleAddToStack = () => {
        if (isSelected) return;
        setSelectCard([...selectCard, technology]);
        toast.success(`Added ${technology.name}`)
    }

    

    return (
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between max-w-sm w-full">
            
            <div>
                <div className="flex justify-between items-center mb-5">
                    
                    <div className="w-10 h-10 flex items-center justify-center">
                        <img src={technology.icon} alt={technology.name} className="w-8 h-8 object-contain" />
                    </div>
                    
                    {technology.badge && (
                        <span className="text-xs bg-sky-50 text-sky-600 font-medium px-3 py-1 rounded-full">
                            {technology.badge}
                        </span>
                    )}
                </div>

               
                <h3 className="text-xl font-bold text-slate-900 mb-2">{technology.name}</h3>

                
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    {technology.description}
                </p>
            </div>

            
            <div>
                
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

                
                <button
                    disabled={isSelected}
                    onClick={()=>handleAddToStack()}
                    className={`w-full font-medium py-2.5 rounded-xl text-sm transition-all ${
                        isSelected
                            ? "bg-red-500 text-white cursor-not-allowed"
                            : "bg-[#121622] hover:bg-slate-800 text-white cursor-pointer"
                    }`}
                >
                    {isSelected ? "Added" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
};

export default TechnologyCard;