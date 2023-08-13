let peopleCount = 0

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    peopleCount++
    countEl.textContent = peopleCount
}

function save() {
    let count = peopleCount + " - "
    saveEl.textContent += count
    peopleCount = 0
    countEl.textContent = peopleCount
}







