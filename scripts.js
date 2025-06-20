/**
 * File: scripts.js
 * Author: Cory Bateman     
 * Date: 06/20/2025
 * Description: Dynamically builds a simple webpage.
 */

// Initialize Sections
let head = document.head;
let body = document.body;

// Initialize and Append Stylesheet
let style = document.createElement('style');
style.innerText = `
    p {
        color: red;
        font-weight: bold;
        font-size: 20px;
        font-family: Arial, sans-serif;
        text-align: center;
    }
    button {
        border: 1px solid black;
        border-radius: 3px;
        font-size: 20px;
        font-family: Arial, sans-serif;
    }
    button:hover {
        background-color: lightgray;
        cursor: pointer;
    }
`;
head.appendChild(style);

// Initialize and Append Paragraph
let paragraph = document.createElement('p');
paragraph.innerText = 'Hello ';
body.appendChild(paragraph);

// Initialize and Append Button
let button = document.createElement('button');
button.innerText = 'Professor';
paragraph.appendChild(button);

// Handle Button Click
function delayedAlert() {
    setTimeout(function () {
        alert('This is Cory.');
    }, 1000);
}
button.addEventListener('click', delayedAlert);
    
