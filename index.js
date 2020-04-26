var queen = [];
var y = 0,

    z = 0,

    x = 0;
var currentPosition = prompt("What is queen's Initial Position..");
var z = currentPosition[0];
var p = currentPosition[1];
if (z == "a" || z == "A") {
    y = 1;
}
else if (z == "b" || z == "B") {

    y = 2;
}

else if (z == "c" || z == "C") {

    y = 3;
}
else if (z == "d" || z == "D") {

    y = 4;

}
else if (z == "e" || z == "E") {

    y = 5;

}
else if (z == "f" || z == "F") {

    y = 6;

}

else if (z == "g" || z == "G") {

    y = 7;

}
else if (z == "h" || z == "H") {

    y = 8;

}

if (p == "1") {

    x = 1;

}
else if (p == "2") {

    x = 2;

}
else if (p == "3") {

    x = 3;

}
else if (p == "4") {

    x = 4;

}
else if (p == "5") {

    x = 5;

}
else if (p == "6") {

    x = 6;

}
else if (p == "7") {

    x = 7;

}
else if (p == "8") {

    x = 8;

}
var movements = prompt("Enter number of movements");

for (var i = 0; i < movements; i++) {

    queen[i] = prompt("Enter movement");

}

for (i = 0; i < movements; i++) {

    if (queen[i].length == 2) {

        if (queen[i][0] == "n" || queen[i][0] == "N") {

            if (queen[i][1] == "1") {

                x += 1;

            }

            else if (queen[i][1] == "2") {

                x += 2;

            }
            else if (queen[i][1] == "3") {

                x += 3;

            }
            else if (queen[i][1] == "4") {

                x += 4;

            }
            else if (queen[i][1] == "5") {

                x += 5;

            }
            else if (queen[i][1] == "6") {

                x += 6;

            }
            else if (queen[i][1] == "7") {

                x += 7;

            }
            else if (queen[i][1] == "8") {

                x += 8;

            }

        }

        else if (queen[i][0] == "e" || queen[i][0] == "E") {

            if (queen[i][1] == "1") {

                y += 1;

            }

            else if (queen[i][1] == "2") {

                y += 2;

            }

            else if (queen[i][1] == "3") {

                y += 3;

            }

            else if (queen[i][1] == "4") {

                y += 4;

            }

            else if (queen[i][1] == "5") {

                y += 5;

            }

            else if (queen[i][1] == "6") {

                y += 6;

            }

            else if (queen[i][1] == "7") {

                y += 7;

            }

            else if (queen[i][1] == "8") {

                y += 8;

            }

        }

        else if (queen[i][0] == "w" || queen[i][0] == "W") {

            if (queen[i][1] == "1") {

                y -= 1;

            }

            else if (queen[i][1] == "2") {

                y -= 2;

            }

            else if (queen[i][1] == "3") {

                y -= 3;

            }

            else if (queen[i][1] == "4") {

                y -= 4;

            }

            else if (queen[i][1] == "5") {

                y -= 5;

            }

            else if (queen[i][1] == "6") {

                y -= 6;

            }

            else if (queen[i][1] == "7") {

                y -= 7;



            }

            else if (queen[i][1] == "8") {

                y -= 8;

            }
        }

        else if (queen[i][0] == "s" || queen[i][0] == "S") {

            if (queen[i][1] == "1") {

                x -= 1;

            }

            else if (queen[i][1] == "2") {

                x -= 2;

            }

            else if (queen[i][1] == "3") {

                x -= 3;

            }

            else if (queen[i][1] == "4") {

                x -= 4;

            }

            else if (queen[i][1] == "5") {

                x -= 5;

            }

            else if (queen[i][1] == "6") {

                x -= 6;

            }

            else if (queen[i][1] == "7") {

                x -= 7;

            }

            else if (queen[i][1] == "8") {

                x -= 8;

            }

        }
    }
    else if (queen[i].length == 3) {

        if (

            (queen[i][0] == "n" || queen[i][0] == "N") &&

            (queen[i][1] == "e" || queen[i][1] == "E")

        ) {

            if (queen[i][2] == "1") {

                x += 1;

                y += 1;

            }

            else if (queen[i][2] == "2") {

                x += 2;

                y += 2;

            }

            else if (queen[i][2] == "3") {

                x += 3;

                y += 3;

            }

            else if (queen[i][2] == "4") {

                x += 4;

                y += 4;

            }

            else if (queen[i][2] == "5") {

                x += 5;

                y += 5;

            }

            else if (queen[i][2] == "6") {

                x += 6;

                y += 6;

            }

            else if (queen[i][2] == "7") {

                x += 7;

                y += 7;

            }

            else if (queen[i][2] == "8") {

                x += 8;

                y += 8;

            }

        }

        else if (

            (queen[i][0] == "n" || queen[i][0] == "N") &&

            (queen[i][1] == "w" || queen[i][1] == "W")

        ) {

            if (queen[i][2] == "1") {

                x -= 1;

                y += 1;

            }

            else if (queen[i][2] == "2") {

                x -= 2;

                y += 2;

            }

            else if (queen[i][2] == "3") {

                x -= 3;

                y += 3;

            }

            else if (queen[i][2] == "4") {

                x -= 4;

                y += 4;

            }

            else if (queen[i][2] == "5") {

                x -= 5;

                y += 5;

            }

            else if (queen[i][2] == "6") {

                x -= 6;

                y += 6;

            }

            else if (queen[i][2] == "7") {

                x -= 7;

                y += 7;

            }

            else if (queen[i][2] == "8") {

                x -= 8;

                y += 8;

            }

        }

        else if (

            (queen[i][0] == "s" || queen[i][0] == "S") &&

            (queen[i][1] == "w" || queen[i][1] == "W")

        ) {

            if (queen[i][2] == "1") {

                x -= 1;

                y -= 1;

            }

            else if (queen[i][2] == "2") {

                x -= 2;

                y -= 2;

            }

            else if (queen[i][2] == "3") {

                x -= 3;

                y -= 3;

            }

            else if (queen[i][2] == "4") {

                x -= 4;

                y -= 4;

            }

            else if (queen[i][2] == "5") {

                x -= 5;

                y -= 5;

            }

            else if (queen[i][2] == "6") {

                x -= 6;

                y -= 6;

            }

            else if (queen[i][2] == "7") {

                x -= 7;

                y -= 7;

            }

            else if (queen[i][2] == "8") {

                x -= 8;

                y -= 8;

            }

        }

        else if (

            (queen[i][0] == "s" || queen[i][0] == "S") &&

            (queen[i][1] == "e" || queen[i][1] == "E")

        ) {

            if (queen[i][2] == "1") {

                x += 1;

                y -= 1;

            }

            else if (queen[i][2] == "2") {

                x += 2;

                y -= 2;

            }

            else if (queen[i][2] == "3") {

                x += 3;

                y -= 3;

            }

            else if (queen[i][2] == "4") {

                x += 4;

                y -= 4;

            }

            else if (queen[i][2] == "5") {

                x += 5;

                y -= 5;

            }

            else if (queen[i][2] == "6") {

                x += 6;

                y -= 6;

            }

            else if (queen[i][2] == "7") {

                x += 7;

                y -= 7;

            }

            else if (queen[i][2] == "8") {

                x += 8;

                y -= 8;

            }

        }

    }

}

if (y == 1) {

    y = "A";

}

else if (y == 2) {

    y = "B";

}

else if (y == 3) {

    y = "C";

}

else if (y == 4) {

    y = "D";

}

else if (y == 5) {

    y = "E";

}

else if (y == 6) {

    y = "F";

} else if (y == 7) {

    y = "G";

} else if (y == 8) {

    y = "H";

}

console.log(y + x);