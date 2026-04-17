---
title: "Membangun Second Brain yang 'Abadi' Bareng Gemini AI"
description: "Cerita di balik layar gimana gue nge-setup sistem Obsidian yang sinkron otomatis ke Astro pakai bantuan AI."
pubDate: 2026-04-18
heroImage: "/blog-placeholder-ai.jpg"
tags: ["productivity", "ai", "obsidian", "astro"]
draft: true
---

# Membangun Second Brain yang 'Abadi' Bareng Gemini AI

Pernah nggak sih elu ngerasa otak udah penuh banget sama dokumentasi, *bug fixes*, sampe ide-ide random pas lagi boker? Gue juga. Makanya, gue mutusin buat bangun **Second Brain** yang beneran rapi dan nggak cuma jadi "kuburan digital".

Tapi kali ini beda. Gue nggak sendirian, gue ditemenin sama **Gemini AI**.

## Kenapa Obsidian + Astro?

Gue pengen sistem yang:
1. **Lokal-first**: Catatan harus punya gue (Markdown), bukan punya SaaS yang bisa tutup kapan aja.
2. **Otomatis**: Nulis di Obsidian, tinggal push, langsung tayang di blog Astro gue.
3. **Legacy-ready**: Sampai gue "log off" dari dunia ini pun, catatan harian gue bakal tetep hidup di internet.
## Gimana Cara Mulainya?

Banyak yang nanya, "Gimana cara dapet partner AI di terminal kayak gini?". Gampang bray, elu tinggal ikutin step ini:

1. **Install Node.js**: Pastiin udah ada Node.js di PC elu.
2. **Install Gemini CLI**: Sikat command ini di terminal:
   ```bash
   npm install -g @google/gemini-cli
   ```
3. **Setup Auth**: Jalankan command `gemini`, terus login pakai akun Google elu.
4. **Mulai Perintahin**: Masuk ke folder project, ketik `gemini`, dan mulai ajak ngobrol.

## "The Magic Prompts"

Gue nggak asal nyuruh, gue pakai prompt yang spesifik biar si AI nggak ngaco. Elu bisa **copy-paste** prompt ini kalau mau bikin sistem yang mirip:

**Step 1: Setup Struktur & Workflow**
> generate a minimal obsidian folder structure for a software engineer who takes a daily notes and wants a long-term second brain.

**Step 2:  Setup Artikel**
>tambahkan folder 50_Articles dengan sub-folder Drafts dan Published untuk publish ke Astro SSG. buat workflow GitHub Actions untuk nge-sync file dari branch 'diary' (Obsidian) ke branch 'main' (Astro src/content). tambahkan juga dukungan multi-lang (id/en) di folder artikel.

**Step 2: Setup Templates**
> buatkan template Daily Note dan Astro Article yang sudah ada frontmatter-nya (title, date, tags, isPrivate, lang) biar siap dibaca sama Astro.

## Penutup

Punya "asisten" AI itu bukan berarti kita jadi males, tapi kita jadi punya *superpower* buat fokus ke **isi pikiran**, bukan ke ribetnya **manajemen file**. 

Second brain ini bakal jadi bukti kalau di tahun 2026, kolaborasi antara manusia dan AI itu udah di level yang beda.

***

*Artikel ini ditulis di dalam vault Obsidian yang dibangun bareng Gemini AI.*
