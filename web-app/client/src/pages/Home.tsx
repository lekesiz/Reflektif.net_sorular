/*
 * DESIGN: Editorial / Dergi Düzeni
 * Home: Ana sayfa - Hero, Özet Tablosu, Tab Navigasyonu, Test Bölümleri, Bilimsel Temel, Footer
 * Playfair Display (başlıklar) + DM Sans (gövde)
 * Koyu indigo vurgu rengi, saf beyaz zemin
 * Özellikler: Dil değiştirme (TR/FR/EN), Arama/Filtreleme, PDF İndirme
 */

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Users, Brain, Heart, ArrowUp, Mail, MapPin, Globe, Search, Download, X, Languages } from "lucide-react";
import { testsData, uiStrings } from "@/data/questions";
import type { Language } from "@/data/questions";
import TestSection from "@/components/TestSection";
import AIProfSection from "@/components/AIProfSection";
import ProfessionExplorer from "@/components/ProfessionExplorer";
import AIChatDemo from "@/components/AIChatDemo";

const tabConfig = [
  { id: "riasec", label: "RIASEC", icon: Brain, accent: "#3730A3" },
  { id: "bigfive", label: "Big Five", icon: Users, accent: "#1E40AF" },
  { id: "values", label: { tr: "Değerler", fr: "Valeurs", en: "Values" } as Record<Language, string>, icon: Heart, accent: "#7E22CE" },
];

const langLabels: Record<Language, string> = { tr: "TR", fr: "FR", en: "EN" };
const langFull: Record<Language, string> = { tr: "Türkçe", fr: "Français", en: "English" };

export default function Home() {
  const [activeTab, setActiveTab] = useState("riasec");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [language, setLanguage] = useState<Language>("tr");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [isPdfLoading, setIsPdfLoading] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const t = uiStrings[language];
  const activeTest = testsData.find((td) => td.id === activeTab)!;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (contentRef.current) {
      const offset = contentRef.current.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const getTabLabel = (tab: typeof tabConfig[0]) => {
    if (typeof tab.label === "string") return tab.label;
    return tab.label[language];
  };

  const handleDownloadPdf = useCallback(() => {
    setIsPdfLoading(true);
    setTimeout(() => {
      window.print();
      setIsPdfLoading(false);
    }, 300);
  }, []);

  // Toplam arama sonucu
  const totalSearchResults = searchTerm.length >= 2
    ? testsData.reduce((total, test) =>
        total + test.subCategories.reduce((acc, sub) => {
          const term = searchTerm.toLowerCase();
          return acc + sub.questions.filter((q) =>
            q.textTr.toLowerCase().includes(term) ||
            q.textFr.toLowerCase().includes(term) ||
            q.textEn.toLowerCase().includes(term)
          ).length;
        }, 0)
      , 0)
    : 110;

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40 print:static print:border-b-0">
        <div className="container flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg sm:text-xl font-bold text-foreground tracking-tight">
              {t.siteTitle}
            </span>
            <span className="text-xs text-muted-foreground font-medium">.net</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Dil Değiştirici */}
            <div className="flex items-center gap-0.5 bg-muted/40 rounded-full p-0.5 print:hidden">
              {(["tr", "fr", "en"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  title={langFull[lang]}
                  className={`
                    px-2 sm:px-2.5 py-1 text-[10px] sm:text-xs font-medium rounded-full transition-all duration-200
                    ${language === lang
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  {langLabels[lang]}
                </button>
              ))}
            </div>

            {/* Arama Butonu */}
            <button
              onClick={() => { setShowSearch(!showSearch); if (showSearch) setSearchTerm(""); }}
              className="p-2 rounded-full hover:bg-muted/50 transition-colors print:hidden"
              aria-label="Search"
            >
              {showSearch ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
            </button>

            {/* PDF İndir Butonu */}
            <button
              onClick={handleDownloadPdf}
              disabled={isPdfLoading}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-full border border-border/60 hover:bg-muted/30 transition-colors print:hidden disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isPdfLoading ? t.downloadingPdf : t.downloadPdf}</span>
            </button>

            {/* Soru/Test sayısı */}
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground ml-1">
              <FileText className="w-3.5 h-3.5" />
              <span>{t.questionCount}</span>
              <span className="mx-0.5 text-border">|</span>
              <span>{t.testCount}</span>
            </div>
          </div>
        </div>

        {/* Arama Çubuğu */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-border/30"
            >
              <div className="container py-3">
                <div className="relative max-w-xl">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    className="w-full pl-10 pr-10 py-2.5 text-sm bg-muted/20 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all placeholder:text-muted-foreground/60"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-muted/50"
                    >
                      <X className="w-3.5 h-3.5 text-muted-foreground" />
                    </button>
                  )}
                </div>
                {searchTerm.length >= 2 && (
                  <p className="text-xs text-muted-foreground mt-2">
                    {totalSearchResults > 0
                      ? `${totalSearchResults} ${t.searchResults}`
                      : t.noResults}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden print:py-8">
        {/* Arka plan deseni */}
        <div className="absolute inset-0 opacity-[0.03] print:hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/Wf28C7YSdBJR86NVxiW7bx/hero-bg-azdjvBWnU4cjtnuY9EF4AK.webp")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="container relative py-16 sm:py-20 lg:py-28 print:py-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4 sm:mb-5">
              {t.preparedFor}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight print:text-3xl">
              {t.heroTitle1}
              <br />
              <span className="text-primary/80">{t.heroTitle2}</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mt-5 sm:mt-6 max-w-xl leading-relaxed print:text-sm">
              {t.heroDesc}
            </p>
          </motion.div>

          {/* Özet Tablosu */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 sm:mt-14 print:mt-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl">
              {testsData.map((test, idx) => {
                const config = tabConfig[idx];
                const Icon = config.icon;
                return (
                  <button
                    key={test.id}
                    onClick={() => handleTabChange(test.id)}
                    className="group text-left p-4 sm:p-5 rounded-lg border border-border/60 bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-300 print:p-3"
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <div
                        className="w-8 h-8 rounded-md flex items-center justify-center print:hidden"
                        style={{ backgroundColor: config.accent + "10" }}
                      >
                        <Icon className="w-4 h-4" style={{ color: config.accent }} />
                      </div>
                      <span className="text-sm font-semibold text-foreground">{test.title[language]}</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{t.questionNumber}</span>
                        <span className="font-medium text-foreground">{test.questionCount}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{t.duration}</span>
                        <span className="font-medium text-foreground">{test.duration[language]}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{t.dimensions}</span>
                        <span className="font-medium text-foreground">{test.subCategories.length}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Toplam özet */}
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground max-w-3xl">
              <span>
                <strong className="text-foreground font-semibold">{t.total}:</strong> 110 {t.questions}
              </span>
              <span>28-35 {language === "tr" ? "dakika" : language === "fr" ? "minutes" : "minutes"}</span>
              <span>17 {language === "tr" ? "boyut" : "dimensions"}</span>
              <span>{t.preparedBy}</span>
              <span>{t.date}</span>
            </div>
          </motion.div>
        </div>

        {/* Alt çizgi */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* Tab Navigasyonu */}
      <div ref={contentRef} className="sticky top-14 sm:top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border/40 print:static print:border-b-0">
        <div className="container">
          <nav className="flex gap-0 -mb-px" role="tablist">
            {tabConfig.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabChange(tab.id)}
                  className={`
                    relative flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 text-sm font-medium transition-colors duration-200
                    ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground/70"}
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{getTabLabel(tab)}</span>
                  <span className="sm:hidden text-xs">{getTabLabel(tab)}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ backgroundColor: tab.accent }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Test İçeriği */}
      <main className="container py-8 sm:py-12 print:py-4">
        <AnimatePresence mode="wait">
          <TestSection key={activeTab} test={activeTest} language={language} searchTerm={searchTerm} />
        </AnimatePresence>
      </main>

        {/* AI-Prof Detay Bölümü */}
      <AIProfSection lang={language} />

      {/* 920+ Meslek Eşleştirme Sistemi */}
      <ProfessionExplorer lang={language} />

      {/* AI Sohbet - 7+7+7 Reflektif Sorular */}
      <AIChatDemo lang={language} />

      {/* Bilimsel Temel */}
      <section className="border-t border-border/40 bg-muted/20">
        <div className="container py-12 sm:py-16 print:py-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8 print:text-xl">
            {t.scientificBasisTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testsData.map((test) => (
              <div key={test.id} className="p-5 sm:p-6 rounded-lg border border-border/50 bg-card print:p-3">
                <h3 className="font-semibold text-foreground text-sm mb-3">{test.title[language]}</h3>
                <p className="text-xs text-muted-foreground italic leading-relaxed mb-3">
                  {test.scientificBasis.source}
                </p>
                <div className="space-y-1.5">
                  <p className="text-xs">
                    <span className="text-muted-foreground">{t.reliability}: </span>
                    <span className="text-foreground font-medium">{test.scientificBasis.reliability[language]}</span>
                  </p>
                  <p className="text-xs">
                    <span className="text-muted-foreground">{t.usage}: </span>
                    <span className="text-foreground font-medium">{test.scientificBasis.usage[language]}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kullanım Bilgisi */}
      <section className="border-t border-border/40">
        <div className="container py-12 sm:py-16 print:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 print:text-xl">
                {t.usageInfoTitle}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {t.usageInfoDesc}
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Languages className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.languages}</p>
                    <p className="text-xs text-muted-foreground">{t.languagesValue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.aiIntegration}</p>
                    <p className="text-xs text-muted-foreground">{t.aiIntegrationValue}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">{t.contact}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Reflektif Bilişim A.Ş.</p>
                    <p className="text-xs text-muted-foreground">Zaim Teknopark, İstanbul</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-foreground">contact@reflektif.net</p>
                    <p className="text-xs text-muted-foreground">CTO: Mikail Lekesiz — mikail@reflektif.net</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <a
                    href="https://reflektif.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    reflektif.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/10">
        <div className="container py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>
              {t.preparedBy} (Mikail Lekesiz) — {t.date}
            </p>
            <p>
              {t.footerPrepared}
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow print:hidden"
            aria-label={t.scrollTop}
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
