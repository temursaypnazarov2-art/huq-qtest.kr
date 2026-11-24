"""Huquq Test Bot: ikki tilli (o'zbek / qoraqalpoq) Telegram bot.

Ishlash tartibi:
  1. /start bosilganda til tanlanadi (birinchi marta).
  2. Til tanlangach, chatning pastki qismida "Ochish" menyu tugmasi paydo bo'ladi.
  3. Tugma Mini App (index.html) ni tanlangan tilda ochadi.
"""
import asyncio
import json
import logging
import os
from pathlib import Path

from aiogram import Bot, Dispatcher, F
from aiogram.filters import Command, CommandStart
from aiogram.types import (
    CallbackQuery,
    InlineKeyboardButton,
    InlineKeyboardMarkup,
    MenuButtonWebApp,
    Message,
    WebAppInfo,
)

BOT_TOKEN = os.getenv("9069231713:AAE36d7CW82SD6HOS4PA8Ctbce0-1JFJpPU", "")
WEBAPP_URL = os.getenv("https://github.com/temursaypnazarov2-art/huq-qtest.kr.git", "").rstrip("/")  # masalan: https://sizning-nom.github.io/huquq-test

USERS_FILE = Path(__file__).with_name("users.json")

TEXTS = {
    "uz": {
        "open": "Ochish",
        "welcome": (
            "<b>Xush kelibsiz!</b>\n\n"
            "Bu bot huquq fanidan bilimingizni sinab ko'rishga yordam beradi. "
            "Pastdagi <b>Ochish</b> tugmasini bosing, mavzuni tanlang va testni boshlang."
        ),
        "lang_saved": "Til o'zgartirildi: O'zbekcha",
    },
    "kk": {
        "open": "Ashıw",
        "welcome": (
            "<b>Xosh keldińiz!</b>\n\n"
            "Bul bot huqıq páni boyınsha bilimińizdi sınap kóriwge járdem beredi. "
            "Tómendegi <b>Ashıw</b> túymesin basıń, temanı saylań hám testti baslań."
        ),
        "lang_saved": "Til ózgertildi: Qaraqalpaqsha",
    },
}

LANG_PROMPT = "Tilni tanlang / Tildi saylań"


def load_users() -> dict:
    try:
        return json.loads(USERS_FILE.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError):
        return {}


def save_user_lang(user_id: int, lang: str) -> None:
    users = load_users()
    users[str(user_id)] = lang
    USERS_FILE.write_text(json.dumps(users, ensure_ascii=False, indent=2), encoding="utf-8")


def get_user_lang(user_id: int):
    lang = load_users().get(str(user_id))
    return lang if lang in TEXTS else None


def lang_keyboard() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(text="O'zbekcha", callback_data="lang:uz"),
                InlineKeyboardButton(text="Qaraqalpaqsha", callback_data="lang:kk"),
            ]
        ]
    )


async def set_menu_button(bot: Bot, chat_id: int, lang: str) -> None:
    """Xabar yozish maydoni yonida doimiy "Ochish" tugmasini o'rnatadi."""
    await bot.set_chat_menu_button(
        chat_id=chat_id,
        menu_button=MenuButtonWebApp(
            text=TEXTS[lang]["open"],
            web_app=WebAppInfo(url=f"{WEBAPP_URL}/index.html?lang={lang}"),
        ),
    )


dp = Dispatcher()


@dp.message(CommandStart())
async def on_start(message: Message, bot: Bot) -> None:
    lang = get_user_lang(message.from_user.id)
    if lang is None:
        await message.answer(LANG_PROMPT, reply_markup=lang_keyboard())
        return
    await set_menu_button(bot, message.chat.id, lang)
    await message.answer(TEXTS[lang]["welcome"], parse_mode="HTML")


@dp.message(Command("lang"))
async def on_lang(message: Message) -> None:
    await message.answer(LANG_PROMPT, reply_markup=lang_keyboard())


@dp.callback_query(F.data.startswith("lang:"))
async def on_lang_chosen(call: CallbackQuery, bot: Bot) -> None:
    lang = call.data.split(":", 1)[1]
    if lang not in TEXTS:
        await call.answer()
        return
    save_user_lang(call.from_user.id, lang)
    await set_menu_button(bot, call.message.chat.id, lang)
    await call.message.edit_text(TEXTS[lang]["lang_saved"])
    await call.message.answer(TEXTS[lang]["welcome"], parse_mode="HTML")
    await call.answer()


async def main() -> None:
    if not BOT_TOKEN or not WEBAPP_URL:
        raise SystemExit("BOT_TOKEN va WEBAPP_URL o'zgaruvchilarini o'rnating (README.md ga qarang).")
    if not WEBAPP_URL.startswith("https://"):
        raise SystemExit("WEBAPP_URL https:// bilan boshlanishi shart (Telegram Mini App talabi).")
    logging.basicConfig(level=logging.INFO)
    bot = Bot(BOT_TOKEN)
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
