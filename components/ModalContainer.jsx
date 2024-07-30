import React from "react";
import Image from "next/image";
import classNames from "classnames";
import Loader from "components/Loader";
import Typography from "components/Typography";
import styles from "@/styles/components/modalContainer.module.css";

const ModalContainer = ({
  title,
  children,
  handleClose,
  open,
  containerSize = "lg",
  secondaryMobileView=false,
  loading = false,
  hideCloseButton = false
}) => {
  return (
    <div
      id="defaultModal"
      className={classNames(styles.root, {
        [styles.hideEl]: !open,
        [styles.center]: true,
      })}
      onClick={(e)=>{
        if(e.target.id === "defaultModal") handleClose()
      }}
    >
      <div
        className={classNames(styles.container, {
          [styles.md]: containerSize === "md",
          [styles.fit]: containerSize === "fit",
        })}
      >
        {/* Modal content */}
        <div className={classNames(styles.modalContent, {})}>
          {/* Modal header */}
          <div className={classNames(styles.modalHead, {
            [styles.secondaryMobileView]: secondaryMobileView,
            [styles.hideEl]: hideCloseButton

          }
          )}>
            <Typography text={title} size="H3" />
            <button
              type="button"
              data-modal-toggle="defaultModal"
              id="close"
              onClick={handleClose}
            >
              <Image
                src={"/icons/closeIcon.png"}
                alt="close"
                height="24"
                width="24"
              />
            </button>
          </div>
          {/* Modal body */}
          <div className={styles.modalBody}>{loading ? <Loader/> : children}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;
