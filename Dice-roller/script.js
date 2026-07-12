const dice = document.getElementById("dice");
const result = document.getElementById("result");
const button = document.getElementById("rollBtn");

const diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

button.addEventListener("click", () => {

    dice.style.transform = "rotate(360deg)";

    setTimeout(() => {

        const randomNumber = Math.floor(Math.random() * 6);

        dice.textContent = diceFaces[randomNumber];

        result.textContent = `You rolled ${randomNumber + 1}`;

        dice.style.transform = "rotate(0deg)";

    },300);

});