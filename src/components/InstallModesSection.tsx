import { Layers3, SplitSquareVertical, Map } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/i18n/translations";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";

const icons = [Layers3, SplitSquareVertical, Map];

const InstallModesSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].installModes;

  return (
    <AnimatedSection id="install-modes" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono text-muted-foreground mb-4 tracking-wider uppercase">{t.tag}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5">{t.title}</h2>
          <p className="text-muted-foreground">{t.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <AnimatedItem key={item.title} index={i}>
                <Card className="h-full border-border hover:border-foreground/15 transition-all duration-300">
                  <CardHeader>
                    <Icon className="h-5 w-5 text-foreground mb-2" />
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default InstallModesSection;
