# CRUD + Router

Реализован CRUD при работе с HTTP с использованием Router.
Переменными являются значения ID, content и created, в качестве остальных значений вроде имени и фото поставлены заглушки.

## Общая механика
При нахождении на странице "/" отображается список существующих постов, полученный с помощью GET-запроса на адрес http://localhost:7070/posts. Полученные данные отображаются в виде карточек: