var timerEventId;

var arrayImg = new Array();
arrayImg[0] = "100x100";
arrayImg[1] = "150x150";
arrayImg[2] = "200x200";
arrayImg[3] = "250x250";
arrayImg[4] = "300x300";
arrayImg[5] = "350x350";
arrayImg[6] = "400x400";

function getRandomImage(imgAr, path) {
    path = path || 'http://fpoimg.com/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}

function publishTimer(timer) {
    "use strict";
    /*jslint browser:true */

    var timerElement;

    timerElement = document.getElementById('timerText');
    timerElement.innerHTML = timer;
    document.title = "[" + timer + "] Pomodoro Timer";
}

function countdown(interval) {
    "use strict";
    /*jslint browser:true */

    var alarmElement, endTime;

    function formatTimeSegment(segment) {
        if (segment.toString().length < 2) {
            segment = "0" + segment;
        }

        return segment;
    }

    function setTimer() {
        var formattedTime, timeLeft, hours, minutes, seconds;
        timeLeft = new Date(endTime - new Date().getTime());

        if (timeLeft.getTime() < 1000) {
            formattedTime = "00:00";
            publishTimer(formattedTime);
            clearInterval(timerEventId);
            alarmElement.currentTime = 0;
            alarmElement.play();
        } else {
            hours = timeLeft.getUTCHours();
            minutes = formatTimeSegment(timeLeft.getUTCMinutes());
            seconds = formatTimeSegment(timeLeft.getUTCSeconds());
            formattedTime = (hours ? hours + ":" + minutes : minutes) + ":" + seconds;
            publishTimer(formattedTime);
        }
    }

    clearInterval(timerEventId);
    alarmElement = document.getElementById('alarm');
    alarmElement.pause();
    endTime = new Date().getTime() + (1000 * interval) + 1000;
    timerEventId = setInterval(setTimer, 1000);
}

window.onload = function () {
    "use strict";

    publishTimer("00:00");
    
    getRandomImage(arrayImg, "");
    
};
