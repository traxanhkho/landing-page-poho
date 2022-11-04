import React from "react";

function LanguageBtn(props) {
  return (
    <div className="dropdown">
      <button className="btn" data-toggle="dropdown">
        <i className="fa-solid fa-language"></i>
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item active" href="#">
          Tiếng Việt (VN)
        </a>
        <a className="dropdown-item" href="#">
          English (EN)
        </a>
      </div>
    </div>
  );
}

export default LanguageBtn;
