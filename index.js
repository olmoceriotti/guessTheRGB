function Color(red, green, blue){
    this.red = red,
    this.green = green,
    this.blue = blue,
    this.rgb = "" + red + ", " + green + ", " + blue + ""
}



var level = 0
var start = 1
var colors =[]
var start = document.querySelector(".start")
var points
var changedDifficult = 0
var isStarted = false

function randomColor(){
    return Math.floor(Math.random() * 256)
}

/*Level Selector*/

for(i=0; i < document.querySelectorAll(".diff").length; i++){
    document.querySelectorAll(".diff")[i].addEventListener("click", function(){
        if(isStarted != true){
                if(changedDifficult != 0){
                    for(r = 0; r < 3; r++){
                        document.querySelectorAll(".diff")[r].classList.remove("buttonClicked")
                    }
                    this.classList.toggle("buttonClicked")
                }else{
                    this.classList.toggle("buttonClicked")
                }
                
                switch (this.innerHTML){
                    case "EASY":
                        level = 3;
                        break;
                    case "NORMAL":
                        level = 6;
                        break;
                    case "HARD":
                        level = 12;
                        break;
                    default:
                        level = 0
                }
                changedDifficult = 1
                console.log(level)
        }
    })
}



start.addEventListener("click", function(){
    if (level != 0 && isStarted != true){
        points = 0
        for(i = 0; i < 6; i++){
            element = document.querySelector(".color" + i)
            element.remove()
        }
        isStarted = true
        guessTheRgb()
    }
})


function guessTheRgb(){
    if(points != 0){
        for(i = 0; i < level; i++){
            element = document.querySelector(".color" + i)
            element.remove()
        }
    }
    for(i = 0; i < level; i++){
        node = document.createElement("DIV")
        document.querySelector(".colors").appendChild(node)
        console.log(document.querySelector(".colors").lastChild)
        document.querySelector(".colors").lastChild.classList.add("color" + i, "color")
        colors[i] = new Color(randomColor(), randomColor(), randomColor())
        elementBox = document.querySelector(".color" + i)
        elementBox.style.backgroundColor = "rgb("+ colors[i].red +"," +  colors[i].green + "," + colors[i].blue + ")"
        elementBox.classList.remove("boxStyle1")
        elementBox.addEventListener("click", function(){
            if(this.classList.contains(result)){
                points = points + 1
                document.querySelector(".points").innerHTML = "Points: " + points
                guessTheRgb()
            }else{
                alert("Oh no!")
                document.location.reload()
            }
        })
    }
    indexOfResult = Math.floor(Math.random() * level);
    start.innerHTML = colors[indexOfResult].rgb
    result = "color" + indexOfResult
    console.log(result)
}




