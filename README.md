# Kösek Enerji — SvelteKit

Endüstriyel elektrik firması websitesi. SvelteKit + Vite ile yazılmıştır.

## Kurulum

```bash
cd sveltekit
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` adresinde açılır.

## Üretim Build

```bash
npm run build
npm run preview
```

## Proje Yapısı

```
sveltekit/
├── src/
│   ├── app.html                          # HTML shell + Google Fonts
│   ├── lib/
│   │   ├── data.js                       # Hizmetler, projeler, müşteri verileri
│   │   ├── styles/app.css                # Global tasarım sistemi (renkler, tipografi, tüm component CSS'leri)
│   │   └── components/
│   │       ├── Nav.svelte                # Üst menü + mobil hamburger
│   │       ├── Footer.svelte             # Alt bilgi
│   │       ├── Icon.svelte               # Tüm SVG ikonlar (name prop ile)
│   │       ├── HeroElectric.svelte       # Hero animasyonlu yıldırım SVG
│   │       ├── Ticker.svelte             # Akan bilgi şeridi
│   │       └── Counter.svelte            # IntersectionObserver tabanlı sayaç
│   └── routes/
│       ├── +layout.svelte                # Tüm sayfaları sarmalayan ana shell
│       ├── +page.svelte                  # Ana Sayfa (/)
│       ├── kurumsal/+page.svelte         # /kurumsal
│       ├── hakkimizda/+page.svelte       # /hakkimizda
│       ├── hizmetler/+page.svelte        # /hizmetler
│       └── iletisim/+page.svelte         # /iletisim (form validasyonlu)
├── package.json
├── svelte.config.js
└── vite.config.js
```

## Tasarım Sistemi

CSS değişkenleri `src/lib/styles/app.css` içinde:

- `--bg`, `--bg-deep`, `--bg-card` — koyu arka plan tonları
- `--accent: #FFD400` — elektrik sarısı vurgu
- `--font-display: 'Bebas Neue'` — büyük başlıklar
- `--font-body: 'Inter'` — gövde metni
- `--font-mono: 'JetBrains Mono'` — teknik etiketler

## İçerik Düzenleme

Tüm metin içerikleri `src/lib/data.js` içinde ortalanmıştır. Hizmet eklemek/düzenlemek için sadece bu dosyayı değiştirin.

## Adapter

`@sveltejs/adapter-auto` kullanılır — Vercel, Netlify veya Node ortamında otomatik adapt olur. Belirli bir hedefe deploy ediyorsanız ilgili adapter'ı kurun (`@sveltejs/adapter-vercel`, `@sveltejs/adapter-node`, vb.).
