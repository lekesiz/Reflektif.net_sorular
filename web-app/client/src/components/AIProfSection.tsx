/**
 * AI-Prof Detay Bölümü
 * - Sonuç çıktılarında bize özel yapılan çalışmanın detayı
 * - AI-Prof ile mesleğin AI'dan nasıl etkileneceği
 * - Mesleği icra eden kişinin başarılı kalması için stratejiler
 * - 7+7+7 reflektif soru sistemi açıklaması
 */
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface AIProfSectionProps {
  lang: "tr" | "fr" | "en";
}

const content = {
  tr: {
    badge: "AI-Prof Teknolojisi",
    title: "Reflektif AI-Prof",
    subtitle: "Kişiye Özel Kariyer Analizi",
    desc: "Reflektif platformu, yapay zeka destekli AI-Prof modülü ile her bireyin test sonuçlarını derinlemesine analiz ederek kişiye özel kariyer rehberliği sunar. Bu sistem, psikometrik verileri 920+ meslek veritabanıyla çapraz eşleştirerek benzersiz bir kariyer haritası oluşturur.",
    features: [
      {
        icon: "brain",
        title: "Psikometrik Çapraz Analiz",
        desc: "RIASEC, Big Five ve Değerler testlerinin sonuçları birbirleriyle çapraz analiz edilerek çok boyutlu bir kişilik profili oluşturulur. Bu profil, tek bir testin ötesinde bütünsel bir değerlendirme sağlar.",
      },
      {
        icon: "target",
        title: "920+ Meslek Eşleştirme",
        desc: "Her meslek için RIASEC kodu, kişilik uyumu ve değer eşleşmesi hesaplanarak kişiye en uygun meslekler belirlenir. Ayrıca kişi istediği 3 mesleği seçerek uygunluk oranını ve nedenlerini görebilir.",
      },
      {
        icon: "cpu",
        title: "AI Etki Analizi",
        desc: "AI-Prof, her meslek için yapay zekanın o mesleği ne kadar ve nasıl etkileyeceğini analiz eder. Mesleği icra eden veya edecek kişinin AI'ye rağmen nasıl başarılı olabileceğine dair stratejiler sunar.",
      },
      {
        icon: "sparkles",
        title: "7+7+7 Reflektif Soru Sistemi",
        desc: "Her üç testten sonra kişiye özel 7 soru hazırlanır. Toplamda 21 soru, sosyo-kültürel dengeler gözetilerek reflektif algoritma ile psikometrik kriterler doğrultusunda oluşturulur.",
      },
    ],
    reflectiveTitle: "Reflektif 7+7+7 Soru Sistemi",
    reflectiveDesc: "Her test sonrası AI tarafından hazırlanan 7 kişiye özel soru ile sonuç kalitesi netleştirilir. Bu sorular tamamen sosyo-kültürel dengeler gözetilerek, kişiye özel test sonrası reflektif algoritması ile psikometrik kriterler doğrultusunda oluşturularak çapraz psikolojik testlerle en iyi sonuç için hazırlanır.",
    phases: [
      {
        step: "1",
        title: "RIASEC Sonrası — 7 Soru",
        desc: "İlgi alanlarınızın derinliğini ve tutarlılığını ölçen, mesleki yönelimlerinizi netleştiren reflektif sorular.",
        color: "from-indigo-500 to-blue-500",
      },
      {
        step: "2",
        title: "Big Five Sonrası — 7 Soru",
        desc: "Kişilik özelliklerinizin iş ortamındaki yansımalarını ve sosyal dinamiklerinizi derinleştiren sorular.",
        color: "from-emerald-500 to-teal-500",
      },
      {
        step: "3",
        title: "Değerler Sonrası — 7 Soru",
        desc: "Kariyer değerlerinizin yaşam öncelikleriyle uyumunu ve motivasyon kaynaklarınızı analiz eden sorular.",
        color: "from-amber-500 to-orange-500",
      },
    ],
    aiImpactTitle: "AI-Prof Meslek Etki Raporu",
    aiImpactDesc: "Raporda her meslek için şu detaylar yer alır:",
    aiImpactItems: [
      "AI'nin mesleği ne ölçüde ve hangi alanlarda etkileyeceği",
      "Mesleği icra eden kişinin AI çağında başarılı kalma stratejileri",
      "Mesleğe yeni yetkinlikler ekleyerek AI'ye rağmen nasıl öne çıkılacağı",
      "Otomasyon riski ve insan dokunuşunun vazgeçilmez olduğu alanlar",
      "Gelecek 5-10 yıl için mesleğin dönüşüm senaryoları",
    ],
    resultBadge: "Sonuç Raporu İçeriği",
    resultTitle: "Kişiye Özel Kariyer Raporu",
    resultItems: [
      { icon: "chart", label: "RIASEC Profil Grafiği", desc: "6 boyutlu ilgi alanı haritası" },
      { icon: "users", label: "Big Five Kişilik Profili", desc: "5 faktörlü kişilik analizi" },
      { icon: "shield", label: "Değerler Hiyerarşisi", desc: "Kariyer değerleri sıralaması" },
      { icon: "trending", label: "En Uygun 10 Meslek", desc: "Uyumluluk oranlarıyla birlikte" },
      { icon: "zap", label: "AI Etki Analizi", desc: "Her meslek için AI etki raporu" },
      { icon: "message", label: "21 Reflektif Soru Analizi", desc: "Kişiye özel derinleştirme" },
    ],
  },
  en: {
    badge: "AI-Prof Technology",
    title: "Reflektif AI-Prof",
    subtitle: "Personalized Career Analysis",
    desc: "The Reflektif platform provides personalized career guidance through its AI-Prof module, which deeply analyzes each individual's test results. This system creates a unique career map by cross-matching psychometric data with a database of 920+ professions.",
    features: [
      {
        icon: "brain",
        title: "Psychometric Cross-Analysis",
        desc: "Results from RIASEC, Big Five, and Values tests are cross-analyzed to create a multi-dimensional personality profile that provides a holistic assessment beyond any single test.",
      },
      {
        icon: "target",
        title: "920+ Career Matching",
        desc: "RIASEC codes, personality fit, and value alignment are calculated for each profession to identify the best career matches. Users can also select any 3 professions to see their compatibility scores.",
      },
      {
        icon: "cpu",
        title: "AI Impact Analysis",
        desc: "AI-Prof analyzes how AI will impact each profession and provides strategies for professionals to remain successful despite AI advancements.",
      },
      {
        icon: "sparkles",
        title: "7+7+7 Reflective Question System",
        desc: "After each of the three tests, 7 personalized questions are prepared. These 21 questions are created using reflective algorithms with psychometric criteria, considering socio-cultural balances.",
      },
    ],
    reflectiveTitle: "Reflective 7+7+7 Question System",
    reflectiveDesc: "After each test, 7 AI-generated personalized questions refine the result quality. These questions are created with socio-cultural awareness, using post-test reflective algorithms aligned with psychometric criteria and cross-psychological tests for optimal results.",
    phases: [
      {
        step: "1",
        title: "Post-RIASEC — 7 Questions",
        desc: "Reflective questions that measure the depth and consistency of your interests and clarify your professional orientations.",
        color: "from-indigo-500 to-blue-500",
      },
      {
        step: "2",
        title: "Post-Big Five — 7 Questions",
        desc: "Questions that deepen your personality traits' reflections in the work environment and social dynamics.",
        color: "from-emerald-500 to-teal-500",
      },
      {
        step: "3",
        title: "Post-Values — 7 Questions",
        desc: "Questions analyzing the alignment of your career values with life priorities and motivation sources.",
        color: "from-amber-500 to-orange-500",
      },
    ],
    aiImpactTitle: "AI-Prof Career Impact Report",
    aiImpactDesc: "The report includes the following details for each profession:",
    aiImpactItems: [
      "The extent and areas in which AI will impact the profession",
      "Strategies for professionals to remain successful in the AI era",
      "How to stand out by adding new competencies despite AI",
      "Automation risk and areas where human touch remains essential",
      "Transformation scenarios for the profession over the next 5-10 years",
    ],
    resultBadge: "Report Contents",
    resultTitle: "Personalized Career Report",
    resultItems: [
      { icon: "chart", label: "RIASEC Profile Chart", desc: "6-dimensional interest map" },
      { icon: "users", label: "Big Five Personality Profile", desc: "5-factor personality analysis" },
      { icon: "shield", label: "Values Hierarchy", desc: "Career values ranking" },
      { icon: "trending", label: "Top 10 Career Matches", desc: "With compatibility percentages" },
      { icon: "zap", label: "AI Impact Analysis", desc: "AI impact report per profession" },
      { icon: "message", label: "21 Reflective Questions Analysis", desc: "Personalized deepening" },
    ],
  },
  fr: {
    badge: "Technologie AI-Prof",
    title: "Reflektif AI-Prof",
    subtitle: "Analyse de Carrière Personnalisée",
    desc: "La plateforme Reflektif offre un accompagnement de carrière personnalisé grâce à son module AI-Prof, qui analyse en profondeur les résultats de chaque individu. Ce système crée une carte de carrière unique en croisant les données psychométriques avec une base de 920+ métiers.",
    features: [
      {
        icon: "brain",
        title: "Analyse Psychométrique Croisée",
        desc: "Les résultats des tests RIASEC, Big Five et Valeurs sont analysés de manière croisée pour créer un profil de personnalité multidimensionnel offrant une évaluation holistique.",
      },
      {
        icon: "target",
        title: "Correspondance 920+ Métiers",
        desc: "Les codes RIASEC, la compatibilité de personnalité et l'alignement des valeurs sont calculés pour chaque métier. Les utilisateurs peuvent aussi sélectionner 3 métiers pour voir leurs scores.",
      },
      {
        icon: "cpu",
        title: "Analyse d'Impact IA",
        desc: "AI-Prof analyse comment l'IA impactera chaque métier et fournit des stratégies pour rester performant malgré les avancées de l'IA.",
      },
      {
        icon: "sparkles",
        title: "Système 7+7+7 Questions Réflexives",
        desc: "Après chacun des trois tests, 7 questions personnalisées sont préparées. Ces 21 questions sont créées avec des algorithmes réflexifs et des critères psychométriques.",
      },
    ],
    reflectiveTitle: "Système de Questions Réflexives 7+7+7",
    reflectiveDesc: "Après chaque test, 7 questions personnalisées générées par l'IA affinent la qualité des résultats. Ces questions sont créées avec une conscience socio-culturelle, utilisant des algorithmes réflexifs post-test alignés sur des critères psychométriques.",
    phases: [
      {
        step: "1",
        title: "Post-RIASEC — 7 Questions",
        desc: "Questions réflexives mesurant la profondeur et la cohérence de vos intérêts et clarifiant vos orientations professionnelles.",
        color: "from-indigo-500 to-blue-500",
      },
      {
        step: "2",
        title: "Post-Big Five — 7 Questions",
        desc: "Questions approfondissant les reflets de vos traits de personnalité dans l'environnement de travail.",
        color: "from-emerald-500 to-teal-500",
      },
      {
        step: "3",
        title: "Post-Valeurs — 7 Questions",
        desc: "Questions analysant l'alignement de vos valeurs de carrière avec vos priorités de vie.",
        color: "from-amber-500 to-orange-500",
      },
    ],
    aiImpactTitle: "Rapport d'Impact IA AI-Prof",
    aiImpactDesc: "Le rapport inclut les détails suivants pour chaque métier :",
    aiImpactItems: [
      "L'étendue et les domaines d'impact de l'IA sur le métier",
      "Stratégies pour rester performant à l'ère de l'IA",
      "Comment se démarquer en ajoutant de nouvelles compétences malgré l'IA",
      "Risque d'automatisation et domaines où le contact humain reste essentiel",
      "Scénarios de transformation du métier sur les 5-10 prochaines années",
    ],
    resultBadge: "Contenu du Rapport",
    resultTitle: "Rapport de Carrière Personnalisé",
    resultItems: [
      { icon: "chart", label: "Graphique Profil RIASEC", desc: "Carte d'intérêts 6 dimensions" },
      { icon: "users", label: "Profil Big Five", desc: "Analyse de personnalité 5 facteurs" },
      { icon: "shield", label: "Hiérarchie des Valeurs", desc: "Classement des valeurs de carrière" },
      { icon: "trending", label: "Top 10 Métiers", desc: "Avec pourcentages de compatibilité" },
      { icon: "zap", label: "Analyse Impact IA", desc: "Rapport d'impact IA par métier" },
      { icon: "message", label: "Analyse 21 Questions", desc: "Approfondissement personnalisé" },
    ],
  },
};

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="w-5 h-5" />,
  target: <Target className="w-5 h-5" />,
  cpu: <Cpu className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
  chart: <BarChart3 className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
  shield: <Shield className="w-5 h-5" />,
  trending: <TrendingUp className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
  message: <MessageCircle className="w-5 h-5" />,
};

export default function AIProfSection({ lang }: AIProfSectionProps) {
  const t = content[lang];

  return (
    <section className="border-t border-border/40 bg-gradient-to-b from-background to-muted/20 print:bg-white">
      <div className="container py-16 sm:py-24 print:py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            <Cpu className="w-3.5 h-3.5" />
            {t.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            {t.title}
          </h2>
          <p className="text-lg text-primary font-medium mb-4">{t.subtitle}</p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.desc}
          </p>
        </motion.div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {t.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {iconMap[feature.icon]}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 7+7+7 Reflective Question System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
              {t.reflectiveTitle}
            </h3>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.reflectiveDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative overflow-hidden rounded-xl border border-border/50 bg-card"
              >
                <div className={`h-1.5 bg-gradient-to-r ${phase.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${phase.color} text-white text-sm font-bold flex items-center justify-center`}>
                      {phase.step}
                    </span>
                    <h4 className="font-semibold text-foreground text-sm">{phase.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Impact Report */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="rounded-xl border border-border/50 bg-card overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-border/30 bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{t.aiImpactTitle}</h3>
                  <p className="text-xs text-muted-foreground">{t.aiImpactDesc}</p>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <ul className="space-y-3">
                {t.aiImpactItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Result Report Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-3">
              {t.resultBadge}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              {t.resultTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.resultItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 p-4 rounded-lg border border-border/40 bg-card/50 hover:bg-card hover:border-primary/20 transition-all"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  {iconMap[item.icon]}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
