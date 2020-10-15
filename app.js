// Define variables to hold seconds, minutes, and hours

let seconds = 0
let minutes = 0
let hours = 0

// Define variables for leading zeros
let showSeconds = 0
let showMinutes = 0
let showHours = 0

// make variable to hold status of start stopwatch
let begin = false
let myTime;

// Make variable to hold reset values
let reset = document.getElementById("reset")

// Make stopwatch function to handle incrementing logic
function stopWatch() {
    seconds++

    if (seconds/60 === 1) {
        seconds = 0;
        minutes++
        if (minutes/60 === 1) {
            minutes = 0;
            hours++
        }
    }

    if (seconds < 10) {
        showSeconds = "0" + seconds.toString()
    } else {
        showSeconds = seconds
    }

    if (minutes < 10) {
        showMinutes = "0" + minutes.toString()
    } else {
        showMinutes = minutes
    }

    if (hours < 10) {
        showHours = "0" + hours.toString()
    } else {
        showHours = hours
    }

    // grab display id from index.html & use variables to update count
    let count = document.getElementById("timer")
    count.innerHTML = showHours + ":" + showMinutes + ":" + showSeconds
}

// Make function to control start stopwatch button
function handleStart() {
    if (!begin) {
        myTime = window.setInterval(stopWatch, 1000)
        document.getElementById("startStop").innerHTML = "Stop"
        begin = true
        reset.style.display = "none"
    } else {
        window.clearInterval(myTime)
        document.getElementById("startStop").innerHTML = "Start"
        begin = false
        reset.style.display = "inline"
    }
}

// Make function to handle rest button
function handleReset() {
    window.clearInterval(myTime)
    seconds = 0
    minutes = 0
    hours = 0
    document.getElementById("timer").innerHTML = "00:00:00"
    document.getElementById("startStop").innerHTML = "Start"
}