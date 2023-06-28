// registering user input
const options = ['rock', 'paper', 'scissors', 'lizzard', 'spok'];
let p1 = '';
let p2 = '';
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const lizzard = document.querySelector('#lizzard');
const spok = document.querySelector('#spok');

rock.addEventListener('click', function() {
    p1 ='rock';
    console.log('player1: ',p1);
    console.log(bigBangRPS(p1, computer()), 'player2:', p2);
})
paper.addEventListener('click', function() {
    p1 ='paper';
    console.log('player1: ',p1);
    console.log(bigBangRPS(p1, computer()), 'player2:', p2);
})
scissors.addEventListener('click', function() {
    p1 ='scissors';
    console.log('player1: ',p1);
    console.log(bigBangRPS(p1, computer()), 'player2:', p2);
})
lizzard.addEventListener('click', function() {
    p1 ='lizzard';
    console.log('player1: ',p1);
    console.log(bigBangRPS(p1, computer()), 'player2:', p2);
})
spok.addEventListener('click', function() {
    p1 ='spok';
    console.log('player1: ',p1);
    console.log(bigBangRPS(p1, computer()), 'player2:', p2);
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
function computer() {
    let pos = Math.floor(Math.random()*options.length);
    p2 = options[pos];
    return p2;
};

// console.log(computer());
// console.log(bigBangRPS('spok', 'rock'));
