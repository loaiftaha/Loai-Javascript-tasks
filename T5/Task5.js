function test() {
    const numbers100 = new Array();
    for (let i = 0 ; i <= 100 ; i++)
        numbers100.push(i);
    
let text = "<table><tr>";
for (let i = 0; i < numbers100.length ; i++) {
    if (i % 11 == 0 && i != 0)
        text += "</tr><tr>"
  text += "<td>" + numbers100[i] + "</td>";
}
// summation of even indexed elements
let summation = 0;

 //here i changed i++ from the previoue code to i+=2 to do the trick of even numbers summation
for (let i = 0 ; i<numbers100.length ; i+=2)
    summation += numbers100[i];

// to make the summation cell take the rest of the row
let rest = 11 - (numbers100.length % 11);
text += "<td class='C1' colspan=" + rest + "> summation = " + summation + "</td></tr></table>";
document.body.innerHTML += text;
}
