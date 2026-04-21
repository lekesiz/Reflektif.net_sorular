/*
 * DESIGN: Editorial / Dergi Düzeni
 * Data layer for all 110 test questions - TR / FR / EN trilingual
 */

export type Language = "tr" | "fr" | "en";

export interface Question {
  id: number;
  textTr: string;
  textFr: string;
  textEn: string;
  isReversed?: boolean;
}

export interface SubCategory {
  name: Record<Language, string>;
  code: string;
  color: string;
  questions: Question[];
}

export interface TestData {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  model: string;
  questionCount: number;
  duration: Record<Language, string>;
  dimensions: Record<Language, string>;
  scale: Record<Language, string>;
  illustration: string;
  subCategories: SubCategory[];
  scientificBasis: {
    source: string;
    reliability: Record<Language, string>;
    usage: Record<Language, string>;
  };
}

export const uiStrings: Record<Language, Record<string, string>> = {
  tr: {
    siteTitle: "reflektif",
    questionCount: "110 Soru",
    testCount: "3 Test",
    preparedFor: "Prof. Dr. İzzet Er için Hazırlanmıştır",
    heroTitle1: "Reflektif Test",
    heroTitle2: "Soruları",
    heroDesc: "RIASEC, Big Five ve Değerler testlerinden oluşan 110 soruyu kapsayan kapsamlı soru kataloğu. Türkçe, Fransızca ve İngilizce dil desteği ile.",
    questions: "soru",
    total: "Toplam",
    preparedBy: "Hazırlayan: OpenClaw AI",
    date: "17 Nisan 2026",
    dimensions: "Boyutlar",
    duration: "Süre",
    scale: "Ölçek",
    scientificBasis: "Bilimsel Temel",
    reliability: "Güvenilirlik",
    usage: "Kullanım",
    reversedNote: "Yanında uyarı ikonu bulunan sorular ters puanlanır (6 - puan).",
    note: "Not",
    scientificBasisTitle: "Bilimsel Temel",
    usageInfoTitle: "Kullanım Bilgisi",
    usageInfoDesc: "Bu testler lise ve üniversite öğrencileri ile genç yetişkinler için tasarlanmıştır. Reflektif.net platformunda web ve mobil olarak sunulmaktadır.",
    languages: "Diller",
    languagesValue: "Türkçe, Fransızca, İngilizce",
    aiIntegration: "Yapay Zeka Entegrasyonu",
    aiIntegrationValue: "Her test sonrası AI debriefing, kişiselleştirilmiş analiz, 920+ meslek eşleştirmesi",
    contact: "İletişim",
    footerPrepared: "Prof. Dr. İzzet Er'e iletilmek üzere hazırlanmıştır",
    scrollTop: "Sayfanın başına dön",
    searchPlaceholder: "Sorularda ara...",
    searchResults: "sonuç bulundu",
    noResults: "Sonuç bulunamadı",
    downloadPdf: "PDF İndir",
    questionNumber: "Soru sayısı",
    downloadingPdf: "PDF hazırlanıyor...",
    allTests: "Tüm Testler",
  },
  fr: {
    siteTitle: "reflektif",
    questionCount: "110 Questions",
    testCount: "3 Tests",
    preparedFor: "Préparé pour Prof. Dr. İzzet Er",
    heroTitle1: "Questions de Test",
    heroTitle2: "Reflektif",
    heroDesc: "Catalogue complet de 110 questions couvrant les tests RIASEC, Big Five et Valeurs. Avec support linguistique en turc, français et anglais.",
    questions: "questions",
    total: "Total",
    preparedBy: "Préparé par: OpenClaw AI",
    date: "17 Avril 2026",
    dimensions: "Dimensions",
    duration: "Durée",
    scale: "Échelle",
    scientificBasis: "Base Scientifique",
    reliability: "Fiabilité",
    usage: "Utilisation",
    reversedNote: "Les questions avec une icône d'avertissement sont notées inversement (6 - score).",
    note: "Note",
    scientificBasisTitle: "Base Scientifique",
    usageInfoTitle: "Informations d'Utilisation",
    usageInfoDesc: "Ces tests sont conçus pour les lycéens, les étudiants universitaires et les jeunes adultes. Ils sont disponibles sur la plateforme reflektif.net en version web et mobile.",
    languages: "Langues",
    languagesValue: "Turc, Français, Anglais",
    aiIntegration: "Intégration IA",
    aiIntegrationValue: "Débriefing IA après chaque test, analyse personnalisée, correspondance avec 920+ métiers",
    contact: "Contact",
    footerPrepared: "Préparé pour être transmis au Prof. Dr. İzzet Er",
    scrollTop: "Retour en haut",
    searchPlaceholder: "Rechercher dans les questions...",
    searchResults: "résultats trouvés",
    noResults: "Aucun résultat",
    downloadPdf: "Télécharger PDF",
    questionNumber: "Nombre de questions",
    downloadingPdf: "Préparation du PDF...",
    allTests: "Tous les Tests",
  },
  en: {
    siteTitle: "reflektif",
    questionCount: "110 Questions",
    testCount: "3 Tests",
    preparedFor: "Prepared for Prof. Dr. İzzet Er",
    heroTitle1: "Reflektif Test",
    heroTitle2: "Questions",
    heroDesc: "Comprehensive question catalog covering 110 questions from RIASEC, Big Five and Values tests. With Turkish, French and English language support.",
    questions: "questions",
    total: "Total",
    preparedBy: "Prepared by: OpenClaw AI",
    date: "April 17, 2026",
    dimensions: "Dimensions",
    duration: "Duration",
    scale: "Scale",
    scientificBasis: "Scientific Basis",
    reliability: "Reliability",
    usage: "Usage",
    reversedNote: "Questions with a warning icon are reverse-scored (6 - score).",
    note: "Note",
    scientificBasisTitle: "Scientific Basis",
    usageInfoTitle: "Usage Information",
    usageInfoDesc: "These tests are designed for high school and university students and young adults. They are available on the reflektif.net platform for web and mobile.",
    languages: "Languages",
    languagesValue: "Turkish, French, English",
    aiIntegration: "AI Integration",
    aiIntegrationValue: "AI debriefing after each test, personalized analysis, 920+ career matching",
    contact: "Contact",
    footerPrepared: "Prepared to be delivered to Prof. Dr. İzzet Er",
    scrollTop: "Back to top",
    searchPlaceholder: "Search questions...",
    searchResults: "results found",
    noResults: "No results found",
    downloadPdf: "Download PDF",
    questionNumber: "Question count",
    downloadingPdf: "Preparing PDF...",
    allTests: "All Tests",
  },
};

export const testsData: TestData[] = [
  {
    id: "riasec",
    title: { tr: "RIASEC Testi", fr: "Test RIASEC", en: "RIASEC Test" },
    subtitle: {
      tr: "Holland Modeli - Mesleki İlgi Alanları",
      fr: "Modèle Holland - Intérêts Professionnels",
      en: "Holland Model - Vocational Interests",
    },
    model: "Holland, J.L. (1997)",
    questionCount: 30,
    duration: { tr: "8-10 dakika", fr: "8-10 minutes", en: "8-10 minutes" },
    dimensions: { tr: "6 boyut (R, I, A, S, E, C)", fr: "6 dimensions (R, I, A, S, E, C)", en: "6 dimensions (R, I, A, S, E, C)" },
    scale: { tr: "1 (Hiç katılmıyorum) - 5 (Tamamen katılıyorum)", fr: "1 (Pas du tout d'accord) - 5 (Tout à fait d'accord)", en: "1 (Strongly disagree) - 5 (Strongly agree)" },
    illustration: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/Wf28C7YSdBJR86NVxiW7bx/riasec-illustration-aNTZCnF3qzmqiZe9VDQe9j.webp",
    subCategories: [
      {
        name: { tr: "Gerçekçi", fr: "Réaliste", en: "Realistic" },
        code: "R",
        color: "#DC2626",
        questions: [
          { id: 1, textTr: "Nesneleri veya makineleri tamir etmeyi severim", textFr: "J'aime réparer des objets ou des machines", textEn: "I enjoy repairing objects or machines" },
          { id: 2, textTr: "Fikirlerle çalışmaktansa ellerimle çalışmayı tercih ederim", textFr: "Je préfère travailler avec mes mains plutôt qu'avec des idées", textEn: "I prefer working with my hands rather than with ideas" },
          { id: 3, textTr: "Fiziksel ve sportif aktiviteleri severim", textFr: "J'aime les activités physiques et sportives", textEn: "I enjoy physical and sports activities" },
          { id: 4, textTr: "Araçlar ve teknik ekipmanlarla rahatım", textFr: "Je suis à l'aise avec les outils et les équipements techniques", textEn: "I am comfortable with tools and technical equipment" },
          { id: 5, textTr: "Somut ve elle tutulur sonuçları tercih ederim", textFr: "Je préfère les résultats concrets et tangibles", textEn: "I prefer concrete and tangible results" },
        ],
      },
      {
        name: { tr: "Araştırmacı", fr: "Investigateur", en: "Investigative" },
        code: "I",
        color: "#2563EB",
        questions: [
          { id: 6, textTr: "Karmaşık problemleri çözmeyi severim", textFr: "J'aime résoudre des problèmes complexes", textEn: "I enjoy solving complex problems" },
          { id: 7, textTr: "Meraklıyım ve yeni şeyler öğrenmeyi severim", textFr: "Je suis curieux(se) et j'aime apprendre de nouvelles choses", textEn: "I am curious and enjoy learning new things" },
          { id: 8, textTr: "Hareket etmeden önce durumları analiz etmeyi tercih ederim", textFr: "Je préfère analyser les situations avant d'agir", textEn: "I prefer to analyze situations before acting" },
          { id: 9, textTr: "Bilim ve araştırma ilgimi çeker", textFr: "Les sciences et la recherche m'intéressent", textEn: "Science and research interest me" },
          { id: 10, textTr: "Şeylerin nasıl çalıştığını anlamayı severim", textFr: "J'aime comprendre comment les choses fonctionnent", textEn: "I enjoy understanding how things work" },
        ],
      },
      {
        name: { tr: "Sanatsal", fr: "Artistique", en: "Artistic" },
        code: "A",
        color: "#D97706",
        questions: [
          { id: 11, textTr: "Özgün şeyler yaratmayı severim", textFr: "J'aime créer des choses originales", textEn: "I enjoy creating original things" },
          { id: 12, textTr: "Sanat, müzik veya yazı yoluyla kendimi kolayca ifade ederim", textFr: "Je m'exprime facilement par l'art, la musique ou l'écriture", textEn: "I express myself easily through art, music or writing" },
          { id: 13, textTr: "Yaratıcı ve alışılmadık ortamları severim", textFr: "J'aime les environnements créatifs et non conventionnels", textEn: "I enjoy creative and unconventional environments" },
          { id: 14, textTr: "Estetik ve tasarım benim için önemlidir", textFr: "L'esthétique et le design sont importants pour moi", textEn: "Aesthetics and design are important to me" },
          { id: 15, textTr: "Katı kurallar yerine ifade özgürlüğünü tercih ederim", textFr: "Je préfère la liberté d'expression aux règles strictes", textEn: "I prefer freedom of expression over strict rules" },
        ],
      },
      {
        name: { tr: "Sosyal", fr: "Social", en: "Social" },
        code: "S",
        color: "#16A34A",
        questions: [
          { id: 16, textTr: "Başkalarının sorunlarını çözmelerine yardım etmeyi severim", textFr: "J'aime aider les autres à résoudre leurs problèmes", textEn: "I enjoy helping others solve their problems" },
          { id: 17, textTr: "Sosyal etkileşimlerde rahatım", textFr: "Je suis à l'aise dans les interactions sociales", textEn: "I am comfortable in social interactions" },
          { id: 18, textTr: "Başkalarına öğretmek veya eğitim vermek ilgimi çeker", textFr: "Enseigner ou former les autres m'intéresse", textEn: "Teaching or training others interests me" },
          { id: 19, textTr: "Başkalarının refahına katkıda bulunduğumda kendimi yararlı hissederim", textFr: "Je me sens utile quand je contribue au bien-être des autres", textEn: "I feel useful when I contribute to the well-being of others" },
          { id: 20, textTr: "Verilerle çalışmaktansa insanlarla çalışmayı tercih ederim", textFr: "Je préfère travailler avec des personnes plutôt qu'avec des données", textEn: "I prefer working with people rather than with data" },
        ],
      },
      {
        name: { tr: "Girişimci", fr: "Entreprenant", en: "Enterprising" },
        code: "E",
        color: "#CA8A04",
        questions: [
          { id: 21, textTr: "Yönetmeyi ve başkalarını etkilemeyi severim", textFr: "J'aime diriger et influencer les autres", textEn: "I enjoy leading and influencing others" },
          { id: 22, textTr: "Zorluklardan ve rekabetten motive olurum", textFr: "Je suis motivé(e) par les défis et la compétition", textEn: "I am motivated by challenges and competition" },
          { id: 23, textTr: "Kendi işimi kurmayı hayal ediyorum", textFr: "Je rêve de créer ma propre entreprise", textEn: "I dream of starting my own business" },
          { id: 24, textTr: "Önemli kararlar almakta rahatım", textFr: "Je suis à l'aise pour prendre des décisions importantes", textEn: "I am comfortable making important decisions" },
          { id: 25, textTr: "Finansal başarı benim için önemlidir", textFr: "La réussite financière est importante pour moi", textEn: "Financial success is important to me" },
        ],
      },
      {
        name: { tr: "Geleneksel", fr: "Conventionnel", en: "Conventional" },
        code: "C",
        color: "#7C3AED",
        questions: [
          { id: 26, textTr: "Şeylerin iyi organize edilmiş ve yapılandırılmış olmasını severim", textFr: "J'aime que les choses soient bien organisées et structurées", textEn: "I like things to be well organized and structured" },
          { id: 27, textTr: "Belirlenmiş prosedürleri takip etmeyi tercih ederim", textFr: "Je préfère suivre des procédures établies", textEn: "I prefer to follow established procedures" },
          { id: 28, textTr: "Titizim ve detaylara dikkat ederim", textFr: "Je suis minutieux(se) et attentif(ve) aux détails", textEn: "I am meticulous and attentive to details" },
          { id: 29, textTr: "Sayılar ve verilerle çalışmayı severim", textFr: "J'aime travailler avec des chiffres et des données", textEn: "I enjoy working with numbers and data" },
          { id: 30, textTr: "İstikrar ve güvenlik benim için önemlidir", textFr: "La stabilité et la sécurité sont importantes pour moi", textEn: "Stability and security are important to me" },
        ],
      },
    ],
    scientificBasis: {
      source: "Holland, J.L. (1997). Making Vocational Choices: A Theory of Vocational Personalities and Work Environments",
      reliability: { tr: "50+ yıllık araştırma geçmişi", fr: "Plus de 50 ans de recherche", en: "50+ years of research history" },
      usage: { tr: "Dünya çapında kariyer danışmanlığında standart", fr: "Standard mondial en orientation professionnelle", en: "Global standard in career counseling" },
    },
  },
  {
    id: "bigfive",
    title: { tr: "Big Five Testi", fr: "Test Big Five", en: "Big Five Test" },
    subtitle: {
      tr: "Costa & McCrae Modeli - Kişilik Özellikleri",
      fr: "Modèle Costa & McCrae - Traits de Personnalité",
      en: "Costa & McCrae Model - Personality Traits",
    },
    model: "Costa, P.T. & McCrae, R.R. (1992)",
    questionCount: 50,
    duration: { tr: "12-15 dakika", fr: "12-15 minutes", en: "12-15 minutes" },
    dimensions: { tr: "5 boyut (O, C, E, A, N)", fr: "5 dimensions (O, C, E, A, N)", en: "5 dimensions (O, C, E, A, N)" },
    scale: { tr: "1 (Hiç katılmıyorum) - 5 (Tamamen katılıyorum)", fr: "1 (Pas du tout d'accord) - 5 (Tout à fait d'accord)", en: "1 (Strongly disagree) - 5 (Strongly agree)" },
    illustration: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/Wf28C7YSdBJR86NVxiW7bx/bigfive-illustration-HLUMQkruJHUbyFFDrhoMxx.webp",
    subCategories: [
      {
        name: { tr: "Açıklık", fr: "Ouverture", en: "Openness" },
        code: "O",
        color: "#D97706",
        questions: [
          { id: 1, textTr: "Zengin bir hayal gücüm var", textFr: "J'ai une imagination débordante", textEn: "I have a rich imagination" },
          { id: 2, textTr: "Sanat ve kültürle ilgileniyorum", textFr: "Je m'intéresse à l'art et à la culture", textEn: "I am interested in art and culture" },
          { id: 3, textTr: "Yeni şeyler denemeyi severim", textFr: "J'aime essayer de nouvelles choses", textEn: "I enjoy trying new things" },
          { id: 4, textTr: "Rutinleri ve alışkanlıkları tercih ederim", textFr: "Je préfère les routines et les habitudes", textEn: "I prefer routines and habits", isReversed: true },
          { id: 5, textTr: "Birçok farklı şey hakkında meraklıyım", textFr: "Je suis curieux de beaucoup de choses différentes", textEn: "I am curious about many different things" },
          { id: 6, textTr: "Soyut fikirler üzerinde düşünmeyi severim", textFr: "J'aime réfléchir à des idées abstraites", textEn: "I enjoy thinking about abstract ideas" },
          { id: 7, textTr: "Felsefi tartışmaları sıkıcı buluyorum", textFr: "Je trouve les discussions philosophiques ennuyeuses", textEn: "I find philosophical discussions boring", isReversed: true },
          { id: 8, textTr: "Sanatta ve doğada güzelliği takdir ederim", textFr: "J'apprécie la beauté dans l'art et la nature", textEn: "I appreciate beauty in art and nature" },
          { id: 9, textTr: "Basit ve pratik şeyleri tercih ederim", textFr: "Je préfère les choses simples et pratiques", textEn: "I prefer simple and practical things", isReversed: true },
          { id: 10, textTr: "Yeni fikirleri keşfetmeyi severim", textFr: "J'aime explorer de nouvelles idées", textEn: "I enjoy exploring new ideas" },
        ],
      },
      {
        name: { tr: "Sorumluluk", fr: "Conscienciosité", en: "Conscientiousness" },
        code: "C",
        color: "#2563EB",
        questions: [
          { id: 11, textTr: "Her zaman iyi hazırlanırım", textFr: "Je suis toujours bien préparé", textEn: "I am always well prepared" },
          { id: 12, textTr: "Detaylara dikkat ederim", textFr: "Je fais attention aux détails", textEn: "I pay attention to details" },
          { id: 13, textTr: "Başladığım her şeyi bitiririm", textFr: "Je termine toujours ce que je commence", textEn: "I finish everything I start" },
          { id: 14, textTr: "Eşyalarımı genellikle dağınık bırakırım", textFr: "Je laisse souvent mes affaires en désordre", textEn: "I often leave my things in a mess", isReversed: true },
          { id: 15, textTr: "Düzenli ve metodik biriyim", textFr: "Je suis organisé et méthodique", textEn: "I am organized and methodical" },
          { id: 16, textTr: "Taahhütlerime her zaman saygı gösteririm", textFr: "Je respecte toujours mes engagements", textEn: "I always respect my commitments" },
          { id: 17, textTr: "İşleri sık sık erteliyorum", textFr: "Je remets souvent les choses à plus tard", textEn: "I often procrastinate", isReversed: true },
          { id: 18, textTr: "Aktivitelerimi önceden planlarım", textFr: "Je planifie mes activités à l'avance", textEn: "I plan my activities in advance" },
          { id: 19, textTr: "Sorumluluklarımda dikkatsizim", textFr: "Je suis négligent avec mes responsabilités", textEn: "I am careless with my responsibilities", isReversed: true },
          { id: 20, textTr: "Hedeflerime ulaşmak için çok çalışırım", textFr: "Je travaille dur pour atteindre mes objectifs", textEn: "I work hard to achieve my goals" },
        ],
      },
      {
        name: { tr: "Dışa Dönüklük", fr: "Extraversion", en: "Extraversion" },
        code: "E",
        color: "#DC2626",
        questions: [
          { id: 21, textTr: "Partinin can alıcı noktasıyım", textFr: "Je suis l'âme de la fête", textEn: "I am the life of the party" },
          { id: 22, textTr: "İnsanlarla çevrili olmayı severim", textFr: "J'aime être entouré de gens", textEn: "I enjoy being surrounded by people" },
          { id: 23, textTr: "Sosyal ortamlarda rahatım", textFr: "Je me sens à l'aise en société", textEn: "I feel comfortable in social settings" },
          { id: 24, textTr: "Gruplarda geri planda kalmayı tercih ederim", textFr: "Je préfère rester en retrait dans les groupes", textEn: "I prefer to stay in the background in groups", isReversed: true },
          { id: 25, textTr: "Yabancılarla kolayca konuşurum", textFr: "Je parle facilement avec des inconnus", textEn: "I talk easily with strangers" },
          { id: 26, textTr: "Dikkat çekmeyi severim", textFr: "J'aime attirer l'attention", textEn: "I enjoy attracting attention" },
          { id: 27, textTr: "Oldukça çekingen ve sakiniim", textFr: "Je suis plutôt réservé et calme", textEn: "I am rather reserved and quiet", isReversed: true },
          { id: 28, textTr: "Başkalarının yanında enerjik hissederim", textFr: "Je me sens énergisé en compagnie d'autres personnes", textEn: "I feel energized in the company of others" },
          { id: 29, textTr: "Yalnız aktiviteleri tercih ederim", textFr: "Je préfère les activités solitaires", textEn: "I prefer solitary activities", isReversed: true },
          { id: 30, textTr: "Topluluk önünde kolayca konuşurum", textFr: "Je prends facilement la parole en public", textEn: "I speak easily in public" },
        ],
      },
      {
        name: { tr: "Uyumluluk", fr: "Agréabilité", en: "Agreeableness" },
        code: "A",
        color: "#16A34A",
        questions: [
          { id: 31, textTr: "Başkalarının sorunlarıyla ilgilenirim", textFr: "Je m'intéresse aux problèmes des autres", textEn: "I take an interest in other people's problems" },
          { id: 32, textTr: "Başkalarının ihtiyaçlarını kendimininkinden önce tutarım", textFr: "Je fais passer les besoins des autres avant les miens", textEn: "I put others' needs before my own" },
          { id: 33, textTr: "Empatik ve anlayışlıyım", textFr: "Je suis empathique et compréhensif", textEn: "I am empathetic and understanding" },
          { id: 34, textTr: "Başkalarını sık sık eleştiririm", textFr: "Je critique souvent les autres", textEn: "I often criticize others", isReversed: true },
          { id: 35, textTr: "İnsanlara mümkün olduğunca yardım etmeye çalışırım", textFr: "J'essaie d'aider les gens autant que possible", textEn: "I try to help people as much as possible" },
          { id: 36, textTr: "İnsanlara kolayca güvenirim", textFr: "Je fais confiance aux gens facilement", textEn: "I trust people easily" },
          { id: 37, textTr: "Sert ve acımasız olabilirim", textFr: "Je peux être dur et impitoyable", textEn: "I can be harsh and ruthless", isReversed: true },
          { id: 38, textTr: "Cömert ve özgeciyim", textFr: "Je suis généreux et altruiste", textEn: "I am generous and altruistic" },
          { id: 39, textTr: "Başkalarının duygularını pek umursamam", textFr: "Je me soucie peu des sentiments des autres", textEn: "I don't care much about others' feelings", isReversed: true },
          { id: 40, textTr: "Her zaman uzlaşma ararım", textFr: "Je cherche toujours le compromis", textEn: "I always seek compromise" },
        ],
      },
      {
        name: { tr: "Nevrotiklik", fr: "Névrosisme", en: "Neuroticism" },
        code: "N",
        color: "#7C3AED",
        questions: [
          { id: 41, textTr: "Sık sık endişelenirim", textFr: "Je m'inquiète souvent", textEn: "I worry often" },
          { id: 42, textTr: "Kolayca strese girerim", textFr: "Je suis facilement stressé", textEn: "I get stressed easily" },
          { id: 43, textTr: "Duygularım hızla değişir", textFr: "Mes émotions changent rapidement", textEn: "My emotions change quickly" },
          { id: 44, textTr: "Stresli durumlarda sakin kalırım", textFr: "Je reste calme dans les situations stressantes", textEn: "I stay calm in stressful situations", isReversed: true },
          { id: 45, textTr: "Sık sık üzgün veya depresif hissederim", textFr: "Je me sens souvent triste ou déprimé", textEn: "I often feel sad or depressed" },
          { id: 46, textTr: "Kolayca paniğe kapılırım", textFr: "Je panique facilement", textEn: "I panic easily" },
          { id: 47, textTr: "Duygusal olarak stabilim", textFr: "Je suis émotionnellement stable", textEn: "I am emotionally stable", isReversed: true },
          { id: 48, textTr: "Önemsiz şeyler için endişelenirim", textFr: "Je me fais du souci pour des choses sans importance", textEn: "I worry about unimportant things" },
          { id: 49, textTr: "Baskıyı iyi yönetirim", textFr: "Je gère bien la pression", textEn: "I handle pressure well", isReversed: true },
          { id: 50, textTr: "Sık sık kaygılıyım", textFr: "Je suis souvent anxieux", textEn: "I am often anxious" },
        ],
      },
    ],
    scientificBasis: {
      source: "Costa, P.T. & McCrae, R.R. (1992). NEO-PI-R Professional Manual",
      reliability: { tr: "En yaygın kabul gören kişilik modeli", fr: "Le modèle de personnalité le plus largement accepté", en: "The most widely accepted personality model" },
      usage: { tr: "Psikoloji, İK, eğitim alanlarında standart", fr: "Standard en psychologie, RH et éducation", en: "Standard in psychology, HR and education" },
    },
  },
  {
    id: "values",
    title: { tr: "Değerler Testi", fr: "Test de Valeurs", en: "Values Test" },
    subtitle: {
      tr: "Super's Work Values Inventory - Mesleki Değerler",
      fr: "Inventaire des Valeurs de Super - Valeurs Professionnelles",
      en: "Super's Work Values Inventory - Work Values",
    },
    model: "Super, D.E. (1970)",
    questionCount: 30,
    duration: { tr: "8-10 dakika", fr: "8-10 minutes", en: "8-10 minutes" },
    dimensions: { tr: "6 boyut", fr: "6 dimensions", en: "6 dimensions" },
    scale: { tr: "1 (Önemli değil) - 5 (Çok önemli)", fr: "1 (Pas important) - 5 (Très important)", en: "1 (Not important) - 5 (Very important)" },
    illustration: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/Wf28C7YSdBJR86NVxiW7bx/values-illustration-cSdmFhenrW3asjPm7fu7AL.webp",
    subCategories: [
      {
        name: { tr: "Başarı", fr: "Accomplissement", en: "Achievement" },
        code: "Achievement",
        color: "#DC2626",
        questions: [
          { id: 1, textTr: "Zorlukların üstesinden gelmemi sağlayan bir işe sahip olmak", textFr: "Avoir un travail qui me permet de relever des défis", textEn: "Having a job that allows me to overcome challenges" },
          { id: 2, textTr: "Hırslı hedeflere ulaşmak", textFr: "Atteindre des objectifs ambitieux", textEn: "Achieving ambitious goals" },
          { id: 3, textTr: "Kariyerimde hızla ilerlemek", textFr: "Progresser rapidement dans ma carrière", textEn: "Advancing quickly in my career" },
          { id: 4, textTr: "Alanımda mükemmel olmak", textFr: "Exceller dans mon domaine", textEn: "Excelling in my field" },
          { id: 5, textTr: "Önemli sorumluluklar almak", textFr: "Avoir des responsabilités importantes", textEn: "Taking on important responsibilities" },
        ],
      },
      {
        name: { tr: "Özerklik", fr: "Indépendance", en: "Independence" },
        code: "Independence",
        color: "#2563EB",
        questions: [
          { id: 6, textTr: "Özerk çalışmak", textFr: "Travailler de manière autonome", textEn: "Working autonomously" },
          { id: 7, textTr: "Kendi kararlarımı vermek", textFr: "Prendre mes propres décisions", textEn: "Making my own decisions" },
          { id: 8, textTr: "İşimi organize etme özgürlüğüne sahip olmak", textFr: "Avoir la liberté d'organiser mon travail", textEn: "Having the freedom to organize my work" },
          { id: 9, textTr: "Sürekli denetlenmemek", textFr: "Ne pas être constamment supervisé", textEn: "Not being constantly supervised" },
          { id: 10, textTr: "Kendi patronum olmak", textFr: "Être mon propre patron", textEn: "Being my own boss" },
        ],
      },
      {
        name: { tr: "Tanınma", fr: "Reconnaissance", en: "Recognition" },
        code: "Recognition",
        color: "#D97706",
        questions: [
          { id: 11, textTr: "Başarılarım için tanınmak", textFr: "Être reconnu pour mes accomplissements", textEn: "Being recognized for my achievements" },
          { id: 12, textTr: "Yüksek sosyal statüye sahip olmak", textFr: "Avoir un statut social élevé", textEn: "Having a high social status" },
          { id: 13, textTr: "Ödüller ve terfiler almak", textFr: "Recevoir des récompenses et des promotions", textEn: "Receiving awards and promotions" },
          { id: 14, textTr: "Meslektaşlarım tarafından saygı görmek", textFr: "Être respecté par mes collègues", textEn: "Being respected by my colleagues" },
          { id: 15, textTr: "Prestijli bir unvana sahip olmak", textFr: "Avoir un titre prestigieux", textEn: "Having a prestigious title" },
        ],
      },
      {
        name: { tr: "İlişkiler", fr: "Relations", en: "Relationships" },
        code: "Relationships",
        color: "#16A34A",
        questions: [
          { id: 16, textTr: "Takım halinde çalışmak", textFr: "Travailler en équipe", textEn: "Working as a team" },
          { id: 17, textTr: "Meslektaşlarımla iyi ilişkiler kurmak", textFr: "Avoir de bonnes relations avec mes collègues", textEn: "Building good relationships with colleagues" },
          { id: 18, textTr: "Başkalarına işlerinde yardım etmek", textFr: "Aider les autres dans leur travail", textEn: "Helping others in their work" },
          { id: 19, textTr: "İşte arkadaşlık bağları kurmak", textFr: "Créer des liens d'amitié au travail", textEn: "Creating friendship bonds at work" },
          { id: 20, textTr: "Farklı insanlarla işbirliği yapmak", textFr: "Collaborer avec des personnes diverses", textEn: "Collaborating with diverse people" },
        ],
      },
      {
        name: { tr: "Destek", fr: "Soutien", en: "Support" },
        code: "Support",
        color: "#0891B2",
        questions: [
          { id: 21, textTr: "Beni destekleyen bir yöneticiye sahip olmak", textFr: "Avoir un manager qui me soutient", textEn: "Having a supportive manager" },
          { id: 22, textTr: "Düzenli eğitimler almak", textFr: "Recevoir des formations régulières", textEn: "Receiving regular training" },
          { id: 23, textTr: "İyi çalışma koşullarından yararlanmak", textFr: "Bénéficier de bonnes conditions de travail", textEn: "Benefiting from good working conditions" },
          { id: 24, textTr: "İşimi iyi yapmak için yeterli kaynaklara sahip olmak", textFr: "Avoir des ressources suffisantes pour bien faire mon travail", textEn: "Having sufficient resources to do my job well" },
          { id: 25, textTr: "Çalışanlarına yatırım yapan bir şirkette çalışmak", textFr: "Travailler dans une entreprise qui investit dans ses employés", textEn: "Working in a company that invests in its employees" },
        ],
      },
      {
        name: { tr: "İş-Yaşam Dengesi", fr: "Équilibre Vie Pro/Perso", en: "Work-Life Balance" },
        code: "Work-Life",
        color: "#7C3AED",
        questions: [
          { id: 26, textTr: "İyi bir iş-yaşam dengesine sahip olmak", textFr: "Avoir un bon équilibre vie professionnelle/vie personnelle", textEn: "Having a good work-life balance" },
          { id: 27, textTr: "Esnek çalışma saatlerine sahip olmak", textFr: "Avoir des horaires flexibles", textEn: "Having flexible working hours" },
          { id: 28, textTr: "Evime yakın çalışmak", textFr: "Travailler près de chez moi", textEn: "Working close to home" },
          { id: 29, textTr: "Yeterli boş zamana sahip olmak", textFr: "Avoir suffisamment de temps libre", textEn: "Having enough free time" },
          { id: 30, textTr: "İşte stresli olmamak", textFr: "Ne pas être stressé au travail", textEn: "Not being stressed at work" },
        ],
      },
    ],
    scientificBasis: {
      source: "Super, D.E. (1970). Work Values Inventory",
      reliability: { tr: "Kariyer gelişimi araştırmalarında temel", fr: "Fondamental dans la recherche sur le développement de carrière", en: "Fundamental in career development research" },
      usage: { tr: "İş tatmini ve kariyer uyumu değerlendirmesi", fr: "Évaluation de la satisfaction au travail et de l'adéquation de carrière", en: "Job satisfaction and career fit assessment" },
    },
  },
];
