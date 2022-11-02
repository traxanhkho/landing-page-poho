import React, { useEffect, useState } from "react";
import { getAll } from "../services/fakeData";
import ReactFullpage from "@fullpage/react-fullpage";
import PageItem from "./PageItem";

function PageSection(props) {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    setPosts(getAll());
  }, []);

  if(posts.length > 0){
    return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      navigation
      loopTop={true}
      loopBottom={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {posts.length > 0 && posts.map((post) => <PageItem post={post} />)}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
  }
  
}

export default PageSection;
