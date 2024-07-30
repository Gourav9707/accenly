import React from "react";
import Image from "next/image";
import classNames from "classnames";
import styles from "@/styles/components/selectField.module.css";

const SelectField = ({
  value = "",
  outlined = false,
  secondaryView = false,
  label = "",
  endIcon = null,
  options = [],
  action = null,
  hide,
  disableYMargin = false,
  ...props
}) => {
  return (
    <div
      className={classNames(styles.inputBox, {
        [styles.hide]: hide,
        [styles["margin-y-disable"]]: disableYMargin
      })}
    >
      <section className={classNames(styles.label, { [styles.hide]: !label })}>
        {label}
      </section>
      <div
        className={classNames(styles.main, {
          [styles.secondaryView]: secondaryView,
        })}
      >
        <section className={classNames(styles.inputContainer, {
          [styles.leftRound]: action && !secondaryView,
          [styles.rightRound]: action && secondaryView,
          [styles.fullRound]: !action,
        })}>
          <select
            {...props}
            className={classNames(styles.inputField, {
            })}
            value={value}
          >
            {options?.map((el, index) => (
              <option key={el?.id} value={el?.id}>
                {el?.label}
              </option>
            ))}
          </select>

          <div className={styles.iconContainer}>
            <div className={classNames(styles.icon, { [styles.hide]: !endIcon })}>
              {" "}
              {endIcon}
            </div>
            <Image src="/icons/arrowDown.png" height={12} width={14} alt="arrow" className={styles.arrow}/>
          </div>
        </section>
        <section
          className={classNames(styles.action, { [styles.hide]: !action })}
        >
          {action}
        </section>
      </div>
    </div>
  );
};

export default SelectField;
