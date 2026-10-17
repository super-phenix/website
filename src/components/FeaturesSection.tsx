import { Server, Database, Network, Layers } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/i18n/translations";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";

const iaasIcons = [Server, Database, Network];

const FeaturesSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].features;
  const iaasItems = t.items.slice(0, 3);
  const paasItem = t.items[3];

  return (
    <AnimatedSection id="features" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-mono text-muted-foreground mb-4 tracking-wider uppercase">{t.tag}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5">{t.title}</h2>
          <p className="text-muted-foreground">{t.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {iaasItems.map((item, i) => {
            const Icon = iaasIcons[i];
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

        {paasItem && (
          <AnimatedItem index={3} className="mt-6">
            <Card className="border-border hover:border-foreground/15 transition-all duration-300">
              <CardHeader className="sm:flex-row sm:items-start sm:gap-6 sm:space-y-0">
                <Layers className="h-5 w-5 shrink-0 text-foreground sm:mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-foreground">{paasItem.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{paasItem.desc}</p>
                </div>
              </CardHeader>
            </Card>
          </AnimatedItem>
        )}
      </div>
    </AnimatedSection>
  );
};

export default FeaturesSection;
