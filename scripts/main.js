let calculator = {
  firstValue: '',
  secondValue: '',
  sum: function(){
    return this.firstValue + this.secondValue;
  },
  minus: function(){
    return this.firstValue - this.secondValue;
  },
  mult: function(){
    return this.firstValue * this.secondValue;
  }
};

document.querySelector('.firstI').addEventListener('input',function(){
  calculator.firstValue = +document.querySelector('.firstI').value;
})

document.querySelector('.secondI').addEventListener('input',function(){
  calculator.secondValue = +document.querySelector('.secondI').value;
})


document.querySelector('.sum').addEventListener('click', function(){
    
  document.querySelector('textarea').innerText = calculator.sum();
  document.querySelector('.firstI').value = calculator.sum();
  document.querySelector('.secondI').value = '';
})

document.querySelector('.minus').addEventListener('click', function(){
  // calculator.minus();
  document.querySelector('textarea').innerText = calculator.minus();
  document.querySelector('.firstI').value = calculator.minus();
  document.querySelector('.secondI').value = '';
})

document.querySelector('.mult').addEventListener('click', function(){
  // calculator.mult();
  document.querySelector('textarea').innerText = calculator.mult();
  document.querySelector('.firstI').value = calculator.mult();
  document.querySelector('.secondI').value = '';
})





