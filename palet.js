'use strict';

// const testElement = 
// const testElement2 = document.getElementById('2')
// const testElement3 = document.getElementById('3')
// const testElement4 = document.getElementById('4')
// const testElement5 = document.getElementById('5')
// const testElement6 = document.getElementById('6')
// const testElement7 = document.getElementById('7')
const actionButton = document.getElementById('button')


const randomNr = () => Math.floor(Math.random() * 256)
let counter = 0;


const changeColor = () => {
    if (counter <= 6) {
        counter = counter + 1;
    } else {
        counter = 1;
    }
    // for (let i = 1; i < 8; i++) {
    document.getElementById(counter).style.backgroundColor = `rgb(${randomNr()},${randomNr()},${randomNr()})`;


    // }

    // testElement1.style.backgroundColor = `rgb(${randomNr()},${randomNr()},${randomNr()})`;
    // testElement2.style.backgroundColor = `rgb(${randomNr()},${randomNr()},${randomNr()})`;
    // testElement3.style.backgroundColor = `rgb(${randomNr()},${randomNr()},${randomNr()})`;
    // testElement4.style.backgroundColor = `rgb(${randomNr()},${randomNr()},${randomNr()})`;
    // testElement5.style.backgroundColor = `rgb(${randomNr()},${randomNr()},${randomNr()})`;
    // testElement6.style.backgroundColor = `rgb(${randomNr()},${randomNr()},${randomNr()})`;
    // testElement7.style.backgroundColor = `rgb(${randomNr()},${randomNr()},${randomNr()})`;
}


actionButton.onclick = changeColor

