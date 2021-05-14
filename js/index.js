console.log("debug");
var show = document.getElementById("show-time");
var timer = new Timer();
timer.run_positive(show);

function Timer() {
    this.hour = 0;
    this.minute = 0;
    this.second = 0;

    this.run_positive = function(show) {
        
        this.interval = setInterval(() => {
            this.second += 1;
            this.minute += Math.floor(this.second / 60);
            this.second = this.second % 60;
            this.hour += Math.floor(this.minute / 60);
            this.show(show);
        }, 1000);
    };

    this.show = function(show) {
        var time = "";
        time += (this.hour < 10 ? "0" : "") + this.hour + ":";
        time += (this.minute < 10 ? "0" : "") + this.minute + ":";
        time += (this.second < 10 ? "0" : "") + this.second;
        show.innerHTML = time;
    };
}

