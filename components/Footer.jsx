import React from "react";
import { useRouter, usePathname } from "next/navigation";
// import { withRouter  } from "next/router";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import Typography from "./Typography";
import config from "@/config/config";
import styles from "@/styles/components/footer.module.css";

const Footer = ({footerActions}) => {
  const router = useRouter();
  const pathname = usePathname()

  const handleClick = ({index, page}) => {
    switch(page) {
      case "service":
        if(pathname !== "/services") {
          router.push(`/services?view=${index}`);
          return;
        }
        footerActions({index, page: "service"})
        break;
      default:
    }
  }

  return (
    <section className={styles.root} id="footer">
      <div className={styles.body}>
        <section className={styles.info}>
          <div className={styles.logo}>
            <Image src="/logo.png" height={40} width={40} alt="logo" />
            <Typography
              text="accenly"
              weight="medium"
              size="xl"
              color="white"
            />
          </div>
          <Typography text={config.footer.info} color="white" weight="light" />
          <Typography text={config.footer.email} color="white" weight="light" />
          <div className={styles.flexBox}>
            <Typography
              text={`${config.footer.contact}:`}
              color="white"
              weight="light"
            />
            {config?.footer?.phNo?.map((el, index) => (
              <Typography
                text={
                  index === config?.footer?.phNo?.length - 1 ? el : `${el}, `
                }
                color="white"
                weight="light"
                key={el}
              />
            ))}
          </div>
        </section>
        <section className={styles.box}>
          <div className={styles.title}>
            <Typography
              text={config.footer.menu.title}
              size="H4"
              color="white"
            />
          </div>
          <div className={styles.menu}>
            {config.footer.menu.options.map((el, index) => (
              <Link href={el.url} key={index}>
                <Typography text={el.label} color="white" isClickable={true} />
              </Link>
            ))}
          </div>
        </section>
        <section className={styles.box}>
          <div className={styles.title}>
            <Typography
              text={config.footer.service.title}
              size="H4"
              color="white"
            />
          </div>
          <div className={styles.menu}>
            {config.footer.service.options.map((el, index) => (
              <Typography
                text={el.label}
                color="white"
                isClickable={true}
                onClick={()=>handleClick({index, page: "service"})}
                key={index}
              />
            ))}
          </div>
        </section>
        <section className={styles.box}>
          <div className={styles.title}>
            <Typography
              text={config.footer.legal.title}
              size="H4"
              color="white"
            />
          </div>
          <div className={styles.menu}>
            {config.footer.legal.options.map((el, index) => (
              <Link href={el?.url} target="_blank" key={index}>
                <Typography
                  text={el.label}
                  color="white"
                  isClickable={true}
                  key={index}
                />
              </Link>
            ))}
          </div>
        </section>
        <section className={styles.box}>
          <div className={styles.title}>
            <Typography
              text={config.footer.social.title}
              size="H4"
              color="white"
            />
          </div>
          <div className={styles.imgMenu}>
            {config.footer.social.options.map((el, index) => (
              <Link href={el?.url} target="_blank" key={index}>
                <Image
                  src={`/images/about/${el.img}.svg`}
                  width={40}
                  height={40}
                  alt={el.img}
                  key={el.img}
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
      <section className={styles.rights}>
        <Typography
          text="Copyright © 2023 Accenly. All Rights Reserved."
          color="white"
        />
      </section>
    </section>
  );
};

export default Footer;
