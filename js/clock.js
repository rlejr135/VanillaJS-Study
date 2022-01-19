const clockMain = document.querySelector("#clock");

function GetClock() {
  const date = new Date();
  const Hours = String(date.getHours()).padStart(2, "0");
  const Min = String(date.getMinutes()).padStart(2, "0");
  const Secs = String(date.getSeconds()).padStart(2, "0");
  clockMain.innerText = `${Hours} : ${Min} : ${Secs}`;
}

GetClock();
setInterval(GetClock, 1000);
