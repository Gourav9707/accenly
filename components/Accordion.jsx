import React from "react";
import Image from "next/image";
import classNames from "classnames";
import styles from "@/styles/components/accordion.module.css";

const Accordion = ({
  index,
  children,
  title,
  onAccordionSelect=()=>{},
  selectedAccordionIndex,
  bottomBorder=false,
  isLastEl=false,
  hide=false
}) => {
  return (
    <div
      className={classNames(styles.accordion, {
        [styles.bottomBorder]: bottomBorder && !isLastEl,
        [styles.hide]: hide
      })}
    >
      <div className={classNames(styles.accordionLabel, {
        [styles.accordionLabelChecked]: selectedAccordionIndex === index,
      })}
      onClick={() => onAccordionSelect(index)}
      >
        <p>{title}</p>
        <Image
          src="/icons/arrowDownFilled.svg"
          width="32"
          height="32"
          alt="accordionIcon"
          className={classNames(styles.icon, {
            [styles.accordionIcon]: selectedAccordionIndex === index,
          })}
        />
      </div>
      <div
        className={classNames(styles.accordionContent, {
          [styles.accordionChecked]: selectedAccordionIndex === index,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
