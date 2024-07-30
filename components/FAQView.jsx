"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ContentShell from "@/components/ContentShell";
import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import Textfield from "@/components/Textfield";
import config from "@/config/config";
import styles from "@/styles/components/faq.module.css";

const FAQView = () => {
  const router = useRouter();
  const [openAccordion, setOpenAccordion] = React.useState(0);

  const onAccordionSelect = (index) => {
    if (index === openAccordion) {
      setOpenAccordion(-99);
      return;
    }

    setOpenAccordion(index);
  };
  return (
    <div className={styles.faqContainer}>
      <div className={styles.content}>
        <Typography text="FAQ" color="blue" size="H5" />
        <Typography text="Related Queries" size="H2" />
        <Typography text="Here are some frequenly asked questions about accenly" />
        <Typography
          text="VIEW MORE"
          color="blue"
          size="H5"
          isClickable={true}
          onClick={() => router.push("/faq")}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.faqContents}>
          {config.faq.slice(0, 3).map((el, index) => (
            <Accordion
              title={
                <Typography text={`${index + 1}. ${el.question}`} size="H4" />
              }
              key={index}
              selectedAccordionIndex={openAccordion}
              index={index}
              onAccordionSelect={() => onAccordionSelect(index)}
              bottomBorder={true}
              isLastEl={
                index === config.miscText.contact.accordionInfo.length - 1
              }
            >
              {el?.info?.map((_info, infoIndex) => (
                <Typography text={_info} key={infoIndex} />
              ))}
              <ul className={styles.list}>
                {el?.bullets?.map((_bullets, bulletsIndex) => (
                  <li>
                    <Typography text={_bullets} key={bulletsIndex} />
                  </li>
                ))}
              </ul>
            </Accordion>
          ))}
        </div>
        <div className={styles.center}>
          <Button onClick={() => router.push("/faq")} align="center">
            VIEW MORE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQView;
