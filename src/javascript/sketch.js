const gridSize = 16 * 16;
const container = document.querySelector('#container')


for (let i = 0; i < gridSize; i++) {
    let grid = document.createElement("div")
    grid.style.flexWrap = "wrap";
    grid.style.flexGrow = "1";
    grid.style.borderColor = "#000000";

    grid.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = "#424123"
    })

    container.appendChild(grid);
}