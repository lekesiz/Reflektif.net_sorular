/*
 * DESIGN: Editorial / Dergi Düzeni
 * QuestionCard: Her bir soruyu editoryal tarzda gösteren kart bileşeni
 * Sol kenarda renkli çizgi, büyük numara, Türkçe + Fransızca metin
 */

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import type { Question } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  color: string;
  globalIndex: number;
}

export default function QuestionCard({ question, color, globalIndex }: QuestionCardProps) {
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
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: color }}
      />

      {/* Soru numarası */}
      <div className="pl-4 sm:pl-5 flex-shrink-0">
        <span
          className="font-display text-2xl sm:text-3xl font-bold leading-none opacity-25 group-hover:opacity-50 transition-opacity duration-300"
          style={{ color }}
        >
          {String(question.id).padStart(2, "0")}
        </span>
      </div>

      {/* Soru içeriği */}
      <div className="flex-1 min-w-0 pt-0.5">
        <div className="flex items-start gap-2">
          <p className="text-[15px] sm:text-base leading-relaxed text-foreground font-medium">
            {question.textTr}
          </p>
          {question.isReversed && (
            <span className="flex-shrink-0 mt-0.5" title="Ters puanlanan soru (6 - puan)">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
            </span>
          )}
        </div>
        <p className="text-[13px] sm:text-sm leading-relaxed text-muted-foreground mt-1 italic">
          {question.textFr}
        </p>
      </div>
    </motion.div>
  );
}
