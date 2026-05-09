import { Box, GitBranch, Layers, Terminal } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/i18n/translations";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";

const icons = [Layers, Box, Terminal, GitBranch];

const PlatformSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].platform;

  return (
    <AnimatedSection id="superphenix" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-4 tracking-wider uppercase">{t.tag}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{t.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{t.description}</p>
            <p className="text-muted-foreground leading-relaxed">{t.origin}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {t.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <AnimatedItem key={i} index={i}>
                  <Card className="h-full border-border hover:border-foreground/15 transition-all duration-300">
                    <CardHeader className="pb-2">
                      <Icon className="h-5 w-5 text-foreground mb-2" />
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </AnimatedItem>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PlatformSection;
