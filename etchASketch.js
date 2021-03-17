const container = document.querySelector('#container');
const resetGrid = document.querySelector('#resetGrid');

let pixelInUse = 500;
var gridNumber = 1;

function createGrid(gridNumber){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    

    for(let i=0; i<(gridNumber*gridNumber); i++){
        const content = document.createElement('div');
        content.classList.add('content');
        content.id="pixelGrid";
        container.appendChild(content);
    }
    
    let a=pixelInUse/gridNumber;
    
    document.getElementById("container").style.display = "grid";
    document.getElementById("container").style.gridTemplateColumns = "repeat("+gridNumber+","+a+"px)";
    document.getElementById("container").style.gridTemplateRows = "repeat("+gridNumber+","+a+"px)";
}

function updateGrid(){
    gridNumber = prompt("How many squares per side do you want? (1-100)", 16);
    if(gridNumber>100){gridNumber=100;}
    else if(gridNumber<1){gridNumber=1;}
    createGrid(gridNumber);
    const pixelGrid = document.querySelector('#pixelGrid');
    $(document).ready(function(){
        $("div").hover(function(){
            if(this.id=="pixelGrid"){  
                $(this).css("background-color", 
                    "rgb("+Math.floor((255*Math.random()))+","+Math.floor((255*Math.random()))+","
                        +Math.floor((255*Math.random()))+")");
            }
        });
    });
}

resetGrid.addEventListener('click', function (e) {
    updateGrid();
});

//Grid initialization
updateGrid();