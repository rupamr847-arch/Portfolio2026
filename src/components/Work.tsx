import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              id: "01",
              title: "Nat Geo Documentary",
              category: "Wildlife & Narrative Film",
              tools: "Premiere Pro, DaVinci Resolve, Audition",
              image: "/images/placeholder.webp",
              link: "https://vimeo.com/1062408945?share=copy&fl=sv&fe=ci",
            },
            {
              id: "02",
              title: "Global Financial Series",
              category: "State Street Corporate Video",
              tools: "Premiere Pro, After Effects, Generative AI",
              image: "/images/placeholder.webp",
            },
            {
              id: "03",
              title: "3D EdTech Explainers",
              category: "Narayana Learning App",
              tools: "Blender, After Effects, Cinema 4D",
              image: "/images/placeholder.webp",
            },
            {
              id: "04",
              title: "Industrial Safety & CSR",
              category: "Tata Steel Brand Narratives",
              tools: "Premiere Pro, After Effects, Photoshop",
              image: "/images/placeholder.webp",
            },
            {
              id: "05",
              title: "AI Motion Campaign",
              category: "Generative AI Video Workflows",
              tools: "Adobe Firefly, After Effects, Premiere Pro",
              image: "/images/placeholder.webp",
            },
            {
              id: "06",
              title: "Feature Film & Web Series",
              category: "Eclectic Studios Broadcast",
              tools: "DaVinci Resolve, Multi-Cam Editing, Audition",
              image: "/images/placeholder.webp",
            },
          ].map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
