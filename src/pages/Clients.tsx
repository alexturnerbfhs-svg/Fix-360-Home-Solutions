import { Building, Users, Briefcase, Landmark } from 'lucide-react';
import { motion } from 'motion/react';

export default function Clients() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-gray-50 min-h-screen pb-24"
    >
      {/* Header */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Our Clients</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">We proudly serve a diverse range of property stakeholders across the United States, delivering consistent and reliable maintenance solutions.</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-12 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-16 shadow-lg border border-gray-100 flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Work With</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Fix360 Home Solution, we understand that different clients have different needs. 
              Whether you are managing a single residential rental or overseeing a nationwide portfolio of commercial spaces, 
              we adapt our services to meet your specific requirements.
            </p>
            <div className="grid grid-cols-2 gap-6">
               <div className="flex items-center gap-3">
                 <div className="bg-brand-orange-100 p-3 rounded-full text-brand-orange-500">
                    <Building className="w-6 h-6" />
                 </div>
                 <span className="font-semibold text-gray-800 text-lg">Property Managers</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="bg-brand-orange-100 p-3 rounded-full text-brand-orange-500">
                    <Landmark className="w-6 h-6" />
                 </div>
                 <span className="font-semibold text-gray-800 text-lg">Real Estate Investors</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="bg-brand-orange-100 p-3 rounded-full text-brand-orange-500">
                    <Users className="w-6 h-6" />
                 </div>
                 <span className="font-semibold text-gray-800 text-lg">Landlords</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="bg-brand-orange-100 p-3 rounded-full text-brand-orange-500">
                    <Briefcase className="w-6 h-6" />
                 </div>
                 <span className="font-semibold text-gray-800 text-lg">Businesses</span>
               </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-brand-orange-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center h-48"
              >
                 <span className="text-4xl font-extrabold text-brand-orange-500 mb-2">500+</span>
                 <span className="text-gray-700 font-medium">Properties Maintained</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center h-48 mt-8"
              >
                 <span className="text-4xl font-extrabold text-gray-900 mb-2">50+</span>
                 <span className="text-gray-700 font-medium">Markets Served</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
