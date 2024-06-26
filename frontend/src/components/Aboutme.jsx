import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Aboutme = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

    return (
        <section className='lg:sticky top-0 bg-tertiary hidden md:block'>
            <div className=" body-font max-w-screen-2xl pb-40">
                <div className="container   mx-auto flex px-5 py-24 lg:flex-row flex-col items-center">
                    <div className="flex lg:max-w-lg lg:w-full  w-4/5 mb-10 md:mb-0" data-aos="fade-right">

                        <h1 className="title-font text-center rotate-180 [writing-mode:_vertical-lr]  sm:text-3xl text-3xl mb-4 font-Rammetto_One text-white">
                            About  <span className='text-primary  '>Me !</span>
                        </h1>

                        <img
                            className="object-cover  grayscale hover:grayscale-0 aspect-square"
                            alt="hero"
                            src="mypic.png "
                        />
                    </div>

                    <div className="pt-20  lg:flex-grow w-full md:w-full  lg:pl-40 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center" data-aos="fade-left">
                        <h1 className="title-font  sm:text-3xl text-3xl mb-4 font-Rammetto_One text-white">
                            Namaste  <span className='text-primary '>Ji</span>     <span className='text-primary e font-bold text-5xl'>,</span><br />
                            I am Sachin <span className='text-primary  '> Kumar,</span>
                        </h1>
                       
                        <p className="mb-4 font-Preahvihear text-md leading-relaxed text-white max-w-screen-sm">
                            A recent  <span className='text-primary font-Preahvihear font-bold '>Computer Applications graduate</span>, is here to make a splash in the IT sector!
                            My passion for technology is undeniable, and I&apos;m eager to leverage my fresh perspective and diverse skillset to propel a company forward.
                            With a strong foundation in  <span className='text-primary font-Preahvihear  font-bold '>MERN Stack Development</span> (React.js, Node.js, Express.js, MongoDB), I&apos;m not just proficient &ndash; I&apos;m obsessed with crafting user-centric web experiences that captivate and engage.
                        </p>
                        <p className='text-white font-Preahvihear text-md max-w-screen-sm'>
                            But my talents extend beyond code. I possess SEO expertise and design prowess with Canva, making me a well-rounded asset for any team.
                        </p>
                        <p className=' font-Preahvihear text-md text-white mt-2 max-w-screen-sm'>
                            Are you ready to create something extraordinary together? Let&apos;s collaborate and turn innovative ideas into impactful  <span className='text-primary font-Preahvihear font-bold '>realities!</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Aboutme