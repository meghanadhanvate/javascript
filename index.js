const x = document.forms["intro"];
let txt = "";
for(let i = 0; i < x.length; i++){
    txt = txt + x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = txt;