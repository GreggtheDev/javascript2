// Define the hands array
const hands = ["rock", "paper", "scissors"]; // This array holds the possible hands a player can have.

// Define the getHand function
function getHand() {
    return hands[parseInt(Math.random()*10)%3]; // This function returns a random hand from the hands array.
}

// Define player objects
const player1 = {
    name: 'Player 1', // The name of the player.
    getHand: getHand, // The function that gets the player's hand.
    wins: 0 // The number of wins the player has.
};

// The same structure is repeated for player2, player3, and player4.

// Define the playRound function
function playRound(player1, player2) {
    const hand1 = player1.getHand(); // Get player1's hand.
    const hand2 = player2.getHand(); // Get player2's hand.

    // Log the hands played
    console.log(player1.name + ' played ' + hand1);
    console.log(player2.name + ' played ' + hand2);

    // Determine the winner
    if (hand1 === hand2) {
        console.log("It's a tie!"); // If the hands are the same, it's a tie.
        return null;
    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'scissors' && hand2 === 'paper') ||
        (hand1 === 'paper' && hand2 === 'rock')
    ) {
        console.log(player1.name + ' wins!'); // If player1's hand beats player2's, player1 wins.
        player1.wins++;
        return player1;
    } else {
        console.log(player2.name + ' wins!'); // If player2's hand beats player1's, player2 wins.
        player2.wins++;
        return player2;
    }
}

// Define the playGame function
function playGame(player1, player2, playUntil) {
    while (player1.wins < playUntil && player2.wins < playUntil) {
        playRound(player1, player2); // Play rounds until one player has the required number of wins.
    }

    return player1.wins > player2.wins ? player1 : player2; // Return the player with the most wins.
}

// Define the playTournament function
function playTournament(player1, player2, player3, player4, playUntil) {
    const winner1 = playGame(player1, player2, playUntil); // Determine the winner of the first game.
    const winner2 = playGame(player3, player4, playUntil); // Determine the winner of the second game.

    const champion = playGame(winner1, winner2, playUntil); // Determine the champion by playing a game between the two winners.

    console.log(champion.name + " is the world champion"); // Log the name of the champion.
}

// Play a game to 3 wins
playGame(player1, player2, 3); // Start a game between player1 and player2, playing until one player has 3 wins.

// Play a tournament
playTournament(player1, player2, player3, player4, 3); // Start a tournament between the four players, playing until one player has 3 wins.

