import React, { useEffect, useRef } from 'react';
import Container from './reusables/Container';
import CustomButton from './reusables/CustomButton';
import LogoWave from './reusables/LogoWave';
import { FiSearch } from 'react-icons/fi';

export const HeroSection = () => {
  const heroSectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    const heroSection = heroSectionRef.current;
    const leftContent = leftContentRef.current;
    const rightImage = rightImageRef.current;

    if (!heroSection || !leftContent || !rightImage) return;

    // Entrance animation handler
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Entrance animations
          leftContent.style.transform = 'translateY(0)';
          leftContent.style.opacity = '1';
          rightImage.style.transform = 'translateY(0)';
          rightImage.style.opacity = '1';
        }
      });
    };

    // Scroll parallax handler
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = heroSection.offsetHeight;
      const scrollPercent = Math.min(scrollPosition / heroHeight, 1);
      
      leftContent.style.transform = `translateY(${scrollPercent * 20}px)`;
      rightImage.style.transform = `translateY(${scrollPercent * 40}px)`;
    };

    // Set initial states for entrance animation
    leftContent.style.transform = 'translateY(30px)';
    leftContent.style.opacity = '0';
    leftContent.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
    
    rightImage.style.transform = 'translateY(60px)';
    rightImage.style.opacity = '0';
    rightImage.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });
    observer.observe(heroSection);

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <section 
        ref={heroSectionRef}
        className="hero-section mx-auto max-w-[1133px] min-h-[502px] py-10 px-0 sm:px-4 overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[77px]">
          {/* Left Side Content */}
          <div 
            ref={leftContentRef}
            className="hero-left-content flex-1 w-full p-4 rounded-lg"
          >
            {/* Tagline - with individual animation */}
            <div className="mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CustomButton
                width="180px"
                height="35px"
                paddingX="16px"
                borderRadius="57px"
                borderWidth="1px"
                borderColor="#20AE3A"
                backgroundColor="#FFFFFF"
                className="text-primary-600 hover:scale-[1.03] transition-transform"
              >
                <span className="font-inter font-medium text-xs leading-[100%]">
                  No More Long Queues.
                </span>
              </CustomButton>
            </div>

            {/* Heading */}
            <div className="w-full max-w-[1000px] pt-2 space-y-2">
              <h1 className="font-inter font-extrabold text-3xl sm:text-6xl leading-[100%] animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Easy Rides
              </h1>
              <div className="flex items-start gap-3 sm:gap-6 pt-1 sm:pt-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h2 className="font-inter font-semibold text-3xl sm:text-6xl leading-[100%] mt-1 sm:mt-2">
                  with
                </h2>
                <h2 className="font-inter font-semibold text-3xl sm:text-6xl leading-[100%] mt-1 sm:mt-2">
                  <LogoWave
                    text="EaseDrive"
                    className="inherit-text"
                    tStyle="italic"
                    svgWidth="w-[150px]"
                    svgWidthsm="sm:w-[290px]"
                    svgHeight="h-[33px]"
                    svgGap="mt-.5"
                  />
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="w-full max-w-[1000px] pt-2 sm:pt-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <p className="text-[#333333] font-inter font-normal text-xs sm:text-lg leading-[120%]">
                Get picked up in minutes by a top-rated driver and <br />
                enjoy a smooth, stress-free ride to your destination.
              </p>
            </div>

            {/* Search Inputs */}
            <div className="flex items-start gap-2 pt-4 -ml-2 w-full max-w-[1000px] h-[109px] sm:h-[121px] animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex flex-col w-[25px] h-[90px] sm:w-[30px] sm:h-[125px]">
                <img
                  src="/s-line.svg"
                  alt="decorative line"
                  className="h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-2 w-[320px] sm:w-[458px]">
                <input
                  type="text"
                  placeholder="My Current Location"
                  className="w-full h-[40px] sm:h-[56px] px-[22px] py-2 border border-[#E4E4E4] text-[#E4E4E4] font-inter text-base outline-none rounded-lg transition-all focus:border-primary-600"
                />
                <div className="relative w-full h-[40px] sm:h-[56px]">
                  <input
                    type="text"
                    placeholder="Choose Destination"
                    className="w-full h-full px-[22px] pr-12 py-2 border border-[#E4E4E4] text-[#E4E4E4] font-inter text-base outline-none rounded-lg transition-all focus:border-primary-600"
                  />
                  <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#E4E4E4] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-6 sm:pt-12 w-full max-w-[1000px] animate-fade-in" style={{ animationDelay: '0.7s' }}>
             
             
              <CustomButton
                width="167px"
                height="50px"
                paddingX="16px"
                borderRadius="16px"
                borderWidth="1px"
                borderColor="#20AE3A"
                backgroundColor="#1A7B2C"
                className="text-white font-inter hover:scale-[1.03] transition-transform"
                urlLink="/signup-as"
              >
                <span className="font-medium text-xs leading-[100%]">
                  Book a Ride
                </span>
              </CustomButton>

              <CustomButton
                width="167px"
                height="50px"
                paddingX="16px"
                borderRadius="16px"
                borderWidth="1px"
                borderColor="#20AE3A"
                backgroundColor="#FDFDFD"
                className="text-primary-600 font-inter hover:scale-[1.03] transition-transform"
                urlLink="/signup-as"
              >
                <span className="font-medium text-xs leading-[100%]">
                  Become a Driver
                </span>
              </CustomButton>
            </div>
          </div>

          {/* Right Side Image */}
          <div 
            ref={rightImageRef}
            className="hero-right-image w-full sm:w-[507px] sm:h-[496px] h-full opacity-100 lg:opacity-100 m-auto px-4"
          >
            <img
              src="/mobile-1.png"
              alt="EaseDrive mobile app"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Add this to your global CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </Container>
  );
};