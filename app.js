// On user press:
// registering user input
// player 1 image is set
// player 2 (computer) response is generated
// player 2 image is set
// outcome is evaluated
// message is displayed based on outcome.
// 
// 
// 


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
const outcomeMsg = document.querySelector('#result')



rock.addEventListener('click', function() {
    p1 ='rock';
    displayUser(p1);
    displayComputer(opponent());
    outcome();
    console.log('player1: ',p1);
    console.log(bigBangRPS(p1, p2), 'player2:', p2);

})
paper.addEventListener('click', function() {
    p1 ='paper';
    displayUser(p1);
    displayComputer(opponent());
    outcome();
    console.log('player1: ',p1);
    console.log(bigBangRPS(p1, p2), 'player2:', p2);
})
scissors.addEventListener('click', function() {
    p1 ='scissors';
    displayUser(p1);
    displayComputer(opponent());
    outcome();
    console.log('player1: ',p1);
    console.log(bigBangRPS(p1, p2), 'player2:', p2);
})
lizzard.addEventListener('click', function() {
    p1 ='lizzard';
    displayUser(p1);
    displayComputer(opponent());
    outcome();
    console.log('player1: ',p1);
    console.log(bigBangRPS(p1, p2), 'player2:', p2);
})
spok.addEventListener('click', function() {
    p1 ='spok';
    displayUser(p1);
    displayComputer(opponent());
    outcome();
    console.log('player1: ',p1);
    console.log(bigBangRPS(p1, p2), 'player2:', p2);
})


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

function outcome() {
    outcomeMsg.innerText = bigBangRPS(p1, p2);
}
