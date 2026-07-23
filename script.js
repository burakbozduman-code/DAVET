const buton = document.getElementById("ac");
const davet = document.getElementById("davet");
const loading = document.querySelector(".loading");

buton.onclick = function () {
    loading.style.display = "none";
    davet.style.display = "block";
}

const hedef = new Date("2026-08-30T20:00:00").getTime();

function geriSayim() {

    const simdi = new Date().getTime();

    const fark = hedef - simdi;

    const gun = Math.floor(fark / (1000 * 60 * 60 * 24));

    const saat = Math.floor((fark % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const dakika = Math.floor((fark % (1000 * 60 * 60)) / (1000 * 60));

    const saniye = Math.floor((fark % (1000 * 60)) / 1000);

    document.getElementById("sayac").innerHTML =
        gun + " Gün " +
        saat + " Saat " +
        dakika + " Dakika " +
        saniye + " Saniye";
}

setInterval(geriSayim,1000);
geriSayim();
