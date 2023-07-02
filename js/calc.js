function checked(elementId){
  return Boolean(document.getElementById(elementId).checked)
}

function add(result, type, price, typeId, priceSum){
  sum += priceSum
  if(document.getElementById(`result-item-${typeId}`)){ return }
  result.innerHTML += 
  `<div class="modal-calc__result-item" id="result-item-${typeId}">
    <div class="modal-calc__result-item-work"> ${type} </div>
    <div class="modal-calc__result-item-price"> ${price} </div>
  </div>`
}

function calcFunc() {
  sum = 0
  hours = Number(document.getElementById("hours").value)
  result = document.getElementById("result")

  if(hours > 0){
    if(document.getElementById("result-item-hours")){
      document.getElementById("result-item-hours").remove()
    }
    if(checked("pro")){
      add(result, "Часы работы студии с Профи", `${hours} * 800`, "hours", hours * 800)
    }else{
      add(result, "Часы работы студии", `${hours} * 600`, "hours", hours * 600)
    }
  }else if(document.getElementById("result-item-hours")){
    document.getElementById("result-item-hours").remove() 
  }

  if(checked("mixing")){
    add(result, "Сведение", "от 3000", "mixing", 3000) 
  }
  else if(document.getElementById("result-item-mixing")){ 
    document.getElementById("result-item-mixing").remove() 
  }

  if(checked("design")){ 
    add(result, "Графический дизайн", "2700", "design", 2700) 
  }
  else if(document.getElementById("result-item-design")){ 
    document.getElementById("result-item-design").remove() 
  }

  if(checked("mastering")){ 
    add(result, "Технический монтаж / мастеринг", "1000", "mastering", 1000) 
  }
  else if(document.getElementById("result-item-mastering")){ 
    document.getElementById("result-item-mastering").remove() 
  }

  if(checked("ghostwriter")){ 
    add(result, "Гострайт / Написание текста", "5000", "ghostwriter", 5000) 
  }
  else if(document.getElementById("result-item-ghostwriter")){ 
    document.getElementById("result-item-ghostwriter").remove() 
  }

  if(checked("instrumental")){ 
    add(result, "Инструментал / Создание аранжировок", "от 3500", "instrumental", 3500) 
  }
  else if(document.getElementById("result-item-instrumental")){ 
    document.getElementById("result-item-instrumental").remove() 
  }

  if(checked("songforkey")){ 
    add(result, "Песня под ключ", "от 12000", "songforkey", 12000) 
  }
  else if(document.getElementById("result-item-songforkey")){ 
    document.getElementById("result-item-songforkey").remove() 
  }

  document.querySelector("div.modal-calc__result-sum").innerText = "Итого: " + sum
}

const element = document.querySelector('form.modal-calc__form > ul')
element.addEventListener('click', calcFunc)