const WIDTH = 700;
const HEIGHT = 700;

let GRID_LENGTH;


let container = document.querySelector(".container");
let btn = document.querySelector("button");

window.addEventListener("load", () => {
    GRID_LENGTH = parseInt(prompt("Enter the number of squares per side: "));

    let count = GRID_LENGTH ** 2;

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

    squareDivs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "#808080";
        })
    });
})

btn.addEventListener("click", () => {
    window.location.reload();
})
