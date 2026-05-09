import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/i18n/translations";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PRICING_LABEL_EN = "Pricing per AZ";
const PRICING_LABEL_FR = "Tarification par AZ";

const OfferComparisonSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].enterprise.comparison;
  const pricingLabel = lang === "fr" ? PRICING_LABEL_FR : PRICING_LABEL_EN;
  const priceRow = t.criteria.find((c) => c.label === pricingLabel);
  const criteriaWithoutPricing = t.criteria.filter((c) => c.label !== pricingLabel);

  return (
    <AnimatedSection id="offer-comparison" className="relative py-16">
      <div className="container mx-auto px-6">
        <Card className="border-border bg-card/80 overflow-hidden">
          <CardHeader className="pb-4">
            <p className="text-xs font-mono text-muted-foreground mb-1 tracking-wider uppercase">
              {t.tag}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {t.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">{t.subtitle}</p>
          </CardHeader>
          <CardContent className="p-0 pt-0">
            <div className="overflow-x-auto overflow-hidden rounded-lg">
              <Table className="rounded-lg">
                <TableHeader>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead
                      rowSpan={4}
                      className="w-[160px] sm:w-[180px] align-middle bg-transparent border-0 shadow-none"
                    />
                    <TableHead
                      colSpan={1}
                      className="min-w-[200px] text-center text-foreground font-semibold py-2.5 bg-muted/40 border-b border-border rounded-tl-lg"
                    >
                      {t.groupOss}
                    </TableHead>
                    <TableHead
                      colSpan={3}
                      className="text-center text-foreground font-semibold py-2.5 bg-white/10 border-b border-l border-border rounded-tr-lg"
                    >
                      {t.groupRayshift}
                    </TableHead>
                  </TableRow>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead
                      rowSpan={3}
                      className="min-w-[200px] align-middle border-r border-border bg-muted/40 border-b-2 border-white/20"
                    >
                      <div className="flex flex-col items-center justify-center py-8 px-4">
                        <span className="text-3xl font-bold text-foreground">{t.priceMain.oss}</span>
                      </div>
                    </TableHead>
                    <TableHead className="min-w-[200px] text-center text-foreground font-semibold text-base bg-white/[0.07] border-l border-border pt-4 pb-1 px-4">
                      {t.core}
                    </TableHead>
                    <TableHead className="min-w-[200px] text-center text-foreground font-semibold text-base bg-white/[0.07] border-border pt-4 pb-1 px-4">
                      {t.business}
                    </TableHead>
                    <TableHead className="min-w-[200px] text-center text-foreground font-semibold text-base bg-white/[0.07] border-border pt-4 pb-1 px-4">
                      {t.elite}
                    </TableHead>
                  </TableRow>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="min-w-[200px] text-center bg-white/[0.07] border-l border-border py-1 px-4">
                      <span className="text-2xl font-bold text-foreground">{t.priceMain.core}</span>
                      <span className="text-sm font-normal text-muted-foreground ml-0.5">{t.priceSuffix}</span>
                    </TableHead>
                    <TableHead className="min-w-[200px] text-center bg-white/[0.07] border-border py-1 px-4">
                      <span className="text-2xl font-bold text-foreground">{t.priceMain.business}</span>
                      <span className="text-sm font-normal text-muted-foreground ml-0.5">{t.priceSuffix}</span>
                    </TableHead>
                    <TableHead className="min-w-[200px] text-center bg-white/[0.07] border-border py-1 px-4">
                      <span className="text-2xl font-bold text-foreground">{t.priceMain.elite}</span>
                      <span className="text-sm font-normal text-muted-foreground ml-0.5">{t.priceSuffix}</span>
                    </TableHead>
                  </TableRow>
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="min-w-[200px] text-center text-muted-foreground text-xs bg-white/[0.07] border-l border-border pb-4 pt-1 border-b-2 border-white/20">
                      {t.billingNotePaid}
                    </TableHead>
                    <TableHead className="min-w-[200px] text-center text-muted-foreground text-xs bg-white/[0.07] border-border pb-4 pt-1 border-b-2 border-white/20">
                      {t.billingNotePaid}
                    </TableHead>
                    <TableHead className="min-w-[200px] text-center text-muted-foreground text-xs bg-white/[0.07] border-border pb-4 pt-1 border-b-2 border-white/20">
                      {t.billingNotePaid}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {criteriaWithoutPricing.map((row, i) => {
                    const isLastRow = i === criteriaWithoutPricing.length - 1;
                    return (
                      <TableRow
                        key={row.label}
                        className="border-border hover:bg-muted/10"
                      >
                        <TableCell
                          className={`font-medium text-foreground align-top py-4 whitespace-nowrap border-r border-border bg-card/50 ${isLastRow ? "rounded-bl-lg" : ""}`}
                        >
                          {row.label}
                        </TableCell>
                        <TableCell className="text-muted-foreground align-top py-4 text-sm min-w-[200px] bg-muted/30">
                          {row.oss}
                        </TableCell>
                        <TableCell className="text-muted-foreground align-top py-4 text-sm min-w-[200px] bg-white/[0.05] border-l border-white/10">
                          {row.core}
                        </TableCell>
                        <TableCell className="text-muted-foreground align-top py-4 text-sm min-w-[200px] bg-white/[0.05] border-border/80">
                          {row.business}
                        </TableCell>
                        <TableCell
                          className={`text-muted-foreground align-top py-4 text-sm min-w-[200px] bg-white/[0.05] border-border/80 ${isLastRow ? "rounded-br-lg" : ""}`}
                        >
                          {row.elite}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
};

export default OfferComparisonSection;
