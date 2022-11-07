import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { usePostContext } from "../context/postContext";
import { start } from "../utils/handleWheelMouse";
import { getAll, getFlagImg } from "../services/fakeData";
import PageItem from "./PageItem";

function PageSection(props) {
  const router = useRouter();
  const { setFlagImg, language, setLanguage } = usePostContext();
  const [posts, setPosts] = useState(getAll("vn"));

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("language");

    if (query) {
      setLanguage(query);
      setFlagImg(getFlagImg(query));
    }

    setPosts(getAll(language));

    start();
  }, [language, router.asPath]);

  return (
    <div className="slider-item">
      {posts &&
        posts.map((post, index) => (
          <PageItem
            key={++index}
            post={post}
            active={index == 0 ? true : false}
          />
        ))}
    </div>
  );
}

export default PageSection;

{
  /* <div
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
      </div> */
}
