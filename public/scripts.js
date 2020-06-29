const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const contentId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${contentId}`
    })
}

const maximize = document.querySelector('.max')
const modal = document.querySelector('.modal')


for (let card of cards) {
    maximize.addEventListener("click", function() {
        modal.classList.add('maximize')
        modalOverlay.querySelector("iframe").src = `https://www.rocketseat.com.br/${contentId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modal.classList.remove('maximize')
    modalOverlay.querySelector("iframe").src = ""
})