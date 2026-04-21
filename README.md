# Reflektif.net - Test Soruları

Prof. Dr. İzzet Er için hazırlanan RIASEC, Big Five ve Değerler testlerinin 110 sorusunu modern, sade ve erişilebilir bir web sayfasında sunan proje.

## Canlı Site

**[reflektif-wf28c7ys.manus.space](https://reflektif-wf28c7ys.manus.space)**

## İçerik

| Test | Soru Sayısı | Süre | Boyutlar |
|------|-------------|------|----------|
| RIASEC | 30 | 8-10 dakika | 6 boyut (R, I, A, S, E, C) |
| Big Five | 50 | 12-15 dakika | 5 boyut (O, C, E, A, N) |
| Değerler | 30 | 8-10 dakika | 6 boyut |
| **Toplam** | **110** | **28-35 dakika** | **17 boyut** |

## Teknoloji

React 19, Tailwind CSS 4, Framer Motion, shadcn/ui, Vite, TypeScript.

Tasarım yaklaşımı: Editorial / Dergi Düzeni. Playfair Display + DM Sans tipografi kombinasyonu.

## Proje Yapısı

```
REFLEKTIF_TUM_SORULAR_IZZET_HOCA.md   # Orijinal soru dokümanı
web-app/                                # Web sayfası kaynak kodu
  client/
    src/
      data/questions.ts                 # 110 soru verisi (TR + FR)
      components/                       # UI bileşenleri
      pages/Home.tsx                    # Ana sayfa
```

## Kurulum

```bash
cd web-app
pnpm install
pnpm dev
```

## İletişim

**Reflektif Bilişim A.Ş.** — Zaim Teknopark, İstanbul

contact@reflektif.net | reflektif.net

CTO: Mikail Lekesiz — mikail@reflektif.net
