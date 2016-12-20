/*var a =  +prompt("Enter number");
var b = +prompt("Enter number");
alert (a + b);
document.write(a + b);*/


/*var a = +prompt("Enter number");
if (a <= "100" && a >= "95") {
    console.log ("A");
}
else if (a <= "94" && a >= "85") {
    console.log("B");
}
else if (a <= "84" && a >= "75") {
    console.log("C");
}
else if (a <= "74" && a >= "65") {
    console.log("D");
}
else if (a <= "64" && a >= "60") {
    console.log("E");
}
else  {
    console.log("FX");
}*/
/*
var a = +prompt("Enter number");
var b = +prompt("Enter number");
var c = prompt("Enter options");

if (c == "+") {
    document.write(a + b);
}
else if (c == "-" ) {
    document.write(a - b);
}
else if (c == "/") {
    document.write(a / b);
}
else  {
    document.write(a * b);
}*/

function myFunction() {
    var x, a, x2, b, x3, c, x4, d, x5, e, x6, f, x7, g, x8, k, x9, l, x10, m, count_right_answers;


    x = document.getElementById("questions1").value;
    if ( x == 7 || x == "сім") {
        a = 1;
    } else {
        a = 0;
    }

    x2 = document.getElementById("questions2").value;
    if ( x2 == "весна") {
        b = 1;
    } else {
        b = 0;
    }

    x3 = document.getElementById("questions3").value;
    if ( x3 == 100 || x3 == "сто") {
        c = 1;
    } else {
        c = 0;
    }

    x4 = document.getElementById("questions4").value;
    if ( x4 == 7 || x4 == "сім") {
        d = 1;
    } else {
        d = 0;
    }

    x5 = document.getElementById("questions5").value;
    if ( x5 == "мед") {
        e = 1;
    } else {
        e = 0;
    }

    x6 = document.getElementById("questions6").value;
    if ( x6 == "день") {
        f = 1;
    } else {
        f = 0;
    }

    x7 = document.getElementById("questions7").value;
    if ( x7 == 200 || x7 == "двісті") {
        g = 1;
    } else {
        g = 0;
    }

    x8 = document.getElementById("questions8").value;
    if ( x8 == 28 ) {
        k = 1;
    } else {
        k = 0;
    }

    x9 = document.getElementById("questions9").value;
    if ( x9 == "Київ") {
        l = 1;
    } else {
        l = 0;
    }

    x10 = document.getElementById("questions10").value;
    if ( x10 == "Сонце") {
        m = 1;
    } else {
        m = 0;
    }
    count_right_answers = a + b + c + d + e + f + g + k + l + m;

    document.getElementById("demo").innerHTML = "Ви правильно відповіли на " + count_right_answers + " запитань.";
}