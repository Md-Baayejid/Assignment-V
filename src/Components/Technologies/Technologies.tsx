
import { use } from 'react';
import type { Technology } from './../Types/technology'

interface TechnologiesProps {
    technologiesPromise: Promise<Technology[]>
}

const Technologies = ({technologiesPromise}: TechnologiesProps) => {

    const technologies = use(technologiesPromise); 

    console.log(technologies);

    return (
        <div className='container mx-auto px-6 md:px-16'>
            <div >
                <h1 className='text-4xl font-bold'> <span>Explore The</span > <span className='text-[rgb(236,72,153)]'>Technologies</span> </h1>
                <h2 className='text-xl text-gray-600 mt-3'>Pick one technology per category to build your ideal stack.</h2>
            </div>

        <div>
            
        </div>

        </div>
    );
};

export default Technologies;