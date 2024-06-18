import React from 'react'

const Education = () => {
    return (
        <section>
            <div className="mx-auto bg-tertiary  max-w-screen-1xl px-4 py-8 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-white font-Rammetto_One  ml-20   text-start sm:text-4xl">
                    Education
                </h2>
                <div className="grid grid-cols-1 lg:h-full lg:grid-cols-2 -mt-10">

                    <div className="relative z-10 lg:py-10">
                        <div className="relative h-64 sm:h-80 mt-20 lg:h-full">
                            <img
                                alt=""
                                src="edu.png"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className='relative -mt-10  grid grid-rows-3 grid-flow-col gap-4 '>


                        <div className="p-8 sm:p-16 lg:p-24 -mb-40   ">
                            <article
                                style={{ background: 'linear-gradient(45deg, #eb1f00, #330000)' }}
                                className="flex  years  transition hover:shadow-xl">
                                <div className="rotate-180 p-2 b bg-black  [writing-mode:_vertical-lr]">
                                    <time
                                        datetime="2022-10-10"
                                        className="flex  items-center justify-between gap-4 text-xs font-bold uppercase text-white"
                                    >
                                        <span>2020</span>
                                        <span className="w-px flex-1 bg-primary/50"></span>
                                        <span>2023</span>
                                    </time>
                                </div>

                                <div className="hidden sm:block place-content-center  sm:basis-40">
                                    <img
                                        alt=""
                                        src="graduation.png"
                                        className="aspect-square ml-5 h-32 w-32 object-cover"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="  p-4  sm:p-6">
                                        <div >
                                            <h3 className="font-medium font-Josefin_Sans  uppercase text-white">
                                                Bachelor of Computer Applications (BCA)
                                            </h3>
                                        </div>

                                        <p className="mt-2 c tracking-wider font-normal line-clamp-3  text-sm/relaxed text-white">
                                            Sri Sharda Group Of Professional Studies
                                        </p>
                                    </div>

                                    <div className="sm:flex sm:items-end sm:justify-end">
                                        <button

                                            className="block font-Jost tracking-wide bg-[#00FF7F] px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-[#00FF7F]"
                                        >
                                            Completed
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="p-8 sm:p-16 lg:p-24 -mb-40 ">
                            <article
                                style={{ background: 'linear-gradient(45deg, #eb1f00, #330000)' }}
                                className="flex years  transition hover:shadow-xl">
                                <div className="rotate-180 b p-2 bg-black  [writing-mode:_vertical-lr]">
                                    <time
                                        datetime="2022-10-10"
                                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-white"
                                    >
                                        <span>2019</span>
                                        <span className="w-px flex-1 bg-primary/50"></span>
                                        <span>2020</span>
                                    </time>
                                </div>

                                <div className="hidden sm:block place-content-center  sm:basis-40">
                                    <img
                                        alt=""
                                        src="graduation3.png"
                                        className="aspect-square ml-5 h-32 w-32 object-cover"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="  p-4  sm:p-6">
                                        <div >
                                            <h3 className="font-medium font-Josefin_Sans uppercase text-white">
                                            Higher Secondary Certificate<br/>
                                            12th ISC BOARD
                                            </h3>
                                        </div>

                                        <p className="mt-2 c tracking-wider font-normal line-clamp-3 text-sm/relaxed text-white">
                                        St. Joseph Montessori School
                                        </p>
                                    </div>

                                    <div className="sm:flex sm:items-end sm:justify-end">
                                        <button

                                            className="block font-Jost tracking-wide bg-[#00FF7F] px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-[#00FF7F]"
                                        >
                                            Completed
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="p-8 sm:p-16 lg:p-24 -mb-40 ">
                            <article
                                style={{ background: 'linear-gradient(45deg, #eb1f00, #330000)' }}
                                className="flex  years transition hover:shadow-xl">
                                <div className="rotate-180 b p-2 bg-black  [writing-mode:_vertical-lr]">
                                    <time
                                        datetime="2022-10-10"
                                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-white"
                                    >
                                        <span>2017</span>
                                        <span className="w-px flex-1 bg-primary/50"></span>
                                        <span>2018</span>
                                    </time>
                                </div>

                                <div className="hidden sm:block place-content-center sm:basis-40">
                                    <img
                                        alt=""
                                        src="graduate-hat.png"
                                        className="aspect-square ml-5 h-36 w-36 object-cover"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="  p-4  sm:p-6">
                                        <div >
                                            <h3 className="font-medium font-Josefin_Sans uppercase text-white">
                                            Secondary School Certificate<br/>
                                            10th ICSE BOARD
                                            </h3>
                                        </div>

                                        <p className="mt-2 c tracking-wider font-normal line-clamp-3 text-sm/relaxed text-white">
                                        St. Joseph Montessori School
                                        </p>
                                    </div>

                                    <div className="sm:flex sm:items-end sm:justify-end">
                                        <button

                                            className="block font-Jost tracking-wide bg-[#00FF7F] px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-[#00FF7F]"
                                        >
                                            Completed
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education