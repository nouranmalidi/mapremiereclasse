
class Voiture {
// Propriétés de la classe Voiture
constructor(roue,volant,pedale,boiteDeVitesse,couleur,nombrePorte,nombreSiege) {
this.roue = roue;
this.volant = volant;
this.pedale = pedale;
this.vitesse = boiteDeVitesse;
this.couleur = couleur;
this.porte = nombrePorte;
this.siege = nombreSiege;

}

// Méthode de la classe Voiture

demarrer() {
alert("Trouver le point de patinage avec la " + this.pedale);

}

arreter() {
alert("Appuyer sur la " + this.pedale + "de frein")
    
}

klaxonner() {
alert("Appuyer sur le centre du" + this.volant);
    
}



}

let exemplaire1 = new Voiture ("pneu 4*4", "incurvee", "normal", "automatique", "jaune", 4, 5);
console.log(exemplaire1);

exemplaire1.demarrer();
exemplaire1.arreter();




let exemplaire2 = new Voiture ("pneu runflat", "incurvee", "normal", "manuel", "rouge", 2, 3);
console.log(exemplaire2);

exemplaire2.demarrer();
exemplaire2.klaxonner();