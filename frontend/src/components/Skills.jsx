import React from 'react'
import { Carousel } from "flowbite-react";

const Skills = () => {
    return (
        <div className="bg-tertiary py-6 sm:py-8 lg:py-12 sticky top-0 ">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8 mb-20">
                <h2 className="mb-8 text-3xl text-white font-Rammetto_One tracking-wider  text-start ml-20  font-bold  md:mb-12 lg:text-3xl">
                    Skills  <span className='b text-primary text-3xl font-bold'> expertise</span>
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-6">
                    {/* product - start */}
                    <>
                        <div className=" ">
                            <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-400 transition-all duration-300 group-hover:scale-[10]" />
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span className="grid h-20 w-20 place-items-center rounded-full bg-emerald-400 transition-all duration-300 group-hover:bg-green-400">
                                       
                                        <img className='w-20 h-20' src="mern.png" alt="" />
                                    </span>
                                  
                                    <div className="pt-5 text-base leading-7">

                                        <h2
                                            className="text-emerald-700 font-RumRaisin text-xl tracking-wider font-extrabold transition-all duration-300 group-hover:text-white"
                                        >
                                            MERN Stack Development
                                        </h2>
                                        <p className="text-black font-Preahvihear font-normal text-sm transition-all duration-300 group-hover:text-white">
                                            MongoDB,<br /> Express.js,<br />
                                            React.js,<br /> Node.js.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                    {/* product - end */}
                    {/* product - start */}
                    <>
                        <div className=" mt-40">
                            <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]" />
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span className="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-white">
                                       
                                        <img className='w-20 h-20' src="frontend.png" alt="" />
                                    </span>
                                   
                                    <div className="pt-5 text-base leading-7 -mt-5">

                                        <h2
                                            className="text-sky-500 font-RumRaisin text-xl  tracking-wider font-extrabold mb-2 transition-all duration-300 group-hover:text-white"
                                        >
                                            Frontend  Libraries
                                        </h2>
                                        <p className="text-black font-Preahvihear font-normal text-sm transition-all duration-300 group-hover:text-white">
                                            Modern web tools for stylish interfaces: <br />  Bootstrap 5, <br />Mantine UI,<br /> Tailwind CSS
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                    {/* product - end */}
                    {/* product - start */}
                    <>
                        <div className=" ">
                            <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#00599D] transition-all duration-300 group-hover:scale-[10]" />
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span className="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-white">
                                       
                                          <img className='w-20 h-20' src="programming.png" alt="" />
                                    </span>
                                    
                                    <div className="pt-5 text-base font-semibold leading-7">

                                        <h2
                                            className="text-[#00599D] font-RumRaisin text-xl tracking-wider font-extrabold text-md transition-all duration-300 group-hover:text-white"
                                        >
                                            Programming Languages
                                        </h2>
                                        <p className="text-black font-Preahvihear font-normal text-sm transition-all duration-300 group-hover:text-white">
                                            Proficient in C and Java, with strong problem solving and coding skills.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                    {/* product - end */}
                    {/* product - start */}
                    <>
                        <div className="mt-40 ">
                            <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-orange-400 transition-all duration-300 group-hover:scale-[10]" />
                                <div className="relative z-10 mx-auto max-w-md">
                                    <div className="h-20 sm:h-20 xl:h-20 2xl:h-20">

                                        <span className="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-white">
                                            
                                              <img className='w-20 h-20' src="web.png" alt="" />
                                        </span>

                                    </div>
                                   
                                    <div className="pt-5 mb-7 text-base font-semibold leading-7">

                                        <h2
                                            className="text-orange-700 font-RumRaisin text-xl tracking-wider font-extrabold mb-2 transition-all duration-300 group-hover:text-white"
                                        >
                                            Web Design
                                        </h2>
                                        <p className="text-black font-Preahvihear font-normal text-sm transition-all duration-300 group-hover:text-white">
                                            HTML5, CSS3, and  JavaScript: <br />
                                            Building websites with modern front-end technologies.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                    {/* product - end */}
                    {/* product - start */}
                    <>
                        <div className=" ">
                            <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-quaternary transition-all duration-300 group-hover:scale-[10]" />
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span className="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-white">

                                        <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className=" text-white transition-all"
                                        >
                                            <path d="M1664 896q0 251-146.5 451.5T1139 1625q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105T1386 856q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T578 459.5 492 446q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5T484 1274q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5T128 896q0-209 103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z" />
                                        </svg>
                                    </span>
                                  
                                    <div className="pt-5 text-base font-semibold leading-7">

                                        <h2
                                            className="text-black font-RumRaisin text-xl tracking-wider font-extrabold mb-2 transition-all duration-300 group-hover:text-white"
                                        >
                                            GitHub
                                        </h2>
                                        <p className="text-black font-Preahvihear font-normal text-sm transition-all duration-300 group-hover:text-white">
                                            Proficient in Git and GitHub for source code
                                            management, collaboration, and version tracking
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </>

                    {/* product - end */}
                    {/* product - start */}
                    <>
                        <div className=" mt-40">
                            <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#20C4CB] transition-all duration-300 group-hover:scale-[10]" />
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span className="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-white">
                                       
                                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="50" cy="51" fill="#20c4cb" r="49" />
                                            <path
                                                d="M62.7 59.2c-2 2.2-4.8 3.3-6.1 3.3-1.5 0-2.3-.9-2.5-2.3-.1-.5 0-1.1.1-1.6.5-3.1 1.6-5.1 1.6-5.6 0-.2-.1-.3-.2-.3-1 0-4.4 3.5-4.9 5.8l-.4 1.9c-.3 1.3-1.5 2.1-2.4 2.1-.4 0-.7-.2-.8-.7v-.6l.2-1c-1.8 1.4-3.8 2.3-4.7 2.3-1.3 0-2-.7-2.2-1.7-.8 1.1-1.9 1.7-3.1 1.7-1.5 0-2.9-1-3.6-2.5-1 1.1-2.2 2.2-3.6 3.1-2.1 1.3-4.4 2.4-7.1 2.4-2.5 0-4.7-1.3-5.8-2.4-1.8-1.6-2.7-4.1-3-6.3-.9-7 3.4-16.3 10.1-20.3 1.5-.9 3.2-1.4 4.8-1.4 3.2 0 5.6 2.3 5.9 5 .3 2.5-.7 4.6-3.4 5.9-1.4.7-2.1.7-2.3.3-.1-.2-.1-.6.2-.8 2.6-2.1 2.6-3.9 2.3-6.4-.2-1.6-1.2-2.6-2.4-2.6C24.2 36.5 17 47.8 18 56c.4 3.2 2.4 6.9 6.4 6.9 1.3 0 2.8-.4 4-1 2.2-1.1 3.5-2 4.7-3.5-.3-3.8 3-8.6 7.8-8.6 2.1 0 3.8.8 4 2.5.3 2.1-1.5 2.5-2.2 2.5-.6 0-1.5-.2-1.6-.7-.1-.6 1.3-.3 1.1-1.6-.1-.8-1-1.1-1.8-1.1-3 0-4.7 4.2-4.4 6.8.1 1.2.8 2.4 1.8 2.4.9 0 2.2-1.3 2.6-3.1.3-1.3 1.5-2.1 2.4-2.1.5 0 .8.2.8.7v.6c-.1.5-.5 2.4-.5 2.7 0 .3.2.8.8.8.5 0 2.1-.9 3.7-2.3.5-2.5 1.1-5.6 1.1-5.8.2-1 .6-2.1 2.6-2.1.4 0 .7.2.8.7v.6l-.5 2.7c1.8-2.4 4.6-4.2 6.3-4.2.7 0 1.3.4 1.4 1.1.1.4-.1 1.1-.3 1.9-.6 1.6-1.3 4.1-1.7 6.2-.1.5.1 1.1.9 1.1.7 0 2.8-.8 4.5-3.1v-1c0-1.8.1-3.2.5-4.3.3-1.1 1.7-2.1 2.6-2.1.5 0 .8.3.8.8 0 .2 0 .4-.1.6-.6 1.9-1 3.6-1 5.3 0 1 .2 2.5.4 3.3 0 .2.1.3.3.3.3 0 2.3-1.9 3.7-4.3-1.3-.8-2-2.3-2-4.1 0-3 1.8-4.6 3.6-4.6 1.4 0 2.6 1 2.6 3 0 1.3-.5 2.7-1.2 4.1h.4c1.1 0 1.9-.5 2.4-1.1.2-.2.4-.4.6-.5 1.4-1.7 3.5-2.9 5.9-2.9 2.1 0 3.8.8 4 2.5.3 2.1-1.6 2.6-2.2 2.6-.6 0-1.6-.2-1.6-.7-.1-.5 1.3-.3 1.2-1.6-.1-.8-1-1.2-1.8-1.2-2.8 0-4.7 3.7-4.4 6.8.1 1.2.7 2.4 1.8 2.4.9 0 2.2-1.3 2.7-3.1.3-1.2 1.5-2.1 2.4-2.1.4 0 .8.2.8.7 0 .3-.1.8-.5 2.8-.2.8-.2 1.6-.2 2.1.2 1.2.7 2 1.2 2.5.2.2.3.4.3.5 0 .3-.2.6-.6.6-.1 0-.3 0-.4-.1-2.2-.9-3.1-2.4-3.3-3.7-.8 1.1-1.9 1.6-3.1 1.6-1.9 0-3.8-1.7-4.1-3.9-.1-.9 0-1.9.3-2.8-.8.5-1.6.8-2.4.8h-.7c-1.9 2.7-3.9 4.6-5.4 5.5-.6.3-1.2.5-1.6.5-.3 0-.7-.1-.9-.4-.6-.4-.9-1.4-1-2.6zm6.8-9c0 1.2.6 2.4 1.3 3.2.3-.8.5-1.6.5-2.4 0-1.5-.6-2.2-1-2.2-.6 0-.8.8-.8 1.4z"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </span>
                                   
                                    <div className="pt-5 mb-3 text-base font-semibold leading-7">

                                        <h2
                                            className="text-[#20C4CB] font-RumRaisin text-xl tracking-wider font-extrabold mb-2 transition-all duration-300 group-hover:text-white"
                                        >
                                            Graphic Design
                                        </h2>
                                        <p className="text-black font-Preahvihear font-normal text-sm transition-all duration-300 group-hover:text-white">
                                            Canva:
                                            <br /> Online design tool for creating graphics, presentations, and more.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                    {/* product - end */}
                </div>
            </div>
        </div>

    )
}

export default Skills