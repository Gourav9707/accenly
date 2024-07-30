import Button from "@/components/Button";
import FAQView from "@/components/FAQView";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Service = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col mt-5 mb-16 w-full max-w-screen-2xl">
      <div className="flex max-md:flex-col">
        <div className="w-1/2 max-md:w-full">
          <Image
            src="/graphics/serviceHomePage.png"
            height={585}
            width={566}
            alt="build dream project graphics"
          />
        </div>

        <div className="w-1/2 max-md:w-full ml-10 max-md:ml-0 text-black">
          <div className="flex flex-col self-end">
            <p className="text-H5 text-brand mt-8">SERVICE</p>
            <p className="text-H3 mt-5">
              We specialize in making complex digital products!
            </p>
            <p className="text-Text_Big mt-5">
              Our company offers a comprehensive range of technical expertise,
              design, and business services. In addition, no one can surpass the
              skills in understanding what our customers desire, which are
              highly developed by our devoted and tireless professionals. Just
              give us a call; we are here for you and your service!
            </p>
            {/* <p className="text-Subtitle_Text mt-5">
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team.
            </p> */}
            <div className="flex mt-8">
              <Button
                onClick={() => router.push("/services")}
                customStyle={{ backgroundColor: "white", color: "black" }}
              >
                EXPLORE
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 max-md:mt-4">
        <p className="text-H5 text-brand">SERVICE</p>
        <p className="text-H3 mt-2">
          How Our Organization <br />
          Can Help
        </p>

        <div className="w-full flex items-center box-border border border-blue_text rounded-md max-md:flex-col mt-12">
          <div className="w-[33.33%] max-md:w-full grow hover:bg-blue_light p-4 box-border">
            <Image
              src="/icons/designIcon.svg"
              height={80}
              width={80}
              alt="Product design icon"
              // className="mt-10"
            />
            <p className="text-H4 mt-10">Product Design</p>
            <p className="text-Subtitle_Text mt-5">
            Creating user-centric solutions for impactful digital experiences.
            </p>
            <p className="text-Subtitle_Text mt-5 mb-10">Learn More</p>
          </div>

          <div className="w-[33.33%] max-md:w-full grow hover:bg-blue_light p-4 box-border md:border-x border-blue_text max-md:border-y">
            <Image
              src="/icons/devIcon.svg"
              height={80}
              width={80}
              alt="Product design icon"
              // className="mt-10"
            />
            <p className="text-H4 mt-10">Web Development</p>
            <p className="text-Subtitle_Text mt-5">
            Full-cycle product development, tech-driven, client-centric for success.
            </p>
            <p className="text-Subtitle_Text mt-5 mb-10">Learn More</p>
          </div>

          <div className="w-[33.33%] max-md:w-full grow hover:bg-blue_light p-4 box-border">
            <Image
              src="/icons/seoIcon.svg"
              height={80}
              width={80}
              alt="Product design icon"
              // className="mt-10"
            />
            <p className="text-H4 mt-10">SEO & Creative Writing</p>
            <p className="text-Subtitle_Text mt-5">
            Boost web presence, clicks, conversions with our SEO & creative writing.
            </p>
            <p className="text-Subtitle_Text mt-5 mb-10">Learn More</p>
          </div>
        </div>
      </div>

      <div className="my-12">
        <FAQView />
      </div>
    </div>
  );
};

export default Service;
