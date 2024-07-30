import React from "react";
import classNames from "classnames";
import Navbar from "./Navbar";
import styles from "@/styles/components/appshell.module.css";

const AppShell = ({ children }) => {

  return (
    <div className={classNames(styles.mainContainer)}>
      <Navbar />
      <div className={classNames(styles.children)}>{children}</div>
    </div>
  );
};

export default AppShell;
