const color = ["Green", "Red", "rgba(133,122,200)", "#f15025"];
let btn = document.getElementById("btn");
let col = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomnumber = getRandomNumber();
    document.body.style.backgroundColor = color[randomnumber];
    col.textContent = color[randomnumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * color.length);
}