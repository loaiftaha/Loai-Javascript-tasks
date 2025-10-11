const timeId = document.getElementById("timing");

setInterval(updateTime, 1000);

function updateTime() {
    const time = new Date();
    timeId.innerHTML = time.toLocaleTimeString();
}