
const dateTo = new Date("Mar 30, 2020 09:00:00").getTime();

const x = setInterval(()=>{

    const now = new Date().getTime();

    const distance = dateTo - now;

    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerText = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

}, 100);