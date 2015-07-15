// On crée un conteneur MONAPPLICATION.méthodesCommunes pour regrouper certaines méthodes
MONAPPLICATION.méthodesCommunes = {
  regExPourNom: "", // on définit une expression rationnelle pour un nom
  regExPourTéléphone: "", // une autre pour un numéro de téléphone
  validerNom: function(nom){
    // On valide le nom en utilisant
    // la regexp par exemple
  },
 
  validerNumTéléphone: function(numTéléphone){
    // on valide le numéro de téléphone
  }
}

// On utilise un conteneur pour les événements
MONAPPLICATION.event = {
  addListener: function(el, type, fn) {
  //  le corps de la méthode
  },
  removeListener: function(el, type, fn) {
  //  le corps de la méthode
  },
  getEvent: function(e) {
  //  le corps de la méthode
  }

 // Il est possible d'ajouter des méthodes et des propriétés
}

// Exemple de syntaxe pour utiliser la méthode addListener :
MONAPPLICATION.event.addListener("monÉlément", "type", callback);
