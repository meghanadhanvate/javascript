let cal = (num) => {
    console.log("you are dump", num);
};
let gal = (callback) => {
    let name = 45;
    callback(name);
}
gal(cal);