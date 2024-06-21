import React from 'react'
import './project.css'
import { useState } from "react"
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "33rem",
        width: "90%",
    },
    overlay: {
        padding: "2rem",
    },
};

const Project = () => {


    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [modalOpen, setOpen] = useState(false);

    function openModal2() {
        setOpen(true);
    }

    function closeModal2() {
        setOpen(false);
    }


    return (
        <section className='bg-tertiary sticky top-0 pb-40'>
            <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8  pt-20">
                <h2 className="text-3xl text-white font-Rammetto_One  -ml-10  text-start sm:text-4xl mb-3">
                    Projects - My Recent <span className='text-primary b font-bold text-3xl'>Works</span>
                </h2>
            </div>
            <div className="mx-auto max-w-screen-xl  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">

                <div className="grid grid-cols-1 gap-4  lg:grid-cols-3 lg:items-stretch">


                    <div className="lg:col-span-2 lg:py-8">
                        <ul className="grid grid-cols-2 gap-4">
                            <li>
                                <div className="group block">
                                    <img
                                        src="ownyourcap.png"
                                        alt=""
                                        className="  h-full w-full aspect-video mt-12 rounded "
                                    />

                                    <div className="mt-3 ">
                                        <h3
                                            className="font-medium font-Englebert text-xl tracking-wider text-white mb-3"
                                        >
                                            Own Your Cap
                                        </h3>

                                        <div className="flex justify-between font-Jost">
                                            <button className="button"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 16 16"
                                                    height={24}
                                                    width={24}
                                                >
                                                    <path
                                                        className="color000000 svgShape"
                                                        d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 005.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 012.003-.27 7.65 7.65 0 012.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0016 8.032C16 3.596 12.418 0 7.999 0z"
                                                        fill="#fff"
                                                    />
                                                </svg>
                                                <p className="text">
                                                    <a href="https://github.com/sachin2745/ownyourcap">
                                                        Github
                                                    </a>
                                                </p>
                                            </button>

                                            <button onClick={openModal} className="cssbuttons-io-button">
                                                Details
                                                <div className="icon">
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M0 0h24v24H0z" fill="none" />
                                                        <path
                                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                            </button>
                                            <Modal
                                                isOpen={modalIsOpen}
                                                onRequestClose={closeModal}
                                                style={customStyles}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <img className="h-14  bg-black rounded-full" src='ownyourcaplogo.png' alt="..." />
                                                    <h6 className='e text-2xl '>Own Your Cap</h6>
                                                </div>
                                                <br />
                                                <h6 className="font-Englebert text-md tracking-wider font-bold underline underline-offset-2 decoration-1">Technologies Used</h6>
                                                <div className="grid grid-cols-4 gap-1 font-Jost">

                                                    <div className="flex  gap-1">
                                                        <p>React.js</p>
                                                    </div>
                                                    <div className="flex  gap-1">
                                                        <p>Node.js</p>
                                                    </div>
                                                    <div className="flex  gap-1">
                                                        <p>Express.js</p>
                                                    </div>
                                                    <div className="flex  gap-1">
                                                        <p>MongoDB</p>
                                                    </div>
                                                    <div className="flex  gap-1">
                                                        <p>Tailwind Css</p>
                                                    </div>
                                                    <div className="flex  gap-1">
                                                        <p>Stripe</p>
                                                    </div>
                                                    <div className="flex  gap-1">
                                                        <p>React Speech Recognition</p>
                                                    </div>
                                                    <div className="flex  gap-1">
                                                        <p>JWT</p>
                                                    </div>
                                                </div>

                                                <h6 className="font-Englebert text-md tracking-wider font-bold underline underline-offset-2 decoration-1">My Role</h6>
                                                <p className="font-Jost sm:text-md text-md !leading-7 mb-2">
                                                    Full Stack Developer
                                                </p>

                                                <h6 className="font-Englebert text-md tracking-wider font-bold underline underline-offset-2 decoration-1">Description</h6>
                                                <p className="font-Jost sm:text-md text-md !leading-7">
                                                    I developed "OwnYourCap," a comprehensive e-commerce platform for branded caps using the MERN stack. The platform features seamless browsing, secure payment processing, and efficient shipping functionalities, ensuring an exceptional user experience.                                                </p>


                                                <div className="flex justify-end font-Jost">
                                                    <button onClick={closeModal} className="btn text-gray-900 border-solid border-2 hover:bg-black hover:text-white border-b-gray-800  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded text-sm px-5 py-2 text-center me-2 mb-2">
                                                        Close
                                                    </button>
                                                </div>
                                            </Modal>

                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="group block ">
                                    <img
                                        src="voicetournavigator.png"
                                        alt=""
                                        className=" h-full w-full aspect-video mt-12 rounded"
                                    />

                                    <div className="mt-3 ">
                                        <h3
                                            className="font-medium font-Englebert text-xl tracking-wider text-white mb-3"
                                        >
                                            Voice And Tour Navigator
                                        </h3>

                                        <div className="flex justify-between font-Jost">
                                            <button className="button"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 16 16"
                                                    height={24}
                                                    width={24}
                                                >
                                                    <path
                                                        className="color000000 svgShape"
                                                        d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 005.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 012.003-.27 7.65 7.65 0 012.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0016 8.032C16 3.596 12.418 0 7.999 0z"
                                                        fill="#fff"
                                                    />
                                                </svg>
                                                <p className="text">
                                                    <a href="https://github.com/Aviral2442/Voice-Tour-Plugin">
                                                        Github
                                                    </a>
                                                </p>
                                            </button>

                                            <button onClick={openModal2} className="cssbuttons-io-button">
                                                Details
                                                <div className="icon">
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M0 0h24v24H0z" fill="none" />
                                                        <path
                                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                            </button>
                                            <Modal
                                                isOpen={modalOpen}
                                                onRequestClose={closeModal2}
                                                style={customStyles}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <img className="h-14 bg-gray-900 rounded-full" src='voicetourlogo.png' alt="..." />
                                                    <h6 className='e text-2xl font-semibold'>Voice And Tour Navigator</h6>
                                                </div>
                                                <br />
                                                <h6 className="font-Englebert text-md tracking-wider font-bold underline underline-offset-2 decoration-1">Technologies Used</h6>
                                                <div className="grid grid-cols-4 gap-2 mb-2 font-Jost">

                                                    <div className="flex  gap-1">
                                                        <p>React</p>
                                                    </div>
                                                    <div className="flex  gap-1">
                                                        <p>Node</p>
                                                    </div>
                                                    <div className="flex  gap-1">
                                                        <p>Express</p>
                                                    </div>
                                                    <div className="flex  gap-1">
                                                        <p>MongoDB</p>
                                                    </div>
                                                    <div className="flex  gap-1">
                                                        <p>Mantine UI</p>
                                                    </div>
                                                    <div className="flex  gap-1">
                                                        <p>Mongoose</p>
                                                    </div>
                                                    <div className="flex  gap-1">
                                                        <p>Formik</p>
                                                    </div>
                                                    <div className="flex  gap-1">
                                                        <p>Json Web Token</p>
                                                    </div>
                                                </div>

                                                <h6 className="font-Englebert text-md tracking-wider font-bold underline underline-offset-2 decoration-1">My Role</h6>
                                                <p className="font-Jost sm:text-md text-md !leading-7 mb-2">
                                                    Full Stack Developer
                                                </p>

                                                <h6 className="font-Englebert text-md tracking-wider font-bold underline underline-offset-2 decoration-1">Description</h6>
                                                <p className="font-Jost sm:text-md text-md !leading-7">
                                                    My Partner and I developed a plugin-based website that enhances user experience through voice-controlled navigation and interactive tour guides.
                                                    We used advanced voice recognition technology to enable users to navigate web pages via voice commands, significantly improving accessibility and ease of use.
                                                    Additionally, the website provides features for creating step-by-step guided tours, facilitating user onboarding and boosting engagement.
                                                    The application leverages React Redux to manage the state and ensures a seamless user experience.
                                                </p>


                                                <div className="flex justify-end font-Jost">
                                                    <button onClick={closeModal2} className="btn text-gray-900 border-solid border-2 hover:bg-black hover:text-white border-b-gray-800  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded text-sm px-5 py-2 text-center me-2 mb-2">
                                                        Close
                                                    </button>
                                                </div>
                                            </Modal>

                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="grid place-content-center  aspect-square  rounded bg-white p-6 sm:p-8">

                        <img className='h-full object-cover aspect-square  '
                            src="project.jpg" alt="project pic" />

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Project
