import experiences from "../lib/experiences";
import skills from "../lib/skills";
import { motion } from "framer-motion";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ProjectCardMobile } from "./ProjectCardMobile";
import {
  PiGithubLogoBold,
  PiLinkedinLogoBold,
  PiInstagramLogoBold,
  PiReadCvLogoBold,
  PiArrowFatLinesUpFill,
  PiCheckCircleBold,
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

export const InterfaceMobile = () => {
  return (
    <div className="overflow-auto">
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
      <div className="h-screen flex flex-col justify-end items-center text-center select-none">
        <div className="bg-[#ececec] bg-opacity-85 shadow-xl w-full">
          <br></br>
          <h1 className="text-3xl font-extrabold">Hi, I am</h1>
          <br />
          <motion.h1
            className="text-xl italic font-extrabold bg-black text-white"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Murat Kağan
          </motion.h1>
          <br />
          <motion.h2
            className="text-xl font-extrabold"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            From {String.fromCodePoint(0x1f1f9, 0x1f1f7)}
          </motion.h2>
          <br />
          <motion.div
            className="text-2xl font-extrabold"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <div>
              <a
                href="https://github.com/hantheemp"
                className="link btn btn-ghost"
              >
                <PiGithubLogoBold size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/muratkagan/"
                className="link btn btn-ghost"
              >
                <PiLinkedinLogoBold size={25} />
              </a>
              <a
                href="https://www.instagram.com/muratkagan27/"
                className="link btn btn-ghost"
              >
                <PiInstagramLogoBold size={25} />
              </a>
              <button onClick={onButtonClick} className="link btn btn-ghost">
                <PiReadCvLogoBold size={25} />
              </button>
            </div>
            <br />
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
        className="h-screen flex flex-col justify-end items-center text-center select-none"
      >
        <div className="shadow-xl grid grid-cols-2 gap-x-2 w-full bg-[#ececec] bg-opacity-85 p-8">
          <h2 className="text-3xl font-extrabold text-center col-span-full text-black">
            Skill
          </h2>
          {skills.map((skill, index) => (
            <div className="w-full" key={index}>
              <motion.h3
                className="text-sm font-extrabold italic"
                initial={{ opacity: 0, y: 25 }}
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
              <div className="h-8 w-full bg-gray-400 rounded-full">
                <motion.div
                  className="h-full bg-indigo-400 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{ scaleX: 0, originX: 0 }}
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
      </motion.div>
    </Section>
  );
};

const Experience = () => {
  return (
    <Section>
      <motion.div
        whileInView={"visible"}
        className="h-screen flex flex-col justify-end items-center text-center select-none"
      >
        <div className="shadow-xl grid gap-4 w-full bg-[#ececec] bg-opacity-85 p-8">
          <h2 className="text-3xl font-extrabold text-center col-span-full text-black">
            Experience
          </h2>
          <div className="grid gap-2 grid-cols-1">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                className="collapse collapse-arrow text-start bg-gray-300"
              >
                <input
                  type="checkbox"
                  id={`collapse-${index}`}
                  className="peer hidden"
                />
                <label
                  htmlFor={`collapse-${index}`}
                  className="collapse-title flex flex-col cursor-pointer p-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-md font-semibold">
                        {experience.role}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      {experience.company}
                    </p>
                  </div>
                </label>
                <div className="collapse-content flex-row items-start peer-checked:block">
                  <ProjectCardMobile
                    date={experience.date}
                    location={experience.location}
                    role={experience.role}
                    description={experience.description}
                    usedTechnologies={experience.usedTechnologies}
                    image={experience.image}
                    reversed={experience.reversed}
                  />
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
    return (
      <motion.div
        whileInView={"visible"}
        className="h-screen flex flex-col justify-end items-center text-center select-none"
      >
        <div className="shadow-xl grid gap-4 w-full bg-[#ececec] bg-opacity-85 p-8">
          <motion.h1
            className="text-3xl font-extrabold text-center col-span-full text-black"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          ></motion.h1>
          <motion.div
            role="alert"
            className="alert alert-success bg-gray-300"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1.5, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <PiCheckCircleBold size={25} />
            <span>Thanks for your valuable message!</span>
            <span>
              Expect a response from me in{" "}
              <span className="italic font-bold">3-5 business days!</span>
            </span>
          </motion.div>
        </div>
      </motion.div>
    );
  }
  return (
    <Section>
      <motion.div
        whileInView={"visible"}
        className="h-screen flex flex-col justify-end items-center text-center select-none"
      >
        <div className="shadow-xl grid gap-4 w-full bg-[#ececec] bg-opacity-85 p-8">
          <motion.h1
            className="text-3xl font-extrabold text-center col-span-full text-black"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Contact Me!
          </motion.h1>

          <motion.div
            className="text-md font-extrabold"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="email" className="block text-center">
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
      </motion.div>
    </Section>
  );
}
