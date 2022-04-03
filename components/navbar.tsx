import React from "react";
import styles from "../styles/Navbar.module.scss"
import NavItems from "./nav";

export default function Navbar() {
  return (
    <div className={styles.bar}>
      <NavItems />
    </div>
  );
}