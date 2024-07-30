import React from "react";
import classNames from "classnames";
import styles from "@/styles/components/textfield.module.css";

const Textfield = ({
  outlined = false,
  secondaryView = false,
  label = "",
  startIcon = null,
  endIcon = null,
  action = null,
  hide = false,
  search = false,
  disableYMargin = false,
  label2 = "",
  ...props
}) => {
  return (
    <div
      className={classNames(styles.inputBox, {
        [styles.hide]: hide,
        [styles["margin-y-disable"]]: disableYMargin
      })}
    >
      <div className={classNames(styles.label, { [styles.hide]: !label })}>
        <span>{label}</span>
        <span className={classNames({[styles.hide]: !label2})}>{label2}</span>
      </div>
      <div
        className={classNames(styles.main, {
          [styles.secondaryView]: secondaryView,
        })}
      >
        <div className={classNames(styles.inputContainer, {
          [styles.disabled]: props?.disabled || false,
          [styles.leftRound]: action && !secondaryView,
          [styles.rightRound]: action && secondaryView,
          [styles.fullRound]: !action,
        })}>
          <div className={classNames(styles.icon, { [styles.hide]: !startIcon })}>
            {" "}
            {startIcon}
          </div>
          <input
            {...props}
            className={classNames(styles.inputField, {[styles.search] : search})}
          />
          <div className={classNames(styles.icon, { [styles.hide]: !endIcon })}>
            {" "}
            {endIcon}
          </div>
        </div>
        <div
          className={classNames(styles.action, { [styles.hide]: !action })}
        >
          {action}
        </div>
      </div>
    </div>
  );
};

export default Textfield;
