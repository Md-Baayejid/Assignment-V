import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div>
            <footer className="bg-white border-t border-slate-100 pt-16 pb-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16">
                    
                    
                    <div className="lg:col-span-2 flex flex-col items-start">
                        
                        <div className="flex items-center gap-2 mb-4">
                            <img 
                                src={Logo}  
                                className=" object-contain" 
                            />
                            
                        </div>

                        
                        <p className="text-slate-500 text-sm max-w-sm mb-6 ">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        
                        <div className="flex items-center gap-6 text-sm font-semibold text-slate-800">
                            <a href="https://github.com/Md-Baayejid"  className="hover:text-pink-600 transition-colors">
                                GitHub
                            </a>
                            <a href="https://twitter.com"  className="hover:text-pink-600 transition-colors">
                                Twitter
                            </a>
                            <a href="https://linkedin.com"  className="hover:text-pink-600 transition-colors">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-[16px] font-bold  text-slate-900">Product</h4>
                        <ul className="flex flex-col space-y-3 text-sm text-slate-500">
                            <li><a  className="hover:text-slate-900 transition-colors">Home</a></li>
                            <li><a  className="hover:text-slate-900 transition-colors">Technologies</a></li>
                            <li><a  className="hover:text-slate-900 transition-colors">Projects</a></li>
                        </ul>
                    </div>

                    
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-[16px] font-bold  text-slate-900">Company</h4>
                        <ul className="flex flex-col space-y-3 text-sm text-slate-500">
                            <li><a  className="hover:text-slate-900 transition-colors">About</a></li>
                            <li><a  className="hover:text-slate-900 transition-colors">Contact</a></li>
                            <li><a  className="hover:text-slate-900 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-[16px] font-bold  text-slate-900">Legal</h4>
                        <ul className="flex flex-col space-y-3 text-sm text-slate-500">
                            <li><a  className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
                            <li><a  className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>

                
                <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    
                    <div className="flex items-center gap-6">
                        <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
                        <a href="#terms" className="hover:text-slate-600 transition-colors">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
        </div>
    );
};

export default Footer;