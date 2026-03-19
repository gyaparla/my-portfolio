import React, { useEffect, useRef } from "react";
import { SkillsCloud } from "../../constants";
import { Title } from "../Utilities";

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const randomBetween = (min, max) => Math.random() * (max - min) + min;

const getInitialVelocity = (size) => {
  const speed = clamp(0.015 * (80 - size) + 0.3, 0.15, 0.9); // smaller = faster
  const angle = Math.random() * Math.PI * 2;
  return { x: Math.cos(angle) * speed, y: Math.sin(angle) * speed };
};

const Skills = () => {
  const containerRef = useRef(null);
  const moleculesRef = useRef([]);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const initMolecules = () => {
      const rect = container.getBoundingClientRect();
      const center = { x: rect.width / 2, y: rect.height / 2 };
      const radius = Math.min(rect.width, rect.height) / 2;

      moleculesRef.current = SkillsCloud.map((item, index) => {
        const el = container.querySelector(`[data-skill-index="${index}"]`);
        if (!el) return null;

        // Center the bubble at the provided percentage positions.
        const basePos = {
          x: (item.x / 100) * rect.width,
          y: (item.y / 100) * rect.height,
        };

        // Ensure the bubble is centered around the point
        el.style.left = `${basePos.x}px`;
        el.style.top = `${basePos.y}px`;
        el.style.transform = "translate(-50%, -50%)";

        const radiusBubble = item.size / 2;

        return {
          el,
          basePos,
          offset: { x: 0, y: 0 },
          vel: getInitialVelocity(item.size),
          radiusBubble,
          speedScale: clamp(0.3 + (80 - item.size) * 0.01, 0.4, 1.1),
          jitter: randomBetween(0.2, 0.6),
        };
      }).filter(Boolean);

      return { center, radius };
    };

    let bounds = initMolecules();

    const onResize = () => {
      bounds = initMolecules();
    };

    const handleAnimation = (time) => {
      const dt = Math.min((time - lastTimeRef.current) / 16.67, 2);
      lastTimeRef.current = time;

      const rect = container.getBoundingClientRect();
      const center = { x: rect.width / 2, y: rect.height / 2 };
      const maxRadius = Math.min(rect.width, rect.height) / 2;

      moleculesRef.current.forEach((molecule) => {
        if (!molecule) return;

        const { el, basePos, radiusBubble } = molecule;
        const maxDist = maxRadius - radiusBubble - 4; // avoid clipping

        // Add a tiny jitter to velocity for organic movement.
        if (Math.random() < 0.025) {
          molecule.vel.x += randomBetween(-0.04, 0.04);
          molecule.vel.y += randomBetween(-0.04, 0.04);
        }

        // Apply slight damping to keep movement natural.
        molecule.vel.x *= 0.995;
        molecule.vel.y *= 0.995;

        // Step
        molecule.offset.x += molecule.vel.x * molecule.speedScale * dt * 16;
        molecule.offset.y += molecule.vel.y * molecule.speedScale * dt * 16;

        // Current absolute position (center of bubble)
        const absX = basePos.x + molecule.offset.x;
        const absY = basePos.y + molecule.offset.y;

        const dx = absX - center.x;
        const dy = absY - center.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > maxDist && dist > 0) {
          const normalX = dx / dist;
          const normalY = dy / dist;

          // Reflect velocity (bounce)
          const dot = molecule.vel.x * normalX + molecule.vel.y * normalY;
          molecule.vel.x -= 2 * dot * normalX;
          molecule.vel.y -= 2 * dot * normalY;

          // Dampen to avoid jitter
          molecule.vel.x *= 0.9;
          molecule.vel.y *= 0.9;

          // Clamp position back inside the container.
          const clampedX = center.x + normalX * maxDist;
          const clampedY = center.y + normalY * maxDist;
          molecule.offset.x = clampedX - basePos.x;
          molecule.offset.y = clampedY - basePos.y;
        }

        // Apply transform (keeping center alignment)
        el.style.transform = `translate(-50%, -50%) translate(${molecule.offset.x.toFixed(2)}px, ${molecule.offset.y.toFixed(2)}px)`;
      });

      rafRef.current = requestAnimationFrame(handleAnimation);
    };

    rafRef.current = requestAnimationFrame(handleAnimation);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <Title
            name={"SKILLS & EXPERIENCE"}
            description={
              "Main area of my expertise is front-end development (client side of the web). I build high-quality user interfaces, focus on responsive design, and create seamless interactions."
            }
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            I work with modern frontend stacks to build fast, accessible, and
            maintainable applications. Below is a visual snapshot of the
            technologies I use most frequently.
          </p>
        </div>

        <div className="relative">
          <div ref={containerRef} className="word-cloud">
            {SkillsCloud.map(({ label, x, y, size, bg, text }, index) => (
              <div
                key={label}
                data-skill-index={index}
                className={`absolute flex items-center justify-center rounded-full cursor-default shadow-[0_15px_30px_rgba(0,0,0,0.35)] ${bg} ${text}`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  fontSize: `${Math.max(12, size / 6)}px`,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
