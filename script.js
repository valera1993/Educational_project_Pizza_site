let count = 1;
let span = document.querySelector(".menu-span");
let menuBack = document.querySelector("#menu-back");
let menuForward = document.querySelector("#menu-forward");
let mainBox = document.querySelector(".main-box");
let imagesArr = [
  "images/menuPizzaImages/pizza1.svg",
  "images/menuPizzaImages/pizza2.svg",
  "images/menuPizzaImages/pizza3.svg",
  "images/menuPizzaImages/pizza4.svg",
  "images/menuPizzaImages/pizza5.svg",
  "images/menuPizzaImages/pizza6.svg",
  "images/menuPizzaImages/pizza1.svg",
  "images/menuPizzaImages/pizza2.svg",
  "images/menuPizzaImages/pizza3.svg",
  "images/menuPizzaImages/pizza6.svg",
  "images/menuPizzaImages/pizza5.svg",
  "images/menuPizzaImages/pizza4.svg",
  "images/menuPizzaImages/pizza3.svg",
  "images/menuPizzaImages/pizza2.svg",
  "images/menuPizzaImages/pizza1.svg",
  "images/menuPizzaImages/pizza4.svg",
  "images/menuPizzaImages/pizza5.svg",
  "images/menuPizzaImages/pizza6.svg",
  "images/menuPizzaImages/pizza1.svg",
  "images/menuPizzaImages/pizza2.svg",
  "images/menuPizzaImages/pizza3.svg",
  "images/menuPizzaImages/pizza4.svg",
  "images/menuPizzaImages/pizza5.svg",
  "images/menuPizzaImages/pizza6.svg",
  "images/menuPizzaImages/pizza3.svg",
  "images/menuPizzaImages/pizza2.svg",
  "images/menuPizzaImages/pizza1.svg",
  "images/menuPizzaImages/pizza1.svg",
  "images/menuPizzaImages/pizza1.svg",
  "images/menuPizzaImages/pizza5.svg",
  "images/menuPizzaImages/pizza6.svg",
];
let pages;
let menu;
let start = 0;
let end = 9;
for (let i = 0; i < imagesArr.length; i++) {
  pages = Math.ceil(i / 9);
}

class CreateMenu {
  constructor(start, end) {
    this.i = start;
    this.end = end;
  }
  craeteDiv() {
    for (this.i; this.i < this.end; this.i++) {
      if (imagesArr[this.i] == undefined) continue;
      let div = document.createElement("div");
      div.classList.add("menu-box");
      let img = document.createElement("img");
      img.src = imagesArr[this.i];
      img.classList.add("menu-img");
      let h3 = document.createElement("h3");
      h3.textContent = "Lorem ipsum";
      h3.classList.add("menu-h3");
      let para = document.createElement("p");
      para.textContent =
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et.";
      para.classList.add("menu_para");
      let paraPrice = document.createElement("p");
      paraPrice.textContent = "120 грн";
      paraPrice.classList.add("menu_price");
      let btn = document.createElement("button");
      btn.textContent = "Lorem ipsum";
      btn.classList.add("menu_btn");
      div.append(img, h3, para, paraPrice, btn);
      mainBox.append(div);
    }
  }

  reset() {
    let divs = document.querySelectorAll(".menu-box");
    for (let i = 0; i < divs.length; i++) {
      divs[i].remove();
    }
  }
}

window.addEventListener("load", () => {
  menu = new CreateMenu(start, end);
  menu.craeteDiv();
  span.textContent = count + "/" + pages;
});

menuBack.addEventListener("click", function () {
  if (count == 1) {
    return;
  } else {
    end = end - 9;
    start = start - 9;
  }
  menu.reset();
  menu = new CreateMenu(start, end);
  menu.craeteDiv();
  count--;
  span.textContent = count + "/" + pages;
});

menuForward.addEventListener("click", function () {
  if (count >= pages) {
    return;
  } else {
    if (count == 1) {
      end = 18;
      start = 9;
    } else {
      end = end + 9;
      start += 9;
    }
  }
  menu.reset();
  menu = new CreateMenu(start, end);
  menu.craeteDiv();
  count++;
  span.textContent = count + "/" + pages;
});
