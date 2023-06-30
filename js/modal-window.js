var modal_calc = document.getElementById("calc");
var button_calc = document.getElementById("button-calc");
var span_calc = document.getElementsByClassName("modal-calc__close")[0];


button_calc.onclick = function() {
  console.log(modal_calc)
  modal_calc.classList.add('modal-calc__open')
}
span_calc.onclick = function() {
  modal_calc.classList.remove('modal-calc__open')
}


var modal_rules = document.getElementById("rules");
var button_rules = document.getElementById("button-rules");
var span_rules = document.getElementsByClassName("modal-rules__close")[0];


button_rules.onclick = function() {
  console.log(modal_rules)
  modal_rules.classList.add('modal-rules__open')
}
span_rules.onclick = function() {
  modal_rules.classList.remove('modal-rules__open')
}



window.onclick = function(event) {
  if (event.target == modal_calc) {
    modal_calc.classList.remove('modal-calc__open')
  }
  if (event.target == modal_rules) {
    modal_rules.classList.remove('modal-rules__open')
  }
}
