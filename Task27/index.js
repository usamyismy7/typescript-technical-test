function alienColorChecker(color) {
    if (color == "green") {
        console.log("Player just earned 5 points.");
    }
    else if (color == "yellow") {
        console.log("Player just earned 10 points.");
    }
    else if (color == "red") {
        console.log("Player just earned 15 points.");
    }
}
var alien_color = "green";
alienColorChecker(alien_color);
alien_color = "yellow";
alienColorChecker(alien_color);
alien_color = "red";
alienColorChecker(alien_color);
