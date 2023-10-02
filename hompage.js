

const container = document.querySelector(".container");
const div = document.createElement("div");
div.className = "div";




function grid (r) {
    for (let i = 0; i < r; i++) {
        // const Rowdiv = document.createElement('div');
        // const div = document.createElement("div");
        // div.className = "div";
        const Rowdiv = document.createElement("div");
        Rowdiv.appendChild(document.createTextNode(""));
        Rowdiv.className = "row";
        // for (let j=0; j < c; j++) {
            // const div = document.createElement("div");
            // div.className = "div";
            for (let j=0; j < r; j++) {
            const Columndiv = document.createElement("div");  
            Columndiv.className = "column";   
            Columndiv.appendChild(document.createTextNode(""));
            Rowdiv.appendChild(Columndiv); 
            }
     
            
        // }  
        
        div.appendChild(Rowdiv);
        container.appendChild(div);
    }
       
        
}

grid(16);



















