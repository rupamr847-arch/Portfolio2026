import React from "react";
import "./styles/Clients.css";

interface Client {
  id: number;
  name: string;
  category: string;
  // logo: Path to logo image or null for placeholder SVG
  logo?: string;
}

const clientsData: Client[] = [
  {
    id: 1,
    name: "State Street",
    category: "Financial Services",
    logo: "/images/clients/state-street.jpg",
  },
  {
    id: 2,
    name: "National Geographic",
    category: "Documentary & Broadcast",
    logo: "/images/clients/nat-geo.jpg",
  },
  {
    id: 3,
    name: "Tata Steel",
    category: "Industrial & Corporate",
    logo: "/images/clients/tata.jpg",
  },
  {
    id: 4,
    name: "Narayana GTET",
    category: "EdTech Platform",
    logo: "/images/clients/narayana.jpg",
  },
  {
    id: 5,
    name: "Creative Agencies",
    category: "Commercials & Media",
    logo: "/images/clients/creative-agencies.jpg",
  },
  {
    id: 6,
    name: "Adobe",
    category: "Generative AI & Tools",
    logo: "/images/clients/adobe.png",
  },
  {
    id: 7,
    name: "Google",
    category: "Search & Tech",
    logo: "/images/clients/google.png",
  },
  {
    id: 8,
    name: "Uber",
    category: "Mobility & Platform",
    logo: "/images/clients/uber.png",
  },
];

const Clients = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="clients-section section-container" id="clients">
      <div className="clients-container">
        <h2>
          My <span>Clients</span>
        </h2>
        <p className="clients-subtext">
          Selected companies and visionary partners I've had the pleasure of working with.
        </p>

        <div className="clients-grid">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="client-card"
              onMouseMove={handleMouseMove}
            >
              <div className="client-logo-wrapper">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`client-logo-img ${
                      client.name === "Adobe"
                        ? "client-logo-adobe"
                        : client.name === "Google"
                        ? "client-logo-zoom"
                        : ""
                    }`}
                  />
                ) : (
                  /* Placeholder SVG Logo Icon - Replace with <img> or custom SVG */
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                    <path d="M7 15l4-4 4 4" />
                    <path d="M11 11l4-4 4 4" />
                  </svg>
                )}
              </div>
              <h3 className="client-name">{client.name}</h3>
              <span className="client-category">{client.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
