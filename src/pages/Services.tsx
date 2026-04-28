import { Link } from 'react-router-dom';
import { Home, Building2, Factory, Wrench, Sprout, Paintbrush } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      title: "Residential Maintenance",
      description: "Ensuring homes remain safe, comfortable, and well-maintained for tenants and owners. From HVAC checks to plumbing repairs.",
      icon: <Home className="w-10 h-10 text-brand-orange-500" />
    },
    {
      title: "Commercial Property Services",
      description: "Professional maintenance solutions for offices, retail spaces, and commercial facilities. We work around your business hours.",
      icon: <Building2 className="w-10 h-10 text-brand-orange-500" />
    },
    {
      title: "Industrial Property Support",
      description: "Reliable service for warehouses and industrial properties requiring consistent upkeep and specialized safety knowledge.",
      icon: <Factory className="w-10 h-10 text-brand-orange-500" />
    },
    {
      title: "Repairs & Fixes",
      description: "Quick and efficient handling of leaks, electrical issues, structural repairs, and more to prevent secondary damage.",
      icon: <Wrench className="w-10 h-10 text-brand-orange-500" />
    },
    {
      title: "Lawn & Exterior Maintenance",
      description: "Keeping outdoor spaces clean, organized, and visually appealing. Curb appeal matters to your property's value.",
      icon: <Sprout className="w-10 h-10 text-brand-orange-500" />
    },
    {
      title: "Property Turnover Services",
      description: "Preparing properties for new tenants with deep cleaning, fresh paint, minor repairs, and thorough inspections.",
      icon: <Paintbrush className="w-10 h-10 text-brand-orange-500" />
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-gray-50 min-h-screen pb-24"
    >
      {/* Header */}
      <div className="bg-navy-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Our Services</h1>
          <p className="text-xl text-navy-100 max-w-2xl">Comprehensive Property Maintenance Solutions designed to meet all your needs, handled by experts.</p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group flex flex-col h-full"
            >
              <div className="bg-brand-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Embedded CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24"
      >
        <div className="bg-gradient-to-r from-navy-800 to-navy-800 rounded-3xl p-10 md:p-16 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Need a specialized service?</h2>
          <p className="text-navy-100 text-lg mb-8 max-w-2xl mx-auto">We handle practically every aspect of property maintenance. Reach out today to discuss your specific requirements.</p>
          <Link to="/contact" className="inline-flex bg-white text-navy-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors text-lg">
            Contact Our Team
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
