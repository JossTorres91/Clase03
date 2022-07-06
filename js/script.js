let name = "Mango";
console.log(name.split(""));

let frase = "JavaScript es interesante";
console.log(frase.split(" "));

const email = "jj.mota.t@me.com";
const divEmail=email.split("@");

const server = divEmail[1];
const user = divEmail[0];
console.log(user);
console.log(server);
console.log(divEmail)

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.indexOf("Mango"));