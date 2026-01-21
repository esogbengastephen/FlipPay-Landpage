import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="py-12 sm:py-20 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                <Image 
                  src="/logo/whitefavicon.png" 
                  alt="Flippay Logo" 
                  width={32} 
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Flippay</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Empowering global citizens with frictionless payment solutions and smart wealth management tools.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Cross-border Pay</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Utility Hub</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Virtual Cards</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Invoicing</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><a href="#about" className="hover:text-indigo-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal & Connect</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-50 gap-6">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest text-center md:text-left">
            © 2026 Flippay Global Technologies. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 transition-all cursor-pointer">
              <span className="text-xs font-black">X</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 transition-all cursor-pointer">
              <span className="text-xs font-black">FB</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
