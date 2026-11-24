# Huquq Test Bot (o'zbek va qoraqalpoq tillarida)

Telegram **Mini App** asosidagi test boti. `/start` bosilgach til tanlanadi, so'ng xabar yozish maydoni yonida doimiy **Ochish** tugmasi paydo bo'ladi. Tugma testni alohida dizayndagi oynada ochadi.

## Fayllar

| Fayl | Vazifasi |
|---|---|
| `index.html` | Mini App sahifasi va dizayni |
| `app.js` | Test mantiqi, menyu (Mavzular / Natijalar / Reyting / Profil), til almashtirish |
| `questions.js` | Savollar bazasi (ikki tilda) |
| `bot.py` | Telegram bot (til tanlash va "Ochish" menyu tugmasi) |
| `requirements.txt` | Python kutubxonalari |

## 1. Botni yaratish

1. Telegramda **@BotFather** ga `/newbot` yozing, nom va username bering.
2. Olingan **tokenni** saqlab qo'ying.

## 2. Mini Appni joylashtirish (HTTPS shart)

`index.html`, `app.js`, `questions.js` fayllarini bepul hostingga yuklang, masalan **GitHub Pages**:

1. GitHub'da yangi repozitoriy oching (masalan `huquq-test`).
2. Uchta faylni yuklang.
3. Settings, Pages bo'limida "Deploy from a branch" va `main` ni tanlang.
4. Manzil shunday bo'ladi: `https://SIZNING-NOM.github.io/huquq-test`

(Vercel yoki Netlify ham ishlaydi.)

## 3. Botni ishga tushirish

```bash
pip install -r requirements.txt

export BOT_TOKEN="BotFather bergan token"
export WEBAPP_URL="https://SIZNING-NOM.github.io/huquq-test"

python bot.py
```

Windows'da `export` o'rniga: `set BOT_TOKEN=...` va `set WEBAPP_URL=...`

Botga kirib `/start` bosing: til tanlanadi, keyin pastda **Ochish** tugmasi chiqadi.

Bot doimiy ishlashi uchun uni serverda (VPS, Railway, Render va hokazo) ishga tushiring. Foydalanuvchilar tili `users.json` faylida saqlanadi.

## Savol qo'shish

`questions.js` ichida kerakli mavzuga quyidagicha obyekt qo'shing:

```js
{
  q: { uz: "Savol matni", kk: "Soraw teksti" },
  o: [
    { uz: "To'g'ri javob", kk: "Durıs juwap" },
    { uz: "Variant 2",     kk: "Variant 2" },
    { uz: "Variant 3",     kk: "Variant 3" },
    { uz: "Variant 4",     kk: "Variant 4" }
  ],
  a: 0,   // to'g'ri javobning indeksi; ilovada variantlar o'zi aralashtiriladi
  e: { uz: "Izoh", kk: "Túsindirme" }
}
```

Yangi mavzu uchun `window.TOPICS` ga qator va `window.QUESTIONS` ga shu `id` bilan massiv qo'shing.

## Muhim eslatmalar

- **Qoraqalpoqcha tarjima**: savollar va izohlar tarjimasini qoraqalpoq tilini biladigan mutaxassis (yoki huquqshunos) tekshirib chiqishi shart, ayniqsa huquqiy atamalarni.
- **Natijalar** foydalanuvchi qurilmasida (brauzer xotirasida) saqlanadi. **Reyting** bo'limi hozircha har bir mavzu bo'yicha foydalanuvchining o'z eng yaxshi natijasini ko'rsatadi. Foydalanuvchilar o'rtasidagi umumiy reyting uchun server va ma'lumotlar bazasi kerak bo'ladi.
- Savollar sahifa ichida turgani uchun texnik jihatdan ochiq. Rasmiy imtihon uchun savollarni serverga ko'chirish kerak.
