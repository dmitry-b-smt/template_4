"use strict"

const burgerButton = document.querySelector(".burger__button");
const burgerItems = document.querySelector(".burger__items");

var listener = function (e) {
    e.stopPropagation();
    let target = e.target;
    console.log(target);
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
