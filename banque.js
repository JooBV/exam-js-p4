//j'ai les variables pour recuperer les informations
const form = document.getElementById("exam-form");
const compte = document.getElementById("compte");
const deposer = document.getElementById("sommme");

//je recuperes les informations
form.addEventListener("click", function (){

    let Getcompte = compte.value.length;

    console.log(Getcompte);

    if(compteLen == 16) {
        console.log("compte = 16");
    } else {
        console.log("erreur aucun 16 chiffres");
    }
});