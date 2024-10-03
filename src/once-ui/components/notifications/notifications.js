import React from "react";
import styles from "./notifications.module.css";

function Notification(props) {
  const { status, requestError } = props;
  let notification;

  if (status === "pending") {
    notification = {
      status: "pending",
      title: "Enviando mensaje...",
      message: "Tu mensaje esta siendo enviado..",
    };
  }

  if (status === "success") {
    notification = {
      status: "success",
      title: "Exito!",
      message: "Mensaje Enviado Exitosamente!",
    };
  }

  if (status === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }
  let statusClass = "";

  if (status === "success") {
    statusClass = styles.success;
  } else if (status === "error") {
    statusClass = styles.error;
  } else if (status === "pending") {
    statusClass = styles.pending;
  }

  return (
    <div className={`${styles.notification} ${statusClass}`}>
      <div>{notification.title}</div>
      <div>{notification.message}</div>
    </div>
  );
}

export default Notification;
