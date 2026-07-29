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
              image: "/images/work/nat-geo-ocean.jpg",
              link: "https://vimeo.com/1062408945?share=copy&fl=sv&fe=ci",
            },
            {
              id: "02",
              title: "Global Financial Series",
              category: "State Street Corporate Video",
              tools: "Premiere Pro, After Effects, Generative AI",
              image: "/images/work/etf-markets.jpg",
              link: "https://vimeo.com/1202710021?share=copy&fl=sv&fe=ci",
            },
            {
              id: "03",
              title: "Creative Motion Series",
              category: "Creative Agency",
              tools: "After Effects, Motion Systems, Animation",
              image: "/images/work/creative-marketing.jpg",
              link: "https://vimeo.com/1145167686?share=copy&fl=sv&fe=ci",
            },
            {
              id: "04",
              title: "Social Aware Message",
              category: "Tata Steel Campaigns",
              tools: "Premiere Pro, After Effects, Photoshop",
              image: "/images/placeholder.webp",
              link: "https://vimeo.com/1203030791?share=copy&fl=sv&fe=ci",
            },
            {
              id: "05",
              title: "Generative AI Filmmaking",
              category: "Generative AI Video Workflows",
              tools: "AI Generative Video, After Effects, Premiere Pro",
              image: "/images/work/ashes-protocol.jpg",
              link: "https://vimeo.com/1124845883?share=copy&fl=sv&fe=ci",
            },
            {
              id: "06",
              title: "Feature Film & Web Series",
              category: "Eclectic Studios Broadcast",
              tools: "Adobe Premiere Pro, Multi-Cam Editing",
              image: "/images/work/dhurandhar.jpg",
              link: "https://vimeo.com/1184003292?share=copy&fl=sv&fe=ci",
            },
            {
              id: "07",
              title: "Uber Promo Reel",
              category: "Uber Brand Campaign",
              tools: "After Effects, Premiere Pro, Mobile Specs",
              image: "/images/work/uber-vertical.jpg",
              link: "https://vimeo.com/1181611272?share=copy&fl=sv&fe=ci",
              isVertical: true,
            },
            {
              id: "08",
              title: "Google Lens Promo",
              category: "Google Product Video",
              tools: "After Effects, Kinetic Typography, Firefly",
              image: "/images/work/google-lens-vertical.jpg",
              link: "https://vimeo.com/1181621502?share=copy&fl=sv&fe=ci",
              isVertical: true,
            },
            {
              id: "09",
              title: "Car Commercial Reel",
              category: "Automotive Motion Campaign",
              tools: "After Effects, Color Grading, Audition",
              image: "/images/placeholder.webp",
              link: "https://vimeo.com/1130793961?share=copy&fl=sv&fe=ci",
              isVertical: true,
            },
          ].map((project) => (
            <div
              className={`work-box ${project.isVertical ? "work-box-vertical" : ""}`}
              key={project.id}
            >
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
                isVertical={project.isVertical}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
