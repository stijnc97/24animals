var pagina = document.getElementsByClassName("pagina");
var navigatie = document.getElementById("nav");
var verstuur = document.getElementById("knop");
var verstuurd = document.getElementById("verstuurd");
var formulier = document.getElementsByClassName("formulier")[0];
document.getElementById("pagina").className = "onzichtbaar";
function vogel(){

}
function main() {
  var links = document.getElementsByTagName("a");
  for (var teller = 0; teller < links.length; teller++) {
    links[teller].onclick = function () {
      for (var teller = 0; teller < links.length; teller++) {
        links[teller].className = "";
        pagina[teller].setAttribute("id","onzichtbaar");
        if (pagina[teller].getAttribute("data-info")===this.innerHTML) {
          pagina[teller].setAttribute("id","");
        }
        if (teller===3){
          verstuurd.className = "onzichtbaar";
          formulier.className = "";
        }
      }

      this.className = "geselecteerd";
    }
  }
  verstuur.onclick = function () {
    verstuurd.className = "";
    formulier.className = "onzichtbaar";
  }
}
window.onload = function() {
       main();
       var tekst = document.getElementsByTagName("h2");
       document.getElementsByTagName("p")[0].className="beschrijving";
       tekst[0].innerHTML = "Found the beast";
       document.getElementById("lader").className = "overgang";
       function loaded() {
         document.getElementById("landingpage").className = "overgang";
         document.getElementById("pagina").className = "fadein";
       }
       setTimeout(loaded, 10000);
       setInterval(vogel, 10000);
}
