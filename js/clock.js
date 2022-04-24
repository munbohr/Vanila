const clock = document.querySelector("#clock")

function Clock() {
    const Time= new Date()
    clock.innerHTML = `${String(Time.getHours()).padStart(2,"0")}:${String(Time.getMinutes()).padStart(2, "0")}:${String(Time.getSeconds()).padStart(2,"0")} `
}

setInterval(Clock, 1000);