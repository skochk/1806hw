let a;
let b;

document.querySelector('.firstI').addEventListener('input',function(){
 a = +document.querySelector('.firstI').value;
})

document.querySelector('.secondI').addEventListener('input',function(){
 b = +document.querySelector('.secondI').value;
})

let calculator = {
  sum: function(x,y){
    return x+y;
  },
  minus: function(x,y){
    return x-y;
  },
  mult: function(x,y){
    return x*y;
  }
};

document.querySelector('.sum').addEventListener('click', function(){
    
  document.querySelector('textarea').innerText = calculator.sum(a,b);
  document.querySelector('.firstI').value = calculator.sum(a,b);
  document.querySelector('.secondI').value = '';
})

document.querySelector('.minus').addEventListener('click', function(){
  // calculator.minus();
  document.querySelector('textarea').innerText = calculator.minus(a,b);
  document.querySelector('.firstI').value = calculator.minus(a,b);
  document.querySelector('.secondI').value = '';
})

document.querySelector('.mult').addEventListener('click', function(){
  // calculator.mult();
  document.querySelector('textarea').innerText = calculator.mult(a,b);
  document.querySelector('.firstI').value = calculator.mult(a,b);
  document.querySelector('.secondI').value = '';
})





