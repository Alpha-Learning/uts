"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ThirdSection({ scrollY }: { scrollY: number }) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
    }
  };

  return (
    <section id="waiting-list" className="relative bg-white overflow-hidden">
      <div className="absolute inset-0">
        {/* <img src="/bg.jpg" alt="newsletter background" className="w-full h-full object-cover" /> */}
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10  pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl text-[#192951] sm:text-4xl md:text-5xl font-bold  tracking-wide"
            style={{ fontFamily: 'LeBeauneNew, serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Waiting List

          </motion.h2>

          <motion.p
     style={{ fontFamily: 'Jost, sans-serif' }} className=" text-[18px] my-5 text-[#373737] leading-relaxed text-justify lg:text-left mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
At Alphera Academy, our waiting list is not just a line, it is a pathway into our learning community. Families who join it are showing their commitment into securing a place in a forward thinking environment where every seat is an opportunity to grow, learn, innovate and thrive.
</motion.p>

          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="mx-auto  max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row items-stretch bg-white shadow-xl rounded-2xl sm:rounded-full sm:overflow-hidden gap-3 sm:gap-0 p-2 sm:p-0">
                <div className="hidden sm:flex items-center pl-5 pr-3 rotate-320 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M1.5 4.5l21 7.5-21 7.5 6-7.5-6-7.5zm6 7.5l15 0-15 0zm0 0l-3 6 3-6z" />
                  </svg>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="flex-1 px-5 py-4 text-gray-900 placeholder-gray-500 focus:outline-none rounded-full sm:rounded-none"
                  style={{ fontFamily: 'Jost, sans-serif' }}
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-[#192951] text-white font-semibold rounded-full sm:rounded-none whitespace-nowrap"
                  style={{ fontFamily: 'LeBeauneNew, serif' }}
                >
                  Subscribe
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              className="mx-auto mt-8 max-w-xl bg-white/90 rounded-xl p-6 backdrop-blur text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'LeBeauneNew, serif' }}>You're subscribed!</h3>
                  <p className="text-gray-700" style={{ fontFamily: 'Jost, sans-serif' }}>We'll send updates to your inbox.</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}


