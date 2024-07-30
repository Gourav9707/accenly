"use client";
import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  MarkerF,
} from "@react-google-maps/api";
// import { InlineWidget  } from "react-calendly";
import ContentShell from "@/components/ContentShell";
import { Snackbar } from "hooks/Snackbar";
import Button from "@/components/Button";
import FAQView from "@/components/FAQView";
import Typography from "@/components/Typography";
import Textfield from "@/components/Textfield";
import config from "@/config/config";
import styles from "@/styles/views/contact/index.module.css";

const ExtendedBanner = ({ values, handleFormUpdate, onSubmit, loading, onSchedule }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_CLOUD_API_KEY,
  });
  const center = useMemo(() => ({ lat: 22.66527, lng: 87.90366 }), []);

  return (
    <>
      <section className={styles.banner}>
        <Typography text="Contact" color="white" size="H1" />
        <Typography
          text={config.miscText.contact.bannerPhrase1}
          color="white"
        />
        <Typography
          text={config.miscText.contact.bannerPhrase2}
          color="white"
        />
      </section>
      <div className={styles.bannerV2}>
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName={styles.mapContainer}
            center={center}
            zoom={10}
          >
            <MarkerF
              position={{ lat: 22.63738, lng: 88.45748 }}
              // icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
            />
          </GoogleMap>
        )}
        <div className={styles.formContainer}>
          <div className={styles.form}>
            <div className={styles.field}>
              <Textfield
                value={values.name}
                onChange={(e) => handleFormUpdate(e.target)}
                name="name"
                placeholder="Name*"
              />
            </div>
            <div className={styles.field}>
              <Textfield
                value={values.email}
                onChange={(e) => handleFormUpdate(e.target)}
                name="email"
                placeholder="Email address*"
              />
            </div>
            <div className={styles.field}>
              <Textfield
                value={values.phone}
                onChange={(e) => handleFormUpdate(e.target)}
                name="phone"
                placeholder="Phone*"
                secondaryView={false}
                startIcon={<div className={styles.countryCode}>+91 |</div>}
                type="number"
                onKeyDown={(e) =>
                  ["e", "E", "+", "-", "."].includes(e.key) &&
                  e.preventDefault()
                }
              />
            </div>
            <div className={styles.field}>
              <Textfield
                value={values.company}
                onChange={(e) => handleFormUpdate(e.target)}
                name="company"
                placeholder="Company name"
              />
            </div>
            <div className={styles.field}>
              <Textfield
                value={values.purpose}
                onChange={(e) => handleFormUpdate(e.target)}
                name="purpose"
                placeholder="What are you looking for?*"
              />
            </div>
            <div className={styles.action}>
              {/* <Image
                src="/icons/cloud.svg"
                height={24}
                width={24}
                alt="drive"
              />
              <label>
                <Typography text="| Add Document" isClickable={true} />
                 <input
                  type="file"
                  name="doc"
                  onChange={(e) => handleFormUpdate(e.target)}
                  className="hidden"
                /> 
              </label>  */}

              <Button onClick={onSubmit} disabled={loading}>
                SUBMIT NOW
              </Button>
            </div>
            <div>
              <Typography
                text="Schedule your appointment"
                isClickable={true}
                color="blue" size="H5"
                onClick={onSchedule}
              />
            </div>
          </div>
        </div>
        {/* <div className={styles.imgContainer}>
          <Image
            src="/icons/location.svg"
            alt="location"
            height={42}
            width={42}
          />
        </div> */}
      </div>
    </>
  );
};

const page = () => {
  const router = useRouter();
  const { showSnackbar } = Snackbar();
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    purpose: "",
    tc: false,
    doc: null,
  });
  const [loading, setLoading] = React.useState(false);

  const handleFormUpdate = ({ name, value, files }) => {
    switch (name) {
      case "email":
      case "name":
      case "phone":
      case "company":
      case "purpose":
        setValues({ ...values, [name]: value });
        break;
      case "doc":
        setValues({ ...values, doc: files[0] || null });
        break;
      case "tc":
        setValues({ ...values, tc: !values?.tc });
        break;
      default:
    }
  };

  const onSubmit = async () => {
    if (!values?.name || !values?.phone || !values?.email || !values?.purpose) {
      showSnackbar("Please provide all mandatory fields.");
      return;
    }

    // let fileData = new FormData();
    // if (values?.doc) {
    //   console.log("first", values?.doc);
    //   fileData.set("file", values?.doc);
    //   // fileData.set("jsonData", {
    //   //   name: values?.name,
    //   //   email: values?.email,
    //   //   phone: values?.phone,
    //   //   company: values?.company || "N/A",
    //   //   purpose: values?.purpose,
    //   //   subject: "Lead contacts",
    //   // });
    // }

    // return;

    try {
      setLoading(true);
      const response = await fetch("/api/mail", {
        method: "POST",
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
        // body: fileData,
        body: JSON.stringify({
          name: values?.name,
          email: values?.email,
          phone: values?.phone,
          company: values?.company || "N/A",
          purpose: values?.purpose,
          // doc: fileData,
          subject: "Lead contacts",
        }),
      });

      const data = await response.json();
      if (!data?.success) throw new Error(data?.message);

      setLoading(false);
      showSnackbar("Our team will reach out you soon.", "success");
    } catch (e) {
      showSnackbar(e?.message || "Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <ContentShell
      extendedView={
        <ExtendedBanner
          handleFormUpdate={handleFormUpdate}
          values={values}
          loading={loading}
          onSubmit={onSubmit}
          onSchedule={()=>router.push("/meeting")}
        />
      }
    >
      <section className={styles.box} id="creds">
        <div className={styles.cardContainer}>
          {config.miscText.contact.credentials.map((info, index) => (
            <div key={`${info.label}-${index}`} className={styles.card}>
              <div className={styles.title}>
                <Image src={info.img} height={48} width={48} alt={info.label} />
                <Typography text={info.label} color="blue" size="base" />
              </div>
              <Typography text={info.value} />
            </div>
          ))}
        </div>
      </section>
      <section className={styles.box} id="faq">
        <FAQView />
      </section>
    </ContentShell>
  );
};

export default page;
