import Logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        
           <div className='bg-white   '>
             <div className="navbar px-6 md:px-16 w-full container mx-auto  ">
               
                <div className="navbar-start">
                    <img src={Logo} alt="Logo" className="h-10 w-auto" />
                </div>

               
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex px-1 gap-6 text-base font-medium">
                        <li><a className="text-pink-600 cursor-pointer font-semibold focus">Home</a></li>
                        <li><a className="text-slate-600 cursor-pointer">Technologies</a></li>
                        <li><a className="text-slate-600  cursor-pointer">Projects</a></li>
                        <li><a className="text-slate-600  cursor-pointer">About</a></li>
                        <li><a className="text-slate-600  cursor-pointer">Contact</a></li>
                    </ul>
                </div>

                
                <div className="navbar-end gap-4">
                    <a className="text-slate-800 font-medium hover:text-pink-600 cursor-pointer hidden sm:inline-block">
                        Sign In
                    </a>
                    <a className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-2 rounded-full shadow-md cursor-pointer ">
                        Sign Up
                    </a>
                </div>
            </div>
        
           </div>
    );
};

export default Navbar;