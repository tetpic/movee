"use strict"

// ===============swipers=====================
const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    centeredSlides: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      mousewheel: true,
});

let framesSLider = new Swiper('.frames-wrapper', {

    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 30,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    
})

// ====================films data==================]
let filmsData = [
    {
        alt: 'green_book',
        image: 'assets/images/greenbook_m.jpg',
        name: 'Зеленая книга',
        parental: '16+',
        description: 'комедия &#8226; драма &#8226; биография',
        imageUrl: 'assets/images/greenbook_m.jpg',
        ticketsHref: 'green-book-tickets.html',
        schedule: ['10:15', '10:55', '12:05', '13:15', '13:55', '14:45', '16:15', '17:00', '18:05', '18:55', '19:30', '20:05'],
        genres: [' Комедия ', ' Драма ', ' Биография '],
        year: '2019',
        country: 'США',
        director: 'Питер Фарелли',
        time: '02:10',
        trailerURL: '',
    },
    
    
    
    {
        name:'Капитан Марвел',
        alt: 'captain_marvel',
        image:'assets/images/captain_marvel_m.jpg',
        parental: '16+',
        description: 'фантастика &#8226; боевик &#8226; приключения',
        name: 'Капитан Марвел',
        ticketsHref: 'captain_marvel_tickets.html',
        imageUrl: 'assets/images/captain_marvel_m.jpg',
        schedule: ['10:15','10:55','12:05','13:15','13:55','14:45','16:15','17:00','18:05','18:55','19:30','20:05','20:55','21:25','22:05','23:15','00:35',],
        genres: [' Фантастика',' Боевик',' Приключения',],
        year: '2019',
        country: 'США',
        director: 'Анна Боден, Райан Флек',
        time: '02:03',
        trailerURL: '',
    },

    {
        name: 'Как приручить дракона',
        alt: 'pet_dragon',
        image: 'assets/images/pet_dragons_m.jpg',
        parental: '6+',
        description: 'мультфильм &#8226; фентези &#8226; боевик',
        ticketsHref: 'pet_dragons_tickets.html',
        imageUrl: 'assets/images/pet_dragons_m.jpg',
        schedule: ['10:15','10:55','12:05','13:15','13:55','14:45','16:15','17:00','18:05','18:55','19:30',],
        genres: [' Мультфильм',' Фентези', ' Боевик',],
        year: '2019',
        country: 'США',
        director: 'Дин ДеБлуа',
        time: '01:44',
        trailerURL: '',
    },

    {
        name: 'Алита: Боевой Ангел',
        alt: 'alita',
        image: 'assets/images/alita_m.jpg',
        parental: '6+',
        description: 'фантастика &#8226; боевик &#8226; триллер',
        ticketsHref: 'alita_tickets.html',
        imageUrl: 'assets/images/alita_m.jpg',
        schedule: ['10:15', '10:55', '12:05', '13:15', '13:55', '14:45', '16:15', '17:00', '18:05', '18:55', '19:30', '21:00'],
        genres: [' Фантастика ', ' боевик ', ' триллер ',],
        year: '2019',
        country: 'США',
        director: 'Роберт Родригес',
        time: '02:01',
        trailerURL: '',
    },



    {
        name: 'Родители легкого поведения',
        alt: 'drunk_parents',
        image: 'assets/images/drunk_parents_m.jpg',
        parental: '16+',
        description: 'комедия',
        ticketsHref: 'drunk_parents_tickets.html',
        schedule: ['13:55', '14:45', '16:15', '17:00', '18:05', '18:55', '19:30'],
        genres: [' Комедия '],
        year: '2019',
        country:  'США',
        director: 'Питер Фарелли',
        time: '01:36',
        trailerURL: '',
    },

    {
       alt: 'van_goghs',
       image: 'assets/images/van_goghs_m.jpg',
       name: 'Ван Гоги',
       parental: '16+',
       description: 'драма'
    },

    {
        alt: 'alien',
        image: 'assets/images/alien_m.jpg',
        name: 'Чужой',
        parental: '16+',
        description: 'ужасы &#8226; фантастика &#8226; триллер'
    },

    {
        alt: 'guests',
        image: 'assets/images/guests_m.jpg',
        name: 'Гости',
        parental: '16+',
        description: 'триллер &#8226; ужасы &#8226; мелодрама'
    },

    {
        alt: 'happy_death_day',
        image: 'assets/images/happy_death_day_m.jpg',
        name: 'Счастливого дня смерти',
        parental: '16+',
        description: 'ужасы &#8226; фантастика &#8226; детектив'
    },

]


let greenBookData = {
    localName: '_green_book',
    name: 'Зеленая Книга',
    imageUrl: 'assets/images/greenbook_m.jpg',
    ticketsHref: 'green-book-tickets.html',
    schedule: ['10:15', '10:55', '12:05', '13:15', '13:55', '14:45', '16:15', '17:00', '18:05', '18:55', '19:30', '20:05'],
    genres: [' Комедия ', ' Драма ', ' Биография '],
    year: '2019',
    country: 'США',
    director: 'Питер Фарелли',
    ageLimit: '16+',
    time: '02:10',
    trailerURL: '',
}

// let parentsData = {
//     localName: '_drunk_parents',
//     name: 'Родители легкого поведения',
//     ticketsHref: '/drunk_parents_tickets.html',
//     imageUrl: 'assets/images/drunk_parents_m.jpg',
//     schedule: ['13:55', '14:45', '16:15', '17:00', '18:05', '18:55', '19:30'],
//     genres: [' Комедия '],
//     year: '2019',
//     country:  'США',
//     director: 'Питер Фарелли',
//     ageLimit: '16+',
//     time: '01:36',
//     trailerURL: '',
// }

// let alitaData = {
//     localName: '_alita',
//     name: 'Алита: Боевой Ангел',
//     ticketsHref: '/alita_tickets.html',
//     imageUrl: 'assets/images/alita_m.jpg',
//     schedule: ['10:15', '10:55', '12:05', '13:15', '13:55', '14:45', '16:15', '17:00', '18:05', '18:55', '19:30', '21:00'],
//     genres: [' Фантастика ', ' боевик ', ' триллер ',],
//     year: '2019',
//     country: 'США',
//     director: 'Роберт Родригес',
//     ageLimit: '16+',
//     time: '02:01',
//     trailerURL: '',
// }

// let petDragonsData = {
//     localName: '_pet_dragon',
//     name: 'Как приручить дракона',
//     ticketsHref: '/pet_dragons_tickets.html',
//     imageUrl: 'assets/images/pet_dragons_m.jpg',
//     schedule: ['10:15','10:55','12:05','13:15','13:55','14:45','16:15','17:00','18:05','18:55','19:30',],
//     genres: [' Мультфильм',' Фентези', ' Боевик',],
//     year: '2019',
//     country: 'США',
//     director: 'Дин ДеБлуа',
//     ageLimit: '6+',
//     time: '01:44',
//     trailerURL: '',
// }

// let captainMarvelData = {
//     localName: '_captain_marvel',
//     name: 'Капитан Марвел',
//     ticketsHref: '/captain_marvel_tickets.html',
//     imageUrl: 'assets/images/captain_marvel_m.jpg',
//     schedule: ['10:15','10:55','12:05','13:15','13:55','14:45','16:15','17:00','18:05','18:55','19:30','20:05','20:55','21:25','22:05','23:15','00:35',],
//     genres: [' Фантастика',' Боевик',' Приключения',],
//     year: '2019',
//     country: 'США',
//     director: 'Анна Боден, Райан Флек',
//     ageLimit: '16+',
//     time: '02:03',
//     trailerURL: '',
// }


// ============добавляем варианты времени для выбора сеанса фильма============ъ


let seanses = document.querySelector('.seanses');

let storageFilmName = sessionStorage.getItem('filmName')

let targetSeanses = document.querySelector(`.${storageFilmName}`)



function createDates(filmObj, divTarget) {
  
        for(let i = 0; i < filmObj.schedule.length; i++) {
            let div = document.createElement('div');
                div.className = 'time__block';
                // div.href = filmObj.ticketsHref;
                div.innerHTML = ((filmObj.schedule[i]) + '<span class ="mode__2d3d"> 2D </span>' );
                divTarget.append(div);
        }
    }


if (seanses) {createDates(greenBookData, seanses)}

// ======при нажатии на элемент, получаем его индекс, чтобы после перехода 
// на страницу с покупкой билетов, этот же элемент подсвечивался 
// как выбранный ( не работает в мобильной версии и в блоке "расписание"))=============




function getTimeBlockActiveIndex(filmName) {
    let film = document.querySelector(`.${filmName}`)
    let timeBlock = film.querySelectorAll('.time__block')
    timeBlock.forEach(el=>el.addEventListener('click', (event)=> {
        let activeIndex = Array.from(timeBlock).indexOf(event.target)
        if (!timeBlock[activeIndex].classList.contains('time__block_active')) {
            timeBlock.forEach(el => {el.classList.remove('time__block_active')})
            sessionStorage.setItem(`index`, activeIndex)
            sessionStorage.setItem(`filmName`, filmName)
            console.log(sessionStorage.getItem('index'))
            timeBlock[activeIndex].classList.add('time__block_active')
        }
        else {
            timeBlock[activeIndex].classList.remove('time__block_active')
            sessionStorage.removeItem('index')
            sessionStorage.removeItem('filmName')
        }
    }))
    if (sessionStorage.length > 0) {
        let item = sessionStorage.getItem('index')
        console.log(+item)
        timeBlock[+item].classList.add('time__block_active')
    }

}
function storageFilmCheck() {
        if (seanses) {
            seanses.classList.add(`${storageFilmName}`)
            getTimeBlockActiveIndex(storageFilmName)
        }
}
storageFilmCheck()






// =======расписание на главной странице=================
let schedule = document.querySelector('.schedule')

function scheduleMainFunction(film) {
    schedule.insertAdjacentHTML('beforeend', 
        `<div class="schedule-item ${film.alt}">
            <img src="${film.image}" alt="${film.name}">
            <div class="schedule-desc">
                <h3>${film.name}</h3>
                <div class="desc-main">
                    <p>${film.year}</p>
                    <p>${film.country}</p>
                    <p>${film.director}</p>
                    <p>${film.genres}</p>
                    <p>${film.time}</p>
                    <p>${film.parental}</p>
                </div>
            </div>   

            <div class="schedule-seanses-body">
                <div class="schedule-seanses"></div>
                <div class="desc-details-trailer">
                    <div class="__detail">
                        <a href="${film.ticketsHref}"></a>
                        <p>Подробнее</p>
                    </div>
                    <div class="__trailer">
                        <a href="${film.trailerURL}"></a>
                        <p>Смотреть трейлер</p>
                    </div>
                </div>
            </div>    
        </div>`
    )
    let filmDiv = document.querySelector(`.${film.alt}`)
    let thisFilm = filmDiv.querySelector('.schedule-seanses')
    createDates(film, thisFilm);
}



function createScheduleCheck() {
    if (schedule) {
        filmsData.forEach(el=> {
           
            // проверяем что у объекта фильма есть полные данные для отрисовки, их должно быть больше 10
            if (Object.keys(el).length > 10) {
                scheduleMainFunction(el)
                getTimeBlockActiveIndex(el.alt)
            }
            
            console.log(el.alt)
        })
        // scheduleMainFunction(greenBookData)
        // scheduleMainFunction(captainMarvelData)
        // scheduleMainFunction(petDragonsData)
        // scheduleMainFunction(alitaData)
        // scheduleMainFunction(parentsData)
    }
}
createScheduleCheck()


let dates = document.querySelectorAll('.date-body')

function dateActive() {

    function datesToggle() {
        dates.forEach(el=> {
            el.classList.remove('date-body-active')
        })
    }
    dates.forEach(el=>el.addEventListener('click', ()=> {
        let rect = el.getBoundingClientRect()
        let datesBullet = document.querySelector('.dates-pagination__bullet')
        datesBullet.style.left = (rect.left)  + 'px'
        datesBullet.style.width = rect.width + 'px'
        datesToggle()
        el.classList.add('date-body-active')
    }))
}
    if (dates) {
        dateActive()
    }
        




// ============выбор фильма по нажатию на изображение в боковом слайдере на главной странице==========
function sliderSelect() {
    let rightAsideSlider = document.querySelector('.right-cinema-slider')
    if (rightAsideSlider) {
        rightAsideSlider.querySelectorAll('.swiper-slide').forEach(function(el){
            el.addEventListener('click', function() {
                let dataName = el.getAttribute('data-name')
                let backGround = document.querySelectorAll('.background__image')
                let backGroundData = () => backGround.forEach(function(el) {
                    if (dataName == el.getAttribute('data-name')) {
                        el.style.display = 'block';
                    } 
                    else if (el.getAttribute('data-name') == null) {
                        el.style.display = '';
                    }
                    else {
                        el.style.display = 'none';
                    }
                })
                backGroundData()
            })
        })
    }
}
sliderSelect();



// ===========буллет под выбором сегодня и скоро на главной странице=========
function todayFilm() {
    let tf = document.querySelectorAll('.today__film')
    if (tf) {
        tf.forEach(function (el) {
            el.addEventListener('click', () => {
                let parentPosition = document.querySelector('.tomorrow-soon').getBoundingClientRect()
                let rect = el.getBoundingClientRect()
                let splitterMove = document.querySelector('.splitter__cell')
                splitterMove.style.left = (rect.left - parentPosition.left)  + 'px'
                splitterMove.style.width = rect.width + 'px'
        
            })
        })
    }
}
todayFilm();


function insertFilm(el) {
    let afisha = document.querySelector('.afisha')
    let div = document.createElement('div')

    div.setAttribute('class', 'film-presentation')
    div.setAttribute('data-name', `${el.alt}`)
    div.innerHTML = `<img src= "${el.image}" alt="${el.alt}">` 
        + `<div class="film-name">`
        + ` <h5>${el.name}</h5>`
        + ` <p class="film-description">${el.description}</p>`
        + `<div class="parental-control">${el.parental}</div>`
        + `</div>`
    if (afisha) {
        afisha.append(div)
    } 
} 




// =====это костыль чтобы при нажатии в мобильной версии на фильм переходило к покупке билетов и описанию========

filmsData.forEach(insertFilm)

function filmsDataHref() {
    let greenBookBlock = document.querySelector('[data-name = "green_book"]')
    if (greenBookBlock) {
        greenBookBlock.addEventListener('click', function() {
            location.href = 'green-book-tickets.html'
        })
    }
}
filmsDataHref()




// =================рисуем стульчики=============================


let seatsPatternDiv = document.querySelector('.seats-pattern');

function makeSeats(el) {
    let div = document.createElement('div');
    if (
        el.occupied == true) {
        div.className = 'seat _occupied'
    }
    else if (
        el.occupied == false) {
        div.className = 'seat _free'

    }
    else {
        div.className = 'seat'
    }
    seatsPatternDiv.append(div)
}


let row1 = [
    {},{}, 
    {occupied: false, costs: 300, row: 1, seat: 1}, 
    {occupied: false, costs: 300, row: 1, seat: 2}, 
    {occupied: false, costs: 300, row: 1, seat: 3}, 
    {occupied: false, costs: 400, row: 1, seat: 4},
    {occupied: false, costs: 400, row: 1, seat: 5}, 
    {occupied: false, costs: 400, row: 1, seat: 6},  
    {},{},{},{},{},{}, 
    {occupied: false, costs: 400, row: 1, seat: 7}, 
    {occupied: false, costs: 400, row: 1, seat: 8}, 
    {occupied: false, costs: 400, row: 1, seat: 9}, 
    {occupied: false, costs: 400, row: 1, seat: 10},
    {occupied: false, costs: 300, row: 1, seat: 11}, 
    {occupied: false, costs: 300, row: 1, seat: 12}, 
    {},{},


    {},{}, 
    {occupied: false, costs: 300, row: 2, seat: 1}, 
    {occupied: false, costs: 300, row: 2, seat: 2}, 
    {occupied: false, costs: 300, row: 2, seat: 3}, 
    {occupied: false, costs: 300, row: 2, seat: 4}, 
    {occupied: true},
    {occupied: false, costs: 300, row: 2, seat: 6}, 
    {occupied: false, costs: 300, row: 2, seat: 7}, 
    {occupied: false, costs: 400, row: 2, seat: 8}, 
    {occupied: false, costs: 400, row: 2, seat: 9}, 
    {occupied: false, costs: 400, row: 2, seat: 10}, 
    {occupied: false, costs: 400, row: 2, seat: 11}, 
    {occupied: false, costs: 400, row: 2, seat: 12}, 
    {occupied: false, costs: 400, row: 2, seat: 13}, 
    {occupied: false, costs: 400, row: 2, seat: 14}, 
    {occupied: false, costs: 400, row: 2, seat: 15}, 
    {occupied: false, costs: 300, row: 2, seat: 16},
    {occupied: false, costs: 300, row: 2, seat: 17}, 
    {occupied: false, costs: 300, row: 2, seat: 18},  
    {}, {},    


    {}, {},
    {occupied: false, costs: 300, row: 3, seat: 1},
    {occupied: false, costs: 300, row: 3, seat: 2},
    {occupied: false, costs: 300, row: 3, seat: 3},
    {occupied: false, costs: 300, row: 3, seat: 4},
    {occupied: false, costs: 300, row: 3, seat: 5},
    {occupied: false, costs: 300, row: 3, seat: 6},
    {occupied: false, costs: 300, row: 3, seat: 7},
    {occupied: false, costs: 300, row: 3, seat: 8},
    {occupied: true}, 
    {occupied: true}, 
    {occupied: false, costs: 400, row: 3, seat: 11},
    {occupied: false, costs: 400, row: 3, seat: 12},
    {occupied: false, costs: 400, row: 3, seat: 13},
    {occupied: false, costs: 400, row: 3, seat: 14},
    {occupied: false, costs: 400, row: 3, seat: 15},
    {occupied: false, costs: 400, row: 3, seat: 16},
    {occupied: false, costs: 300, row: 3, seat: 17},
    {occupied: false, costs: 300, row: 3, seat: 18},
    {}, {},


    {}, {},
    {occupied: false, costs: 300, row: 4, seat: 1},
    {occupied: false, costs: 300, row: 4, seat: 2},
    {occupied: false, costs: 300, row: 4, seat: 3},
    {occupied: true},
    {occupied: false, costs: 400, row: 4, seat: 5},
    {occupied: false, costs: 400, row: 4, seat: 6},
    {occupied: false, costs: 400, row: 4, seat: 7},
    {occupied: true},
    {occupied: true},
    {occupied: false, costs: 300, row: 4, seat: 10},
    {occupied: false, costs: 300, row: 4, seat: 11},
    {occupied: false, costs: 300, row: 4, seat: 12},
    {occupied: false, costs: 300, row: 4, seat: 13},
    {occupied: false, costs: 300, row: 4, seat: 14},
    {occupied: false, costs: 300, row: 4, seat: 15},
    {occupied: false, costs: 300, row: 4, seat: 16},
    {occupied: false, costs: 300, row: 4, seat: 17},
    {occupied: false, costs: 300, row: 4, seat: 18},
    {}, {},


    {}, {},
    {occupied: false, costs: 300, row: 5, seat: 1},
    {occupied: false, costs: 300, row: 5, seat: 2},
    {occupied: false, costs: 300, row: 5, seat: 3},
    {occupied: false, costs: 300, row: 5, seat: 4},
    {occupied: true},
    {occupied: true},
    {occupied: false, costs: 300, row: 5, seat: 7},
    {occupied: true},
    {occupied: true},
    {occupied: true},
    {occupied: true},
    {occupied: false, costs: 300, row: 5, seat: 12},
    {occupied: true},
    {occupied: false, costs: 400, row: 5, seat: 14},
    {occupied: false, costs: 400, row: 5, seat: 15},
    {occupied: false, costs: 400, row: 5, seat: 16},
    {occupied: false, costs: 400, row: 5, seat: 17},
    {occupied: false, costs: 300, row: 5, seat: 18},
    {}, {},


    {}, {},
    {occupied: false, costs: 300, row: 6, seat: 1},
    {occupied: false, costs: 300, row: 6, seat: 2},
    {occupied: false, costs: 300, row: 6, seat: 3},
    {occupied: false, costs: 300, row: 6, seat: 4},
    {occupied: false, costs: 400, row: 6, seat: 5},
    {occupied: false, costs: 400, row: 6, seat: 6},
    {occupied: false, costs: 400, row: 6, seat: 7},
    {occupied: false, costs: 400, row: 6, seat: 8},
    {occupied: true},
    {occupied: false, costs: 300, row: 6, seat: 10},
    {occupied: true},
    {occupied: false, costs: 300, row: 6, seat: 12},
    {occupied: true},
    {occupied: false, costs: 300, row: 6, seat: 14},
    {occupied: false, costs: 300, row: 6, seat: 15},
    {occupied: false, costs: 300, row: 6, seat: 16},
    {occupied: false, costs: 300, row: 6, seat: 17},
    {occupied: false, costs: 300, row: 6, seat: 18},
    {}, {},


    {occupied: false, costs: 300, row: 7, seat: 1},
    {occupied: false, costs: 300, row: 7, seat: 2},
    {occupied: false, costs: 300, row: 7, seat: 3},
    {occupied: false, costs: 300, row: 7, seat: 4},
    {occupied: true},
    {occupied: false, costs: 300, row: 7, seat: 6},
    {occupied: false, costs: 300, row: 7, seat: 7},
    {occupied: false, costs: 300, row: 7, seat: 8},
    {occupied: true},
    {occupied: false, costs: 300, row: 7, seat: 10},
    {occupied: true},
    {occupied: false, costs: 300, row: 7, seat: 12},
    {occupied: true},
    {occupied: false, costs: 400, row: 7, seat: 14},
    {occupied: false, costs: 400, row: 7, seat: 15},
    {occupied: false, costs: 400, row: 7, seat: 16},
    {occupied: false, costs: 400, row: 7, seat: 17},
    {occupied: true},
    {occupied: false, costs: 300, row: 7, seat: 19},
    {occupied: false, costs: 300, row: 7, seat: 20},
    {occupied: false, costs: 300, row: 7, seat: 21},
    {occupied: false, costs: 300, row: 7, seat: 22},


    {occupied: false, costs: 300, row: 8, seat: 1},
    {occupied: false, costs: 300, row: 8, seat: 2},
    {occupied: false, costs: 300, row: 8, seat: 3},
    {occupied: false, costs: 300, row: 8, seat: 4},
    {occupied: true},
    {occupied: false, costs: 300, row: 8, seat: 6},
    {occupied: false, costs: 300, row: 8, seat: 7},
    {occupied: false, costs: 300, row: 8, seat: 8},
    {occupied: false, costs: 300, row: 8, seat: 9},
    {occupied: true},
    {occupied: false, costs: 400, row: 8, seat: 11},
    {occupied: true},
    {occupied: false, costs: 400, row: 8, seat: 13},
    {occupied: false, costs: 400, row: 8, seat: 14},
    {occupied: true},
    {occupied: false, costs: 400, row: 8, seat: 16},
    {occupied: false, costs: 400, row: 8, seat: 17},
    {occupied: false, costs: 400, row: 8, seat: 18},
    {occupied: false, costs: 400, row: 8, seat: 19},
    {occupied: true},
    {occupied: false, costs: 300, row: 8, seat: 21},
    {occupied: false, costs: 300, row: 8, seat: 22},


    {occupied: false, costs: 300, row: 9, seat: 1},
    {occupied: false, costs: 300, row: 9, seat: 2},
    {occupied: false, costs: 300, row: 9, seat: 3},
    {occupied: false, costs: 300, row: 9, seat: 4},
    {occupied: false, costs: 300, row: 9, seat: 5},
    {occupied: false, costs: 300, row: 9, seat: 6},
    {occupied: true},
    {occupied: false, costs: 300, row: 9, seat: 8},
    {occupied: false, costs: 300, row: 9, seat: 9},
    {occupied: false, costs: 300, row: 9, seat: 10},
    {occupied: true},
    {occupied: true},
    {occupied: true},
    {occupied: false, costs: 300, row: 9, seat: 14},
    {occupied: false, costs: 300, row: 9, seat: 15},
    {occupied: false, costs: 300, row: 9, seat: 16},
    {occupied: false, costs: 300, row: 9, seat: 17},
    {occupied: false, costs: 300, row: 9, seat: 18},
    {occupied: true},
    {occupied: false, costs: 300, row: 9, seat: 20},
    {occupied: false, costs: 300, row: 9, seat: 21},
    {occupied: false, costs: 300, row: 9, seat: 22},
]

function makinSeats() {
    if (seatsPatternDiv) {
        row1.forEach(function(el) {
            makeSeats(el);
        })
    }
  
}
makinSeats()


// =============калькулятор и выбор места=============
const prices = new Array();

function addCostToArray(seats, activeIndex, arr, object) {
    let ticket = document.querySelector('.choosen__ticket[data-index="' + activeIndex + '"]')
    if (seats[activeIndex].classList.contains('choosen')) {
        arr.push((object[activeIndex].costs))
        seats[activeIndex].setAttribute('data-index', `${activeIndex}`)
        createTickets(object, activeIndex)
    }
    else {
        let find = arr.findIndex(function(index) {
            return index == object[activeIndex].costs
        }
        )
        ticket.remove()
        seats[activeIndex].removeAttribute('data-index')
        arr.splice(find, 1)
    }
}

function addIndexToArray(arr, activeIndex) {
    if (arr.includes(activeIndex)) {
    let find = arr.findIndex(function(index) {
        return index == activeIndex
    }
    )
    arr.splice(find, 1)
}
else {
    arr.push(activeIndex)
}
}

function folding(arr) {
    if (arr.length !== 0) {
        return arr.reduce(function(sum, current) {
           return sum + current
        })
    }
    else {
        return 0
    }
}



let choosenTickets = document.querySelector('.choosen-tickets')

function createTickets(room, activeIndex) {
    if (choosenTickets) {
        choosenTickets.insertAdjacentHTML('beforeend', ` <div class="choosen__ticket" data-index= ${activeIndex}>
        <div class="picked-row-seat">${room[activeIndex].row}ряд, ${room[activeIndex].seat} место</div>
        <div class="picked-seat-cost">
           <p>${room[activeIndex].costs} P</p> 
           <button data-index = '${activeIndex}' class='x-button'></button>
        </div>
    </div>`)
    }
}

function ticketsListener() {
    if (choosenTickets) {
        choosenTickets.addEventListener('click', (event)=> {
            if(event.target.className === ('x-button')) {
                let ticket = event.target.parentNode.parentNode
                let dataIndex = ticket.getAttribute('data-index')
                let seat = seats1[(+dataIndex)]
                seat.classList.remove('choosen')
                addIndexToArray(currentSeatIndex, (+dataIndex))
                addCostToArray(seats1, (+dataIndex), prices, row1)
                let summNode = document.querySelector('.summ');
                summNode.innerText = folding(prices)
            }
            })
    }
} 
ticketsListener()





let seats1 = document.querySelectorAll('.seat')

const currentSeatIndex = new Array()


function seatsListener() {
    if (seats1) {
        seats1.forEach(function(x) {x.addEventListener('click', function(event){
            event.preventDefault
            let activeIndex = Array.from(seats1).indexOf(event.target)
            seats1[activeIndex].classList.toggle('choosen')
            addCostToArray(seats1, activeIndex, prices, row1)
            addIndexToArray(currentSeatIndex, activeIndex)
            let summNode = document.querySelector('.summ');
            summNode.innerText = folding(prices)
            })
        })
    }

}
seatsListener()



// =======количество рядов и мест в зале в зависимости от зала===========

let roomDescription = {
    number : 5,
    resolution : '2D',
    rows: 9,
    columns: 22,
    time: '19:30',

}




function fillRoomData() {
    if (seatsPatternDiv) {
        document.querySelector('.picked-cinema__room').innerText = `ЗАЛ ${roomDescription.number}`
        document.querySelector('.picked-cinema__resolution').innerText = `${roomDescription.resolution}`
        document.querySelector('.picked-cinema__time').innerText = `${roomDescription.time}`
    }
}

fillRoomData()




let roomColumns = document.querySelector('.seats-columns');
let roomRows = document.querySelector('.seats-rows');

function rowsColsShape() {
    if (seatsPatternDiv) {
        roomColumns.style.width = (seatsPatternDiv.offsetWidth) + 'px'
        roomRows.style.height = (seatsPatternDiv.offsetHeight) + 'px'
        // roomColumns.style.marginLeft = 
        roomColumns.style.marginLeft = (document.querySelector('.seats-wrapper').offsetWidth - seatsPatternDiv.offsetWidth) + 'px'
    }
}
rowsColsShape()


// ============модальное окно ввода данных для оплаты============

let modalWindow = document.querySelector('.modal-window')

function modalToggle() {
    let button = document.querySelector('.buy-tickets')
    let closeButton = document.querySelector('.close')
    let modalBackground = document.querySelector('.modal-background')
    let modalWindowWrapper = document.querySelector('.modal-window-wrapper')
    button.addEventListener('click', ()=> {
        modalWindow.querySelector('.modal-pay').innerText = 'Оплатить ' + folding(prices) + 'P'
        modalWindow.classList.add('modal-active')
        modalBackground.style.display = 'block'
        modalWindowWrapper.style.display = 'block'
      
    })
    closeButton.addEventListener('click', ()=> {
        modalWindow.classList.remove('modal-active')
        modalBackground.style.display = ''
        modalWindowWrapper.style.display = ''

    })
  

}
if (modalWindow) {
    modalToggle()
}






// ===========create lis with numbers to columns and rows in thr room=============
function iteratorItems(num, line) {
    let li = document.createElement('li')
    li.innerHTML = num
    line.append(li)
}

// ======iterator for counting numbers================
function createRowsCols(prop, el) {
    for (let num = 1; num <=(prop); num++) {
        iteratorItems(num, el)
    }
}

if (seatsPatternDiv) {
    createRowsCols((roomDescription.columns), roomColumns)
    createRowsCols((roomDescription.rows), roomRows)
}

let burgerMenu = document.querySelector('.burger-menu')

// =========бургер-меню для адаптива=============

function burger() {
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            let headerAsideBar = document.querySelector('.header-aside-bar')
            headerAsideBar.classList.toggle('nav-active')
            burgerMenu.classList.toggle('burger-cross')
        })
    }
}
burger()




