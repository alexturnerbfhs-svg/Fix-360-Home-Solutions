import { Mail, MapPin, Phone, Globe, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-gray-50 min-h-screen"
    >
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-24 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-xl text-navy-100">Ready to simplify property management? Get in touch with our team today.</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full -mt-16 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-16"
        >
          {/* Contact Info */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange-100 p-3 rounded-full text-brand-orange-500 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    225 N Vermont Ave Apt#105<br />
                    Los Angeles CA 90004
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-orange-100 p-3 rounded-full text-brand-orange-500 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+12139850985" className="text-brand-orange-500 hover:text-brand-orange-700 transition-colors">
                    (213) 985-0985
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-orange-100 p-3 rounded-full text-brand-orange-500 mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <a href="mailto:contact@fix360homesolution.com" className="text-brand-orange-500 hover:text-brand-orange-700 transition-colors">
                    contact@fix360homesolution.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-orange-100 p-3 rounded-full text-brand-orange-500 mt-1">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                  <a href="https://fix360homesolution.com/" target="_blank" rel="noopener noreferrer" className="text-brand-orange-500 hover:text-brand-orange-700 transition-colors">
                    fix360homesolution.com
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8 mt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
              <p className="text-gray-600 mb-6">Stay connected and updated with our latest news and property tips.</p>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-100 hover:bg-brand-orange-500 hover:text-white text-gray-600 p-3 rounded-xl transition-all duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-brand-orange-500 hover:text-white text-gray-600 p-3 rounded-xl transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-brand-orange-500 hover:text-white text-gray-600 p-3 rounded-xl transition-all duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                {/* TikTok custom icon block */}
                <a href="#" className="bg-gray-100 hover:bg-brand-orange-500 hover:text-white text-gray-600 p-3 rounded-xl transition-all duration-300 flex items-center justify-center font-bold font-serif w-12 h-12">
                  t
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3 bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-orange-500 focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-orange-500 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-orange-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-orange-500 focus:border-transparent outline-none transition-all" placeholder="How can we help?" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-orange-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Please provide details about your property maintenance needs..."></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-brand-orange-500 hover:bg-brand-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
