import React from "react";
import classNames from "classnames";
import styles from "@/styles/components/typography.module.css";

const Typography = ({
  text = "",
  size = "base", //xs-12, sm-14, base-16, lg-18, xl-24, etc
  color = "black", //white, black
  weight = "light", //light, normal, medium, bold
  isClickable = false,
  isUpperCase = false,
  ...props
}) => {
  return (
    <p
      {...props}
      className={classNames(styles.root, {
        //size
        [styles.sm]: size === "sm",
        [styles.xs]: size === "xs",
        [styles.lg]: size === "lg",
        [styles.xl]: size === "xl",
        [styles.H1]: size === "H1",
        [styles.H2]: size === "H2",
        [styles.H3]: size === "H3",
        [styles.H4]: size === "H4",
        [styles.H5]: size === "H5",
        //color
        [styles.white]: color === "white",
        [styles.blue]: color === "blue",
        [styles.grey]: color === "grey",
        //weight
        [styles.light]: weight === "light" && ["xs", "sm", "base", "lg", "xl"].includes(size),
        [styles.medium]: weight === "medium" && ["xs", "sm", "base", "lg", "xl"].includes(size),
        [styles.bold]: weight === "bold" && ["xs", "sm", "base", "lg", "xl"].includes(size),
        //misc
        [styles.pointer]: isClickable,
        [styles.upperCase]: isUpperCase
      })}
    >
      {text}
    </p>
  );
};

export default Typography;
