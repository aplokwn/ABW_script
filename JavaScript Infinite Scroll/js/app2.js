let items

const bikesEl = document.querySelector('.bikes')
const loaderEl = document.querySelector('.loader')

async function load () {
  let url = 'https://api.npoint.io/fd08845d01c4506fe3fb'
  items = await (await fetch(url)).json()
  //console.log(items);

  try {
    items = await (await fetch(url)).json()
  } catch (e) {
    console.log('error')
  }



  items.forEach(p => {

    console.log(p)
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
  })






}

load()