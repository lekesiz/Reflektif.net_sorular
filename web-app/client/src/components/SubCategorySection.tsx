/*
 * DESIGN: Editorial / Dergi Düzeni
 * SubCategorySection: Alt kategori başlığı ve soruları gruplandıran bileşen
 * Dil desteği ve arama filtreleme
 */

import { motion } from "framer-motion";
import type { SubCategory, Language } from "@/data/questions";
import { uiStrings } from "@/data/questions";
import QuestionCard from "./QuestionCard";

interface SubCategorySectionProps {
  subCategory: SubCategory;
  startIndex: number;
  language: Language;
  searchTerm?: string;
}

export default function SubCategorySection({ subCategory, startIndex, language, searchTerm = "" }: SubCategorySectionProps) {
  const filteredQuestions = searchTerm.length >= 2
    ? subCategory.questions.filter((q) => {
        const term = searchTerm.toLowerCase();
        return (
          q.textTr.toLowerCase().includes(term) ||
          q.textFr.toLowerCase().includes(term) ||
          q.textEn.toLowerCase().includes(term)
        );
      })
    : subCategory.questions;

  if (filteredQuestions.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5 }}
      className="mb-8 sm:mb-10"
    >
      {/* Alt kategori başlığı */}
      <div className="flex items-center gap-3 mb-4 sm:mb-5">
        <div
          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: subCategory.color }}
        />
        <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wider text-foreground/80">
          {subCategory.name[language]}
          <span className="ml-2 text-xs font-medium text-muted-foreground tracking-normal normal-case">
            ({subCategory.code}) — {filteredQuestions.length} {uiStrings[language].questions}
          </span>
        </h3>
      </div>

      {/* Sorular */}
      <div className="divide-y divide-border/50">
        {filteredQuestions.map((question, idx) => (
          <QuestionCard
            key={question.id}
            question={question}
            color={subCategory.color}
            globalIndex={startIndex + idx}
            language={language}
            searchTerm={searchTerm}
          />
        ))}
      </div>
    </motion.section>
  );
}
