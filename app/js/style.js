'use strict';

const circleContainer = document.querySelector('.circles');
const labelContainer = document.querySelector('.labels');

    circleContainer.style.left = (window.innerWidth - circleContainer.offsetWidth)/2 + 'px';
    circleContainer.style.top = (window.innerHeight - circleContainer.offsetHeight)/2 + 'px';
    labelContainer.style.left = (window.innerWidth - labelContainer.offsetWidth)/2 + 'px';
    labelContainer.style.top = circleContainer.getBoundingClientRect().bottom + 100 + 'px';

