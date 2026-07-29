import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (smoother) {
    smoother.paused(false);
  }
  const mainElem = document.getElementsByTagName("main")[0];
  if (mainElem) {
    mainElem.classList.add("main-active");
  }
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  var landingTextProducer = new SplitText(".landing-h2-info", TextProps); // Pair A Line 2: Producer
  var landingTextSpecialist = new SplitText(".landing-h2-info-1", TextProps); // Pair B Line 2: Specialist
  var landingTextVideo = new SplitText(".landing-h2-1", TextProps); // Pair A Line 1: Video
  var landingTextMotion = new SplitText(".landing-h2-2", TextProps); // Pair B Line 1: Motion Graphics

  gsap.fromTo(
    [...landingTextVideo.chars, ...landingTextProducer.chars],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Set Pair B initially hidden
  gsap.set([...landingTextMotion.chars, ...landingTextSpecialist.chars], {
    opacity: 0,
    y: 80,
  });

  LoopPairs(
    landingTextVideo,
    landingTextProducer,
    landingTextMotion,
    landingTextSpecialist
  );
}

function LoopPairs(
  line1A: SplitText,
  line2A: SplitText,
  line1B: SplitText,
  line2B: SplitText
) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const displayTime = 3.5; // time each title remains visible

  // Transition Pair A (Video Producer) -> Pair B (Motion Graphics Specialist)
  tl.to(
    [...line1A.chars, ...line2A.chars],
    {
      y: -80,
      opacity: 0,
      duration: 1.0,
      ease: "power3.inOut",
      stagger: 0.02,
    },
    displayTime
  );

  tl.to(
    [...line1B.chars, ...line2B.chars],
    {
      y: 0,
      opacity: 1,
      duration: 1.0,
      ease: "power3.inOut",
      stagger: 0.02,
    },
    displayTime + 0.1
  );

  // Transition Pair B (Motion Graphics Specialist) -> Pair A (Video Producer)
  const phase2Time = displayTime * 2 + 1.2;

  tl.to(
    [...line1B.chars, ...line2B.chars],
    {
      y: -80,
      opacity: 0,
      duration: 1.0,
      ease: "power3.inOut",
      stagger: 0.02,
    },
    phase2Time
  );

  tl.to(
    [...line1A.chars, ...line2A.chars],
    {
      y: 0,
      opacity: 1,
      duration: 1.0,
      ease: "power3.inOut",
      stagger: 0.02,
    },
    phase2Time + 0.1
  );
}
