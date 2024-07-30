import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Marquee from "react-fast-marquee";

const About = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col my-16  max-md:my-8 w-full max-w-screen-2xl">
      <div className="flex max-md:flex-col mt-12 gap-10">
        <div className="w-1/2 max-md:w-full">
          <Image
            src="/graphics/aboutHomePage.png"
            height={585}
            width={566}
            alt="build dream project graphics"
          />
        </div>

        <div className="w-1/2 max-md:w-full ml-10 max-md:ml-0 text-black">
          <div className="flex flex-col self-end">
            <p className="text-H5 text-brand mt-8">ABOUT</p>
            <p className="text-H2 mt-5">We are a competent Company!</p>
            <p className="text-Text_Big mt-5">
              Our professional experts offer customized development solutions
              for your specific needs.
            </p>
            <p className="text-Subtitle_Text mt-5">
              We value empathy, long-term partnership, and teamwork as our
              guiding principles. We strive to deliver our services and help you
              enjoy the quality results of our team’s hard work.
            </p>
            <div className="flex mt-8">
              <Button onClick={() => router.push("/about")}>KNOW MORE</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center box-border border border-blue_text rounded-md max-md:flex-col mt-12">
        <div className="w-[33.33%] max-md:w-full grow hover:bg-blue_light p-7 box-border">
          <p className="text-H3">98%</p>
          <p className="text-Text_Big">Happy Clients</p>
        </div>
        <div className="w-[33.33%] max-md:w-full grow hover:bg-blue_light p-7 box-border md:border-x border-blue_text max-md:border-y">
          <p className="text-H3">20+</p>
          <p className="text-Text_Big">Team Members</p>
        </div>
        <div className="w-[33.33%] max-md:w-full grow hover:bg-blue_light p-7 box-border">
          <p className="text-H3">12+</p>
          <p className="text-Text_Big">Projects Completed</p>
        </div>
      </div>

      <div className="flex max-md:flex-col items-center justify-between mt-12">
        <div className="w-1/2 max-md:w-full flex flex-col pr-12 max-md:pr-2">
          <p className="text-H5 text-brand mt-8">HOW WE WORK</p>
          <p className="text-H3 mt-5">Refining dreams to perfection</p>
          <p className="text-Subtitle_Text mt-5">
            We listen to you. We are here to provide support and maintain as per
            your specific requirements.
          </p>
        </div>
        <div className="w-1/2 max-md:w-full flex flex-col mt-16 max-md:mt-3">
          <div className="flex items-center mt-12">
            <p className="text-H1">1</p>
            <p className="text-H4 ml-12">We offer A-Z service including</p>
          </div>
          <div className="flex items-center">
            <p className="text-H1">2</p>
            <p className="text-H4 ml-12">
              Assistance in technical services & support, consulting for
              businesses, and help with designing.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-H1">3</p>
            <p className="text-H4 ml-12">
              Our ability to exceed your expectations stems from consistently
              outgrowing our own performance.
            </p>
          </div>
        </div>
      </div>

      <div className="border-y border-brand my-4 box-border py-20">
        <div className="flex items-center justify-between gap-2 max-md:flex-col">
          <iframe
            className="w-2/5 max-md:w-full"
            height="272"
            src="https://www.youtube.com/embed/pMBrkUXupcQ?si=zbuooyg7-xv49E4U"
            title="Our Strength"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="w-1/2 max-md:w-full flex flex-col pr-12 max-md:pr-2">
            <p className="text-H5 text-brand mt-8 uppercase">Watch Video</p>
            <p className="text-H3 mt-5">
              Discover the unique possibility of business with us!
            </p>
            <p className="text-Subtitle_Text mt-5">
              We are your one-stop IT solution partner available to help grow
              your venture goals and achieve success with our premium IT
              solution!
            </p>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-0.5 bg-brand mt-20 rounded-md"></div> */}
    </div>
  );
};

export default About;
