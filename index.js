const app = document.getElementById("typewriter");

const typewriter = new Typewriter(app, {
    loop:true,
    delay:75
});

typewriter
    .typeString("La capital del sol")
    .pauseFor(200)
    .start();

var x = prompt("Digite un numero");
var y = prompt("Digite otro numero");

x = parseInt(x);
y = parseInt(y);

alert(x+y)