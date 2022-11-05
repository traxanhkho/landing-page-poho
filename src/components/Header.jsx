import React from "react";
import { usePostContext } from "../context/postContext";
import Button from "./Button";
import LanguageBtn from "./LanguageBtn";

function Header(props) {
  const { language } = usePostContext();
  return (
    <header className="position-fixed w-100">
      <div className="container-fluid container-custom">
        <div className="header-nav d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="https://poho.vn/" target="_blank" rel="noreferrer">
              <img
                src="/images/Logo.svg"
                alt="công ty world connect - Poho logo"
              />
            </a>
          </h1>
          <div className="header-buttons">
            <LanguageBtn />
            <Button text={language == "vn" ? "tải xuống" : "Download"} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
