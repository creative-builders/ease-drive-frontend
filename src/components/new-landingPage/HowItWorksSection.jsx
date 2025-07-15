import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from './reusables/Container';
import LogoWave from './reusables/LogoWave';
import { HowCard } from './reusables/HowCard';
import { DescCard } from './reusables/DescCard';

export const HowItWorksSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // Parallax effects
    const yHeading = useTransform(scrollYProgress, [0, 1], [0, 30]);
    const yCards = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const scaleCards = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

    // Card data
    const cards = [
        {
            number: "1",
            imgSrc: "/how1 (4).png",
            title: "Download the App & Sign up",
            desc: "Create an account as a rider or driver using your phone number or email."
        },
        {
            number: "2",
            imgSrc: "/how2.png",
            title: "Set Your Trip Details",
            desc: "Enter pickup and drop-off locations, choose booking type (now, later, or round trip), and add notes or luggage info if needed."
        },
        {
            number: "3",
            imgSrc: "/how3.png",
            title: "Confirm Booking",
            desc: "View available drivers, compare ratings, vehicle types, and estimated arrival times."
        },
        {
            number: "4",
            imgSrc: "/how4.png",
            title: "Get Picked Up & Make Payment",
            desc: "Track your driver in real time, enjoy a safe ride and make payment easily."
        },
        {
            number: "5",
            imgSrc: "/how5.png",
            title: "Rate Your Trip",
            desc: "Leave a review to help improve the experience for everyone."
        }
    ];

    return (
        <Container>
            <section
                ref={sectionRef}
                className="mx-auto max-w-[1133px] min-h-[502px] py-1 pt-10 px-0 sm:px-0 "
            >
                <div className="flex flex-col items-center lg:flex-col sm:gap-10 lg:gap-[0px]">

                    {/* Section Heading with parallax */}
                    <motion.div
                        style={{ y: yHeading }}
                        className="heading-text flex w-full justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-inter font-bold text-2xl sm:text-5xl leading-[100%] mt-1 sm:mt-2">
                            <LogoWave
                                text="How It Works"
                                className="inherit-text"
                                svgWidth="w-[150px]"
                                svgWidthsm="sm:w-[290px]"
                                svgHeight="h-[33px]"
                                svgGap="-mt-1"
                                svgGapsm="sm:mt-4"
                              
                            />
                        </h2>
                    </motion.div>

                    {/* Cards Section with parallax */}
                    <motion.div
                        style={{ y: yCards, scale: scaleCards }}
                        className="flex flex-row flex-wrap  justify-center items-center gap-[18px] sm:mt-4 -mt-6 sm:pt-2
                      w-full sm:w-[1173px] h-[796px] sm:h-[1106px] opacity-100 rotate-0 bg-light"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            staggerChildren: 0.1,
                            when: "beforeChildren"
                        }}
                    >
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.number}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1
                                }}
                            >
                                <HowCard
                                    cardNumber={card.number}
                                    imgSrc={card.imgSrc}
                                    className=" hover:-translate-y-2 transition-all duration-300"
                                >
                                    <DescCard
                                        title={card.title}
                                        desc={card.desc}
                                    />
                                </HowCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </Container>
    );
};