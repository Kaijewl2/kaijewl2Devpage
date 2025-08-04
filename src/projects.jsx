import { Nav } from "./assets/components/nav/nav";
import { motion } from "framer-motion";
import "C:/Users/Kaiden Engle/OneDrive/Documents/GitHub/kaijewl2Devpage/src/assets/components/socialButtons/socialButtons.css";

export default function Projects() {
  // Project data - you can customize these
  const projects = [
    {
      id: 1,
      image: "/scraperDecl.png",
      alt: "Scraper Project",
      buttonText: "Discord",
      link: "https://github.com/Kaijewl2/ScrapingCraigslistAndMailing",
    },
    {
      id: 2,
      image: "/drakeMustard.png",
      alt: "Project 2",
      buttonText: "TBD",
      link: "https://github.com/Kaijewl2",
    },
    {
      id: 3,
      image: "/fyodorElon.png",
      alt: "Project 3",
      buttonText: "TBD",
      link: "https://github.com/Kaijewl2",
    },
    {
      id: 4,
      image: "/PeakyJumper.png",
      alt: "Project 4",
      buttonText: "TBD",
      link: "https://github.com/Kaijewl2",
    },
  ];

  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        {/* 2x2 Grid Container */}
        <div className="grid grid-cols-2 gap-12 max-w-4xl">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col items-center gap-4">
              {/* Smaller Image */}
              <img
                src={project.image}
                alt={project.alt}
                className="w-64 h-48 object-contain"
              />

              {/* Button */}
              <div className="discordButton">
                <motion.button
                  onClick={() => window.open(project.link, "_blank")}
                  className="px-6 py-2 rounded-md relative radial-gradient"
                  initial={{ "--x": "100%", scale: 1 }}
                  animate={{ "--x": "-100%" }}
                  whileHover={{ scale: 1.15 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                    type: "spring",
                    stiffness: 20,
                    damping: 15,
                    mass: 2,
                    scale: {
                      type: "spring",
                      stiffness: 10,
                      damping: 5,
                      mass: 0.1,
                    },
                  }}
                >
                  <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
                    {project.buttonText}
                  </span>
                  <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
