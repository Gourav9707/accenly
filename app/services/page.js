"use client";
import React, { useState } from "react";
import queryString from "query-string";
import Image from "next/image";
import classNames from "classnames";
import ContentShell from "@/components/ContentShell";
import Typography from "@/components/Typography";
import Accordion from "@/components/Accordion";
import config from "@/config/config";
import styles from "@/styles/views/service/index.module.css";
import Button from "@/components/Button";
import ContactModal from "@/components/modals/ContactModal";

const ExtendedBanner = () => {
  return (
    <section className={styles.banner}>
      <Typography text={config.miscWord.service} color="white" size="H1" />
      <Typography text={config.miscText.service.bannerPhrase} color="white" />
    </section>
  );
};

const page = () => {
  const [open, setOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = React.useState(0);
  const [showInfo, setShowInfo] = React.useState(false);
  const pageRef = React.useRef(null)

  const onAccordionSelect = (index) => {
    if (index === openAccordion) {
      setOpenAccordion(-99);
      return;
    }

    setOpenAccordion(index);
  };

  const handleClick = ({ event = "close" }) => {
    switch (event) {
      case "submit":
        break;
      default:
        setOpen(!open);
    }
  };

  const handleFooterAction = ({index, page}) => {
    pageRef.current.scrollIntoView({ behavior: 'smooth' });
    setTimeout(()=>{
      setOpenAccordion(index);
      if(index > 2) setShowInfo(true)
    }, 1000)
  }

  React.useEffect(() => {
    let {view} = queryString.parse(window?.location?.search)
    if(view) {
      handleFooterAction({index: Number(view), page: "services"})
    }
  }, [])

  return (
    <ContentShell extendedView={<ExtendedBanner />} footerActions={handleFooterAction}>
      <section id="info1" className={styles.box}>
        <Typography text="Services" color="blue" isUpperCase={true} />

        <div className={styles.flexBox}>
          <div>
            <Typography
              text="Don’t let the complexity of digital marketing burn you out. Instead, let us take care of it for
              you!"
              size="H3"
            />
          </div>
          <div>
            <Typography text={config.miscText.service.info1} />
            <Typography text={config.miscText.service.info2} />
            <Typography text={config.miscText.service.info3} />
            <Typography text={config.miscText.service.info4} />
          </div>
        </div>
      </section>

      <section id="info2" className={styles.box}>
        <div className={styles.accordioBox} ref={pageRef}>
        {config.miscText.service.accordionInfo.map((_info, index) => (
          <Accordion
            title={<Typography text={_info.title} size="H3" />}
            key={index}
            selectedAccordionIndex={openAccordion}
            index={index}
            onAccordionSelect={() => onAccordionSelect(index)}
            bottomBorder={true}
            hide={index > 2 && !showInfo}
            // isLastEl={index === config.miscText.contact.accordionInfo.length - 1}
          >
            <section className={styles.accordionContentBody}>
              <div>
                <Image src={_info.banner} height={520} width={520} alt="banner" className={styles.accordionBanner}/>
              </div>
              <div className={styles.accordionInfo}>
                <Typography text={_info.details.heading} size="H3"/>
                <Typography text={_info.details.info}/>
                {
                  _info.details.bullets.map((_bullet, _index) => (
                    <div className={styles.bulletBox}>
                      <Image src={"/icons/tick.png"} alt="tick" height={30} width={30}/>
                      <Typography text={_bullet}/>
                    </div>
                  ))
                }
              </div>
            </section>
          </Accordion>
        ))}
        </div>
        <div className={styles.btnBox}>
          <Button onClick={()=>setShowInfo(!showInfo)}>{!showInfo ? "VIEW MORE" : "VIEW LESS"}</Button>
        </div>
      </section>

      <section id="info3" className={styles.box}>
        <Typography text="HOW WE WORK" color="blue" isUpperCase={true} />

        <div className={styles.flexBox}>
          <div>
            <Typography text="Making Your Projects Look Awesome" size="H3" />

            <Typography text="Technical skills, design, business understanding, ability to put themselves in the merchant's shoes." />
          </div>
          <div>
            {[
              "Full service range including",
              "Technical skills, design, business",
              "Themselves in the merchant's",
            ].map((info, index) => (
              <div className={styles.bullet}>
                <Typography text={index + 1} size="H1" />
                <Typography text={info} size="H4" />
              </div>
            ))}
          </div>
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
