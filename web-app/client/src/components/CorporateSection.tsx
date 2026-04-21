/*
 * DESIGN: Editorial / Dergi Düzeni
 * CorporateSection: Kurumsal sunumdan alınan stratejik bilgiler
 * Neden Reflektif, İstatistikler, Nasıl Çalışır, Metodoloji, Ekosistem, Değer Önerisi, Misyon/Vizyon
 */

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  GraduationCap,
  Brain,
  Target,
  Lightbulb,
  BarChart3,
  Layers,
  Shield,
  Sparkles,
  Building2,
  Briefcase,
  Accessibility,
  Heart,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import type { Language } from "@/data/questions";

const content: Record<Language, {
  whyBadge: string;
  whyTitle: string;
  whyQuote: string;
  whyDesc: string;
  whyApproach: string;
  whyFocus: string;
  needTitle: string;
  needItems: { icon: string; title: string; desc: string }[];
  needQuote: string;
  statsBadge: string;
  statsTitle: string;
  statsCards: { value: string; label: string; desc: string }[];
  statsSource: string;
  howBadge: string;
  howTitle: string;
  howSteps: { num: string; title: string; desc: string }[];
  howQuote: string;
  methBadge: string;
  methTitle: string;
  methCols: { title: string; items: string[]; desc: string }[];
  ecoBadge: string;
  ecoTitle: string;
  ecoDesc: string;
  ecoModules: { name: string; desc: string; icon: string }[];
  ecoQuote: string;
  valueBadge: string;
  valueTitle: string;
  valueCards: { title: string; desc: string }[];
  valueQuote: string;
  missionBadge: string;
  missionTitle: string;
  mission: string;
  vision: string;
  missionLabel: string;
  visionLabel: string;
  closingQuote: string;
  slogan: string;
}> = {
  tr: {
    whyBadge: "NEDEN REFLEKTİF?",
    whyTitle: "Klasik rehberlik anlayışının ötesinde",
    whyQuote: "Reflektif, bireyleri sisteme daha uyumlu hâle getirmeyi amaçlayan klasik rehberlik anlayışının ötesine geçer.",
    whyDesc: "İnsanları hazır kalıplara yerleştirmek değil, kendi potansiyellerini, ilgi alanlarını ve güçlü yönlerini keşfetmelerini sağlamak. Kariyer yalnızca bir meslek seçimi değildir. Kariyer; bireyin kendini nasıl ifade ettiği, topluma nasıl katkı sağladığı ve hayatına nasıl yön verdiğinin bir sonucudur.",
    whyApproach: "Reflektif, bireyin kendini tanıyarak doğru kararlar almasını sağlar.",
    whyFocus: "Odak: \"hangi işi yapabilirim?\" değil; \"ben kimim, nerede değer üretirim ve gelecekte nasıl konumlanırım?\"",
    needTitle: "Değişen dünyada rehberlik de değişmeli",
    needItems: [
      { icon: "trending", title: "Meslekler hızla dönüşüyor", desc: "Bugünün gençleri yalnızca bugünün işlerine değil, henüz şekillenmekte olan rollere hazırlanmak zorunda." },
      { icon: "users", title: "Gençler daha derin destek bekliyor", desc: "Standart testler, bireyin ilgi alanı, kişiliği ve değerleri arasındaki karmaşık ilişkiyi tek başına açıklayamıyor." },
      { icon: "building", title: "Kurumlar ölçeklenebilir çözüme ihtiyaç duyuyor", desc: "Okullar ve danışmanlık yapıları, bireysel derinliği kaybetmeden çok sayıda öğrenciyi takip edebilecek sistemler arıyor." },
    ],
    needQuote: "Reflektif bu boşluğu; bilimsel ölçüm, yapay zeka destekli yorumlama ve kapsamlı kariyer eşleştirmesini tek bir deneyimde bir araya getirerek kapatır.",
    statsBadge: "İSTATİSTİKSEL GERÇEKLER",
    statsTitle: "Türkiye'de gençlik ve kariyer sorunu",
    statsCards: [
      { value: "%32.2", label: "NEET Oranı", desc: "Türkiye'de 15-29 yaş arası \"Ne Eğitimde Ne İstihdamda\" olan genç oranı" },
      { value: "6.5M", label: "Genç Sayısı", desc: "Herhangi bir ekonomik faaliyete katılmayan veya eğitim almayan genç sayısı" },
      { value: "%60", label: "Mesleki Tatminsizlik", desc: "Mezuniyet sonrası yeteneklerine uygun iş bulamayacağını düşünen genç oranı" },
      { value: "%45+", label: "Küresel Uyumsuzluk", desc: "Dünya genelinde üniversite mezunlarının mesleki beklentileri ile mevcut işleri arasındaki uyumsuzluk" },
    ],
    statsSource: "Kaynak: TÜİK İşgücü İstatistikleri, OECD 2024 Gençlik Verileri ve Eğitim Görünümü Raporları",
    howBadge: "NASIL ÇALIŞIR",
    howTitle: "3 adımda kişiselleştirilmiş yönlendirme",
    howSteps: [
      { num: "01", title: "Bilimsel Testler", desc: "RIASEC, Big Five ve Değerler testleri ile kullanıcının profilini çok boyutlu olarak kurar." },
      { num: "02", title: "AI Analizi", desc: "Yapay zeka motoru sonuçları yorumlar, kişiselleştirilmiş debriefing yürütür ve tanısal bir rapor üretir." },
      { num: "03", title: "Kariyer Eşleştirme", desc: "920+ kariyer içinde uyum skorlarını, yönelim alanlarını ve aksiyon başlıklarını görünür kılar." },
    ],
    howQuote: "Sonuç, yalnızca bir skor listesi değil; bireyin kararını kolaylaştıran anlaşılır, eyleme dönük ve kişiselleştirilmiş bir yönlendirme setidir.",
    methBadge: "METODOLOJİ",
    methTitle: "Bilimsel temel, teknolojik katman",
    methCols: [
      { title: "Bilimsel Temel", items: ["Holland RIASEC", "Big Five Kişilik Modeli", "Mesleki Değerler Çerçevesi"], desc: "Bu yapı; ilgi, kişilik ve değerler boyutunu birlikte okuyarak tek katmanlı testlerin kaçırdığı derinliği yakalar." },
      { title: "Yapay Zeka Katmanı", items: ["Sonuçları yorumlar", "Kişisel debriefing üretir", "Raporu anlaşılır hale getirir"], desc: "Böylece kullanıcı yalnızca veriye değil, o verinin kendi yaşamındaki anlamına da erişir." },
      { title: "Çıktı", items: ["Detaylı eşleşme skorları", "Karar kolaylaştıran içgörü", "Rapor ve aksiyon alanları"], desc: "Reflektif'in farkı, bilimsel ölçümü kullanıcı deneyimi ve AI destekli açıklanabilirlikle birleştirmesidir." },
    ],
    ecoBadge: "EKOSİSTEM",
    ecoTitle: "Tek bir ürün değil, büyüyen bir ekosistem",
    ecoDesc: "Bugün öğrenci deneyimiyle canlı olan yapı; kurum, kariyer, İK ve erişilebilir deneyim katmanlarıyla genişleyen bir ekosistem mantığına sahip.",
    ecoModules: [
      { name: "Reflektif Öğrenci", desc: "Aktif ürün; test, AI analiz ve kariyer eşleştirme", icon: "graduation" },
      { name: "Reflektif Kurumlar", desc: "Toplu yönetim, danışman görünümü ve takip", icon: "building" },
      { name: "Reflektif Kariyer", desc: "Yetişkinlerde yeniden yönelim ve gelişim", icon: "briefcase" },
      { name: "Reflektif İK", desc: "Rol uyumu ve eksik profil görünürlüğü", icon: "target" },
      { name: "Reflektif Engelsiz", desc: "Erişilebilir ve kişiselleştirilmiş deneyimler", icon: "accessibility" },
    ],
    ecoQuote: "Öğrenciler için bireysel derinlik; kurumlar için ölçeklenebilir takip.",
    valueBadge: "DEĞER ÖNERİSİ",
    valueTitle: "Reflektif'i farklılaştıran yapı",
    valueCards: [
      { title: "Bilimsel Dayanak", desc: "Kariyer yönlendirmesini yalnızca sezgisel değil, uluslararası geçerliliği olan psikometrik modellerle kurar." },
      { title: "AI Destekli Derinlik", desc: "Sonucu açıklayan, kişisel bağlamla ilişkilendiren ve kullanıcıyla konuşan bir deneyim üretir." },
      { title: "Kişiye Özel Çıktı", desc: "Skor, eşleşme, rapor ve aksiyon alanlarını aynı akışta birleştirir." },
      { title: "Kurum Ölçeğinde Uygulanabilirlik", desc: "Bireysel kaliteyi korurken toplu yönetim ve izleme ihtiyacına yanıt verir." },
    ],
    valueQuote: "Reflektif; test, teknoloji ve insan odaklı rehberliği aynı cümlede kurabilen nadir markalardan biridir.",
    missionBadge: "MARKA ÖZÜ",
    missionTitle: "Misyonumuz ve Vizyonumuz",
    missionLabel: "Misyon",
    visionLabel: "Vizyon",
    mission: "Her bireyin içinde gelişmeyi bekleyen eşsiz bir potansiyel olduğuna inanıyoruz. Misyonumuz; bu potansiyeli görünür kılan bilimsel araçlar ve yapay zeka destekli rehberlikle bireyin hem kendisine hem topluma değer üreten bir yol kurmasına destek olmaktır.",
    vision: "Reflektif'i yalnızca bir değerlendirme aracı olarak değil; bireyin kendini gerçekleştirme yolculuğunda güvenilir, bilimsel ve insani bir eşlikçi olarak konumlandırmayı hedefliyoruz. Amacımız, içgörü üreten teknolojiyi hakiki yönlendirme ile birleştiren kalıcı bir referans marka olmaktır.",
    closingQuote: "Reflektif için teknoloji amaç değil; insanın kendi yönünü daha berrak görmesini sağlayan bir araçtır.",
    slogan: "Kendini keşfet. Geleceğini seç.",
  },
  fr: {
    whyBadge: "POURQUOI REFLEKTIF ?",
    whyTitle: "Au-delà de l'orientation classique",
    whyQuote: "Reflektif dépasse l'approche classique d'orientation qui vise simplement à rendre les individus plus conformes au système.",
    whyDesc: "Il ne s'agit pas de placer les gens dans des moules prêts à l'emploi, mais de leur permettre de découvrir leur propre potentiel, leurs intérêts et leurs forces. La carrière n'est pas seulement un choix de métier. C'est le résultat de la façon dont un individu s'exprime, contribue à la société et oriente sa vie.",
    whyApproach: "Reflektif permet à l'individu de prendre les bonnes décisions en se connaissant lui-même.",
    whyFocus: "Focus : non pas \"quel métier puis-je faire ?\" mais \"qui suis-je, où est-ce que je crée de la valeur et comment me positionner pour l'avenir ?\"",
    needTitle: "Dans un monde en mutation, l'orientation doit aussi évoluer",
    needItems: [
      { icon: "trending", title: "Les métiers se transforment rapidement", desc: "Les jeunes d'aujourd'hui doivent se préparer non seulement aux emplois actuels, mais aussi à des rôles encore en formation." },
      { icon: "users", title: "Les jeunes attendent un soutien plus profond", desc: "Les tests standards ne peuvent pas expliquer seuls la relation complexe entre les intérêts, la personnalité et les valeurs d'un individu." },
      { icon: "building", title: "Les institutions ont besoin de solutions évolutives", desc: "Les écoles et les structures de conseil recherchent des systèmes capables de suivre un grand nombre d'étudiants sans perdre la profondeur individuelle." },
    ],
    needQuote: "Reflektif comble ce vide en réunissant la mesure scientifique, l'interprétation assistée par l'IA et la correspondance de carrière complète en une seule expérience.",
    statsBadge: "FAITS STATISTIQUES",
    statsTitle: "Le problème de la jeunesse et de la carrière en Turquie",
    statsCards: [
      { value: "32,2%", label: "Taux NEET", desc: "Proportion de jeunes de 15-29 ans \"Ni en Éducation, Ni en Emploi, Ni en Formation\" en Turquie" },
      { value: "6,5M", label: "Nombre de jeunes", desc: "Nombre de jeunes ne participant à aucune activité économique ou ne suivant aucune formation" },
      { value: "60%", label: "Insatisfaction professionnelle", desc: "Proportion de jeunes pensant ne pas trouver un emploi adapté à leurs compétences après l'obtention du diplôme" },
      { value: "45%+", label: "Inadéquation mondiale", desc: "Inadéquation entre les attentes professionnelles des diplômés universitaires et leurs emplois actuels dans le monde" },
    ],
    statsSource: "Source : Statistiques de l'emploi TÜİK, Données jeunesse OCDE 2024 et Rapports sur les perspectives de l'éducation",
    howBadge: "COMMENT ÇA MARCHE",
    howTitle: "Orientation personnalisée en 3 étapes",
    howSteps: [
      { num: "01", title: "Tests Scientifiques", desc: "Construit le profil de l'utilisateur de manière multidimensionnelle avec les tests RIASEC, Big Five et Valeurs." },
      { num: "02", title: "Analyse IA", desc: "Le moteur d'intelligence artificielle interprète les résultats, mène un débriefing personnalisé et produit un rapport diagnostique." },
      { num: "03", title: "Correspondance de Carrière", desc: "Rend visibles les scores de compatibilité, les domaines d'orientation et les axes d'action parmi 920+ carrières." },
    ],
    howQuote: "Le résultat n'est pas simplement une liste de scores ; c'est un ensemble d'orientation compréhensible, orienté vers l'action et personnalisé qui facilite la décision de l'individu.",
    methBadge: "MÉTHODOLOGIE",
    methTitle: "Base scientifique, couche technologique",
    methCols: [
      { title: "Base Scientifique", items: ["Holland RIASEC", "Modèle de personnalité Big Five", "Cadre des valeurs professionnelles"], desc: "Cette structure capture la profondeur que les tests à couche unique manquent en lisant ensemble les dimensions d'intérêt, de personnalité et de valeurs." },
      { title: "Couche IA", items: ["Interprète les résultats", "Produit un débriefing personnel", "Rend le rapport compréhensible"], desc: "Ainsi, l'utilisateur accède non seulement aux données, mais aussi au sens de ces données dans sa propre vie." },
      { title: "Sortie", items: ["Scores de correspondance détaillés", "Insights facilitant la décision", "Rapport et domaines d'action"], desc: "La différence de Reflektif est de combiner la mesure scientifique avec l'expérience utilisateur et l'explicabilité assistée par l'IA." },
    ],
    ecoBadge: "ÉCOSYSTÈME",
    ecoTitle: "Pas un seul produit, mais un écosystème en croissance",
    ecoDesc: "La structure vivante avec l'expérience étudiante d'aujourd'hui s'étend avec des couches d'institution, de carrière, de RH et d'expérience accessible.",
    ecoModules: [
      { name: "Reflektif Étudiant", desc: "Produit actif ; test, analyse IA et correspondance de carrière", icon: "graduation" },
      { name: "Reflektif Institutions", desc: "Gestion collective, vue conseiller et suivi", icon: "building" },
      { name: "Reflektif Carrière", desc: "Réorientation et développement pour les adultes", icon: "briefcase" },
      { name: "Reflektif RH", desc: "Adéquation des rôles et visibilité des profils manquants", icon: "target" },
      { name: "Reflektif Accessible", desc: "Expériences accessibles et personnalisées", icon: "accessibility" },
    ],
    ecoQuote: "Profondeur individuelle pour les étudiants ; suivi évolutif pour les institutions.",
    valueBadge: "PROPOSITION DE VALEUR",
    valueTitle: "La structure qui différencie Reflektif",
    valueCards: [
      { title: "Base Scientifique", desc: "Établit l'orientation de carrière non pas de manière intuitive, mais avec des modèles psychométriques de validité internationale." },
      { title: "Profondeur Assistée par l'IA", desc: "Produit une expérience qui explique le résultat, le relie au contexte personnel et dialogue avec l'utilisateur." },
      { title: "Sortie Personnalisée", desc: "Combine scores, correspondance, rapport et domaines d'action dans le même flux." },
      { title: "Applicabilité à l'Échelle Institutionnelle", desc: "Répond au besoin de gestion collective et de suivi tout en préservant la qualité individuelle." },
    ],
    valueQuote: "Reflektif est l'une des rares marques capables de réunir test, technologie et orientation centrée sur l'humain dans la même phrase.",
    missionBadge: "ESSENCE DE MARQUE",
    missionTitle: "Notre Mission et Notre Vision",
    missionLabel: "Mission",
    visionLabel: "Vision",
    mission: "Nous croyons qu'il existe un potentiel unique attendant de se développer en chaque individu. Notre mission est de soutenir l'individu dans la construction d'un chemin qui crée de la valeur tant pour lui-même que pour la société, grâce à des outils scientifiques et un accompagnement assisté par l'IA qui rendent ce potentiel visible.",
    vision: "Nous visons à positionner Reflektif non pas simplement comme un outil d'évaluation, mais comme un compagnon fiable, scientifique et humain dans le parcours de réalisation de soi de l'individu. Notre objectif est de devenir une marque de référence durable qui combine la technologie génératrice d'insights avec une véritable orientation.",
    closingQuote: "Pour Reflektif, la technologie n'est pas un but ; c'est un outil qui permet à l'individu de voir sa propre direction plus clairement.",
    slogan: "Découvrez-vous. Choisissez votre avenir.",
  },
  en: {
    whyBadge: "WHY REFLEKTIF?",
    whyTitle: "Beyond traditional career guidance",
    whyQuote: "Reflektif goes beyond the classical guidance approach that aims to simply make individuals more conforming to the system.",
    whyDesc: "It's not about placing people into ready-made molds, but enabling them to discover their own potential, interests, and strengths. Career is not just a job choice. Career is the result of how an individual expresses themselves, contributes to society, and directs their life.",
    whyApproach: "Reflektif enables individuals to make the right decisions by knowing themselves.",
    whyFocus: "Focus: not \"what job can I do?\" but \"who am I, where do I create value, and how do I position myself for the future?\"",
    needTitle: "In a changing world, guidance must also evolve",
    needItems: [
      { icon: "trending", title: "Professions are rapidly transforming", desc: "Today's youth must prepare not only for today's jobs, but also for roles that are still taking shape." },
      { icon: "users", title: "Youth expect deeper support", desc: "Standard tests alone cannot explain the complex relationship between an individual's interests, personality, and values." },
      { icon: "building", title: "Institutions need scalable solutions", desc: "Schools and counseling structures are looking for systems that can track large numbers of students without losing individual depth." },
    ],
    needQuote: "Reflektif fills this gap by bringing together scientific measurement, AI-assisted interpretation, and comprehensive career matching in a single experience.",
    statsBadge: "STATISTICAL FACTS",
    statsTitle: "Youth and career challenges in Turkey",
    statsCards: [
      { value: "32.2%", label: "NEET Rate", desc: "Proportion of 15-29 year olds \"Not in Education, Employment, or Training\" in Turkey" },
      { value: "6.5M", label: "Youth Count", desc: "Number of young people not participating in any economic activity or education" },
      { value: "60%", label: "Career Dissatisfaction", desc: "Proportion of youth who think they won't find a job matching their skills after graduation" },
      { value: "45%+", label: "Global Mismatch", desc: "Mismatch between university graduates' career expectations and their current jobs worldwide" },
    ],
    statsSource: "Source: TÜİK Labor Statistics, OECD 2024 Youth Data and Education Outlook Reports",
    howBadge: "HOW IT WORKS",
    howTitle: "Personalized guidance in 3 steps",
    howSteps: [
      { num: "01", title: "Scientific Tests", desc: "Builds the user's profile multidimensionally with RIASEC, Big Five, and Values tests." },
      { num: "02", title: "AI Analysis", desc: "The AI engine interprets results, conducts personalized debriefing, and produces a diagnostic report." },
      { num: "03", title: "Career Matching", desc: "Makes compatibility scores, orientation areas, and action items visible among 920+ careers." },
    ],
    howQuote: "The result is not just a score list; it's an understandable, action-oriented, and personalized guidance set that facilitates the individual's decision.",
    methBadge: "METHODOLOGY",
    methTitle: "Scientific foundation, technological layer",
    methCols: [
      { title: "Scientific Foundation", items: ["Holland RIASEC", "Big Five Personality Model", "Professional Values Framework"], desc: "This structure captures the depth that single-layer tests miss by reading interest, personality, and values dimensions together." },
      { title: "AI Layer", items: ["Interprets results", "Produces personal debriefing", "Makes the report understandable"], desc: "Thus, the user accesses not only the data, but also the meaning of that data in their own life." },
      { title: "Output", items: ["Detailed matching scores", "Decision-facilitating insights", "Report and action areas"], desc: "Reflektif's difference is combining scientific measurement with user experience and AI-assisted explainability." },
    ],
    ecoBadge: "ECOSYSTEM",
    ecoTitle: "Not a single product, but a growing ecosystem",
    ecoDesc: "The structure alive with today's student experience expands with institution, career, HR, and accessible experience layers.",
    ecoModules: [
      { name: "Reflektif Student", desc: "Active product; testing, AI analysis, and career matching", icon: "graduation" },
      { name: "Reflektif Institutions", desc: "Bulk management, counselor view, and tracking", icon: "building" },
      { name: "Reflektif Career", desc: "Reorientation and development for adults", icon: "briefcase" },
      { name: "Reflektif HR", desc: "Role fit and missing profile visibility", icon: "target" },
      { name: "Reflektif Accessible", desc: "Accessible and personalized experiences", icon: "accessibility" },
    ],
    ecoQuote: "Individual depth for students; scalable tracking for institutions.",
    valueBadge: "VALUE PROPOSITION",
    valueTitle: "The structure that differentiates Reflektif",
    valueCards: [
      { title: "Scientific Foundation", desc: "Establishes career guidance not just intuitively, but with psychometric models of international validity." },
      { title: "AI-Powered Depth", desc: "Produces an experience that explains the result, relates it to personal context, and converses with the user." },
      { title: "Personalized Output", desc: "Combines scores, matching, reports, and action areas in the same flow." },
      { title: "Institutional Scalability", desc: "Responds to the need for bulk management and monitoring while preserving individual quality." },
    ],
    valueQuote: "Reflektif is one of the rare brands that can bring together testing, technology, and human-centered guidance in the same sentence.",
    missionBadge: "BRAND ESSENCE",
    missionTitle: "Our Mission and Vision",
    missionLabel: "Mission",
    visionLabel: "Vision",
    mission: "We believe there is a unique potential waiting to develop within every individual. Our mission is to support individuals in building a path that creates value for both themselves and society, through scientific tools and AI-assisted guidance that make this potential visible.",
    vision: "We aim to position Reflektif not merely as an assessment tool, but as a reliable, scientific, and humane companion in the individual's journey of self-realization. Our goal is to become a lasting reference brand that combines insight-generating technology with genuine guidance.",
    closingQuote: "For Reflektif, technology is not the goal; it's a tool that enables people to see their own direction more clearly.",
    slogan: "Discover yourself. Choose your future.",
  },
};

const iconMap: Record<string, React.ElementType> = {
  trending: TrendingUp,
  users: Users,
  building: Building2,
  graduation: GraduationCap,
  briefcase: Briefcase,
  target: Target,
  accessibility: Accessibility,
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function CorporateSection({ lang }: { lang: Language }) {
  const c = content[lang];

  return (
    <div className="print:break-before-page">
      {/* ─── NEDEN REFLEKTİF ─── */}
      <section className="border-t border-border/40 bg-muted/10">
        <div className="container py-14 sm:py-20">
          <motion.div {...fadeUp}>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary/70 font-medium">
              {c.whyBadge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6 leading-tight">
              {c.whyTitle}
            </h2>
          </motion.div>

          <motion.blockquote
            {...fadeUp}
            className="border-l-4 border-primary/30 pl-5 py-2 mb-8 text-base sm:text-lg text-foreground/80 italic leading-relaxed max-w-3xl"
          >
            {c.whyQuote}
          </motion.blockquote>

          <motion.p {...fadeUp} className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl mb-4">
            {c.whyDesc}
          </motion.p>
          <motion.p {...fadeUp} className="text-sm font-medium text-foreground mb-2">
            {c.whyApproach}
          </motion.p>
          <motion.p {...fadeUp} className="text-sm text-primary/80 font-medium italic">
            {c.whyFocus}
          </motion.p>

          {/* İhtiyaç Kartları */}
          <motion.div {...fadeUp} className="mt-10">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6">{c.needTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {c.needItems.map((item, i) => {
                const Icon = iconMap[item.icon] || Lightbulb;
                return (
                  <div key={i} className="p-5 sm:p-6 rounded-lg border border-border/50 bg-card hover:border-primary/20 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                      <Icon className="w-4.5 h-4.5 text-primary/70" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-3xl italic">
              {c.needQuote}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── İSTATİSTİKLER ─── */}
      <section className="border-t border-border/40">
        <div className="container py-14 sm:py-20">
          <motion.div {...fadeUp}>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary/70 font-medium">
              {c.statsBadge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-8 leading-tight">
              {c.statsTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {c.statsCards.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 sm:p-6 rounded-lg border border-border/50 bg-card"
              >
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span className="text-2xl sm:text-3xl font-display font-bold text-foreground">{stat.value}</span>
                </div>
                <p className="text-sm font-semibold text-foreground mb-1.5">{stat.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="mt-6 text-[11px] text-muted-foreground/70 italic">
            {c.statsSource}
          </motion.p>
        </div>
      </section>

      {/* ─── NASIL ÇALIŞIR ─── */}
      <section className="border-t border-border/40 bg-muted/10">
        <div className="container py-14 sm:py-20">
          <motion.div {...fadeUp}>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary/70 font-medium">
              {c.howBadge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-10 leading-tight">
              {c.howTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {c.howSteps.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="text-5xl sm:text-6xl font-display font-bold text-primary/8 mb-3 leading-none select-none">
                  {step.num}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {i < 2 && (
                  <div className="hidden md:flex absolute top-8 -right-4 w-8 h-8 items-center justify-center text-muted-foreground/30">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.blockquote
            {...fadeUp}
            className="mt-10 border-l-4 border-primary/30 pl-5 py-2 text-sm sm:text-base text-foreground/80 italic leading-relaxed max-w-3xl"
          >
            {c.howQuote}
          </motion.blockquote>
        </div>
      </section>

      {/* ─── METODOLOJİ ─── */}
      <section className="border-t border-border/40">
        <div className="container py-14 sm:py-20">
          <motion.div {...fadeUp}>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary/70 font-medium">
              {c.methBadge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-10 leading-tight">
              {c.methTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {c.methCols.map((col, i) => {
              const icons = [Shield, Brain, Sparkles];
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 sm:p-6 rounded-lg border border-border/50 bg-card"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-md bg-primary/5 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary/70" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary/50 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground leading-relaxed italic">{col.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── EKOSİSTEM ─── */}
      <section className="border-t border-border/40 bg-muted/10">
        <div className="container py-14 sm:py-20">
          <motion.div {...fadeUp}>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary/70 font-medium">
              {c.ecoBadge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-3 leading-tight">
              {c.ecoTitle}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-8">
              {c.ecoDesc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {c.ecoModules.map((mod, i) => {
              const Icon = iconMap[mod.icon] || Layers;
              const isActive = i === 0;
              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`p-4 sm:p-5 rounded-lg border transition-colors ${
                    isActive
                      ? "border-primary/30 bg-primary/[0.03]"
                      : "border-border/50 bg-card"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                    <span className={`text-xs font-semibold ${isActive ? "text-primary" : "text-foreground"}`}>
                      {mod.name}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{mod.desc}</p>
                  {isActive && (
                    <span className="inline-block mt-2 text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {lang === "tr" ? "Aktif" : lang === "fr" ? "Actif" : "Active"}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.p {...fadeUp} className="mt-8 text-sm text-foreground/80 font-medium italic text-center">
            {c.ecoQuote}
          </motion.p>
        </div>
      </section>

      {/* ─── DEĞER ÖNERİSİ ─── */}
      <section className="border-t border-border/40">
        <div className="container py-14 sm:py-20">
          <motion.div {...fadeUp}>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary/70 font-medium">
              {c.valueBadge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-8 leading-tight">
              {c.valueTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl">
            {c.valueCards.map((card, i) => {
              const icons = [Shield, Brain, Target, Building2];
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 sm:p-6 rounded-lg border border-border/50 bg-card hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <Icon className="w-4.5 h-4.5 text-primary/60" />
                    <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.p {...fadeUp} className="mt-8 text-sm text-foreground/80 font-medium italic max-w-3xl">
            {c.valueQuote}
          </motion.p>
        </div>
      </section>

      {/* ─── MİSYON & VİZYON ─── */}
      <section className="border-t border-border/40 bg-muted/10">
        <div className="container py-14 sm:py-20">
          <motion.div {...fadeUp}>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary/70 font-medium">
              {c.missionBadge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-8 leading-tight">
              {c.missionTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl">
            <motion.div
              {...fadeUp}
              className="p-6 sm:p-8 rounded-lg border border-border/50 bg-card"
            >
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-4.5 h-4.5 text-primary/60" />
                <span className="text-xs uppercase tracking-wider font-semibold text-primary/70">{c.missionLabel}</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{c.mission}</p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 sm:p-8 rounded-lg border border-border/50 bg-card"
            >
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-4.5 h-4.5 text-primary/60" />
                <span className="text-xs uppercase tracking-wider font-semibold text-primary/70">{c.visionLabel}</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{c.vision}</p>
            </motion.div>
          </div>

          <motion.blockquote
            {...fadeUp}
            className="mt-8 text-center max-w-2xl mx-auto"
          >
            <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">
              {c.closingQuote}
            </p>
            <p className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              {c.slogan}
            </p>
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
}
