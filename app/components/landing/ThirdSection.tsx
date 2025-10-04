"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SecondSection({ scrollY }: { scrollY: number }) {
  return (
    <section id="services" className="py-16 lg:py-0 bg-white">
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
              
                <h2 className="text-4xl lg:text-5xl text-center font-medium text-[#222222] mt-4 mb-6 uppercase leading-tight" style={{ fontFamily: 'LeBeauneNew, serif' }}>
                  Waiting List
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-justify lg:text-left mb-8" style={{ fontFamily: 'Jost, sans-serif' }}>
                At Alphera Academy, our waiting list is not just a line, it is a pathway into our learning community. Families who join it are showing their commitment into securing a place in a forward thinking environment where every seat is an opportunity to grow, learn, innovate and thrive.                </p>
                
                {/* Email Input Form */}
                <div className="mt-8">
                  <form className="flex flex-col sm:flex-row gap-4 max-w-md">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 text-black px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      style={{ fontFamily: 'Jost, sans-serif' }}
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 mb-5 sm:mb-0 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 font-medium"
                      style={{ fontFamily: 'LeBeauneNew, serif' }}
                    >
                      Join Waiting List
                    </button>
                  </form>
                </div>
               
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
                    src="/a.jpeg" 
                    alt="Additional classroom scene" 
                    className="w-full h-[500px] object-cover"
                  />
                </motion.div>
      </div>
    </section>
  );
}


