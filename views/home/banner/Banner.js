import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col max-w-[1280px]">
      <div className="flex max-md:flex-col-reverse gap-8 justify-between w-full">
        <div className="text-H1 text-white w-1/2 max-md:w-full mt-16">
          Your vision, our expertise, A perfect partnership!
          <p className="text-H5 text-grey_200 mt-8">
            Because we embrace the power of technology with innovation and
            ideas!
          </p>
          <div className="flex mt-12">
            <Button>HOW IT WORKS</Button>
            <Button
              customStyle={{
                backgroundColor: "#FFFFFF00",
                color: "white",
                textDecorationLine: "underline",
                marginLeft: 10,
              }}
              onClick={() => router.push("/contact")}
            >
              CONNECT WITH US
            </Button>
          </div>
        </div>
        <div className=" w-1/2 max-md:w-full items-end">
          <Image
            src="/graphics/topHome.png"
            height={600}
            width={570}
            alt="build dream project graphics"
          />
        </div>
      </div>

      <div className="w-full h-0.5 bg-grey_200 mt-5 rounded-md"></div>

      <Marquee className="mt-5">
        <Image
          src="/images/natsary.png"
          height={87}
          width={226}
          style={{ marginLeft: 110 }}
          alt="natsary"
        />
        <Image
          src="/images/seamedu.png"
          height={87}
          width={226}
          style={{ marginLeft: 110 }}
          alt="seamedu"
        />
        <Image
          src="/images/innov.png"
          height={87}
          width={226}
          style={{ marginLeft: 110 }}
          alt="innov"
        />
        <Image
          src="/images/authBridge.png"
          height={87}
          width={226}
          style={{ marginLeft: 110 }}
          alt="authBridge"
        />
      </Marquee>
    </div>
  );
};

export default Banner;
