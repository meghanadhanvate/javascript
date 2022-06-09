function validNumber() {
    const x = document.getElementById("numb").value;
    let txt ;
    if(isNaN(x) || x < 1 || x > 10){
        txt = "Invalid number";
    }else{
        txt = "Valid input"
    }
    document.getElementById("demo").innerHTML = txt;
}