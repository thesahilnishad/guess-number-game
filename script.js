

let random = Math.floor(Math.random() * 20) + 1
console.log(random);



let num = prompt("enter a number");
let number = Number.parseInt(num);
let score = 20;


while (number != random) {
    if (number > random) {
        console.log("you guessed a bigger , try again");
    }
    else if (number < random) {
        console.log("yaay you guessed an small number, try again");
    }
    if (number == random) {
        console.log("yaay you guessed the right number");
        break;
        
    }
    number = prompt("enter number again");
    score--;
    
}
console.log("your score is",score)



