//========================================================================================================================================================================
//========================================================================================================================================================================
const burger = document.querySelector(".header__burger");
const header = document.querySelector(".header");

burger.addEventListener("click", () => {
  header.classList.toggle("active");
  burger.classList.toggle("active");
  document.body.classList.toggle("lock");
});

//========================================================================================================================================================================
//========================================================================================================================================================================
function smoothScroll(target) {
  const element = document.querySelector(target);
  const headerHeight = document.querySelector(".header__row").offsetHeight;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - headerHeight;

  window.scrollBy({
    top: offsetPosition,
    behavior: "smooth",
  });
}

document
  .querySelectorAll(".navigation__list_home .navigation__link")
  .forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      smoothScroll(item.getAttribute("href"));
      document.querySelector(".header__row").classList.remove("active");
      document.querySelector(".header").classList.remove("active");
      document.body.classList.remove("lock");
      document.querySelector(".header__burger").classList.remove("active");
    });
  });

//========================================================================================================================================================================
//========================================================================================================================================================================

const slider = document.getElementById("slider");

if (slider) {
  noUiSlider.create(slider, {
    start: [0, 2000],
    connect: true,
    range: {
      min: 0,
      max: 5000,
    },
  });

  const input0 = document.getElementById("input-0");
  const input1 = document.getElementById("input-1");
  const inputs = [input0, input1];

  slider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });
}

//========================================================================================================================================================================
//========================================================================================================================================================================
let tabs = document.querySelectorAll(".tabs__item");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function (e) {
    e.preventDefault();

    tabs.forEach(function (t) {
      t.classList.remove("active");
    });

    this.classList.add("active");

    let targetId = this.getAttribute("href").substring(1);
    let targetTab = document.getElementById(targetId);

    if (targetTab) {
      let tabBlocks = document.querySelectorAll(".tabs__block");
      tabBlocks.forEach(function (block) {
        block.style.opacity = "0";
        block.style.position = "absolute";
        // block.style.display = "none";
      });

      // targetTab.style.display = "flex";
      targetTab.style.opacity = "1";
      targetTab.style.position = "static";
    }
  });
});

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   static getNameLenght() {
//     return "admin";
//   }
// }
// const std = new User("Alex");
// console.log(User.getNameLenght("Alex"));
// let a = 1;

// (function () {
//   console.log(`${a}`);
// })();
// const student = new User();

// student.name = "      kOsTiA";

// console.log(student);
// console.log(student.name);

// class User2 extends User {}

// const student2 = new User2();

// student2.name = "ol eg";

// console.log(student2);
