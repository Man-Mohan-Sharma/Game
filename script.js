let random = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#submit');
const userinput = document.querySelector("#number");
const result = document.querySelector('.result');
const lowOrHigh = document.querySelector(".lowOrHi");
const preguess = document.querySelector('.guesses');
const lastresult = document.querySelector('.lastResult');

let playGame = true;
let numGuess = 0;
let pre = [];

const prevalue = document.createElement('p'); 

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validity(guess);
    })
}

function validity(guess){
    if(isNaN(guess)){
        alert('Enter a valid number');
    }
    else if(guess < 1){
        alert('Enter number greater than 1');
    }
    else if(guess > 100){
        alert('Enter number less than 100');
    }
    else{
        numGuess++;
        pre.push(guess);
        if(numGuess === 10){
            displayguess(guess);
            if(guess == random) displaymessage('🎉 You guessed it right!');
            else displaymessage(`Game Over. Random number was ${random}`);
            end();
        }
        else{
            displayguess(guess);
            checking(guess);
        }
    }
}

function checking(guess){
    if(guess === random){
        displaymessage('🎉 You guessed it right!');
        end();
    }
    else if(guess < random){
        displaymessage('Too low! Try again.');
    }
    else if(guess > random){
        displaymessage('Too high! Try again.');
    }
}

function displayguess(guess){
    userinput.value = '';
    preguess.innerHTML += `${guess}, `;
    lastresult.innerHTML = `${10 - numGuess}`;
}

function displaymessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function end(){
    userinput.value = '';
    userinput.setAttribute('disabled','');
    prevalue.classList.add('button');
    prevalue.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    result.appendChild(prevalue);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        random = parseInt(Math.random() * 100 + 1);
        pre = [];
        numGuess = 1;
        preguess.innerHTML = '';
        lastresult.innerHTML = `${11 - numGuess}`;
        userinput.removeAttribute('disabled');
        result.removeChild(prevalue);
        lowOrHigh.innerHTML = '';
        playGame = true;
    });
}
