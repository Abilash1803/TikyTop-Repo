import React from 'react';
import { motion } from 'framer-motion';

const SPOTLIGHT_CONTENT = {
  badge: "Premium Growth Solutions",
  title: "Join Us, Be You!",
  subtitle: "You wouldn't be here if the way you've been working was working; it's time for TikyTop! Make your social media growth graph move upwards seamlessly.",
  buttonText: "Try TikyTop"
};

const Spotlight = () => {
    const { badge, title, subtitle, buttonText } = SPOTLIGHT_CONTENT;

    return (
        <section className="py-24 px-5 bg-white flex justify-center">
            <div className="w-full max-w-7xl bg-[#020A1B] rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
                {/* Neon Accents */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF00C8]/10 to-transparent pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00F5D4]/10 rounded-full blur-[80px]" />

                <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-bold tracking-wider uppercase border border-white/20"
                    >
                        {badge}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
                    >
                        {title.split(', ').map((text, i) => (
                          <React.Fragment key={i}>
                            {i === 0 ? text + ', ' : <span className="text-[#00F5D4]">{text}</span>}
                          </React.Fragment>
                        ))}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="pt-6"
                    >
                        <button className="px-12 py-5 bg-white text-[#020A1B] rounded-full text-lg font-extrabold hover:bg-[#FF00C8] hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95 uppercase tracking-widest">
                            {buttonText}
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Spotlight;
