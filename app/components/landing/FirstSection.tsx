"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FirstSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Text Content Left */}
            <motion.div
              className="space-y-6 sm:space-y-8 order-2 lg:order-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="space-y-2 sm:space-y-3 ">
                <motion.div
                className=""
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  
                  <h2 className=" mb-8 lg:mb-10 xl:mb-14 flex flex-col  leading-tight" style={{ fontFamily: 'LeBeauneNew', fontSize: '42px', fontWeight: 400, color: '#222222' }}>
                 <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    ALS
                  </span>
                   STORY
                  </h2>
                </motion.div>
                
                <motion.p 
                  className="text-[18px] jost font-normal tracking-normal normal-case text-[#373737] leading-[1.7] text-justify sm:text-left max-w-2xl"
                  style={{ fontFamily: 'Jost, sans-serif' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Alphera Academy is not just a school, it's the first real-world implementation of the Alpha Learning System, a future facing education model designed over 15 years of research and development. In a world rapidly shaped by artificial intelligence. Alphera Academy prepares children not only to succeed in core academics, but to thrive as emotionally intelligent, adaptable, creative and self driven human beings.
                </motion.p>
              </div>
            </motion.div>

            {/* Images Right - Responsive Overlapping Collage */}
            <motion.div 
              className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative w-full h-full">
                {/* Top-Right Image - Largest */}
                <motion.div
                  className="absolute top-0 right-0 md:right-18 w-[65%] sm:w-[58%] md:w-[48%]  lg:w-[50%] xl:w-[60%] aspect-square p-1 sm:p-2 bg-white shadow-lg sm:shadow-xl drop-shadow-lg sm:drop-shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <img 
                    src="/e.jpeg" 
                    alt="Classroom with teacher and student" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Bottom-Left Image - Medium */}
                <motion.div
                  className="absolute bottom-8 md:left-18 top-44 sm:bottom-12 md:bottom-16 lg:left-18 xl:left-0 lg:bottom-44 xl:bottom-20 left-0 w-[65%] sm:w-[58%] md:w-[48%] lg:w-[50%] xl:w-[60%] aspect-square p-1 sm:p-2 bg-white shadow-lg sm:shadow-xl drop-shadow-lg sm:drop-shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <img 
                    src="/d.jpeg" 
                    alt="Art studio with children painting" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
