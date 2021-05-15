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
            this.minute = this.minute % 60;
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
var bcakgroundFlag = 0;
// timer.run_positive(show);

var setting = document.getElementById("box-setting");
var head = document.getElementById("setting-head");
var settingFlag = 0;

window.onkeydown = function(event) {
    // alert(event.keyCode);
    if (event.keyCode == 32) { // Space
        if (timer.state == 1) {
            timer.stop(show);
        } else {
            timer.run_positive(show);
        }
    } else if (event.keyCode == 16) { // Shift
        if (bcakgroundFlag == 0) {
            document.body.style.backgroundColor = "white";
        } else {
            document.body.style.backgroundColor = "rgb(11, 40, 66)";
        }
        bcakgroundFlag = 1 - bcakgroundFlag;
    } else if (event.keyCode == 27) { // Esc
        if (settingFlag == 0) {
            setting.style.display = "block";
        } else {
            setting.style.display = "none";
        }
        settingFlag = 1 - settingFlag;
    }
}

head.onmousedown = function(event) {
    var mouseRelateX = event.pageX - setting.offsetLeft;
    var mouseRelateY = event.pageY - setting.offsetTop;

    // console.log(mouseRelateX + " - " + mouseRelateY);
    head.onmousemove = function(event) {
        var positionX = event.pageX - mouseRelateX;
        var positionY = event.pageY - mouseRelateY;

        setting.style.left = positionX + "px";
        setting.style.top = positionY + "px";
        console.log(positionX + " - " + positionY);
    }
}

head.onmouseup = function(event) {
    head.onmousemove = null;
}