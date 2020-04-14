let inputList = document.getElementById('input-list')

function calculate() {
    let inputs = inputList.getElementsByTagName('input')
    console.log(inputs)
    let numbers = []
    for (let i = 0; i < inputs.length; i++) {
        let temp = parseInt(inputs[i].value)
        if (temp)
            numbers.push(temp)
    }
    
    numbers.sort((a, b) => a - b)
    console.log(numbers)
    document.getElementById('max').innerHTML = numbers[numbers.length-1]
    document.getElementById('min').innerHTML = numbers[0] 

    let sum = 0
    numbers.forEach((num, i) => {
        sum += num
    })

    document.getElementById('average').innerHTML = sum / numbers.length

}

function moreInputs() {
    for(let i = 0; i < 10; i++) {   
        let newInput = document.createElement('input')
        newInput.setAttribute('type', 'text') 
        inputList.appendChild(newInput)
    }
}

document.getElementById("submit").onclick = calculate
document.getElementById("more").onclick = moreInputs