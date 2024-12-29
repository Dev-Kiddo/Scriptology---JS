"use strict";

const modalButtons = document.querySelectorAll(".show-modal__btn");

const overlay = document.querySelector(".model__overlay");

const modal = document.querySelector(".modal");

const modalCloseBtn = document.querySelector(".modal__close");

// console.log(overlay);

// console.log(modalButtons);
// console.log(modalButtons.length);

//----------------------------------
// Using For Loop to manipulate btns
//----------------------------------

// for (let i = 0; i < modalButtons.length; i++) {
//   modalButtons[i].addEventListener("click", function () {
//     console.log("Checking...");
//   });
// }

// function closeModalFunc() {
//   overlay.classList.toggle("hidden");
//   modal.classList.toggle("hidden");
// }

const closeModalFunc = function () {
  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
};

modalButtons.forEach((e) =>
  e.addEventListener("click", function () {
    if (overlay.classList.contains("hidden") && modal.classList.contains("hidden")) {
      overlay.classList.remove("hidden");
      modal.classList.remove("hidden");
    }
  })
);

modalCloseBtn.addEventListener(
  "click",
  closeModalFunc
  //   overlay.classList.toggle("hidden");
  //   modal.classList.toggle("hidden");
  //   closeModalFunc();
);

overlay.addEventListener(
  "click",
  closeModalFunc
  //   overlay.classList.toggle("hidden");
  //   modal.classList.toggle("hidden");
  //   closeModalFunc();
);

// or document.addEventListener..
window.document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (modal.classList.contains("hidden")) {
      overlay.classList.remove("hidden");
      modal.classList.remove("hidden");
      // closeModalFunc();
    }
  }
});
