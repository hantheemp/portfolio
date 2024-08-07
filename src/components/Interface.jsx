import experiences from "../lib/experiences";
import skills from "../lib/skills";
import { motion } from "framer-motion";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ProjectCard } from "./ProjectCard";
import {
  PiGithubLogoBold,
  PiLinkedinLogoBold,
  PiInstagramLogoBold,
  PiReadCvLogoBold,
  PiArrowFatLinesUpFill,
} from "react-icons/pi";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className="h-screen w-screen mx-auto"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col">
      <Section>
        <About></About>
      </Section>
      <Section>
        <Skills></Skills>
      </Section>
      <Section>
        <Experience></Experience>
      </Section>
      <Section>
        <ContactForm></ContactForm>
      </Section>
    </div>
  );
};

const About = () => {
  const onButtonClick = () => {
    const pdfUrl = "/CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section>
      <div className="h-screen flex justify-end items-center text-center select-none mx-24">
        <div className="shadow-xl w-6/12">
          <h1 className="text-6xl font-extrabold">Hi, I am</h1>
          <br></br>
          <motion.h1
            className="text-4xl italic font-extrabold bg-white"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          >
            Murat Kağan
          </motion.h1>
          <br></br>
          <motion.h2
            className="text-2xl font-extrabold"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.5,
            }}
          >
            From {String.fromCodePoint(0x1f1f9, 0x1f1f7)}
          </motion.h2>
          <br></br>
          <motion.div
            className="text-2xl font-extrabold"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1.3,
            }}
          >
            <div>
              <a
                href="https://github.com/hantheemp"
                className="link btn btn-ghost"
              >
                <PiGithubLogoBold size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/muratkagan/"
                className="link btn btn-ghost"
              >
                <PiLinkedinLogoBold size={30} />
              </a>
              <a
                href="https://www.instagram.com/muratkagan27/"
                className="link btn btn-ghost"
              >
                <PiInstagramLogoBold size={30} />
              </a>
              <button onClick={onButtonClick} className="link btn btn-ghost">
                <PiReadCvLogoBold size={30} />
              </button>
            </div>
            <br></br>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

const Skills = () => {
  return (
    <Section>
      <motion.div
        whileInView={"visible"}
        className="h-screen flex justify-end items-center text-center select-none mx-24"
      >
        <div className="shadow-xl p-8 w-6/12 grid items-center justify-center text-start">
          <h2 className="text-4xl font-extrabold text-center">Skills</h2>
          <div className="space-y-1">
            {skills.map((skill, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-lg font-bold italic text-center"
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.1,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-6 w-full bg-gray-500 rounded-full">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: index * 0.1,
                        },
                      },
                    }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const Experience = () => {
  return (
    <Section>
      <motion.div
        whileInView={"visible"}
        className="h-screen flex justify-end items-center text-center select-none px-4 sm:px-24"
      >
        <div className="shadow-2xl p-6 w-6/12">
          <h2 className="text-4xl font-extrabold mb-8">Experience</h2>
          <div>
            {experiences.map((experience, index) => (
              <motion.div
                className="mb-8"
                key={index}
                initial={{ opacity: 0, y: 25 }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 0.5 + index * 0.1,
                    },
                  },
                }}
              >
                <div className="shadow-lg collapse collapse-arrow text-start">
                  <input
                    type="checkbox"
                    id={`collapse-${index}`}
                    className="peer hidden"
                  />

                  <label
                    htmlFor={`collapse-${index}`}
                    className="collapse-title flex flex-col sm:flex-row items-start pl-4 cursor-pointer"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">
                          {experience.role}
                        </h3>
                      </div>

                      <p className="text-sm text-gray-600 italic">
                        {experience.company}
                      </p>
                      <p className="text-sm text-gray-600 font-bold">
                        {experience.date}
                      </p>
                      <p className="text-sm text-gray-600">
                        {experience.location}
                      </p>
                    </div>
                  </label>
                  <div className="collapse-content flex-col sm:flex-row items-start peer-checked:block">
                    <ProjectCard
                      date={experience.date}
                      location={experience.location}
                      role={experience.role}
                      description={experience.description}
                      usedTechnologies={experience.usedTechnologies}
                      image={experience.image}
                      reversed={experience.reversed}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

function ContactForm() {
  const [state, handleSubmit] = useForm("xzbnykrp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <Section>
      <div className="h-screen flex justify-end items-center text-center select-none mx-24">
        <div className="shadow-xl w-6/12 p-8">
          <motion.h1
            className="text-4xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Contact Me!
          </motion.h1>

          <motion.div
            className="text-2xl font-extrabold"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="email" className="block text-center mb-4">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="border rounded-md p-2 mt-1 bg-white shadow-2xl"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="block text-center mb-4">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="border rounded-md p-2 mt-1 bg-white shadow-2xl"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="text-black btn btn-ghost"
              >
                <PiArrowFatLinesUpFill size={30} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
