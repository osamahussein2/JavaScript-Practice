//'use strict';

console.log('Hi there!');

// Found out about the set timeout function at: https://stackoverflow.com/questions/18503001/node-js-console-gets-closed-immediately-after-i-execute-the-program-from-visual
setTimeout(function () {
    process.exit();
}, 5000);