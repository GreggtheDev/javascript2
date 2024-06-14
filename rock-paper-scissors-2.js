// Define the hands array
const hands = ["rock", "paper", "scissors"];

// Define the getHand function
function getHand() {
    return hands[parseInt(Math.random()*10)%3];
}

// Define two-player objects
const player1 = {
    name: 'Player 1',
    getHand: getHand,
    wins: 0
};

const player2 = {
    name: 'Player 2',
    getHand: getHand,
    wins: 0
};

// Define the playRound function
function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();
}

// Log the hands played
console.log(player1.name + ' played ' + hand1);
console.log(player2.name + ' played ' + hand2);