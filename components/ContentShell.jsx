import React from "react";
import classNames from "classnames";
import Loader from "components/Loader";
import Footer from "./Footer";
import styles from "@/styles/components/contentShell.module.css";

const ContentShell = ({ children, loading = false, extendedView = null, hideFooter=false, footerTopView = null, footerActions=()=>{} }) => {

  return (
    <div id="contentShell" className={classNames(styles.root, {})}>
      {extendedView && !loading && extendedView}
      {loading ? <Loader /> : <div className={styles.content}>{children}</div>}
      {footerTopView && !loading && footerTopView}
      {!hideFooter && <Footer footerActions={footerActions}/>}
    </div>
  );
};

export default ContentShell;
