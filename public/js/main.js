let button = document.querySelector("button")
let container = document.querySelector(".container");
let input = document.querySelector("input");
let title = document.querySelector(".request")

function createGrid(rows, cols) {
    function random_color() {
        let o = Math.round, r = Math.random, s = 255;
        return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
    }
    
    container.style.display = 'grid'
    title.style.display = 'none';
    input.style.display = 'none';
    button.style.display = 'none';
    container.innerHTML = "";
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
    let gridItem = document.createElement("div");
    container.appendChild(gridItem).className = "gridItem";
    let placeColor = document.querySelectorAll(".gridItem");

    placeColor.forEach(item => {
        item.addEventListener("mouseover", () => {
            let actuColor = random_color();
            item.style.backgroundColor = `${actuColor}`;
            item.style.boxShadow = `0px 0px 22px ${actuColor}`;
            item.style.transition = '';
        });
    });

    placeColor.forEach(item => {
        item.addEventListener("mouseout", () => {
            item.style.backgroundColor = '#1b263b';
            item.style.boxShadow = 'none';
            item.style.transition = '2s';
        });
    });


  };
};


button.addEventListener('click', () => {
    if (input.value > 20 || input.value < 1){
        title.innerHTML = "stay between 1 and 20";
    } else {
        createGrid(input.value, input.value);
    }
})