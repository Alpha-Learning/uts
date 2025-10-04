"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FirstSection({ scrollY }: { scrollY: number }) {
  return (
    <section id="about" className="pt-16 lg:pt-24 bg-white">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text Content Left */}
            <motion.div
              className="space-y-8 order-2 lg:order-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  ALS
                </span>
                <h2 className="text-4xl font-medium lg:text-5xl text-[#222222] mb-6 uppercase leading-tight" style={{ fontFamily: 'LeBeauneNew, serif' }}>
                  Story
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-justify" style={{ fontFamily: 'Jost, sans-serif' }}>
                  Alphera Academy is not just a school, it's the first real-world implementation of the Alpha Learning System, a future facing education model designed over 15 years of research and development. In a world rapidly shaped by artificial intelligence. Alphera Academy prepares children not only to succeed in core academics, but to thrive as emotionally intelligent, adaptable, creative and self driven human beings.
                </p>
              </div>
            </motion.div>

            {/* Images Right - Overlapping Collage */}
            <div className="relative h-[500px] lg:h-[600px] order-1 lg:order-2">
              <div className="relative w-full h-full">
                {/* Top-Right Image - Largest */}
                <motion.div
                  className="absolute top-0 right-0 w-[60%] h-[50%] p-2 bg-white shadow-xl drop-shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img 
                    src="/a.jpeg" 
                    alt="Classroom with teacher and student" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Bottom-Left Image - Medium */}
                <motion.div
                  className="absolute bottom-40 left-0 w-[60%] h-[50%] p-2 bg-white shadow-xl drop-shadow-2 xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <img 
                    src="/b.png" 
                    alt="Art studio with children painting" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Middle-Right Image - Partially Hidden */}
                {/* <motion.div
                  className="absolute top-1/2 right-4 w-[45%] h-[40%] rounded-2xl shadow-xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <img 
                    src="/c.png" 
                    alt="Additional classroom scene" 
                    className="w-full h-full object-cover"
                  />
                </motion.div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
