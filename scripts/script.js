"use strict";

const btn = document.querySelector(".border");
const sides = document.querySelectorAll(".portfolio-side");
const close = document.createElement('div');
close.classList.add('portfolio-popup__close');

const popup = document.querySelector('.portfolio-choose');


btn.addEventListener('click', function () {
    popup.classList.remove('hide');
});

close.addEventListener('click', function (ev) {
    var opened = document.querySelector('.portfolio-sideHover');
    opened.classList.remove("portfolio-sideHover");
    opened.removeChild(close);
    popup.classList.add('hide');
    ev.stopPropagation();
});

sides.forEach(function (node) {
    node.addEventListener('click', function () {
        node.classList.add('portfolio-sideHover');
        node.appendChild(close);
    });
});






