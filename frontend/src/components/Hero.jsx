import React from 'react';
import './hero.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {

    const [typeEffect] = useTypewriter({
        words: ['Developer', 'Developer', 'Developer'],
        loop: {},
        typeSpeed: 300,
        delaySpeed: 280
      })
    
    return (
        <section className=" sticky top-0  bg-[url(bggg.png)] bg-cover bg-center bg-no-repeat" >
            <div className="text-white body-font max-w-screen-xl pt-40  pb-56">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="ml-20 -mt-20 lg:flex-1 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  items-center text-center">
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

                            <>
                                <a href='instag' className="buttonhero">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        height={24}
                                        width={24}
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="w-6 h-6 text-white"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                            fillRule="evenodd"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                                <a href="" className="buttonhero">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        height={24}
                                        width={24}
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="w-6 h-6 text-green-600"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                                            fillRule="evenodd"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                                <a href="" className="buttonhero">
                                    <svg
                                        viewBox="0 0 512 512"
                                        fill="currentColor"
                                        height={24}
                                        width={24}
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="w-6 h-6 text-gray-800 dark:text-white"
                                    >
                                        <g clipPath="url(#a)">
                                            <rect height="512" width="512" fill="#000" rx="60" />
                                            <path
                                                d="M355.904 100h52.928L293.2 232.16 429.232 412H322.72l-83.424-109.072L143.84 412H90.88l123.68-141.36L84.065 100H193.28l75.408 99.696L355.904 100zm-18.576 280.32h29.328L177.344 130.016h-31.472L337.328 380.32z"
                                                fill="#fff"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="a">
                                                <path d="M0 0h512v512H0z" fill="#fff" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="fb" className="buttonhero">
                                    <svg
                                        viewBox="0 0 124 124"
                                        fill="currentColor"
                                        height={24}
                                        width={24}
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="w-6 h-6 text-gray-800 dark:text-white"
                                    >

                                        <path
                                            className="color333033 svgShape"
                                            d="M50.1 62.4v44.4c0 .6.5 1.2 1.2 1.2h16.5c.6 0 1.2-.5 1.2-1.2V61.6h11.9c.6 0 1.1-.5 1.2-1.1l1-13.5c.1-.7-.5-1.3-1.2-1.3h-13v-9.6c0-2.3 1.8-4.1 4.1-4.1h9.2c.6 0 1.2-.5 1.2-1.2V17.3c0-.6-.5-1.2-1.2-1.2H66.6c-9.1 0-16.5 7.4-16.5 16.5v13.1h-8.2c-.6 0-1.2.5-1.2 1.2v13.6c0 .6.5 1.2 1.2 1.2h8.2v.7z"
                                            fill="#fff"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a href="" className="buttonhero">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height={24}
                                        width={24}
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="w-6 h-6 text-gray-800 dark:text-white"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </>




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