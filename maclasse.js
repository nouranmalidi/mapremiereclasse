/**
 * J'apprends à créer des classes Javascript 
 */

/**
 * Comment déclarer une classe ?
 * Pour déclarer une classe 
 * 1. je commence par le mot-clé class.
 * 2. je donne un nom à la classe. Le nom de la classe doit commencer par une majuscule.
 * 3. je définis les propriétes et les méthodes de la classe.
 */

// Ma classe Personne 
class Personne {
    // Propriétés de la classe Personne
    // je définis le constructeur de la classe Personne.
    // Les propriété d'une personne sont:
    // nom,village,année de naissance
    constructor(nomPersonne, villagePersonne, anneeNaissance) {
        this.nom = nomPersonne;
        this.village = villagePersonne;
        this.annee = anneeNaissance;
    }
    
        // Méthode
        bienvenue (){
            alert("Bienvenue " + this.nom);
        }
        inputAnnee = this.annee;
       
        // Méthode de calcule d'age
        calculeAge (){
            let anneeActuelle = new Date().getFullYear();
            let ageTrouvee = anneeActuelle - this.annee;    // Quand c'est un calcule on doit mettre return
            alert("Vous avez " + ageTrouvee);

            return ageTrouvee;
            
           

        }
            
};



/**
 * J'utilise la classe Personne pour créer une instance (exemplaire) de Personne. Notre personne s'appelle ALI. 
 * Il habite a Combani. 
 * Il est né en 1999 / 
 */

let personne1 = new Personne ("Ali", "Combani", 1999);
console.log(personne1);

personne1.bienvenue();
personne1.calculeAge();

let personne2 = new Personne ("Fatima", "Chiconi", 2014);
console.log(personne2);

console.log(personne1.calculeAge);