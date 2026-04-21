/*
 * DESIGN: Editorial / Dergi Düzeni
 * QuestionCard: Her bir soruyu editoryal tarzda gösteren kart bileşeni
 * Dil desteği (TR/FR/EN), arama vurgulama
 */

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import type { Question, Language } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  color: string;
  globalIndex: number;
  language: Language;
  searchTerm?: string;
}

function highlightText(text: string, term: string) {
  if (!term || term.length < 2) return <>{text}</>;
  const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-amber-200/80 text-foreground rounded-sm px-0.5">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

const reversedTooltip: Record<Language, string> = {
  tr: "Ters puanlanan soru (6 - puan)",
  fr: "Question à notation inversée (6 - score)",
  en: "Reverse-scored question (6 - score)",
};

export default function QuestionCard({ question, color, globalIndex, language, searchTerm = "" }: QuestionCardProps) {
  const primaryText = language === "en" ? question.textEn : language === "fr" ? question.textFr : question.textTr;
  const secondaryText = language === "en" ? question.textFr : language === "fr" ? question.textTr : question.textFr;
  const tertiaryText = language === "tr" ? question.textEn : language === "fr" ? question.textEn : question.textTr;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (globalIndex % 5) * 0.06 }}
      className="group relative flex items-start gap-4 sm:gap-6 py-5 sm:py-6"
    >
      {/* Sol renkli çizgi */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 print:opacity-100"
        style={{ backgroundColor: color }}
      />

      {/* Soru numarası */}
      <div className="pl-4 sm:pl-5 flex-shrink-0">
        <span
          className="font-display text-2xl sm:text-3xl font-bold leading-none opacity-25 group-hover:opacity-50 transition-opacity duration-300 print:opacity-50"
          style={{ color }}
        >
          {String(question.id).padStart(2, "0")}
        </span>
      </div>

      {/* Soru içeriği */}
      <div className="flex-1 min-w-0 pt-0.5">
        <div className="flex items-start gap-2">
          <p className="text-[15px] sm:text-base leading-relaxed text-foreground font-medium">
            {highlightText(primaryText, searchTerm)}
          </p>
          {question.isReversed && (
            <span className="flex-shrink-0 mt-0.5" title={reversedTooltip[language]}>
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
            </span>
          )}
        </div>
        <p className="text-[13px] sm:text-sm leading-relaxed text-muted-foreground mt-1 italic">
          {highlightText(secondaryText, searchTerm)}
        </p>
        <p className="text-[11px] sm:text-xs leading-relaxed text-muted-foreground/60 mt-0.5">
          {highlightText(tertiaryText, searchTerm)}
        </p>
      </div>
    </motion.div>
  );
}
