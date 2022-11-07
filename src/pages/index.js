import Header from "../components/Header";
import dynamic from "next/dynamic";

const PageSection = dynamic(() => import("../components/PageSection"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="page-root">
      <Header />
      <PageSection />
    </div>
  );
}
