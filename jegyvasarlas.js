const gomb = document.getElementById("gomb")
const ide = document.getElementById("ide")
const diak = document.getElementById("diak")
const felnott = document.getElementById("felnott")
const mennyiseg = document.getElementById("mennyiseg")
const ervenyesseg = document.getElementById("ervenyesseg")

function vasarlas(){
    if(diak.checked){
        ide.innerHTML = 900 * mennyiseg.value + " Ft."
    }
    else if(felnott.checked){
        ide.innerHTML = 1800 * mennyiseg.value + " Ft."
    }
}
function ervenyes(){
    if(diak.checked || felnott.checked){
        ervenyesseg.innerHTML = "Sikeres tranzakció!\n Fizetendő összeg:"
    }
    else{
        ervenyesseg.innerHTML = "Sikertelen tranzakció!"
    }
}

gomb.addEventListener("click",vasarlas)
gomb.addEventListener("click",ervenyes)