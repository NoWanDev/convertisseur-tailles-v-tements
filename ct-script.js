let donneesTailles = {};
let genreClient = "femme";
let pays_arrivee = "";
let pays_origine = "";
let listeTailles = "";
let index = "";
let type ="haut";
let genreActif ="";
const select_taille = document.getElementById("select-taille");

function choisirType(a,b){
    type = a 
    document.querySelectorAll(".typeC").forEach(function(el){
    el.style.backgroundColor = "#d3cfcfb9";
    });

    document.getElementById(b).style.backgroundColor = "rgb(167, 74, 193)";
    genre(genreClient)

    
}

function genre(a, b){
    genreActif = b
    genreClient = a;
    select_taille.innerHTML = ""
    listeTailles = donneesTailles[type][genreClient][pays_origine];

    document.querySelectorAll(".genreC").forEach(function(el){
    el.style.backgroundColor = "#d3cfcfb9";
    });

    document.getElementById(b).style.backgroundColor = "rgb(167, 74, 193";

    console.log(listeTailles);
        for (let element of donneesTailles[type][genreClient][pays_origine]){
         let option = document.createElement("option");
         option.innerHTML = element;
         select_taille.appendChild(option)
        
    }


}

function calcul (){
    document.getElementById("resultat").style.fontSize = "3rem";
    pays_arrivee = document.getElementById("pays-arrivee").value
    index = donneesTailles[type][genreClient][pays_origine].indexOf(document.getElementById("select-taille").value);
    document.getElementById("resultat").innerHTML = donneesTailles[type][genreClient][pays_arrivee][index];
    if (document.getElementById("resultat").innerHTML === "undefined"){
        document.getElementById("resultat").style.fontSize = "2rem";

        document.getElementById("resultat").innerHTML = "veuillez remplir tous les champs";

    }

}

async function init() {
    const reponse = await fetch("ct-tailles.json");
    donneesTailles = await reponse.json();
    pays_origine = document.getElementById("select-origine").value;
    pays_arrivee = document.getElementById("pays-arrivee").value;


    document.getElementById("select-origine").addEventListener("change", function(){
        pays_origine = document.getElementById("select-origine").value;
        genre(genreClient, genreActif);
    });
    
  
}
init();