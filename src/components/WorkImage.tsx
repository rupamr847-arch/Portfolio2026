import { useEffect, useState } from "react";
import { MdArrowOutward, MdPlayArrow, MdClose } from "react-icons/md";
import { getAssetPath } from "./utils/getAssetPath";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  isVertical?: boolean;
}

function getVimeoId(url?: string) {
  if (!url) return null;
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match ? match[1] : null;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const [thumbnail, setThumbnail] = useState(props.image);

  const vimeoId = getVimeoId(props.link);

  useEffect(() => {
    if (vimeoId && (props.image === "/images/placeholder.webp" || props.image === getAssetPath("/images/placeholder.webp"))) {
      fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.thumbnail_url) {
            setThumbnail(data.thumbnail_url);
          }
        })
        .catch((err) => console.error(err));
    } else {
      setThumbnail(props.image);
    }
  }, [vimeoId, props.image]);

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      try {
        const response = await fetch(`src/assets/${props.video}`);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        setVideo(blobUrl);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (vimeoId) {
      e.preventDefault();
      setIsPlayingInline(!isPlayingInline);
    }
  };

  const aspectRatio = props.isVertical ? "9 / 16" : "16 / 9";

  return (
    <div className={`work-image ${props.isVertical ? "work-image-vertical" : ""}`}>
      <div
        className="work-image-in"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        style={{
          maxWidth: props.isVertical ? "172px" : "100%",
          maxHeight: props.isVertical ? "305px" : "none",
          margin: props.isVertical ? "0 auto" : "0",
        }}
      >
        {isPlayingInline && vimeoId ? (
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: aspectRatio,
              borderRadius: "20px",
              overflow: "hidden",
              background: "#000",
            }}
          >
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&app_id=122963&title=0&byline=0&portrait=0`}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "20px",
                transform: "scale(1.08)",
                transformOrigin: "center center",
                zIndex: 10,
              }}
              title={props.alt || "Vimeo Video Player"}
            ></iframe>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsPlayingInline(false);
              }}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: 20,
                background: "var(--accentColor)",
                color: "#000",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                boxShadow: "0 2px 10px rgba(0,0,0,0.7)",
              }}
              title="Close Video"
            >
              <MdClose />
            </button>
          </div>
        ) : (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor={"disable"}
            onClick={handleCardClick}
          >
            {props.link && (
              <div className="work-link" title="Play Video">
                {vimeoId ? <MdPlayArrow /> : <MdArrowOutward />}
              </div>
            )}
            <img
              src={thumbnail}
              alt={props.alt || "Project Thumbnail"}
              style={{ aspectRatio: aspectRatio }}
            />
            {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkImage;
