// ==UserScript==
// @name        arzmesa
// @namespace   arzmesa
// @match       https://forum.arizona-rp.com/*
// @grant       none
// @version     1.2.10
// @author      1clyde
// @description teh
// ==/UserScript==



window.button_id = 0;

window.active_old = 0;


var button_shavar = 'value="Выбрать ответ" id="shabs" style="margin-left: 3px;"';

var button_shabs = '<input type="button" class="button shabs" ' + button_shavar + '>';

$('.button--icon--reply').after(button_shabs);

$(document).ready(function () {

$("button#shabs.button.shabs.rippleButton").click(function() {

$('div.overlay-container').remove()

XF.alert(`<div id="shabscontent"></div>`, "Выберите ответ");

//тут начало ответов
addbtnscript('1.пропажа(форма)',"Заполните 1 раз данную форму -[COLOR=rgb(163, 143, 132)] [/COLOR][/FONT][URL='https://docs.google.com/forms/d/e/1FAIpQLSfn7RHUzdMF8TMS3MDSqlbUwRrPPE1A8gqrWi91awssv-4Iww/viewform'][FONT=verdana][COLOR=rgb(226, 80, 65)][I]кликабельно[/I].[/COLOR][/FONT][/URL][FONT=verdana][COLOR=rgb(255, 255, 255)]<br>Если не знаете, как именно заполнять - [/COLOR][/FONT][URL='https://forum.arizona-rp.com/threads/4312015/post-25148589'][FONT=verdana][COLOR=rgb(226, 80, 65)][I]посмотрите в этой теме.[/I][/COLOR][/FONT][/URL][FONT=verdana]<br>Обычно восстановление предметов/вирт или смена привязок проходит [B]раз в 1-2 дня.[/B]<br>Как только Ваша заявка будет обработана, Вам сообщат в данной теме, после чего нужно не заходить ~1 день в игру для успешного исполнения заявки.<br>Просьба не флудить в ВК тех. администрации насчёт восстановления, мы работаем над этим постоянно.[/FONT][/CENTER]");
addbtnscript('2.пропажа(выдача)',"<br>  [CENTER][FONT=verdana]Приветствую.<br>Была создана заявка  .<br>Заявка будет обработана ст. администрацией и принята в[B] течении 24 часов (реже - 48). [/B]<br>Убедительная просьба не менять свой ник до момента выдачи, не менять предметы местами в инвентаре в случае, если вам должны выдать предмет <br>который помещается в инвентарь.<br>При возникновении вопросов можете отписать [/FONT][URL='https://vk.com/papug_clyde'][COLOR=rgb(226, 80, 65)][I][FONT=verdana]куратору тех. раздела нашего сервера[/FONT][/I][/COLOR][/URL][/CENTER]");
addbtnscript('Предложение/баг',"[CENTER][FONT=verdana]Приветствую.<br>Заполните один раз эту форму - [URL='https://docs.google.com/forms/d/e/1FAIpQLScSb11WJAu9wMWWiAxdm-ycDz65sZe9Ki-Fxqh_I-E8p9v7Cw/viewform'][SIZE=4][I][COLOR=rgb(226, 80, 65)]кликабельно.[/COLOR][/I][/SIZE][/URL]<br>После этого ваша заявка будет на рассмотрении у разработчиков. <br>Обратите внимание, что обратного ответа в этой теме не будет.<br>Закрыто.[/FONT][/CENTER]");
addbtnscript('восст',"[CENTER][FONT=verdana]Приветствую<br>Ввиду того, что у вас имеется привязка ВК в игре/почты, вы можете восстановить доступ к аккаунту собственным трудом, используя[URL='https://forum.arizona-rp.com/threads/4312015/post-25140373'][COLOR=rgb(226, 80, 65)][I] это руководство.[/I][/COLOR][/URL]<br>При возникновении вопросов перепишите тему, указав ссылку на эту. <br>Закрыто[/FONT][/CENTER]");
addbtnscript('отказ восст',"[CENTER][FONT=verdana]Приветствую<br>В восстановлении аккаунта отказано.<br>В данном случае ваш аккаунт будет забанен навсегда.<br>При регистрации нового аккаунта следуйте [URL='https://forum.arizona-rp.com/threads/4312015/post-25140375'][COLOR=rgb(226, 80, 65)][I]этим правилам[/I][/COLOR][/URL] и помните, что ваш аккаунт - ваша ответственность.<br>Закрыто[/FONT][/CENTER]");
addbtnscript('аунтефикатор',"[CENTER][FONT=verdana]Приветствую<br>Ввиду того, что у вас имеются привязки вы можете снять аунтефикатор собственным трудом, используя[URL='https://forum.arizona-rp.com/threads/4312015/post-25140345'][COLOR=rgb(226, 80, 65)][I] это руководство.[/I][/COLOR][/URL]<br>При возникновении вопросов перепишите тему, указав ссылку на эту. <br>Закрыто[/FONT][/CENTER]");
addbtnscript('маст. мобайл',"[CENTER][FONT=verdana]Приветствую.<br>Сообщите о предложении или проблеме в личные сообщения группы [URL='https://vk.com/agm_workshop'][B][I][COLOR=rgb(255, 255, 255)]Мастерская ARIZONA MOBILE[/COLOR][/I][/B][/URL].<br>Там вам оперативно дадут ответ.<br>Закрыто[/FONT][/CENTER]");
addbtnscript('маст. лаунчер',"[CENTER][FONT=verdana]Приветствую.<br>Сообщите о предложении или проблеме в личные сообщения группы [URL='https://vk.com/ag_workshop'][B][I][COLOR=rgb(255, 255, 255)]Мастерская ARIZONA GAMES[/COLOR][/I][/B][/URL].<br>Там вам оперативно дадут ответ.<br>Закрыто[/FONT][/CENTER]");
addbtnscript('жб на адм',"[CENTER][FONT=verdana]Приветствую.<br>Напишите жалобу на имя администратора [URL='https://forum.arizona-rp.com/forums/1218/'][I][COLOR=rgb(226, 80, 65)]в этот раздел[/COLOR][/I][/URL]<br>Закрыто[/FONT][/CENTER]");
addbtnscript('ВК',"[CENTER][FONT=verdana]Приветствую<br>Отпишите в ВК - [URL='https://vk.com/papug_clyde'][COLOR=rgb(226, 80, 65)][I]кликабельно[/I][/COLOR][/URL], приложив ссылку на жалобу.<br>Закрыто[/FONT][/CENTER]");
addbtnscript('неактив',"[CENTER][FONT=verdana]Приветствую<br>Не дождались от вас ответа(прошло более 24 часов). Если тема еще актуальна - перепишите ее, указав ссылку на эту.<br>Закрыто.[/FONT][/CENTER]");
addbtnscript('Флуд',"[CENTER][FONT=verdana]Приветствую<br>Ответ вам был дан в прошлой теме. <br>Дальнейшее создание подобных тем может привести к блокировке форумного аккаунта.<br>Закрыто[/FONT][/CENTER]");
addbtnscript('dell',"[CENTER][FONT=verdana]Приветствую<br>Тема закрыта по просьбе ее автора. [/FONT][/CENTER]");
addbtnscript('док-ва',"[CENTER][FONT=verdana]Приветствую<br>Доказательства недоступны<br>Закрыто.[/FONT][/CENTER]");
addbtnscript('будет наказан',"[CENTER][FONT=verdana]Приветствую<br>Игрок будет наказан<br>Закрыто.[/FONT][/CENTER]");
addbtnscript('ответ',"[CENTER][FONT=verdana]Приветствую.<br><br><br>[/FONT][/CENTER]");
addbtnscript('hide teh',"[GROUPS=78]<br><br>[/GROUPS]");
addbtnscript('carbag',"Приветствую.<br>Проблема должна решиться автоматически после перезахода/рестарта. Транспорт по прежнему на аккаунте.<br>Закрыто.");
addbtnscript('guide hide',"Приложите информацию используя модуль 'Скрыть' -> Скрытый текст для определенных групп -> Тех. Администратор -> в графу текст вставьте ссылку или запрашиваемую информацию<br><br>[IMG]https://i.imgur.com/RJjIWU8.png[/IMG].");
addbtnscript('забрать с аукциона аб',"Приветствую.<br>Вам надо забрать Ваше авто на авто базаре(пример на скринах ниже):[IMG]https://i.ibb.co/X39wk6k/image.png[/IMG][IMG]https://i.ibb.co/1Xr8zGW/image.png[/IMG],[IMG]https://i.imgur.com/6eKxP2t.png[/IMG]<br>Закрыто.")
addbtnscript('donate verno',"Приветствую.<br>Донат выдан верно.<br>(это удалить, вставить строчку о донате)<br>На сайте всегда отображает по курсу х2, сайт не синхронизирует активирован ли х4 на аккаунте (кроме глобальных акций х4)<br>Пополняете на 100 рублей - получаете 200az если не активирован х4 на аккаунте/сервере. Если активирован х4 на аккаунте/сервере - получаете 400az<br>Пополняете на 1000 рублей - 2000az при х2, 4000az при х4.<br>Закрыто.");
addbtnscript('был взломан', "[CENTER][FONT=verdana]Приветствую.<br>Аккаунт был взломан. Взломщика мы забаним, но имущество мы ни в каких случаях не восстанавливаем.<br>Защищайте аккаунт всеми возможными способами. Подробнее написано в [URL='https://forum.arizona-rp.com/threads/4312015/post-25140375'][COLOR=rgb(226, 80, 65)][I] этом руководстве.[/I][/COLOR][/URL]<br>Закрыто[/FONT][/CENTER]");
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
buttonsh_add(titl, text );
}


$(document).ready(function() {
$(".fr-view").html("[CENTER][FONT=verdana]Приветствую.<br><br>Закрыто.[/FONT][/CENTER]");
});

