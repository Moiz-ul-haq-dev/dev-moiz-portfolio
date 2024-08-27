"use client";
import { useState } from "react";

export default function Education() {
    const [faqs, setFaqs] = useState([
        {
            question: "BS (CS)",
            tenure: "2020 - 2024",
            organization: "University of Engineering and Technology, Lahore",
            answer: (
                "I have completed my BSCS at University of Engineering and Technology Lahore (UET). I have secured 3.0 CGPA in BSCS. I have completed my BSCS in 2024."
            ),
            visible: false,
        },
        {
            question: "FSC Pre-Engineering",
            tenure: "2018 - 2020",
            organization: "Oxbridge College, Rahim Yar Khan",
            answer: (
                "I have completed my FSC Pre-Engineering from Oxbridge College Rahim Yar Khan. I have secured 92% marks in FSC Pre-Engineering. I was City Topper in FSC Pre-Engineering."
            ),
            visible: false,
        },
        {
            question: "Matriculation",
            tenure: "2016 - 2018",
            organization: "Al-Muslim Group of Schools and Girls College, Rahim Yar Khan",
            answer: (
                "I have completed my Matriculation from the Al-Muslim Group of Schools and Girls College, Rahim Yar Khan. I have secured 93% marks in Matriculation."
            ),
            visible: false,
        }
    ]);

    const toggleAnswer = (index) => {
        setFaqs((prevFaqs) =>
            prevFaqs.map((faq, i) => ({
                ...faq,
                visible: i === index ? !faq.visible : false,
            }))
        );
    };

    return (
        <>
        <div
            id="testimonial"
            className="container max-w-screen-lg justify-center mx-auto md:px-0 px-5"
        >
            <div className="row mb-12">
                <div className="col">
                    <div className="flex flex-col items-center container">
                        <h1 className="md:text-4xl text-2xl text-purple-200 font-bold text-center">My Education</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col mx-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-lg mb-6 md:p-3 p-2 border border-gray-300 bg-gradient-to-r from-purple-950 to-purple-800"
                        >
                            <div className="text-gray-700 font-normal md:text-base text-sm">
                                <div
                                    className="flex pb-2 cursor-pointer"
                                    onClick={() => toggleAnswer(index)}
                                >
                                    <div className="flex-grow text-white font-bold">{faq.question}</div>
                                    <div className="flex text-white font-bold">{faq.tenure}
                                        <div className="mx-2 font-bold items-center text-white">
                                            {faq.visible ? (
                                                <span> - </span>
                                            ) : (
                                                <span> + </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={faq.visible ? "block text-purple-600" : "hidden"}>
                                    <div className="text-purple-200">{faq.organization}</div>
                                    <div className="text-purple-300 text-justify">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className='w-full h-px bg-purple-200 my-10'></div>
        </>
    );
}
