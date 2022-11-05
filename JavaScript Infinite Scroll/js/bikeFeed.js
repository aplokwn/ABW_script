let items

async function load () {
  let url = 'https://api.npoint.io/fd08845d01c4506fe3fb'
  items = await (await fetch(url)).json()
  //console.log(items);

  try {
    items = await (await fetch(url)).json()
  } catch (e) {
    console.log('error')
  }

  let content = ''

  items.forEach(p => {

    console.log(p)

    content += `
    <div class="content">
        <img src="https://pedegoelectricbikes.ca/wp-content/uploads/2022/07/Pedego-Avenue-Step-Thru-in-Ocean-Teal.jpg">
        <h3>Bike Information</h3>
        <p class="bikeInfo">Bike Make: ${p.maker}</p>
        <p class="bikeInfo">Bike Model: ${p.model}</p>
        <h6>$${p.price}</h6>

        <button class="buy">Bike Index: ${p.bikeId}</button>
      </div>
  `
  })
  document.querySelector("#bike").innerHTML = content

}

load()