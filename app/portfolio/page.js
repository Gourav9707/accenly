"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import classNames from "classnames";
import ContentShell from "@/components/ContentShell";
import SelectField from "@/components/SelectField";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import ContactModal from "@/components/modals/ContactModal";
import config from "@/config/config";
import styles from "@/styles/views/portfolio/index.module.css";

const ExtendedBanner = () => {
  return (
    <section className={styles.banner}>
      <Typography text="Portfolio" color="white" size="H1" />
      <Typography
        text={config.miscText.portfolio.bannerPhrase1}
        color="white"
      />
      <Typography
        text={config.miscText.portfolio.bannerPhrase2}
        color="white"
      />
    </section>
  );
};

const page = () => {
  const router = useRouter();
  const [active, setActive] = React.useState("all");
  const [open, setOpen] = React.useState(false);

  const handleClick = ({ event = "close" }) => {
    switch (event) {
      case "submit":
        break;
      default:
        setOpen(!open);
    }
  };

  return (
    <ContentShell extendedView={<ExtendedBanner />}>
      <section className={styles.box} id="nav">
        <nav className={classNames(styles.nav)}>
          {config.miscText.portfolio.nav.map((info, index) => (
            <div
              key={info.id}
              className={styles.menu}
              onClick={() => setActive(info.id)}
            >
              <Typography
                text={info.label}
                weight={active === info.id ? "bold" : "normal"}
              />
              <div className={styles.bubble}>
                <Typography text={index + 1} size="xs" />
              </div>
            </div>
          ))}
        </nav>
        <div className={styles.select}>
          <SelectField
            options={config.miscText.portfolio.nav}
            value={active}
            onChange={(e) => setActive(e.target.value)}
          />
        </div>
      </section>
      <section className={styles.box} id="projectBanner">
        <div
          className={styles.projectBanner}
          onClick={() => router.push(config.miscText.portfolio.projects[0].url)}
        ></div>
      </section>
      <section id="projects" className={styles.box}>
        <div className={styles.projectContainer}>
          {config.miscText.portfolio.projects.map((info, index) => (
            <section
            className={classNames({
              [styles.hide]: index === 0,
            })}
            key={index}
            onClick={() => router.push(info?.url)}
          >
              {info?.imgUrl ? <Image
                src={info?.imgUrl}
                height={416}
                width={570}
                alt="banner"
                className={styles.dummy}
              /> : <div className={styles.dummy}/>}
              <div className={styles.cardHighlight}>
                {info?.workInfo?.map((_el, _index) => (
                  <div className={styles.whiteBg} key={_index}>
                    <Typography text={_el} />
                  </div>
                ))}
                <Typography text={info?.title} size="H3" color="white" />
              </div>
            </section>
          ))}
        </div>
      </section>
      <section
        id="lowerBanner"
        className={classNames(styles.box, { [styles.lowerBanner]: true })}
      >
        <div>
          <Typography
            text="Don’t just dream it, build your dream project with us!"
            color="white"
            size="H2"
          />
          <Typography
            text="We’re your trusted partners in bringing your vision to life. Contact us today and let’s get started."
            color="white"
          />
          <Button bg="white" onClick={() => setOpen(!open)}>
            Contact us
          </Button>
        </div>
        <Image
          src="/images/portfolio/pic.png"
          alt="portfolio"
          height={420}
          width={420}
        />
      </section>
      <ContactModal handleClick={handleClick} open={open} />
    </ContentShell>
  );
};

export default page;
