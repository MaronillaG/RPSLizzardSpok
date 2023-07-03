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
let gamesWon = 0;
let selected = ''
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
const icons = document.querySelectorAll('.choice');
const promptMsg = document.querySelector('.start-msg');
const container = document.querySelector('.container');
const player = document.querySelectorAll('.player');
const playBtn = document.querySelector('#btn-play');
const body = document.querySelector('body');
const square = document.querySelector('#square');


centerElement(playBtn);
squareSize();

rock.addEventListener('click', function() {
    p1 ='rock';
    selected ='rock';
    console.log('gamesPlayed = ',gamesPlayed += 1);
    choiceHighlight(rock);
    game();
    
})
paper.addEventListener('click', function() {
    p1 ='paper';
    console.log('gamesPlayed = ',gamesPlayed += 1);
    choiceHighlight(paper);
    game();
})
scissors.addEventListener('click', function() {
    p1 ='scissors';
    console.log('gamesPlayed = ',gamesPlayed += 1);
    choiceHighlight(scissors);
    game();
})
lizard.addEventListener('click', function() {
    p1 ='lizard';
    console.log('gamesPlayed = ',gamesPlayed += 1);
    choiceHighlight(lizard);
    game();
})
spock.addEventListener('click', function() {
    p1 ='spock';
    console.log('gamesPlayed = ',gamesPlayed += 1);
    choiceHighlight(spock);
    game();
})

window.addEventListener('resize', function() {
    centerElement(playBtn);
    centerElement(square);
    squareSize();
})

document.addEventListener('DOMContentLoaded', function() {
    centerElement(square);
});

// grouping functions
function game() {
    reset();
    flash();
    setTimeout(() => {
        displayUser(p1);
        displayComputer(opponent());
        result();
        outcome();
        container.style.opacity = '1';
    }, 2500);

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

    if (wins[p1].includes(p2)){
        gamesWon += 1;
        console.log('Games won: ', gamesWon);
        return 'You win!'
    }

    else return 'You lost.'
}


// extra message 
function extraMsg(p1, p2){
    const outcomes = {
        rock: {'scissors': 'Rock crushes Scissors.', 'lizard': 'Rock Crushes Lizard.'},
        paper: {'rock': 'Paper covers Rock.', 'spok':'Paper disproves Spock.'},
        scissors: {'paper': 'Scissors cuts Paper.', 'lizard': 'Scissors decapitates Lizard.'},
        lizard: {'spock': 'Lizard poisons Spock.', 'paper': 'Lizard eats Paper.'},
        spock: {'rock': 'Spock vapourizes Rock.','scissors': 'Spock crushes Scissors.'}
    }
    if (p1 === p2) return '';
    //player 1 wins:
    if (outcomes[p1] && outcomes[p1][p2]) return outcomes[p1][p2];
    //player 2 wins:
    if (outcomes[p2] && outcomes[p2][p1]) return outcomes[p2][p1];
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
    user.style.opacity = '1';
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

function reset(){
    container.style.opacity = '0';
    user.style.opacity = '0';
    resultMsg.innerHTML = '';
    outcomeMsg.innerHTML = '';
}

function choiceHighlight(element) {
    element.classList.toggle('highlight');
}

//animations

// Play button reveals weapons and hides itself.
const play = document.querySelector('#btn-play');

play.addEventListener('click', function() {
    play.classList.toggle('hide');
    promptMsg.style.visibility = 'visible';
    icons.forEach((current, index) => {
            setTimeout(() => {
                current.style.display = 'block';
                current.style.opacity = "1";
                current.style.translate = `${index*100}%`;
            }, index * 200);
        })
});


function flash() {
    square.style.opacity = '1'; 
    let colours = ['none','white', 'none', 'white','none', 'white'];

    colours.forEach( (color, index)=> {
        setTimeout(() => {
            square.style.background = color;
        }, index * 500)
    });
};

//centering for different screen sizes
function centerElement(element) {
    const bodyWidth = body.offsetWidth;
    const bodyHeight = body.offsetHeight;
    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;

    let left = (bodyWidth - elementWidth) /2 + 'px';

    let top = (bodyHeight - elementHeight) /2 + 'px';

    element.style.left = left;
    element.style.top = top;

    console.log(element, 'bodywidth', bodyWidth, 'bodyHeight', bodyHeight);
    console.log(element, 'left & top:', left, top)
    // console.log('element width', elementWidth, 'elementHeight', elementHeight);
    // console.log(element.style.left = (bodyWidth - elementWidth) /2 + 'px');
    // console.log(element.style.top = (bodyHeight - elementHeight) /2 + 'px');
}

function squareSize() {
    let matchToWidth = computer.offsetWidth;
    square.style.width = matchToWidth +'px';
    square.style.height = matchToWidth + 'px';
}