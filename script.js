let size = 16;

const row = document.querySelector(".row");
const container = document.querySelector(".container");
function createContainer() {

    let row = document.createElement("div");
    row.classList.add('row');
    container.appendChild(row);

    for (i = 0; i <= size-1; i++) {
        let div = document.createElement("div");
        row.appendChild(div);
    }
    
    for (i = 0; i <= size-2; i++) {
        let row = document.querySelector(".row");
        container.appendChild(row.cloneNode(true));
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
}

let sizeBtn = document.querySelector(".sizeButton")

sizeBtn.addEventListener('click', () => {
    size = parseInt(prompt("Enter size of grid!"));
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    };
    createContainer();
})

createContainer();