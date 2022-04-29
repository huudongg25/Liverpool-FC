const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const modal = $('.modal')
const loginInput = $('#loginInput')
const linkInput = $('#loginInput a')
const modalContainer = $('.modal_container')
const closeBtn = $('.modal-close')

// ===login======
loginInput.addEventListener('click',function(){
    modal.style.display ='flex'
})

modal.onclick = function() {
    modal.style.display ='none'
}

closeBtn.onclick = function() {
    modal.style.display ='none'
}

modalContainer.onclick = function(e) {
    e.stopPropagation()
}


linkInput.onclick = function(e) {
    e.preventDefault()
}


// =====login mobile========

const mobileLogin = $('#nav_item-mobile')
const linkInputMobile = $('#nav_item-mobile a')

mobileLogin.addEventListener('click',function(){
    modal.style.display ='flex'
})

linkInputMobile.onclick = function(e) {
    e.preventDefault()
}