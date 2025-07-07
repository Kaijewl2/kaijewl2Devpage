import "./App.css";
import { Body } from "./assets/components/body/body";
import { Header } from "./assets/components/header/header";
import { Nav } from "./assets/components/nav/nav";
import { useEffect } from "react";
import Projects from "./projects";
import Socials from "./socials";

export default function Home() {
  useEffect(() => {
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  if (window.location.pathname === "/projects") {
    return <Projects />;
  } else if (window.location.pathname === "/socials") {
    return <Socials />;
  }

  return (
    <>
      <div className="App">
        <Nav />
      </div>
      <Header />
      <Body />
    </>
  );
}
