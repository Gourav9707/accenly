"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ContentShell from "@/components/ContentShell";
import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import Textfield from "@/components/Textfield";
import config from "@/config/config";
import styles from "@/styles/views/faq/index.module.css";

const page = () => {
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
    <ContentShell>
      {config.faq.map((el, index) => (
        <Accordion
          title={<Typography text={`${index + 1}. ${el.question}`} size="H4" />}
          key={index}
          selectedAccordionIndex={openAccordion}
          index={index}
          onAccordionSelect={() => onAccordionSelect(index)}
          bottomBorder={true}
        //   isLastEl={index === config.faq.length - 1}
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
      <div className={styles.center}>
        <Button onClick={()=>router.back()} align="center">GO BACK</Button>
      </div>
    </ContentShell>
  );
};

export default page;
