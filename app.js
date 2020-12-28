const speedBox = document.querySelector('.word-box');


let stringScript = "Lillie stood on the weathered deck of the house she had loved for twenty years and imagined herself falling; tumbling over earth-toned rooftops, through lush pines and down to the rocky coastline below. She imagined the currents pulling her away from land, winds and water pushing her across the globe along ancient, unseen pathways, into the abyss."

//Clear timer if new rate is input 
function getInputValue(){
    let perSecondInterval = document.getElementById("wordsPM").value;
    let timeGap = Math.round(perSecondInterval / 60);
    timeGap = Math.round(1000 / timeGap);
    console.log("This many words per second: " + perSecondInterval);
    wordDisplay(timeGap);
}

//include grammatical characters 
//allow for puauses with grammar:
// var PauseTypes = {
//     'fullstop': 1.5,
//     'comma': 1,
//     'ellipsis': 3
//   }

function wordDisplay(time) {
    let script = stringScript.split(" ");
    console.log(script);
    script.forEach(function (el, index) {
        setTimeout(function () {
            speedBox.innerHTML = el;
            console.log(index);
            console.log(time)
        }, index * time);
    });
}
