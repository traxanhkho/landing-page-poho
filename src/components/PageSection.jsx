import { useEffect, useState } from "react";
import $ from "jquery";
import { getAll, getFlagImg } from "../services/fakeData";
import PageItem from "./PageItem";
import { useRouter } from "next/router";
import { usePostContext } from "../context/postContext";

function PageSection(props) {
  const router = useRouter();
  const { language, setLanguage, setFlagImg } = usePostContext();
  const [isSliding, setIsSliding] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("language");

    const languageQuery = query;

    if (languageQuery) {
      setLanguage(languageQuery);
      setFlagImg(getFlagImg(languageQuery));
    } else {
      setLanguage("vn");
      setFlagImg(getFlagImg("vn"));
    }

    setPosts(getAll(language));

    $("body").bind("mousewheel DOMMouseScroll onWheel", function (e) {
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        handleSlide("prev");
      } else {
        handleSlide("next");
      }
      return false;
    });
  }, [language, router.asPath]);

  const handleSlide = (behavior) => {
    $(".carousel").carousel(behavior);
  };

  if (posts.length > 0) {
    return (
      <div
        id="carouselIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {posts.map((item, index) => (
            <li
              key={++index}
              data-target="#carouselIndicators"
              data-slide-to={index}
              className={index == 0 ? "active" : ""}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {posts.length > 0 &&
            posts.map((post, index) => (
              <PageItem
                key={++index}
                post={post}
                active={index == 0 ? true : false}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default PageSection;
