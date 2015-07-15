function Personne(nom) {
  this.nom = nom;
}

Personne.prototype.afficherNom = function() {
  console.log("Je suis "+this.nom);
};

var personne1 = new Personne('Gustave');
var donnerUnNom = personne1.afficherNom;

personne1.afficherNom(); // 'Je suis Gustave'
donnerUnNom(); // undefined
console.log(donnerUnNom === personne1.afficherNom); // true
console.log(donnerUnNom === Personne.prototype.afficherNom); // true
donnerUnNom.call(personne1); // 'Je suis Gustave'
