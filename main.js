let mainImg = document.querySelector("#main-img");
let pizzaNames = document.querySelector("#pizza-names");
let price = document.querySelector("#pizza-price");
let discount = document.querySelector("#discount-value")
let imgObects = [ 
    {
    src: "images/menuPizzaImages/pizza1.svg",
    name: "Челінтаніо (570 г.)",
    price: "139 грн.",
    discount: "-10%"
},
{
    src: "images/menuPizzaImages/pizza2.svg",
    name: "Полло Фрито (570 г.)",
    price: "189 грн.",
    discount: "-12%"
},
{
    src: "images/menuPizzaImages/pizza3.svg",
    name: "Пепперони (570 г.)",
    price: "139 грн.",
    discount: "-10%"
},
{
    src: "images/menuPizzaImages/pizza4.svg",
    name: "Карне Маис (570 г.)",
    price: "229 грн.",
    discount: "-13%"
},
{
    src: "images/menuPizzaImages/pizza5.svg",
    name: "Виладжио (570 г.)",
    price: "199 грн.",
    discount: "-10%"
},
{
    src: "images/menuPizzaImages/pizza6.svg",
    name: "Капоната (570 г.)",
    price: "139 грн.",
    discount: "-12%"
}
]
let numb = 0;
let forward = document.querySelector("#forward");
let back  = document.querySelector("#back");
 
forward.addEventListener("click", () => {
    if (numb == 5) numb = -1;
    numb++;
    mainImg.src = imgObects[numb].src;
    pizzaNames.textContent = imgObects[numb].name;
    price.textContent = imgObects[numb].price;
    discount.innerHTML = imgObects[numb].discount;
})
back.addEventListener("click", () => {
    if (numb <= 0) numb = 6;
    numb--;
    mainImg.src = imgObects[numb].src;
    pizzaNames.textContent = imgObects[numb].name;
    price.textContent = imgObects[numb].price;
    discount.innerHTML = imgObects[numb].discount;
})