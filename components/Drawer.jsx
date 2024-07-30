import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import Typography from "./Typography";
import classNames from "classnames";
import config from "@/config/config";
import styles from "@/styles/components/drawer.module.css";

const Drawer = ({ open, handleClose }) => {
  const router = useRouter();

  const handleRoute = (url) => {
    handleClose();
    router.push(url);
  };

  return (
    <div
      className={classNames(styles.root, {
        [styles.show]: open,
      })}
    >
      <section className={styles.head}>
        <section className={styles.logo}>
          <Image src="/logo.png" height={40} width={40} alt="logo" />
          <Typography text="accenly" weight="medium" size="xl" color="white" />
        </section>
        <Image
          src={"/icons/closeBtn.svg"}
          height={32}
          width={32}
          alt="logo"
          onClick={handleClose}
        />
      </section>
      <section className={styles.body}>
        {config.drawer.menu.map((el, index) => (
          <div
            className={styles.options}
            key={index}
            onClick={() => handleRoute(el.url)}
          >
            <Typography text={el.label} color="white" size="H4" />
          </div>
        ))}
        <button className={styles.btn} onClick={() => handleRoute("/contact")}>
          Contact
        </button>
        <div className={styles.info}>
          <Typography
            text={config.drawer.info}
            color="white"
            size="H2"
            styles={{ margin: "" }}
          />
          <Typography
            text={config.drawer.phrase}
            color="white"
            weight="light"
          />
        </div>
        {/* <div className={styles.flexBox}>
          <Button>HOW WE WORK</Button>
          <Typography text="Connect with us" isUpperCase={true} weight="light" color="grey"/>
        </div> */}
      </section>
    </div>
  );
};

export default Drawer;
