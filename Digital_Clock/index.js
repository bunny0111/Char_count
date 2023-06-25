const hourEl = document.getElementById("hour")          //El = Element
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("meridian")

function clock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "PM";

    if(h>12){
        h = h - 12;
        ampm = "AM";
    }

    h = h<10 ? "0" + h : h;                     // : is otherwise h
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(()=>{
        clock()
    }, 1000)            //1000 = millisecond
}

clock()