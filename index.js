let counter = 0;

const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');


incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.textContent = counter;
});

decrementBtn.addEventListener('click', () => {
   
    if (counter > 0) {
        counter--;
        counterValue.textContent = counter;
    } else {
        alert('can not decrement Negative value');
    }
     
      const randomColor = rgba(`${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.random().toFixed(2)}`);
      decrementBtn.style.backgroundColor = randomColor; 
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    counterValue.textContent = counter;
});