"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import queryString from "query-string";
import Image from "next/image";
import classNames from "classnames";
import ContentShell from "@/components/ContentShell";
import SelectField from "@/components/SelectField";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import ContactModal from "@/components/modals/ContactModal";
import config from "@/config/config";
import styles from "@/styles/views/portfolio/natsary/index.module.css";

const page = () => {
  const router = useRouter();
  const pathName = usePathname();

  const [open, setOpen] = React.useState(false);
  const [pageInfo, setPageInfo] = React.useState(null);

  const handleClick = ({ event = "close" }) => {
    switch (event) {
      case "submit":
        break;
      default:
        setOpen(!open);
    }
  };

  const handleRoute =(url) => {
    let view = url?.split("=")[1]
    router.push(url)

    if (view && config.miscText.portfolio[view])
      setPageInfo({ ...config.miscText.portfolio[view], view });
    else setPageInfo({ ...config.miscText.portfolio.nastary, view: "natsary" }); //default load
  }

  React.useEffect(() => {
    let { view } = queryString.parse(window?.location?.search);

    if (view && config.miscText.portfolio[view])
      setPageInfo({ ...config.miscText.portfolio[view], view });
    else setPageInfo({ ...config.miscText.portfolio.nastary, view: "natsary" }); //default load
  }, []);
  return (
    <ContentShell loading={!pageInfo}>
      <article className={styles.root}>
        <section className={styles.btn} onClick={() => router.back()}>
          <Image
            src={"/icons/arrowLeft.png"}
            height={12}
            width={18}
            alt="arrow"
          />
          <Typography text="Back to portfolio" />
        </section>
        <section className={styles.box}>
          <Typography text={pageInfo?.development?.title} size="H2" />
          <Typography text="Development" size="H2" />
          <div className={styles.info}>
            {pageInfo?.development?.info.map((el, index) => (
              <Typography text={el} key={index} />
            ))}
          </div>
          <div className={styles.clientBox}>
            <div className={styles.child}>
              <Typography
                text="CATEGORY"
                isUpperCase={true}
                color="blue"
                size="H5"
              />
              <div className={styles.flexCol}>
                {pageInfo?.development?.category?.map((el, index) => (
                  <Typography text={el} key={index} size="H5" />
                ))}
              </div>
            </div>
            <div className={styles.child}>
              <Typography
                text="client"
                isUpperCase={true}
                color="blue"
                size="H5"
              />
              <Image
                src={pageInfo?.development?.logoUrl}
                width={124}
                height={36}
                alt="logo"
              />
              <Typography
                text="date"
                isUpperCase={true}
                color="blue"
                size="H5"
              />
              <Typography text={pageInfo?.development?.date || "-"} size="H5" />
            </div>
          </div>
        </section>
      </article>
      <Image
        src={pageInfo?.bannerUrl}
        height={720}
        width={1180}
        alt="banner"
        className="mx-auto"
      />
      <article className={styles.root}>
        <section className={styles.box}>
          <Typography text={"Problem"} size="H2" />
          <div className={styles.info}>
            {pageInfo?.problem?.info.map((el, index) => (
              <Typography text={el} key={index} />
            ))}
          </div>
        </section>
      </article>
      <article
        className={classNames(styles.gallery, {
          [styles.hide]: !pageInfo?.videoUrl && !pageInfo?.pics?.length,
        })}
      >
        <section
          className={classNames(styles.vid, {
            [styles?.hide]: !pageInfo?.videoUrl,
          })}
        >
          <iframe
            width="100%"
            height="448px"
            src={pageInfo?.videoUrl}
            title="Our Strength"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </section>
        <section
          className={classNames(styles.pics, {
            [styles?.hide]: !pageInfo?.pics?.length,
          })}
        >
          {pageInfo?.pics?.map((_img, index) => (
            <Image
              src={_img}
              height={217}
              width={270}
              alt="banner"
              key={index}
              className={classNames({
                [styles.singlePic]: pageInfo?.pics?.length === 1,
              })}
            />
          ))}
        </section>
      </article>
      <article className={styles.root}>
        <section className={styles.box}>
          <Typography text={"Solution"} size="H2" />
          <div className={styles.info}>
            {pageInfo?.solution?.info.map((el, index) => (
              <Typography text={el} key={index} />
            ))}
          </div>
        </section>
      </article>
      <article className={classNames(styles.moreProjects)}>
        <Typography text={"More Projects"} size="H4" />
        <section className={styles.flexBox}>
          {config.miscText.portfolio.projects.slice(2, 4).map((info, index) => (
            <div
              className={styles.projects}
              key={index}
              onClick={() => handleRoute(info?.url)}
            >
              {info?.imgUrl ? (
                <Image
                  src={info?.imgUrl}
                  height={416}
                  width={570}
                  alt="banner"
                  className={styles.dummy}
                />
              ) : (
                <div className={styles.dummy} />
              )}
              <div className={styles.cardHighlight}>
                {info?.workInfo?.map((_el, _index) => (
                  <div className={styles.whiteBg} key={_index}>
                    <Typography text={_el} />
                  </div>
                ))}
                <Typography text={info?.title} size="H3" color="white" />
              </div>
            </div>
          ))}
        </section>
      </article>
      <section
        id="lowerBanner"
        className={classNames(styles.box, { [styles.lowerBanner]: true })}
      >
        <div>
          <Typography
            text="We’re Help To Build Your Dream Project"
            color="white"
            size="H2"
          />
          <Typography
            text="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house."
            color="white"
          />
          <Button bg="white" onClick={() => setOpen(!open)}>
            Contact us
          </Button>
        </div>
        <Image
          src="/images/portfolio/pic.png"
          alt="portfolio"
          height={420}
          width={420}
        />
      </section>
      <ContactModal handleClick={handleClick} open={open} />
    </ContentShell>
  );
};

export default page;
