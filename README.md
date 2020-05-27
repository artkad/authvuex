# vuex

Приложение контактов

Для запуска приложения локально на компьютере необходимо скачать с репозитория GitHub https://github.com/artkad/authvuex

Далее в консоль ввести для установки зависимостей npm install
Для запуска приложения и JSON Server ввести в консоль npm run serve

При переходе открывается главная страница, где нужно ввести логин/пароль. Есть валидация на пустые или неверно введенные данные.
root@root.com  123456  это данные для входа уже имеющиеся в базе JSON Server db.json.
Можно зарегистрировать свой логин и пароль перейдя по ссылке Register в верхнем меню.
После входа в приложение вы увидете список контактов ранее введенных в базу.

В шапке указано имя пользователя, кнопка выхода, а так же Dashboard на список контактов для возврата.

В центральной части экрана список контактов и кнопка просмотра в правой части.
В правом нижнем углу кнопка плюс для создания нового контакта.

В просмотре контакта есть кнопки для возврата в список контактов, удаление контакта из базы и редактирование контакта в правом нижнем углу.

В режиме редактирования контакта Id изменить нельзя. Кнопка Submin подтверждает измененние в базе.

В режиме ввода нового сотрудника есть четыре поля для ввода информации, Id вводится в произвольной форме.

При обновлении страницы данные не теряются. При входе в систему, в навигации доступны только кнопки выход и ссылки Dashboard и  Contact manager для перехода в список контактов.

При выходе в навигации видны ссылки Login и Register. Данные недоступны при переходе по прямой ссылке добавляя после домена /new  /edit  /


Используемые инструменты:
  - materialize css
  - font-awesome
  - fonts.googleapis.com
  - webpack
  - Vuex
  - Vue
