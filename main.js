let calcul = prompt("Introuduit un mutiple de deux")
let mult = calcul % 2
switch (mult) {
    case 0:
        alert("Ce nombre est divisible par deux.")
        break;
    case 1:
        alert("Ce nombre n'est pas divisible par deux.")
        break;
    default:
        alert("Ceci n'est pas un nombre")
        break;
}