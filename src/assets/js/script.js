"use strict"


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

let greenBookSchedule = ['10:15', '10:55', '12:05', '13:15', '13:55', '14:45', '16:15', '17:00', '18:05', '18:55', '19:30', '20:05'];
let seanses = document.querySelector('.seanses');

for(let i = 0; i < greenBookSchedule.length; i++) {
    let a = document.createElement('a');
    a.className = 'time__block';
    a.href = '/green-book-tickets.html';
    a.innerHTML = ((greenBookSchedule[i]) + '<span class ="mode__2d3d"> 2D </span>' );
    seanses.append(a);
}


let sliderSelect = function () {
    let rightAsideSlider = document.querySelector('.right-cinema-slider')
if (rightAsideSlider != null) {
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
else {console.log('not on this page')}
}
sliderSelect();


let todayFilm = () => {
    let tf = document.querySelectorAll('.today__film')
    if (tf != null) {
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
    else {console.log('not on this page')}
}
todayFilm();


let insertFunction = function(el) {
    let insertFilm = document.querySelector('.afisha')
    let div = document.createElement('div')

    div.setAttribute('class', 'film-presentation')
    div.innerHTML = `<img src= "${el.image}" alt="${el.alt}">` 
        + `<div class="film-name">`
        + ` <h5>${el.name}</h5>`
        + `<div class="parental-control">${el.parental}</div>`
        + `</div>`
        + ` <p class="film-description">${el.description}</p>`
    if (insertFilm != null) {
        insertFilm.append(div)
    } else {
        console.log('not on this page')
    }   
} 


let filmsData = [{
    alt: 'captain_marvel',
    image:'assets/images/captain_marvel_m.jpg',
    name:'Капитан Марвел',
    parental: '16+',
    // description: ['Фантастика', 'боевик', 'приключения',],
    description: 'фантастика &#8226; боевик &#8226; приключения',
},

 {
    alt: 'pet_dragon',
    image: 'assets/images/pet_dragons_m.jpg',
    name: 'Как приручить дракона',
    parental: '16+',
    description: 'мультфильм &#8226; фентези &#8226; боевик'
},

 {
    alt: 'alita',
    image: 'assets/images/alita_m.jpg',
    name: 'Алита',
    parental: '6+',
    description: 'фантастика &#8226; боевик &#8226; триллер'
},

{
    alt: 'green book',
    image: 'assets/images/greenbook_m.jpg',
    name: 'Зеленая книга',
    parental: '16+',
    description: 'комедия &#8226; драма &#8226; биография'
},

{
    alt: 'drunk_parents',
    image: 'assets/images/drunk_parents_m.jpg',
    name: 'Родители легкого поведения',
    parental: '16+',
    description: 'комедия'
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


filmsData.forEach(insertFunction)

// =================рисуем стульчики=============================


    window.seatsPatternDiv = document.querySelector('.seats-pattern');

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

let makinSeats = () => {
    if (seatsPatternDiv != null) {
        row1.forEach(function(el) {
            makeSeats(el);
        })
    }
    else {
        console.log('not on this page')
    }
}
makinSeats()


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

let result = function(arr) {
    if (arr.length == 0) {
        return 0
    }
    else {
        return arr.reduce(function(sum, current) {
        return sum + current
    })
    }
}



window.choosenTickets = document.querySelector('.choosen-tickets')

function createTickets(room, activeIndex) {
    if (choosenTickets != null) {
        choosenTickets.insertAdjacentHTML('beforeend', ` <div class="choosen__ticket" data-index= ${activeIndex}>
        <div class="picked-row-seat">${room[activeIndex].row}ряд, ${room[activeIndex].seat} место</div>
        <div class="picked-seat-cost">
           <p>${room[activeIndex].costs} P</p> 
           <button data-index = '${activeIndex}' class='x-button'></button>
        </div>
    </div>`)
    }
    else {
        console.log('createTickets undefined')
    }

}

let ticketsListener = () => {
    if (choosenTickets != null) {
        choosenTickets.addEventListener('click', (event)=> {
            if(event.target.className === ('x-button')) {
                let ticket = event.target.parentNode.parentNode
                let dataIndex = ticket.getAttribute('data-index')
                console.log(seats1[(+dataIndex)])
                let seat = seats1[(+dataIndex)]
                seat.classList.remove('choosen')
                addIndexToArray(currentSeatIndex, (+dataIndex))
                addCostToArray(seats1, (+dataIndex), prices, row1)
                let summNode = document.querySelector('.summ');
                summNode.innerText = result(prices)
            }
            })
    }
    else {
        console.log('ticketsListener undefined')
    }
} 
ticketsListener()





let seats1 = document.querySelectorAll('.seat')

window.currentSeatIndex = new Array()


let seatsListener = () => {
    if (seats1 != null) {
        seats1.forEach(function(x) {x.addEventListener('click', function(event){
            event.preventDefault
            let activeIndex = Array.from(seats1).indexOf(event.target)
            seats1[activeIndex].classList.toggle('choosen')
            addCostToArray(seats1, activeIndex, prices, row1)
            addIndexToArray(currentSeatIndex, activeIndex)
            let summNode = document.querySelector('.summ');
            summNode.innerText = result(prices)
            console.log(prices)
            console.log(window.currentSeatIndex)
            })
        })
    }
    else {
        console.log('seatsListener undefined')
    }
}
seatsListener()

let roomDescription = {
    number : 5,
    resolution : '2D',
    rows: 9,
    columns: 22,
    time: '19:30',

}

let fillRoomData = () => {
    if (seats1 != null) {
        document.querySelector('.picked-cinema__room').innerText = `ЗАЛ ${roomDescription.number}`
        document.querySelector('.picked-cinema__resolution').innerText = `${roomDescription.resolution}`
        document.querySelector('.picked-cinema__time').innerText = `${roomDescription.time}`
    }
    else {
        console.log('roomData not exist on this page')
    }

}
fillRoomData()




let roomColumns = document.querySelector('.seats-columns')
let roomRows = document.querySelector('.seats-rows')
roomRows.style.height = (window.seatsPatternDiv.offsetHeight) + 'px'
roomColumns.style.width = (window.seatsPatternDiv.offsetWidth) + 'px'
roomColumns.style.marginLeft = (document.querySelector('.seats-wrapper').offsetWidth - window.seatsPatternDiv.offsetWidth) + 'px'

function iteratorItems(num, line) {
    let div = document.createElement('div')
    div.innerHTML = num
    line.append(div)
}

function createRowsCols(prop, el) {
    for (let num = 1; num <=(prop); num++) {
        iteratorItems(num, el)
    }
}


createRowsCols((roomDescription.columns), roomColumns)
createRowsCols((roomDescription.rows), roomRows)



let framesSLider = new Swiper('.frames-wrapper', {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 30,
})



