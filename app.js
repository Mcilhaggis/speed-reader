const speedBox = document.querySelector('.word-box');
let interval = 1000;

let stringScript = "Lillie stood on the weathered deck of the house she had loved for twenty years and imagined herself falling; tumbling over earth-toned rooftops, through lush pines and down to the rocky coastline below. She imagined the currents pulling her away from land, winds and water pushing her across the globe along ancient, unseen pathways, into the abyss."


function wordDisplay() {
    let script = stringScript.split(" ");
    console.log(script);
    script.forEach(function (el, index) {
        setTimeout(function () {
            speedBox.innerHTML = el;
        }, index * interval);
    });
}



wordDisplay();