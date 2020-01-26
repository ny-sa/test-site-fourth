let rand1 = Math.ceil(Math.random() * 6);
let rand2 = Math.ceil(Math.random() * 6);
document.querySelector('.img1').setAttribute('src', `images/dice${rand1}.png`);
document.querySelector('.img2').setAttribute('src', `images/dice${rand2}.png`);

if (rand1 === rand2) document.querySelector('h1').textContent = 'Draw!';
else (rand1 > rand2) ? document.querySelector('h1').textContent = '🚩Player 1 Wins!' :
document.querySelector('h1').textContent = 'Player 2 Wins!🚩';