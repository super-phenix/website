import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";

const CredibilitySection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].credibility;

  return (
    <AnimatedSection className="relative pt-20 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono text-muted-foreground mb-4 tracking-wider uppercase">{t.tag}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{t.title}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">{t.description}</p>
          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            {t.items.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <p className="text-2xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CredibilitySection;
