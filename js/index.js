function Timer() {
    this.hour = 0;
    this.minute = 0;
    this.second = 0;

    this.run_positive = function(show) {
        this.state = 1;
        show.style.color = "rgb(35, 149, 224)";
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

    this.stop = function(show) {
        this.state = 0;
        show.style.color = "rgb(219, 77, 77)";
        clearInterval(timer.interval);
    }
}

var show = document.getElementById("show-time");
var timer = new Timer();
timer.run_positive(show);

window.onkeydown = function(event) {
    // alert(event.keyCode);
    if (event.keyCode == 32) {
        if (timer.state == 1) {
            timer.stop(show);
        } else {
            timer.run_positive(show);
        }
    }
}