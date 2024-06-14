// Define the hands array
const hands = ["rock", "paper", "scissors"];

// Define the getHand function
function getHand() {
    return hands[parseInt(Math.random()*10)%3];
}