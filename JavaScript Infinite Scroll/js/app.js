let items
const url = 'https://api.npoint.io/fd08845d01c4506fe3fb'

const bikesEl = document.querySelector('.bikes')
const loaderEl = document.querySelector('.loader')

function loadBike (bikeItem = 9) {
  let i = 0
  while (i < bikeItem) {
    const bikeEl = document.createElement('div')
    bikeEl.classList.add('content')
    bikeEl.innerHTML = `
            <span>Bike Make: ${p.maker}</span>
            <h3>Bike Information</h3>
            <p class="bikeInfo">Bike Make: ${p.maker}</p>
            <p class="bikeInfo">Bike Model: ${p.model}</p>
            <footer>$${p.price}</footer>
        `
    bikesEl.appendChild(bikeEl)
    i++
  }
}

loadBike()