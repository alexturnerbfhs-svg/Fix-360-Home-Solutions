import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, PenTool, BarChart3, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 to-gray-900 text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-navy-800/50 text-navy-200 text-sm font-semibold tracking-wider mb-6 border border-navy-700/50">PROPERTY MAINTENANCE EXPERTS YOU CAN TRUST</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight max-w-4xl">
            Reliable Property Maintenance, <br className="hidden md:block"/>
            <span className="text-brand-orange-400">Simplified</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
            Managing properties shouldn’t feel overwhelming. We provide dependable, efficient, and cost-effective property maintenance services to keep your properties in top condition—without the stress.
          </p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link to="/contact" className="bg-brand-orange-500 hover:bg-brand-orange-400 text-white font-semibold py-4 px-8 rounded-lg text-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-brand-orange-500/25">
              👉 Get Started Today
            </Link>
            <Link to="/services" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg flex items-center gap-2 transition-all backdrop-blur-sm border border-white/10">
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <h2 className="text-brand-orange-500 font-semibold tracking-wide uppercase mb-3">About Us</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Your Trusted Partner in Property Maintenance</h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                At <strong className="text-gray-900">Fix360 Home Solution</strong>, we understand that property management goes far beyond rent collection. From unexpected repairs to routine upkeep, maintaining a property requires constant attention and expertise.
              </p>
              <p>
                Headquartered in Los Angeles and serving clients nationwide, we specialize in delivering comprehensive maintenance solutions tailored to property owners, managers, and investors.
              </p>
              <p>
                We are committed to creating safe, functional, and attractive environments for residents and tenants while helping property owners protect and grow their investments.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-brand-orange-500 pl-4">
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Commitment</p>
              </div>
              <div className="border-l-4 border-brand-orange-500 pl-4">
                <p className="text-3xl font-bold text-gray-900">24/7</p>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Support Available</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative shadow-2xl">
              <img src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1000" alt="Maintenance team" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-8">
                <p className="text-white font-medium text-xl">Expertise you can rely on, coast to coast.</p>
              </div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange-500 rounded-2xl -z-10 opacity-50 blur-xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Fix360 Home Solution?</h2>
            <p className="text-lg text-gray-600">We bring dedication, skill, and reliability to every property we maintain. Working with us means peace of mind for you.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Nationwide service coverage", icon: <BarChart3 className="w-8 h-8 text-brand-orange-500" /> },
              { title: "Experienced and skilled contractors", icon: <Wrench className="w-8 h-8 text-brand-orange-500" /> },
              { title: "Fast response and reliable scheduling", icon: <Clock className="w-8 h-8 text-brand-orange-500" /> },
              { title: "Cost-effective maintenance solutions", icon: <CheckCircle2 className="w-8 h-8 text-brand-orange-500" /> },
              { title: "Focus on quality and long-term value", icon: <ShieldCheck className="w-8 h-8 text-brand-orange-500" /> },
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="bg-brand-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">Delivering exceptional results to protect your investment and ease your management burden.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=600" className="rounded-xl h-64 object-cover w-full shadow-lg" alt="Maintenance work" />
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600" className="rounded-xl h-64 object-cover w-full shadow-lg translate-y-8" alt="Blueprint planning" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <h2 className="text-brand-orange-500 font-semibold tracking-wide uppercase mb-3">Our Approach</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Proactive Maintenance for Long-Term Value</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Regular maintenance is essential to preserving property value and avoiding costly repairs. Our proactive approach ensures that minor issues never turn into major emergencies.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Early detection of issues",
                "Timely repairs and maintenance",
                "Improved tenant satisfaction",
                "Long-term cost savings"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg font-medium text-gray-800">
                  <div className="bg-brand-orange-100 p-1 rounded-full"><CheckCircle2 className="w-5 h-5 text-brand-orange-500" /></div>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 italic">
              We combine efficiency, expertise, and reliability to deliver unmatched service quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Motto & CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-navy-900 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl text-brand-orange-300 font-serif italic mb-4">Company Motto</h2>
            <p className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">“Transforming Properties,<br/>Transforming Lives”</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Simplify Property Management?</h3>
            <p className="text-navy-100 text-lg mb-8 max-w-2xl mx-auto">Partner with Fix360 Home Solution and experience hassle-free property maintenance services tailored to your needs.</p>
            <Link to="/contact" className="inline-flex items-center justify-center bg-brand-orange-500 hover:bg-brand-orange-400 text-white text-xl font-bold py-4 px-10 rounded-lg transition-transform hover:scale-105 shadow-[0_0_40px_rgba(251,164,28,0.3)] gap-2">
              👉 Join Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
