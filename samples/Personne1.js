function Personne(nom) {
  this.nom = nom;
}

Personne.prototype.direBonjour = function() {
  console.log("Bonjour, je suis " + this.nom);
};

var personne1 = new Personne('Alice');
var personne2 = new Personne('Robert');

// on appelle la méthode.
personne1.direBonjour(); // Bonjour, je suis Alice
