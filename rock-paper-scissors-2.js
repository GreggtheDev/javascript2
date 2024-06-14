// Define the hands array
const hands = ["rock", "paper", "scissors"];

// Define the getHand function
function getHand() {
    return hands[parseInt(Math.random()*10)%3];
}

// Define player objects
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

const player3 = {
    name: 'Player 3',
    getHand: getHand,
    wins: 0
};

const player4 = {
    name: 'Player 4',
    getHand: getHand,
    wins: 0
};

// Define the playRound function
function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    // Log the hands played
    console.log(player1.name + ' played ' + hand1);
    console.log(player2.name + ' played ' + hand2);

    // Determine the winner
    if (hand1 === hand2) {
        console.log("It's a tie!");
        return null;
    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'scissors' && hand2 === 'paper') ||
        (hand1 === 'paper' && hand2 === 'rock')
    ) {
        console.log(player1.name + ' wins!');
        player1.wins++;
        return player1;
    } else {
        console.log(player2.name + ' wins!');
        player2.wins++;
        return player2;
    }
}

// Define the playGame function
function playGame(player1, player2, playUntil) {
    while (player1.wins < playUntil && player2.wins < playUntil) {
        playRound(player1, player2);
    }

    return player1.wins > player2.wins ? player1 : player2;
}

// Define the playTournament function
function playTournament(player1, player2, player3, player4, playUntil) {
    const winner1 = playGame(player1, player2, playUntil);
    const winner2 = playGame(player3, player4, playUntil);

    const champion = playGame(winner1, winner2, playUntil);

    console.log(champion.name + " is the world champion");
}

// Play a game to 3 wins
playGame(player1, player2, 3);

// Play a tournament
playTournament(player1, player2, player3, player4, 3);
