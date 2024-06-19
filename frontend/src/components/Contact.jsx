import React from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import toast from 'react-hot-toast';

const Contact = () => {

    const contactFormvalidationSchema = Yup.object().shape({
        name: Yup.string().required('Name is Required').min(3, 'Name is Too Short').max(15, "Name must be at most 10 characters"),
        email: Yup.string()
            .email('Please enter a valid email address')
            .required('Email is required'),
        subject: Yup.string().required('Subject is Required').min(5, 'Subject is Too Short'),
        message: Yup.string().required('Message is Required').min(6, 'Message is Too Short'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },

        onSubmit: (values) => {
            console.log(values);

            fetch(`${import.meta.env.VITE_API_URL}/contactForm/add/`, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        toast.success('Message sent successfully');
                        formik.resetForm();
                    } else {
                        toast.error('Message not sent');
                    }

                }).catch((err) => {
                    console.log(err);
                    toast.error('Message not sent');

                });
        },

        validationSchema: contactFormvalidationSchema,

    });

    return (

        <>
            <div className=" flex  p-20 bg-tertiary sticky top-0 ">
                <section className="bg-tertiary ">
                    <div className="py-8 lg:py-10 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl text-start text-white font-Rammetto_One  tracking-wider">
                            Contact <span className="font-Allura text-7xl  text-primary">Us</span>
                        </h2>
                        <p className="mb-1 lg:mb-1 font-normal text-start text-white sm:text-xl font-Jost   tracking-wide">
                            Thank you for visiting my <span className="font-Allura text-4xl  text-primary">portfolio!</span>
                        </p>
                        <p className="mb-8 lg:mb-8 font-light text-start text-white sm:text-xl font-Jost  tracking-wide">
                            If you have questions, project ideas, or just want to say hello, please reach out.
                            I'm open to opportunities that match my skills and interests. Your thoughts matter, and I look forward to connecting with you.
                            My inbox is always <span className="font-Allura text-3xl  text-primary">open.</span>
                        </p>
                        <form onSubmit={(formik.handleSubmit)} autocomplete="off" className="space-y-8 font-SirinStencil">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text"
                                    id="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    className="block py-2.5 px-0 w-full text-xl text-primary bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer"
                                    placeholder=" "
                                    required />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className="text-red-500 text-md">{formik.errors.name}</div>
                                ) : null}
                                <label htmlFor="name" className="peer-focus:font-medium absolute text-xl text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Name
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="email"
                                    id='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    className="block py-2.5 px-0 w-full text-xl text-primary bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer"
                                    placeholder=" "
                                    required />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-500 text-md">{formik.errors.email}</div>
                                ) : null}
                                <label htmlFor="email" className="peer-focus:font-medium absolute text-xl text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Email address
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" id='subject'
                                    value={formik.values.subject}
                                    onChange={formik.handleChange}
                                    className="block py-2.5 px-0 w-full text-xl text-primary bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer"
                                    placeholder=" "
                                    required />
                                {formik.touched.subject && formik.errors.subject ? (
                                    <div className="text-red-500 text-md">{formik.errors.subject}</div>
                                ) : null}
                                <label htmlFor="subject" className="peer-focus:font-medium absolute text-xl text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Subject
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <textarea type="text"
                                    id='message'
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    className="block py-2.5 px-0 w-full text-xl text-primary bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer"
                                    placeholder=" "
                                    required />
                                {formik.touched.message && formik.errors.message ? (
                                    <div className="text-red-500 text-md">{formik.errors.message}</div>
                                ) : null}
                                <label htmlFor="message" className="peer-focus:font-medium absolute text-xl text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Your message
                                </label>
                            </div>



                            <button
                                type="submit"
                                className="py-3 px-5 text-md font-bold font-Jost text-center text-black rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-2 focus:outline-none focus:ring-white "
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </section>
                <section className="bg-transparent  ml-32">
                    <div className='py-8 mt-16  lg:py-10 px-4 mx-auto max-w-screen-3xl grid grid-rows-3 grid-flow-col gap-4 place-content-center group'>
                        <div className="flex  flex-col bg-quaternary  items-center  border-b-4 border-primary  rounded-lg shadow md:flex-row md:max-w-xl duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  cursor-pointer "
                        >
                            <img
                                className="object-cover p-2 rounded-t-lg h-full md:h-20 md:w-20 md:rounded-none md:rounded-s-lg"
                                src="address.png"
                                alt=""
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold  text-white font-Englebert  tracking-wider">
                                    Address
                                </h5>
                                <p className="mb-3 font-normal text-white font-Jost  tracking-wider">
                                    Rajajipuram,
                                    <br />
                                    Lucknow, Uttar Pradesh.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-quaternary items-center  border-b-4 border-primary  rounded-lg shadow md:flex-row md:max-w-xl  duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  cursor-pointer"
                        >
                            <img
                                className="object-cover p-2 w-full rounded-t-lg h-96 md:h-20 md:w-20 md:rounded-none md:rounded-s-lg"
                                src="contact.png"
                                alt=""
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold  text-white font-Englebert  tracking-wider">
                                    Contact
                                </h5>
                                <p className="mb-3 font-normal text-white font-Jost  tracking-wider">
                                    Feel free to give me a call—I'm just a phone ring away!<br />
                                    +91 6394789648
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col  items-center bg-quaternary border-b-4 border-primary  rounded-lg shadow md:flex-row md:max-w-xl duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  cursor-pointer "
                        >
                            <img
                                className="object-cover p-2 w-full rounded-t-lg h-96 md:h-20 md:w-20 md:rounded-none md:rounded-s-lg"
                                src="email.png"
                                alt=""
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold  text-white font-Englebert  tracking-wider">
                                    Email
                                </h5>
                                <p className="mb-3 font-normal text-white font-Jost  tracking-wider">
                                    Feel free to drop me an email for any inquiries.<br />
                                    sachin.official648@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </>
    )
}

export default Contact