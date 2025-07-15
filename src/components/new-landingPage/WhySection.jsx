import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from './reusables/Container';
import FeatureCard from './reusables/FeatureCard';

export const WhySection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  return (
    <Container>
      <section 
        ref={sectionRef}
        className="mx-auto max-w-7xl py-10 px-4 sm:px-0 overflow-hidden pt-20"
      >
        <motion.div 
          style={{ opacity }}
          className="flex flex-col gap-10 lg:flex-row lg:gap-20 items-center"
        >
          {/* Left Content Card with parallax */}
          <motion.div 
            style={{ y: yLeft }}
            className="w-full lg:w-1/2 bg-[#DEFAE2] rounded-3xl p-8 sm:p-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-10">
              <motion.h1 
                className="font-inter font-extrabold text-3xl sm:text-5xl leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Why choose <br />
                <span className="leading-tight">EaseDrive?</span>
              </motion.h1>
              <motion.p 
                className="font-poppins font-normal text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                With EaseRide, getting around is stress-free! Enjoy quick pickups,
                budget-friendly fares, and trusted drivers—so you can skip the long
                queues and ride with confidence anytime, anywhere.
              </motion.p>
            </div>

            <motion.div 
              className="w-full max-w-[436px] sm:h-[300px] h-[280px] mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <img
                src="/why.png"
                alt="Why choose EaseDrive"
                className="w-full sm:h-[346px] h-[280px] rounded-t-3xl"
              />
            </motion.div>
          </motion.div>

          {/* Right Feature Cards with parallax */}
          <motion.div 
            style={{ y: yRight }}
            className="w-full lg:w-1/2 flex flex-col gap-6 pt-6 md:items-center "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {[
              {
                title: "Scheduled & Instant Bookings",
                description: "No more guessing if a shuttle will pass by or standing under the sun. Easily schedule or book instantly.",
              },
              {
                title: "No Price Haggling or Surprises",
                description: "Everything is upfront. You see the price, confirm it, and pay securely. No fear of being overcharged.",
              },
              {
                title: "Verified, Trusted Drivers",
                description: "All drivers are onboarded and verified to ensure safety. View their profile & ratings before booking.",
              },
              {
                title: "Wail-Billing for Package Delivery",
                description: "Send items across campus or to nearby towns. Get trusted drivers to handle your packages with care.",
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  imgSrc="/checkmark.svg"
                  flex_direction="flex-row items-center"
                  className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </Container>
  );
};