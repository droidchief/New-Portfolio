import { m } from "framer-motion";
import Image from "next/image";
import { aboutVariant } from "../../../variants/aboutVariant";

const AboutItems = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-10 ">
        {/* text */}
        <div className="text lg:flex-[45%]">
          <m.h1
            className="flex items-start mb-6 space-x-2 text-xl font-normal text-white lg:text-2xl font-pop lg:space-x-3"
            initial={{ opacity: 0, y: 20 }}
            variants={aboutVariant}
            whileInView={aboutVariant.heading}
            viewport={{ once: true }}
          >
            <p>Hi{"👋, "} I&apos;m</p>
            <p className="relative font-semibold font-pop text-cyan w-fit">
              Victor Loveday,
            </p>
          </m.h1>
          {/* info */}
          <div className="mb-10 md:mb-12 lg:mb-0">
            <m.p
              className="mb-6 text-lg font-normal text-text lg:text-xl"
              variants={aboutVariant}
              initial={{ opacity: 0, y: 25 }}
              whileInView={aboutVariant.p1}
              viewport={{ once: true }}
            >
              I&apos;m a Mobile Engineer with over 5 years of professional
              experience, specializing in building software solutions for
              Fintech, Transportation, EduTech, Health Care, and Businesses.
              Proficient in Dart, Kotlin, Java, and JavaScript, I possess
              extensive knowledge in software development and project
              management.
            </m.p>
            <m.p
              className="mb-6 text-lg font-normal text-text lg:text-xl"
              variants={aboutVariant}
              initial={{ opacity: 0, y: 25 }}
              whileInView={aboutVariant.p2}
              viewport={{ once: true }}
            >
              My expertise lies in uniting team members to achieve common goals
              efficiently, conceptualizing innovative software solutions, and
              integrating the best technology and design principles with
              creativity.
            </m.p>
            <m.p
              className="mb-6 text-lg font-normal text-text lg:text-xl"
              variants={aboutVariant}
              initial={{ opacity: 0, y: 25 }}
              whileInView={aboutVariant.p2}
              viewport={{ once: true }}
            >
              I have a passion for mentoring new programmers, helping them
              become proficient in their chosen programming languages both
              virtually and in person. I am dedicated to delivering viable and
              functional software solutions that meet client needs and exceed
              expectations.
            </m.p>
          </div>
        </div>
        {/* images/illustrsions */}
        <m.div
          className="lg:flex-[40%] w-full md:max-w-md relative cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          variants={aboutVariant}
          whileInView={aboutVariant.image}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-full h-[28rem] md:h-[37rem] lg:h-[30rem] xl:h-[34rem] relative rounded-md overflow-hidden border-2 border-cyan backdrop-blur-sm bg-cyan/20 z-20 ">
            <div className="relative w-full h-full duration-500 grayscale group-hover:grayscale-0">
              <Image
                src={"/images/me.jpeg"}
                alt="moi"
                priority={true}
                fill
                quality={100}
                placeholder={"blur"}
                blurDataURL={"/images/me.jpeg"}
              />
            </div>
          </div>
          <div className="absolute h-[28rem] md:w-[105%] md:h-[37.5rem] lg:h-[30rem] xl:h-[34.5rem] w-full top-5 left-3 border-2 border-body z-10 bg-buttonBg rounded-lg group-hover:top-4 group-hover:left-3 duration-500"></div>
        </m.div>
      </div>
    </>
  );
};

export default AboutItems;
