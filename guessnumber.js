"use strict"
let num = parseInt((Math.random() * 100) + 1);
const userip = document.getElementById('uip');
const gslot = document.getElementById('Guesses');
const remain = document.getElementById('remain');
const startover = document.getElementById('stat');
const suggest = document.getElementById('suggest');
let previous_guesses = [];
let numguesses = 1;
let gameplay = true;

if (gameplay) {
    document.getElementById('sbtn').addEventListener('click', function (e) {
        e.preventDefault();
        let guess = parseInt(userip.value);
        valid_guess(guess);
    });
}
function valid_guess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter Valid Number');
    }
    else if (guess < 1 || guess > 100) {
        alert('Enter number greater than 1 and less than 100');
    }
    else {
        previous_guesses.push(guess);
        if (numguesses === 11) {
            display(guess);
            suggest.innerHTML = `Game Over for U! It was ${num} from start haha!!!`;
            end();
        }
        else {
            display(guess);
            suggestion(guess);
        }
    }
}
function display(guess) {
    userip.value = "";
    //gslot.innerHTML += guess+", ";
    gslot.innerHTML=previous_guesses;
    numguesses++;
    remain.innerHTML = `${11 - numguesses}`;
}
function suggestion(guess) {
    if (guess === num) {
        suggest.innerHTML = "Correct Guess!! U Did it!!";
        end();
    }
    else if (guess < num) {
        suggest.innerHTML = "Too Low! Try again!!";
    }
    else {
        suggest.innerHTML = "Too High! Try again!!";
    }
}
function end() {
    userip.value = "";
    document.getElementById('new').innerHTML = "<input type='button' class='btn btn-outline-info rounded-pill' value='Once More!?' style='font-size:25px;'\>";
    gameplay = false;
    new_game();
}
function new_game() {
    document.getElementById('new').addEventListener('click', function () {
        num = parseInt((Math.random() * 100) + 1);
        previous_guesses = [];
        numguesses = 1;
        gslot.innerHTML = "";
        suggest.innerHTML = "";
        remain.innerHTML = "10";
        gameplay = true;
    });
}