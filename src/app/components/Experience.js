"use client";
import React from "react";
import { useState } from "react";

export default function Experience() {
  const [faqs, setFaqs] = useState([
    {
      question: "Teaching Assistant @UET Lahore",
      tenure: "Nov 2021 - Jun 2022",
      organization: "University of Engineering and Technology, Lahore",
      answer:
        "Mentored the 120+ plus students during the programming fundamental & object-oriented programming duration of 4 months each (total 8 months). ",
      visible: false,
      skills: [
        "C++",
        "Java",
        "Python",
        "HTML/CSS/JS",
        "React",
        "Node.js",
        "MongoDB",
        "SQL",
        "Git",
        "GitHub",
        "Figma",
        "VS Code",
      ],
    },
    {
      question: "SDE Intern @TIERS Limited",
      tenure: "Jun 2023 - Aug 2023",
      organization: "TIERS Limited, Lahore",
      answer:
        "During my SDE internship at TIERS Limited from June to August 2023, I was actively involved in developing web applications using React and HTML/CSS/JS. My responsibilities included working with MongoDB and SQL databases, as well as implementing Stripe payment gateway integration. This experience allowed me to enhance my skills in frontend and backend technologies while gaining practical exposure to e-commerce and payment processing solutions.",
      visible: false,
      skills: [
        "React",
        "HTML/CSS/JS",
        "MongoDB",
        "SQL",
        "Stripe",
        "Git",
        "GitHub",
        "VS Code",
      ],
    },
    {
      question: "Full-stack Web/Game developer @Fiverr",
      tenure: "2022 - Present",
      organization: "Fiverr, Remote",
      answer:
        "Two years of diverse and enriching freelancing experience. Harnessing my skills to deliver high-quality projects across various domains. This journey has allowed me to thrive independently while collaborating with clients to meet their unique needs effectively.",
      visible: false,
      skills: [
        "React",
        "HTML/CSS/JS",
        "Node.js",
        "MongoDB",
        "SQL",
        "Unity",
        "Phaser",
        "Git",
        "GitHub",
        "VS Code",
      ],
    },
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
        className="container max-w-screen-lg justify-center mx-auto px-5 md:px-0"
      >
        <div className="row mb-12">
          <div className="col">
            <div className="flex flex-col items-center container">
              <h1 className="md:text-4xl text-2xl text-purple-200 font-bold text-center">
                Professional Experience
              </h1>
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
                    <div className="flex-grow text-white font-bold">
                      {faq.question}
                    </div>
                    <div className="flex text-white font-bold">
                      {faq.tenure}
                      <div className="mx-2 font-bold items-center text-white">
                        {faq.visible ? <span> - </span> : <span> + </span>}
                      </div>
                    </div>
                  </div>
                  <div className={faq.visible ? "block text-purple-600" : "hidden"}>
                    <div className="text-purple-200">{faq.organization}</div>
                    <div className="text-purple-300 text-justify">{faq.answer}</div>
                    <div className="flex flex-wrap mt-4">
                      {faq.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="m-1 px-3 py-1 rounded-full bg-purple-500 text-white text-xs"
                        >
                          {skill}
                        </div>
                      ))}
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
