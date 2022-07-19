let size = 16;
const row = document.querySelector(".row");
const container = document.querySelector(".container");
for (i = 0; i <= size-1; i++) {
    let div = document.createElement("div");
    row.appendChild(div);
}

for (i = 0; i <= size-1; i++) {
    let row2 = document.querySelector(".row");
    container.appendChild(row2.cloneNode(true));
}

let boxNodeList = document.querySelectorAll(".row>div")

boxNodeList.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'yellow'
    })

});

let resetBtn = document.querySelector(".resetButton")

resetBtn.addEventListener('click', () => {
    boxNodeList.forEach(box => {
        box.style.backgroundColor = ''
    })
})

let sizeBtn = document.querySelector(".sizeButton")

sizeBtn.addEventListener('click', () => )