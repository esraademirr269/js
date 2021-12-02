
//ESRA DEMİR
let kullanici=prompt("ADINIZ")   
let yazdir=document.querySelector("#myName")
yazdir.innerHTML=kullanici

function saati(){
var dt = new Date();
let saat=document.querySelector(".clock") 
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    saat.innerHTML= dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()+"  "+ gunler[dt.getDay()];
   
}
setInterval(saati,1000)

