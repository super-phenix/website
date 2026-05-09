import logo from "@/assets/SPX.svg";
import { Github, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/i18n/translations";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FooterCTA = () => {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer id="contact" className="relative py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">{t.description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="https://rayshift.net" target="_blank" rel="noopener noreferrer">
                {t.ctaEmail} <ArrowUpRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/super-phenix" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" /> {t.ctaGithub}
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Superphenix" className="h-5 opacity-70 invert dark:invert-0" />
            <span className="text-xs text-muted-foreground">{t.rights}</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="https://docs.superphenix.net" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
              {t.docs} <ArrowUpRight className="h-3 w-3" />
            </a>
            <a href="https://github.com/super-phenix" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
              {t.github} <ArrowUpRight className="h-3 w-3" />
            </a>
            <a href="https://rayshift.net" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
              Enterprise Support <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
