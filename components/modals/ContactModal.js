import React from "react";
import Image from "next/image";
import ModalContainer from "../ModalContainer";
import { Snackbar } from "hooks/Snackbar";
import Textfield from "../Textfield";
import Typography from "../Typography";
import Button from "../Button";
import styles from "@/styles/components/modal/contactModal.module.css";

const ContactModal = ({ open = false, handleClick = () => {} }) => {
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
      handleClick()
    } catch (e) {
      showSnackbar(e?.message || "Something went wrong!");
      setLoading(false);
      handleClick()
    }
  };

  return (
    <ModalContainer open={open} title="Contact us" handleClose={handleClick}>
      <section className={styles.box}>
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
              ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
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
      </section>
      <section id="action" className={styles.flexBox}>
        <div>
          <input
            type="checkbox"
            id="t&c"
            name="tc"
            value={values.tc}
            onClick={() => handleFormUpdate({ name: "tc" })}
          />
          <Typography
            text={
              <>
                I agree to the <span>privacy policy</span>
              </>
            }
          />
        </div>
        <div>
          {/* <Image src="/icons/cloud.svg" height={24} width={24} alt="drive" />
          <Typography text="| Add Document" isClickable={true} /> */}
          <Button onClick={onSubmit} disabled={loading}>SUBMIT NOW</Button>
        </div>
      </section>
    </ModalContainer>
  );
};

export default ContactModal;
