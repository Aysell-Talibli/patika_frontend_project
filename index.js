
function myfunction() {
let name=prompt("Adiniz nedir?");
 
while (name.length === 0) {
        alert("Lutfen adinizi girin");
        name=prompt("Adiniz nedir?");
        }
    document.getElementById("name").innerHTML = name
    showtime();
   
 }
function showtime() {
    const d = new Date();
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba",
        "Perşembe", "Cuma", "Cumartesi"];
    let day = days[d.getUTCDay()];
    let hours = d.getHours();
    if (hours < 10) {
        hours=`0${hours}`
    }
    let minutes = d.getMinutes();
    if (minutes < 10) {
        minutes=`0${minutes}`
    }
    let seconds = d.getSeconds();
    if (seconds< 10) {
        seconds = `0${seconds} `
    }
    let time = `${hours}: ${minutes}: ${seconds} ${day}`
    document.querySelector("#date").innerHTML=time
}

