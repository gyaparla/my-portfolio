import React, { useEffect, useState } from "react";

const Timeline = ({ items }) => {
  // Mount to trigger animations
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Make item delays scale with item count & line duration
  const lineDuration = 6000;
  const step = items.length
    ? Math.floor(lineDuration / (items.length + 1))
    : 600;
  const baseDelay = 400;

  return (
    <section className="relative mx-auto my-24 max-w-[1200px] px-4">
      {/* Vertical timeline line (animated with scaleY) */}
      <div
        className={[
          "pointer-events-none absolute top-0 bottom-0 w-[6px] bg-white",
          "origin-top transition-transform duration-[6000ms] ease-linear z-0",
          mounted ? "scale-y-100" : "scale-y-0",
          "left-[31px] lg:left-1/2 lg:-translate-x-1/2",
        ].join(" ")}
      />

      <div className="relative z-10">
        {items.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          const delay = baseDelay + idx * step;

          return (
            <div
              key={`${item.company}-${idx}`}
              className={[
                "relative w-full py-2 bg-gray",
                "lg:w-1/2",
                isLeft ? "lg:pr-16" : "lg:pl-16 lg:ml-auto",
                "pl-[80px] pr-6 lg:px-0",
              ].join(" ")}
            >
              {/* Node image on the line */}
              <img
                src={item.img}
                alt={`${item.title} logo`}
                className={[
                  "absolute top-8 z-20 w-10 h-10 rounded-full object-cover bg-white border-2 border-primary -left-0",
                  isLeft ? "lg:left-auto lg:right-[-20px]" : "lg:left-[-20px]",
                ].join(" ")}
              />

              {/* Card */}
              <div
                className={[
                  "relative rounded-md bg-gray-900 border-4 border-white p-5 text-gray-900 shadow",
                  "transition-all duration-700",
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                ].join(" ")}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* Arrow towards the timeline */}
                <span className="lg:hidden absolute top-7 -left-[19px] border-y-[15px] border-y-transparent border-r-[15px] border-r-white" />
                {isLeft ? (
                  <span className="hidden lg:block absolute top-7 -right-[19px] border-y-[15px] border-y-transparent border-l-[15px] border-l-white" />
                ) : (
                  <span className="hidden lg:block absolute top-7 -left-[19px] border-y-[15px] border-y-transparent border-r-[15px] border-r-white" />
                )}
                <h2 className="text-xl sm:text-xl font-semibold text-white">
                  {item.company}
                </h2>
                <h2 className="text-md sm:text-sm text-gray-300">
                  {item.role}
                </h2>
                <small className="text-sm text-gray-500 mt-2">
                  {item.date}
                </small>
                <p className="mt-4 text-gray-400">{item.desc}</p>
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {item?.skills?.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
