"use client";
import { useRef } from "react";
// import BackgroundSoft from "../3dview/backgroundSoft";
import ContactForm from "./contactForm";
import Image from "next/image";

export default function ComposedContactForm({}) {
  return (
    <div
      style={{
        height: "560px",
        display: "flex",
        flexWrap: "wrap",
        position: "relative",
        width: "100%",
        margin: "1.5rem",
        marginTop: "2.5rem",
        padding: "1rem",
      }}
    >
      {/* <div
        style={{
          borderRadius: "2rem",
        }}
      >
        <Image src={"/node2.jpg"} height={360} width={360} alt="form" />
      </div> */}
      {/* <BackgroundSoft /> */}
      <div
        style={{
          display: "flex",
          width: "98%",
          maxWidth: "65rem",
          zIndex: 20,
          position: "absolute",
          fontSize: "1rem",
          top: 10,
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          padding: "23px",
          borderRadius: "10px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ContactForm />
      </div>
    </div>
  );
}
