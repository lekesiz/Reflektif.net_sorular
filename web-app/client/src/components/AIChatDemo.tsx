/**
 * AI Sohbet Demo Bileşeni
 * - Her üç testten sonra 7 soruluk kişiye özel AI sohbet
 * - Sosyo-kültürel dengeler gözetilerek reflektif algoritma ile oluşturulan sorular
 * - Psikometrik kriterler doğrultusunda çapraz psikolojik testlerle en iyi sonuç
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Bot,
  User,
  ChevronRight,
  Sparkles,
  Brain,
  Heart,
  Target,
  Lock,
  ArrowRight,
} from "lucide-react";

interface AIChatDemoProps {
  lang: "tr" | "fr" | "en";
}

const content = {
  tr: {
    badge: "AI Sohbet",
    title: "Kişiye Özel Reflektif Sorular",
    subtitle: "Her test sonrası AI tarafından hazırlanan 7 derinleştirme sorusu ile sonuç kalitesi artırılır",
    note: "Bu sorular tamamen sosyo-kültürel dengeler gözetilerek, kişiye özel test sonrası reflektif algoritması ile psikometrik kriterler doğrultusunda oluşturularak çapraz psikolojik testlerle en iyi sonuç için hazırlanmıştır.",
    tabs: [
      { id: "riasec", label: "RIASEC Sonrası", icon: "target", color: "bg-indigo-500" },
      { id: "bigfive", label: "Big Five Sonrası", icon: "brain", color: "bg-emerald-500" },
      { id: "values", label: "Değerler Sonrası", icon: "heart", color: "bg-amber-500" },
    ],
    aiIntro: {
      riasec: "RIASEC test sonuçlarınıza göre ilgi alanlarınızı derinlemesine anlamak için hazırlanmış 7 reflektif soru:",
      bigfive: "Big Five kişilik profilinize göre iş ortamındaki davranışlarınızı netleştirmek için 7 reflektif soru:",
      values: "Kariyer değerlerinizi ve yaşam önceliklerinizi analiz etmek için hazırlanmış 7 reflektif soru:",
    },
    questions: {
      riasec: [
        "Bir proje üzerinde çalışırken, sonucu görmek mi yoksa süreci yaşamak mı sizi daha çok motive eder? Neden?",
        "Günlük hayatınızda farkında olmadan en çok hangi tür aktivitelere zaman ayırıyorsunuz?",
        "İdeal bir iş gününü hayal edin — sabahtan akşama ne yapıyor olurdunuz?",
        "Bir ekip çalışmasında doğal olarak hangi rolü üstlenirsiniz: lider, organizatör, yaratıcı, analist?",
        "Teknoloji ile ilişkinizi nasıl tanımlarsınız — araç olarak mı, tutku olarak mı, yoksa zorunluluk olarak mı?",
        "Başkalarının sorunlarını çözmek size enerji mi verir yoksa yorar mı? Hangi tür sorunlarda?",
        "Eğer hiçbir kısıtlama olmasa, hangi alanda uzmanlaşmak isterdiniz ve bu seçim sizi nasıl hissettirirdi?",
      ],
      bigfive: [
        "Stresli bir durumda ilk tepkiniz ne olur — harekete geçmek mi, düşünmek mi, yoksa duygularınızı ifade etmek mi?",
        "Yeni insanlarla tanışmak sizi enerjilendirir mi yoksa tüketir mi? Bu durumun iş hayatınıza etkisi ne olur?",
        "Bir karar verirken mantık mı yoksa sezgileriniz mi ağır basar? Bunu bir örnekle açıklayabilir misiniz?",
        "Rutinler sizi güvende mi hissettirir yoksa sıkar mı? İdeal iş ortamınızda ne kadar yapı olmalı?",
        "Eleştiri aldığınızda ilk tepkiniz ne olur? Bu tepkiyi zaman içinde nasıl değiştirdiniz?",
        "Detaylara dikkat etmek mi yoksa büyük resmi görmek mi sizin için daha doğal? Bu iş hayatınızı nasıl etkiler?",
        "Kendinizi en yaratıcı hissettiğiniz anlar hangileri? Bu anların ortak noktası ne?",
      ],
      values: [
        "Kariyer seçiminde maddi güvence mi yoksa anlam arayışı mı sizin için öncelikli? Neden?",
        "İş-yaşam dengesi sizin için ne anlama geliyor? İdeal dengenizi nasıl tanımlarsınız?",
        "Topluma katkı sağlamak kariyer kararlarınızı ne ölçüde etkiler?",
        "Bağımsız çalışmak mı yoksa bir ekibin parçası olmak mı sizi daha mutlu eder? Hangi koşullarda?",
        "Prestij ve statü kariyer motivasyonunuzda ne kadar belirleyici? Bu zaman içinde değişti mi?",
        "Sürekli öğrenme ve gelişim sizin için bir ihtiyaç mı yoksa tercih mi? Bunu nasıl karşılıyorsunuz?",
        "Ailenizin ve çevrenizin beklentileri kariyer kararlarınızı ne ölçüde şekillendiriyor?",
      ],
    },
    sampleResponse: "Bu soruya verdiğiniz yanıt, AI-Prof tarafından analiz edilerek kariyer profilinize entegre edilecektir...",
    lockedMessage: "Bu özellik reflektif.net platformunda aktif olarak kullanılmaktadır",
    tryOnPlatform: "reflektif.net'te Deneyin",
    questionLabel: "Soru",
    aiLabel: "AI-Prof",
  },
  en: {
    badge: "AI Chat",
    title: "Personalized Reflective Questions",
    subtitle: "7 deepening questions prepared by AI after each test to improve result quality",
    note: "These questions are fully prepared considering socio-cultural balances, created through post-test reflective algorithms aligned with psychometric criteria and cross-psychological tests for optimal results.",
    tabs: [
      { id: "riasec", label: "Post-RIASEC", icon: "target", color: "bg-indigo-500" },
      { id: "bigfive", label: "Post-Big Five", icon: "brain", color: "bg-emerald-500" },
      { id: "values", label: "Post-Values", icon: "heart", color: "bg-amber-500" },
    ],
    aiIntro: {
      riasec: "7 reflective questions prepared to deeply understand your interests based on your RIASEC results:",
      bigfive: "7 reflective questions to clarify your workplace behaviors based on your Big Five personality profile:",
      values: "7 reflective questions prepared to analyze your career values and life priorities:",
    },
    questions: {
      riasec: [
        "When working on a project, does seeing the result or experiencing the process motivate you more? Why?",
        "What types of activities do you unconsciously spend the most time on in daily life?",
        "Imagine an ideal workday — what would you be doing from morning to evening?",
        "What role do you naturally take in teamwork: leader, organizer, creative, or analyst?",
        "How would you describe your relationship with technology — as a tool, passion, or necessity?",
        "Does solving others' problems energize or drain you? What types of problems?",
        "If there were no constraints, what field would you specialize in and how would that make you feel?",
      ],
      bigfive: [
        "In a stressful situation, what's your first reaction — take action, think, or express emotions?",
        "Does meeting new people energize or drain you? How does this affect your work life?",
        "When making decisions, does logic or intuition prevail? Can you give an example?",
        "Do routines make you feel safe or bored? How much structure should your ideal workplace have?",
        "What's your first reaction to criticism? How has this changed over time?",
        "Is paying attention to details or seeing the big picture more natural for you?",
        "When do you feel most creative? What do those moments have in common?",
      ],
      values: [
        "In career choice, is financial security or meaning more important to you? Why?",
        "What does work-life balance mean to you? How would you define your ideal balance?",
        "To what extent does contributing to society influence your career decisions?",
        "Does working independently or being part of a team make you happier? Under what conditions?",
        "How much do prestige and status determine your career motivation? Has this changed over time?",
        "Is continuous learning a need or a preference for you? How do you fulfill it?",
        "To what extent do family and social expectations shape your career decisions?",
      ],
    },
    sampleResponse: "Your response to this question will be analyzed by AI-Prof and integrated into your career profile...",
    lockedMessage: "This feature is actively used on the reflektif.net platform",
    tryOnPlatform: "Try on reflektif.net",
    questionLabel: "Question",
    aiLabel: "AI-Prof",
  },
  fr: {
    badge: "Chat IA",
    title: "Questions Réflexives Personnalisées",
    subtitle: "7 questions d'approfondissement préparées par l'IA après chaque test pour améliorer la qualité des résultats",
    note: "Ces questions sont entièrement préparées en tenant compte des équilibres socio-culturels, créées par des algorithmes réflexifs post-test alignés sur des critères psychométriques et des tests psychologiques croisés.",
    tabs: [
      { id: "riasec", label: "Post-RIASEC", icon: "target", color: "bg-indigo-500" },
      { id: "bigfive", label: "Post-Big Five", icon: "brain", color: "bg-emerald-500" },
      { id: "values", label: "Post-Valeurs", icon: "heart", color: "bg-amber-500" },
    ],
    aiIntro: {
      riasec: "7 questions réflexives pour comprendre en profondeur vos intérêts basés sur vos résultats RIASEC :",
      bigfive: "7 questions réflexives pour clarifier vos comportements au travail basés sur votre profil Big Five :",
      values: "7 questions réflexives pour analyser vos valeurs de carrière et priorités de vie :",
    },
    questions: {
      riasec: [
        "Lorsque vous travaillez sur un projet, est-ce le résultat ou le processus qui vous motive le plus ? Pourquoi ?",
        "À quels types d'activités consacrez-vous inconsciemment le plus de temps au quotidien ?",
        "Imaginez une journée de travail idéale — que feriez-vous du matin au soir ?",
        "Quel rôle prenez-vous naturellement dans un travail d'équipe : leader, organisateur, créatif ou analyste ?",
        "Comment décririez-vous votre relation avec la technologie — outil, passion ou nécessité ?",
        "Résoudre les problèmes des autres vous énergise ou vous épuise ? Quels types de problèmes ?",
        "Sans aucune contrainte, dans quel domaine vous spécialiseriez-vous et comment cela vous ferait-il sentir ?",
      ],
      bigfive: [
        "Dans une situation stressante, quelle est votre première réaction — agir, réfléchir ou exprimer vos émotions ?",
        "Rencontrer de nouvelles personnes vous énergise ou vous épuise ? Comment cela affecte-t-il votre vie professionnelle ?",
        "Lors d'une prise de décision, la logique ou l'intuition l'emporte ? Pouvez-vous donner un exemple ?",
        "Les routines vous sécurisent ou vous ennuient ? Combien de structure votre lieu de travail idéal devrait-il avoir ?",
        "Quelle est votre première réaction face à la critique ? Comment cela a-t-il changé au fil du temps ?",
        "Prêter attention aux détails ou voir la vue d'ensemble est-il plus naturel pour vous ?",
        "Quand vous sentez-vous le plus créatif ? Qu'ont ces moments en commun ?",
      ],
      values: [
        "Dans le choix de carrière, la sécurité financière ou le sens est-il plus important pour vous ? Pourquoi ?",
        "Que signifie l'équilibre travail-vie pour vous ? Comment définiriez-vous votre équilibre idéal ?",
        "Dans quelle mesure contribuer à la société influence-t-il vos décisions de carrière ?",
        "Travailler de manière indépendante ou faire partie d'une équipe vous rend-il plus heureux ?",
        "Combien le prestige et le statut déterminent-ils votre motivation de carrière ?",
        "L'apprentissage continu est-il un besoin ou une préférence pour vous ?",
        "Dans quelle mesure les attentes familiales et sociales façonnent-elles vos décisions de carrière ?",
      ],
    },
    sampleResponse: "Votre réponse à cette question sera analysée par AI-Prof et intégrée à votre profil de carrière...",
    lockedMessage: "Cette fonctionnalité est activement utilisée sur la plateforme reflektif.net",
    tryOnPlatform: "Essayer sur reflektif.net",
    questionLabel: "Question",
    aiLabel: "AI-Prof",
  },
};

const tabIconMap: Record<string, React.ReactNode> = {
  target: <Target className="w-4 h-4" />,
  brain: <Brain className="w-4 h-4" />,
  heart: <Heart className="w-4 h-4" />,
};

export default function AIChatDemo({ lang }: AIChatDemoProps) {
  const t = content[lang];
  const [activeTab, setActiveTab] = useState<"riasec" | "bigfive" | "values">("riasec");
  const [expandedQ, setExpandedQ] = useState<number | null>(0);

  const questions = t.questions[activeTab];
  const intro = t.aiIntro[activeTab];

  return (
    <section id="ai-chat" className="border-t border-border/40 bg-gradient-to-b from-muted/10 to-background print:hidden">
      <div className="container py-16 sm:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            {t.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {t.title}
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-4">
            {t.subtitle}
          </p>
          <p className="text-xs text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed italic">
            {t.note}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 mb-8">
          {t.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                setExpandedQ(0);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {tabIconMap[tab.icon]}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Chat Interface */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-xl border border-border/50 bg-card overflow-hidden shadow-sm">
            {/* Chat Header */}
            <div className="px-4 py-3 border-b border-border/30 bg-muted/20 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.aiLabel}</p>
                <p className="text-xs text-muted-foreground">Reflektif AI</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-emerald-600">Online</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
              {/* AI Intro */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 p-3 rounded-lg bg-muted/30 border border-border/20">
                  <p className="text-sm text-foreground leading-relaxed">{intro}</p>
                </div>
              </div>

              {/* Questions */}
              {questions.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => setExpandedQ(expandedQ === i ? null : i)}
                    className="w-full"
                  >
                    <div className={`flex gap-3 transition-all ${expandedQ === i ? "" : "opacity-70 hover:opacity-100"}`}>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold">{i + 1}</span>
                      </div>
                      <div className={`flex-1 p-3 rounded-lg text-left transition-all ${
                        expandedQ === i
                          ? "bg-primary/5 border border-primary/20"
                          : "bg-muted/20 border border-transparent hover:bg-muted/30"
                      }`}>
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm text-foreground leading-relaxed">{q}</p>
                          <ChevronRight className={`w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5 transition-transform ${expandedQ === i ? "rotate-90" : ""}`} />
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Expanded: Sample response area */}
                  <AnimatePresence>
                    {expandedQ === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-10 mt-2 flex gap-3">
                          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-muted text-muted-foreground flex items-center justify-center mt-0.5">
                            <User className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 p-3 rounded-lg bg-muted/10 border border-dashed border-border/40">
                            <p className="text-xs text-muted-foreground italic">{t.sampleResponse}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Locked Footer */}
            <div className="px-4 py-3 border-t border-border/30 bg-muted/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="w-3.5 h-3.5" />
                {t.lockedMessage}
              </div>
              <a
                href="https://reflektif.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
              >
                {t.tryOnPlatform}
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
