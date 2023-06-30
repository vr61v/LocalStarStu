const element = document.querySelectorAll('li')

function calcFunc() {
  result = 0

  if(Boolean(document.getElementById("pro").checked)){ result += Number(document.getElementById("hours").value) * 800 }
  else{ result += Number(document.getElementById("hours").value) * 600 }

  if(Boolean(document.getElementById("mixing").checked)){ result += 3000 }
  if(Boolean(document.getElementById("design").checked)){ result += 2700 }
  if(Boolean(document.getElementById("mastering").checked)){ result += 1000 }
  if(Boolean(document.getElementById("ghostwriter").checked)){ result += 5000 }
  if(Boolean(document.getElementById("instrumental").checked)){ result += 3500 }
  if(Boolean(document.getElementById("songforkey").checked)){ result += 12000 }

  document.getElementById("result").value = result;
}

console.log(element)
for(let i = 0; i < element.length; i++){
  element[i].addEventListener('click', calcFunc)
}
