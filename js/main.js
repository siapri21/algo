/* --------------------------- Les Commentaires --------------------------- */

// Un commentaire en Javascript
/*
    Un commentaire multiligne
    en Javascript
*/


/* --------------------------- Affichage --------------------------- */

// Afficher des informations dans la console de debbugage du navigateur
//console.log('Hello, world!');

//affiche une boite de dialogue avec champs à remplir

//let response = prompt('Quel est ton age?');
//console.log(response);


/* --------------------------- Les Variables --------------------------- */

// Déclaration d'une variable
let uneVariable;

// Affectation d'une valeur à une variable
uneVariable = 'Je suis une variable!';45

// Les 2 se font généralement en même temps
// Les variables sont sensibles à la casse (majuscules =/= minuscules )
let helloWorld = 'Hello, World!';
helloWorld = uneVariable;
let HELLOWORLD;

// Affichage d'une variable dans la console
console.log(helloWorld);

uneVariable = 'Je suis une nouvelle variable!';

// Les differents type de variables
let messages = 'un message';
let number = 20;
let decimal = 20.5;
let boolean = true;
let boolean2 = false;

// Les opérations arithmétiques (+, -, *, /)
// Déclarer 3 variables sum, number1, number2
// Affecter le nombre 10 à number1
// Affecter le nombre 20 à number2
// Affecter à sum l'opération de multiplication des 2 variables précédentes
// Afficher le resultat en console
let sum;
let number1 = 10;
let number2 = 20;
sum = number1 * number2;
console.log(sum);

/* --------------------------- La Concatenation --------------------------- */

let firstName = 'Rachid';
let lastName = 'EDJEKOUANE';

// Pour déclarer une chaine de caractère on peux utiliser ('', "", ``)
// Cela a un impact sur la façon de concatener les variables et les chaines de caractères
let city = 'PARIS';
city = "PARIS";
city = `PARIS`;

// Déclarer une variable city, afficher le message "j'adore vivre à <city>"
console.log("j'adore vivre à " + city);
console.log('j\'adore vivre à ' + city);

// Modifier le message pour afficher j'adore vivre à <city> et je m'appelle <firstName> <lastName>
console.log(`j'adore vivre à ${city} et je m'appelle ${firstName} ${lastName}`);


/*------------------Instruction
conditionnelles--------------*/

//Demmander à l'utilisateur s'il accepte les conditions générals de ventes cgv

//let gree = prompt('Accepter-vous les conditiond les cgv?');

//if(gree =='ok'){
  //  console.log('vous avez acepté!');

//}else {
      //  console.log("je n'accepté pas");
   // }


//declare une varaible qui s'appelle var , lui assigner la valeur 16
//SI la variable est égale à 16 afficher félicitation

//1let GREE = prompt('VOUS AVEZ QUEL AGE?');
let variable = 16;
if (variable > 16){
    console.log('félicitation');
}

//ecrire une algorithme qui demande à l'utilisateur son age.
// il indique ensuite à l'utilisateur quel est film il peut aller voir.
//"action man si moins de 13 ans"
//"matrix si il entre 13 et 18 ans"
//"evil dead si plus de 18 ans "


// let age= prompt('Vous avez quel age?');

// if(age <13){
//     console.log("Action Man");
// }else if(age >= 13 && age <=18 ){
//     console.log("Matrix");
// }else if(age >18){
//     console.log("Evil Dead");
// }

//DEMANDER à l'utilisateur LA nationalité ,son age
//SI IL EST Français ET qu'il a plus de 18 ans OU s'il est etranger et qu'il a moins de 18 ans 
//assistance juridique gratuite

// let year= prompt('Quel age avez-vous?');
// let nationalité= prompt('Quel est votre nationalité?');
              
// if(nationalité = français && year>= 18 || nationalité ==! year <18){
//     console.log("assistance gratuite");
// }



/////////////////////////////////////////////////////////////////

    
// let nat= prompt('Quel est votre nationalité?');
// let years= prompt('Quel age avez-vous?');


// if(nat == 'français'){
//     console.log(years);
// }if(years >18){
//     console.log('droit au APL');
// }else{
//     console.log('pas droit');
// }

///////////////////////////boucles//////////////
let i = 0;
while(i<=10){
    let resultat = 7*i;
    i = i+1 ;
    console.log(resultat);
}

///////////////////////////////////////////////

let a = 
