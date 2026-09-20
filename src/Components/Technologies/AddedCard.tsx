import type { Technology } from "../Types/technology";



interface CardProps {

    selectCard: Technology[];
    setSelectCard: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const AddedCard = ({ selectCard, setSelectCard }: CardProps) => {

    const handleDelet = (card: Technology) => {
        const restCard = selectCard.filter((c) => c.name !== card.name);
        setSelectCard(restCard);
    }

    const handleRemoveAll = () => {
        setSelectCard([]);
    };

    if (selectCard.length === 0) {
        return (
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm w-full max-w-sm flex flex-col justify-between">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Your Stack</h3>
                <p className="text-slate-400 m-[8px]">No technology selected yet</p>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center flex items-center justify-center min-h-[160px] mb-6">
                    <span className="text-slate-400 text-sm font-medium">Your stack is empty.</span>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm w-full max-w-sm flex flex-col justify-between">

            <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Your Stack</h3>
                <p className="text-slate-400 text-xs mb-6">
                    {selectCard.length}  Technologies Selected
                </p>



                <div className="flex flex-col gap-3 mb-6">
                    {selectCard.map((tech) => (
                        <div
                            key={tech.id}
                            className="flex items-center justify-between border border-slate-200 rounded-xl p-3 bg-white shadow-2xs "
                        >

                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 flex items-center justify-center bg-slate-50 rounded-lg p-1">
                                    <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900">{tech.name}</h4>
                                    <span className="text-[11px] text-slate-400 font-medium">{tech.category}</span>
                                </div>
                            </div>


                            <button
                                className="text-slate-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                                onClick={() => handleDelet(tech)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

            </div>


            {selectCard.length > 0 && (
                <button
                    onClick={() => handleRemoveAll()}
                    className="w-full border border-red-200 hover:border-red-300 hover:bg-red-50 text-red-500 font-medium py-2.5 rounded-xl text-sm transition-all cursor-pointer"
                >
                    Remove All
                </button>
            )}
        </div>
    );
};

export default AddedCard;