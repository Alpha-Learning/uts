"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SecondSection({ scrollY }: { scrollY: number }) {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="w-full">
        <div className="max-w-3xl min-h-[400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-start">
            {/* Images Left - Overlapping Collage */}

            {/* Text Content Right - Centered */}
            <motion.div
              className="space-y-8 order-2 lg:order-2 flex flex-col justify-center text-center lg:text-left"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div>
              
                 <h2 style={{ fontFamily: 'LeBeauneNew, serif', fontSize: '42px', fontWeight: 400, color: '#222222' }}
                  className="text-4xl lg:text-4xl mb-14 text-center font-medium text-[#222222] mt-4  uppercase leading-tight">
                   MISSION
                 </h2>
                 <p style={{ fontFamily: 'Jost, sans-serif' }} className="text-lg text-[#373737] leading-relaxed text-justify lg:text-left mb-8" >
                  The Kingster curriculum is designed to foster a love of learning, critical thinking, and creativity. We believe in a holistic approach to education, nurturing not just academic excellence but also social, emotional, and physical development. Our dedicated educators create an engaging and supportive environment where every child can thrive and reach their full potential.
                </p>
               
              </div>
            </motion.div>
          </div>
        </div>
             <motion.div
                  className=""
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <img 
                    src="/g.png" 
                    alt="Additional classroom scene" 
                    className="w-full h-[320px] md:h-[660px] object-cover"
                  />
                </motion.div>
      </div>
    </section>
  );
}


