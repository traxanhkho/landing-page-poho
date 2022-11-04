import { useEffect, useState } from "react";
import $ from "jquery";
import { getAll } from "../services/fakeData";
import PageItem from "./PageItem";

function PageSection(props) {
  const [posts, setPosts] = useState(getAll());

  useEffect(() => {

    $(".carousel").bind("mousewheel DOMMouseScroll", function (e) {
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        $(".carousel").carousel("prev");
      } else {
        $(".carousel").carousel("next");
      }
      return false;
    });
  }, [posts]);

  if (posts.length > 0) {
    return (
      <div
        id="carouselIndicators"
        className="carousel slide vh-100"
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
