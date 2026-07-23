const basla = document.getElementById("basla");
const loader = document.getElementById("loader");
const site = document.getElementById("site");

site.style.display = "none";

basla.addEventListener("click", () => {
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
        site.style.display = "block";

        site.animate([
            {opacity:0, transform:"translateY(40px)"},
            {opacity:1, transform:"translateY(0)"}
        ],{
            duration:1000,
            fill:"forwards"
        });
setTimeout(() => {

    window.scrollTo({
        top: 300,
        behavior: "smooth"
    });

    setTimeout(() => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1500);

}, 1000);
    },600);
});

const hedef = new Date("2026-08-30T20:00:00").getTime();

function geriSayim(){

    const simdi = new Date().getTime();

    const fark = hedef - simdi;

    if(fark<=0){

        document.getElementById("sayac").innerHTML="🎉 Bugün Düğünümüz 🎉";

        return;
    }

    const gun=Math.floor(fark/(1000*60*60*24));

    const saat=Math.floor((fark%(1000*60*60*24))/(1000*60*60));

    const dakika=Math.floor((fark%(1000*60*60))/(1000*60));

    const saniye=Math.floor((fark%(1000*60))/1000);

    document.getElementById("sayac").innerHTML=
    gun+" Gün<br>"+
    saat+" Saat "+
    dakika+" Dakika "+
    saniye+" Saniye";
}

setInterval(geriSayim,1000);

geriSayim();
const muzik = document.getElementById("muzik");
const muzikButon = document.getElementById("muzikButon");

let caliyor = false;

muzikButon.onclick = () => {

if(!caliyor){

muzik.play();

muzikButon.innerHTML="🔇 Müziği Kapat";

caliyor=true;

}else{

muzik.pause();

muzikButon.innerHTML="🎻 Müziği Aç";

caliyor=false;

}

}
setTimeout(() => {

window.scrollTo({
top:120,
behavior:"smooth"
});

setTimeout(() => {

window.scrollTo({
top:0,
behavior:"smooth"
});

},1200);

},2500);
const kartlar = document.querySelectorAll(".kart");

const gozlemci = new IntersectionObserver((girisler) => {
    girisler.forEach((giris) => {
        if (giris.isIntersecting) {
            giris.target.classList.add("goster");
        }
    });
}, {
    threshold: 0.2
});

kartlar.forEach((kart) => {
    gozlemci.observe(kart);
});
