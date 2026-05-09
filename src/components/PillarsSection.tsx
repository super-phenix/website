import { Cloud, HardDrive, Network, Eye, Cpu, GitFork } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/i18n/translations";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";

const icons = [Cpu, Cloud, HardDrive, Network, GitFork, Eye];

const PillarsSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].pillars;

  return (
    <AnimatedSection id="pillars" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono text-muted-foreground mb-4 tracking-wider uppercase">{t.tag}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t.title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((pillar, i) => {
            const Icon = icons[i];
            return (
              <AnimatedItem key={i} index={i}>
                <Card className="h-full border-border hover:border-foreground/15 transition-all duration-300 group">
                  <CardHeader>
                    <Icon className="h-5 w-5 text-foreground mb-2 group-hover:opacity-90 transition-opacity" />
                    <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
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

export default PillarsSection;
