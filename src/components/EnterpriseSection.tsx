import { Building2, Headphones, Map, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/i18n/translations";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";

const icons = [Building2, Headphones, Map];

const EnterpriseSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].enterprise;

  return (
    <AnimatedSection id="enterprise" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono text-muted-foreground mb-4 tracking-wider uppercase">{t.tag}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{t.title}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{t.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <AnimatedItem key={i} index={i}>
                <Card className="h-full border-border hover:border-foreground/15 transition-all duration-300">
                  <CardHeader>
                    <Icon className="h-5 w-5 text-foreground mb-2" />
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedItem>
            );
          })}
        </div>

        <Card className="border-border bg-card/80">
          <CardContent className="p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{t.ctaTitle}</h3>
              <p className="text-sm text-muted-foreground">{t.ctaDesc}</p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <a href="https://rayshift.net" target="_blank" rel="noopener noreferrer">
                {t.ctaButton} <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
};

export default EnterpriseSection;
