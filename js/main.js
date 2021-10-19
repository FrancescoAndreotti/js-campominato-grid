const selectDifficolta = document.getElementById("difficolta");
const btnStart = document.getElementById("start-btn");
const boxContainer = document.querySelector(".box-container");

btnStart.addEventListener("click", function () {
    const level = selectDifficolta.value;

    const totalCells = getCellsNum(level);
    generateGrid(totalCells);
    console.log(totalCells, level);
});



function getCellsNum(level) {
    let result;

    switch (parseInt(level)) {
        case 1:
            result = 100;
            break;
        case 2:
            result = 81;
            break;
        case 3:
            result = 49;
            break;
    }

    return result;
}



function generateGrid(totalCells) {
    boxContainer.innerHTML = "";

    const perRowCells = Math.sqrt(totalCells);
    const cellSize = 100 / perRowCells;


    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("box");
        cell.style.width = cellSize + "%";
        cell.style.height = cellSize + "%";
        cell.textContent += `${i + 1}`;
        cell.addEventListener("click", singleCellClick);
        boxContainer.append(cell);
    }
}



function singleCellClick() {
    this.classList.toggle("active");
}
