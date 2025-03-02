let colors = ["red", "blue", "green", "yellow", "purple"]; // Define colors
let index = 0;
let interval;

function changeBackgroundColor() {
    if (interval) return; 
    
    interval = setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length; 
    }, 1000); 
}

document.addEventListener("DOMContentLoaded", () => {
    let image = document.getElementById("bg-change");
    if (image) {
        image.addEventListener("click", changeBackgroundColor);
    }
});

const backButton = document.getElementById("back-desk");
if (backButton) {
    backButton.addEventListener("click",() => {
        window.location.href = "index.html";
    });
}