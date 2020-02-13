function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let alea = entierAleatoire(0, 10);

document.querySelector("#result").innerHTML = `<p>Your random number is : ${alea}</p>`;