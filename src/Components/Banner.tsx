import BannerPic from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div>
            <section className="bg-white container mx-auto py-16 px-6 md:px-16 flex items-center justify-center min-h-[80vh]">
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

                    {/* Left Side: Content */}
                    <div className="flex flex-col items-start space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 ">
                            Build Your Ideal <br />
                            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        <p className="text-slate-600 text-base md:text-lg max-w-lg ">
                            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="bg-linear-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-medium px-6 py-3 rounded-lg shadow-md  cursor-pointer">
                                Explore Technologies
                            </button>
                            <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium px-6 py-3 rounded-lg cursor-pointer">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Image Div */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-md lg:max-w-lg h-87.5 md:h-105 flex items-center justify-center ">
                            {/* Ekhane tomar hero image ta boshiye nio */}
                            <img
                                src={BannerPic}
                                alt="Development Stack"
                                className="object-contain w-full h-full p-4"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Banner;