import React, { useEffect } from 'react'
import './hireme.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HireMe = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

    return (
        <>
            <section className='lg:sticky top-0 bg-tertiary hidden md:block pb-20'>
                {/* Container */}
                <h2 className='text-white font-Rammetto_One ml-20  lg:ml-28 lg:pt-14 text-4xl lg:text-3xl'>
                    Hire <span className='text-primary text-5xl f font-bold'>Me</span>
                </h2>
                <div className="relative  flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-2xl  pb-40 xl:max-w-6xl">
                    {/* Image Column */}
                    <div className="w-full h-64 hidden lg:block lg:w-1/2 lg:h-auto">
                        <img
                            className="h-full w-full object-cover"
                            src="hireme.png"
                            alt="Winding mountain road"
                        />
                    </div>
                    {/* Close Image Column */}
                    {/* Text Column */}

                    <div className="max-w-lg bg-[#545454]   md:max-w-screen-md md:z-10 md:shadow-lg md:absolute md:top-0 mt-10 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-[50px] xl:ml-12" data-aos="zoom-in">
                        {/* Text Wrapper */}
                        <div className="flex flex-col p-12 md:px-16" >
                            <h2 className="text-xl font-medium font-Englebert uppercase text-white lg:text-4xl">
                                Do you want any work done <span className='text-primary text-7xl d font-bold'>?</span>
                            </h2>
                            <p className="mt-4 font-Preahvihear text-white">
                                I&apos;m confident I can be a valuable asset to your team.  If you&apos;re looking for someone with <span className='text-primary font-bold'>MERN Full Stack Development</span> and <span className='text-primary font-bold'>Web Development</span> skills , then look no further! <br />
                                Click the button below to <span className='text-primary font-bold'>download my resume</span> and learn more about my qualifications and experience. <br />  I&apos;m always happy to discuss potential projects, so feel free to reach out through the contact form as well.
                                <br /><br />
                                <span className='text-primary font-extrabold b text-md '> Let&apos;s get started!</span>
                            </p>
                            {/* Button Container */}
                            <div className="mt-8 ">
                                {/* <a href="https://drive.google.com/file/d/1QlXsMWMsyk7LsSoL09RIdgYW9ZBJptSH/view?usp=sharing"
                                    target="_blank"
                                    download className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                                    Download My Resume
                                </a> */}
                                <button className="download-btn pixel-corners">
                                    <div className="button-content font-Jost tracking-wider">
                                        <a href="https://drive.google.com/file/d/1qwGsq2n11oyVyi7T6t7VT5P57QWZZIzr/view?usp=drive_link" className="svg-container">
                                            <svg
                                                className="download-icon"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z" />
                                            </svg>
                                        </a>
                                        <div className="text-container">
                                            <div className="text">
                                                Download
                                            </div>
                                        </div>
                                    </div>
                                </button>

                            </div>
                        </div>
                        {/* Close Text Wrapper */}
                    </div>
                    {/* Close Text Column */}
                </div>
            </section>
        </>

    )
}

export default HireMe