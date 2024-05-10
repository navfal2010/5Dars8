let btnPlus = document.querySelector('.btn-plus')
let countText = document.querySelector('.website__p')
let btnMinus = document.querySelector('.btn-minus')
let btn2 = document.querySelector('.btn-two')
let btn10 = document.querySelector('.btn-ten')
let btn50 = document.querySelector('.btn-fifty')

let num = 0

let ReadNumber = () => {
    countText.innerHTML = num
}
ReadNumber()

btnPlus.addEventListener('click', () => {
    ++num
    ReadNumber()
})

btnMinus.addEventListener('click', () => {
    --num
    ReadNumber()
})

btn2.addEventListener('click', () => {
    num *= 2
    ReadNumber()
})

btn10.addEventListener('click', () => {
    num *= 10
    ReadNumber()
})

btn50.addEventListener('click', () => {
    num *= 50
    ReadNumber()
})


