/*
 * DESIGN: Editorial / Dergi Düzeni
 * Home: Ana sayfa - Hero, Özet Tablosu, Tab Navigasyonu, Test Bölümleri, Bilimsel Temel, Footer
 * Playfair Display (başlıklar) + DM Sans (gövde)
 * Koyu indigo vurgu rengi, saf beyaz zemin
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Users, Brain, Heart, ArrowUp, Mail, MapPin, Globe } from "lucide-react";
import { testsData } from "@/data/questions";
import TestSection from "@/components/TestSection";

const tabConfig = [
  { id: "riasec", label: "RIASEC", icon: Brain, accent: "#3730A3" },
  { id: "bigfive", label: "Big Five", icon: Users, accent: "#1E40AF" },
  { id: "values", label: "Değerler", icon: Heart, accent: "#7E22CE" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("riasec");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeTest = testsData.find((t) => t.id === activeTab)!;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (contentRef.current) {
      const offset = contentRef.current.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
        <div className="container flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg sm:text-xl font-bold text-foreground tracking-tight">
              reflektif
            </span>
            <span className="text-xs text-muted-foreground font-medium">.net</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">110 Soru</span>
            <span className="sm:hidden">110</span>
            <span className="mx-1.5 text-border">|</span>
            <span>3 Test</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Arka plan deseni */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/Wf28C7YSdBJR86NVxiW7bx/hero-bg-azdjvBWnU4cjtnuY9EF4AK.webp")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="container relative py-16 sm:py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4 sm:mb-5">
              Prof. Dr. İzzet Er için Hazırlanmıştır
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Reflektif Test
              <br />
              <span className="text-primary/80">Soruları</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mt-5 sm:mt-6 max-w-xl leading-relaxed">
              RIASEC, Big Five ve Değerler testlerinden oluşan 110 soruyu kapsayan
              kapsamlı soru kataloğu. Türkçe ve Fransızca dil desteği ile.
            </p>
          </motion.div>

          {/* Özet Tablosu */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 sm:mt-14"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl">
              {testsData.map((test, idx) => {
                const config = tabConfig[idx];
                const Icon = config.icon;
                return (
                  <button
                    key={test.id}
                    onClick={() => handleTabChange(test.id)}
                    className="group text-left p-4 sm:p-5 rounded-lg border border-border/60 bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <div
                        className="w-8 h-8 rounded-md flex items-center justify-center"
                        style={{ backgroundColor: config.accent + "10" }}
                      >
                        <Icon className="w-4 h-4" style={{ color: config.accent }} />
                      </div>
                      <span className="text-sm font-semibold text-foreground">{test.title}</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Soru sayısı</span>
                        <span className="font-medium text-foreground">{test.questionCount}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Süre</span>
                        <span className="font-medium text-foreground">{test.duration}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Boyutlar</span>
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
                <strong className="text-foreground font-semibold">Toplam:</strong> 110 soru
              </span>
              <span>28-35 dakika</span>
              <span>17 boyut</span>
              <span>Hazırlayan: OpenClaw AI</span>
              <span>17 Nisan 2026</span>
            </div>
          </motion.div>
        </div>

        {/* Alt çizgi */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* Tab Navigasyonu */}
      <div ref={contentRef} className="sticky top-14 sm:top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border/40">
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
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden text-xs">{tab.label}</span>
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
      <main className="container py-8 sm:py-12">
        <AnimatePresence mode="wait">
          <TestSection key={activeTab} test={activeTest} />
        </AnimatePresence>
      </main>

      {/* Bilimsel Temel Bölümü */}
      <section className="border-t border-border/40 bg-muted/20">
        <div className="container py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Bilimsel Temel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testsData.map((test) => (
              <div key={test.id} className="p-5 sm:p-6 rounded-lg border border-border/50 bg-card">
                <h3 className="font-semibold text-foreground text-sm mb-3">{test.title}</h3>
                <p className="text-xs text-muted-foreground italic leading-relaxed mb-3">
                  {test.scientificBasis.source}
                </p>
                <div className="space-y-1.5">
                  <p className="text-xs">
                    <span className="text-muted-foreground">Güvenilirlik: </span>
                    <span className="text-foreground font-medium">{test.scientificBasis.reliability}</span>
                  </p>
                  <p className="text-xs">
                    <span className="text-muted-foreground">Kullanım: </span>
                    <span className="text-foreground font-medium">{test.scientificBasis.usage}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kullanım Bilgisi */}
      <section className="border-t border-border/40">
        <div className="container py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Kullanım Bilgisi
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Bu testler lise ve üniversite öğrencileri ile genç yetişkinler için tasarlanmıştır.
                Reflektif.net platformunda web ve mobil olarak sunulmaktadır.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Diller</p>
                    <p className="text-xs text-muted-foreground">Türkçe, Fransızca, İngilizce (planlı)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Yapay Zeka Entegrasyonu</p>
                    <p className="text-xs text-muted-foreground">Her test sonrası AI debriefing, kişiselleştirilmiş analiz, 920+ meslek eşleştirmesi</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">İletişim</h3>
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
              Hazırlayan: OpenClaw AI (Mikail Lekesiz talimatı ile) — 17 Nisan 2026
            </p>
            <p>
              Prof. Dr. İzzet Er'e iletilmek üzere hazırlanmıştır
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
            className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Sayfanın başına dön"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
