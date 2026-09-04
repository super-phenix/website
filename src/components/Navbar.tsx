import { Github } from "lucide-react";
import logo from "@/assets/favicon.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const { lang, toggle } = useLanguage();
  const t = translations[lang].nav;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <a href="https://superphenix.net/" aria-label="Superphenix">
            <img src={logo} alt="Superphenix" className="h-10 w-auto dark:invert" />
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#superphenix" className="hover:text-foreground transition-colors">{t.platform}</a>
            <a href="#pillars" className="hover:text-foreground transition-colors">{t.architecture}</a>
            <a href="https://docs.superphenix.net" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">{t.docs}</a>
            <a
              href="https://github.com/super-phenix/superphenix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Github className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
              {t.github}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle labelLight={t.themeToLight} labelDark={t.themeToDark} />
          <Button variant="outline" size="sm" onClick={toggle} className="font-mono">
            {lang === "en" ? "FR" : "EN"}
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <a href="https://rayshift.net" target="_blank" rel="noopener noreferrer">{t.contact}</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
