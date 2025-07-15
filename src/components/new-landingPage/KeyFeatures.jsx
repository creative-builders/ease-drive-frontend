import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from './reusables/Container';
import FeatureCard from './reusables/FeatureCard';
import LogoWave from './reusables/LogoWave';
import CustomButton from './reusables/CustomButton';

export const KeyFeaturesSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  const features = [
    {
      title: 'Real-Time Driver Availability',
      description: 'Instantly see nearby online drivers and their estimated arrival times. Avoid the wait — book and go.',
      imgSrc: '/car.svg',
      cardBg: 'bg-primary-50',
    },
    {
      title: 'Scheduled & Instant Bookings',
      description: 'Book now or plan ahead for early lectures and events. Choose to and fro trips and even set return delays.',
      imgSrc: '/clock.svg',
      cardBg: 'bg-pink-50',
    },
    {
      title: 'Wail-Billing for Package Delivery',
      description: 'Send items across campus or to nearby towns. Trusted student drivers handle your packages with care.',
      imgSrc: '/block.svg',
      cardBg: 'bg-primary-50',
    },
  ];

  return (
    <Container>
      <section 
        ref={sectionRef}
        className="mx-auto max-w-7xl md:max-w-full py-10 px-4 sm:px-0 pt-20"
      >
        <motion.div 
          style={{ opacity }}
          className="flex flex-col lg:flex-row md:flex-col items-start gap-10 lg:gap-20 bg-white 
                    rounded-[20px] sm:rounded-[25px] sm:w-[1132px] w-full 
                    sm:h-[762px] h-[1152px] sm:p-[40px] p-4 mx-auto  md:items-center md:w-[100%] md:h-full"
        >
          {/* Left Feature Cards with parallax */}
          <motion.div 
            style={{ y: yLeft }}
            className="w-full  md:items-center lg:w-1/2 flex flex-col gap-12 rounded-3xl p-0 sm:p-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  imgSrc={feature.imgSrc}
                  flex_direction="flex-col justify-start items-start"
                  borerColor="border-none"
                  cardBg={feature.cardBg}
                  className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right Content with parallax */}
          <motion.div 
            style={{ y: yRight }}
            className="w-full lg:w-1/2 flex flex-col gap-6 pt-4 text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className="flex flex-col gap-3 sm:gap-6 justify-end pt-1 sm:pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.h2 
                className="font-inter font-bold text-2xl sm:text-5xl leading-[100%] mt-1 sm:mt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <LogoWave
                  text="Key features"
                  className="font-inter"
                  svgWidth="w-[150px]"
                  svgWidthsm="sm:w-[290px]"
                  svgHeight="h-[33px]"
                  svgGap="mt-[-2px]"
                  svgGapsm="sm:mt-1"
                />
              </motion.h2>

              <motion.h4 
                className="font-inter font-medium text-[16px] sm:text-[32px] text-[#333333] leading-[100%] mt-1 sm:mt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Core Features That Make <br /> Your Rides Smarter
              </motion.h4>

              <motion.p 
                className="text-[#333333] text-[12px] sm:text-[16px] font-poppins sm:pl-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Everything you need for a fast, safe, and student-friendly shuttle experience.
                Also make payments quickly and safely via transfer or card. <br />
                No cash needed and no hidden charges.
              </motion.p>

              <motion.div 
                className="flex justify-end gap-2 pt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <CustomButton
                  width="167px"
                  height="50px"
                  paddingX="16px"
                  borderRadius="16px"
                  borderWidth="1px"
                  borderColor="#20AE3A"
                  backgroundColor="#1A7B2C"
                  className="text-white font-inter hover:scale-[1.03] transition-transform"
                   urlLink="/passengers-signup"
                >
                  <span className="font-medium text-xs leading-[100%]">
                    Book a Ride
                  </span>
                </CustomButton>
              </motion.div>

              <motion.div 
                className="flex justify-end pt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src="/hi-car.svg" alt="Hi car illustration" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </Container>
  );
};