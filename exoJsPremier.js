let body = document.body;
let div = document.createElement("div");
div.id = "container";
let h1 = document.createElement("h1");
//h1.textContent = "The web’s most popular front-end template";
h1.textContent = document.createTextNode('The web’s most popular front-end template');
body.prepend(h1);
body.appendChild(h1);
