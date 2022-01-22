"use strict"

const burgerButton = document.querySelector(".burger__button");
const burgerItems = document.querySelector(".burger__items");

var listener = function (e) {
    e.stopPropagation();
    let target = e.target;
    console.log(target);
    if (target.classList.contains("burger__items") === false && target.classList.contains("burger__button") === false) {
        burgerItems.classList.remove("visible");
        document.removeEventListener("click", listener);
    };
}

burgerButton.addEventListener("click", function (e) {
    e.stopPropagation();
    burgerItems.classList.toggle("visible");
    document.addEventListener("click", listener);
});
