//Speed reader
const speedBox = document.querySelector('.word-box');
const pauseChars = [',','.','!',';','...'];
//Word display box
const wordDisplayBox = document.querySelector('.word-container');
//Checkbox
const darkMode = document.querySelector('#darkMode')
const body = document.querySelector('body');

//Get the desired WPM rate
function getInputValue(){
    let perSecondInterval;
    perSecondInterval = document.getElementById("wordsPM").value;
    let timeGap = Math.round(perSecondInterval / 60);
    timeGap = Math.round(1000 / timeGap);
    console.log("This many words per second: " + perSecondInterval);
    wordDisplay(timeGap);
}

//Display chosen text in speed reader box
function wordDisplay(time) {
    let stringScript = document.getElementById("insertedText").value;
    console.log(stringScript);
    let script = stringScript.split(" ");
    console.log(script);
    script.forEach(function (el, index) {
        setTimeout(function () {
            speedBox.innerHTML = el;
            //Create pause for grammar!!
        }, index * time);
    });
}

//buttons for changing font size and font type
function increaseFontSize(){
    let style = window.getComputedStyle(wordDisplayBox).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    console.log("The current font size is: " + fontSize);
    wordDisplayBox.style.fontSize = (fontSize +1) + "px";
}

function reduceFontSize(){
    let style = window.getComputedStyle(wordDisplayBox).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    console.log("The current font size is: " + fontSize);
    wordDisplayBox.style.fontSize = (fontSize -1) + "px";
}



// buttons for changing font style
function changeFontToSerif(){
    let fontStyle = window.getComputedStyle(wordDisplayBox).getPropertyValue('font-family');
    console.log("The current font style is: " + fontStyle);
    wordDisplayBox.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
}

function changeFontToSansSerif(){
    let fontStyle = window.getComputedStyle(wordDisplayBox).getPropertyValue('font-family');
    console.log("The current font style is: " + fontStyle);
    wordDisplayBox.style.fontFamily = "'Times New Roman', Times, serif"
}

function darkModeSwitch() {
    if(darkMode.checked == true){
        console.log("Dark mode enabled");
        body.style.backgroundColor = "#393e46";
        wordDisplayBox.style.backgroundColor = "black";
        wordDisplayBox.style.color = "white";
        
    } else {
        body.style.backgroundColor = "white";
        wordDisplayBox.style.backgroundColor = "#fcfadf";
        wordDisplayBox.style.color = "black";
    }
}