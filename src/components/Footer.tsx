import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-8 inline-block">
              <img 
                src="https://fix360homesolution.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-20-at-04.18.12_e1831151.jpg" 
                alt="Fix360 Home Solution" 
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              Fix360 Home Solution is dedicated to providing high-quality property maintenance services that ensure your properties remain safe, functional, and valuable.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide uppercase text-gray-300">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/clients" className="text-gray-400 hover:text-white transition-colors">Clients</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wide uppercase text-gray-300">Connect</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <span className="block text-gray-300 font-medium mb-1">Address:</span>
                225 N Vermont Ave Apt#105<br />
                Los Angeles CA 90004
              </li>
              <li>
                <span className="block text-gray-300 font-medium mb-1">Phone:</span>
                <div className="flex flex-col gap-1">
                  <a href="tel:+12139850985" className="hover:text-white transition-colors">(213) 985-0985</a>
                </div>
              </li>
              <li>
                <span className="block text-gray-300 font-medium mb-1">Email:</span>
                <a href="mailto:contact@fix360homesolution.com" className="hover:text-white transition-colors">contact@fix360homesolution.com</a>
              </li>
              <li>
                <span className="block text-gray-300 font-medium mb-1">Website:</span>
                <a href="https://fix360homesolution.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-4 decoration-brand-orange-500/50">www.fix360homesolution.com</a>
              </li>
              <li className="pt-4">
                <div className="flex gap-4">
                  <a href="#" className="hover:text-white bg-gray-800 p-2 rounded-full transition-colors"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-white bg-gray-800 p-2 rounded-full transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-white bg-gray-800 p-2 rounded-full transition-colors"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-white bg-gray-800 p-2 rounded-full transition-colors flex items-center justify-center font-bold font-serif w-9 h-9">t</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2024 Fix360 Home Solution. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Transforming Properties, Transforming Lives</p>
        </div>
      </div>
    </footer>
  );
}
