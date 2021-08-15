"use strict"

let btn = document.querySelectorAll(".open-modal");
let hiddenDiv = document.querySelectorAll("div");

// Open modal window:
let btns = function () {
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            document.querySelector(".modal-overlay").classList.remove("hidden")
            document.querySelector(".first-modal").classList.remove("hidden")

        });
    };
};
btns()

// Close modal by (X):
document.querySelector(".close-btn").addEventListener("click", function () {
    document.querySelector(".modal-overlay").classList.add("hidden");
    document.querySelector(".first-modal").classList.add("hidden");
})
// Close modal by click outside:
document.querySelector(".modal-overlay").addEventListener("click", function () {
    document.querySelector(".modal-overlay").classList.add("hidden");
    document.querySelector(".first-modal").classList.add("hidden");
})
// Close Modal by press Escape:
document.addEventListener("keydown", function (e) {
    console.log(e.key)
    if (e.key == 'Escape') {
        document.querySelector(".modal-overlay").classList.add("hidden");
        document.querySelector(".first-modal").classList.add("hidden");
    }
})