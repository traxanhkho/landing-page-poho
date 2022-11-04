import React from "react";

function LanguageBtn(props) {
  return (
    <div class="dropdown">
      <button class="btn" data-toggle="dropdown">
        <i className="fa-solid fa-language"></i>
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item active" href="#">
          Tiếng Việt (VN)
        </a>
        <a class="dropdown-item" href="#">
          English (EN)
        </a>
      </div>
    </div>
  );
}

export default LanguageBtn;
