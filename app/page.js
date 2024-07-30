"use client";
import Navbar from "@/components/Navbar";
import Banner from "@/views/home/banner/Banner";
import About from "@/views/home/about/About";
import Service from "@/views/home/service/Service";
import ContentShell from "@/components/ContentShell";

export default function Home() {
  return (
    <ContentShell
      extendedView={
        <div className="bg-primaryDark pt-4 max-md:pt-24 px-4 flex max-md:block justify-center items-center">
          <Banner />
        </div>
      }
      // loading={true}
    >
      <div className="bg-white px-20 max-md:px-4 items-center">
        <About />
      </div>
      <div className=" bg-white px-20 max-md:px-4 items-center">
        <Service />
      </div>
    </ContentShell>
  );
}
