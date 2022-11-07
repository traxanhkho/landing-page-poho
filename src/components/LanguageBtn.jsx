import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { usePostContext } from "../context/postContext";

function LanguageBtn(props) {
  const { language, flagImg } = usePostContext();

  return (
    <div className="dropdown">
      <button className="btn" data-toggle="dropdown">
        {flagImg && <img src={flagImg} alt="chọn ngôn ngữ" />}
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link
          className={`dropdown-item ${language == "vn" ? "active" : ""}`}
          href={{
            pathname: "/",
            query: { language: "vn" },
          }}
        >
          Tiếng Việt (VN)
        </Link>
        <Link
          className={`dropdown-item ${language == "en" ? "active" : ""}`}
          href={{
            pathname: "/",
            query: { language: "en" },
          }}
        >
          English (EN)
        </Link>
      </div>
    </div>
  );
}

export default LanguageBtn;
