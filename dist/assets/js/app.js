/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/script.js":
/*!*********************************!*\
  !*** ./src/assets/js/script.js ***!
  \*********************************/
/***/ (function() {

eval("\r\n\r\n// ===============swipers=====================\r\nconst swiper = new Swiper('.swiper', {\r\n    direction: 'vertical',\r\n    centeredSlides: true,\r\n    slidesPerView: 'auto',\r\n    slideToClickedSlide: true,\r\n    scrollbar: {\r\n        el: '.swiper-scrollbar',\r\n        draggable: true,\r\n      },\r\n      mousewheel: true,\r\n});\r\n\r\nlet framesSLider = new Swiper('.frames-wrapper', {\r\n\r\n    slidesPerView: 'auto',\r\n    freeMode: true,\r\n    spaceBetween: 30,\r\n    scrollbar: {\r\n        el: '.swiper-scrollbar',\r\n        draggable: true,\r\n      },\r\n    \r\n})\r\n\r\n// ====================films data==================]\r\nlet filmsData = [\r\n    {\r\n        alt: 'green_book',\r\n        image: 'assets/images/greenbook_m.jpg',\r\n        name: 'Зеленая книга',\r\n        parental: '16+',\r\n        description: 'комедия &#8226; драма &#8226; биография',\r\n        imageUrl: 'assets/images/greenbook_m.jpg',\r\n        ticketsHref: '/green-book-tickets.html',\r\n        schedule: ['10:15', '10:55', '12:05', '13:15', '13:55', '14:45', '16:15', '17:00', '18:05', '18:55', '19:30', '20:05'],\r\n        genres: [' Комедия ', ' Драма ', ' Биография '],\r\n        year: '2019',\r\n        country: 'США',\r\n        director: 'Питер Фарелли',\r\n        time: '02:10',\r\n        trailerURL: '',\r\n    },\r\n    \r\n    \r\n    \r\n    {\r\n        name:'Капитан Марвел',\r\n        alt: 'captain_marvel',\r\n        image:'assets/images/captain_marvel_m.jpg',\r\n        parental: '16+',\r\n        description: 'фантастика &#8226; боевик &#8226; приключения',\r\n        name: 'Капитан Марвел',\r\n        ticketsHref: '/captain_marvel_tickets.html',\r\n        imageUrl: 'assets/images/captain_marvel_m.jpg',\r\n        schedule: ['10:15','10:55','12:05','13:15','13:55','14:45','16:15','17:00','18:05','18:55','19:30','20:05','20:55','21:25','22:05','23:15','00:35',],\r\n        genres: [' Фантастика',' Боевик',' Приключения',],\r\n        year: '2019',\r\n        country: 'США',\r\n        director: 'Анна Боден, Райан Флек',\r\n        time: '02:03',\r\n        trailerURL: '',\r\n    },\r\n\r\n    {\r\n        name: 'Как приручить дракона',\r\n        alt: 'pet_dragon',\r\n        image: 'assets/images/pet_dragons_m.jpg',\r\n        parental: '6+',\r\n        description: 'мультфильм &#8226; фентези &#8226; боевик',\r\n        ticketsHref: '/pet_dragons_tickets.html',\r\n        imageUrl: 'assets/images/pet_dragons_m.jpg',\r\n        schedule: ['10:15','10:55','12:05','13:15','13:55','14:45','16:15','17:00','18:05','18:55','19:30',],\r\n        genres: [' Мультфильм',' Фентези', ' Боевик',],\r\n        year: '2019',\r\n        country: 'США',\r\n        director: 'Дин ДеБлуа',\r\n        time: '01:44',\r\n        trailerURL: '',\r\n    },\r\n\r\n    {\r\n        name: 'Алита: Боевой Ангел',\r\n        alt: 'alita',\r\n        image: 'assets/images/alita_m.jpg',\r\n        parental: '6+',\r\n        description: 'фантастика &#8226; боевик &#8226; триллер',\r\n        ticketsHref: '/alita_tickets.html',\r\n        imageUrl: 'assets/images/alita_m.jpg',\r\n        schedule: ['10:15', '10:55', '12:05', '13:15', '13:55', '14:45', '16:15', '17:00', '18:05', '18:55', '19:30', '21:00'],\r\n        genres: [' Фантастика ', ' боевик ', ' триллер ',],\r\n        year: '2019',\r\n        country: 'США',\r\n        director: 'Роберт Родригес',\r\n        time: '02:01',\r\n        trailerURL: '',\r\n    },\r\n\r\n\r\n\r\n    {\r\n        name: 'Родители легкого поведения',\r\n        alt: 'drunk_parents',\r\n        image: 'assets/images/drunk_parents_m.jpg',\r\n        parental: '16+',\r\n        description: 'комедия',\r\n        ticketsHref: '/drunk_parents_tickets.html',\r\n        schedule: ['13:55', '14:45', '16:15', '17:00', '18:05', '18:55', '19:30'],\r\n        genres: [' Комедия '],\r\n        year: '2019',\r\n        country:  'США',\r\n        director: 'Питер Фарелли',\r\n        time: '01:36',\r\n        trailerURL: '',\r\n    },\r\n\r\n    {\r\n       alt: 'van_goghs',\r\n       image: 'assets/images/van_goghs_m.jpg',\r\n       name: 'Ван Гоги',\r\n       parental: '16+',\r\n       description: 'драма'\r\n    },\r\n\r\n    {\r\n        alt: 'alien',\r\n        image: 'assets/images/alien_m.jpg',\r\n        name: 'Чужой',\r\n        parental: '16+',\r\n        description: 'ужасы &#8226; фантастика &#8226; триллер'\r\n    },\r\n\r\n    {\r\n        alt: 'guests',\r\n        image: 'assets/images/guests_m.jpg',\r\n        name: 'Гости',\r\n        parental: '16+',\r\n        description: 'триллер &#8226; ужасы &#8226; мелодрама'\r\n    },\r\n\r\n    {\r\n        alt: 'happy_death_day',\r\n        image: 'assets/images/happy_death_day_m.jpg',\r\n        name: 'Счастливого дня смерти',\r\n        parental: '16+',\r\n        description: 'ужасы &#8226; фантастика &#8226; детектив'\r\n    },\r\n\r\n]\r\n\r\n\r\nlet greenBookData = {\r\n    localName: '_green_book',\r\n    name: 'Зеленая Книга',\r\n    imageUrl: 'assets/images/greenbook_m.jpg',\r\n    ticketsHref: '/green-book-tickets.html',\r\n    schedule: ['10:15', '10:55', '12:05', '13:15', '13:55', '14:45', '16:15', '17:00', '18:05', '18:55', '19:30', '20:05'],\r\n    genres: [' Комедия ', ' Драма ', ' Биография '],\r\n    year: '2019',\r\n    country: 'США',\r\n    director: 'Питер Фарелли',\r\n    ageLimit: '16+',\r\n    time: '02:10',\r\n    trailerURL: '',\r\n}\r\n\r\n// let parentsData = {\r\n//     localName: '_drunk_parents',\r\n//     name: 'Родители легкого поведения',\r\n//     ticketsHref: '/drunk_parents_tickets.html',\r\n//     imageUrl: 'assets/images/drunk_parents_m.jpg',\r\n//     schedule: ['13:55', '14:45', '16:15', '17:00', '18:05', '18:55', '19:30'],\r\n//     genres: [' Комедия '],\r\n//     year: '2019',\r\n//     country:  'США',\r\n//     director: 'Питер Фарелли',\r\n//     ageLimit: '16+',\r\n//     time: '01:36',\r\n//     trailerURL: '',\r\n// }\r\n\r\n// let alitaData = {\r\n//     localName: '_alita',\r\n//     name: 'Алита: Боевой Ангел',\r\n//     ticketsHref: '/alita_tickets.html',\r\n//     imageUrl: 'assets/images/alita_m.jpg',\r\n//     schedule: ['10:15', '10:55', '12:05', '13:15', '13:55', '14:45', '16:15', '17:00', '18:05', '18:55', '19:30', '21:00'],\r\n//     genres: [' Фантастика ', ' боевик ', ' триллер ',],\r\n//     year: '2019',\r\n//     country: 'США',\r\n//     director: 'Роберт Родригес',\r\n//     ageLimit: '16+',\r\n//     time: '02:01',\r\n//     trailerURL: '',\r\n// }\r\n\r\n// let petDragonsData = {\r\n//     localName: '_pet_dragon',\r\n//     name: 'Как приручить дракона',\r\n//     ticketsHref: '/pet_dragons_tickets.html',\r\n//     imageUrl: 'assets/images/pet_dragons_m.jpg',\r\n//     schedule: ['10:15','10:55','12:05','13:15','13:55','14:45','16:15','17:00','18:05','18:55','19:30',],\r\n//     genres: [' Мультфильм',' Фентези', ' Боевик',],\r\n//     year: '2019',\r\n//     country: 'США',\r\n//     director: 'Дин ДеБлуа',\r\n//     ageLimit: '6+',\r\n//     time: '01:44',\r\n//     trailerURL: '',\r\n// }\r\n\r\n// let captainMarvelData = {\r\n//     localName: '_captain_marvel',\r\n//     name: 'Капитан Марвел',\r\n//     ticketsHref: '/captain_marvel_tickets.html',\r\n//     imageUrl: 'assets/images/captain_marvel_m.jpg',\r\n//     schedule: ['10:15','10:55','12:05','13:15','13:55','14:45','16:15','17:00','18:05','18:55','19:30','20:05','20:55','21:25','22:05','23:15','00:35',],\r\n//     genres: [' Фантастика',' Боевик',' Приключения',],\r\n//     year: '2019',\r\n//     country: 'США',\r\n//     director: 'Анна Боден, Райан Флек',\r\n//     ageLimit: '16+',\r\n//     time: '02:03',\r\n//     trailerURL: '',\r\n// }\r\n\r\n\r\n// ============добавляем варианты времени для выбора сеанса фильма============ъ\r\n\r\n\r\nlet seanses = document.querySelector('.seanses');\r\n\r\nlet storageFilmName = sessionStorage.getItem('filmName')\r\n\r\nlet targetSeanses = document.querySelector(`.${storageFilmName}`)\r\n\r\n\r\n\r\nfunction createDates(filmObj, divTarget) {\r\n  \r\n        for(let i = 0; i < filmObj.schedule.length; i++) {\r\n            let div = document.createElement('div');\r\n                div.className = 'time__block';\r\n                // div.href = filmObj.ticketsHref;\r\n                div.innerHTML = ((filmObj.schedule[i]) + '<span class =\"mode__2d3d\"> 2D </span>' );\r\n                divTarget.append(div);\r\n        }\r\n    }\r\n\r\n\r\nif (seanses) {createDates(greenBookData, seanses)}\r\n\r\n// ======при нажатии на элемент, получаем его индекс, чтобы после перехода \r\n// на страницу с покупкой билетов, этот же элемент подсвечивался \r\n// как выбранный ( не работает в мобильной версии и в блоке \"расписание\"))=============\r\n\r\n\r\n\r\n\r\nfunction getTimeBlockActiveIndex(filmName) {\r\n    let film = document.querySelector(`.${filmName}`)\r\n    let timeBlock = film.querySelectorAll('.time__block')\r\n    timeBlock.forEach(el=>el.addEventListener('click', (event)=> {\r\n        let activeIndex = Array.from(timeBlock).indexOf(event.target)\r\n        if (!timeBlock[activeIndex].classList.contains('time__block_active')) {\r\n            timeBlock.forEach(el => {el.classList.remove('time__block_active')})\r\n            sessionStorage.setItem(`index`, activeIndex)\r\n            sessionStorage.setItem(`filmName`, filmName)\r\n            console.log(sessionStorage.getItem('index'))\r\n            timeBlock[activeIndex].classList.add('time__block_active')\r\n        }\r\n        else {\r\n            timeBlock[activeIndex].classList.remove('time__block_active')\r\n            sessionStorage.removeItem('index')\r\n            sessionStorage.removeItem('filmName')\r\n        }\r\n    }))\r\n    if (sessionStorage.length > 0) {\r\n        let item = sessionStorage.getItem('index')\r\n        console.log(+item)\r\n        timeBlock[+item].classList.add('time__block_active')\r\n    }\r\n\r\n}\r\nfunction storageFilmCheck() {\r\n        if (seanses) {\r\n            seanses.classList.add(`${storageFilmName}`)\r\n            getTimeBlockActiveIndex(storageFilmName)\r\n        }\r\n}\r\nstorageFilmCheck()\r\n\r\n\r\n\r\n\r\n\r\n\r\n// =======расписание на главной странице=================\r\nlet schedule = document.querySelector('.schedule')\r\n\r\nfunction scheduleMainFunction(film) {\r\n    schedule.insertAdjacentHTML('beforeend', \r\n        `<div class=\"schedule-item ${film.alt}\">\r\n            <img src=\"${film.image}\" alt=\"${film.name}\">\r\n            <div class=\"schedule-desc\">\r\n                <h3>${film.name}</h3>\r\n                <div class=\"desc-main\">\r\n                    <p>${film.year}</p>\r\n                    <p>${film.country}</p>\r\n                    <p>${film.director}</p>\r\n                    <p>${film.genres}</p>\r\n                    <p>${film.time}</p>\r\n                    <p>${film.parental}</p>\r\n                </div>\r\n            </div>   \r\n\r\n            <div class=\"schedule-seanses-body\">\r\n                <div class=\"schedule-seanses\"></div>\r\n                <div class=\"desc-details-trailer\">\r\n                    <div class=\"__detail\">\r\n                        <a href=\"${film.ticketsHref}\"></a>\r\n                        <p>Подробнее</p>\r\n                    </div>\r\n                    <div class=\"__trailer\">\r\n                        <a href=\"${film.trailerURL}\"></a>\r\n                        <p>Смотреть трейлер</p>\r\n                    </div>\r\n                </div>\r\n            </div>    \r\n        </div>`\r\n    )\r\n    let filmDiv = document.querySelector(`.${film.alt}`)\r\n    let thisFilm = filmDiv.querySelector('.schedule-seanses')\r\n    createDates(film, thisFilm);\r\n}\r\n\r\n\r\n\r\nfunction createScheduleCheck() {\r\n    if (schedule) {\r\n        filmsData.forEach(el=> {\r\n           \r\n            // проверяем что у объекта фильма есть полные данные для отрисовки, их должно быть больше 10\r\n            if (Object.keys(el).length > 10) {\r\n                scheduleMainFunction(el)\r\n                getTimeBlockActiveIndex(el.alt)\r\n            }\r\n            \r\n            console.log(el.alt)\r\n        })\r\n        // scheduleMainFunction(greenBookData)\r\n        // scheduleMainFunction(captainMarvelData)\r\n        // scheduleMainFunction(petDragonsData)\r\n        // scheduleMainFunction(alitaData)\r\n        // scheduleMainFunction(parentsData)\r\n    }\r\n}\r\ncreateScheduleCheck()\r\n\r\n\r\nlet dates = document.querySelectorAll('.date-body')\r\n\r\nfunction dateActive() {\r\n\r\n    function datesToggle() {\r\n        dates.forEach(el=> {\r\n            el.classList.remove('date-body-active')\r\n        })\r\n    }\r\n    dates.forEach(el=>el.addEventListener('click', ()=> {\r\n        let rect = el.getBoundingClientRect()\r\n        let datesBullet = document.querySelector('.dates-pagination__bullet')\r\n        datesBullet.style.left = (rect.left)  + 'px'\r\n        datesBullet.style.width = rect.width + 'px'\r\n        datesToggle()\r\n        el.classList.add('date-body-active')\r\n    }))\r\n}\r\n    if (dates) {\r\n        dateActive()\r\n    }\r\n        \r\n\r\n\r\n\r\n\r\n// ============выбор фильма по нажатию на изображение в боковом слайдере на главной странице==========\r\nfunction sliderSelect() {\r\n    let rightAsideSlider = document.querySelector('.right-cinema-slider')\r\n    if (rightAsideSlider) {\r\n        rightAsideSlider.querySelectorAll('.swiper-slide').forEach(function(el){\r\n            el.addEventListener('click', function() {\r\n                let dataName = el.getAttribute('data-name')\r\n                let backGround = document.querySelectorAll('.background__image')\r\n                let backGroundData = () => backGround.forEach(function(el) {\r\n                    if (dataName == el.getAttribute('data-name')) {\r\n                        el.style.display = 'block';\r\n                    } \r\n                    else if (el.getAttribute('data-name') == null) {\r\n                        el.style.display = '';\r\n                    }\r\n                    else {\r\n                        el.style.display = 'none';\r\n                    }\r\n                })\r\n                backGroundData()\r\n            })\r\n        })\r\n    }\r\n}\r\nsliderSelect();\r\n\r\n\r\n\r\n// ===========буллет под выбором сегодня и скоро на главной странице=========\r\nfunction todayFilm() {\r\n    let tf = document.querySelectorAll('.today__film')\r\n    if (tf) {\r\n        tf.forEach(function (el) {\r\n            el.addEventListener('click', () => {\r\n                let parentPosition = document.querySelector('.tomorrow-soon').getBoundingClientRect()\r\n                let rect = el.getBoundingClientRect()\r\n                let splitterMove = document.querySelector('.splitter__cell')\r\n                splitterMove.style.left = (rect.left - parentPosition.left)  + 'px'\r\n                splitterMove.style.width = rect.width + 'px'\r\n        \r\n            })\r\n        })\r\n    }\r\n}\r\ntodayFilm();\r\n\r\n\r\nfunction insertFilm(el) {\r\n    let afisha = document.querySelector('.afisha')\r\n    let div = document.createElement('div')\r\n\r\n    div.setAttribute('class', 'film-presentation')\r\n    div.setAttribute('data-name', `${el.alt}`)\r\n    div.innerHTML = `<img src= \"${el.image}\" alt=\"${el.alt}\">` \r\n        + `<div class=\"film-name\">`\r\n        + ` <h5>${el.name}</h5>`\r\n        + ` <p class=\"film-description\">${el.description}</p>`\r\n        + `<div class=\"parental-control\">${el.parental}</div>`\r\n        + `</div>`\r\n    if (afisha) {\r\n        afisha.append(div)\r\n    } \r\n} \r\n\r\n\r\n\r\n\r\n// =====это костыль чтобы при нажатии в мобильной версии на фильм переходило к покупке билетов и описанию========\r\n\r\nfilmsData.forEach(insertFilm)\r\n\r\nfunction filmsDataHref() {\r\n    let greenBookBlock = document.querySelector('[data-name = \"green_book\"]')\r\n    if (greenBookBlock) {\r\n        greenBookBlock.addEventListener('click', function() {\r\n            location.href = 'green-book-tickets.html'\r\n        })\r\n    }\r\n}\r\nfilmsDataHref()\r\n\r\n\r\n\r\n\r\n// =================рисуем стульчики=============================\r\n\r\n\r\nlet seatsPatternDiv = document.querySelector('.seats-pattern');\r\n\r\nfunction makeSeats(el) {\r\n    let div = document.createElement('div');\r\n    if (\r\n        el.occupied == true) {\r\n        div.className = 'seat _occupied'\r\n    }\r\n    else if (\r\n        el.occupied == false) {\r\n        div.className = 'seat _free'\r\n\r\n    }\r\n    else {\r\n        div.className = 'seat'\r\n    }\r\n    seatsPatternDiv.append(div)\r\n}\r\n\r\n\r\nlet row1 = [\r\n    {},{}, \r\n    {occupied: false, costs: 300, row: 1, seat: 1}, \r\n    {occupied: false, costs: 300, row: 1, seat: 2}, \r\n    {occupied: false, costs: 300, row: 1, seat: 3}, \r\n    {occupied: false, costs: 400, row: 1, seat: 4},\r\n    {occupied: false, costs: 400, row: 1, seat: 5}, \r\n    {occupied: false, costs: 400, row: 1, seat: 6},  \r\n    {},{},{},{},{},{}, \r\n    {occupied: false, costs: 400, row: 1, seat: 7}, \r\n    {occupied: false, costs: 400, row: 1, seat: 8}, \r\n    {occupied: false, costs: 400, row: 1, seat: 9}, \r\n    {occupied: false, costs: 400, row: 1, seat: 10},\r\n    {occupied: false, costs: 300, row: 1, seat: 11}, \r\n    {occupied: false, costs: 300, row: 1, seat: 12}, \r\n    {},{},\r\n\r\n\r\n    {},{}, \r\n    {occupied: false, costs: 300, row: 2, seat: 1}, \r\n    {occupied: false, costs: 300, row: 2, seat: 2}, \r\n    {occupied: false, costs: 300, row: 2, seat: 3}, \r\n    {occupied: false, costs: 300, row: 2, seat: 4}, \r\n    {occupied: true},\r\n    {occupied: false, costs: 300, row: 2, seat: 6}, \r\n    {occupied: false, costs: 300, row: 2, seat: 7}, \r\n    {occupied: false, costs: 400, row: 2, seat: 8}, \r\n    {occupied: false, costs: 400, row: 2, seat: 9}, \r\n    {occupied: false, costs: 400, row: 2, seat: 10}, \r\n    {occupied: false, costs: 400, row: 2, seat: 11}, \r\n    {occupied: false, costs: 400, row: 2, seat: 12}, \r\n    {occupied: false, costs: 400, row: 2, seat: 13}, \r\n    {occupied: false, costs: 400, row: 2, seat: 14}, \r\n    {occupied: false, costs: 400, row: 2, seat: 15}, \r\n    {occupied: false, costs: 300, row: 2, seat: 16},\r\n    {occupied: false, costs: 300, row: 2, seat: 17}, \r\n    {occupied: false, costs: 300, row: 2, seat: 18},  \r\n    {}, {},    \r\n\r\n\r\n    {}, {},\r\n    {occupied: false, costs: 300, row: 3, seat: 1},\r\n    {occupied: false, costs: 300, row: 3, seat: 2},\r\n    {occupied: false, costs: 300, row: 3, seat: 3},\r\n    {occupied: false, costs: 300, row: 3, seat: 4},\r\n    {occupied: false, costs: 300, row: 3, seat: 5},\r\n    {occupied: false, costs: 300, row: 3, seat: 6},\r\n    {occupied: false, costs: 300, row: 3, seat: 7},\r\n    {occupied: false, costs: 300, row: 3, seat: 8},\r\n    {occupied: true}, \r\n    {occupied: true}, \r\n    {occupied: false, costs: 400, row: 3, seat: 11},\r\n    {occupied: false, costs: 400, row: 3, seat: 12},\r\n    {occupied: false, costs: 400, row: 3, seat: 13},\r\n    {occupied: false, costs: 400, row: 3, seat: 14},\r\n    {occupied: false, costs: 400, row: 3, seat: 15},\r\n    {occupied: false, costs: 400, row: 3, seat: 16},\r\n    {occupied: false, costs: 300, row: 3, seat: 17},\r\n    {occupied: false, costs: 300, row: 3, seat: 18},\r\n    {}, {},\r\n\r\n\r\n    {}, {},\r\n    {occupied: false, costs: 300, row: 4, seat: 1},\r\n    {occupied: false, costs: 300, row: 4, seat: 2},\r\n    {occupied: false, costs: 300, row: 4, seat: 3},\r\n    {occupied: true},\r\n    {occupied: false, costs: 400, row: 4, seat: 5},\r\n    {occupied: false, costs: 400, row: 4, seat: 6},\r\n    {occupied: false, costs: 400, row: 4, seat: 7},\r\n    {occupied: true},\r\n    {occupied: true},\r\n    {occupied: false, costs: 300, row: 4, seat: 10},\r\n    {occupied: false, costs: 300, row: 4, seat: 11},\r\n    {occupied: false, costs: 300, row: 4, seat: 12},\r\n    {occupied: false, costs: 300, row: 4, seat: 13},\r\n    {occupied: false, costs: 300, row: 4, seat: 14},\r\n    {occupied: false, costs: 300, row: 4, seat: 15},\r\n    {occupied: false, costs: 300, row: 4, seat: 16},\r\n    {occupied: false, costs: 300, row: 4, seat: 17},\r\n    {occupied: false, costs: 300, row: 4, seat: 18},\r\n    {}, {},\r\n\r\n\r\n    {}, {},\r\n    {occupied: false, costs: 300, row: 5, seat: 1},\r\n    {occupied: false, costs: 300, row: 5, seat: 2},\r\n    {occupied: false, costs: 300, row: 5, seat: 3},\r\n    {occupied: false, costs: 300, row: 5, seat: 4},\r\n    {occupied: true},\r\n    {occupied: true},\r\n    {occupied: false, costs: 300, row: 5, seat: 7},\r\n    {occupied: true},\r\n    {occupied: true},\r\n    {occupied: true},\r\n    {occupied: true},\r\n    {occupied: false, costs: 300, row: 5, seat: 12},\r\n    {occupied: true},\r\n    {occupied: false, costs: 400, row: 5, seat: 14},\r\n    {occupied: false, costs: 400, row: 5, seat: 15},\r\n    {occupied: false, costs: 400, row: 5, seat: 16},\r\n    {occupied: false, costs: 400, row: 5, seat: 17},\r\n    {occupied: false, costs: 300, row: 5, seat: 18},\r\n    {}, {},\r\n\r\n\r\n    {}, {},\r\n    {occupied: false, costs: 300, row: 6, seat: 1},\r\n    {occupied: false, costs: 300, row: 6, seat: 2},\r\n    {occupied: false, costs: 300, row: 6, seat: 3},\r\n    {occupied: false, costs: 300, row: 6, seat: 4},\r\n    {occupied: false, costs: 400, row: 6, seat: 5},\r\n    {occupied: false, costs: 400, row: 6, seat: 6},\r\n    {occupied: false, costs: 400, row: 6, seat: 7},\r\n    {occupied: false, costs: 400, row: 6, seat: 8},\r\n    {occupied: true},\r\n    {occupied: false, costs: 300, row: 6, seat: 10},\r\n    {occupied: true},\r\n    {occupied: false, costs: 300, row: 6, seat: 12},\r\n    {occupied: true},\r\n    {occupied: false, costs: 300, row: 6, seat: 14},\r\n    {occupied: false, costs: 300, row: 6, seat: 15},\r\n    {occupied: false, costs: 300, row: 6, seat: 16},\r\n    {occupied: false, costs: 300, row: 6, seat: 17},\r\n    {occupied: false, costs: 300, row: 6, seat: 18},\r\n    {}, {},\r\n\r\n\r\n    {occupied: false, costs: 300, row: 7, seat: 1},\r\n    {occupied: false, costs: 300, row: 7, seat: 2},\r\n    {occupied: false, costs: 300, row: 7, seat: 3},\r\n    {occupied: false, costs: 300, row: 7, seat: 4},\r\n    {occupied: true},\r\n    {occupied: false, costs: 300, row: 7, seat: 6},\r\n    {occupied: false, costs: 300, row: 7, seat: 7},\r\n    {occupied: false, costs: 300, row: 7, seat: 8},\r\n    {occupied: true},\r\n    {occupied: false, costs: 300, row: 7, seat: 10},\r\n    {occupied: true},\r\n    {occupied: false, costs: 300, row: 7, seat: 12},\r\n    {occupied: true},\r\n    {occupied: false, costs: 400, row: 7, seat: 14},\r\n    {occupied: false, costs: 400, row: 7, seat: 15},\r\n    {occupied: false, costs: 400, row: 7, seat: 16},\r\n    {occupied: false, costs: 400, row: 7, seat: 17},\r\n    {occupied: true},\r\n    {occupied: false, costs: 300, row: 7, seat: 19},\r\n    {occupied: false, costs: 300, row: 7, seat: 20},\r\n    {occupied: false, costs: 300, row: 7, seat: 21},\r\n    {occupied: false, costs: 300, row: 7, seat: 22},\r\n\r\n\r\n    {occupied: false, costs: 300, row: 8, seat: 1},\r\n    {occupied: false, costs: 300, row: 8, seat: 2},\r\n    {occupied: false, costs: 300, row: 8, seat: 3},\r\n    {occupied: false, costs: 300, row: 8, seat: 4},\r\n    {occupied: true},\r\n    {occupied: false, costs: 300, row: 8, seat: 6},\r\n    {occupied: false, costs: 300, row: 8, seat: 7},\r\n    {occupied: false, costs: 300, row: 8, seat: 8},\r\n    {occupied: false, costs: 300, row: 8, seat: 9},\r\n    {occupied: true},\r\n    {occupied: false, costs: 400, row: 8, seat: 11},\r\n    {occupied: true},\r\n    {occupied: false, costs: 400, row: 8, seat: 13},\r\n    {occupied: false, costs: 400, row: 8, seat: 14},\r\n    {occupied: true},\r\n    {occupied: false, costs: 400, row: 8, seat: 16},\r\n    {occupied: false, costs: 400, row: 8, seat: 17},\r\n    {occupied: false, costs: 400, row: 8, seat: 18},\r\n    {occupied: false, costs: 400, row: 8, seat: 19},\r\n    {occupied: true},\r\n    {occupied: false, costs: 300, row: 8, seat: 21},\r\n    {occupied: false, costs: 300, row: 8, seat: 22},\r\n\r\n\r\n    {occupied: false, costs: 300, row: 9, seat: 1},\r\n    {occupied: false, costs: 300, row: 9, seat: 2},\r\n    {occupied: false, costs: 300, row: 9, seat: 3},\r\n    {occupied: false, costs: 300, row: 9, seat: 4},\r\n    {occupied: false, costs: 300, row: 9, seat: 5},\r\n    {occupied: false, costs: 300, row: 9, seat: 6},\r\n    {occupied: true},\r\n    {occupied: false, costs: 300, row: 9, seat: 8},\r\n    {occupied: false, costs: 300, row: 9, seat: 9},\r\n    {occupied: false, costs: 300, row: 9, seat: 10},\r\n    {occupied: true},\r\n    {occupied: true},\r\n    {occupied: true},\r\n    {occupied: false, costs: 300, row: 9, seat: 14},\r\n    {occupied: false, costs: 300, row: 9, seat: 15},\r\n    {occupied: false, costs: 300, row: 9, seat: 16},\r\n    {occupied: false, costs: 300, row: 9, seat: 17},\r\n    {occupied: false, costs: 300, row: 9, seat: 18},\r\n    {occupied: true},\r\n    {occupied: false, costs: 300, row: 9, seat: 20},\r\n    {occupied: false, costs: 300, row: 9, seat: 21},\r\n    {occupied: false, costs: 300, row: 9, seat: 22},\r\n]\r\n\r\nfunction makinSeats() {\r\n    if (seatsPatternDiv) {\r\n        row1.forEach(function(el) {\r\n            makeSeats(el);\r\n        })\r\n    }\r\n  \r\n}\r\nmakinSeats()\r\n\r\n\r\n// =============калькулятор и выбор места=============\r\nconst prices = new Array();\r\n\r\nfunction addCostToArray(seats, activeIndex, arr, object) {\r\n    let ticket = document.querySelector('.choosen__ticket[data-index=\"' + activeIndex + '\"]')\r\n    if (seats[activeIndex].classList.contains('choosen')) {\r\n        arr.push((object[activeIndex].costs))\r\n        seats[activeIndex].setAttribute('data-index', `${activeIndex}`)\r\n        createTickets(object, activeIndex)\r\n    }\r\n    else {\r\n        let find = arr.findIndex(function(index) {\r\n            return index == object[activeIndex].costs\r\n        }\r\n        )\r\n        ticket.remove()\r\n        seats[activeIndex].removeAttribute('data-index')\r\n        arr.splice(find, 1)\r\n    }\r\n}\r\n\r\nfunction addIndexToArray(arr, activeIndex) {\r\n    if (arr.includes(activeIndex)) {\r\n    let find = arr.findIndex(function(index) {\r\n        return index == activeIndex\r\n    }\r\n    )\r\n    arr.splice(find, 1)\r\n}\r\nelse {\r\n    arr.push(activeIndex)\r\n}\r\n}\r\n\r\nfunction folding(arr) {\r\n    if (arr.length !== 0) {\r\n        return arr.reduce(function(sum, current) {\r\n           return sum + current\r\n        })\r\n    }\r\n    else {\r\n        return 0\r\n    }\r\n}\r\n\r\n\r\n\r\nlet choosenTickets = document.querySelector('.choosen-tickets')\r\n\r\nfunction createTickets(room, activeIndex) {\r\n    if (choosenTickets) {\r\n        choosenTickets.insertAdjacentHTML('beforeend', ` <div class=\"choosen__ticket\" data-index= ${activeIndex}>\r\n        <div class=\"picked-row-seat\">${room[activeIndex].row}ряд, ${room[activeIndex].seat} место</div>\r\n        <div class=\"picked-seat-cost\">\r\n           <p>${room[activeIndex].costs} P</p> \r\n           <button data-index = '${activeIndex}' class='x-button'></button>\r\n        </div>\r\n    </div>`)\r\n    }\r\n}\r\n\r\nfunction ticketsListener() {\r\n    if (choosenTickets) {\r\n        choosenTickets.addEventListener('click', (event)=> {\r\n            if(event.target.className === ('x-button')) {\r\n                let ticket = event.target.parentNode.parentNode\r\n                let dataIndex = ticket.getAttribute('data-index')\r\n                let seat = seats1[(+dataIndex)]\r\n                seat.classList.remove('choosen')\r\n                addIndexToArray(currentSeatIndex, (+dataIndex))\r\n                addCostToArray(seats1, (+dataIndex), prices, row1)\r\n                let summNode = document.querySelector('.summ');\r\n                summNode.innerText = folding(prices)\r\n            }\r\n            })\r\n    }\r\n} \r\nticketsListener()\r\n\r\n\r\n\r\n\r\n\r\nlet seats1 = document.querySelectorAll('.seat')\r\n\r\nconst currentSeatIndex = new Array()\r\n\r\n\r\nfunction seatsListener() {\r\n    if (seats1) {\r\n        seats1.forEach(function(x) {x.addEventListener('click', function(event){\r\n            event.preventDefault\r\n            let activeIndex = Array.from(seats1).indexOf(event.target)\r\n            seats1[activeIndex].classList.toggle('choosen')\r\n            addCostToArray(seats1, activeIndex, prices, row1)\r\n            addIndexToArray(currentSeatIndex, activeIndex)\r\n            let summNode = document.querySelector('.summ');\r\n            summNode.innerText = folding(prices)\r\n            })\r\n        })\r\n    }\r\n\r\n}\r\nseatsListener()\r\n\r\n\r\n\r\n// =======количество рядов и мест в зале в зависимости от зала===========\r\n\r\nlet roomDescription = {\r\n    number : 5,\r\n    resolution : '2D',\r\n    rows: 9,\r\n    columns: 22,\r\n    time: '19:30',\r\n\r\n}\r\n\r\n\r\n\r\n\r\nfunction fillRoomData() {\r\n    if (seatsPatternDiv) {\r\n        document.querySelector('.picked-cinema__room').innerText = `ЗАЛ ${roomDescription.number}`\r\n        document.querySelector('.picked-cinema__resolution').innerText = `${roomDescription.resolution}`\r\n        document.querySelector('.picked-cinema__time').innerText = `${roomDescription.time}`\r\n    }\r\n}\r\n\r\nfillRoomData()\r\n\r\n\r\n\r\n\r\nlet roomColumns = document.querySelector('.seats-columns');\r\nlet roomRows = document.querySelector('.seats-rows');\r\n\r\nfunction rowsColsShape() {\r\n    if (seatsPatternDiv) {\r\n        roomColumns.style.width = (seatsPatternDiv.offsetWidth) + 'px'\r\n        roomRows.style.height = (seatsPatternDiv.offsetHeight) + 'px'\r\n        // roomColumns.style.marginLeft = \r\n        roomColumns.style.marginLeft = (document.querySelector('.seats-wrapper').offsetWidth - seatsPatternDiv.offsetWidth) + 'px'\r\n    }\r\n}\r\nrowsColsShape()\r\n\r\n\r\n// ============модальное окно ввода данных для оплаты============\r\n\r\nlet modalWindow = document.querySelector('.modal-window')\r\n\r\nfunction modalToggle() {\r\n    let button = document.querySelector('.buy-tickets')\r\n    let closeButton = document.querySelector('.close')\r\n    let modalBackground = document.querySelector('.modal-background')\r\n    let modalWindowWrapper = document.querySelector('.modal-window-wrapper')\r\n    button.addEventListener('click', ()=> {\r\n        modalWindow.querySelector('.modal-pay').innerText = 'Оплатить ' + folding(prices) + 'P'\r\n        modalWindow.classList.add('modal-active')\r\n        modalBackground.style.display = 'block'\r\n        modalWindowWrapper.style.display = 'block'\r\n      \r\n    })\r\n    closeButton.addEventListener('click', ()=> {\r\n        modalWindow.classList.remove('modal-active')\r\n        modalBackground.style.display = ''\r\n        modalWindowWrapper.style.display = ''\r\n\r\n    })\r\n  \r\n\r\n}\r\nif (modalWindow) {\r\n    modalToggle()\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n// ===========create lis with numbers to columns and rows in thr room=============\r\nfunction iteratorItems(num, line) {\r\n    let li = document.createElement('li')\r\n    li.innerHTML = num\r\n    line.append(li)\r\n}\r\n\r\n// ======iterator for counting numbers================\r\nfunction createRowsCols(prop, el) {\r\n    for (let num = 1; num <=(prop); num++) {\r\n        iteratorItems(num, el)\r\n    }\r\n}\r\n\r\nif (seatsPatternDiv) {\r\n    createRowsCols((roomDescription.columns), roomColumns)\r\n    createRowsCols((roomDescription.rows), roomRows)\r\n}\r\n\r\nlet burgerMenu = document.querySelector('.burger-menu')\r\n\r\n// =========бургер-меню для адаптива=============\r\n\r\nfunction burger() {\r\n    if (burgerMenu) {\r\n        burgerMenu.addEventListener('click', function() {\r\n            let headerAsideBar = document.querySelector('.header-aside-bar')\r\n            headerAsideBar.classList.toggle('nav-active')\r\n            burgerMenu.classList.toggle('burger-cross')\r\n        })\r\n    }\r\n}\r\nburger()\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/script.js"]();
/******/ 	
/******/ })()
;