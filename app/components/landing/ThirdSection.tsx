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
            style={{ fontFamily: 'LeBeauneNew, serif', fontSize: '42px', fontWeight: 400, color: '#222222' }}            initial={{ opacity: 0, y: 20 }}
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
              <div className="flex items-center bg-white shadow-md border-t  rounded-full overflow-hidden w-full">
                <div className="flex items-center pl-4 pr-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 7.5v9a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 16.5v-9A2.25 2.25 0 014.5 5.25h15a2.25 2.25 0 012.25 2.25z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5l8.22 5.48a1.5 1.5 0 001.56 0L21 7.5" />
                  </svg>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="flex-1 min-w-0 px-4 py-3 sm:py-4 text-gray-900 placeholder-gray-500 focus:outline-none"
                  style={{ fontFamily: 'Jost, sans-serif' }}
                  required
                />
                <button
                  type="submit"
                  className="px-5 sm:px-7 py-3 sm:py-5 rounded-full bg-[#192951] text-white font-semibold text-sm sm:text-base whitespace-nowrap min-w-[110px]"
                  style={{ fontFamily: 'LeBeauneNew, serif' }}
                >
                  Submit
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


