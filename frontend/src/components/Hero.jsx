import React, { useEffect } from 'react';
import './hero.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookSquare, FaLinkedinIn, FaSnapchatSquare } from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";

const Hero = () => {


    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);


    const [typeEffect] = useTypewriter({
        words: ['Developer', 'Developer', 'Developer'],
        loop: {},
        typeSpeed: 300,
        delaySpeed: 280
    })

    return (
        <section className=" sticky top-0  bg-[url(bggg.png)] bg-cover bg-center bg-no-repeat hidden md:block" >
            <div className="text-white body-font max-w-screen-xl pt-40  pb-56">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="ml-20 -mt-20 lg:flex-1 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  items-center text-center" data-aos="fade-right">

                        <p className="mb-2 leading-relaxed uppercase font-bold font-Preahvihear">
                            Hello There, <br /> Welcome to   <span className=' text-primary '>My site</span>
                        </p>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-Rammetto_One">
                            I'm <br />   Sachin <span className=' text-primary '>Kumar</span>
                        </h1>
                        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-Rammetto_One">
                            A <br /> Full Stack <span className=' text-primary '>{typeEffect} </span>
                        </h2>
                        <div className="loader"></div>


                        <div className="flex lg:flex-row md:flex-col mt-10 -ml-5">
                            {/* <button className="bg-secondary inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
                                </svg>
                                <span className="ml-4 flex items-start flex-col leading-none">
                                    <span className="text-xs text-white mb-1">GET IT ON</span>
                                    <span className="title-font font-medium">Google Play</span>
                                </span>
                            </button> */}
                            <ul className="grid gap-x-8 grid-cols-5 ml-6 ">
                                <li className="social-icons ">
                                    <a
                                        href="https://github.com/sachin2745"
                                        style={{ color: "white" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillGithub className='w-7 h-7 icons' />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="https://www.linkedin.com/in/thesachinkumar/"
                                        style={{ color: "white" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedinIn className='w-7 h-7 icons' />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="https://www.instagram.com/Sachin__2706"
                                        style={{ color: "white" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillInstagram className='w-7 h-7 icons' />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href="https://www.snapchat.com/add/sachin_8276?share_id=XSIPW8jPZok&locale=en-IN6"
                                        style={{ color: "white" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaSnapchatSquare className='w-7 h-7 icons'  />
                                    </a>
                                </li>
                                <li className="social-icons ">
                                    <a
                                        href="https://X.com/sachin__2706"
                                        style={{ color: "white" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <RiTwitterXLine className='w-7 h-7  icons' />
                                    </a>
                                </li>


                            </ul>
                        </div>
                    </div>
                    <div className="lg:max-w-xl  lg:w-full md:w-1/2 w-5/6 pt-20 ">
                        {/* <img
                            className="object-cover object-center  ml-36 "
                            alt="hero"
                            src="Sachinimg.png"
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero