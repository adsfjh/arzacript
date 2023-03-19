import telebot
from telebot import types 
import time
import mysql.connector
from mysql.connector import connect, Error

mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="tech_bot",
    )

mycursor = mydb.cursor()

bot = telebot.TeleBot('5805256696:AAFb5XPbtD7VOTo5dBvJJ-OhxjPHUg6aKwo')


@bot.message_handler(commands=['start'])
def start(message):
    us_id = message.from_user.id
    sql = "INSERT IGNORE INTO users (userid, is_admin) VALUES (%s, %s)"
    val = (us_id, 0)
    mycursor.execute(sql, val)
    mydb.commit()

    markup = types.ReplyKeyboardMarkup(resize_keyboard=True, row_width=1)
    btn1 = types.KeyboardButton("🛠 Написать жалобу на форум")
    btn2 = types.KeyboardButton("✉ Связаться с тех. администрацией")
    btn3 = types.KeyboardButton("❓ Ответы на частозадаваемые вопросы")
    markup.add(btn1, btn2, btn3)
    bot.send_message(message.chat.id, text="Приветствуем, {0.first_name}!\nЭто бот для связи с тех. поддежкой сервера Mesa.\nВыберите ниже свой запрос.".format(message.from_user), reply_markup=markup)

@bot.message_handler(func=lambda message: message.text == "❓ Ответы на частозадаваемые вопросы")
def send_faq_keyboard(message):
    # Создание кнопок на основе данных из таблицы response_templates
    keyboard = telebot.types.ReplyKeyboardMarkup()
    mycursor = mydb.cursor()
    mycursor.execute("SELECT response_name FROM response_templates")
    results = mycursor.fetchall()
    
    for result in results:
        button = telebot.types.KeyboardButton(text=result[0])
        keyboard.add(button)
        back = types.KeyboardButton("❌ Вернуться в главное меню")
    keyboard.add(back)
    # Отправка сообщения с кнопками
    bot.send_message(message.chat.id, "Выберите один из вариантов:", reply_markup=keyboard)

@bot.message_handler(func=lambda message: message.text == "❌ Вернуться в главное меню")
def back(message):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True, row_width=1)
    btn1 = types.KeyboardButton("🛠 Написать жалобу на форум")
    btn2 = types.KeyboardButton("✉ Связаться с тех. администрацией")
    btn3 = types.KeyboardButton("❓ Ответы на частозадаваемые вопросы")
    markup.add(btn1, btn2, btn3)
    bot.send_message(message.chat.id, text="Вы вернулись в главное меню", reply_markup=markup)

# Обработчик нажатия на кнопку
@bot.message_handler(func=lambda message: True)
def echo_all(message):
    # Получение названия кнопки
    response_name = message.text
    # Запрос к базе данных для получения текста ответа
    mycursor = mydb.cursor()
    mycursor.execute("SELECT response_text FROM response_templates WHERE response_name=%s", (response_name,))
    result = mycursor.fetchone()
    if result is not None:
        response_text = result[0]
        # Отправка текста ответа пользователю
        bot.reply_to(message, response_text)
    else: 
        if(message.text == "🛠 Написать жалобу на форум"): #переход на подтверждение регистрации аккаунта
            markup = types.ReplyKeyboardMarkup(resize_keyboard=True,row_width=1)
            btn1 = types.KeyboardButton("✅ Да, зарегестрирован")
            btn2 = types.KeyboardButton("❎ Нет, у меня нет форумного аккаунта")
            back = types.KeyboardButton("❌ Вернуться в главное меню")
            markup.add(btn1, btn2, back)
            bot.send_message(message.chat.id, text="Для начала нужно узнать, зарегистрирован ли у вас форумный аккаунт.", reply_markup=markup)

        elif(message.text == "✅ Да, зарегестрирован" or message.text == "✅ Я зарегистрировал(а) аккаунт"): #как написать жб
            bot.send_message(message.chat.id, text="""ℹ В таком случае вам необходимо заполнить [эту форму](https://forum.arizona-rp.com/form/7/select)\. 
            ❗❗❗ ВНИМАНИЕ ❗❗❗
            1⃣ Указывайте тип проблемы точно, а не рандомно ткнув\.
            2⃣ Максимально ответственно отнеститесь к заполнению формы\.
            2⃣\.1⃣ В поле 'Дата' необходимо указывать дату проблемы, а не написания жалобы\! ЭТО ВАЖНО\! При неправильно заполенной дате время рассмотрение может повыситься\.
            2⃣\.2⃣ ПОДРОБНО опишите ситуацию, указав при этом маскимальное количество информации\.
            2⃣\.3⃣ Прикладывайте максимальное количество доказательств\.
            2⃣\.4⃣ При заполнении средства связи учтите, что в случае вопросов вам будут писать именно туда\. Если вы редко отвечаете на форумные сообщения то не стоит указывать этот тип связи\. Лучшие варианты связи \- ТГ и ВК\.""", parse_mode="MarkdownV2")

        elif(message.text == "❎ Нет, у меня нет форумного аккаунта"): #гайд как зарегать форумник
            bot.send_message(message.chat.id, "В таком случае необходимо зарегистрировать форумный аккаунт. Следуйте инструкциям ниже.")
            time.sleep(0.2)
            bot.send_photo(message.chat.id, 'https://i.imgur.com/BpNXR6B.png', 'При заходе на [форум](https://forum.arizona-rp.com) необходимо нажать кнопку "регистрация"\.',parse_mode="MarkdownV2")
            time.sleep(0.2)
            bot.send_photo(message.chat.id, 'https://i.imgur.com/0DwgcMH.png', 'Затем нужно заполнить все поля, электронную почту нужно использовать настоящую и, желательно, известную (gmail, mail, yandex) и подобные. Иначе ссылка для подтверждения может не дойти')
            time.sleep(0.2)
            bot.send_photo(message.chat.id, 'https://i.imgur.com/bOn9FOl.png', 'После этого вам необходимо подтвердить свой аккунт.')
            time.sleep(0.2)
            markup = types.ReplyKeyboardMarkup(resize_keyboard=True, row_width=1)
            btn1 = types.KeyboardButton("✅ Я зарегистрировал(а) аккаунт")
            btn2 = types.KeyboardButton("✉ Связаться с тех. администрацией")
            back = types.KeyboardButton("❌ Вернуться в главное меню")
            markup.add(btn1, btn2, back)
            bot.send_message(message.chat.id, "Ваш аккаунт на форуме готов!\nДля продолжения нажмите первую кнопку ниже. Если возникли проблемы - вторую кнопку.", reply_markup=markup)

        elif(message.text == "✉ Связаться с тех. администрацией"): #ответ бота с гайдом, как связаться с техами
            bot.send_message(message.chat.id, text="Для связи с тех. администрацией вам необходимо заполнить заявку в личные сообщения @techmesa по форме ниже.")
            bot.send_message(message.chat.id, text="1. Ваш никнейм: \n2. Суть проблемы: \n3. Ссылка на жалобу (при наличии): \n4. Дата проблемы(при необходимости):")
            bot.send_message(message.chat.id, text="Примечание.\nОбычно ответ приходит в течении 24 часов, однако если тех. раздел загружен (обновление/массовые слеты), время может увеличиться.\nЕсли вам нужна связь с определенным администратором - укажите его ник.")

        else: #при невалид ответе боту
            bot.send_message(message.chat.id, text="Неизвестный вопрос. \nЕсли вы хотите задать вопрос именно тех. администрации, вернитесь на главную страницу и нажмите вторую кнопку.")

bot.infinity_polling()
