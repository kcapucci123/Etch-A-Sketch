

const container = document.querySelector(".container");
const div = document.createElement("div");
div.className = "div";
container.appendChild(div);




function grid (r, color) {
    const containerSize = 500; // Adjust this to your preferred container size
            const gridSize = `${containerSize / r}px`;
    for (let i = 0; i < r; i++) {
        const Rowdiv = document.createElement("div");
        Rowdiv.appendChild(document.createTextNode(""));
        Rowdiv.className = "row";

    
         for (let j=0; j < r; j++) {
            
            const Columndiv = document.createElement("div");  
            Columndiv.style.width = gridSize;
            Columndiv.style.height = gridSize;
            Columndiv.className = "column";   
            Columndiv.appendChild(document.createTextNode(""));
            Rowdiv.appendChild(Columndiv); 
            Columndiv.addEventListener('mouseover', () => {
                Columndiv.style.background = color;
            })
            Columndiv.addEventListener('mouseout', () => {
                Columndiv.style.background = "";
            })
        
            }

            div.appendChild(Rowdiv);
           
            
    
    }
    
}

grid(16, "white");




function changeGrid () {
    let choices = prompt("Change the # of squares on each side, enter an integer between 1-100");
    
    if(choices === null) {
        div.innerHTML = "";
        grid(16,"white");
    }else if(choices <= 100) {
        div.innerHTML = "";
        grid(choices, "white");
    }else {
        alert("Invalid, you must enter an integer between 1-100");
        div.innerHTML = "";
        grid(16,"white");
    }
}



const button = document.querySelector(".button");
button.addEventListener("click", changeGrid);



//random color when "Rainbow Grid" button is clicked:
const Mono = document.querySelector(".MonoButton");
const RainbowButton = document.querySelector(".RainbowButton");

function changeColor () {
    
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    let columndivs = document.querySelectorAll(".column");
    columndivs.forEach((Columndiv) => {
        Columndiv.addEventListener("mouseover", function () {

            Columndiv.style.background = getRandomColor();
        })
    });
    
}


function MonoColor () {
    let columndivs = document.querySelectorAll(".column");
    columndivs.forEach((Columndiv) => {
        Columndiv.addEventListener("mouseover", function () {

            Columndiv.style.background ="white";
        })

})
};
RainbowButton.addEventListener("click", changeColor);
Mono.addEventListener("click", MonoColor);























