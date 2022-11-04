// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      document.querySelector('input').value = string;
      string = eval(string);
    }
    else if(e.target.innerHTML == 'C'){
      document.querySelector('input').value = string;
      string = ""
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})