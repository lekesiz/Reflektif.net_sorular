# Reflektif.net Test Soruları - Tasarım Fikirleri

## Proje Bağlamı
110 test sorusu (RIASEC, Big Five, Değerler) içeren akademik bir dokümanı modern, sade ve erişilebilir bir web sayfası olarak sunmak. Hedef kitle: akademisyenler ve profesyoneller.

---

<response>
## Fikir 1: Swiss Rationalism / Uluslararası Tipografi Stili
<probability>0.07</probability>

**Tasarım Hareketi:** İsviçre Rasyonalizmi - Josef Müller-Brockmann etkisi, grid temelli, bilgi hiyerarşisi odaklı

**Temel İlkeler:**
- Matematiksel grid sistemi ile bilgi düzeni
- Tipografi hiyerarşisi ile görsel yönlendirme
- Negatif alan kullanımı ile nefes alan tasarım
- Fonksiyonel güzellik - her element bir amaca hizmet eder

**Renk Felsefesi:** Nötr zemin (sıcak beyaz #FAFAF8) üzerine koyu metin (#1A1A1A). Her test kategorisi için tek bir vurgu rengi: RIASEC kırmızı-turuncu (#E8553A), Big Five lacivert (#2B4C7E), Değerler koyu yeşil (#2D6A4F). Renkler bilgiyi kodlar, dekorasyon değil.

**Düzen Paradigması:** Sol tarafta sabit sidebar navigasyon (test kategorileri), sağda geniş içerik alanı. Sticky header ile mevcut pozisyon göstergesi. İçerik alanında her soru kartı sol kenarında renkli çizgi ile kategorisini belirtir.

**İmza Elementleri:**
- Sol kenarda renkli dikey çizgi ile soru kartları
- Büyük soru numaraları (typographic accent)
- Minimal ikonlar yerine tipografik semboller

**Etkileşim Felsefesi:** Sidebar'da tıklanan bölüme smooth scroll. Hover'da kart hafif yükselme. Aktif bölüm sidebar'da bold.

**Animasyon:** Sayfa yüklenirken kartlar aşağıdan yukarı stagger ile fade-in. Scroll ile parallax yok, sadece intersection observer ile görünürlük animasyonu.

**Tipografi Sistemi:** DM Sans (başlıklar, 700) + Source Serif 4 (soru metinleri, 400/italic). Fransızca çeviriler italic ve daha küçük punto.
</response>

---

<response>
## Fikir 2: Scandinavian Minimal / Hygge Akademik
<probability>0.05</probability>

**Tasarım Hareketi:** İskandinav Minimalizmi - sadelik, doğallık, huzur veren alanlar

**Temel İlkeler:**
- Aşırı sadelik - sadece gerekli olan
- Doğal sıcaklık - soğuk değil, davetkar minimalizm
- Hava ve boşluk - içerik nefes almalı
- Dokunsal hissiyat - kağıt benzeri dokular

**Renk Felsefesi:** Krem zemin (#F5F0EB) üzerine koyu kahverengi metin (#3D3229). Vurgu renkleri yumuşak ve doğal: pastel turuncu (#E8A87C), soluk mavi (#7EB5D6), yumuşak yeşil (#8FB996). Renkler doğadan ilham alır.

**Düzen Paradigması:** Tek sütun, geniş marjinler. Her test bölümü tam sayfa genişliğinde bir bant olarak. Bölümler arası büyük boşluklar. Üstte minimal sticky nav bar.

**İmza Elementleri:**
- Kağıt dokusu hissiyatlı arka plan
- Yuvarlak köşeli, gölgesiz, ince çerçeveli kartlar
- Bölüm geçişlerinde ince yatay çizgiler

**Etkileşim Felsefesi:** Hover'da çok hafif renk değişimi. Tıklamada yumuşak geçiş. Agresif animasyon yok.

**Animasyon:** Çok minimal - sadece sayfa geçişlerinde fade. Scroll animasyonu yok, statik ve huzurlu.

**Tipografi Sistemi:** Libre Baskerville (başlıklar) + Karla (gövde metin). Klasik serif + modern sans-serif kombinasyonu.
</response>

---

<response>
## Fikir 3: Editorial / Dergi Düzeni
<probability>0.08</probability>

**Tasarım Hareketi:** Editorial Design - dergi ve gazete düzeni estetiği, bilgi yoğun ama zarif

**Temel İlkeler:**
- Editoryal hiyerarşi - başlık, alt başlık, gövde metin katmanları
- Asimetrik ama dengeli düzen
- Tipografi odaklı tasarım - font boyutu ve ağırlık ile yönlendirme
- Bilgi yoğunluğu ile okunabilirlik dengesi

**Renk Felsefesi:** Saf beyaz (#FFFFFF) zemin, siyah metin (#111111). Tek bir vurgu rengi: koyu indigo (#3730A3) tüm interaktif elementler ve vurgular için. Testler arasında renk farkı minimal - tipografi ve düzen ile ayrım yapılır.

**Düzen Paradigması:** Üstte büyük tipografik hero (başlık ve özet tablosu). Ardından iki sütunlu düzen: sol dar sütunda test meta bilgileri (boyut, süre, kaynak), sağ geniş sütunda sorular. Her test bölümü kendi "dergi sayfası" gibi. Üstte horizontal tab navigasyon.

**İmza Elementleri:**
- Büyük, bold soru numaraları (display font ile)
- İnce yatay kurallar (horizontal rules) ile bölüm ayrımı
- Pull-quote tarzında öne çıkan bilgi kutuları

**Etkileşim Felsefesi:** Tab geçişlerinde içerik swap animasyonu. Hover'da metin altı çizgi animasyonu. Scroll pozisyonuna göre tab aktifliği.

**Animasyon:** Tab geçişlerinde crossfade. Kartlar için staggered reveal. Sayfa yüklenirken hero alanı cinematic fade-in. Scroll-triggered animasyonlar ile içerik ortaya çıkışı.

**Tipografi Sistemi:** Playfair Display (büyük başlıklar, 900) + Inter (gövde metin, 400/500). Fransızca çeviriler için italic Playfair Display.
</response>

---

## Seçim: Fikir 3 - Editorial / Dergi Düzeni

Bu yaklaşım, 110 soruyu en okunabilir ve profesyonel şekilde sunacak. Editoryal düzen, bilgi yoğun içeriği zarif bir şekilde organize etmeye en uygun yaklaşım. Tab navigasyonu ile 3 test arasında kolay geçiş sağlanacak. Akademik içeriğe yakışan ciddi ama modern bir görünüm elde edilecek.
