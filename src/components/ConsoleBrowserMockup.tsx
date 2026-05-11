import * as React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const CONSOLE_URL = "https://console.superphenix.net";
const DASHBOARD_LIGHT = "/dashboard-light.png";
const DASHBOARD_DARK = "/dashboard-dark.png";

const ConsoleBrowserMockup = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch: render a stable light preview until mounted.
  const isDark = mounted && resolvedTheme === "dark";
  const dashboardSrc = isDark ? DASHBOARD_DARK : DASHBOARD_LIGHT;

  return (
    <motion.div
      className="mx-auto w-full max-w-[1296px] px-0 sm:px-2"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="overflow-hidden rounded-xl border border-border/80 bg-card/90 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06] dark:shadow-[0_24px_80px_-12px_rgba(0,0,0,0.65)] dark:ring-white/[0.06]">
        <div className="flex items-center gap-2 border-b border-border bg-muted/25 px-3 py-2.5 sm:gap-3 sm:px-4">
          <div className="flex shrink-0 gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/90" />
          </div>
          <div className="min-w-0 flex-1 flex justify-center">
            <div className="flex w-full max-w-xl items-center justify-center rounded-lg border border-border bg-background/90 px-3 py-2 shadow-inner">
              <span className="w-full truncate text-center font-mono text-[11px] sm:text-xs text-muted-foreground tabular-nums">
                {CONSOLE_URL}
              </span>
            </div>
          </div>
          <span className="w-9 shrink-0" aria-hidden />
        </div>
        <div
          className={cn(
            "relative aspect-[1440/800] transition-colors duration-300",
            isDark ? "bg-[#0c0c0c]" : "bg-[#f4f4f5]",
          )}
        >
          <img
            key={dashboardSrc}
            src={dashboardSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top"
            width={1440}
            height={800}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ConsoleBrowserMockup;
