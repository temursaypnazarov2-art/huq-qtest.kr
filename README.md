# Huquq Test Bot (o'zbek va qoraqalpoq tillarida, pullik bloklar bilan)

Mini App GitHub Pages'da turadi, ma'lumotlar Firebase Firestore'da (bepul Spark rejasi), bot esa sizning kompyuteringizda ishlaydi.

## Qanday ishlaydi

1. Foydalanuvchi Mini App'da qulflangan blokni (masalan "8-sinf huquq darsligi") bosadi.
2. To'lov oynasi chiqadi: narx va sizning kartangiz. U o'tkazma qiladi va "To'lov qildim" ni bosadi.
3. Bot chek rasmini so'raydi. Foydalanuvchi yuboradi.
4. Bot chekni **sizga** yuboradi, ostida **Tasdiqlash / Rad etish** tugmalari bor.
5. **Pul kartangizga tushganini o'z bank ilovangizda tekshiring** (skrinshotga ishonmang), so'ng Tasdiqlashni bosing.
6. Bot Firestore'ga shaxsiy kalitli yozuv qo'yadi va foydalanuvchiga "Ochish" tugmasini yuboradi. Blok ochiladi.

## Fayllar

**GitHub'ga yuklanadiganlar (ochiq):** `index.html`, `app.js`, `questions.js`, `config.js`

**FAQAT kompyuteringizda qoladiganlar (GitHub'ga YUKLAMANG):**

* `bot.py`, `requirements.txt`
* `paid\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_questions.json` (pullik savollar; GitHub'ga tushsa, hamma o'qib oladi)
* `serviceAccountKey.json` (Firebase kaliti, loyihangizning to'liq paroli)
* `users.json` (bot o'zi yaratadi)

`firestore.rules` Firebase konsoliga qo'lda qo'yiladi (pastda).

## 1-qadam. Firebase

1. [console.firebase.google.com](https://console.firebase.google.com) da loyihangizni oching.
2. **Build, Firestore Database**: baza yo'q bo'lsa **Create database** bosing ("production mode").
3. Firestore ichida **Rules** bo'limiga o'ting, `firestore.rules` faylidagi matnni to'liq nusxalab qo'ying va **Publish** bosing.
4. **Project settings, General, Your apps**: veb-ilova (`</>`) yo'q bo'lsa qo'shing. Chiqqan `firebaseConfig` ichidagi `apiKey`, `authDomain`, `projectId`, `appId` qiymatlarini `config.js` dagi `firebase` qismiga yozing.
5. **Project settings, Service accounts, Generate new private key**: yuklangan faylni `serviceAccountKey.json` deb nomlab, `bot.py` bilan bir papkaga qo'ying. **Hech kimga yubormang.**

## 2-qadam. config.js

* `botUsername`: botingiz username'i (@ siz)
* `card`: karta raqami va egasining ismi
* `prices`: har bir blok narxi (masalan `"30 000 so'm"`)

Keyin to'rt faylni (`index.html`, `app.js`, `questions.js`, `config.js`) GitHub'ga qayta yuklang.

## 3-qadam. Botni ishga tushirish

Telegram ID'ingizni bilish uchun botga `/id` yozing (avval bot ishlab turishi kerak; birinchi marta ADMIN\_ID ni vaqtincha `1` qilib ishga tushirib `/id` ni oling).

```powershell
pip install -r requirements.txt
$env:BOT_TOKEN="9069231713:AAE36d7CW82SD6HOS4PA8Ctbce0-1JFJpPU"
$env:WEBAPP_URL="https://temursaypnazarov2-art.github.io/huq-qtest"
$env:ADMIN_ID="663269480"
python bot.py
```

Kompyuter o'chiq bo'lsa yoki bot to'xtatilsa, to'lov chekini qabul qilish ham to'xtaydi.

## Pullik savollarni qo'shish

`paid\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_questions.json` da blok id'si bo'yicha savollar turadi (formati `questions.js` bilan bir xil):

```json
{
  "sinf8": \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[
    {
      "q": { "uz": "Savol", "kk": "Soraw" },
      "o": \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[ { "uz": "To'g'ri javob", "kk": "Durıs juwap" }, { "uz": "2", "kk": "2" }, { "uz": "3", "kk": "3" }, { "uz": "4", "kk": "4" } ],
      "a": 0,
      "e": { "uz": "Izoh", "kk": "Túsindirme" }
    }
  ]
}
```

Hozir `sinf8` ichida faqat **2 ta sinov savoli** bor (qoidalarni tekshirish uchun). Haqiqiy darslik savollari bilan almashtiring. Savoli yo'q blok uchun bot to'lov qabul qilmaydi ("hali tayyor emas" deydi).
Yangi pullik blok uchun `questions.js` da mavzuga `paid: true` qo'shing, `config.js` da narx yozing.

## Qo'lda ochish

Chek bo'lmasa yoki xato chiqsa, botga o'zingiz yozing: `/ochish FOYDALANUVCHI\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_ID sinf8`

## Muhim eslatmalar

* **Xavfsizlik darajasi.** Pullik savollarni faqat shaxsiy kalitni bilgan kishi o'qiy oladi. Kalit foydalanuvchining Telegram hisobiga bog'lab saqlanadi, lekin kalit boshqaga berilsa, u ham o'qiy oladi. Bu bepul Spark rejasining cheklovi. Foydalanuvchilar ko'paysa, Firebase Blaze yoki kichik serverga o'tish tavsiya etiladi.
* **Telegram qoidasi.** Telegram bot va Mini App ichidagi raqamli xizmatlar uchun Telegram Stars'ni talab qiladi. Kartadan kartaga o'tkazma bilan sotish bu qoidaga zid bo'lishi mumkin va botning bloklanishiga olib kelishi mumkin. Bu xavfni o'zingiz hal qilasiz.
* **Soxta chek.** Pul tushganini har doim o'z bank ilovangizda tekshiring.
* **Bepul limitlar (Spark).** Kuniga 50 000 o'qish va 20 000 yozish. Test boshlash 1 ta o'qish. Limit oshsa, Firestore oy oxirigacha to'xtaydi.
* **Qoraqalpoqcha matnlar.** Qoraqalpoq tilini biladigan odam tekshirib chiqishi kerak.
* Natijalar foydalanuvchi qurilmasida saqlanadi; ochilgan bloklar esa Telegram hisobiga bog'liq (CloudStorage), boshqa qurilmada ham saqlanib qoladi.

