let button = document.querySelector("button")
let container = document.querySelector(".container");

function createGrid(rows, cols) {
    function random_color() {
        let o = Math.round, r = Math.random, s = 255;
        return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
    }
    
    container.style.display = 'grid'
    button.style.display = 'none'
    container.innerHTML = ""
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
    let gridItem = document.createElement("div");
    container.appendChild(gridItem).className = "gridItem";
    let placeColor = document.querySelectorAll(".gridItem");

    placeColor.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = `${random_color()}`;
            item.style.transition = ''
        });
    });

    placeColor.forEach(item => {
        item.addEventListener("mouseout", () => {
            item.style.backgroundColor = '#1b263b';
            item.style.transition = '2s'
        });
    });


  };
};


button.addEventListener('click', () => {
    var input = parseInt(prompt("how many rows and columns do you want? (max 20)"))
    if (input > 20){
        alert("too high, stay under 20");
    } else {
        createGrid(input, input);
    }
})