"use strict";

const btn = document.querySelector(".border");
const sides = document.querySelectorAll(".portfolio-side");
const close = document.createElement('div');
close.classList.add('portfolio-popup__close');

const headers = document.querySelectorAll(".portfolio-piccontent");

const popup = document.querySelector('.portfolio-choose');

const projectsM = document.querySelector('.portfolio-projects--marketing');
const projectsF = document.querySelector('.portfolio-projects--frontend');



btn.addEventListener('click', function () {
    popup.classList.remove('hide');
});

close.addEventListener('click', function (ev) {
    var opened = document.querySelector('.portfolio-sideHover');
    opened.classList.remove("portfolio-sideHover");
    opened.removeChild(close);
    popup.classList.add('hide');

    headers.forEach(function (item) {
        item.classList.remove('hide')
    });

    projectsM.classList.add('hide');
    projectsF.classList.add('hide');

    ev.stopPropagation();
});

sides.forEach(function (node) {
    node.addEventListener('click', function (evt) {
        node.classList.add('portfolio-sideHover');

        headers.forEach(function (item) {
            item.classList.add('hide')
        });

        if(Array.from(evt.target.classList).includes('portfolio-side--right') || Array.from(evt.target.parentNode.classList).includes('portfolio-side--right')){
            projectsM.classList.remove('hide');
        };

        if(Array.from(evt.target.classList).includes('portfolio-side--left') || Array.from(evt.target.parentNode.classList).includes('portfolio-side--left')){
            projectsF.classList.remove('hide');
        };

        node.appendChild(close);
    });
});






