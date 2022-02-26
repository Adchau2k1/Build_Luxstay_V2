var selectOne = document.querySelector.bind(document)
var selectAll = document.querySelectorAll.bind(document)

let isOpen = false
const mainClick = selectOne('.main')

function closeElem() {
    if (selectOne('.search--outline'))
        selectOne('.search--outline').classList.remove('search--outline')

    if (selectOne('.history').style.display != 'none')
        selectOne('.history').style.display = 'none'

    if (selectOne('.select-calendar-wrapper').style.display != 'none') 
        selectOne('.select-calendar-wrapper').style.display = 'none'
        
    if (selectOne('.search-guest-select').style.display != 'none')         
        selectOne('.search-guest-select').style.display = 'none'

    if (selectOne('.select-country').style.display != 'none')
        selectOne('.select-country').style.display = 'none'

    if (selectOne('.select-country-bridge').style.display != 'none')
        selectOne('.select-country-bridge').style.display = 'none'
    
    if (selectOne('.mt-select-country').style.display != 'none')
        selectOne('.mt-select-country').style.display = 'none'

    if (selectOne('.mt-select-country-bridge').style.display != 'none')
        selectOne('.mt-select-country-bridge').style.display = 'none'
}

mainClick.onclick = () => {
    closeElem()
}

function handleSearchInput(...args) {
    for (let i in args) {        
        selectOne(args[i]).onclick = e => {      
            closeElem()
            selectOne('.search-location__input').focus()
            selectOne('.history').style.display = 'block'
            e.stopPropagation()
        }
    }
}

function handleCalendar(...args) {
    for (let i in args) {        
        selectOne(args[i]).onclick = e => {
            closeElem()
            selectOne('.search-date').classList.add('search--outline')
            selectOne('.select-calendar-wrapper').style.display = 'block'   
            e.stopPropagation()
        }
    }
}

function handleSearchGuest(...args) {
    for (let i in args) {        
        selectOne(args[i]).onclick = e => {
            closeElem()
            selectOne('.search-guest').classList.add('search--outline')
            selectOne('.search-guest-select').style.display = 'block'           
            e.stopPropagation()
        }
    }
}

function handleSelectCountry(...args) {
    for (let i in args) {        
        selectOne(args[i]).onclick = e => {
            closeElem()
            selectOne('.select-country').style.display = 'flex'
            selectOne('.select-country-bridge').style.display = 'block'         
            e.stopPropagation()
        }
    }
}

function handleMobileSC(...args) {
    for (let i in args) {        
        selectOne(args[i]).onclick = e => {
            closeElem()
            selectOne('.mt-select-country').style.display = 'block'
            selectOne('.mt-select-country-bridge').style.display = 'block'         
            e.stopPropagation()
        }
    }
}

handleSearchInput('.search-location__input', '.history')
handleCalendar('.search-date__btn', '.select-calendar-wrapper')
handleSearchGuest('.search-guest', '.search-guest-select')
handleSelectCountry('.select-country', '.item__btn')
handleMobileSC('.mt-select-country', '.mt-item__btn')

const imgs = selectAll('.banner-img')
imgs[0].style.display = 'none'

setInterval(() => {
    if (imgs[0].style.display == 'block')
        imgs[0].style.display = 'none'
    else
        imgs[0].style.display = 'block'
        imgs[1].style.display = 'none'
}, 8000)

setInterval(() => {
    if (imgs[1].style.display == 'block')
        imgs[1].style.display = 'none'
    else
        imgs[1].style.display = 'block'
        imgs[0].style.display = 'none'
}, 16000)