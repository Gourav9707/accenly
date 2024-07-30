import React from "react";
import clsNames from "classnames";

import styles from "./../styles/components/button.module.css";

const Button = ({ children, hollow, customStyle, bg="default", ...props }) => {
  const btnStyle = clsNames(styles.root, {
    [styles["solid"]]: !hollow,
    [styles["hollow"]]: hollow,
    [styles.whiteBg]: bg==="white"
  });

  return (
    <button  {...props} className={btnStyle} style={customStyle || {}}>
      {children}
    </button>
  );
};

export default Button;
