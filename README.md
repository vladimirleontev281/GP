Просмотр результата: https://vladimirleontev281.github.io/GP

----------
07.02.2021
----------

Немного о проделанной работе

Разработку начал вести заранее (до ответа о прохождении этапа), т.к. предвидел, что работы будет много. На разработку приблизительно ушло часов 50-60.


Немного о результате

Реализован компонент аутентификации с раздельными формами и роутами для регистрации и аутентификации пользователя. Есть валидация полей и submit-валидация.

Реализовано ограничение функционала для неавторизованных пользователей (нельзя создавать статью), статьи могут редактировать только владельцы. Реализована эмуляция withCredentials и пользовательская сессия по токену.

Дефолтные пользователи:
- Cat.White@gmail.com          pass - 11111
- Ritchie.Black@gmail.com      pass - 22222
- Alistair.Green@gmail.com     pass - 33333
- Cynthia.Gray@gmail.com             pass - 44444


В случае если пользователь "руками" перезагружал страницу ломался React-router. В целом можно настроить статический сервер (ну и реальный конечно) чтобы на любой запрос на хост отдавал index.html, однако Github Pages не дает возможности такой настройки. Поэтому была разработана система корректных редиректов, функция определения так называемого префикса перед домашними роутами и страница 404.html, что вкупе дает корректную обработку "ручной" перезагрузки страницы даже при отсутствии настройки сервера для SPA.

Реализован модуль фильтрации. Для него переиспользованы компоненты Search и Switcher. Переработана система поиска/фильтрации, ввиду того, что поиск и фильтрация могут накладываться.

Добавлена небольшая система версионности для перезаписи псевдо-БД в случае несовпадения версии. Сделано для удобства т.к. в случае изменения формата данных приходилось сбрасывать localStorage руками.

Меню теперь закрывается при выборе любой опции в нем (кроме фильтрации) и при потере фокуса.


----------
27.01.2021 (решение по P.S. из описания за 25.01.2021)
----------

В валидации URL-адресов были допущены ошибки, как в логике обработки ответов (если не использовать mode: no-cors, то запрос не проходит, а если использовать, то Response.ok всегда false), так и в логике ощего порядка(неправильно опрашивал наличие formData.original, из-за этого информация из этого поля вообще не учитывалась).

Ошибки исправил. Заливаю этот коммит, буду тестировать. Надеюсь, что исправление этих ошибок после дедлайна не перечеркнет мои результаты работы... Надеюсь на понимание...


----------
25.01.2021
----------

Немного о проделанной работе

Вёл разработку 22-го (приблизительно 10 часов), 24-го (приблизительно 5 часов) и 25-го (приблизительно 8 часов).
Итого: приблизительно 23 часа.


Немного о результате

ТЗ на этот этап выполнено (данные о дате и времени создания храняться в численном виде (timestamp), эти данные уже отражаюся в элементах, сортировка по времени создания работает).

Из дополнительного:
- доработан пользовательский интерфейс (появилась менюшка, там кнопка "добавить статью" и интерфейс сортировки);
- написал валидацию (обработка состояния полей шла через redux-form, соответственно через её делал и валидацию).


Надеюсь, что пройду на следующий этап, будет интересно :). Постараюсь планомерно исправлять ранее заявленные недостатки, по возможности добавлять что-то новое.


P.S. Перед тем как сдавать, попросил друга потестировать, выяснилось, что у него крашится приложение после добавления / изменения статьи. Это связано с тем, что во время проверки URL, на этот URL шлется HEAD-запрос. Краш происходит из-за CORS-политик. В следующем этапе нужно подумать что с этим делать...

----------
10.01.2021
----------

Немного о проделанной работе

Писать начал с 6-го января, работал где-то по 8-10 часов в день, получается на то, что получилось потратил приблизительно 40-50 часов (планирование, изучение неизветных аспектов, написание, тестирование, перерывы).


Немного о результате


Из недостатков:

Самый большой недостаток - написано не на TypeScript. Ранее на TypeScript не писал, поэтому ввиду нехватки времени решил писать на JS. Чтобы как-то компенсировать этот недостаток использовал библиотеку prop-types для валидации входных данных в компонентах.

Прошу не судить строго за внешний вид приложения и отдельных компонентов, дизайн - это меньшее из всего над чем я работал. Да и, признаться честно, не обладаю я "дизайнерским взглядом на вещи".

Так же есть ряд доработок на будущее, обнаруженных во время тестирования или не реализованных из-за нехватки времени, а именно:

- необходимо ввести state-менеджмент приложения, чтобы обеспечить возврат на ту же точку при перезагрузке страницы (скажем, если перезагрузить браузер, чтобы пользователь вернулся на ту же новость, которую читал, а не в "корень" приложения);

- необходимо разработать валидацию полей формы редактирования/создания статей;

- необходимо продумать логику поведения при нажатии кнопки "назад" на мобильных устройствах и внедрить ее;

- при создании/редактировании новости доработать функционал добавления изображения. Текущее решение скорее заглушка. Предполагается что в поля должен вводиться url изображения на удаленном ресурсе. Стоит добавить функционал input file и drag-and-drop;

- более подробно проработать варианты "защиты от дурака". Какие-то варианты я проработал (дефолтное изображение в случае отсутствия путей к изображению, отсутствие ссылки to original при чтении новости в случае если ссылка не была введена и т.д.), однако, уверен, работы там еще много.

Наверное (и скорее всего :) ) есть еще недочеты которые я не предвидел ввиду своей неопытности...


Если на этом этапе меня не "завернут", то в следующем/следующих этапе/этапах постараюсь исправить эти недостатки и переписать все на TypeScript.



Из достоинств:

- изначально заложил flux-архитектуру;
- использую Redux;
- эмулирую работу backend-а, да и в принципе писал приложение с расчетом на работу с backend, поэтому при появлении реального api можно легко на него перейти путем редактирования/замены файла api.js.
- при создании статьи в качестве контента можно вкладывать верстку;