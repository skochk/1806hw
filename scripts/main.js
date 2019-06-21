// // DOM navigation


let waitClick = document.querySelector('.print');


function numbering(){
  let quantityItems = document.querySelectorAll(".number");
  for( let i = 0; i < quantityItems.length; i++){
    quantityItems[i].innerText = i + 1;
  }
}

waitClick.addEventListener('click', function(){


  let listElement = document.querySelector('.newItem');


  let listItem = document.createElement('div');
  listItem.className = 'parent';
  let content = document.createElement('div');
  let button = document.createElement('button');
  let numb = document.createElement('div');
  numb.className = 'number';
  button.innerHTML = "-";
  content.innerHTML =  document.querySelector('input').value;
  let documentFragment = document.createDocumentFragment();
  documentFragment.appendChild(listItem);
  listItem.appendChild(numb);
  listItem.appendChild(content);
  listItem.appendChild(button);
  listElement.appendChild(documentFragment);


  numbering();
  button.addEventListener('click', function(){
    listItem.remove();
    numbering();  
  })

})

