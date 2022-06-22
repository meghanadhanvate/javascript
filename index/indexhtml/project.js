function flipper() {
    const color = '#' + Math.random().toString(16).substring(9);
    document.getElementById('color').innerHTML = color;
    document.getElementById('top').style.backgroundColor = color;
}