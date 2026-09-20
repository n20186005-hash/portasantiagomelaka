# A Famosa Melaka — laman pelawat satu halaman

Laman statik Astro untuk A Famosa / Porta de Santiago di Banda Hilir, Melaka. Kandungan utama menggunakan Bahasa Melayu, foto sebenar disimpan secara setempat, dan gaya visual diinspirasikan oleh bata laterit serta seni bina gerbang bersejarah tapak ini.

## Keperluan binaan

- Node.js `24.19.0` (turut dikunci dalam `.node-version` dan `engines`)
- pnpm `9.15.5` (dikunci melalui `packageManager` dan `engines`)
- `.npmrc` menetapkan `only-built-dependencies=esbuild`

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Untuk deploy aset statik ke Cloudflare Workers:

```bash
pnpm deploy
```

## Menetapkan domain produksi

Domain hanya ditetapkan di satu tempat: pemboleh ubah `site` dalam `astro.config.mjs`.

Nilai semasa ialah `https://portasantiagomelaka.com`, jadi canonical mutlak, Open Graph, JSON-LD dan `sitemap-index.xml` dijana secara automatik. `public/robots.txt` turut menghala ke sitemap tersebut.

Alihkan semua trafik HTTP ke HTTPS melalui Cloudflare (Always Use HTTPS) supaya berat halaman tidak terbelah antara dua protokol; HSTS dihantar melalui `public/_headers`.

## Struktur utama

- `src/pages/index.astro` — halaman tunggal, metadata, GA4 dan JSON-LD
- `src/styles/global.css` — reka bentuk responsif khusus warisan Melaka
- `public/images/` — foto sebenar yang digunakan oleh laman
- `public/logo.svg` dan `public/favicon*` — identiti visual gerbang yang konsisten
- `wrangler.jsonc` — konfigurasi aset statik Cloudflare Workers

Foto berlesen Creative Commons dikreditkan di footer laman.
