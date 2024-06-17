//console.log('hello world!')

//Les variables
/*
let userAge = 17;

console.log(userAge)

userAge = 25;

console.log(userAge)

userAge = "mon prénom est \"Valentyn\", j'ai 22 ans."

console.log(userAge)

//Les opérations mathématiques

let nombre1 = 14;
let nombre2 = 3;

console.log(nombre1 + nombre2)
console.log(nombre1 - nombre2)
console.log(nombre1 * nombre2)
console.log(nombre1 / nombre2)
console.log(nombre1 % nombre2)

console.log(7+5)

// + -> les textes concaténations

let nom = "Dlb"
let prenom = "Val"

console.log(`Bonjour ${prenom} ${nom}`)

// auto modification

let captainAge = 35;

captainAge = captainAge -3;

console.log(captainAge);

captainAge += 10;

console.log(captainAge);


//incrémentation (++) - décrémentation (--)

let counter = 0;

console.log(counter)

counter++;

console.log(counter)

counter++;

console.log(counter)

counter++;

console.log(counter)

counter++;

console.log(counter)

*/

//Les conditions
/*
let userAge = 19;
let hairColor = "blond"

if(userAge < 18)
    {
        console.log("Tu dégages!")
    }
else if (hairColor === "brun")
{
        console.log("Tu prends le large")
    }
else
{
    console.log("Bienvenue")
}
*/

//
/*
alert("Salut utilisateur")

let userName = prompt("Quel est ton nom ?")

alert(`Bonjour ${userName}`)

let userAge = prompt('Quel est votre âge ?')
userAge = parseInt(userAge);

console.log(userAge)

if(isNaN(userAge))
    alert('on t\'a demandé ton âge pas ta vie')

else if(userAge >= 18)
    (
alert("Tu es majeur")
    )
else
{
alert("Tu es mineur")
}
*/



/*
let variableTest = 18;

console.log(typeof variableTest);

variableTest = "18";

console.log(typeof variableTest);
*/

//Boucles

/*
let words =[];
let word = "start"
while(word != "stop")
    {
word = prompt('écrivez stop pour vous stopper')
words.push(word);
    }

for(let i =0; i<words.length; i++){
    console.log(words[i]);
}
*/

/*
let tableauTest = [23, 18, 'Val', -35.2]
tableauTest[8] = 'une nouvelle valeur'
tableauTest[1]+=10
console.log(tableauTest)
*/

/*
do {
    // code à faire dans la boucle
} while (condition)*/

/*
for(let i =0; i<10; i++){
    console.log(i)
}
*/

/**
 * 
 * @param {premier nombre, peut-être entier ou décimal} nombre1 
 * @param {deuxième nombre, peut-être entier ou décimal} nombre2 
 * @returns la somme du premier et du deuxième nombre
 */
function addition(nombre1, nombre2)
{
    console.log('bulp')

    return nombre1+nombre2;
}

addition(7, 2);
let resultat = addition(13, 4);
console.log(resultat);



