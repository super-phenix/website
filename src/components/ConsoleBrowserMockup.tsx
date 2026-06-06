import * as React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const DASHBOARD_LIGHT = "/dashboard-light.png";
const DASHBOARD_DARK = "/dashboard-dark.png";
const INSTANCES_LIGHT = "/instances-light.png";
const INSTANCES_DARK = "/instances-dark.png";
const ORGANIZATION_LIGHT = "/organization-light.png";
const ORGANIZATION_DARK = "/organization-dark.png";

const THEME_AWARE_SLIDES = [
  { light: DASHBOARD_LIGHT, dark: DASHBOARD_DARK, alt: "SPX dashboard" },
  { light: INSTANCES_LIGHT, dark: INSTANCES_DARK, alt: "SPX compute instances dashboard" },
  { light: ORGANIZATION_LIGHT, dark: ORGANIZATION_DARK, alt: "SPX organization settings" },
] as const;

const SLIDE_COUNT = THEME_AWARE_SLIDES.length;
const CAROUSEL_INTERVAL_MS = 3000;

const ConsoleBrowserMockup = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDE_COUNT);
    }, CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  // Avoid hydration mismatch: render a stable light preview until mounted.
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <motion.div
      className="mx-auto w-full max-w-[1296px] px-0 sm:px-2"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="overflow-hidden rounded-xl border border-border/80 bg-card/90 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06] dark:shadow-[0_24px_80px_-12px_rgba(0,0,0,0.65)] dark:ring-white/[0.06]">
        <div className="flex items-center border-b border-border bg-muted/25 px-2 py-[14px]">
          <div className="ml-1 flex shrink-0 gap-1.5" aria-hidden>
            <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]/90" />
            <span className="h-[10px] w-[10px] rounded-full bg-[#febc2e]/90" />
            <span className="h-[10px] w-[10px] rounded-full bg-[#28c840]/90" />
          </div>
        </div>
        <div
          className={cn(
            "relative aspect-[1440/800] transition-colors duration-300",
            isDark ? "bg-[#0c0c0c]" : "bg-[#f4f4f5]",
          )}
        >
          {THEME_AWARE_SLIDES.map(({ light, dark, alt }, index) => (
            <motion.img
              key={light}
              src={isDark ? dark : light}
              alt={alt}
              aria-hidden={activeIndex !== index}
              className="absolute inset-0 h-full w-full object-cover object-top"
              width={1440}
              height={800}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              animate={{ opacity: activeIndex === index ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ConsoleBrowserMockup;
