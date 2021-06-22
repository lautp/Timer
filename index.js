const startButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const durationInput = document.querySelector("#time");
const circ = document.querySelector("#circ");
const perimeter = circ.getAttribute("r") * Math.PI * 2;
circ.setAttribute("stroke-dasharray", perimeter);

let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
       duration = totalDuration;
    },
    onTick(timeRemaining){
        
        circ.setAttribute("stroke-dashoffset", 
        perimeter * timeRemaining / duration - perimeter
        );
    },
    onComplete(){
        
    }
});