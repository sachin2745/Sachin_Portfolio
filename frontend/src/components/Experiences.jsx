import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import "./Exp.css";
import "swiper/css/navigation";

const experiences = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-tertiary py-6 sm:py-8 lg:py-10 lg:sticky top-0 hidden md:block ">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 pt-80  lg:pt-12 pb-10 lg:pb-40">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 ml-12 lg:ml-20 font-Rammetto_One text-start text-4xl  text-white  lg:text-3xl">
            Developer{" "}
            <span className="text-6xl f text-primary font-bold">
              Experience
            </span>
          </h2>
        </div>
        <div className="max-w-screen-2xl cursor-pointer">
          <Swiper
            slidesPerView={"2"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {/* product - start */}
            <SwiperSlide>
              <div className="grid grid-cols-2 group py-10" data-aos="zoom-out">
                <div className="ml-40 lg:ml-52  z-10  py-10 bg-black w-20  group-hover:bg-[#28282B] transition ease-in-out  duration-300 place-content-end grid  place-items-end">
                  <h5 className="text-8xl font-Englebert text-[#545454] group-hover:text-primary transition ease-in-out  duration-300 z-10 font-bold tracking-tight  ">
                    2024
                  </h5>
                  <h5 className="text-xl font-Josefin_Sans text-[#E5E4E2] font-bold tracking-tight  ">
                    August to 2024 December
                  </h5>
                </div>
                <div className="container bg-black w-96 -ml-16 lg:-ml-10 lg:pl-10 lg:px-5 lg:py-10 group-hover:bg-[#28282B] transition ease-in-out  duration-300 ">
                  <h5 className="text-2xl font-normal font-RumRaisin tracking-wide text-white ">
                    Junior Web Developer
                  </h5>
                  <h5 className="text-md font-Josefin_Sans font-normal tracking-tight text-white group-hover:text-primary mb-2">
                    Innovative Modern Engineers Pvt. Ltd.
                  </h5>
                  <p className="font-light font-Englebert tracking-wider  text-white text-md text-start">
                    Developed and maintained web applications using PHP and
                    Laravel, optimized MySQL queries, and implemented dynamic UI
                    components with jQuery. Collaborated on feature
                    enhancements, resolved technical issues, and ensured code
                    quality. Integrated APIs and contributed
                    to performance optimization, delivering 
                    efficient solutions for seamless user experience and
                    functionality.{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* product - end */}
            {/* product - start */}
            <SwiperSlide>
              <div
                className="grid grid-cols-2 group py-10 "
                data-aos="zoom-out"
              >
                <div className="ml-40 lg:ml-60  z-10  py-10 bg-black w-20  group-hover:bg-[#28282B] transition ease-in-out  duration-300 place-content-end grid  place-items-end">
                  <h5 className="text-8xl font-Englebert text-[#545454] group-hover:text-primary transition ease-in-out  duration-300 z-10 font-bold tracking-tight  ">
                    2024
                  </h5>
                  <h5 className="text-xl font-Jost text-[#E5E4E2] font-bold tracking-tight  ">
                    January to 2024 May
                  </h5>
                </div>
                <div className="container bg-black w-96 -ml-16 lg:-ml-0 lg:pl-10 lg:px-5 lg:py-10 group-hover:bg-[#28282B] transition ease-in-out  duration-300 ">
                  <h5 className="text-2xl font-RumRaisin tracking-wide font-normal  text-white ">
                    MERN Stack Developement Intern
                  </h5>
                  <h5 className="text-md font-Josefin_Sans font-normal tracking-tight text-white group-hover:text-primary mb-2">
                    Digipodium
                  </h5>
                  <p className="font-light font-Englebert tracking-wider text-white text-md text-start">
                    In my recent role, I developed and implemented the 'Voice
                    and Tour Navigator,' a MERN stack plugin system that
                    enhances website interactivity and accessibility with voice
                    commands. Designed user-friendly guided tour features for a
                    smooth and engaging user experience. This plugin empowers
                    clients to easily integrate advanced features into their
                    websites.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* product - end */}
            {/* product - start */}
            <SwiperSlide>
              <div className="grid grid-cols-2 group py-10" data-aos="zoom-out">
                <div className="ml-40 lg:ml-60  z-10  py-10 bg-black w-20  group-hover:bg-[#28282B] transition ease-in-out  duration-300 place-content-end grid  place-items-end">
                  <h5 className="text-8xl font-Englebert text-[#545454] group-hover:text-primary transition ease-in-out  duration-300 z-10 font-bold tracking-tight  ">
                    2023
                  </h5>
                  <h5 className="text-xl font-Josefin_Sans text-[#E5E4E2] font-bold tracking-tight  ">
                    August to 2023 November
                  </h5>
                </div>
                <div className="container bg-black w-96 -ml-16 lg:-ml-0 lg:pl-10 lg:px-5 lg:py-10 group-hover:bg-[#28282B] transition ease-in-out  duration-300 ">
                  <h5 className="text-2xl font-normal font-RumRaisin tracking-wide text-white ">
                    SEO Intern
                  </h5>
                  <h5 className="text-md font-Josefin_Sans font-normal tracking-tight text-white group-hover:text-primary mb-2">
                    Glatt Pharmaceuticals Private <br /> Limited
                  </h5>
                  <p className="font-light font-Englebert tracking-wider  text-white text-md text-start">
                    At Glatt Pharma, as an SEO Executive Intern, I boosted the
                    company&apos;s online presence and led digital marketing
                    efforts. I gained hands-on expertise in on-page and off-page
                    SEO, mastering web content optimization, keyword research,
                    and improving search engine rankings. My skills extend to
                    technical SEO principles, making me a well-rounded
                    contributor.{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* product - end */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default experiences;
