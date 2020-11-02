var body = document.querySelector('body');
var header = document.querySelector('#dashboard-header');
var cards = document.querySelectorAll('.social-card');
var cards2 = document.querySelectorAll('.overview-card');
var label = document.querySelector('.mode-label');
let checkbox = document.querySelector('#dw-mode');

checkbox.addEventListener('change', e => {
    if(e.target.checked) {
        body.className = 'body-white';
        header.className = 'dashboard-header-white';
        label.textContent = 'Light Mode'
        for(let i=0; i < cards.length; i++) {
            cards[i].classList.add('white-card');
        }
        for(let j=0; j<cards2.length; j++) {
            cards2[j].classList.add('white-card');
        }
    } else {
        body.className = "";
        header.className = "dashboard-header";
        label.textContent = 'Dark Mode'
        for(let i=0; i < cards.length; i++) {
            cards[i].classList.remove('white-card');
        }
        for(let j=0; j<cards2.length; j++) {
            cards2[j].classList.remove('white-card');
        }
    }
})