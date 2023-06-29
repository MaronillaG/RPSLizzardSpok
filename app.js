// On user press:
// registering user input
// player 1 image is set
// player 2 (computer) response is generated
// player 2 image is set
// outcome is evaluated
// message(s) displayed based on outcome.


let p1 = '';
let p2 = '';
let gamesPlayed = 0;
const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const lizard = document.querySelector('#lizard');
const spock = document.querySelector('#spock');
const user = document.querySelector('#user');
const computer = document.querySelector('#computer');
const resultMsg = document.querySelector('#result');
const outcomeMsg = document.querySelector('#outcome');
const icons = document.querySelectorAll('.selections img');
const promptMsg = document.querySelector('.start-msg');
const container = document.querySelector('.container');


rock.addEventListener('click', function() {
    p1 ='rock';
    console.log('gamesPlayed = ',gamesPlayed += 1);
    game();
    
})
paper.addEventListener('click', function() {
    p1 ='paper';
    console.log('gamesPlayed = ',gamesPlayed += 1);
    game();
})
scissors.addEventListener('click', function() {
    p1 ='scissors';
    console.log('gamesPlayed = ',gamesPlayed += 1);
    game();
})
lizard.addEventListener('click', function() {
    p1 ='lizard';
    console.log('gamesPlayed = ',gamesPlayed += 1);
    game();
})
spock.addEventListener('click', function() {
    p1 ='spock';
    console.log('gamesPlayed = ',gamesPlayed += 1);
    game();
})


// grouping functions
function game() {
    displayUser(p1);
    displayComputer(opponent());
    result();
    outcome();
    container.style.opacity = '1';
    console.log(bigBangRPS(p1, p2), 'player1: ',p1, 'player2:', p2);
    console.log(extraMsg(p1,p2));
}

// evaluating winner
function bigBangRPS(p1, p2) {
    if (p1 === p2) return `It's a tie!`;

    const wins = {
        rock: ['scissors','lizard'],
        paper: ['rock','spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['spock', 'paper'],
        spock: ['rock','scissors'],
    }

    if (wins[p1].includes(p2))
        return 'You win!'

    else return 'You lost.'

}
const outcomes = {
    rock: ['Rock crushes Scissors.', 'Rock Crushes Lizard.'],
    paper: ['Paper covers Rock.','Paper disproves Spock.'],
    scissors: ['Scissors cuts Paper.', 'Scissors decapitates Lizard.'],
    lizard: ['Lizard poisons Spock.', 'Lizard eats Paper.'],
    spock: ['Spock vapourizes Rock.','Spock crushes Scissors.'],
}

// extra message 
function extraMsg(p1, p2){
    if (p1 === p2) return '';
    // if outcomes[]
    if (p1 === 'scissors' && p2 === 'paper'
        || p2 === 'scissors' && p1 === 'paper') {
            return 'Scissors cuts Paper.';
        }
    if (p1 === 'paper' && p2 === 'rock'
        || p2 === 'paper' && p1 === 'rock') {
            return 'Paper covers Rock.';
        }
    if (p1 === 'rock' && p2 === 'lizard'
        || p2 === 'rock' && p1 === 'lizard') {
            return 'Rock crushes Lizard.';
        }
    if (p1 === 'lizard' && p2 === 'spock'
        || p2 === 'lizard' && p1 === 'spock') {
            return 'Lizard poisons Spock.';
        }
    if (p1 === 'spock' && p2 === 'scissors'
        || p2 === 'spock' && p1 === 'scissors') {
            return 'Spock smashes Scissors.';
        }
    if (p1 === 'scissors' && p2 === 'lizard'
        || p2 === 'scissors' && p1 === 'lizard') {
            return 'Scissors decapitates Lizard.';
        }
    if (p1 === 'lizard' && p2 === 'paper'
        || p2 === 'lizard' && p1 === 'paper') {
            return 'Lizard eats Paper.';
        }
    if (p1 === 'paper' && p2 === 'spock'
        || p2 === 'paper' && p1 === 'spock') {
            return 'Paper disproves Spock.';
        }
    if (p1 === 'spock' && p2 === 'rock'
        || p2 === 'spock' && p1 === 'rock') {
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

//animations

// Play button reveals weapons and hides itself.
const play = document.querySelector('#btn-play');

play.addEventListener('click', function() {
    play.classList.toggle('hide');
    console.log(promptMsg);
    promptMsg.style.visibility = 'visible';
    icons.forEach((current, index) => {
            setTimeout(() => {
                current.style.display = 'block';
                current.style.opacity = "1";
                current.style.translate = `${index*100}%`;
            }, index * 200);
        })
});


