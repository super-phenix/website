import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import ConsoleBrowserMockup from "@/components/ConsoleBrowserMockup";
import heroImage from "@/assets/SPX_black.svg";

/** Start of 1 September 2026 in the viewer's local timezone */
const OPEN_SOURCE_AT = new Date(2026, 8, 1, 0, 0, 0, 0);

function getCountdownParts(now: number) {
  const end = OPEN_SOURCE_AT.getTime();
  if (now >= end) {
    return { expired: true as const, d: 0, h: 0, m: 0, s: 0 };
  }
  const diff = end - now;
  const s = Math.floor(diff / 1000) % 60;
  const m = Math.floor(diff / (1000 * 60)) % 60;
  const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  return { expired: false as const, d, h, m, s };
}

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const openSource = translations[lang].openSource;
  const [tick, setTick] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setTick(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const countdown = getCountdownParts(tick);

  return (
    <section className="relative flex flex-col items-center overflow-hidden pb-14 sm:pb-16">
      <div className="relative z-10 mx-auto box-border flex min-h-[100svh] w-full max-w-[1296px] flex-col items-center justify-center px-6 pb-12 pt-16 text-center sm:pb-16 sm:pt-20">
        <motion.div
          className="mb-6 flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img src={heroImage} alt="" className="h-12 w-auto object-contain invert dark:invert-0 sm:h-14 md:h-16" />
        </motion.div>
        <h1 className="mb-4 max-w-3xl mx-auto text-center text-3xl font-bold tracking-tight text-foreground leading-tight sm:text-4xl md:text-5xl">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {t.title}
          </motion.span>
        </h1>

        <div className="flex w-full max-w-3xl flex-col items-center gap-5 text-center">
          <motion.p
            className="w-full text-center text-sm font-mono text-muted-foreground/70 dark:text-muted-foreground/90"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Button asChild size="lg">
              <a href="#superphenix">{t.cta1}</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://docs.superphenix.net" target="_blank" rel="noopener noreferrer">{t.cta2}</a>
            </Button>
          </motion.div>

          <motion.div
            className="w-full max-w-xl rounded-lg border border-border bg-muted/30 px-4 py-5 sm:px-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1">{openSource.countdownIntro}</p>
            <p className="font-mono text-sm text-foreground mb-4">{openSource.countdownDate}</p>
            {countdown.expired ? (
              <p className="text-sm font-medium text-foreground">{openSource.countdownLive}</p>
            ) : (
              <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                {(
                  [
                    [countdown.d, openSource.countdownDays],
                    [countdown.h, openSource.countdownHours],
                    [countdown.m, openSource.countdownMinutes],
                    [countdown.s, openSource.countdownSeconds],
                  ] as const
                ).map(([value, label]) => (
                  <div key={label}>
                    <div className="font-mono text-2xl sm:text-3xl font-semibold tabular-nums text-foreground">
                      {String(value).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">{label}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1296px] px-6">
        <ConsoleBrowserMockup />
        <motion.div
          className="mt-6 flex items-center justify-center gap-8 font-mono text-xs text-muted-foreground/70 dark:text-muted-foreground/85 sm:mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span>{t.builtBy}</span>
          <span className="h-3 w-px bg-border/80 dark:bg-border/95" />
          <span>{t.proven}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
