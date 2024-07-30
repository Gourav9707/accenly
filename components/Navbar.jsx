"use client";
import {useState} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import Typography from "./Typography";
import Drawer from "./Drawer";
import config from "@/config/config";
import styles from "@/styles/components/nav.module.css";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.root}>
      <div className={styles.box}>
        {/* Logo (Left side) */}
        <Link href={"/"}>
          <section className={styles.logo}>
            <Image src="/logo.png" height={40} width={40} alt="logo" />
            <Typography text="accenly" weight="medium" size="xl" />
          </section>
        </Link>

        <div className={styles.menu} onClick={() => setOpen(!open)}>
          <Image src="/images/menu.png" height={40} width={40} alt="menu" />
        </div>

        <div className={styles.rightContent}>
          {/* Navigation Links (Right side) */}
          <ul className={styles.list}>
            {config.nav.map((el, index) => (
              <li key={el.url}>
                <Link href={el.url}>{el.label}</Link>
              </li>
            ))}
          </ul>

          {/* Contact Us Button */}
          <Button hollow onClick={()=>router.push("/contact")}>CONTACT</Button>
        </div>

        <Drawer open={open} handleClose={() => setOpen(!open)}/>
      </div>
    </nav>
  );
};

export default Navbar;
