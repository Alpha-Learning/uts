"use client";

import React from "react";
import { motion,Variants  } from "framer-motion";

export default function SecondSection() {
  // Card Animation Variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

  // Data for the Smart Learning System Cards
  const cards = [
    {
      title: "Integrated with the British and Arabic Curriculum",
      text: "A balanced and bilingual model built on global standards and cultural relevance.",
       img: "/b.png"
    },
    {
      title: "Learning to Learn",
      text: "The ASLS framework continuously adapts to each learner’s pace, progress, and potential, creating a living, personalised pathway.",
      img: "/b.png"
    },
    {
      title: "Real–Life Skills & Work Experience",
      text: "Students take part in hands-on projects, internships, and entrepreneurship experiences, connecting learning to the real world.",
      img: "/b.png"
    },
    {
      title: "Advanced Academic Learning",
      text: "Enriched, project-based learning for high achievers and ambitious minds.",
      img: "/b.png"
    },
    {
      title: "Jobs & Future Readiness",
      text: "Our learners graduate with the digital fluency, innovation mindset, and leadership skills needed for tomorrow’s world.",
      img: "/b.png"
    },
  ];

  return (
    <section id="services" className="lg:py-24 bg-white">
      <div className="w-full">
        {/* -------------------- Top Banner Section -------------------- */}
        {/* <div className="max-w-3xl min-h-[400px] mx-auto px-4 sm:px-6 lg:px-8"> */}
        <div>
          <motion.div
            className="relative w-full h-[390px] sm:h-[420px] md:h-[450px] lg:h-[480px] overflow-hidden mb-16 rounded-b-2xl shadow-md"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/e.jpeg"
              alt="Alphera Academy Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000025] to-transparent"></div>
          </motion.div>

          {/* -------------------- The Journey Section -------------------- */}
          <div className="flex justify-center items-start">
            <motion.div
              className="space-y-8 flex flex-col justify-center text-center lg:text-left"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: "Foco,regular",
                    fontSize: "47px",
                    fontWeight: 400,
                    color: "#004AAD",
                  }}
                  className="text-4xl mb-8 lg:mb-10 text-center font-medium text-[#222222] mt-4 uppercase leading-tight"
                >
                  The Journey
                </h2>

                <p
                  style={{ fontFamily: "Foco,regular" }}
                  className="text-[24px] text-center text-[#004AAD] leading-[1.9] max-w-3xl mx-auto mb-8"
                >
                  Every learner follows a personalised journey. Through <br/> continuous
                  reflection, feedback, and growth, Alphera <br/>tailors learning to
                  each child’s strengths, goals, and<br/> potential.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* -------------------- Experience & Technology Section -------------------- */}
        <div className="bg-[#D9EDEE] py-16 mt-16">
          <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 space-y-24">
            {/* Experience */}
            <motion.div
              className="flex flex-col md:flex-row items-center md:items-start gap-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex-1">
                <h3
                  className="text-[#004AAD] font-normal mb-4 text-[47px]"
                  style={{ fontFamily: "foco, regular" }}
                >
                  The Experience
                </h3>
                <p
                  className="text-[#004AAD] text-[17px] leading-[1.8] text-[24px]"
                  style={{ fontFamily: "foco,regular" }}
                >
                  Learning at Alphera is active, creative, and meaningful.
                  Students explore real-world challenges, engage in collaborative
                  projects, and apply their learning in authentic ways.
                </p>
              </div>

              <div className="flex-1 flex justify-center md:justify-end">
                <motion.img
                  src="/c.png"
                  alt="Students collaborating"
                  className="w-[280px] h-[180px] sm:w-[350px] sm:h-[220px] lg:w-[400px] lg:h-[240px] object-cover rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />
              </div>
            </motion.div>

            {/* Technology */}
            <motion.div
              className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex-1">
                <h3
                  className="text-[#004AAD]  font-normal mb-4 text-[47px]"
                  style={{ fontFamily: "foco,regular" }}
                >
                  Technology
                </h3>
                <p
                  className="text-[#004AAD] text-[17px] leading-[1.8] text-[24px]"
                 style={{ fontFamily: "foco,regular" }}
                >
                  Our AI-powered Alphera Learning System (ASLS) integrates academic
                  data, emotional feedback, and progress tracking to shape each
                  learner’s pathway in real time.
                </p>
              </div>

              <div className="flex-1 flex justify-center md:justify-start">
                <motion.img
                  src="/c.png"
                  alt="AI-powered Alphera Learning System"
                  className="w-[373px] h-[254px] sm:w-[350px] sm:h-[220px] lg:w-[400px] lg:h-[240px] object-cover rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* -------------------- Full Width Image Section -------------------- */}
        <motion.div
          // className="mt-20"
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

        {/* -------------------- Alphera Smart Learning System Cards -------------------- */}
        <div className="bg-white py-20 px-6 lg:px-12">
          <h2
            className="text-center text-3xl md:text-4xl font-semibold text-[#004AAD] mb-28"
            style={{ fontFamily: "Foco,regular" }}
          >
            Alphera Smart Learning System
          </h2>

          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }} 
                className="relative bg-[#004AAD] text-white rounded-2xl w-[260px] sm:w-[240px] md:w-[220px] lg:w-[198px] 
                           flex flex-col items-center text-center shadow-lg pt-[70px] pb-6 overflow-visible"
              >
                {/* Pop-out image area */}
                <div className="absolute -top-[40px]">
  <img
    src={card.img}
    alt={card.title}
    className="w-[198px] h-[120px] object-cover rounded-2xl 
               shadow-[0_6px_16px_rgba(0,0,0,0.25)] "
  />
</div>


                {/* Card Text */}
                <div className="px-4 mt-4">
                  <h4
                    className="text-[20px] font-semibold mb-2 leading-snug"
                    style={{ fontFamily: "Foco,regular" }}
                  >
                    {card.title}
                  </h4>
                  <p
                    className="text-[16px] leading-[1.6] "
                    style={{ fontFamily: "Foco,regular" ,color:"#82B3B4"}}
                  >
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
