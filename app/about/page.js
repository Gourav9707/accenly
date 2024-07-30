"use client";
import React from "react";
import Image from "next/image";
import classNames from "classnames";
import ContentShell from "@/components/ContentShell";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import config from "@/config/config";
import ContactModal from "@/components/modals/ContactModal";
import styles from "@/styles/views/about/index.module.css";

const ExtendedBanner = () => {
  return (
    <section className={styles.banner}>
      <Typography text={config.miscWord.about} color="white" size="H1" />
      <Typography text={config.miscText.about.bannerPhrase1} color="white" />
      <Typography text={config.miscText.about.bannerPhrase2} color="white" />
    </section>
  );
};

const FooterBanner = ({ handleClick }) => {
  return (
    <section className={styles.footerBanner}>
      <Image
        src="/images/about/dummy3.png"
        alt="dummy"
        height={140}
        width={140}
        className={styles.gift}
      />
      <div className={styles.fBody}>
        <div>
          <Typography text="Got new project?" color="blue" size="lg" />
          <Typography text="Send us your requirement!" size="H4" />
          <Button onClick={handleClick}>Contact Us</Button>
        </div>
        <div>
          <Typography text="We help founders and companies go Zero to One." />
        </div>
        <div>
          <Image
            src="/images/about/dummy2.png"
            alt="dummy"
            height={180}
            width={340}
          />
        </div>
      </div>
    </section>
  );
};

const page = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ContentShell
      extendedView={<ExtendedBanner />}
      footerTopView={<FooterBanner handleClick={handleClick} />}
    >
      <section className={styles.box} id="mask">
        <img
          src="/images/about/mask.png"
          alt="mask"
          height={656}
          width={"100%"}
          styles={{ margin: 0 }}
        />
      </section>
      <section id="section2" className={styles.box}>
        <div
          className={classNames(styles.center, { [styles.paraMargin]: true })}
        >
          <Typography text="WHO ARE WE" color="blue" />
          <Typography text="An Experience Design Agency" size="H2" />
          {config.miscText.about.info.map((el, index) => (
            <Typography key={index} text={el} />
          ))}
          {/* <Typography text="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team." />
          <Typography text="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you." /> */}
        </div>
      </section>
      <section
        id="section4"
        className={classNames(styles.box, { [styles.flexView]: true })}
      >
        <div className={styles.content1}>
          <div>
            <Image
              src="/images/about/calendar.png"
              alt="mask"
              height={112}
              width={112}
              styles={{ margin: 0 }}
            />
          </div>
          <div>
            <Typography text="4" size="H3" />
            <Typography text="Years of experience" size="lg" />
          </div>
        </div>
        <div className={styles.content2}>
          <div>
            <Image
              src="/images/about/brief.png"
              alt="mask"
              height={112}
              width={112}
              styles={{ margin: 0 }}
            />
          </div>
          <div>
            <Typography text="12+" size="H3" />
            <Typography text="Projects Done" size="lg" />
          </div>
        </div>
      </section>
      <section id="section3" className={styles.box}>
        <div
          className={classNames(styles.center, { [styles.paraMargin]: true })}
        >
          <Typography text="Watch Video" color="blue" />
          <Typography text="Get Started Today!" size="H2" />
          <Typography text="We help businesses grow faster than expected!" />
          <iframe
            width="100%"
            height="320px"
            src="https://www.youtube.com/embed/pMBrkUXupcQ?si=zbuooyg7-xv49E4U"
            title="Our Strength"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
          <Typography
            text="Our motto is to help your business grow and expand in a flexible, and effective way. We work
ethically, diligently, and smartly ensuring 100% guaranteed success. Get started today by
trusting us now to build a promising future in the world of business!"
          />
          {/* <Typography text="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you." /> */}
        </div>
      </section>
      <section
        id="section5"
        className={classNames(styles.box, { [styles.borderY]: true })}
      >
        <div className={classNames(styles.center, { [styles.section5]: true })}>
          <Typography text="FOUNDER WORDS" color="blue" weight="light" />
          <Typography
            text="Empowering futures through innovative IT solutions. 
            We're committed to driving tech excellence and transforming businesses globally"
            size="H3"
          />
          <Typography text="Amit Saha" weight="medium" size="lg" />
          <Typography text="Founder & CEO" weight="light" />
        </div>
      </section>
      <section id="section6" className={styles.box}>
        <div className={styles.projects}>
          <Image
            src="/images/about/seamedu.png"
            height={42}
            width={130}
            alt="seamedu"
          />
          <Image
            src="/images/about/authBridge.png"
            height={42}
            width={130}
            alt="authBridge"
          />
          <Image
            src="/images/about/innovBlack.png"
            height={42}
            width={130}
            alt="innovBlack"
          />
          <Image
            src="/images/about/natsary.png"
            height={42}
            width={130}
            alt="natsary"
          />
        </div>
      </section>
      <ContactModal handleClick={handleClick} open={open} />
    </ContentShell>
  );
};

export default page;
