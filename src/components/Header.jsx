import React from "react";
import Button from "./Button";
import LanguageBtn from "./LanguageBtn";

function Header(props) {
  return (
    <header className="position-fixed w-100">
      <div className="container-fluid container-custom">
        <div className="header-nav d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="https://poho.vn/" target={"_blank"}>
              <img
                src="/images/Logo.svg"
                alt="công ty world connect - Poho logo"
              />
            </a>
          </h1>
          <div className="header-buttons">
            <LanguageBtn />
            <Button text="tải xuống" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
