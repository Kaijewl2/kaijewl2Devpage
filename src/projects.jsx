import { Nav } from "./assets/components/nav/nav";

export default function Projects() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl text-center">Give me a sec 💀🙏</h1>
        <div className="body-container">
          <img
            src="/employmentFlag.png"
            alt="Roblox Meme"
            className="w-200 h-150"
          />
        </div>
      </div>
    </>
  );
}
