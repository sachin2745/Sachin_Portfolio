import React from 'react'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from 'react-icons/ri';


const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();

  
    return (
        <div style={{ background: 'linear-gradient(45deg, #eb1f00, #330000)' }} className='sticky top-0 hidden md:block'>
            {/* <img className='w-screen h-auto' src="myimg.png" alt="pic" /> */}
            <div className="flex h-10 p-5 justify-between items-center footer" >

                <div md="4" className="footer-copywright text-white font-Preahvihear" >
                    <h3>Designed and Developed by Sachin</h3>
                </div>
                <div md="4" className="footer-copywright text-white font-Preahvihear">
                    <h3> &copy; {year} @Sachin_Portfolio.</h3>
                </div>
                <div md="4" className=" footer-body" >
                    <ul className="grid gap-x-8 grid-cols-4  footer-icons">
                        <li className="social-icons ">
                            <a
                                href="https://github.com/sachin2745"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://twitter.com/sachin__2706"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <RiTwitterXLine />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/thesachinkumar/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/sachin__2706"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer