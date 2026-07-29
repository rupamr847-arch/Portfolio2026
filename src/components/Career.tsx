import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Video Editor &amp; <br />Manager</h4>
                <h5>State Street</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Lead end-to-end video production, post-production, and motion graphics operations for global financial services. Direct editors, implement AI-driven workflows (40% efficiency gain), and manage compliance-aware review workflows.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Video Editor &amp; <br />MOG Artist</h4>
                <h5>Narayana's Learning App</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Spearheaded high-volume EdTech video content creation and 2D/3D motion graphics. Built reusable template systems reducing production turnaround time by 30%.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor &amp; <br />MOG Artist</h4>
                <h5>Tata Steel</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Produced corporate videos, safety training content, executive presentations, and animated visual stories for industrial operations in a regulated environment.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor</h4>
                <h5>Eclectic Studios</h5>
              </div>
              <h3>2017</h3>
            </div>
            <p>
              Edited feature films, web series, and wildlife documentary content in collaboration with National Geographic, specializing in narrative pacing and broadcast finishing.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Video Editor</h4>
                <h5>Multiple Clients</h5>
              </div>
              <h3>2015</h3>
            </div>
            <p>
              Delivered commercials, music videos, promotional films, and post-production services for corporate clients, agencies, and independent filmmakers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
