document.getElementById("mut").addEventListener("click",()=>{
    const audios = document.querySelectorAll("audio");
    
    for (let i = 0; i < audios.length; i++) {
        audios[i].muted = true;
    }
})
var sco=document.getElementById("score1")

var aud=document.getElementById("aui")
var lineInterval ;  
var moveInterval;
var set1;
var set;
var resco;
var myWindow;
var coi
function openWin() {
    myWindow = document.getElementById("aud2")
    myWindow.play()
}
openWin() 
function closeWin() {
    
  myWindow.pause();
}

// console.log(myWindow);
document.getElementById("start1").addEventListener("click", () => {
    // Get the speed and car color values
    var carcol = document.getElementById("carcol");
    var speedInput = document.getElementById("speed");
    var speed = parseInt(speedInput.value, 10); // Convert speed to an integer

    // Check if both speed and car color are valid
    if (speed && carcol.value) {
        closeWin();

        var imgcrt = document.getElementById("imgcrt");
        imgcrt.src = carcol.value;
        // console.log("Selected color URL:", carcol.value);
        // console.log("Speed:", speed);

        // Start the game intervals
        lineInterval = setInterval(createLine, speed - 200);
        moveInterval = setInterval(moveLines, speed);
        set1 = setInterval(create1, speed);
        set = setInterval(move, 50);
        document.getElementById("ins").classList.add("dno");

        // Play the audio and show the game screen
        aud.play();
        document.getElementById("dnone").style.display = "block";

        // Initialize score
        var num1 = 0;
        var co;
        // Function to update score and levels
        function fnscre() {
          co=document.getElementById("coins");
            sco.innerHTML = num1;
            num1++;
            if (num1 > 100) {
                co.innerHTML = 1;
                resco=co.innerHTML;
            } if (num1 > 200) {
                co.innerHTML = 2;
                resco=co.innerHTML;
            } if (num1 > 300) {
                co.innerHTML = 3;
                resco=co.innerHTML;
            } if (num1 > 400) {
                co.innerHTML = 4;
                resco=co.innerHTML;
            } if (num1 > 500) {
                co.innerHTML = 5;
                resco=co.innerHTML;
            }
        }

        // Start score updating
        coi = setInterval(fnscre, 200);
    } else {
        // Show an error or alert if inputs are not valid
        alert("Please select both a car color and speed.");
    }
});
var createarr = [];
var linearr = [];
var num=1


function create1() {

    //  intro.pause()

    var road = document.getElementById("road");
    var creat = document.createElement("div");
    var line=document.createElement("div")
    
    line.className="line";
    creat.className = "oppo"; 
    creat.style.left = Math.floor(Math.random() * (road.offsetWidth - 55)) + "px";
    creat.style.top = "0px";
    // creat.style.backgroundImage=`${carcol}`;
    creat.style.backgroundImage=`url(assets/car${num}.png)`;
    num++
    if(num>3){
        num=1
    }
    road.appendChild(line)
    road.appendChild(creat);
    createarr.push(creat);
    linearr.push(line);
}
function createLine() {
    var road = document.getElementById("road");
    var line = document.createElement("div");
    line.className = "line"; 
   
    road.appendChild(line);
    linearr.push(line);
}
function moveLines() {
    var road = document.getElementById("road");
    for (let i = 0; i < linearr.length; i++) {
        var lineoce = linearr[i];
        var linpos = parseInt(lineoce.style.top) || 0;
        var newlinepos = linpos + 10;
        lineoce.style.top = newlinepos + "px";

        
        if (newlinepos > road.offsetHeight - 80) {
            road.removeChild(lineoce);
            linearr.splice(i, 1);
            i--; 
        }
    }
}
// var lineInterval = setInterval(createLine, 1000);
// var moveInterval = setInterval(moveLines, 100);


function move(){
    var road = document.getElementById("road");


    for(let i=0;i<createarr.length;i++){
        var once=createarr[i]
        var pos=parseInt(once.style.top )|| 0
        var newpos=pos + 10;
        once.style.top=newpos+"px"
        
   

if(coll(car,once)){
    endwe()
return
}
if(newpos > road.offsetHeight - 45){
    road.removeChild(once)
createarr.splice(i,1)
i--;
}

    }
}

// var set1=setInterval(create1,1500)
// var set=setInterval(move,50)
function endwe(){
    clearInterval(set)
    clearInterval(set1)
}

function right(){
    var road = document.getElementById("road");
    var car=document.getElementById("car")
    var pos=parseInt(car.style.left )|| 0;
    var currpos=Math.min(pos + 20,road.offsetWidth-car.offsetWidth)
    car.style.left=currpos+"px"
}
function left(){
    var road = document.getElementById("road");
    var car=document.getElementById("car")
    var pos=parseInt(car.style.left )|| 0;
    var currpos=Math.max(pos -20 ,0)

        car.style.left=currpos+"px"
}
function bottom(){
    var car=document.getElementById("car")
    var pos=parseInt(car.style.bottom || 0)

    var currpos=Math.max(pos-10,40)

    car.style.bottom=currpos+"px"
    
}
function up(){
    var car=document.getElementById("car")
    var pos=parseInt(car.style.bottom || 0)
    var currpos=pos+10
    car.style.bottom=currpos+"px"
    
}
function coll(car,once){
    var aud1=document.getElementById("aud1")
    var carRect=car.getBoundingClientRect();
    var onceRect=once.getBoundingClientRect();
    if(
        carRect.top<=onceRect.bottom &&
        carRect.bottom>=onceRect.top&&
        carRect.left<=onceRect.right &&
        carRect.right>=onceRect.left
    ){

        aud1.play()
        endgame()
        // alert("Game Over")
        return true;
    }
    else{
        return false
    }
}
document.addEventListener("keydown",(e)=>{
   
    if(e.key === "ArrowRight"){
right()
    }
   else if(e.key === "ArrowLeft"){
        left()
            }
            else     if(e.key === "ArrowDown"){
                bottom()
                    }
                    else    if(e.key === "ArrowUp"){
                        up()
                            }
})

function endgame(){
    // var road=document.getElementById("road")
    var div=document.getElementById("re")
    // div.style.display="flex"
    // div.id="re"
    div.classList.add("re")
    // div.style.backgroundColor="#ffa04de5"
    // console.log(resco);
    
    div.innerHTML=`

          <h3>Your Score Is :${sco.innerHTML}</h3>

          <button onclick="resetyy()">Play Again</button>
     
          `
    // road.appendChild(div)
    clearInterval(lineInterval)
    clearInterval(moveInterval)
    clearInterval(set)
    clearInterval(set1)
    clearInterval(coi)
    aud.pause()

}
// document.getElementById("rest").addEventListener("click",()=>{
    // })
    function resetyy(){
        location.reload()

}
document.getElementById("right").addEventListener("click",()=>{
    right()
})
document.getElementById("left").addEventListener("click",()=>{
    left()
})
// document.getElementById("up").addEventListener("click",()=>{
//     up()
// })
// document.getElementById("bottom").addEventListener("click",()=>{
//     bottom()
// })
