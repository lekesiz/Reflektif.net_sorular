/*
 * DESIGN: Editorial / Dergi Düzeni
 * Data layer for all 110 test questions
 * Organized by test type and subcategory
 */

export interface Question {
  id: number;
  textTr: string;
  textFr: string;
  isReversed?: boolean;
}

export interface SubCategory {
  name: string;
  code: string;
  color: string;
  questions: Question[];
}

export interface TestData {
  id: string;
  title: string;
  subtitle: string;
  model: string;
  questionCount: number;
  duration: string;
  dimensions: string;
  scale: string;
  illustration: string;
  subCategories: SubCategory[];
  scientificBasis: {
    source: string;
    reliability: string;
    usage: string;
  };
}

export const testsData: TestData[] = [
  {
    id: "riasec",
    title: "RIASEC Testi",
    subtitle: "Holland Modeli - Mesleki İlgi Alanları",
    model: "Holland, J.L. (1997)",
    questionCount: 30,
    duration: "8-10 dakika",
    dimensions: "6 boyut (R, I, A, S, E, C)",
    scale: "1 (Hiç katılmıyorum) - 5 (Tamamen katılıyorum)",
    illustration: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/Wf28C7YSdBJR86NVxiW7bx/riasec-illustration-aNTZCnF3qzmqiZe9VDQe9j.webp",
    subCategories: [
      {
        name: "Gerçekçi",
        code: "R",
        color: "#DC2626",
        questions: [
          { id: 1, textTr: "Nesneleri veya makineleri tamir etmeyi severim", textFr: "J'aime réparer des objets ou des machines" },
          { id: 2, textTr: "Fikirlerle çalışmaktansa ellerimle çalışmayı tercih ederim", textFr: "Je préfère travailler avec mes mains plutôt qu'avec des idées" },
          { id: 3, textTr: "Fiziksel ve sportif aktiviteleri severim", textFr: "J'aime les activités physiques et sportives" },
          { id: 4, textTr: "Araçlar ve teknik ekipmanlarla rahatım", textFr: "Je suis à l'aise avec les outils et les équipements techniques" },
          { id: 5, textTr: "Somut ve elle tutulur sonuçları tercih ederim", textFr: "Je préfère les résultats concrets et tangibles" },
        ],
      },
      {
        name: "Araştırmacı",
        code: "I",
        color: "#2563EB",
        questions: [
          { id: 6, textTr: "Karmaşık problemleri çözmeyi severim", textFr: "J'aime résoudre des problèmes complexes" },
          { id: 7, textTr: "Meraklıyım ve yeni şeyler öğrenmeyi severim", textFr: "Je suis curieux(se) et j'aime apprendre de nouvelles choses" },
          { id: 8, textTr: "Hareket etmeden önce durumları analiz etmeyi tercih ederim", textFr: "Je préfère analyser les situations avant d'agir" },
          { id: 9, textTr: "Bilim ve araştırma ilgimi çeker", textFr: "Les sciences et la recherche m'intéressent" },
          { id: 10, textTr: "Şeylerin nasıl çalıştığını anlamayı severim", textFr: "J'aime comprendre comment les choses fonctionnent" },
        ],
      },
      {
        name: "Sanatsal",
        code: "A",
        color: "#D97706",
        questions: [
          { id: 11, textTr: "Özgün şeyler yaratmayı severim", textFr: "J'aime créer des choses originales" },
          { id: 12, textTr: "Sanat, müzik veya yazı yoluyla kendimi kolayca ifade ederim", textFr: "Je m'exprime facilement par l'art, la musique ou l'écriture" },
          { id: 13, textTr: "Yaratıcı ve alışılmadık ortamları severim", textFr: "J'aime les environnements créatifs et non conventionnels" },
          { id: 14, textTr: "Estetik ve tasarım benim için önemlidir", textFr: "L'esthétique et le design sont importants pour moi" },
          { id: 15, textTr: "Katı kurallar yerine ifade özgürlüğünü tercih ederim", textFr: "Je préfère la liberté d'expression aux règles strictes" },
        ],
      },
      {
        name: "Sosyal",
        code: "S",
        color: "#16A34A",
        questions: [
          { id: 16, textTr: "Başkalarının sorunlarını çözmelerine yardım etmeyi severim", textFr: "J'aime aider les autres à résoudre leurs problèmes" },
          { id: 17, textTr: "Sosyal etkileşimlerde rahatım", textFr: "Je suis à l'aise dans les interactions sociales" },
          { id: 18, textTr: "Başkalarına öğretmek veya eğitim vermek ilgimi çeker", textFr: "Enseigner ou former les autres m'intéresse" },
          { id: 19, textTr: "Başkalarının refahına katkıda bulunduğumda kendimi yararlı hissederim", textFr: "Je me sens utile quand je contribue au bien-être des autres" },
          { id: 20, textTr: "Verilerle çalışmaktansa insanlarla çalışmayı tercih ederim", textFr: "Je préfère travailler avec des personnes plutôt qu'avec des données" },
        ],
      },
      {
        name: "Girişimci",
        code: "E",
        color: "#CA8A04",
        questions: [
          { id: 21, textTr: "Yönetmeyi ve başkalarını etkilemeyi severim", textFr: "J'aime diriger et influencer les autres" },
          { id: 22, textTr: "Zorluklardan ve rekabetten motive olurum", textFr: "Je suis motivé(e) par les défis et la compétition" },
          { id: 23, textTr: "Kendi işimi kurmayı hayal ediyorum", textFr: "Je rêve de créer ma propre entreprise" },
          { id: 24, textTr: "Önemli kararlar almakta rahatım", textFr: "Je suis à l'aise pour prendre des décisions importantes" },
          { id: 25, textTr: "Finansal başarı benim için önemlidir", textFr: "La réussite financière est importante pour moi" },
        ],
      },
      {
        name: "Geleneksel",
        code: "C",
        color: "#7C3AED",
        questions: [
          { id: 26, textTr: "Şeylerin iyi organize edilmiş ve yapılandırılmış olmasını severim", textFr: "J'aime que les choses soient bien organisées et structurées" },
          { id: 27, textTr: "Belirlenmiş prosedürleri takip etmeyi tercih ederim", textFr: "Je préfère suivre des procédures établies" },
          { id: 28, textTr: "Titizim ve detaylara dikkat ederim", textFr: "Je suis minutieux(se) et attentif(ve) aux détails" },
          { id: 29, textTr: "Sayılar ve verilerle çalışmayı severim", textFr: "J'aime travailler avec des chiffres et des données" },
          { id: 30, textTr: "İstikrar ve güvenlik benim için önemlidir", textFr: "La stabilité et la sécurité sont importantes pour moi" },
        ],
      },
    ],
    scientificBasis: {
      source: "Holland, J.L. (1997). Making Vocational Choices: A Theory of Vocational Personalities and Work Environments",
      reliability: "50+ yıllık araştırma geçmişi",
      usage: "Dünya çapında kariyer danışmanlığında standart",
    },
  },
  {
    id: "bigfive",
    title: "Big Five Testi",
    subtitle: "Costa & McCrae Modeli - Kişilik Özellikleri",
    model: "Costa, P.T. & McCrae, R.R. (1992)",
    questionCount: 50,
    duration: "12-15 dakika",
    dimensions: "5 boyut (O, C, E, A, N)",
    scale: "1 (Hiç katılmıyorum) - 5 (Tamamen katılıyorum)",
    illustration: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/Wf28C7YSdBJR86NVxiW7bx/bigfive-illustration-HLUMQkruJHUbyFFDrhoMxx.webp",
    subCategories: [
      {
        name: "Açıklık",
        code: "O",
        color: "#D97706",
        questions: [
          { id: 1, textTr: "Zengin bir hayal gücüm var", textFr: "J'ai une imagination débordante" },
          { id: 2, textTr: "Sanat ve kültürle ilgileniyorum", textFr: "Je m'intéresse à l'art et à la culture" },
          { id: 3, textTr: "Yeni şeyler denemeyi severim", textFr: "J'aime essayer de nouvelles choses" },
          { id: 4, textTr: "Rutinleri ve alışkanlıkları tercih ederim", textFr: "Je préfère les routines et les habitudes", isReversed: true },
          { id: 5, textTr: "Birçok farklı şey hakkında meraklıyım", textFr: "Je suis curieux de beaucoup de choses différentes" },
          { id: 6, textTr: "Soyut fikirler üzerinde düşünmeyi severim", textFr: "J'aime réfléchir à des idées abstraites" },
          { id: 7, textTr: "Felsefi tartışmaları sıkıcı buluyorum", textFr: "Je trouve les discussions philosophiques ennuyeuses", isReversed: true },
          { id: 8, textTr: "Sanatta ve doğada güzelliği takdir ederim", textFr: "J'apprécie la beauté dans l'art et la nature" },
          { id: 9, textTr: "Basit ve pratik şeyleri tercih ederim", textFr: "Je préfère les choses simples et pratiques", isReversed: true },
          { id: 10, textTr: "Yeni fikirleri keşfetmeyi severim", textFr: "J'aime explorer de nouvelles idées" },
        ],
      },
      {
        name: "Sorumluluk",
        code: "C",
        color: "#2563EB",
        questions: [
          { id: 11, textTr: "Her zaman iyi hazırlanırım", textFr: "Je suis toujours bien préparé" },
          { id: 12, textTr: "Detaylara dikkat ederim", textFr: "Je fais attention aux détails" },
          { id: 13, textTr: "Başladığım her şeyi bitiririm", textFr: "Je termine toujours ce que je commence" },
          { id: 14, textTr: "Eşyalarımı genellikle dağınık bırakırım", textFr: "Je laisse souvent mes affaires en désordre", isReversed: true },
          { id: 15, textTr: "Düzenli ve metodik biriyim", textFr: "Je suis organisé et méthodique" },
          { id: 16, textTr: "Taahhütlerime her zaman saygı gösteririm", textFr: "Je respecte toujours mes engagements" },
          { id: 17, textTr: "İşleri sık sık erteliyorum", textFr: "Je remets souvent les choses à plus tard", isReversed: true },
          { id: 18, textTr: "Aktivitelerimi önceden planlarım", textFr: "Je planifie mes activités à l'avance" },
          { id: 19, textTr: "Sorumluluklarımda dikkatsizim", textFr: "Je suis négligent avec mes responsabilités", isReversed: true },
          { id: 20, textTr: "Hedeflerime ulaşmak için çok çalışırım", textFr: "Je travaille dur pour atteindre mes objectifs" },
        ],
      },
      {
        name: "Dışa Dönüklük",
        code: "E",
        color: "#DC2626",
        questions: [
          { id: 21, textTr: "Partinin can alıcı noktasıyım", textFr: "Je suis l'âme de la fête" },
          { id: 22, textTr: "İnsanlarla çevrili olmayı severim", textFr: "J'aime être entouré de gens" },
          { id: 23, textTr: "Sosyal ortamlarda rahatım", textFr: "Je me sens à l'aise en société" },
          { id: 24, textTr: "Gruplarda geri planda kalmayı tercih ederim", textFr: "Je préfère rester en retrait dans les groupes", isReversed: true },
          { id: 25, textTr: "Yabancılarla kolayca konuşurum", textFr: "Je parle facilement avec des inconnus" },
          { id: 26, textTr: "Dikkat çekmeyi severim", textFr: "J'aime attirer l'attention" },
          { id: 27, textTr: "Oldukça çekingen ve sakiniim", textFr: "Je suis plutôt réservé et calme", isReversed: true },
          { id: 28, textTr: "Başkalarının yanında enerjik hissederim", textFr: "Je me sens énergisé en compagnie d'autres personnes" },
          { id: 29, textTr: "Yalnız aktiviteleri tercih ederim", textFr: "Je préfère les activités solitaires", isReversed: true },
          { id: 30, textTr: "Topluluk önünde kolayca konuşurum", textFr: "Je prends facilement la parole en public" },
        ],
      },
      {
        name: "Uyumluluk",
        code: "A",
        color: "#16A34A",
        questions: [
          { id: 31, textTr: "Başkalarının sorunlarıyla ilgilenirim", textFr: "Je m'intéresse aux problèmes des autres" },
          { id: 32, textTr: "Başkalarının ihtiyaçlarını kendimininkinden önce tutarım", textFr: "Je fais passer les besoins des autres avant les miens" },
          { id: 33, textTr: "Empatik ve anlayışlıyım", textFr: "Je suis empathique et compréhensif" },
          { id: 34, textTr: "Başkalarını sık sık eleştiririm", textFr: "Je critique souvent les autres", isReversed: true },
          { id: 35, textTr: "İnsanlara mümkün olduğunca yardım etmeye çalışırım", textFr: "J'essaie d'aider les gens autant que possible" },
          { id: 36, textTr: "İnsanlara kolayca güvenirim", textFr: "Je fais confiance aux gens facilement" },
          { id: 37, textTr: "Sert ve acımasız olabilirim", textFr: "Je peux être dur et impitoyable", isReversed: true },
          { id: 38, textTr: "Cömert ve özgeciyim", textFr: "Je suis généreux et altruiste" },
          { id: 39, textTr: "Başkalarının duygularını pek umursamam", textFr: "Je me soucie peu des sentiments des autres", isReversed: true },
          { id: 40, textTr: "Her zaman uzlaşma ararım", textFr: "Je cherche toujours le compromis" },
        ],
      },
      {
        name: "Nevrotiklik",
        code: "N",
        color: "#7C3AED",
        questions: [
          { id: 41, textTr: "Sık sık endişelenirim", textFr: "Je m'inquiète souvent" },
          { id: 42, textTr: "Kolayca strese girerim", textFr: "Je suis facilement stressé" },
          { id: 43, textTr: "Duygularım hızla değişir", textFr: "Mes émotions changent rapidement" },
          { id: 44, textTr: "Stresli durumlarda sakin kalırım", textFr: "Je reste calme dans les situations stressantes", isReversed: true },
          { id: 45, textTr: "Sık sık üzgün veya depresif hissederim", textFr: "Je me sens souvent triste ou déprimé" },
          { id: 46, textTr: "Kolayca paniğe kapılırım", textFr: "Je panique facilement" },
          { id: 47, textTr: "Duygusal olarak stabilim", textFr: "Je suis émotionnellement stable", isReversed: true },
          { id: 48, textTr: "Önemsiz şeyler için endişelenirim", textFr: "Je me fais du souci pour des choses sans importance" },
          { id: 49, textTr: "Baskıyı iyi yönetirim", textFr: "Je gère bien la pression", isReversed: true },
          { id: 50, textTr: "Sık sık kaygılıyım", textFr: "Je suis souvent anxieux" },
        ],
      },
    ],
    scientificBasis: {
      source: "Costa, P.T. & McCrae, R.R. (1992). NEO-PI-R Professional Manual",
      reliability: "En yaygın kabul gören kişilik modeli",
      usage: "Psikoloji, İK, eğitim alanlarında standart",
    },
  },
  {
    id: "values",
    title: "Değerler Testi",
    subtitle: "Super's Work Values Inventory - Mesleki Değerler",
    model: "Super, D.E. (1970)",
    questionCount: 30,
    duration: "8-10 dakika",
    dimensions: "6 boyut",
    scale: "1 (Önemli değil) - 5 (Çok önemli)",
    illustration: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/Wf28C7YSdBJR86NVxiW7bx/values-illustration-cSdmFhenrW3asjPm7fu7AL.webp",
    subCategories: [
      {
        name: "Başarı",
        code: "Achievement",
        color: "#DC2626",
        questions: [
          { id: 1, textTr: "Zorlukların üstesinden gelmemi sağlayan bir işe sahip olmak", textFr: "Avoir un travail qui me permet de relever des défis" },
          { id: 2, textTr: "Hırslı hedeflere ulaşmak", textFr: "Atteindre des objectifs ambitieux" },
          { id: 3, textTr: "Kariyerimde hızla ilerlemek", textFr: "Progresser rapidement dans ma carrière" },
          { id: 4, textTr: "Alanımda mükemmel olmak", textFr: "Exceller dans mon domaine" },
          { id: 5, textTr: "Önemli sorumluluklar almak", textFr: "Avoir des responsabilités importantes" },
        ],
      },
      {
        name: "Özerklik",
        code: "Independence",
        color: "#2563EB",
        questions: [
          { id: 6, textTr: "Özerk çalışmak", textFr: "Travailler de manière autonome" },
          { id: 7, textTr: "Kendi kararlarımı vermek", textFr: "Prendre mes propres décisions" },
          { id: 8, textTr: "İşimi organize etme özgürlüğüne sahip olmak", textFr: "Avoir la liberté d'organiser mon travail" },
          { id: 9, textTr: "Sürekli denetlenmemek", textFr: "Ne pas être constamment supervisé" },
          { id: 10, textTr: "Kendi patronum olmak", textFr: "Être mon propre patron" },
        ],
      },
      {
        name: "Tanınma",
        code: "Recognition",
        color: "#D97706",
        questions: [
          { id: 11, textTr: "Başarılarım için tanınmak", textFr: "Être reconnu pour mes accomplissements" },
          { id: 12, textTr: "Yüksek sosyal statüye sahip olmak", textFr: "Avoir un statut social élevé" },
          { id: 13, textTr: "Ödüller ve terfiler almak", textFr: "Recevoir des récompenses et des promotions" },
          { id: 14, textTr: "Meslektaşlarım tarafından saygı görmek", textFr: "Être respecté par mes collègues" },
          { id: 15, textTr: "Prestijli bir unvana sahip olmak", textFr: "Avoir un titre prestigieux" },
        ],
      },
      {
        name: "İlişkiler",
        code: "Relationships",
        color: "#16A34A",
        questions: [
          { id: 16, textTr: "Takım halinde çalışmak", textFr: "Travailler en équipe" },
          { id: 17, textTr: "Meslektaşlarımla iyi ilişkiler kurmak", textFr: "Avoir de bonnes relations avec mes collègues" },
          { id: 18, textTr: "Başkalarına işlerinde yardım etmek", textFr: "Aider les autres dans leur travail" },
          { id: 19, textTr: "İşte arkadaşlık bağları kurmak", textFr: "Créer des liens d'amitié au travail" },
          { id: 20, textTr: "Farklı insanlarla işbirliği yapmak", textFr: "Collaborer avec des personnes diverses" },
        ],
      },
      {
        name: "Destek",
        code: "Support",
        color: "#0891B2",
        questions: [
          { id: 21, textTr: "Beni destekleyen bir yöneticiye sahip olmak", textFr: "Avoir un manager qui me soutient" },
          { id: 22, textTr: "Düzenli eğitimler almak", textFr: "Recevoir des formations régulières" },
          { id: 23, textTr: "İyi çalışma koşullarından yararlanmak", textFr: "Bénéficier de bonnes conditions de travail" },
          { id: 24, textTr: "İşimi iyi yapmak için yeterli kaynaklara sahip olmak", textFr: "Avoir des ressources suffisantes pour bien faire mon travail" },
          { id: 25, textTr: "Çalışanlarına yatırım yapan bir şirkette çalışmak", textFr: "Travailler dans une entreprise qui investit dans ses employés" },
        ],
      },
      {
        name: "İş-Yaşam Dengesi",
        code: "Work-Life",
        color: "#7C3AED",
        questions: [
          { id: 26, textTr: "İyi bir iş-yaşam dengesine sahip olmak", textFr: "Avoir un bon équilibre vie professionnelle/vie personnelle" },
          { id: 27, textTr: "Esnek çalışma saatlerine sahip olmak", textFr: "Avoir des horaires flexibles" },
          { id: 28, textTr: "Evime yakın çalışmak", textFr: "Travailler près de chez moi" },
          { id: 29, textTr: "Yeterli boş zamana sahip olmak", textFr: "Avoir suffisamment de temps libre" },
          { id: 30, textTr: "İşte stresli olmamak", textFr: "Ne pas être stressé au travail" },
        ],
      },
    ],
    scientificBasis: {
      source: "Super, D.E. (1970). Work Values Inventory",
      reliability: "Kariyer gelişimi araştırmalarında temel",
      usage: "İş tatmini ve kariyer uyumu değerlendirmesi",
    },
  },
];
