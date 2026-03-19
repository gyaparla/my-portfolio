import React, { useEffect, useRef, useState } from "react";

const Timeline = ({
  items,
  renderItem,
  layout = "horizontal",
  overlap = 0,
  onItemClick,
}) => {
  const containerRef = useRef(null);

  // Mount to trigger animations
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const onWheel = (e) => {
    if (layout === "horizontal" && containerRef.current) {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY;
    }
  };

  // Make item delays scale with item count & line duration
  const lineDuration = 6000;
  const step = items.length
    ? Math.floor(lineDuration / (items.length + 1))
    : 600;
  const baseDelay = 400;

  const isHorizontal = layout === "horizontal";

  const renderDefaultItem = (item, idx, isLeft, delay) => (
    <div
      role={onItemClick ? "button" : undefined}
      tabIndex={onItemClick ? 0 : undefined}
      onClick={onItemClick ? () => onItemClick(item) : undefined}
      onKeyDown={
        onItemClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onItemClick(item);
            }
          : undefined
      }
      className={`snap-start w-full sm:w-[430px] p-6 rounded-3xl border border-white/10 bg-gray-900/50 backdrop-blur-xl shadow-[0_20px_35px_rgba(0,0,0,0.3)] ${
        isHorizontal ? "min-w-[320px]" : isLeft ? "sm:ml-0" : "sm:mr-0"
      } md:ml-10 md:mr-10 transform transition duration-300 hover:-translate-y-1 hover:bg-white/10 ${
        onItemClick ? "cursor-pointer" : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-white">
            {item.company || item.school}
          </h2>
          <p className="text-sm text-gray-300">{item.role || item.degree}</p>
        </div>
        <span className="text-xs text-gray-400">{item.date}</span>
      </div>

      <p className="mt-4 text-gray-300 text-sm line-clamp-3">{item.desc}</p>

      {item.skills && (
        <div className="mt-4">
          <h5 className="text-sm font-medium text-gray-200">Skills</h5>
          <ul className="flex flex-wrap gap-2 mt-2">
            {item.skills.map((skill, index) => (
              <li
                key={index}
                className="px-3 py-1 text-xs text-gray-200 rounded-full bg-white/10"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  const itemRenderer = renderItem ?? renderDefaultItem;

  return (
    <section className="relative mx-auto my-24 max-w-[1200px] px-4">
      <div
        ref={containerRef}
        onWheel={onWheel}
        className={
          (isHorizontal
            ? "relative flex w-full items-end overflow-x-auto pb-12 scroll-smooth snap-x snap-mandatory pl-10 pr-10 hide-scrollbar"
            : "relative z-10") +
          (mounted ? " opacity-100" : " opacity-0") +
          " transition-opacity duration-500"
        }
      >
        {items.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          const delay = baseDelay + idx * step;

          return (
            <div
              key={`${item.company || item.school}-${idx}`}
              className={
                isHorizontal
                  ? "flex-shrink-0 snap-start relative"
                  : `flex flex-col sm:flex-row items-center mb-16 ${
                      isLeft ? "sm:justify-start" : "sm:justify-end"
                    }`
              }
              style={
                isHorizontal
                  ? {
                      zIndex: 100 + idx,
                      marginLeft: idx === 0 ? 0 : overlap,
                    }
                  : undefined
              }
            >
              {isHorizontal ? null : (
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 p-1">
                  <img
                    src={item.img}
                    alt={`${item.company || item.school} logo`}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              )}

              {itemRenderer(item, idx, isLeft, delay)}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
