"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SecondSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="w-full">
        <div className="max-w-3xl min-h-[400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-start">
            {/* Text Content */}
            <motion.div
              className="space-y-8 order-2 lg:order-2 flex flex-col justify-center text-center lg:text-left"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: "LeBeauneNew, serif",
                    fontSize: "42px",
                    fontWeight: 400,
                    color: "#222222",
                  }}
                  className="text-4xl lg:text-4xl mb-8 lg:mb-10 xl:mb-14 text-center font-medium text-[#222222] mt-4 uppercase leading-tight"
                >
                  MISSION
                </h2>

                <p
                  style={{ fontFamily: "Jost, sans-serif" }}
                  className="text-[18px] text-center text-[#373737] leading-[1.9] max-w-3xl mx-auto mb-8"
                >
                  To become the world’s most pioneering education hub where the
                  full spectrum of human potential is awakened, nurtured and
                  elevated. At Alphera Academy, we do not teach to the test. We
                  cultivate future-ready humans. Our mission goes beyond
                  education. We strive to become the architects of human
                  potential, creating the appropriate conditions for the next
                  generations to thrive.
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


