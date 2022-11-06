import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/globals.scss";
import { AppWrapper } from "../src/context/postContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return (
    <AppWrapper>
      <Component {...pageProps} />  
    </AppWrapper>
  );
}

export default MyApp;
