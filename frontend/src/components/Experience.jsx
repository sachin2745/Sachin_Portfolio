import React, { useState } from "react";
import Modal from "react-modal";
import { FaTimesCircle } from "react-icons/fa";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import jobExperiences from "../constants/jobExperiences.json";

const JobExperienceCard = ({ experience, onClick }) => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        icon={
            <img
                src={experience.img}
                alt={experience.title}
                className="h-full w-full rounded-full bg-white block content-center mx-auto"
            />
        }
        contentStyle={{ background: ' linear-gradient(45deg, #000000, #222222, #333333)',color:'#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #333333' }}
        date={<span className="text-primary d font-bold text-3xl">{experience.timePeriod}</span>}
    >
        {/* <img
      src={experience.img}
      alt={experience.title}
      className=" hidden md:block h-14 w-auto rounded-full absolute top-0 right-0 mt-2 mr-2"
    /> */}
        <h3 className="text-2xl font-bold text-whitw">{experience.title}</h3>
        <p className="text-xl text-whitw  mb-4">{experience.company}</p>
        {/* <p className="text-whitw">{experience.description}</p> */}
        <div className="flex justify-end items-center">
            <button
                className="text-primary mt-3 px-4 py-1 border-l-2 border-primary  font-bold hover:bg-primary hover:text-black"
                onClick={onClick}
            >
                Read more...
            </button>
        </div>
    </VerticalTimelineElement>
);



const Experience = () => {
    const [modalContent, setModalContent] = useState(null);

    return (
        <>
            <section className=" sticky top-0 hidden md:block">
                <div
                    id="experience"
                    className="bg-tertiary p-8 rounded-lg shadow-lg w-full mx-auto pt-32 pb-40"
                >
                    <h2 className="text-4xl  font-Rammetto_One text-white mb-8 text-center">
                        Developer <span className="f text-6xl font-bold text-primary">Experience</span>
                    </h2>
                    <VerticalTimeline>
                        {jobExperiences.map((experience, index) => (
                            <JobExperienceCard
                                key={index}
                                experience={experience}
                                onClick={() => setModalContent(experience)}
                            />
                        ))}
                    </VerticalTimeline>



                    <Modal
                        isOpen={!!modalContent}
                        onRequestClose={() => setModalContent(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-6 "
                        overlayClassName="bg-white bg-opacity-50 transition-opacity duration-500 ease-out"
                    >
                        <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform duration-500 ease-out space-y-4 md:space-y-0 max-w-md max-h-[80vh] overflow-y-auto">
                            <button
                                onClick={() => setModalContent(null)}
                                className="absolute top-2 right-2 text-darkDesert hover:text-goldDesert"
                            >
                                <FaTimesCircle size={32} />
                            </button>
                            <div>
                                <h3 className="text-black text-2xl font-bold mb-4">
                                    {modalContent?.title}
                                </h3>
                                <p className="text-black mb-4">{modalContent?.company}</p>
                                <p className="text-black mb-4">{modalContent?.description}</p>
                                <p className="text-black font-bold">
                                    {modalContent?.timePerioddetail}
                                </p>
                            </div>
                        </div>
                    </Modal>
                </div>
                
            </section>
        </>
    );
};

export default Experience;