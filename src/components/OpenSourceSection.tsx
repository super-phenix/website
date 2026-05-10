import { Github, Users, Shield, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/i18n/translations";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";

const icons = [Users, Shield, CheckCircle, Github];

const OpenSourceSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].openSource;

  return (
    <AnimatedSection id="open-source" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-4 tracking-wider uppercase">{t.tag}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{t.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{t.description}</p>
            <ul className="space-y-4">
              {t.items.map((text, i) => {
                const Icon = icons[i];
                return (
                  <li key={i} className="flex items-start gap-3">
                    <Icon className="h-4 w-4 text-foreground mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">{text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <Card className="border-border">
            <CardContent className="p-8 font-mono text-sm space-y-3">
              <p className="text-muted-foreground">
                <span className="text-foreground">$</span> git clone git@github.com:super-phenix/superphenix.git
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground">$</span> helm install charts.superphenix.net/superphenix-operator:latest
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground">$</span> kubectl apply -f superphenix/examples/cluster.yaml
              </p>
              <div className="border-t border-border pt-3 mt-3">
                <p className="text-muted-foreground/60 text-xs">{t.comment}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default OpenSourceSection;
