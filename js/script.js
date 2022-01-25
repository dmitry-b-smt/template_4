"use strict"

const burgerButton = document.querySelector(".burger__button");
const burgerItems = document.querySelector(".burger__items");

var listener = function (e) {
    e.stopPropagation();
    let target = e.target;
    if (target.classList.contains("burger__items") === false && target.classList.contains("burger__button") === false) {
        burgerItems.classList.remove("visible");
        burgerItems.classList.add("hidden");
        burgerButton.classList.remove("burger__button-active");
        document.removeEventListener("click", listener);
    };
}

burgerButton.addEventListener("click", function (e) {
    e.stopPropagation();
    burgerItems.classList.toggle("hidden");
    burgerItems.classList.toggle("visible");
    burgerButton.classList.toggle("burger__button-active");
    document.addEventListener("click", listener);
});

const imageArea = document.querySelector('.product__image');
const card = document.querySelector('.profile');
console.log(card.offsetLeft, card.offsetTop);
console.log(card);

var x;
var y;

function setCoords(x, y) {
    card.style.left = x + "px";
    card.style.top = y + "px";
};

function cardAppear(e) {
    let target = e.target;
    console.log(target.offsetWidth);
    card.classList.remove("disappear");
    if (window.innerWidth < 670) {
        x = 15;
        y = 15;
    } else {
        x = e.offsetX;
        y = e.offsetY;
    };
    if (window.innerWidth < 760 && x > Number(window.innerWidth - 296)) {
        x = Number(window.innerWidth - 315);
    };
    setCoords(x, y);
    card.classList.add("appear");
    imageArea.addEventListener('mouseout', cardDisappear);
};

function cardDisappear(e) {
    card.classList.remove("appear");
    card.classList.add("disappear");
    imageArea.removeEventListener('click', cardDisappear);
};

imageArea.addEventListener('mouseover', cardAppear);
imageArea.addEventListener('click', cardAppear);
document.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList.contains('product__image') === false && target.classList.contains('profile') === false) {
        card.classList.remove("appear");
        card.classList.add("disappear");
        console.log(card);
        imageArea.addEventListener('click', cardAppear);
    }
})