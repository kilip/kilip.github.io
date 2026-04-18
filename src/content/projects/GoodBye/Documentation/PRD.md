---
title: "GoodBye Protocol - PRD"
status: "Draft"
---

# 📄 PRD: GoodBye Protocol

## 1. Executive Summary
Sistem otomatis untuk mempublikasikan catatan pribadi (Diary/Notes) jika pemilik akun dianggap tidak aktif dalam jangka waktu yang ditentukan ("Dead Man's Switch").

## 2. Goals
- Memberikan warisan digital berupa catatan hidup yang terstruktur.
- Memastikan privasi terjaga selama pemilik masih aktif.
- Automasi penuh tanpa campur tangan manual di saat darurat.

## 3. Technical Requirements
- **Trigger**: Webhook eksternal (misal: GitHub Actions `repository_dispatch` atau *Heartbeat* dari service luar).
- **Automation**: Script (Bash/Python) di dalam GitHub Actions untuk mengubah `isPrivate: true` -> `false` pada file Markdown secara massal.
- **Safety**: Mekanisme pembatalan (sebelum sistem *trigger*, ada masa tunggu notifikasi via email/chat).

## 4. User Stories
- "Sebagai pemilik, saya ingin sistem memantau aktivitas saya setiap bulan."
- "Sebagai pemilik, saya ingin semua diary saya otomatis menjadi publik jika saya tidak memberi 'tanda kehidupan' selama 6 bulan."

## 5. Security Concerns
- Kredensial untuk akses repo harus aman.
- Mencegah *false trigger* (sistem aktif padahal pemilik masih hidup).
