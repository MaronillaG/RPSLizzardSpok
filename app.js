// On user press:
// registering user input
// player 1 image is set
// player 2 (computer) response is generated
// player 2 image is set
// outcome is evaluated
// message is displayed based on outcome.


const options = ['rock', 'paper', 'scissors', 'lizzard', 'spok'];
let p1 = '';
let p2 = '';
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const lizzard = document.querySelector('#lizzard');
const spok = document.querySelector('#spok');
const user = document.querySelector('#user');
const computer = document.querySelector('#computer');
const resultMsg = document.querySelector('#result');
const outcomeMsg = document.querySelector('#outcome');


rock.addEventListener('click', function() {
    p1 ='rock';
    game();

})
paper.addEventListener('click', function() {
    p1 ='paper';
    game();
})
scissors.addEventListener('click', function() {
    p1 ='scissors';
    game();
})
lizzard.addEventListener('click', function() {
    p1 ='lizzard';
    game();
})
spok.addEventListener('click', function() {
    p1 ='spok';
    game();
})


// grouping functions
function game() {
    displayUser(p1);
    displayComputer(opponent());
    result();
    outcome();
    console.log('player1: ',p1);
    console.log(bigBangRPS(p1, p2), 'player2:', p2);
    console.log(extraMsg(p1,p2));
}

// evaluating winner
function bigBangRPS(p1, p2) {
    if (p1 === p2) return `It's a tie!`;

    const wins = {
        rock: ['scissors','lizzard'],
        paper: ['rock','spok'],
        scissors: ['paper', 'lizzard'],
        lizzard: ['spok', 'paper'],
        spok: ['rock','scissors'],
    }

    if (wins[p1].includes(p2))
        return 'You win!'

    else return 'You lost.'

}
const outcomes = {
    rock: ['scissors','lizzard', 'Rock Crushes lizard'],
    paper: ['rock','spok'],
    scissors: ['paper', 'lizzard'],
    lizzard: ['spok', 'paper'],
    spok: ['rock','scissors'],
}

// guiding message 
function extraMsg(p1, p2){
    if (p1 === p2) return '';
    if (p1 === 'scissors' && p2 === 'paper'
        || p2 === 'scissors' && p1 === 'paper') {
            return 'Scissors cuts Paper.';
        }
    if (p1 === 'paper' && p2 === 'rock'
        || p2 === 'paper' && p1 === 'rock') {
            return 'Paper covers Rock.';
        }
    if (p1 === 'rock' && p2 === 'lizzard'
        || p2 === 'rock' && p1 === 'lizzard') {
            return 'Rock crushes Lizard.';
        }
    if (p1 === 'lizzard' && p2 === 'spok'
        || p2 === 'lizzard' && p1 === 'spok') {
            return 'Lizard poisons Spock.';
        }
    if (p1 === 'spok' && p2 === 'scissors'
        || p2 === 'spok' && p1 === 'scissors') {
            return 'Spock smashes Scissors.';
        }
    if (p1 === 'scissors' && p2 === 'lizzard'
        || p2 === 'scissors' && p1 === 'lizzard') {
            return 'Scissors decapitates Lizard.';
        }
    if (p1 === 'lizzard' && p2 === 'paper'
        || p2 === 'lizzard' && p1 === 'paper') {
            return 'Lizard eats Paper.';
        }
    if (p1 === 'paper' && p2 === 'spok'
        || p2 === 'paper' && p1 === 'spok') {
            return 'Paper disproves Spock.';
        }
    if (p1 === 'spok' && p2 === 'rock'
        || p2 === 'spok' && p1 === 'rock') {
            return 'Spock vaporises rock.';
        }
    if (p1 === 'scissors' && p2 === 'rock'
        || p2 === 'scissors' && p1 === 'rock') {
            return 'Rock crushes scissors.';
        }

}

// generating computer answer
function opponent() {
    let pos = Math.floor(Math.random()*options.length);
    p2 = options[pos];
    return p2;
};

// changing the displays
function displayUser(p1) {
    let current = user.src;
    let replaced = current.replace(/\/([a-z]+)\.png$/, '/'+p1+'.png');
    user.src = replaced;
}

function displayComputer(p2) {
    let current = computer.src;
    let replaced = current.replace(/\/([a-z]+)\.png$/, '/'+p2+'.png');
    computer.src = replaced;
}

function result() {
    resultMsg.innerText = bigBangRPS(p1, p2);
}

function outcome() {
    outcomeMsg.innerText = extraMsg(p1, p2);
}

console.log(extraMsg('spok', 'rock'));