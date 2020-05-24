//Variable declarations
let dice1;
let dice2;
let dice1Src;
let dice2Src;

//Function triggered on button click
function clicked() {

    // The user clicks the button and the title is replaced to tell the user that the dice are rolling.
    document.querySelector("h1").innerHTML = "Rolling...🎲";

    //Call to function roll(), using a time delay on each iteration to show a few dice before final result.
    for (let i = 500; i <= 1500; i += 500) {
        setTimeout(roll, i);
    }

    //Call to function winner(), delayed a pair of seconds
    setTimeout(winner, 2000);

}

function roll() {

    // First Dice
    dice1 = Math.floor(Math.random() * 6) + 1;

    dice1Src = "assets/" + dice1 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", dice1Src);

    document.querySelectorAll("img")[0].setAttribute("alt", dice1);

    //Second dice
    dice2 = Math.floor(Math.random() * 6) + 1;

    dice2Src = "assets/" + dice2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", dice2Src);

    document.querySelectorAll("img")[1].setAttribute("alt", dice2);

}

//Changes title to display winner
function winner() {

    if(dice1 > dice2) {
        document.querySelector("h1").innerHTML = "&#128681; Player 1 Wins!"
    } else if (dice1 < dice2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681;"
    } else {
        document.querySelector("h1").innerHTML = "&#128681; Draw! &#128681;";
    }
}
