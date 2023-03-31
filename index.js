let player1 = Math.floor(1 + 6 * Math.random());
let player2 = Math.floor(1 + 6 * Math.random());

if (player1 == player2) {
    document.querySelector(".container h1").textContent = "Draw!";
}
else if (player1 > player2) {
    document.querySelector(".container h1").textContent = "Player 1 Wins 💸";
}
else {
    document.querySelector(".container h1").textContent = "💸 Player 2 Wins";
}

switch (player1) {
    case 1:
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
        break;
    default:
        break;
}

switch (player2) {
    case 1:
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
        break;
    default:
        break;
}