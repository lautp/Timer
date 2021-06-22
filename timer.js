class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.ongoing = false;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.stop)
        this.durationInput.addEventListener('input', this.onDurationChange )
        
    }
    
    start = () => {
        if (this.ongoing === true) {
            return;
        }else{
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        durationInput.setAttribute("value", `${durationInput.value}`);
        this.clocky = setInterval(this.tick, 50);
        this.ongoing = true
        }
    }
    
    tick = () => {
        
        if (durationInput.value> 0) {
            this.timeRemaining = this.timeRemaining - 0.05;

            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
            
        }else{
            
            clearInterval(this.clocky);
            this.ongoing = false;
            
        }
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);
        durationInput.setAttribute("value", `${durationInput.value}`);
    }
    
    stop = () => {
       
        clearInterval(this.clocky);
        this.ongoing = false; 
        
    }
    
    onDurationChange= () => {
        
        clearInterval(this.clocky)
        this.ongoing = false;
        
    }
    
    
    
}