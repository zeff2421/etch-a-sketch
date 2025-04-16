const WIDTH = 700;
const HEIGHT = 700;

// Function to deallocate memory of nodes in container
function removeContainerNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Creates a random color
function getNewColor() {
    // To get all combination of creating a hex code
    let symbols = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }

    return color;
}

let GRID_LENGTH;

let container = document.querySelector(".container");
let btn = document.querySelector("button");

let toggleButton = document.querySelector(".toggle-button");
let circle = document.querySelector(".circle");
let checkbox = document.getElementById("checkbox");

btn.addEventListener("click", () => {

    do {
        GRID_LENGTH = parseInt(prompt("Enter the number of squares per side: "));
    } while (GRID_LENGTH > 100 || !Number.isInteger(GRID_LENGTH))

    let count = GRID_LENGTH ** 2;

    if (container.hasChildNodes()) {
        removeContainerNodes(container);
    }

    // Creates squares to make up a grid
    while (count > 0){
        let grid = document.createElement("div");
        let grid_height = HEIGHT / GRID_LENGTH;
        let grid_width = WIDTH / GRID_LENGTH;

        grid.style.cssText = `height: ${grid_height}px; width: ${grid_width}px; box-sizing: border-box; border: .1px solid rgba(233, 233, 233, 0.19);`;
        container.appendChild(grid);

        count--;
    }

    let squareDivs = document.querySelectorAll(".container div");
    console.log(squareDivs);
    // Draw on the square hovered over
    squareDivs.forEach((div) => {
        div.style.opacity = 0;
        div.addEventListener("mouseover", () => {
            if (checkbox.checked) {
                div.style.opacity = 1;
                div.style.backgroundColor = getNewColor();
            }
            else if (div.style.opacity <= 1) {
                div.style.opacity = parseFloat(div.style.opacity) + 0.1;
                div.style.backgroundColor = "hsl(0, 0%, 0%)";
            }   
        })
    });
})

// Toggle button to allow rainbow randomizing colors
toggleButton.onclick = function() {
    if (checkbox.checked) {
        circle.style.left = "100px";

        toggleButton.style.background = "linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%)";
    }
    else {
        circle.style.left = "0px";
        toggleButton.style.background = "#808080";
    }
}