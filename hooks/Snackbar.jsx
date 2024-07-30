"use client"
import React from "react";
import classNames from "classnames";
import styles from "styles/components/snackbar.module.css";

const SnackbarContext = React.createContext({});

const SnackbarComponent = () => {
  const { message, open, status } = React.useContext(SnackbarContext);

  return (
    <>
      <div
        className={classNames(styles.snackbarv2, {
          [styles.show]: open,
          [styles.err]: status === "err",
          [styles.success]: status !== "err",
        })}
      >
        {message || ""}
      </div>
    </>
  );
};

function SnackbarProvider({ children }) {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState("");

  let timer;
  const showSnackbar = (_message, _status="err") => {
    setOpen(true);
    setMessage(_message);
    setStatus(_status);
    timer = setTimeout(() => setOpen(false), 3000);
  };

  return (
    <SnackbarContext.Provider
      value={{
        showSnackbar,
        open,
        message,
        status,
      }}
    >
      <SnackbarComponent />
      {children}
    </SnackbarContext.Provider>
  );
}

const Snackbar = () => {
  const { showSnackbar } = React.useContext(SnackbarContext);
  return { showSnackbar };
};

export { SnackbarProvider, Snackbar };
