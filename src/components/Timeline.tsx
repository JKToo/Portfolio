import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { History } from "./timelineElements";
import type { TimelineItem } from "./timelineElements";
import "../CSS/timeline.css";

type MiniCardProps = {
  item: TimelineItem;
  isActive: boolean;
  position: "top" | "bottom";
  onClick: () => void;
};

const MiniCard = ({ item, isActive, position, onClick }: MiniCardProps) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{
        opacity: 0,
        y: position === "top" ? -20 : 20,
        filter: "blur(4px)",
      }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      className={`minicard ${position === "top" ? "minicard--top" : "minicard--bottom"}`}
    >
      <div className={`minicard-inner ${isActive ? "minicard-inner--active" : ""}`}>
        <span className="minicard-date">{item.date}</span>
        <h3 className="minicard-title">{item.event}</h3>
        <p className="minicard-subtitle">
          {item.role}
          {item.duration ? (
            <span className="minicard-duration">· {item.duration}</span>
          ) : null}
        </p>
      </div>

      <div
        className={`minicard-connector ${
          position === "top" ? "minicard-connector--top" : "minicard-connector--bottom"
        }`}
      >
        <div className="minicard-connector-line" />
      </div>
    </motion.div>
  );
};

const ExpandedCard = ({ item }: { item: TimelineItem }) => {
  const descriptions = [
    item.description,
    item.description2,
    item.description3,
    item.description4,
    item.description5,
    item.description6,
    item.description7,
  ].filter(Boolean);

  return (
    <motion.div
      key={`${item.date}-${item.event}`}
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="expanded-card"
    >
      {item.thumbnail ? (
        <div className="expanded-thumbnail">
          <img src={item.thumbnail} alt={item.event} loading="lazy" />
        </div>
      ) : null}

      <span className="expanded-date">{item.date}</span>
      <h3 className="expanded-title">{item.event}</h3>
      <p className="expanded-role">
        {item.role}
        {item.duration ? (
          <span className="expanded-duration-badge">{item.duration}</span>
        ) : null}
      </p>

      {descriptions.length > 0 ? (
        <ul className="expanded-descriptions">
          {descriptions.map((desc, index) => (
            <li key={index}>
              <span className="expanded-bullet" />
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </motion.div>
  );
};

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTimeline = (direction: "left" | "right") => {
    const next =
      direction === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(History.length - 1, activeIndex + 1);

    setActiveIndex(next);

    const container = scrollRef.current;
    if (container) {
      const dots = container.querySelectorAll("[data-dot]");
      dots[next]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <section className="timeline-section">
      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="timeline-header"
      >
        <h1>My Journey</h1>
      </motion.div>

      <div className="timeline-container">
        <button
          type="button"
          onClick={() => scrollTimeline("left")}
          disabled={activeIndex === 0}
          className="timeline-arrow timeline-arrow--left"
          aria-label="Previous"
        >
          <ArrowBackIosIcon sx={{ fontSize: 16 }} />
        </button>

        <button
          type="button"
          onClick={() => scrollTimeline("right")}
          disabled={activeIndex === History.length - 1}
          className="timeline-arrow timeline-arrow--right"
          aria-label="Next"
        >
          <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
        </button>

        <div ref={scrollRef} className="timeline-scroll">
          <div
            className="timeline-grid"
            style={{
              gridTemplateColumns: `repeat(${History.length}, minmax(160px, 1fr))`,
            }}
          >
            {History.map((item, index) => {
              const isTop = index % 2 === 0;
              const isActive = index === activeIndex;
              return (
                <div key={`top-${index}`} className="timeline-cell-top">
                  {isTop ? (
                    <MiniCard
                      item={item}
                      isActive={isActive}
                      position="top"
                      onClick={() => setActiveIndex(index)}
                    />
                  ) : (
                    <div />
                  )}
                </div>
              );
            })}

            {History.map((item, index) => {
              const isActive = index === activeIndex;
              const isPast = index <= activeIndex;
              return (
                <div key={`dot-${index}`} className="timeline-cell-dot" data-dot>
                  <div className="timeline-line-segment">
                    <div className="timeline-line-segment-inner" />
                  </div>
                  <div className="timeline-dot-wrapper">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`timeline-dot ${
                        isPast ? "timeline-dot--past" : "timeline-dot--future"
                      } ${isActive ? "timeline-dot--active" : ""}`}
                      aria-label={`Select ${item.event}`}
                    />
                    {isActive ? <div className="timeline-pulse-ring" /> : null}
                  </div>
                </div>
              );
            })}

            {History.map((item, index) => {
              const isTop = index % 2 === 0;
              const isActive = index === activeIndex;
              return (
                <div key={`bottom-${index}`} className="timeline-cell-bottom">
                  {!isTop ? (
                    <MiniCard
                      item={item}
                      isActive={isActive}
                      position="bottom"
                      onClick={() => setActiveIndex(index)}
                    />
                  ) : (
                    <div />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="expanded-wrapper">
        <AnimatePresence>
          <ExpandedCard item={History[activeIndex]} />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Timeline;
