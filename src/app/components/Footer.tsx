
import React from "react";
import style from "../components/footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        <h2 className={style.akif}>Mehmet Akif Karasu ⏤ 2020</h2>
      </div>
      <div>
        <ul className="font-sans">
          <li className={style.artstation}>Artstation</li>
          <li className={style.linkedin}>Linkedin</li>
          <li className={style.twitter}>Twitter</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;