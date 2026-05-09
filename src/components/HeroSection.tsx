import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import ConsoleBrowserMockup from "@/components/ConsoleBrowserMockup";
import heroImage from "@/assets/SPX.svg";

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

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
        <motion.h1
          className="mb-4 max-w-3xl mx-auto text-center text-3xl font-bold tracking-tight text-foreground leading-tight sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {t.title}
        </motion.h1>

        <div className="flex w-full max-w-3xl flex-col items-center gap-5 text-center">
          <motion.p
            className="w-full text-center text-sm font-mono text-muted-foreground/70"
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
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1296px] px-6">
        <ConsoleBrowserMockup />
        <motion.div
          className="mt-12 flex items-center justify-center gap-8 font-mono text-xs text-muted-foreground/50 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span>{t.builtBy}</span>
          <span className="h-3 w-px bg-border" />
          <span>{t.proven}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
