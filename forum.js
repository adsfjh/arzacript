// ==UserScript==
// @name        arzmesa
// @namespace   arzmesa
// @match       https://forum.arizona-rp.com/*
// @grant       none
// @version     14
// @author      1clyde
// @description teh
// ==/UserScript==
// в версии меняйте чисто версию (2->3 и т.д), нет смысла в дробях


window.button_id = 0;

window.active_old = 0;


var button_shavar = 'value="Выбрать ответ" id="shabs" style="margin-left: 3px;"';

var button_shabs = '<input type="button" class="button shabs" ' + button_shavar + '>';

$('.button--icon--reply').after(button_shabs);

$(document).ready(function () {

let shabsBtn = document.getElementById("shabs");
shabsBtn.addEventListener("click", function() {
$('div.overlay-container').remove()

XF.alert(`<div id="shabscontent"></div>`, "Выберите ответ");

//тут начало ответов
addbtnscript('1.пропажа(форма)',"[CENTER][FONT=verdana]Приветствую.<br>Заполните 1 раз данную форму -[COLOR=rgb(163, 143, 132)] [/COLOR][/FONT][URL='https://docs.google.com/forms/d/e/1FAIpQLSckU5LTFRhfdyq46T0InpPEWvEQfRgc369ZFHIcyBMxCV8QqQ/viewform'][FONT=verdana][COLOR=rgb(226, 80, 65)][I]кликабельно[/I].[/COLOR][/FONT][/URL][FONT=verdana][COLOR=rgb(255, 0, 0)]<br>Если не знаете, как именно заполнять - [/COLOR][/FONT][URL='https://forum.arizona-rp.com/threads/4312015/post-25148589'][FONT=verdana][COLOR=rgb(226, 80, 65)][I]посмотрите в этой теме.[/I][/COLOR][/FONT][/URL][FONT=verdana]<br>Обычно восстановление предметов/вирт или смена привязок проходит [B]раз в 1-2 дня.[/B]<br>Как только Ваша заявка будет обработана, Вам сообщат в данной теме, после чего нужно не заходить ~1 день в игру для успешного исполнения заявки.<br>Просьба не флудить в ВК тех. администрации насчёт восстановления, мы работаем над этим постоянно.[/FONT][/CENTER]");
addbtnscript('2.пропажа(выдача)',"[CENTER][FONT=verdana]Была создана заявка  .<br>Заявка будет обработана ст. администрацией и принята в[B] течении 24 часов (реже - 48). [/B]<br>Убедительная просьба не менять свой ник до момента выдачи, не менять предметы местами в инвентаре в случае, если вам должны выдать предмет <br>который помещается в инвентарь.<br>При возникновении вопросов можете отписать [/FONT][URL='https://t.me/techmesa'][COLOR=rgb(226, 80, 65)][I][FONT=verdana]телеграм технического раздела Месы[/FONT][/I][/COLOR][/URL][/CENTER]");
addbtnscript('Предложение/баг',"[CENTER][FONT=verdana]Приветствую.<br>Заполните один раз эту форму - [URL='https://docs.google.com/forms/d/e/1FAIpQLScWtpcWUebLCxNcrRFhHkXw5dpgC4KEV1vvCUzKudvrGHVhIw/viewform'][SIZE=4][I][COLOR=rgb(226, 80, 65)]кликабельно.[/COLOR][/I][/SIZE][/URL]<br>После этого ваша заявка будет на рассмотрении у разработчиков. <br>Обратите внимание, что обратного ответа в этой теме не будет.<br>Закрыто.[/FONT][/CENTER]");
addbtnscript('восст',"[CENTER][FONT=verdana]Приветствую<br>Ввиду того, что у вас имеется привязка ВК в игре/почты, вы можете восстановить доступ к аккаунту собственным трудом, используя[URL='https://forum.arizona-rp.com/threads/4312015/post-25140373'][COLOR=rgb(226, 80, 65)][I] это руководство.[/I][/COLOR][/URL]<br>При возникновении вопросов перепишите тему, указав ссылку на эту. <br>Закрыто[/FONT][/CENTER]");
addbtnscript('отказ восст',"[CENTER][FONT=verdana]Приветствую<br>В восстановлении аккаунта отказано.<br>В данном случае ваш аккаунт будет забанен навсегда.<br>При регистрации нового аккаунта следуйте [URL='https://forum.arizona-rp.com/threads/4312015/post-25140375'][COLOR=rgb(226, 80, 65)][I]этим правилам[/I][/COLOR][/URL] и помните, что ваш аккаунт - ваша ответственность.<br>Закрыто[/FONT][/CENTER]");
addbtnscript('аунтефикатор',"[CENTER][FONT=verdana]Приветствую<br>Ввиду того, что у вас имеются привязки вы можете снять аунтефикатор собственным трудом, используя[URL='https://forum.arizona-rp.com/threads/4312015/post-25140345'][COLOR=rgb(226, 80, 65)][I] это руководство.[/I][/COLOR][/URL]<br>При возникновении вопросов перепишите тему, указав ссылку на эту. <br>Закрыто[/FONT][/CENTER]");
addbtnscript('маст. мобайл',"[CENTER][FONT=verdana]Приветствую.<br>Сообщите о предложении или проблеме в личные сообщения группы [URL='https://vk.com/agm_workshop'][B][I][COLOR=rgb(255, 0, 0)]Мастерская ARIZONA MOBILE[/COLOR][/I][/B][/URL].<br>Там вам оперативно дадут ответ.<br>Закрыто[/FONT][/CENTER]");
addbtnscript('маст. лаунчер',"[CENTER][FONT=verdana]Приветствую.<br>Сообщите о предложении или проблеме в личные сообщения группы [URL='https://vk.com/ag_workshop'][B][I][COLOR=rgb(255, 0, 0)]Мастерская ARIZONA GAMES[/COLOR][/I][/B][/URL].<br>Там вам оперативно дадут ответ.<br>Закрыто[/FONT][/CENTER]");
addbtnscript('жб на адм',"[CENTER][FONT=verdana]Приветствую.<br>Напишите жалобу на имя администратора [URL='https://forum.arizona-rp.com/forums/1218/'][I][COLOR=rgb(226, 80, 65)]в этот раздел[/COLOR][/I][/URL]<br>Закрыто[/FONT][/CENTER]");
addbtnscript('напишите в ТГ ',"[CENTER][FONT=verdana]Приветствую<br>Отпишите в ТГ - [URL='https://t.me/techmesa'][COLOR=rgb(226, 80, 65)][I]кликабельно[/I][/COLOR][/URL], приложив ссылку на жалобу.<br>Закрыто[/FONT][/CENTER]");
addbtnscript('неактив',"[CENTER][FONT=verdana]Приветствую<br>Не дождались от вас ответа(прошло более 24 часов). Если тема еще актуальна - перепишите ее, указав ссылку на эту.<br>Закрыто.[/FONT][/CENTER]");
addbtnscript('Флуд',"[CENTER][FONT=verdana]Приветствую<br>Ответ вам был дан в прошлой теме. <br>Дальнейшее создание подобных тем может привести к блокировке форумного аккаунта.<br>Закрыто[/FONT][/CENTER]");
addbtnscript('dell',"[CENTER][FONT=verdana]Приветствую<br>Тема закрыта по просьбе ее автора. [/FONT][/CENTER]");
addbtnscript('док-ва',"[CENTER][FONT=verdana]Приветствую<br>Доказательства недоступны<br>Закрыто.[/FONT][/CENTER]");
addbtnscript('будет наказан',"[CENTER][FONT=verdana]Приветствую<br>Игрок будет наказан!<br>Закрыто.[/FONT][/CENTER]");
addbtnscript('ответ',"[CENTER][FONT=verdana]Приветствую.<br><br><br>[/FONT][/CENTER]");
addbtnscript('hide teh',"[GROUPS=78]<br><br>[/GROUPS]");
addbtnscript('carbag',"Приветствую.<br>Проблема должна решиться автоматически после перезахода/рестарта. Транспорт по прежнему на аккаунте.<br>Закрыто.");
addbtnscript('guide hide',"Приложите информацию используя модуль 'Дополнительно' -> Скрыть -> Скрытый текст для определенных групп -> Ставите галочку правее от 'Тех. Администратор' в графу текст вставьте ссылку или запрашиваемую информацию<br><br>[IMG]https://i.imgur.com/ROHsQ5L.png[/IMG].");
addbtnscript('забрать с аукциона аб',"Приветствую.<br>Вам надо забрать Ваше авто на авто базаре(пример на скринах ниже):<br>[IMG]https://i.ibb.co/X39wk6k/image.png[/IMG]<br>[IMG]https://i.imgur.com/6eKxP2t.png[/IMG]<br>[IMG]https://i.ibb.co/1Xr8zGW/image.png[/IMG]<br>Если это не поможет - пересоздайте тему прикрепив ссылку на эту. Закрыто.")
addbtnscript('donate verno',"Приветствую.<br>Донат выдан верно.<br>(это удалить, вставить строчку о донате)<br>те. 1 рубль при х4 множителе это 4 аз.<br>На сайте всегда отображает по курсу х2, сайт не синхронизирует активирован ли х4 на аккаунте (кроме глобальных акций х4)<br>Пополняете на 100 рублей - получаете 200az если не активирован х4 на аккаунте/сервере. Если активирован х4 на аккаунте/сервере - получаете 400az<br>Пополняете на 1000 рублей - 2000az при х2, 4000az при х4.<br>Закрыто.");
addbtnscript('был взломан', "[CENTER][FONT=verdana]Приветствую.<br>Аккаунт был взломан. Взломщика мы забаним, но имущество в случаях взлома и НРП разводов не восстанавливается.<br>Защищайте аккаунт всеми возможными способами. Подробнее написано в [URL='https://forum.arizona-rp.com/threads/4312015/post-25140375'][COLOR=rgb(226, 80, 65)][I] этом руководстве.[/I][/COLOR][/URL]<br>Закрыто[/FONT][/CENTER]");
addbtnscript('дайте реги','[CENTER][COLOR=rgb(239, 239, 239)][FONT=trebuchet ms][SIZE=3]Доброго времени суток.<br>Пожалуйста, заполните данную форму ниже (желательно скрыть содержимое от обычных пользователей форума).[/SIZE][/FONT]<br>[SPOILER="Как это сделать?"][IMG]https://i.imgur.com/ROHsQ5L.png[/IMG][/SPOILER]<br>[IMG]https://i.imgur.com/4Oqi4X4.png[/IMG]<br>[FONT=trebuchet ms][SIZE=3]1. Ваш игровой ник: "TEXT".<br>2. Регистрационные данные:<br>Страна: "TEXT".<br>Город: "TEXT".<br>Провайдер: "TEXT".<br>3. Смены ников: "TEXT".<br>4. Ник который у вас был при регистрации: "TEXT"<br>5. Приблизительная дата при регистрации: "TEXT".<br>6. Скриншот с [URL="https://forum.arizona-rp.com/redirect?to=aHR0cHM6Ly8yaXAucnUv"]https://ip-api.com[/URL] (без VPN) (если отличается местонахождение при регистрации и в данный момент - объяснить почему):"TEXT".<br>7. Была ли привязана у вас почта: "да/нет".<br>8. Привязан ли у вас вк к аккаунту: "да/нет, если да то какой.<br>https://i.imgur.com/pbIBSDf.gif[/SIZE][/FONT][/COLOR][/CENTER]');
addbtnscript('приложите вход с ВК',"Приветствую<br>Приложите видео как входите через ВК в личный кабинет на сайте https://arizona-rp.com/login/, под красной кнопкой 'Войти' нужно нажать 'Войти через ВКонтакте' и выбрать ваш аккаунт<br>Ссылку на видео лучше вставить в скрытый блок [IMG]https://i.imgur.com/ROHsQ5L.png[/IMG]");
addbtnscript('объект вернется 2-3 дня',"Приветствую.<br>Подождите 2-4 дня, зачастую объект возвращается сам на место установки.<br>Если объект не вернулся спустя указанный период времени - пересоздайте жалобу указав в ней ссылку на эту.<br>Закрыто.");
addbtnscript('теч вк и тг',"Приветствую.<br>Отпишите в Телеграмм https://t.me/techmesa или группу ВК https://vk.com/techmesa");
addbtnscript('донат на фейк сайт',"[CENTER][COLOR=rgb(239, 239, 239)][FONT=trebuchet ms][SIZE=3]Приветствую,<br> Закинули деньги на фейковый фишинг сайт. Официальный сайт проекта - https://arizona-rp.com/<br>Закрыто.[/FONT][/CENTER]");
addbtnscript('бан ип','[CENTER][COLOR=rgb(239, 239, 239)][FONT=trebuchet ms][SIZE=3]Здравствуйте уважаемый игрок!<br><br>Если Вы испытываете проблемы с подключением к серверам и на окне входа у вас в основном сообщения:<br><br>- "The server didn`t respond. Retrying..." или<br>- "Выбранный слот занят. Повторяем подключение..." или<br>- "Вы заблокированы на данном сервере"<br>То это значит, что ваш IP был временно заблокирован на стороне хостинга.<br><br>Причиной этому могут быть:<br><br>1. Использование Fastconnect/Fixconnect<br>2. Использование некоторых сторонних сборок/модификаций.<br>3. Проблемы со стабильностью подключения или блокировки со стороны вашего интернет-провайдера (В основном некоторые провайдеры стран Европы и СНГ).<br>4. За игру с нескольких устройств/аккаунтов в одной WiFi сети.<br><br>Для решения проблем делайте следующие шаги:<br><br>1. Удалить Fastconnect/Fixconnect<br>2. Перезагрузить роутер если у вас IP динамический.<br>3. Использовать VPN<br><br>Блокировка спадет автоматически в течении 1-5 часов или с рестартом в 5:00 по МСК.<br><br>Советуем играть только на чистом лаунчере Arizona Games во избежание подобного в дальнейшем.<br><br>Если ваша проблема не решится после рестарта, то отпишите в данный раздел - "https://forum.arizona-rp.com/threads/connection-problems/"<br><br>В случае любых проблем с лаунчером , можете обратится в данную группу - "https://vk.com/ag_workshop"<br><br>Приятной игры, закрыто.[/FONT][/CENTER]');
//тут конец ответов

});

})

function buttonsh_add(title, text) {

var h = new Date().getHours();

var bstyle = 'margin-top: 3px;margin-left: 3px;';

var button_addv = 'value="' + title + '" id="shabs_' + window.button_id + '" style="'+ bstyle +'"';

var button_add = '<input type="button" class="button shabs_button" ' + button_addv + '>';

$('#shabscontent').append(button_add);

var text_nw = text.replace(/\{times_of_day\}/g, (6 < h && h <= 10) ? "Доброе утро" : 0 || (10 < h && h <= 18) ? "Добрый день" : 0 || (18 < h && h <= 22) ? "Добрый вечер" : 0 || "Доброй ночи");

$("input#shabs_" + window.button_id + ".button").bind('click', function () {

$('div.fr-element.fr-view').append(text_nw);

$('span.fr-placeholder').empty()

$('div.overlay-container').remove()

$('body').attr('class', '')

$("a.overlay-titleCloser").trigger('click')

})

window.button_id++;

}

function addbtnscript(titl, text) {
  $('div.fr-element.fr-view').empty();
  buttonsh_add(titl, text);
}

window.addEventListener('load', function() {
$(".fr-view").html("[CENTER][FONT=verdana]Приветствую.<br><br>Закрыто.[/FONT][/CENTER]");
});





