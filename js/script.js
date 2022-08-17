const tabItems = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content-item');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const iconMenu = document.querySelector('.icon-menu');
const faq = document.querySelectorAll('.faq__question');
const log = document.querySelector('#logo');
const arrow = document.querySelectorAll('.arrow');




function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border');


    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}


function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContent.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open-menu');
    overlay.classList.toggle('open-overlay');
    document.body.classList.toggle("stop-scrolling");
    iconMenu.classList.toggle('icon-menu-show');
    log.classList.toggle('logo-menu');
});


function selectPara() {
    const faqContent = document.querySelector(`#${this.id}-content`);
    faqContent.classList.toggle('show-p');
    const faqArrow = document.querySelector(`#${this.id}-arrow`);
    faqArrow.classList.toggle('arrow-rotate');
}

faq.forEach(item => item.addEventListener('click', selectPara));