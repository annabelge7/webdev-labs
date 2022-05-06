

let pSize = 16; 
let headerSize = 32; 

const makeBigger = () => {
   pSize += 4;
   headerSize += 4;
   document.querySelector('p').style.fontSize = `${pSize}px`;
   document.querySelector('h1').style.fontSize = `${headerSize}px`; 
};

const makeSmaller = () => {
   pSize -= 4;
   headerSize -= 4;
   document.querySelector('p').style.fontSize = `${pSize}px`;
   document.querySelector('h1').style.fontSize = `${headerSize}px`; 
};

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);