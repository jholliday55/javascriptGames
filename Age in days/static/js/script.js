function ageInDays() {
    var birthyear= prompt('what is your birth year');
    var ageInDayss = (2020 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer= document.createTextNode('You are ' + ageInDayss + " days old");
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}

function reset () {
    document.getElementById('ageInDays').remove();
}

