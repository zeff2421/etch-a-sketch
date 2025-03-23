const WIDTH = 900;
const HEIGHT = 900;

let GRID_LENGTH = 16;
let count = GRID_LENGTH ** 2;

let container = document.querySelector(".container");

while (count > 0){
    let grid = document.createElement("div");
    let grid_height = HEIGHT / GRID_LENGTH;
    let grid_width = WIDTH / GRID_LENGTH;

    grid.style.cssText = `height: ${grid_height}px; width: ${grid_width}px; border: .1px dashed #EBECF0; box-sizing: border-box;`;
    container.appendChild(grid);

    count--;
}

let squareDivs = document.querySelectorAll(".container div");
console.log(squareDivs);

squareDivs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#808080";
    })
});
