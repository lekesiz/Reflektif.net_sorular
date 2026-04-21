/*
 * DESIGN: Editorial / Dergi Düzeni
 * TestSection: Her test için ana içerik bölümü
 * Sol dar sütunda meta bilgiler, sağ geniş sütunda sorular
 */

import { motion } from "framer-motion";
import { Clock, Layers, BookOpen, BarChart3 } from "lucide-react";
import type { TestData } from "@/data/questions";
import SubCategorySection from "./SubCategorySection";

interface TestSectionProps {
  test: TestData;
}

export default function TestSection({ test }: TestSectionProps) {
  let runningIndex = 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-12"
    >
      {/* Test başlık alanı */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-10 sm:mb-14">
        {/* Sol: İllüstrasyon ve meta bilgiler */}
        <div className="lg:w-72 xl:w-80 flex-shrink-0">
          <div className="lg:sticky lg:top-24">
            {/* İllüstrasyon */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 mb-6 rounded-lg overflow-hidden bg-muted/30">
              <img
                src={test.illustration}
                alt={test.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Meta bilgiler */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Süre</p>
                  <p className="text-sm text-foreground mt-0.5">{test.duration}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Layers className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Boyutlar</p>
                  <p className="text-sm text-foreground mt-0.5">{test.dimensions}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BarChart3 className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Ölçek</p>
                  <p className="text-sm text-foreground mt-0.5">{test.scale}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Bilimsel Temel</p>
                  <p className="text-sm text-foreground mt-0.5 italic">{test.scientificBasis.source}</p>
                  <p className="text-xs text-muted-foreground mt-1">{test.scientificBasis.reliability}</p>
                </div>
              </div>
            </div>

            {/* Boyut renk haritası */}
            <div className="mt-6 pt-6 border-t border-border/50">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-3">Boyutlar</p>
              <div className="flex flex-wrap gap-2">
                {test.subCategories.map((sub) => (
                  <span
                    key={sub.code}
                    className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-border/50 bg-background"
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: sub.color }}
                    />
                    {sub.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sağ: Sorular */}
        <div className="flex-1 min-w-0">
          {/* Test başlığı */}
          <div className="mb-8 sm:mb-10">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              {test.title}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              {test.subtitle}
            </p>
            <div className="flex items-center gap-4 mt-3">
              <span className="text-xs font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                {test.questionCount} soru
              </span>
              <span className="text-xs text-muted-foreground">
                {test.model}
              </span>
            </div>
          </div>

          {/* Ters puanlama notu (sadece Big Five için) */}
          {test.id === "bigfive" && (
            <div className="mb-8 p-4 rounded-lg bg-amber-50 border border-amber-200/60">
              <p className="text-sm text-amber-800 flex items-center gap-2">
                <span className="text-amber-500 text-base">&#9888;</span>
                <span>
                  <strong>Not:</strong> Yanında uyarı ikonu bulunan sorular ters puanlanır (6 - puan).
                </span>
              </p>
            </div>
          )}

          {/* Alt kategoriler ve sorular */}
          {test.subCategories.map((sub) => {
            const section = (
              <SubCategorySection
                key={sub.code}
                subCategory={sub}
                startIndex={runningIndex}
              />
            );
            runningIndex += sub.questions.length;
            return section;
          })}
        </div>
      </div>
    </motion.div>
  );
}
