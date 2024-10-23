function calculate() {
    var CurrentY = document.getElementById(`CurrentYear`).value;
    var BirthY = document.getElementById(`BirthYear`).value;

    var age = parseInt(CurrentY) - parseInt(BirthY);
    document.getElementById('result').innerHTML = `the age is ${age} `;
}
