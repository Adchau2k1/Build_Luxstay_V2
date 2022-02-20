var selectOne = document.querySelector.bind(document)
var selectAll = document.querySelectorAll.bind(document)
const searchElem = selectAll('.booking-field')

for (var elem of searchElem) {
    elem.onclick = function() {
        if (selectOne('.search--outline'))
            selectOne('.search--outline').classList.remove('search--outline')
        this.classList.add('search--outline')
        if (this.querySelector('.select-calendar-wrapper'))
            this.querySelector('.select-calendar-wrapper').style.display = 'block'
        if (this.querySelector('.search-guest-select'))
            this.querySelector('.search-guest-select').style.display = 'block'
    }
}

