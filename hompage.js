

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
    
    if(choices <= 100) {

        div.innerHTML = "";
        grid(choices);

    
    } else {
        alert("Invalid, you must enter an integer between 1-100");
        div.innerHTML = "";
        grid(16,16);
    }

}


const button = document.querySelector(".button");
button.addEventListener("click", changeGrid);


const rainbow = document.querySelector(".Rainbow");
rainbow.addEventListener("click", )

























