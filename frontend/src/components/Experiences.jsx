import { Card } from 'flowbite-react'
import React from 'react'

const experiences = () => {
    return (
        <div className="bg-tertiary py-6 sm:py-8 lg:py-12 sticky top-0">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8 pt-16 pb-40">
                {/* text - start */}
                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 ml-20 font-Rammetto_One text-start text-2xl  text-white md:mb-6 lg:text-3xl">
                        Developer     <span className='text-6xl f text-primary font-bold'>Experience</span>
                    </h2>

                </div>
                {/* text - end */}
                <div className="grid gap-4 sm:grid-cols-2 max-w-screen-xl">
                    {/* product - start */}
                    <div className="grid grid-cols-2   group  ">
                        <div className='ml-60 z-10  py-10 bg-black w-20  group-hover:bg-[#28282B] transition ease-in-out  duration-300 place-content-end grid  place-items-end'>
                            <h5 className="text-8xl font-Englebert text-[#545454] group-hover:text-primary transition ease-in-out  duration-300 z-10 font-bold tracking-tight  ">
                                2024
                            </h5>
                            <h5 className="text-xl font-Jost text-[#E5E4E2] font-bold tracking-tight  ">
                                January to  2024 May
                            </h5>

                        </div>
                        <div className='container bg-black w-96 pl-10 px-5 py-10 group-hover:bg-[#28282B] transition ease-in-out  duration-300 '>
                            <h5 className="text-2xl font-RumRaisin tracking-wide font-normal  text-white ">
                                MERN Stack Developement Intern
                            </h5>
                            <h5 className="text-md font-Josefin_Sans font-normal tracking-tight text-white mb-2">
                                Digipodium
                            </h5>
                            <p className="font-light font-Englebert tracking-wider text-white text-md text-start">
                                In my recent role, I developed and implemented the 'Voice and Tour Navigator,' a MERN stack plugin system that enhances website interactivity and accessibility with voice commands. Designed user-friendly guided tour features for a smooth and engaging user experience. This plugin empowers clients to easily integrate advanced features into their websites.
                            </p>
                        </div>
                    </div>
                    {/* product - end */}
                    {/* product - start */}
                    <div className="grid grid-cols-2   group  ">
                        <div className='ml-60  z-10  py-10 bg-black w-20  group-hover:bg-[#28282B] transition ease-in-out  duration-300 place-content-end grid  place-items-end'>
                            <h5 className="text-8xl font-Englebert text-[#545454] group-hover:text-primary transition ease-in-out  duration-300 z-10 font-bold tracking-tight  ">
                                2023
                            </h5>
                            <h5 className="text-xl font-Josefin_Sans text-[#E5E4E2] font-bold tracking-tight  ">
                                August to  2023 November
                            </h5>

                        </div>
                        <div className='container bg-black w-96 pl-10 px-5 py-10 group-hover:bg-[#28282B] transition ease-in-out  duration-300 '>
                            <h5 className="text-2xl font-normal font-RumRaisin tracking-wide text-white ">
                                SEO Intern
                            </h5>
                            <h5 className="text-md font-Josefin_Sans font-normal tracking-tight text-white mb-2">
                                Glatt Pharmaceuticals Private <br /> Limited
                            </h5>
                            <p className="font-light font-Englebert tracking-wider  text-white text-md text-start">
                                At Glatt Pharma, as an SEO Executive Intern, I boosted the company&apos;s online presence and led digital marketing efforts. I gained hands-on expertise in on-page and off-page SEO, mastering web content optimization, keyword research, and improving search engine rankings. My skills extend to technical SEO principles, making me a well-rounded contributor.                            </p>
                        </div>
                    </div>
                    {/* product - end */}
                </div>
            </div>
        </div>


    )
}

export default experiences