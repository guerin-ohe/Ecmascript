// Le constructeur Personne
var Personne = function(nom) {
   this.nom = nom;
};

Personne.prototype.marcher = function(){
  console.log('Je marche !');
};
Personne.prototype.direBonjour = function(){
  console.log('Bonjour, je suis "+this.nom);
};

// Le constructeur Étudiant
function Étudiant(nom, sujet) {
  // On appelle le constructeur parent
  // pour profiter des propriétés définies dans la fonction
  Personne.call(this, nom);
  this.sujet = sujet;
};

// On déclare l'héritage pour bénéficier de la chaîne de prototypes
// Attention à ne pas utiliser "new Personne()". Ceci est incorrect
// on ne peut pas fournir l'argument "nom". C'est pourquoi on appelle
// Personne avant, dans le constructeur Étudiant.
Étudiant.prototype = Object.create(Person.prototype);

// on corrige le constructeur qui pointe sur celui de Personne
Étudiant.prototype.constructor = Étudiant;
 
// on remplace la méthode direBonjour pour l'étudiant
Étudiant.prototype.direBonjour = function(){
 console.log("Bonjour je suis un '+ this.nom + ". J'étudie " + this.sujet + ".");
};

// on ajoute la méthode aurevoir
Étudiant.prototype.aurevoir = function(){
  console.log('aurevoir');
};

var étudiant1 = new Étudiant("Jean", "la physique appliquée");
étudiant1.direBonjour();
étudiant1.marcher();
étudiant1.aurevoir();

// on vérifie l'héritage
console.log(étudiant1 instanceof Personne); // true 
console.log(étudiant1 instanceof Étudiant); // true
