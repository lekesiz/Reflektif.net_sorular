/**
 * 920+ Meslek Eşleşme Sistemi
 * - Tüm meslekleri kategoriye göre filtreleme
 * - Herhangi 3 meslek seçerek uygunluk oranı görme
 * - Her meslek için AI etki oranı ve RIASEC kodu
 * - Arama ve filtreleme
 */
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  ChevronDown,
  ChevronUp,
  Cpu,
  Briefcase,
  Star,
  AlertTriangle,
  TrendingUp,
  Filter,
  BarChart3,
} from "lucide-react";
import { professions, professionCategories, type Profession } from "@/data/professions";

interface ProfessionExplorerProps {
  lang: "tr" | "fr" | "en";
}

const uiStrings = {
  tr: {
    badge: "Meslek Keşfi",
    title: "920+ Meslek Eşleştirme",
    subtitle: "Tüm meslekleri keşfedin, istediğiniz 3 mesleği seçerek kişisel uygunluk analizinizi görün",
    searchPlaceholder: "Meslek ara...",
    allCategories: "Tüm Kategoriler",
    selected: "Seçili",
    selectUpTo3: "Uygunluk analizi için en fazla 3 meslek seçin",
    selectedProfessions: "Seçili Meslekler",
    clearAll: "Temizle",
    aiImpact: "AI Etkisi",
    riasecCode: "RIASEC",
    matchAnalysis: "Uygunluk Analizi",
    professionCount: "meslek",
    showMore: "Daha Fazla Göster",
    showLess: "Daha Az Göster",
    lowRisk: "Düşük Risk",
    mediumRisk: "Orta Risk",
    highRisk: "Yüksek Risk",
    matchReasons: "Eşleşme Nedenleri",
    aiStrategy: "AI Stratejisi",
    noResults: "Sonuç bulunamadı",
    personalityFit: "Kişilik Uyumu",
    interestFit: "İlgi Uyumu",
    valueFit: "Değer Uyumu",
    overallFit: "Genel Uyum",
    whyMatch: "Neden bu meslek size uygun olabilir?",
    aiSurvival: "AI çağında bu meslekte nasıl başarılı kalınır?",
  },
  en: {
    badge: "Career Explorer",
    title: "920+ Career Matching",
    subtitle: "Explore all professions, select up to 3 to see your personal compatibility analysis",
    searchPlaceholder: "Search professions...",
    allCategories: "All Categories",
    selected: "Selected",
    selectUpTo3: "Select up to 3 professions for compatibility analysis",
    selectedProfessions: "Selected Professions",
    clearAll: "Clear",
    aiImpact: "AI Impact",
    riasecCode: "RIASEC",
    matchAnalysis: "Compatibility Analysis",
    professionCount: "professions",
    showMore: "Show More",
    showLess: "Show Less",
    lowRisk: "Low Risk",
    mediumRisk: "Medium Risk",
    highRisk: "High Risk",
    matchReasons: "Match Reasons",
    aiStrategy: "AI Strategy",
    noResults: "No results found",
    personalityFit: "Personality Fit",
    interestFit: "Interest Fit",
    valueFit: "Value Fit",
    overallFit: "Overall Fit",
    whyMatch: "Why might this profession suit you?",
    aiSurvival: "How to stay successful in this profession in the AI era?",
  },
  fr: {
    badge: "Exploration des Métiers",
    title: "Correspondance 920+ Métiers",
    subtitle: "Explorez tous les métiers, sélectionnez jusqu'à 3 pour voir votre analyse de compatibilité",
    searchPlaceholder: "Rechercher un métier...",
    allCategories: "Toutes les Catégories",
    selected: "Sélectionné",
    selectUpTo3: "Sélectionnez jusqu'à 3 métiers pour l'analyse de compatibilité",
    selectedProfessions: "Métiers Sélectionnés",
    clearAll: "Effacer",
    aiImpact: "Impact IA",
    riasecCode: "RIASEC",
    matchAnalysis: "Analyse de Compatibilité",
    professionCount: "métiers",
    showMore: "Voir Plus",
    showLess: "Voir Moins",
    lowRisk: "Risque Faible",
    mediumRisk: "Risque Moyen",
    highRisk: "Risque Élevé",
    matchReasons: "Raisons de Correspondance",
    aiStrategy: "Stratégie IA",
    noResults: "Aucun résultat trouvé",
    personalityFit: "Compatibilité Personnalité",
    interestFit: "Compatibilité Intérêts",
    valueFit: "Compatibilité Valeurs",
    overallFit: "Compatibilité Globale",
    whyMatch: "Pourquoi ce métier pourrait vous convenir ?",
    aiSurvival: "Comment rester performant dans ce métier à l'ère de l'IA ?",
  },
};

// Simulated match reasons based on RIASEC code
function getMatchReasons(prof: Profession, lang: "tr" | "fr" | "en"): string[] {
  const reasons: Record<string, Record<string, string>> = {
    R: {
      tr: "Pratik ve el becerisi gerektiren görevlerde güçlü uyum",
      en: "Strong fit for practical, hands-on tasks",
      fr: "Forte compatibilité pour les tâches pratiques",
    },
    I: {
      tr: "Analitik düşünme ve araştırma yetkinliğiyle örtüşme",
      en: "Alignment with analytical thinking and research skills",
      fr: "Alignement avec la pensée analytique et la recherche",
    },
    A: {
      tr: "Yaratıcılık ve estetik duyarlılıkla yüksek uyum",
      en: "High compatibility with creativity and aesthetic sensitivity",
      fr: "Haute compatibilité avec la créativité et la sensibilité esthétique",
    },
    S: {
      tr: "İnsanlarla çalışma ve yardım etme motivasyonuyla eşleşme",
      en: "Match with motivation to work with and help people",
      fr: "Correspondance avec la motivation d'aider les gens",
    },
    E: {
      tr: "Liderlik ve girişimcilik potansiyeliyle uyum",
      en: "Compatibility with leadership and entrepreneurial potential",
      fr: "Compatibilité avec le potentiel de leadership",
    },
    C: {
      tr: "Düzen, detay odaklılık ve sistematik çalışma uyumu",
      en: "Fit with organization, detail-orientation and systematic work",
      fr: "Compatibilité avec l'organisation et le travail systématique",
    },
  };
  return prof.riasecCode.split("").map((c) => reasons[c]?.[lang] || "");
}

function getAIStrategy(prof: Profession, lang: "tr" | "fr" | "en"): string {
  if (prof.aiImpactPercent < 25) {
    const strategies = {
      tr: "Bu meslek, insan dokunuşunun ve empati gerektiren becerilerin ön planda olduğu bir alan. AI araçlarını verimliliği artırmak için kullanarak, temel insani yetkinliklerinizi güçlendirmeye odaklanın.",
      en: "This profession is an area where human touch and empathy-requiring skills are paramount. Focus on strengthening your core human competencies while using AI tools to boost efficiency.",
      fr: "Ce métier est un domaine où le contact humain et les compétences empathiques sont primordiaux. Concentrez-vous sur le renforcement de vos compétences humaines fondamentales.",
    };
    return strategies[lang];
  } else if (prof.aiImpactPercent < 50) {
    const strategies = {
      tr: "AI bu meslekte belirli görevleri otomatize edecek. Stratejik düşünme, yaratıcı problem çözme ve AI araçlarını etkin kullanma becerilerinizi geliştirerek rekabet avantajı elde edin.",
      en: "AI will automate certain tasks in this profession. Develop strategic thinking, creative problem-solving, and AI tool proficiency to gain a competitive advantage.",
      fr: "L'IA automatisera certaines tâches dans ce métier. Développez la pensée stratégique et la maîtrise des outils IA pour obtenir un avantage concurrentiel.",
    };
    return strategies[lang];
  } else {
    const strategies = {
      tr: "Bu meslek AI'dan yüksek oranda etkilenecek. AI ile işbirliği yapma, veri analizi ve AI sistemlerini yönetme becerilerini edinmek kritik. Mesleğe yeni yetkinlikler ekleyerek dönüşüme öncülük edin.",
      en: "This profession will be highly impacted by AI. Acquiring skills in AI collaboration, data analysis, and AI system management is critical. Lead the transformation by adding new competencies.",
      fr: "Ce métier sera fortement impacté par l'IA. Acquérir des compétences en collaboration IA et gestion de systèmes IA est critique. Menez la transformation en ajoutant de nouvelles compétences.",
    };
    return strategies[lang];
  }
}

function getAIRiskLabel(percent: number, lang: "tr" | "fr" | "en") {
  const t = uiStrings[lang];
  if (percent < 25) return { label: t.lowRisk, color: "text-emerald-600 bg-emerald-50" };
  if (percent < 50) return { label: t.mediumRisk, color: "text-amber-600 bg-amber-50" };
  return { label: t.highRisk, color: "text-red-600 bg-red-50" };
}

// Simulated compatibility score
function getCompatibilityScore(prof: Profession): { personality: number; interest: number; value: number; overall: number } {
  // Deterministic pseudo-random based on profession id
  const seed = prof.id * 7 + 13;
  const personality = 55 + ((seed * 3) % 40);
  const interest = 50 + ((seed * 5) % 45);
  const value = 52 + ((seed * 7) % 42);
  const overall = Math.round((personality * 0.35 + interest * 0.4 + value * 0.25));
  return { personality, interest, value, overall };
}

export default function ProfessionExplorer({ lang }: ProfessionExplorerProps) {
  const t = uiStrings[lang];
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProfessions, setSelectedProfessions] = useState<Profession[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [expandedProf, setExpandedProf] = useState<number | null>(null);

  const filteredProfessions = useMemo(() => {
    let filtered = professions;
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.nameTr.toLowerCase().includes(q) ||
          p.nameEn.toLowerCase().includes(q) ||
          p.riasecCode.toLowerCase().includes(q)
      );
    }
    return filtered;
  }, [search, selectedCategory]);

  const displayedProfessions = showAll ? filteredProfessions : filteredProfessions.slice(0, 30);

  const toggleSelect = (prof: Profession) => {
    setSelectedProfessions((prev) => {
      const exists = prev.find((p) => p.id === prof.id);
      if (exists) return prev.filter((p) => p.id !== prof.id);
      if (prev.length >= 3) return prev;
      return [...prev, prof];
    });
  };

  const isSelected = (id: number) => selectedProfessions.some((p) => p.id === id);

  const getName = (p: Profession) => (lang === "en" ? p.nameEn : p.nameTr);

  const getCategoryName = (key: string) => {
    const cat = professionCategories[key];
    if (!cat) return key;
    return cat[lang];
  };

  return (
    <section id="profession-explorer" className="border-t border-border/40 print:hidden">
      <div className="container py-16 sm:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            {t.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {t.title}
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Selected Professions Analysis */}
        <AnimatePresence>
          {selectedProfessions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-10 overflow-hidden"
            >
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    {t.selectedProfessions} ({selectedProfessions.length}/3)
                  </h3>
                  <button
                    onClick={() => setSelectedProfessions([])}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t.clearAll}
                  </button>
                </div>

                <div className="space-y-4">
                  {selectedProfessions.map((prof) => {
                    const scores = getCompatibilityScore(prof);
                    const risk = getAIRiskLabel(prof.aiImpactPercent, lang);
                    const isExpanded = expandedProf === prof.id;

                    return (
                      <div key={prof.id} className="rounded-lg border border-border/50 bg-card overflow-hidden">
                        <button
                          onClick={() => setExpandedProf(isExpanded ? null : prof.id)}
                          className="w-full p-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                              {scores.overall}%
                            </div>
                            <div className="text-left">
                              <p className="font-medium text-foreground text-sm">{getName(prof)}</p>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-xs text-muted-foreground font-mono">{prof.riasecCode}</span>
                                <span className={`text-xs px-1.5 py-0.5 rounded ${risk.color}`}>{risk.label}</span>
                              </div>
                            </div>
                          </div>
                          {isExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4 border-t border-border/30 pt-4">
                                {/* Compatibility Bars */}
                                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-4">
                                  {[
                                    { label: t.interestFit, value: scores.interest },
                                    { label: t.personalityFit, value: scores.personality },
                                    { label: t.valueFit, value: scores.value },
                                    { label: t.overallFit, value: scores.overall },
                                  ].map((item, i) => (
                                    <div key={i} className="text-center">
                                      <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                                        <div
                                          className={`h-full rounded-full ${i === 3 ? "bg-primary" : "bg-primary/60"}`}
                                          style={{ width: `${item.value}%` }}
                                        />
                                      </div>
                                      <p className="text-xs font-semibold text-foreground mt-1">{item.value}%</p>
                                    </div>
                                  ))}
                                </div>

                                {/* Match Reasons */}
                                <div className="mb-4">
                                  <p className="text-xs font-semibold text-foreground mb-2">{t.whyMatch}</p>
                                  <ul className="space-y-1">
                                    {getMatchReasons(prof, lang).filter(Boolean).map((reason, i) => (
                                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                        <span className="text-primary mt-0.5">•</span>
                                        {reason}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* AI Strategy */}
                                <div className="p-3 rounded-lg bg-muted/30 border border-border/30">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Cpu className="w-3.5 h-3.5 text-primary" />
                                    <p className="text-xs font-semibold text-foreground">{t.aiSurvival}</p>
                                  </div>
                                  <p className="text-xs text-muted-foreground leading-relaxed">
                                    {getAIStrategy(prof, lang)}
                                  </p>
                                  <div className="flex items-center gap-2 mt-2">
                                    <span className="text-xs text-muted-foreground">{t.aiImpact}:</span>
                                    <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden max-w-[120px]">
                                      <div
                                        className={`h-full rounded-full ${
                                          prof.aiImpactPercent < 25 ? "bg-emerald-500" :
                                          prof.aiImpactPercent < 50 ? "bg-amber-500" : "bg-red-500"
                                        }`}
                                        style={{ width: `${prof.aiImpactPercent}%` }}
                                      />
                                    </div>
                                    <span className="text-xs font-mono font-semibold text-foreground">%{prof.aiImpactPercent}</span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-2.5 rounded-lg border border-border bg-card text-sm text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 min-w-[200px]"
            >
              <option value="all">{t.allCategories}</option>
              {Object.entries(professionCategories).map(([key]) => (
                <option key={key} value={key}>{getCategoryName(key)}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Info bar */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-muted-foreground">
            {filteredProfessions.length} {t.professionCount}
            {selectedProfessions.length < 3 && (
              <span className="ml-2 text-primary">— {t.selectUpTo3}</span>
            )}
          </p>
        </div>

        {/* Profession Grid */}
        {displayedProfessions.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground text-sm">{t.noResults}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {displayedProfessions.map((prof) => {
              const selected = isSelected(prof.id);
              const risk = getAIRiskLabel(prof.aiImpactPercent, lang);
              return (
                <button
                  key={prof.id}
                  onClick={() => toggleSelect(prof)}
                  disabled={!selected && selectedProfessions.length >= 3}
                  className={`text-left p-3.5 rounded-lg border transition-all ${
                    selected
                      ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                      : "border-border/50 bg-card hover:border-primary/30 hover:bg-card/80"
                  } ${!selected && selectedProfessions.length >= 3 ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{getName(prof)}</p>
                      {lang !== "en" && (
                        <p className="text-xs text-muted-foreground truncate">{prof.nameEn}</p>
                      )}
                    </div>
                    {selected && (
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <Star className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs font-mono text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded">{prof.riasecCode}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded ${risk.color}`}>
                      {t.aiImpact} %{prof.aiImpactPercent}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Show More/Less */}
        {filteredProfessions.length > 30 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  {t.showLess}
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  {t.showMore} ({filteredProfessions.length - 30}+)
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
