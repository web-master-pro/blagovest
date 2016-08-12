<?php

    // Имя файла (и путь к нему), в котором происходит обработка ajax-запроса
    // из фильтра со страницы multimdedia (данный файл - его пример),
    // задается в HTML-коде в data-атрибуте "data-action" блока
    // с классом "filter-media". Вот так:
    // <div data-action="assets/multimedia.php" class="filter-media">

    // Сначала сохраняем входные параметры фильтра в отдельные переменные,
    // чтобы дальше было удобно с ними работать.

    $category       = strip_tags($_REQUEST['category']);
    $cycle          = strip_tags($_REQUEST['cycle']);
    $pastor         = strip_tags($_REQUEST['pastor']);
    $actuality      = strip_tags($_REQUEST['actuality']);

    // Обратите внимание: передача параметров сюда идет методом POST!

    // Далее выводим для себя отладочную информацию, чтобы удостовериться, что
    // технология работает (в продакшене, разумеется, этот надо будет убрать):

    echo "<h6>Параметры запроса для тестирования (эти данные поступают из php-файла):</h6>";
    echo "<p><strong>Категория:</strong>" . $category . "; ";
    echo "<strong>Цикл:</strong>" . $cycle . "; ";
    echo "<strong>Пастор:</strong>" . $pastor . "; ";
    echo "<strong>Актуальность:</strong>" . $actuality . "</p>";

    // Далее в зависимости от входных параметров делаем запрос к БД,
    // получаем данные и формируем список блоков "media" (медиа-карточки)

    // Для ограничения отображения слишком длинного списка медиа-карточек можно к классу "media"
    // добавлять классы "hide-desktop" и "hide-mobile", которые будут предварительно
    // скрывать медиа-карточки, у которых эти классы указаны, соответсвенно - на десктопном
    // (hide-desktop) и на мобильном (hide-mobile) разрешениях.
    // Пример применения этих классов смотрите ниже.

    // К примеру, нужно сделать так, чтобы на десктопах сразу отображалось только 10 карточек,
    // а на мобильниках - не более 5 карточек.
    // Тогда, начиная с 11 карточки добавляем к классу media еще и класс hide-desktop,
    // а с 6-й карточки - класс hide-mobile

    // В этом случае внизу будет автоматически добавляться кнопка "БОЛЬШЕ МАТЕРИАЛОВ",
    // при клике на которую пользователь откроет весь список медиа-карточек.

    // Ниже здесь просто вывожу карточки в "сыром" виде. В реальном коде, разумеется, их нужно
    // будет формировать из базы данных и выводить строки функцией echo.
?>
    <div class="media">
        <div class="media__video">
            <div class="video video--cover">
                <div style="background-image: url(assets/img/media/video-1.jpg);" class="video__poster"></div>
                <video preload="none" controls="controls" class="video__video">
                    <source src="http://www.mbv.spb.ru/download/video2/video/mbv/mbv20160710-n463.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
        <div class="media__headers">
            <h3 class="media__title">Как избежать многих страданий</h3>
            <time datetime="2016-05-15 17:00" class="media__time">15 мая, 17:00</time>
        </div>
        <div class="media__authors">
            <div class="media-author">
                <img src="assets/img/pastor-1.jpg" alt="" class="media-author__photo" />
                <h4 class="media-author__name">Дмитрий Шатров</h4>
                <p class="media-author__position">Старший пастор церкви</p>
            </div>
        </div>
        <ul class="media-links media__links">
            <li class="media-links__item"><a href="#" target="_blank" class="media-links__link"></a></li>
            <li class="media-links__item"><a href="#" target="_blank" class="media-links__link">mp3</a></li>
            <li class="media-links__item"><a href="#" target="_blank" class="media-links__link">avi</a></li>
            <li class="media-links__item"><a href="#" target="_blank" class="media-links__link">txt</a></li>
        </ul>
    </div>


    <div class="media">
        <div class="media__video">
            <div class="video video--cover">
                <div style="background-image: url(assets/img/media/video-2.jpg);" class="video__poster"></div>
                <video preload="none" controls="controls" class="video__video">
                    <source src="http://www.mbv.spb.ru/download/video2/video/mbv/mbv20160710-n463.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
        <div class="media__headers">
            <h3 class="media__title">Сила женщины – красота её, которая внутри!</h3>
            <time datetime="2016-05-15 17:00" class="media__time">15 мая, 17:00</time>
        </div>
        <div class="media__authors">
            <div class="media-author">
                <img src="assets/img/pastor-3.jpg" alt="" class="media-author__photo" />
                <h4 class="media-author__name">Александр Холеменко</h4>
                <p class="media-author__position">Пастор филиала "Вефиль"</p>
            </div>
        </div>
        <ul class="media-links media__links">
            <li class="media-links__item">
                <a href="#" target="_blank" class="media-links__link"></a>
            </li>
            <li class="media-links__item"><a href="#" target="_blank" class="media-links__link">mp3</a>
            </li>
            <li class="media-links__item"><a href="#" target="_blank" class="media-links__link">avi</a>
            </li>
            <li class="media-links__item"><a href="#" target="_blank" class="media-links__link">txt</a>
            </li>
        </ul>
    </div>


    <div class="media">
        <div class="media__video">
            <div class="video video--cover">
                <div style="background-image: url(assets/img/media/video-3.jpg);" class="video__poster"></div>
                <video preload="none" controls="controls" class="video__video">
                    <source src="http://www.mbv.spb.ru/download/video2/video/mbv/mbv20160710-n463.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
        <div class="media__headers">
            <h3 class="media__title">Благодать в повседневной жизни</h3>
            <time datetime="2016-05-15 17:00" class="media__time">15 мая, 17:00</time>
        </div>
        <div class="media__authors">
            <div class="media-author">
                <img src="assets/img/pastor-2.jpg" alt="" class="media-author__photo" />
                <h4 class="media-author__name">Евгений Пастушевский</h4>
                <p class="media-author__position">Пастор церкви</p>
            </div>
            <div class="media-author">
                <img src="assets/img/pastor-1.jpg" alt="" class="media-author__photo" />
                <h4 class="media-author__name">Дмитрий Шатров</h4>
                <p class="media-author__position">Старший пастор церкви</p>
            </div>
        </div>
        <ul class="media-links media__links">
            <li class="media-links__item">
                <a href="#" target="_blank" class="media-links__link"></a>
            </li>
            <li class="media-links__item"><a href="#" target="_blank" class="media-links__link">mp3</a>
            </li>
            <li class="media-links__item"><a href="#" target="_blank" class="media-links__link">avi</a>
            </li>
            <li class="media-links__item">txt</li>
        </ul>
    </div>


    <div class="media">
        <div class="media__video">
            <div class="video video--cover">
                <div style="background-image: url(assets/img/media/video-4.jpg);" class="video__poster"></div>
                <video preload="none" controls="controls" class="video__video">
                    <source src="http://www.mbv.spb.ru/download/video2/video/mbv/mbv20160710-n463.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
        <div class="media__headers">
            <h3 class="media__title">Иллюзорная реальность или реализованная мечта</h3>
            <time datetime="2016-05-15 17:00" class="media__time">15 мая, 17:00</time>
        </div>
        <div class="media__authors">
            <div class="media-author">
                <img src="assets/img/pastor-4.jpg" alt="" class="media-author__photo" />
                <h4 class="media-author__name">Виктор Хохленков</h4>
                <p class="media-author__position">Пастор церкви</p>
            </div>
        </div>
        <ul class="media-links media__links">
            <li class="media-links__item">
                <a href="#" target="_blank" class="media-links__link"></a>
            </li>
            <li class="media-links__item">mp3</li>
            <li class="media-links__item">avi</li>
            <li class="media-links__item"><a href="#" target="_blank" class="media-links__link">txt</a>
            </li>
        </ul>
    </div>


    <div class="media hide-mobile hide-desktop">
        <div class="media__video">
            <div class="video video--cover">
                <div style="background-image: url(assets/img/media/video-1.jpg);" class="video__poster"></div>
                <video preload="none" controls="controls" class="video__video">
                    <source src="http://www.mbv.spb.ru/download/video2/video/mbv/mbv20160710-n463.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
        <div class="media__headers">
            <h3 class="media__title">Как избежать многих страданий</h3>
            <time datetime="2016-05-15 17:00" class="media__time">15 мая, 17:00</time>
        </div>
        <div class="media__authors">
            <div class="media-author">
                <img src="assets/img/pastor-1.jpg" alt="" class="media-author__photo" />
                <h4 class="media-author__name">Дмитрий Шатров</h4>
                <p class="media-author__position">Старший пастор церкви</p>
            </div>
        </div>
        <ul class="media-links media__links">
            <li class="media-links__item">
                <a href="#" target="_blank" class="media-links__link"></a>
            </li>
            <li class="media-links__item"><a href="#" target="_blank" class="media-links__link">mp3</a>
            </li>
            <li class="media-links__item"><a href="#" target="_blank" class="media-links__link">avi</a>
            </li>
            <li class="media-links__item"><a href="#" target="_blank" class="media-links__link">txt</a>
            </li>
        </ul>
    </div>


    <div class="media hide-mobile hide-desktop">
        <div class="media__video">
            <div class="video video--cover">
                <div style="background-image: url(assets/img/media/video-2.jpg);" class="video__poster"></div>
                <video preload="none" controls="controls" class="video__video">
                    <source src="http://www.mbv.spb.ru/download/video2/video/mbv/mbv20160710-n463.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
        <div class="media__headers">
            <h3 class="media__title">Сила женщины – красота её, которая внутри!</h3>
            <time datetime="2016-05-15 17:00" class="media__time">15 мая, 17:00</time>
        </div>
        <div class="media__authors">
            <div class="media-author">
                <img src="assets/img/pastor-3.jpg" alt="" class="media-author__photo" />
                <h4 class="media-author__name">Александр Холеменко</h4>
                <p class="media-author__position">Пастор филиала "Вефиль"</p>
            </div>
        </div>
        <ul class="media-links media__links">
            <li class="media-links__item"></li>
            <li class="media-links__item"><a href="#" target="_blank" class="media-links__link">mp3</a>
            </li>
            <li class="media-links__item"><a href="#" target="_blank" class="media-links__link">avi</a>
            </li>
            <li class="media-links__item"><a href="#" target="_blank" class="media-links__link">txt</a>
            </li>
        </ul>
    </div>



